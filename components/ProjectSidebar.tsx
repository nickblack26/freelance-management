import React from 'react';
import { Separator } from './ui/separator';
import { CodeIcon, FileIcon, FileTextIcon, GearIcon, LayoutIcon } from '@radix-ui/react-icons';
import { Button } from './ui/button';

const ProjectSidebar = () => {
	return (
		<div className='flex flex-col space-y-4'>
			<div className='w-full'>
				<h2 className='mb-2 px-4 font-semibold tracking-tight'>Planning</h2>
				<ListItem title='Timeline' icon={<LayoutIcon />} />
				<ListItem title='Board' icon={<LayoutIcon />} />
			</div>

			<div className='w-full'>
				<h2 className='mb-2 px-4 font-semibold tracking-tight'>Development</h2>
				<ListItem title='Code' icon={<CodeIcon />} />
			</div>

			<Separator />

			<div className='w-full'>
				<ListItem title='Project pages' icon={<FileTextIcon />} />
				<ListItem title='Project settings' icon={<GearIcon />} />
			</div>
		</div>
	);
};

const ListItem = ({ title, icon }: { title: string; icon: React.ReactNode }) => {
	return (
		<Button variant='ghost'>
			<span className='mr-2 h-4 w-4'>{icon}</span> {title}
		</Button>
	);
};

ListItem.displayName = 'ListItem';

export default ProjectSidebar;
