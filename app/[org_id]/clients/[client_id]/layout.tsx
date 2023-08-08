'use client';
import React, { useEffect } from 'react';
import { useGlobalContext } from '@/app/context/store';

const ClientIdLayout = ({ params, children }: { params: { client_id: string }; children: React.ReactNode }) => {
	const { client_id } = params;
	const { setClientId } = useGlobalContext();

	useEffect(() => {
		setClientId(client_id);

		return () => {
			setClientId(null);
		};
	}, [client_id]);

	return <>{children}</>;
};

export default ClientIdLayout;
