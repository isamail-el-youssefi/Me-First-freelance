import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';
import nodemailer from 'nodemailer';

const dataFilePath = path.join(process.cwd(), 'data', 'bookings.json');

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const body = await request.json();
    const { tripId, tripName, date, fullName, phoneNumber } = body;

    if (!tripId || !date || !fullName || !phoneNumber) {
      return NextResponse.json({ 
        error: 'Trip ID, date, full name, and phone number are required' 
      }, { status: 400 });
    }

    // Ensure the data directory exists
    const dataDir = path.join(process.cwd(), 'data');
    try {
      await fs.access(dataDir);
    } catch {
      await fs.mkdir(dataDir, { recursive: true });
      await fs.writeFile(dataFilePath, JSON.stringify({}));
    }

    // Read the bookings file
    let bookings;
    try {
      const data = await fs.readFile(dataFilePath, 'utf8');
      bookings = JSON.parse(data);
    } catch (error) {
      bookings = {};
    }

    // Add the new booking
    if (!bookings[tripId]) {
      bookings[tripId] = [];
    }
    
    // Check if date is already booked
    const isDateBooked = bookings[tripId].some(booking => 
      booking.date === date || new Date(booking.date).toDateString() === new Date(date).toDateString()
    );
    
    if (isDateBooked) {
      return NextResponse.json({ error: 'This date is already booked' }, { status: 400 });
    }
    
    // Add the booking with customer information
    bookings[tripId].push({
      date,
      fullName,
      phoneNumber,
      bookingTime: new Date().toISOString()
    });

    // Save the updated bookings
    await fs.writeFile(dataFilePath, JSON.stringify(bookings, null, 2));

    // Send email notification
    await sendEmailNotification(tripId, tripName, date, fullName, phoneNumber);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error booking date:', error);
    return NextResponse.json({ error: 'Failed to book date' }, { status: 500 });
  }
}

async function sendEmailNotification(
  tripId: string, 
  tripName: string, 
  date: string, 
  fullName: string, 
  phoneNumber: string
) {
  // Create a nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail', // or your preferred email service
    auth: {
      user: process.env.EMAIL_USER, // set these in your .env file
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  // Format the date for better readability
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  // Email content
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.NOTIFICATION_EMAIL, // your email address to receive notifications
    subject: `New Booking: ${tripName}`,
    html: `
      <h1>New Trip Booking</h1>
      <p><strong>Trip:</strong> ${tripName}</p>
      <p><strong>Trip ID:</strong> ${tripId}</p>
      <p><strong>Date:</strong> ${formattedDate}</p>
      <p><strong>Customer:</strong> ${fullName}</p>
      <p><strong>Phone Number:</strong> ${phoneNumber}</p>
      <p>Please contact the customer to confirm the details.</p>
    `,
  };

  // Send the email
  await transporter.sendMail(mailOptions);
}