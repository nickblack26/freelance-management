import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
import { NextResponse, NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
	const res = NextResponse.next();
	const supabase = createMiddlewareClient<Database>({ req, res });

	const {
		data: { session },
	} = await supabase.auth.getSession();

	if (!session) return NextResponse.redirect(new URL('/login', req.url));

	// if user is signed in and the current path is / redirect the user to /account
	if (session?.user) {
		return NextResponse.redirect(new URL(`/${session.user.user_metadata.organizations[0]}`, req.url));
	}

	// if user is not signed in and the current path is not / redirect the user to /
	if (!session?.user && req.nextUrl.pathname !== '/login') {
		await supabase.auth.signOut();
		return NextResponse.redirect(new URL('/login', req.url));
	}

	return res;
}

export const config = {
	matcher: ['/', '/[org_id]/:path*'],
};
