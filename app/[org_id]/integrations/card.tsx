'use client';
import React from 'react';
import { Card, CardHeader, CardFooter } from '@nextui-org/card';
import { Divider } from '@nextui-org/divider';
import { Image } from '@nextui-org/image';
import { Button } from '@nextui-org/button';
import { GearIcon } from '@radix-ui/react-icons';
import { Switch } from '@nextui-org/switch';
import { Integration } from '@/types/helper.types';
import { redirect } from 'next/navigation';
import { handleOAuthRequest } from '@/app/actions';

const IntegrationCard = ({ integration }: { integration: Integration }) => {
	return (
		<Card>
			<CardHeader className='flex gap-3'>
				<Image alt={`${integration.name} logo`} height={48} width={48} radius='md' src={integration.image} />
				<div className='flex flex-col'>
					<p className='text-md'>{integration.name}</p>
					<p className='text-small text-default-500'>{integration.oAuthUrl}</p>
				</div>
			</CardHeader>

			<Divider />

			<CardFooter>
				<div className='flex items-center gap-3 flex-1'>
					{integration.enabled && (
						<Button type='submit' onClick={async () => await handleOAuthRequest(integration.oAuthUrl, integration.urlParams)} variant='bordered'>
							Authorize
						</Button>
					)}
					<div className='flex items-center gap-3 ml-auto'>
						<GearIcon />
						<Switch defaultSelected={integration.enabled} aria-label={`${integration.name.toLowerCase()} enabled`} />
					</div>
				</div>
			</CardFooter>
		</Card>
	);
};

export default IntegrationCard;
