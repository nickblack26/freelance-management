import { CalendarDateRangePicker } from '@/components/date-range-picker';
import { BarChartData, Overview } from '@/components/overview';
import { RecentSales } from '@/components/recent-sales';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { parseMoney } from '@/lib/money';

const supabase = createServerComponentClient<Database>({ cookies });

const getAllTransactions = async (org_id: string, startDate: string, endDate: string) => {
	const { data, error } = await supabase
		.from('transactions')
		.select('id, amount, purpose, date')
		.eq('business', org_id)
		.gte('date', '2023-01-01')
		.lte('date', '2023-03-21')
		.order('date', { ascending: false });

	if (!data || error) return [];

	return data;
};

const getOverviewData = async (org_id: string, startDate: string, endDate: string): Promise<BarChartData[]> => {
	const { data } = await supabase.rpc('get_business_overview', { start_date: startDate, end_date: endDate, business_id: org_id });

	if (!data) return [];

	return data;
};

const getOutstandingInvoices = async (org_id: string, startDate: string, endDate: string) => {
	const { data } = await supabase.rpc('get_outstanding_invoices', { start_date: startDate, end_date: endDate, business_id: org_id });
	return data;
};

const getTotalProjects = async (startDate: string, org_id: string) => {
	const { data } = await supabase.rpc('get_total_projects_between_dates', { start_date: startDate, business_id: org_id });
	return data;
};

const HomePage = async ({ params: { org_id } }: { params: { org_id: string } }) => {
	const [transactions, overviewData, outstandingInvoices, totalProjects] = await Promise.all([
		getAllTransactions(org_id, '2023-01-01', '2023-03-21'),
		getOverviewData(org_id, '2023-01-01', '2023-03-21'),
		getOutstandingInvoices(org_id, '2023-01-01', '2023-03-21'),
		getTotalProjects('2023-01-02', org_id),
	]);

	let inital = 0.0;
	const totalRevenue = overviewData?.reduce((accumulator, currentValue) => accumulator + currentValue.total, inital);

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
							</CardHeader>
							<CardContent>
								<div className='text-2xl font-bold'>{parseMoney(totalRevenue)}</div>
								<p className='text-xs text-muted-foreground'>+20.1% from last month</p>
							</CardContent>
						</Card>
						<Card>
							<CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
								<CardTitle className='text-sm font-medium'>Outstanding Invoices</CardTitle>
							</CardHeader>
							<CardContent>
								<div className='text-2xl font-bold'>{parseMoney(outstandingInvoices)}</div>
								<p className='text-xs text-muted-foreground'>+180.1% from last month</p>
							</CardContent>
						</Card>
						<Card>
							<CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
								<CardTitle className='text-sm font-medium'>New Clients</CardTitle>
							</CardHeader>
							<CardContent>
								<div className='text-2xl font-bold'>+12,234</div>
								<p className='text-xs text-muted-foreground'>+19% from last month</p>
							</CardContent>
						</Card>
						<Card>
							<CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
								<CardTitle className='text-sm font-medium'>Projects Started</CardTitle>
							</CardHeader>
							<CardContent>
								<div className='text-2xl font-bold'>{totalProjects}</div>
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
								<Overview data={...overviewData} />
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
