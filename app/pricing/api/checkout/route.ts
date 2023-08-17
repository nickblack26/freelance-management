import { NextResponse } from 'next/server';
import { stripe } from '@/utils/stripe';

export async function POST(request: Request) {
	const { priceId, org_id } = await request.json();

	console.log(priceId);

	const session = await stripe.checkout.sessions.create({
		mode: 'subscription',
		payment_method_types: ['card'],
		line_items: [{ price: priceId, quantity: 1 }],
		success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/success`,
		cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/pricing`,
	});

	console.log(session);

	return NextResponse.redirect(new URL(session.url as string));
}
