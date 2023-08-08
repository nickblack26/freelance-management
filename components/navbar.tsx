import Link from 'next/link';

import { cn } from '@/app/lib/utils';
import Image from 'next/image';
import { BellIcon, GearIcon, PlusIcon } from '@radix-ui/react-icons';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuShortcut,
	DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { Button } from './ui/button';
import { Search } from './search';
import TeamSwitcher from './team-switcher';
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
		<>
			<div className='border-b'>
				<div className='flex h-16 items-center justify-between px-10'>
					<div className='flex items-center space-x-4'>
						<Image src='/hourglass.svg' alt='Hourglass Logo' width={25} height={50} priority />
						<TeamSwitcher />
						<nav className={cn('flex items-center space-x-4 lg:space-x-6 w-full', className)} {...props}>
							{links.map(({ href, name }) => (
								<Link key={`${href}-${name}`} href={href} className='text-sm font-medium transition-colors hover:text-primary'>
									{name}
								</Link>
							))}
						</nav>
					</div>
					<div className='flex items-center space-x-4'>
						<Search />
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
						</div>
						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<Button variant='ghost' className='relative h-8 w-8 rounded-full'>
									<Avatar className='h-8 w-8'>
										<AvatarImage src='/avatars/01.png' alt='@shadcn' />
										<AvatarFallback>SC</AvatarFallback>
									</Avatar>
								</Button>
							</DropdownMenuTrigger>
							<DropdownMenuContent className='w-56' align='end' forceMount>
								<DropdownMenuLabel className='font-normal'>
									<div className='flex flex-col space-y-1'>
										<p className='text-sm font-medium leading-none'>shadcn</p>
										<p className='text-xs leading-none text-muted-foreground'>m@example.com</p>
									</div>
								</DropdownMenuLabel>
								<DropdownMenuSeparator />
								<DropdownMenuGroup>
									<DropdownMenuItem>
										Profile
										<DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
									</DropdownMenuItem>
									<DropdownMenuItem>
										Billing
										<DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
									</DropdownMenuItem>
									<DropdownMenuItem>
										Settings
										<DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
									</DropdownMenuItem>
									<DropdownMenuItem>New Team</DropdownMenuItem>
								</DropdownMenuGroup>
								<DropdownMenuSeparator />
								<DropdownMenuItem onSelect={handleSignOut}>
									Log out
									<DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
								</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
					</div>
				</div>
			</div>
		</>
	);
}
