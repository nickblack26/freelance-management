import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Switch } from '@/components/ui/switch';
import { Integration } from '@/types/helper.types';
import { GearIcon } from '@radix-ui/react-icons';
import Image from 'next/image';

export const integrations: Integration[] = [
	{
		id: 1,
		name: 'ChatGPT',
		image: '/openai.svg',
		description: 'Create professional, custom websites in a completely visual canvas with no code.',
		enabled: false,
		color: '#000',
	},
	{
		id: 2,
		name: 'Mailchimp',
		image: '/mailchimp.jpg',
		description: 'Create professional, custom websites in a completely visual canvas with no code.',
		enabled: false,
		color: '#FBDB3B',
	},
	{
		id: 3,
		name: 'Zapier',
		image: '/zapier.svg',
		description: 'Create professional, custom websites in a completely visual canvas with no code.',
		enabled: false,
		color: '#EC541E',
	},
	{
		id: 4,
		name: 'Slack',
		image: '/slack.svg',
		description: 'Create professional, custom websites in a completely visual canvas with no code.',
		enabled: false,
		color: '#50235C',
	},
	{
		id: 5,
		name: 'Github',
		image: '/github.svg',
		description: 'Create professional, custom websites in a completely visual canvas with no code.',
		enabled: true,
		color: '#171717',
		oAuthUrl: 'https://github.com/login/oauth/authorize',
		urlParams: {
			client_id: process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID!,
			redirect_uri: 'http://localhost:3000/api/integrate/github',
			scope: 'repo user project',
		},
	},
	{
		id: 6,
		name: 'Webflow',
		image: '/webflow.png',
		description: 'Create professional, custom websites in a completely visual canvas with no code.',
		enabled: true,
		color: '#3951F8',
		oAuthUrl: 'https://webflow.com/oauth/authorize',
		urlParams: {
			client_id: process.env.NEXT_PUBLIC_WEBFLOW_CLIENT_ID!,
			response_type: 'code',
			scope: 'assets:read authorized_user:read cms:read custom_code:read custom_code:write pages:read sites:read users:read ecommerce:read',
			redirect_uri: 'https://freelance-management.vercel.app/api/integrate/webflow',
		},
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
