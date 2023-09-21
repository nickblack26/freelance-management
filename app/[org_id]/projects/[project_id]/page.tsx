import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ProjectOverviewPage from './overview';
import { getBusiness, getProject } from '@/lib/helpers';
import { Separator } from '@/components/ui/separator';
import { DataTable } from './tasks/data-table';
import { columns } from './tasks/columns';

const ProjectPage = async ({ params: { org_id, project_id } }: { params: { org_id: string; project_id: string } }) => {
	const { project, tasks } = await getProject(project_id);
	console.log(tasks);
	// const business = await getBusiness(org_id);

	return (
		<Tabs defaultValue='overview'>
			<TabsList>
				<TabsTrigger value='overview'>Overview</TabsTrigger>
				<TabsTrigger value='list'>List</TabsTrigger>
				<TabsTrigger value='board'>Board</TabsTrigger>
				<TabsTrigger value='activity'>Activity</TabsTrigger>
			</TabsList>
			<Separator className='my-4' />
			<TabsContent value='overview'>
				<ProjectOverviewPage />
			</TabsContent>
			<TabsContent value='list'>
				<DataTable columns={columns} data={tasks} />
			</TabsContent>
			<TabsContent value='board'>
				<ProjectOverviewPage />
			</TabsContent>
			<TabsContent value='activity'>
				<ProjectOverviewPage />
			</TabsContent>
		</Tabs>
	);
};

export default ProjectPage;
