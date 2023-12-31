import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

export async function GET() {
  const prisma = new PrismaClient();

  const auctions = await prisma.auction.findMany({
    include: {
      bid: true,
    },
  });

  return NextResponse.json(auctions);
}
