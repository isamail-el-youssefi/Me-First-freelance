import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { z } from 'zod';

// Zod Schema for input validation
const ReviewSchema = z.object({
  fullName: z.string().trim().min(1, "Name is required"),
  rating: z.number().min(1).max(5).default(5),
  comment: z.string().trim().min(1, "Comment is required"),
  tripId: z.string().trim().min(1, "Trip ID is required")
});

// Define the Review interface and export it
export interface Review {
  id: string;
  fullName: string;
  rating: number;
  comment: string;
  tripId: string;
  date: string;
  createdAt: Date;
}

// GET handler - Return all reviews or filtered by tripId
export async function GET(request: NextRequest) {
  try {
    console.log('GET request received');
    
    // Get the tripId from the URL query parameters
    const url = new URL(request.url);
    const tripId = url.searchParams.get('tripId');
    
    console.log('Filtering by tripId:', tripId);
    
    // Query the database with or without a filter
    const reviews = await prisma.review.findMany({
      where: tripId ? { tripId } : undefined,
      orderBy: { createdAt: 'desc' }
    });
    
    console.log('Reviews found:', reviews.length);
    
    return NextResponse.json({ reviews });
  } catch (error) {
    console.error('Error in GET request:', error);
    
    return new NextResponse(
      JSON.stringify({
        error: 'Failed to fetch reviews',
        details: error instanceof Error ? error.message : 'Unknown error',
        stack: error instanceof Error ? error.stack : null
      }),
      { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
}

// POST handler - Add a new review
export async function POST(request: NextRequest) {
  try {
    console.log('POST request received');
    
    const data = await request.json();
    
    console.log('Received review data:', data);
    
    // Validate input
    const validatedData = ReviewSchema.parse({
      fullName: data.fullName,
      rating: data.rating,
      comment: data.comment,
      tripId: data.tripId
    });
    
    // Create a new review in the database
    const newReview = await prisma.review.create({
      data: {
        fullName: validatedData.fullName,
        rating: validatedData.rating,
        comment: validatedData.comment,
        tripId: validatedData.tripId,
        date: new Date().toLocaleDateString()
      }
    });
    
    console.log('New review created:', newReview);
    
    return NextResponse.json({ success: true, review: newReview });
  } catch (error) {
    console.error('Error in POST request:', error);
    
    // Handle Zod validation errors
    if (error instanceof z.ZodError) {
      return new NextResponse(
        JSON.stringify({
          error: 'Invalid input',
          details: error.errors
        }),
        { 
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }
    
    // More detailed error response
    return new NextResponse(
      JSON.stringify({
        error: 'Failed to process review',
        details: error instanceof Error ? error.message : 'Unknown error',
        stack: error instanceof Error ? error.stack : null
      }),
      { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
}