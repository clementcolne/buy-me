import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

export async function GET() {
  const prisma = new PrismaClient();

  const bids = await prisma.bid.findMany();

  return NextResponse.json(bids);
}
