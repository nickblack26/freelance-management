import SidebarLayout from '@/components/layouts/sidebarLayout';
import React from 'react';

const ProjectLayout = ({ children, params }: { children: React.ReactNode }) => {
	const { org_id, project_id } = params;
	const sidebarItems: SidebarNavItem[] = [
		{
			title: 'Overview',
			href: `/${org_id}/projects/${project_id}`,
		},
		{
			title: 'Tasks',
			href: `/${org_id}/projects/${project_id}/tasks`,
		},
		{
			title: 'Integrations',
			href: `/${org_id}/projects/${project_id}/integrations`,
		},
		{
			title: 'Settings',
			href: `/${org_id}/projects/${project_id}/settings`,
		},
	];

	return (
		<SidebarLayout title='Project' navItems={sidebarItems}>
			{children}
		</SidebarLayout>
	);
};

export default ProjectLayout;
