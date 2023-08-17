import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { QuestionMarkCircledIcon } from '@radix-ui/react-icons';
import React from 'react';

const BusinessMembersPage = ({ params: { org_id } }: { params: { org_id: string } }) => {
	return (
		<div>
			<div className='flex items-center justify-between space-y-2'>
				<h2 className='text-3xl font-bold tracking-tight'>Members</h2>
				<div className='flex items-center space-x-2'>
					<Button>Invite Members</Button>
				</div>
			</div>

			<div className='grid grid-cols-5 gap-4 w-full max-w-5xl mx-auto place-items-center my-8'>
				<div className='text-center w-full'>
					<h2 className='text-3xl font-bold tracking-tight'>1</h2>
					<p className='text-sm text-secondary-foreground tracking-tight'>Members</p>
				</div>

				<Separator orientation='vertical' />

				<div className='text-center w-full '>
					<h2 className='text-3xl font-bold tracking-tight'>1</h2>
					<p className='text-sm text-secondary-foreground tracking-tight'>
						Limited Access Members{' '}
						<TooltipProvider>
							<Tooltip>
								<TooltipTrigger>
									<QuestionMarkCircledIcon />
								</TooltipTrigger>
								<TooltipContent className='max-w-xs'>
									<p>Limited access members can only access the projects, tasks, and messages explicitly shared with them</p>
								</TooltipContent>
							</Tooltip>
						</TooltipProvider>
					</p>
				</div>

				<Separator orientation='vertical' />

				<div className='text-center w-full'>
					<h2 className='text-3xl font-bold tracking-tight'>0</h2>
					<p className='text-sm text-secondary-foreground tracking-tight'>Pending Invites</p>
				</div>
			</div>
		</div>
	);
};

export default BusinessMembersPage;
