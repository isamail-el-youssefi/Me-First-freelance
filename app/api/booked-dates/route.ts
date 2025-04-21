import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

// This will store booked dates in a JSON file for simplicity
// In production, you'd use a database
const dataFilePath = path.join(process.cwd(), 'data', 'bookings.json');

export async function GET(request: NextRequest) {
  try {
    // Ensure the data directory exists
    const dataDir = path.join(process.cwd(), 'data');
    try {
      await fs.access(dataDir);
    } catch {
      await fs.mkdir(dataDir, { recursive: true });
      await fs.writeFile(dataFilePath, JSON.stringify({}));
    }

    // Get the tripId from query params
    const { searchParams } = new URL(request.url);
    const tripId = searchParams.get('tripId');

    if (!tripId) {
      return NextResponse.json({ error: 'Trip ID is required' }, { status: 400 });
    }

    // Read the bookings file
    let bookings;
    try {
      const data = await fs.readFile(dataFilePath, 'utf8');
      bookings = JSON.parse(data);
    } catch (error) {
      bookings = {};
    }

    // Return the booked dates for this trip
    const tripBookings = bookings[tripId] || [];
    
    // Extract only the dates for the calendar
    const bookedDates = tripBookings.map(booking => 
      typeof booking === 'string' ? booking : booking.date
    );
    
    return NextResponse.json({ dates: bookedDates });
  } catch (error) {
    console.error('Error fetching booked dates:', error);
    return NextResponse.json({ error: 'Failed to fetch booked dates' }, { status: 500 });
  }
}