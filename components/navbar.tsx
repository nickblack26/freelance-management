import Link from 'next/link';

import { cn } from '@/lib/utils';
import Image from 'next/image';
import { BellIcon, GearIcon, PlusIcon } from '@radix-ui/react-icons';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuTrigger } from './ui/dropdown-menu';
import { Button } from './ui/button';
import { handleSignOut } from '@/app/actions';

export function MainNav({ org_id, className, ...props }: { org_id: string; className?: React.HTMLAttributes<HTMLElement> }) {
	const links = [
		{ href: `/${org_id}/`, name: 'Home' },
		{ href: `/${org_id}/clients`, name: 'Clients' },
		{ href: `/${org_id}/projects`, name: 'Projects' },
		{ href: `/${org_id}/invoices`, name: 'Invoices' },
		{ href: `/${org_id}/proposals`, name: 'Proposals' },
		{ href: `/${org_id}/contracts`, name: 'Contracts' },
		{ href: `/${org_id}/timers`, name: 'Time tracking' },
		{ href: `/${org_id}/transactions`, name: 'Transactions' },
	];

	return (
		<nav className={cn('flex items-center space-x-4 lg:space-x-6 w-full', className)} {...props}>
			<Image src='/hourglass.svg' alt='Hourglass Logo' width={25} height={50} priority />

			{links.map(({ href, name }) => (
				<Link key={`${href}-${name}`} href={href} className='text-sm font-medium transition-colors hover:text-primary'>
					{name}
				</Link>
			))}

			<div className='flex flex-1 items-center gap-4 justify-end'>
				<Link href={`/${org_id}/settings`} className='text-sm font-medium transition-colors hover:text-primary'>
					<GearIcon />
				</Link>
				<Link href={`/${org_id}`} className='font-medium transition-colors hover:text-primary'>
					<BellIcon />
				</Link>
				<DropdownMenu>
					<DropdownMenuTrigger>
						<PlusIcon />
					</DropdownMenuTrigger>
					<DropdownMenuContent>
						<p>Hello</p>
					</DropdownMenuContent>
				</DropdownMenu>
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Avatar className='h-9 w-9'>
							<AvatarImage src='/avatars/03.png' alt='Avatar' />
							<AvatarFallback>IN</AvatarFallback>
						</Avatar>
					</DropdownMenuTrigger>
					<DropdownMenuContent>
						<DropdownMenuLabel>
							<Button variant='link' formAction={handleSignOut}>
								Sign out
							</Button>
						</DropdownMenuLabel>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
		</nav>
	);
}
