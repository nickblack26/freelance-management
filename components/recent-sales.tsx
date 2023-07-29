import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export type Transaction = {
	id: string;
	amount: number;
	date: Date;
	purpose: string;
};

interface RecentTransactionsProps {
	className?: React.HTMLAttributes<HTMLElement>;
	transactions: Transaction[] | null;
}

export function RecentSales({ className, transactions }: RecentTransactionsProps) {
	return (
		<div className='space-y-8'>
			{transactions?.map((transaction) => (
				<div key={transaction.id} className='flex items-center'>
					<Avatar className='h-9 w-9'>
						<AvatarImage src='/avatars/01.png' alt='Avatar' />
						<AvatarFallback>OM</AvatarFallback>
					</Avatar>
					<div className='ml-4 space-y-1'>
						<p className='text-sm font-medium leading-none'>Olivia Martin</p>
						<p className='text-sm text-muted-foreground'>olivia.martin@email.com</p>
					</div>
					<div className='ml-auto font-medium'>
						{transaction.amount > 0.0 && '+'}
						{transaction.amount.toLocaleString('en-US', {
							style: 'currency',
							currency: 'USD',
						})}
					</div>
				</div>
			))}
		</div>
	);
}
