import NewProjectForm from '@/components/forms/newProjectForm';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import React from 'react';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { PostgrestSingleResponse } from '@supabase/postgrest-js';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { cookies } from 'next/headers';
import Link from 'next/link';

const supabase = createServerComponentClient<Database>({ cookies });

async function getClients(org_id: string): Promise<Client[]> {
	const { data, error } = await supabase.from('clients').select().eq('business', org_id);

	if (!data || error) {
		throw Error(`${error}`);
	}

	return data;
}

async function getProjects(): Promise<Project[]> {
	const { data, error } = await supabase.from('projects').select();

	if (!data || error) {
		throw Error(`${error}`);
	}

	return data;
}

const ProjectsPage = async ({ params: { org_id } }: { params: { org_id: string } }) => {
	const [clients, projects] = await Promise.all([getClients(org_id), getProjects()]);

	console.log(projects);

	return (
		<>
			<div className='flex items-center justify-between mb-4'>
				<h2 className='text-2xl font-semibold tracking-tight'>Projects</h2>
				<Sheet>
					<SheetTrigger asChild>
						<Button>Add Project</Button>
					</SheetTrigger>
					<SheetContent>
						<SheetHeader>
							<SheetTitle>Create Project</SheetTitle>
							<SheetDescription>
								This action cannot be undone. This will permanently delete your account and remove your data from our servers.
							</SheetDescription>
						</SheetHeader>
						<NewProjectForm clients={clients} />
					</SheetContent>
				</Sheet>
			</div>
			<div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4'>
				{projects.map((project) => (
					<Link key={project.id} href={`/${org_id}/projects/${project.id}`}>
						<Card>
							<CardHeader>
								<div className='flex items-center gap-4'>
									{/* <Avatar>
										<AvatarFallback>{client.name[0]}</AvatarFallback>
									</Avatar> */}
									<div>
										<CardTitle>{project.name}</CardTitle>
										<CardDescription>Test</CardDescription>
									</div>
								</div>
							</CardHeader>
							<CardContent>
								<div className='text-s'>$0.00</div>
								<p className='text-xs text-muted-foreground'>0.00% of income</p>
							</CardContent>
						</Card>
					</Link>
				))}
			</div>
		</>
	);
};

export default ProjectsPage;
