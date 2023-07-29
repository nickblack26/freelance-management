import { RecentSales, Transaction } from '@/components/recent-sales';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { PostgrestSingleResponse } from '@supabase/supabase-js';
import { cookies } from 'next/headers';

const HomePage = async () => {
	const supabase = createServerComponentClient({ cookies });
	const { data: transactions }: PostgrestSingleResponse<Transaction[]> = await supabase.from('transaction').select();
	const intialValue = 0.0;
	const profitBeforeTaxes = transactions
		?.reduce((accumulator, transaction) => accumulator + transaction.amount, intialValue)
		.toLocaleString('en-US', {
			style: 'currency',
			currency: 'USD',
		});

	return (
		<div className='grid gap-4 md:grid-cols-2 lg:grid-cols-8'>
			<Card className='col-span-4'>
				<CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
					<CardTitle className='text-sm font-medium'>Total Revenue</CardTitle>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 24 24'
						fill='none'
						stroke='currentColor'
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth='2'
						className='h-4 w-4 text-muted-foreground'
					>
						<path d='M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6' />
					</svg>
				</CardHeader>
				<CardContent>
					<div className='text-2xl font-bold'>{profitBeforeTaxes}</div>
					<p className='text-xs text-muted-foreground'>+20.1% from last month</p>
				</CardContent>
			</Card>
			<Card className='col-span-4'>
				<CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
					<CardTitle className='text-sm font-medium'>Outstanding invoices</CardTitle>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 24 24'
						fill='none'
						stroke='currentColor'
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth='2'
						className='h-4 w-4 text-muted-foreground'
					>
						<path d='M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6' />
					</svg>
				</CardHeader>
				<CardContent>
					<div className='text-2xl font-bold'>$0.00</div>
					<p className='text-xs text-muted-foreground'>+20.1% from last month</p>
				</CardContent>
			</Card>
			<Card className='col-span-4'>
				<CardHeader>
					<CardTitle>Overview</CardTitle>
				</CardHeader>
				<CardContent className='pl-2'>{/* <Overview /> */}</CardContent>
			</Card>
			<Card className='col-span-4'>
				<CardHeader>
					<CardTitle>Recent Transactions</CardTitle>
					<CardDescription>
						You made {transactions?.length} {transactions?.length === 1 ? 'sale' : 'sales'} this month.
					</CardDescription>
				</CardHeader>
				<CardContent>
					<RecentSales transactions={transactions} />
				</CardContent>
			</Card>
		</div>
	);
};

export default HomePage;
