import React from 'react';
import { Button } from '@/components/ui/button';
import { CounterClockwiseClockIcon } from '@radix-ui/react-icons';
import ProjectOverviewBar from './project-bar';

const ProjectOverviewPage = async () => {
	return (
		<>
			<div className='flex-1'>
				<h2>Project overview</h2>
				<div className='flex h-full flex-col space-y-4'>
					<div className='flex items-center space-x-2'>
						<Button>Submit</Button>
						<Button variant='secondary'>
							<span className='sr-only'>Show history</span>
							<CounterClockwiseClockIcon className='h-4 w-4' />
						</Button>
					</div>
				</div>
			</div>
			<ProjectOverviewBar />
		</>
	);
};

export default ProjectOverviewPage;
