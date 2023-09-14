import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';

export async function GET(request: NextRequest) {
  const path = request.nextUrl.searchParams.get('path');

  if (path) {
    // revalidatePath(path);

    revalidatePath('/api/collection');
    revalidatePath('/api/album/[id]');
    return NextResponse.json({
      revalidated: true,
      pathRevalidated: path,
      now: Date.now()
    });
  }

  return NextResponse.json({
    revalidated: false,
    now: Date.now(),
    message: 'Missing path to revalidate'
  });
}
