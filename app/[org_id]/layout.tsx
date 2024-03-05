import { getClients, getProjects } from '@/lib/helpers';
import { Image } from '@nextui-org/image';
import NextImage from 'next/image';
import { Avatar } from '@nextui-org/avatar';
import { Spacer } from '@nextui-org/spacer';
import { ScrollShadow } from '@nextui-org/scroll-shadow';
import { Link } from '@nextui-org/link';
import { Button } from '@nextui-org/button';

const OrganizationLayout = async ({ params, children }: { params: { org_id: string }; children: React.ReactNode }) => {
	const { org_id } = params;
	const clients = await getClients(org_id);
	const projects = await getProjects(org_id);

	return (
		<div className='flex w-full' style={{ height: '100dvh' }}>
			<div className='relative flex h-full w-72 max-w-[288px] flex-1 flex-col !border-r-small border-divider p-6 transition-[transform,opacity,margin] duration-250 ease-in-out'>
				<div className='flex items-center gap-2 px-2'>
					<div className='flex h-8 w-8 items-center justify-center rounded-full bg-foreground'>
						<svg fill='none' height='36' viewBox='0 0 32 32' width='36' className='text-background'>
							<path
								clip-rule='evenodd'
								d='M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z'
								fill='currentColor'
								fill-rule='evenodd'
							/>
						</svg>
						d
					</div>
					<span className='text-small font-bold uppercase'>Acme</span>
				</div>

				<Spacer />

				<div className='flex items-center gap-3 px-3'>
					<Avatar isBordered size='sm' src='https://i.pravatar.cc/150?u=a042581f4e29026024d' />
					<div className='flex flex-col'>
						<p className='text-small font-medium text-default-600'>John Doe</p>
						<p className='text-tiny text-default-400'>Product Designer</p>
					</div>
				</div>

				<ScrollShadow>
					<nav className='w-full'>
						<Button
							href='https://github.com/nextui-org/nextui'
							as={Link}
							color='default'
							className='w-full justify-between'
							endContent={
								<svg
									xmlns='http://www.w3.org/2000/svg'
									aria-hidden='true'
									role='img'
									className='text-default-400 iconify iconify--solar'
									width='24'
									height='24'
									viewBox='0 0 24 24'
								>
									<g fill='none' stroke='currentColor' stroke-width='1.5'>
										<circle cx='12' cy='12' r='10' opacity='.5'></circle>
										<path stroke-linecap='round' d='M15 12h-3m0 0H9m3 0V9m0 3v3'></path>
									</g>
								</svg>
							}
							variant='light'
						>
							Button Link
						</Button>
					</nav>
				</ScrollShadow>
			</div>
			<div className='flex-1 p-4'>{children}</div>
		</div>
	);
};

export default OrganizationLayout;
