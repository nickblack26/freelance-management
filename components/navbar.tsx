import Link from 'next/link';

import { cn } from '@/app/lib/utils';
import Image from 'next/image';
import { BellIcon, ClockIcon, GearIcon, PlayIcon, PlusIcon } from '@radix-ui/react-icons';
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
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Separator } from './ui/separator';

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

	let array = [...Array(5).keys()];

	return (
		<>
			<div className='border-b'>
				<div className='flex h-16 items-center justify-between px-4'>
					<TeamSwitcher />

					<div className='flex items-center space-x-4'>
						<Popover>
							<PopoverTrigger>
								<ClockIcon />
							</PopoverTrigger>
							<PopoverContent align='end'>
								<Tabs>
									<TabsList className='w-full'>
										<TabsTrigger className='w-full' value='mine'>
											Mine
										</TabsTrigger>
										<TabsTrigger className='w-full' value='others'>
											Others
										</TabsTrigger>
									</TabsList>
									<TabsContent value='mine'>
										<PlayIcon />

										{array.map((item) => (
											<div key={item} className='flex items-center'>
												<p>03:05:32</p>
												<p>Project</p>
												<p>Client</p>
											</div>
										))}
									</TabsContent>
								</Tabs>
							</PopoverContent>
						</Popover>
						<Search />
					</div>

					<div className='flex items-center space-x-4'>
						<div className='flex flex-1 items-center gap-4 justify-end'>
							<Popover>
								<PopoverTrigger>
									<BellIcon />
								</PopoverTrigger>
								<PopoverContent>
									<h2 className='text-lg font-semibold tracking-tight'>Notifications</h2>
									<Separator className='my-2' />
									{array.map((item) => (
										<div key={item} className='flex items-center'>
											<p>03:05:32</p>
											<p>Project</p>
											<p>Client</p>
										</div>
									))}
								</PopoverContent>
							</Popover>

							<DropdownMenu>
								<DropdownMenuTrigger asChild>
									<Button variant='outline'>
										<PlusIcon className='mr-2 h-4 w-4' />
										Create
									</Button>
								</DropdownMenuTrigger>
								<DropdownMenuContent className='w-56'>
									<DropdownMenuGroup>
										<DropdownMenuItem>
											New Project
											<DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
										</DropdownMenuItem>
										<DropdownMenuItem>
											New Client
											<DropdownMenuShortcut>⇧⌘C</DropdownMenuShortcut>
										</DropdownMenuItem>
										<DropdownMenuItem>
											New Invoice
											<DropdownMenuShortcut>⇧⌘I</DropdownMenuShortcut>
										</DropdownMenuItem>
										<DropdownMenuItem>
											New Expense
											<DropdownMenuShortcut>⇧⌘E</DropdownMenuShortcut>
										</DropdownMenuItem>
									</DropdownMenuGroup>
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
										<Link className='flex-1 flex items-center justify-between' href={`/${org_id}/settings`}>
											Profile
											<DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
										</Link>
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
