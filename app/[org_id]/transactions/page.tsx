import NewClientForm from '@/components/forms/newClientForm';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import React from 'react';

const TransactionsPage = async () => {
	return (
		<div>
			<div className='flex items-center justify-between mb-4'>
				<h2 className='text-2xl font-semibold tracking-tight'>Clients</h2>
				<Sheet>
					<SheetTrigger>
						<Button>New Expense</Button>
					</SheetTrigger>
					<SheetContent>
						<SheetHeader>
							<SheetTitle>New Expense</SheetTitle>
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
						<CardTitle className='text-2xl font-bold'>Subscriptions</CardTitle>
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
						<div className=''>+2350</div>
						<p className='text-xs text-muted-foreground'>+180.1% from last month</p>
					</CardContent>
				</Card>
				<Card>
					<CardTitle>One Time</CardTitle>
				</Card>
			</div>
		</div>
	);
};

export default TransactionsPage;
