import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const token = request.cookies.get('authToken') || localStorage.getItem('authToken');
    if (!token && request.nextUrl.pathname.startsWith('/')) {
        return NextResponse.redirect(new URL('/login', request.url));
    }
    return NextResponse.next();
}

export const config = {
    matcher: ['/:path*'],
};
