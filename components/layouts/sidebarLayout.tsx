import Image from 'next/image';
import React from 'react';
import { Separator } from '../ui/separator';
import { SidebarNav } from '../sidebar-nav';

type SidebarLayoutProps = {
	children: React.ReactNode;
	navItems: SidebarNavItem[];
	title: string;
	subtitle?: string;
};

const SidebarLayout = ({ children, navItems, title, subtitle }: SidebarLayoutProps) => {
	return (
		<>
			<div className='md:hidden'>
				<Image src='/examples/forms-light.png' width={1280} height={791} alt='Forms' className='block dark:hidden' />
				<Image src='/examples/forms-dark.png' width={1280} height={791} alt='Forms' className='hidden dark:block' />
			</div>
			<div>
				<div className='space-y-0.5'>
					<h2 className='text-2xl font-bold tracking-tight'>{title}</h2>
					{subtitle && <p className='text-muted-foreground'>Manage your account settings and set e-mail preferences.</p>}
				</div>
				<Separator className='my-6' />
				<div className='flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0'>
					<aside className='-mx-4 lg:w-1/6'>
						<SidebarNav items={navItems} />
					</aside>
					<div className='flex-1'>{children}</div>
				</div>
			</div>
		</>
	);
};

export default SidebarLayout;
