import { getProject } from '@/lib/helpers';
import { Button } from '@/components/ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuTrigger,
	DropdownMenuItem,
	DropdownMenuGroup,
	DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { ChevronDownIcon, LinkNone2Icon, Pencil1Icon, StarIcon, TrashIcon } from '@radix-ui/react-icons';
import React from 'react';

const ProjectLayout = async ({ children, params }: { children: React.ReactNode; params: { org_id: string; project_id: string } }) => {
	const { project_id } = params;

	const { project } = await getProject(project_id);

	return (
		<div>
			<div className='flex items-center gap-3 space-y-0.5'>
				<h2 className='text-2xl font-bold tracking-tight'>{project.name}</h2>
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant='ghost'>
							<ChevronDownIcon />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent>
						<DropdownMenuGroup>
							<DropdownMenuItem>
								<Pencil1Icon className='mr-2' />
								Edit project details
							</DropdownMenuItem>
						</DropdownMenuGroup>
						<DropdownMenuSeparator />
						<DropdownMenuGroup>
							<DropdownMenuItem>
								<LinkNone2Icon className='mr-2' />
								Copy project link
							</DropdownMenuItem>
						</DropdownMenuGroup>
						<DropdownMenuSeparator />
						<DropdownMenuGroup>
							<DropdownMenuItem>
								<TrashIcon className='mr-2' />
								Delete project
							</DropdownMenuItem>
						</DropdownMenuGroup>
					</DropdownMenuContent>
				</DropdownMenu>
				<StarIcon />
				{/* {subtitle && <p className='text-muted-foreground'>Manage your account settings and set e-mail preferences.</p>} */}
			</div>
			<div className='flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0'>
				<div className='flex-1'>{children}</div>
			</div>
		</div>
	);
};

export default ProjectLayout;
