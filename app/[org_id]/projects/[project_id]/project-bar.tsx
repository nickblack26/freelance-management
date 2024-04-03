'use client';
import React from 'react';
import { Avatar } from '@nextui-org/avatar';
import { ScrollShadow } from '@nextui-org/scroll-shadow';
import { Link } from '@nextui-org/link';
import { Button } from '@nextui-org/button';
import { Image } from '@nextui-org/image';
import NextImage from 'next/image';

type Section = {
	name: string;
	items: any[];
};

const ProjectOverviewBar = () => {
	let sections: Section[] = [
		{ name: 'Notifications', items: [] },
		{ name: 'Activities', items: [] },
		{ name: 'Contacts', items: [] },
	];

	return (
		<div className='relative flex h-full w-72 max-w-[288px] flex-1 flex-col !border-l-small border-divider p-6 transition-[transform,opacity,margin] duration-250 ease-in-out space-y-6'>
			<ScrollShadow>
				<nav className='w-full space-y-2.5'>
					{sections.map((section) => (
						<li key={section.name}>
							<span className='pl-1 text-tiny text-foreground-500'>{section.name}</span>
							<ul className='list-none'>
								{section.items.map((item) => (
									<li className='list-none' key={item}></li>
								))}
							</ul>
						</li>
					))}
				</nav>
			</ScrollShadow>
		</div>
	);
};

export default ProjectOverviewBar;
