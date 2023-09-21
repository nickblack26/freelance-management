'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRightIcon, HomeIcon, PersonIcon } from '@radix-ui/react-icons';
import Image from 'next/image';
import React from 'react';
import BusinessDetailsForm from './business-details-form';
import BusinessBrandingDetailsForm from './business-branding-details-form';
import { useBusinessContext } from '../BusinessContext';
import { Separator } from '@/components/ui/separator';

const CreateBusiness = () => {
	const { step, setStep, color } = useBusinessContext();

	return (
		<div className='cfirstner relative hidden h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-3 lg:px-0 bg-gray-50'>
			<div className='relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex'>
				<div className='absolute inset-0' style={{ backgroundColor: color }} />
				<div className='relative z-20 flex items-center gap-2 text-lg font-medium'>
					<Image
						className='relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert'
						src='/hourglass-white.svg'
						alt='Hourglass Logo'
						width={15}
						height={30}
						priority
					/>
					Hourglass
				</div>

				<div className='relative z-20 mt-auto'>
					<blockquote className='space-y-2'>
						<p className='text-lg'>
							&ldquo;This library has saved me countless hours of work and helped me deliver stunning designs to my clients faster than ever
							before.&rdquo;
						</p>
						<footer className='text-sm'>Sofia Davis</footer>
					</blockquote>
				</div>
			</div>
			<div className='col-span-2 h-full lg:py-36 lg:px-28 '>
				<div className='flex w-full flex-col'>
					{step === 1 && (
						<div className='flex flex-col max-w-lg'>
							<h1 className='text-4xl font-semibold tracking-tight'>Choose the type of company</h1>
							<p className='text-md text-muted-foreground'>Creating your company is just a few steps away.</p>
							<Card className='shadow-none mt-16 hover:cursor-pointer' onClick={() => setStep(step + 1)}>
								<CardHeader className='flex flex-row items-center justify-between'>
									<div className='flex items-center gap-3'>
										<div className='rounded-lg border p-2'>
											<PersonIcon className='h-8 w-8' />
										</div>
										<div>
											<CardTitle className='text-lg'>LLC</CardTitle>
											<CardDescription>Owned By Individuals</CardDescription>
										</div>
									</div>
									<ArrowRightIcon className='h-8 w-8' />
								</CardHeader>
							</Card>
							<Card className='shadow-none mt-6 hover:cursor-pointer bg-primary/5' onClick={() => setStep(step + 1)}>
								<CardHeader className='flex flex-row items-center justify-between'>
									<div className='flex items-center gap-3'>
										<div className='rounded-lg border p-2'>
											<HomeIcon className='h-8 w-8' />
										</div>
										<div>
											<CardTitle className='text-lg'>Corporation</CardTitle>
											<CardDescription>Owned By Stakeholders</CardDescription>
										</div>
									</div>
									<ArrowRightIcon className='fill-primary/20 h-8 w-8' />
								</CardHeader>
							</Card>
						</div>
					)}
					{step === 2 && (
						<div className='flex flex-col max-w-lg'>
							<h1 className='text-4xl font-semibold tracking-tight'>Business details</h1>
							<p className='text-md text-muted-foreground'>Details about your business corporation and shares.</p>
							<BusinessDetailsForm className='mt-8' />
						</div>
					)}
					{step === 3 && (
						<div className='flex flex-col max-w-lg'>
							<h1 className='text-4xl font-semibold tracking-tight'>Branding details</h1>
							<p className='text-md text-muted-foreground'>Details about your business corporation and shares.</p>
							<BusinessBrandingDetailsForm className='mt-8' />
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default CreateBusiness;
