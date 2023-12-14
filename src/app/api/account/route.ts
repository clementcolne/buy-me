import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

export async function GET() {
  const prisma = new PrismaClient();

  const accounts = await prisma.account.findMany();

  return NextResponse.json(accounts);
}
