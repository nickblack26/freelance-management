import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
import { createClient } from '@/utils/supabase/server';

export async function GET(request: NextRequest) {
	const supabase = createClient();
	const searchParams = request.nextUrl.searchParams;
	const code = searchParams.get('code') as string;

	console.log(code);

	let fetchUrl =
		'https://github.com/login/oauth/access_token' +
		'?' +
		new URLSearchParams({
			client_id: process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID!,
			client_secret: process.env.NEXT_PUBLIC_GITHUB_CLIENT_SECRET!,
			code,
			redirect_uri: 'http://localhost:3000/api/integrate/github',
		});

	try {
		const response = await fetch(fetchUrl, { method: 'POST', headers: { Accept: 'application/json' } });

		console.log(response.status);

		console.log('RESPONSE', response);

		const data = await response.json();

		console.log('response.json', data);

		const { data: userData, error } = await supabase.auth.updateUser({
			data: { github: { ...data } },
		});

		console.log(userData, error);

		return NextResponse.json(userData);
	} catch (error) {
		return NextResponse.error();
	}
}
