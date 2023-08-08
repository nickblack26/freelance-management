import { CalendarDateRangePicker } from '@/components/date-range-picker';
import { Overview } from '@/components/overview';
import { RecentSales } from '@/components/recent-sales';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

const supabase = createServerComponentClient<Database>({ cookies });

const getAllTransactions = async (org_id: string, startDate: string, endDate: string) => {
	const { data, error } = await supabase
		.from('transactions')
		.select('id, amount, purpose, date')
		.eq('business', org_id)
		.gte('date', '2023-01-01')
		.lte('date', '2023-03-21')
		.order('date', { ascending: false });

	return data;
};

const getOverviewData = async (org_id: string, startDate: string, endDate: string) => {
	const { data } = await supabase.rpc('getbusinessoverview', { startdate: startDate, enddate: endDate, businessid: org_id });
	return data;
};

const HomePage = async ({ params: { org_id } }: { params: { org_id: string } }) => {
	const [transactions, overviewData] = await Promise.all([
		getAllTransactions(org_id, '2023-01-01', '2023-03-21'),
		getOverviewData(org_id, '2023-01-01', '2023-03-21'),
	]);

	let inital = 0.0;

	const totalRevenue = overviewData?.reduce((accumulator, currentValue) => accumulator + currentValue.total, inital);
	console.log(totalRevenue);

	return (
		<div className='flex-1 space-y-4'>
			<div className='flex items-center justify-between space-y-2'>
				<h2 className='text-3xl font-bold tracking-tight'>Dashboard</h2>
				<div className='flex items-center space-x-2'>
					<CalendarDateRangePicker />
					<Button>Download</Button>
				</div>
			</div>
			<Tabs defaultValue='overview' className='space-y-4'>
				<TabsList>
					<TabsTrigger value='overview'>Overview</TabsTrigger>
					<TabsTrigger value='analytics' disabled>
						Analytics
					</TabsTrigger>
					<TabsTrigger value='reports' disabled>
						Reports
					</TabsTrigger>
					<TabsTrigger value='notifications' disabled>
						Notifications
					</TabsTrigger>
				</TabsList>
				<TabsContent value='overview' className='space-y-4'>
					<div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
						<Card>
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
								<div className='text-2xl font-bold'>{totalRevenue?.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</div>
								<p className='text-xs text-muted-foreground'>+20.1% from last month</p>
							</CardContent>
						</Card>
						<Card>
							<CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
								<CardTitle className='text-sm font-medium'>Subscriptions</CardTitle>
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
									<path d='M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2' />
									<circle cx='9' cy='7' r='4' />
									<path d='M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75' />
								</svg>
							</CardHeader>
							<CardContent>
								<div className='text-2xl font-bold'>+2350</div>
								<p className='text-xs text-muted-foreground'>+180.1% from last month</p>
							</CardContent>
						</Card>
						<Card>
							<CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
								<CardTitle className='text-sm font-medium'>Sales</CardTitle>
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
									<rect width='20' height='14' x='2' y='5' rx='2' />
									<path d='M2 10h20' />
								</svg>
							</CardHeader>
							<CardContent>
								<div className='text-2xl font-bold'>+12,234</div>
								<p className='text-xs text-muted-foreground'>+19% from last month</p>
							</CardContent>
						</Card>
						<Card>
							<CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
								<CardTitle className='text-sm font-medium'>Active Now</CardTitle>
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
									<path d='M22 12h-4l-3 9L9 3l-3 9H2' />
								</svg>
							</CardHeader>
							<CardContent>
								<div className='text-2xl font-bold'>+573</div>
								<p className='text-xs text-muted-foreground'>+201 since last hour</p>
							</CardContent>
						</Card>
					</div>
					<div className='grid gap-4 md:grid-cols-2 lg:grid-cols-7'>
						<Card className='col-span-4'>
							<CardHeader>
								<CardTitle>Overview</CardTitle>
							</CardHeader>
							<CardContent className='pl-2'>
								<Overview transactions={overviewData} />
							</CardContent>
						</Card>
						<Card className='col-span-3'>
							<CardHeader>
								<CardTitle>Recent Sales</CardTitle>
								<CardDescription>You made 265 sales this month.</CardDescription>
							</CardHeader>
							<CardContent>
								<RecentSales transactions={transactions.slice(0, 5)} />
							</CardContent>
						</Card>
					</div>
				</TabsContent>
			</Tabs>
		</div>
	);
};

export default HomePage;
