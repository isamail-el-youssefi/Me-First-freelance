import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// Define the path to the reviews.json file
const reviewsFilePath = path.join(process.cwd(), 'data', 'reviews.json');

// Define the review type
export interface Review {
  id: string;
  tripId: string;
  fullName: string;
  rating: number;
  comment: string;
  date: string;
}

// Function to read reviews from the JSON file
function getReviews(): { reviews: Review[] } {
  try {
    const fileData = fs.readFileSync(reviewsFilePath, 'utf8');
    return JSON.parse(fileData);
  } catch (error) {
    // If file doesn't exist or is corrupted, return empty reviews array
    return { reviews: [] };
  }
}

// Function to write reviews to the JSON file
function saveReviews(data: { reviews: Review[] }): void {
  try {
    fs.writeFileSync(reviewsFilePath, JSON.stringify(data, null, 2));
  } catch (error) {
    console.error('Error saving reviews:', error);
  }
}

// GET handler - Return all reviews or filtered by tripId
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const tripId = searchParams.get('tripId');
  
  const reviewsData = getReviews();
  
  // If tripId is provided, filter reviews for that trip
  //if (tripId) {
  //  const filteredReviews = reviewsData.reviews.filter(review => review.tripId === tripId);
  //  return NextResponse.json({ reviews: filteredReviews });
  //}
  
  // Return all reviews
  return NextResponse.json(reviewsData);
}

// POST handler - Add a new review
export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    // Validate required fields
    console.log(data)
    if (!data.fullName || !data.comment) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }
    
    // Create a new review object
    const newReview: Review = {
      id: Date.now().toString(), // Generate a unique ID
      tripId: data.tripId,
      fullName: data.fullName,
      rating: data.rating || 5,
      comment: data.comment,
      date: new Date().toLocaleDateString(),
    };
    
    // Get existing reviews
    const reviewsData = getReviews();
    
    // Add new review
    reviewsData.reviews.push(newReview);
    
    // Save updated reviews
    saveReviews(reviewsData);
    
    return NextResponse.json({ success: true, review: newReview });
  } catch (error) {
    console.error('Error processing review:', error);
    return NextResponse.json(
      { error: 'Failed to process review' },
      { status: 500 }
    );
  }
}