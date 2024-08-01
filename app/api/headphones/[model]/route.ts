// app/api/headphones/[model]/route.ts

import { NextResponse } from 'next/server';
import sql from '@/app/lib/db'; // Adjust path as needed

export async function GET(req: Request, { params }: { params: { model: string } }) {
  const { model } = params;
  try {
    const result = await sql`
      SELECT * FROM headphones WHERE model = ${model}
    `;
    if (result.rows.length === 0) {
      return NextResponse.json({ error: 'Not Found' }, { status: 404 });
    }

    const response = NextResponse.json(result.rows[0]);

    // Set CORS headers
    response.headers.set('Access-Control-Allow-Origin', '*'); // Allow requests from any origin
    response.headers.set('Access-Control-Allow-Methods', 'GET, OPTIONS');
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type');
    
    return response;
  } catch (error) {
    console.error('Error querying the database:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
