import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function proxy(request: NextRequest) {
  const token = request.cookies.get('token')
  const { pathname, searchParams } = request.nextUrl

  if (token && pathname === '/') {
    return NextResponse.redirect(
      new URL('/dashboard?page=1&limit=10', request.url),
    )
  }
  if (token && pathname === '/dashboard') {
    const page = searchParams.get('page')
    const limit = searchParams.get('limit')

    if (!page || !limit) {
      const url = request.nextUrl.clone()
      url.searchParams.set('page', page ?? '1')
      url.searchParams.set('limit', limit ?? '10')

      return NextResponse.redirect(url)
    }
  }
  if (!token && pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/', '/dashboard/:path*'],
}
