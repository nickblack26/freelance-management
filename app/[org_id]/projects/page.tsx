import NewProjectForm from '@/components/forms/newProjectForm';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import React from 'react';

const ProjectsPage = async () => {
	return (
		<div>
			<div className='flex items-center justify-between mb-4'>
				<h2 className='text-2xl font-semibold tracking-tight'>Clients</h2>
				<Sheet>
					<SheetTrigger>
						<Button>Add Client</Button>
					</SheetTrigger>
					<SheetContent>
						<SheetHeader>
							<SheetTitle>Create Client</SheetTitle>
							<SheetDescription>
								This action cannot be undone. This will permanently delete your account and remove your data from our servers.
							</SheetDescription>
						</SheetHeader>
						<NewProjectForm />
					</SheetContent>
				</Sheet>
			</div>
		</div>
	);
};

export default ProjectsPage;
