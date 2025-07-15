// /app/api/keep-alive/route.ts
import prisma from '@/lib/prisma';

export async function GET() {
  try {
    const count = await prisma.review.count();
    return Response.json({ status: 'alive', count });
  } catch (error) {
    console.error('Keep-alive error:', error);
    return Response.json({ status: 'error', error: String(error) }, { status: 500 });
  }
}