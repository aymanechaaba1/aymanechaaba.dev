import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  let res = NextResponse.next();

  let { pathname } = request.nextUrl;

  if (pathname.match(/^\/blog\/[a-zA-Z0-9_-]+$/)) {
    // res.cookies.set('viewed', 'true');
  }
  return res;
}

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
