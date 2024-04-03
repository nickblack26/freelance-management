import React from 'react';
import { getRepositories } from '@/lib/helpers';
import DynamicSelect from './dynamic-select';
import { Image } from '@nextui-org/image';
import { ButtonGroup, Button } from '@nextui-org/button';
import { Chip } from '@nextui-org/chip';
import NextImage from 'next/image';

const ProjectSettingsPage = async () => {
	const repositories = await getRepositories();

	return (
		<>
			<div className='py-10 border-b'>Project Settings</div>
			<div className='flex gap-4 container'>
				<div className='w-32'></div>
				<div className='p-4 flex-1'>
					<section>
						<h3 className='text-xl font-semibold'>Git Repository</h3>
						<p className='text-sm text-muted-foreground'>Easily integrate your project with your preferred Git repository by connecting it.</p>
						<div className='bg-slate-50 p-6 space-y-3 mt-3'>
							<Image as={NextImage} src='/github.svg' alt='Github logo' height={48} width={48} />
							<p className='font-semibold'>
								{repositories[0]?.name ?? ''}{' '}
								<Chip color='primary' className='ml-2'>
									Connected
								</Chip>
							</p>
							<ButtonGroup>
								<Button>Disconnect</Button>
								<Button>Go to file</Button>
							</ButtonGroup>
						</div>
					</section>

					<section>
						<h2>Integrations</h2>
						<div>
							<h3>Github</h3>
							<DynamicSelect repositories={repositories ?? []} />
						</div>
					</section>
				</div>
			</div>
		</>
	);
};

export default ProjectSettingsPage;
