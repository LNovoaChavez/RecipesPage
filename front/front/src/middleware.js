import { NextResponse } from 'next/server';

export function middleware(request) {
  const userSession = request.cookies.get('userSession')?.value;

  const isAuthRoute = ['/login', '/register'].includes(request.nextUrl.pathname);

  if (userSession && isAuthRoute) {
    return NextResponse.redirect(new URL('/profile', request.url));
  }

  if (!userSession && !isAuthRoute) {
    const response = NextResponse.redirect(new URL('/login', request.url));
    response.cookies.set('userSession', '', { maxAge: 0 });
    response.headers.set('Clear-Site-Data', '"storage"');  
    return response;
  }

  if (userSession) {
    const expires = new Date();
    expires.setMonth(expires.getMonth() + 3);
    const response = NextResponse.next();
    response.cookies.set('userSession', userSession, { expires });
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/profile', '/login', '/register'], 
};
