import React from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { CounterClockwiseClockIcon } from '@radix-ui/react-icons';

const ProjectOverviewPage = async () => {
	return (
		<div>
			<h2>Project overview</h2>
			<div className='flex h-full flex-col space-y-4'>
				<Textarea placeholder='Write a tagline for an ice cream shop' className='min-h-[400px] flex-1 p-4 ' />
				<div className='flex items-center space-x-2'>
					<Button>Submit</Button>
					<Button variant='secondary'>
						<span className='sr-only'>Show history</span>
						<CounterClockwiseClockIcon className='h-4 w-4' />
					</Button>
				</div>
			</div>
		</div>
	);
};

export default ProjectOverviewPage;
