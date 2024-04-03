import { NextResponse } from 'next/server';
import { type NextRequest } from 'next/server';
import { createClient } from '@/utils/supabase/server';

export async function GET(request: NextRequest) {
	const supabase = createClient();
	const searchParams = request.nextUrl.searchParams;
	const code = searchParams.get('code') as string;

	let fetchUrl =
		'https://api.webflow.com/oauth/access_token' +
		'?' +
		new URLSearchParams({
			client_id: process.env.NEXT_PUBLIC_WEBFLOW_CLIENT_ID!,
			client_secret: process.env.NEXT_PUBLIC_WEBFLOW_CLIENT_SECRET!,
			code,
			grant_type: 'authorization_code',
			redirect_uri: 'https://freelance-management.vercel.app/api/integrate/webflow',
		});

	const response = await fetch(fetchUrl, { method: 'POST' });

	console.log('RESPONSE', response);

	const weblowResponse = await response.json();

	console.log('response.json', weblowResponse);

	const { data, error } = await supabase.auth.updateUser({
		data: { webflow: { ...weblowResponse } },
	});

	console.log(data, error);

	return NextResponse.json(data);
}
