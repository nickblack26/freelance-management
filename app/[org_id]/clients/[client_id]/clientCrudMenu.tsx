'use client';

import { DropdownMenuGroup, DropdownMenuItem, DropdownMenuSeparator } from '@/components/ui/dropdown-menu';
import React from 'react';
import { deleteClient } from '@/app/actions';
import { useGlobalContext } from '@/app/context/store';
import { redirect } from 'next/navigation';

const ClientCrudMenu = () => {
	const { organizationId, clientId } = useGlobalContext();

	const onClientDeletion = () => {
		if (confirm('Are you sure?')) {
			deleteClient<Database>(organizationId!, clientId!);
		}
	};

	return (
		<form>
			<DropdownMenuItem>Edit Client</DropdownMenuItem>
			<DropdownMenuItem>Archive Client</DropdownMenuItem>
			<DropdownMenuSeparator />
			<DropdownMenuItem onSelect={onClientDeletion}>Delete Client</DropdownMenuItem>
		</form>
	);
};

export default ClientCrudMenu;
