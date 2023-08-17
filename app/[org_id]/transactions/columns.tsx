'use client';

import { ColumnDef } from '@tanstack/react-table';
import Link from 'next/link';

export const columns: ColumnDef<Transaction>[] = [
	{
		accessorKey: 'purpose',
		header: 'Description',
		cell: ({ row }) => {
			const id = row.getValue('id');
			const purpose: string = row.getValue('purpose');

			return <Link href={`${id}`}>{purpose}</Link>;
		},
	},
	{
		accessorKey: 'merchant',
		header: 'Source/Merchant',
	},
	{
		accessorKey: 'tax_category.name',
		header: 'Category',
	},
	{
		accessorKey: 'date',
		header: 'Date',
	},
	{
		accessorKey: 'amount',
		header: 'Amount',
		cell: ({ row }) => {
			const income = parseFloat(row.getValue('amount'));
			const formatted = new Intl.NumberFormat('en-US', {
				style: 'currency',
				currency: 'USD',
			}).format(income);

			return <div>{formatted}</div>;
		},
	},
];
