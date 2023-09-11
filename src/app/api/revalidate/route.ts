import { revalidateTag } from 'next/cache';
import Error from 'next/error';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest, response: NextResponse) {
  try {
    const tag = request.nextUrl.searchParams.get('tag');
    if (!tag) {
      return NextResponse.json(
        { message: 'Missing tag param' },
        { status: 400 }
      );
    }

    revalidateTag(tag);

    return NextResponse.json({ revalidated: true, now: Date.now() });
  } catch (error: Error | any) {
    NextResponse.json({ message: error.message }, { status: 500 });
  }
}
