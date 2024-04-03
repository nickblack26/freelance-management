'use client';
import React from 'react';
import { Avatar } from '@nextui-org/avatar';
import { ScrollShadow } from '@nextui-org/scroll-shadow';
import { Link } from '@nextui-org/link';
import { Button } from '@nextui-org/button';
import { Image } from '@nextui-org/image';
import NextImage from 'next/image';
import { usePathname } from 'next/navigation';

type Section = {
	name: string;
	tabs: Tab[];
};

type Tab = {
	name: string;
	href: string;
};

const Sidebar = ({ org_id }: { org_id: string }) => {
	const pathname = usePathname();
	const sections: Section[] = [
		{
			name: 'Overview',
			tabs: [
				{ name: 'Home', href: `/${org_id}` },
				{ name: 'Projects', href: `/${org_id}/projects` },
				{ name: 'Tasks', href: `/${org_id}/tasks` },
				{ name: 'Clients', href: `/${org_id}/clients` },
			],
		},
		{
			name: 'Organization',
			tabs: [
				{ name: 'Cap Table', href: `/${org_id}/cap-table` },
				{ name: 'Projects', href: `/${org_id}/analytics` },
				{ name: 'Integrations', href: `/${org_id}/integrations` },
			],
		},
	];

	return (
		<div className='relative flex h-full w-72 max-w-[288px] flex-1 flex-col !border-r-small border-divider p-6 transition-[transform,opacity,margin] duration-250 ease-in-out space-y-6'>
			<div className='flex items-center gap-2 px-2'>
				<div className='flex h-8 w-8 items-center justify-center rounded-full bg-foreground'>
					<Image className='relative dark:invert' as={NextImage} src='/hourglass.svg' alt='Hourglass Logo' height={20} width={10.58} />
				</div>
				<span className='text-small font-bold uppercase'>Hourglass</span>
			</div>

			<div className='flex items-center gap-3 px-3'>
				<Avatar isBordered size='sm' src='https://i.pravatar.cc/150?u=a042581f4e29026024d' />
				<div className='flex flex-col'>
					<p className='text-small font-medium text-default-600'>John Doe</p>
					<p className='text-tiny text-default-400'>Product Designer</p>
				</div>
			</div>

			<ScrollShadow>
				<nav className='w-full space-y-2.5'>
					{sections.map((section, index) => (
						<ul key={`${section.name}-${index}`}>
							<span className='pl-1 text-tiny text-foreground-500'>{section.name}</span>
							<ul className='space-y-0.5'>
								{section.tabs.map((tab) => (
									<li key={tab.href}>
										<Button
											href={tab.href}
											as={Link}
											color='default'
											className='w-full justify-between'
											variant={pathname === tab.href ? 'flat' : 'light'}
										>
											{tab.name}
										</Button>
									</li>
								))}
							</ul>
						</ul>
					))}
				</nav>
			</ScrollShadow>
		</div>
	);
};

export default Sidebar;
