import React from 'react';
import Sidebar from './sidebar';

type Props = {
	params: { org_id: string };
	children: React.ReactNode;
};
const OrganizationLayout = async ({ params, children }: Props) => {
	return (
		<div className='flex w-full' style={{ height: '100dvh' }}>
			<Sidebar org_id={params.org_id} />
			<div className='flex-1'>{children}</div>
		</div>
	);
};

export default OrganizationLayout;
