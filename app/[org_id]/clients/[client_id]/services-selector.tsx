'use client';
import React from 'react';
import { CheckboxGroup } from '@nextui-org/checkbox';
import { CustomCheckbox } from './custom-checkbox';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from '@nextui-org/modal';
import { Button } from '@nextui-org/button';
import { useDisclosure } from '@nextui-org/react';
import { integrations } from '../../projects/[project_id]/integrations/page';

const ServicesSelector = () => {
	const [groupSelected, setGroupSelected] = React.useState([]);
	const { isOpen, onOpen, onOpenChange } = useDisclosure();

	return (
		<>
			<Button onPress={onOpen}>Add Services</Button>
			<Modal isOpen={isOpen} onOpenChange={onOpenChange} scrollBehavior='inside'>
				<ModalContent>
					{(onClose) => (
						<>
							<ModalHeader className='flex flex-col gap-1'>Services</ModalHeader>
							<ModalBody>
								<div className='flex flex-col gap-1 w-full'>
									<CheckboxGroup
										label='Select services'
										value={groupSelected}
										onChange={setGroupSelected}
										classNames={{
											base: 'w-full',
										}}
									>
										{integrations.map((integration) => (
											<CustomCheckbox
												key={integration.id}
												value={integration.id}
												user={{
													name: integration.name,
													avatar: integration.image,
													username: integration.name,
													url: 'https://twitter.com/jrgarciadev',
													role: 'Software Developer',
													status: integration.enabled ? 'Enabled' : 'Disabled',
												}}
												statusColor={integration.color}
											/>
										))}
									</CheckboxGroup>
									<p className='mt-4 ml-1 text-default-500'>Selected: {groupSelected.join(', ')}</p>
								</div>
							</ModalBody>
							<ModalFooter>
								<Button color='danger' variant='light' onPress={onClose}>
									Close
								</Button>
								<Button color='primary' onPress={onClose}>
									Action
								</Button>
							</ModalFooter>
						</>
					)}
				</ModalContent>
			</Modal>
		</>
	);
};

export default ServicesSelector;
