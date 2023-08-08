'use client';

import { ColumnDef } from '@tanstack/react-table';
import { Project } from '@/app/actions';

export const columns: ColumnDef<Project>[] = [
	{
		accessorKey: 'name',
		header: 'Name',
		cell: ({ row }) => {
			const name = row.getValue('income');
			const client = row.getValue('client');

			return (
				<div className='text-right font-medium'>
					{client.name} - {name}
				</div>
			);
		},
	},
	{
		accessorKey: 'income',
		header: () => <div className='text-right'>Amount</div>,
		cell: ({ row }) => {
			const income = parseFloat(row.getValue('income'));
			const formatted = new Intl.NumberFormat('en-US', {
				style: 'currency',
				currency: 'USD',
			}).format(income);

			return <div className='text-right font-medium'>{formatted}</div>;
		},
	},
];
