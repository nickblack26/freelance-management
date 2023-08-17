'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/app/lib/utils';
import { Button, buttonVariants } from '@/components/ui/button';
import { BarChartIcon, BellIcon, CheckCircledIcon, HomeIcon } from '@radix-ui/react-icons';
import { ScrollArea } from './ui/scroll-area';

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
	org_id: string;
	clients: Client[];
	projects: Project[];
}

export function SidebarNav({ className, org_id, clients, projects, ...props }: SidebarNavProps) {
	const pathname = usePathname();

	const sidebarSections = [
		{
			title: 'Clients',
			links: clients?.map((client) => {
				title: client.name;
				href: `/${org_id}/clients/${client.id}`;
			}),
		},
		{
			title: 'Projects',
			links: projects?.map((project) => {
				title: project.name;
				href: `/${org_id}/projects/${project.id}`;
			}),
		},
	];

	return (
		<nav className={cn('pb-12', className)}>
			<div className='space-y-4 py-4'>
				<div className='px-3 py-2'>
					<div className='space-y-1'>
						<Link href={`/${org_id}/`}>
							<Button variant='ghost' className='w-full justify-start'>
								<HomeIcon className='mr-2 h-4 w-4' />
								Home
							</Button>
						</Link>
						<Link href={`/${org_id}/tasks`}>
							<Button variant='ghost' className='w-full justify-start'>
								<CheckCircledIcon className='mr-2 h-4 w-4' />
								My Tasks
							</Button>
						</Link>
						<Link href={`/${org_id}/inbox`}>
							<Button variant='ghost' className='w-full justify-start'>
								<BellIcon className='mr-2 h-4 w-4' />
								Inbox
							</Button>
						</Link>
					</div>
				</div>
				<div className='px-3 py-2'>
					<h2 className='mb-2 px-4 text-lg font-semibold tracking-tight'>Clients</h2>
					<div className='space-y-1'>
						{clients?.map((client) => (
							<Link key={client.id} href={`/${org_id}/clients/${client.id}`}>
								<Button variant='ghost' className='w-full justify-start'>
									{client.name}
								</Button>
							</Link>
						))}
					</div>
				</div>
				<div className='py-2'>
					<h2 className='relative px-7 text-lg font-semibold tracking-tight'>Projects</h2>
					<ScrollArea className='h-[300px] px-1'>
						<div className='space-y-1 p-2'>
							{projects?.map((project) => (
								<Link key={project.id} href={`/${org_id}/projects/${project.id}`}>
									<Button variant='ghost' className='w-full justify-start'>
										{project.name}
									</Button>
								</Link>
							))}
						</div>
					</ScrollArea>
				</div>
			</div>
		</nav>
	);
}
