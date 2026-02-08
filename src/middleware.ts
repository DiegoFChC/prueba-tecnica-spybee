import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')
  const { pathname } = request.nextUrl

  console.log('validando', pathname)
  if (token && pathname === '/') {
    return NextResponse.redirect(
      new URL('/dashboard?page=1&limit=10', request.url),
    )
  }
  if (!token && pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/', '/dashboard/:path*'],
}
