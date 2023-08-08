import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowDownIcon, ArrowUpIcon, ClockIcon } from '@radix-ui/react-icons';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

const supabase = createServerComponentClient<Database>({ cookies });

const ProjectPage = async ({ params: { project_id } }: { params: { project_id: string } }) => {
	const { data: project, error } = await supabase.from('projects').select('id, project_services(service(*))').eq('id', project_id).single();

	if (!project || error) {
		throw Error(error);
	}

	return (
		<>
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
								<div className='text-2xl font-bold'></div>
								<p className='text-xs text-muted-foreground'>+20.1% from last month</p>
							</CardContent>
						</Card>
						<Card>
							<CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
								<CardTitle className='text-sm font-medium'>Income</CardTitle>
								<ArrowUpIcon className='h-4 w-4 text-muted-foreground' />
							</CardHeader>
							<CardContent>
								<div className='text-2xl font-bold'></div>
								<p className='text-xs text-muted-foreground'>+20.1% from last month</p>
							</CardContent>
						</Card>

						<Card>
							<CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
								<CardTitle className='text-sm font-medium'>Expenses</CardTitle>
								<ArrowDownIcon className='h-4 w-4 text-muted-foreground' />
							</CardHeader>
							<CardContent>
								<div className='text-2xl font-bold'></div>
								<p className='text-xs text-muted-foreground'>+19% from last month</p>
							</CardContent>
						</Card>

						<Card>
							<CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
								<CardTitle className='text-sm font-medium'>Hours Worked</CardTitle>
								<ClockIcon className='h-4 w-4 text-muted-foreground' />
							</CardHeader>
							<CardContent>
								<div className='text-2xl font-bold'>2350</div>
								<p className='text-xs text-muted-foreground'>+180.1% from last month</p>
							</CardContent>
						</Card>

						{/* <Card>
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
						</Card> */}
					</div>
					<div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
						<Card className='sm:col-span-1 md:col-span-2 lg:col-span-3'>
							<CardHeader>
								<CardTitle>Overview</CardTitle>
							</CardHeader>
							<CardContent className='pl-2'>{/* <Overview /> */}</CardContent>
						</Card>
						<Card>
							<CardHeader>
								<div className='flex items-center justify-between'>
									<div>
										<CardTitle>Services Provided</CardTitle>
										<CardDescription>You made 265 sales this month.</CardDescription>
									</div>
									<Sheet>
										<SheetTrigger asChild>
											<Button variant='secondary'>Add Service</Button>
										</SheetTrigger>
										<SheetContent>
											<SheetHeader>
												<SheetTitle>Services</SheetTitle>
											</SheetHeader>
											<div className='grid gap-4'></div>
										</SheetContent>
									</Sheet>
								</div>
							</CardHeader>
							<CardContent>
								{project.project_services.map((project_service, index) => {
									const { service } = project_service;
									console.log(project_service);
									return (
										<div key={service.id} className='flex items-center pb-4 border-b last:border-none'>
											<div className='space-y-1'>
												<p className='text-sm font-medium leading-none'>Web Hosting</p>
												<p className='text-sm text-muted-foreground'>Subscription • Yearly</p>
											</div>
											<div className='ml-auto text-md text-right'>
												<p className='font-mono'>+500.00</p>
												<p className='text-sm text-muted-foreground'>Next Payout • July 11</p>
											</div>
										</div>
									);
								})}
							</CardContent>
						</Card>
					</div>
				</TabsContent>
			</Tabs>
		</>
	);
};

export default ProjectPage;
