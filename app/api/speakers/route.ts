// app/api/headphones/route.ts
import { NextResponse } from 'next/server';
import sql from '@/app/lib/db'; // Adjust path as needed

export async function GET() {
  try {
    const result = await sql`
      SELECT * FROM speakers
    `;
    return NextResponse.json(result);
  } catch (error) {
    console.error('Error querying the database:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
