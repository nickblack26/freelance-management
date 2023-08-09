'use client';

import { ColumnDef } from '@tanstack/react-table';

export const columns: ColumnDef<Client>[] = [
	{
		accessorKey: 'name',
		header: 'Name',
	},
	{
		accessorKey: 'status',
		header: 'Status',
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
