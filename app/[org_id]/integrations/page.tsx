import React from 'react';
import { integrations } from '../projects/[project_id]/integrations/page';
import IntegrationCard from './card';

const IntegrationsPage = () => {
	return (
		<div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3'>
			{integrations.map((integration) => (
				<IntegrationCard key={integration.id} integration={integration} />
			))}
		</div>
	);
};

export default IntegrationsPage;
