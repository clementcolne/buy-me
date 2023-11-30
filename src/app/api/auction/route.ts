import { NextResponse } from 'next/server';

import { sql } from '@vercel/postgres';

export async function GET() {
  const { rows, fields } = await sql`SELECT * FROM "user"`;
  return NextResponse.json(rows);

  const res = {
    title: 'Ingénieur logiciel full stack',
    startTime: Date.now(),
    currentBid: 37500,
    resume: [
      {
        date: 'January, 2020',
        description: 'Graduate from Master, Software Engineering',
      },
      {
        date: 'January, 2020',
        description: 'Software Engineer Intern, Tadaweb',
      },
      {
        date: 'September, 2020',
        description: 'Junior Software Engineer, Tadaweb',
      },
      {
        date: 'June, 2023',
        description: 'Senior Software Engineer, Tadaweb',
      },
    ],
  };
  return NextResponse.json(res);
}
