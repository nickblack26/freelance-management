'use client';
import { MainNav } from '@/components/navbar';
import { useEffect } from 'react';
import { useGlobalContext } from '../context/store';

const OrganizationLayout = ({ params, children }: { params: { org_id: string }; children: React.ReactNode }) => {
	const { org_id } = params;
	const { setOrganizationId } = useGlobalContext();

	useEffect(() => {
		setOrganizationId(org_id);

		return () => {
			setOrganizationId(null);
		};
	}, [org_id]);

	return (
		<div className='flex flex-col h-full'>
			<MainNav org_id={org_id} />
			<div className='p-10'>{children}</div>
		</div>
	);
};

export default OrganizationLayout;
