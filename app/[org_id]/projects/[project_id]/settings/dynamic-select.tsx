'use client';
import { Repository } from '@/lib/helpers';
import { Image } from '@nextui-org/image';
import { Select, SelectItem } from '@nextui-org/select';
import React from 'react';
import NextImage from 'next/image';

const DynamicSelect = ({ repositories }: { repositories: Repository[] }) => {
	return (
		<Select
			items={repositories ?? []}
			label='Repository'
			placeholder='Select a repository'
			labelPlacement='outside'
			className='max-w-xs'
			renderValue={(items) => {
				return items.map((item) => (
					<div key={item.key} className='flex items-center gap-2 py-1'>
						<Image as={NextImage} width={24} height={24} alt='Github logo' src='/github.svg' />
						<div className='flex flex-col'>
							<span className='text-sm'>{item.data?.name}</span>
							<span className='text-default-500 text-xs'>({item.data?.full_name})</span>
						</div>
					</div>
				));
			}}
		>
			{(repository) => <SelectItem key={repository.id}>{repository.name}</SelectItem>}
		</Select>
	);
};

export default DynamicSelect;
