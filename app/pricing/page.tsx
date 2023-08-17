import * as React from 'react';

// If using TypeScript, add the following snippet to your file as well.
declare global {
	namespace JSX {
		interface IntrinsicElements {
			'stripe-pricing-table': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
		}
	}
}

function PricingPage() {
	// Paste the stripe-pricing-table snippet in your React component
	return (
		<stripe-pricing-table
			pricing-table-id='prctbl_1NgCABI6Q4ne5nTqdTJ7CpGv'
			publishable-key={process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}
		></stripe-pricing-table>
	);
}

export default PricingPage;
