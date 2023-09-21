import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Switch } from '@/components/ui/switch';
import { GearIcon } from '@radix-ui/react-icons';
import Image from 'next/image';

const integrations = [
	{
		id: 1,
		name: 'ChatGPT',
		image: '/openai.png',
		description: 'Create professional, custom websites in a completely visual canvas with no code.',
		enabled: false,
	},
	{
		id: 2,
		name: 'Mailchimp',
		image: '/mailchimp.jpg',
		description: 'Create professional, custom websites in a completely visual canvas with no code.',
		enabled: false,
	},
	{
		id: 3,
		name: 'Zapier',
		image: '/zapier.svg',
		description: 'Create professional, custom websites in a completely visual canvas with no code.',
		enabled: false,
	},
	{
		id: 4,
		name: 'Slack',
		image: '/slack.svg',
		description: 'Create professional, custom websites in a completely visual canvas with no code.',
		enabled: false,
	},
	{
		id: 5,
		name: 'Github',
		image: '/github.png',
		description: 'Create professional, custom websites in a completely visual canvas with no code.',
		enabled: false,
	},
	{
		id: 6,
		name: 'Webflow',
		image: '/webflow.png',
		description: 'Create professional, custom websites in a completely visual canvas with no code.',
		enabled: true,
	},
];

const ProjectIntegrationsPage = () => {
	return (
		<div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3'>
			{integrations.map((integration) => (
				<Card key={integration.id}>
					<CardHeader className='flex flex-row gap-3'>
						<Image
							width={48}
							height={48}
							src={integration.image}
							alt={`${integration.name} Logo`}
							className='border-gray-400 h-12 w-12 mt-2 rounded-md border p-[2px] object-cover'
						/>

						<div className='m-0 !important'>
							<CardTitle className='text-lg'>{integration.name}</CardTitle>
							<CardDescription>{integration.description}</CardDescription>
						</div>
					</CardHeader>

					<CardContent>
						<Separator />
					</CardContent>

					<CardContent>
						<div className='flex items-center justify-between gap-3'>
							{integration.enabled ? <Button variant='outline'>Modify Connection</Button> : <div></div>}
							<div className='flex items-center gap-3'>
								<GearIcon />
								<Switch checked={integration.enabled} id={`${integration.name.toLowerCase()}-enabled`} />
							</div>
						</div>
					</CardContent>
				</Card>
			))}
		</div>
	);
};

export default ProjectIntegrationsPage;
