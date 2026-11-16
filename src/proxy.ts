import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const pathSegments = pathname.split('/').filter(Boolean);
  const legacyServicePath =
    pathSegments[0] === 'services' &&
    pathSegments[1] !== undefined &&
    pathSegments[1] !== 'ai-automation';

  if (pathname === '/ai-automation' || legacyServicePath) {
    const destination = request.nextUrl.clone();
    destination.pathname = '/services/ai-automation';
    return NextResponse.redirect(destination, 301);
  }

  // Only protect /admin routes
  if (pathname.startsWith('/admin')) {
    const sessionCookie = request.cookies.get('gt_admin_session')?.value;
    const isLoginPage = pathname === '/admin/login';

    // If authenticated user visits login, redirect to dashboard
    if (isLoginPage && sessionCookie) {
      return NextResponse.redirect(new URL('/admin/dashboard', request.url));
    }

    // If unauthenticated user visits any protected admin route, redirect to login
    if (!isLoginPage && !sessionCookie) {
      const loginUrl = new URL('/admin/login', request.url);
      loginUrl.searchParams.set('redirect', pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/admin/:path*',
    '/ai-automation',
    '/services/:path*',
  ],
};
