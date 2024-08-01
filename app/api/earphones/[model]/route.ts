// app/api/earphones/[model]/route.ts

import { NextResponse } from 'next/server';
import sql from '@/app/lib/db'; // Adjust path as needed

export async function GET(req: Request, { params }: { params: { model: string } }) {
  const { model } = params;
  try {
    const result = await sql`
      SELECT * FROM earphones WHERE model = ${model}
    `;
    if (result.rows.length === 0) {
      return NextResponse.json({ error: 'Not Found' }, { status: 404 });
    }
    return NextResponse.json(result.rows[0]);
  } catch (error) {
    console.error('Error querying the database:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
