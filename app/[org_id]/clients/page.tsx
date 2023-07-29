import { Button } from '@/components/ui/button';
import { columns } from './columns';
import { DataTable } from './data-table';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import NewClientForm from '@/components/forms/newClientForm';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Transaction } from '@/components/recent-sales';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { PostgrestSingleResponse } from '@supabase/supabase-js';
import { cookies } from 'next/headers';

export type Client = {
	id: string;
	name: string;
	transactions?: Transaction[];
	invoices?: string[];
	projects?: string[];
};

async function getData(): Promise<Client[]> {
	const supabase = createServerComponentClient({ cookies });
	const { data: clients }: PostgrestSingleResponse<Client[]> = await supabase.from('client').select();

	if (clients && clients.length) {
		return clients;
	}
	return [];
}

const ClientsPage = async () => {
	const data = await getData();

	return (
		<div>
			<div className='flex items-center justify-between mb-4'>
				<h2 className='text-2xl font-semibold tracking-tight'>Clients</h2>
				<Sheet>
					<SheetTrigger>
						<Button>Add Client</Button>
					</SheetTrigger>
					<SheetContent>
						<SheetHeader>
							<SheetTitle>Create Client</SheetTitle>
							<SheetDescription>
								This action cannot be undone. This will permanently delete your account and remove your data from our servers.
							</SheetDescription>
						</SheetHeader>
						<NewClientForm />
					</SheetContent>
				</Sheet>
			</div>
			<div className='grid grid-cols-2 gap-4'>
				<Card>
					<CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
						<CardTitle className='text-sm font-medium'>Active Clients</CardTitle>
					</CardHeader>
					<CardContent>
						<div className='text-2xl font-bold'>1,620</div>
					</CardContent>
				</Card>
				<Card>
					<CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
						<CardTitle className='text-sm font-medium'>Potential Clients</CardTitle>
					</CardHeader>
					<CardContent>
						<div className='text-2xl font-bold'>1,620</div>
					</CardContent>
				</Card>
				<div className='col-span-2'>
					<DataTable columns={columns} data={data} />
				</div>
			</div>
		</div>
	);
};

export default ClientsPage;
