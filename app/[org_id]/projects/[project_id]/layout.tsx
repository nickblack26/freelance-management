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
	return (
		<div className='flex-1 flex' style={{ height: '100dvh' }}>
			{children}
		</div>
	);
};

export default ProjectLayout;
