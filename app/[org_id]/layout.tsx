import ProjectSidebar from '@/components/ProjectSidebar';
import { MainNav } from '@/components/navbar';
import { SidebarNav } from '@/components/sidebar-nav';
import { getClients, getProjects } from '@/lib/helpers';

const OrganizationLayout = async ({ params, children }: { params: { org_id: string }; children: React.ReactNode }) => {
	const { org_id } = params;
	const clients = await getClients(org_id);
	const projects = await getProjects(org_id);

	return (
		<div className='flex flex-col h-screen'>
			<MainNav org_id={org_id} projects={projects} />
			<div className='h-full flex flex-col lg:flex-row '>
				<aside className='lg:w-1/6 border-r'>
					<ProjectSidebar />
				</aside>
				<div className='flex-1 p-4'>{children}</div>
			</div>
		</div>
	);
};

export default OrganizationLayout;
