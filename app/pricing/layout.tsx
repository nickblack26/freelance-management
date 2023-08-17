import Script from 'next/script';
import React from 'react';

const PricingLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<Script async src='https://js.stripe.com/v3/pricing-table.js' />
			<div className='h-screen grid place-items-center' style={{ backgroundColor: 'rgb(231, 226, 220)' }}>
				<div className='w-full'>{children}</div>
			</div>
		</>
	);
};

export default PricingLayout;
