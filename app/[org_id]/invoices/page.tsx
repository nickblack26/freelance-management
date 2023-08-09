import NewClientForm from '@/components/forms/newClientForm';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import React from 'react';
import { DataTable } from './data-table';
import { columns } from './columns';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

const cardFilters = [
	{
		title: 'All',
		total: 2,
	},
	{
		title: 'Succeeded',
		total: 1,
	},
	{
		title: 'Refunded',
		total: 0,
	},
	{
		title: 'Uncaptured',
		total: 0,
	},
	{
		title: 'Failed',
		total: 0,
	},
];

const InvoicesPage = async ({ params: { org_id } }: { params: { org_id: string } }) => {
	const supabase = createServerComponentClient<Database>({ cookies });
	const { data, error } = await supabase
		.from('transactions')
		.select('id, purpose, amount, date, project(name)')
		.eq('business', org_id)
		.gt('amount', 0.0)
		.order('date', { ascending: false });

	if (!data || error) {
		throw Error(`${error}`);
	}

	return (
		<>
			<div className='flex items-center justify-between mb-4'>
				<h2 className='text-2xl font-semibold tracking-tight'>Invoices</h2>
				<Sheet>
					<SheetTrigger asChild>
						<Button>New Invoice</Button>
					</SheetTrigger>
					<SheetContent>
						<SheetHeader>
							<SheetTitle>New Invoice</SheetTitle>
							<SheetDescription>
								This action cannot be undone. This will permanently delete your account and remove your data from our servers.
							</SheetDescription>
						</SheetHeader>
						<NewClientForm />
					</SheetContent>
				</Sheet>
			</div>
			<div className='grid grid-cols-5 gap-4'>
				{cardFilters.map((filter) => (
					<Card key={`${filter.title}-${filter.total}`}>
						<CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
							<CardTitle className='text-sm font-medium'>{filter.title}</CardTitle>
						</CardHeader>
						<CardContent>
							<div className='text-xl font-bold'>{filter.total}</div>
						</CardContent>
					</Card>
				))}
			</div>
			<div className='grid pt-4'>{/* <DataTable columns={columns} data={data satisfies Transaction[]} /> */}</div>
		</>
	);
};

export default InvoicesPage;
