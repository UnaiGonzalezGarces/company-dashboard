import { db } from '@/lib/db';
import { auth } from '@clerk/nextjs';
import { NextResponse } from 'next/server';

export async function POST(
  req: Request,
  { params }: { params: { companyId: string } }
) {
  try {
    const { userId } = auth();
    const { companyId } = params;
    const data = await req.json();

    if (!userId) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const company = await db.company.findUnique({
      where: {
        id: companyId,
        userId,
      },
    });

    if (!company) {
      return new NextResponse('Company Not Found', { status: 404 });
    }

    const contact = await db.contact.create({
      data: {
        companyId: params.companyId,
        ...data,
      },
    });

    return NextResponse.json(contact);
  } catch (error) {
    console.log('[CONTACT]', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}
