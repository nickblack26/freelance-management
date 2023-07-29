import { Metadata } from 'next';
import Image from 'next/image';
import { Separator } from '@/components/ui/separator';
import { SidebarNav } from '@/components/sidebar-nav';

export const metadata: Metadata = {
	title: 'Forms',
	description: 'Advanced form example using react-hook-form and Zod.',
};

interface SettingsLayoutProps {
	params: { org_id: string };
	children: React.ReactNode;
}

export default function SettingsLayout({ params, children }: SettingsLayoutProps) {
	const { org_id } = params;

	const sidebarNavItems = [
		{
			title: 'Account',
			href: `/${org_id}/settings`,
		},
		{
			title: 'Business',
			href: `/${org_id}/settings/business`,
		},
		{
			title: 'Appearance',
			href: `/${org_id}/settings/payments`,
		},
		{
			title: 'Integrations',
			href: `/${org_id}/settings/integrations`,
		},
		{
			title: 'Notifications',
			href: `/${org_id}/settings/notifications`,
		},
		{
			title: 'Templates',
			href: `/${org_id}/settings/templates`,
		},
	];

	return (
		<>
			<div className='md:hidden'>
				<Image src='/examples/forms-light.png' width={1280} height={791} alt='Forms' className='block dark:hidden' />
				<Image src='/examples/forms-dark.png' width={1280} height={791} alt='Forms' className='hidden dark:block' />
			</div>
			<div>
				<div className='space-y-0.5'>
					<h2 className='text-2xl font-bold tracking-tight'>Settings</h2>
					<p className='text-muted-foreground'>Manage your account settings and set e-mail preferences.</p>
				</div>
				<Separator className='my-6' />
				<div className='flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0'>
					<aside className='-mx-4 lg:w-1/5'>
						<SidebarNav items={sidebarNavItems} />
					</aside>
					<div className='flex-1 lg:max-w-2xl'>{children}</div>
				</div>
			</div>
		</>
	);
}
