import { cn } from '@/app/lib/utils';
import { GradientPicker } from '@/components/color-picker';
import React, { useState } from 'react';
import { z } from 'zod';
import { useBusinessContext } from '../BusinessContext';
import { Button } from '@/components/ui/button';
import { ArrowRightIcon, ImageIcon } from '@radix-ui/react-icons';
import { Card, CardHeader } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import Image from 'next/image';

interface BusinessBrandingDetailsFormProps extends React.HTMLAttributes<HTMLDivElement> {}

const fileToDataUri = (file: File) =>
	new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.onload = (event) => {
			resolve(event.target.result);
		};
		reader.readAsDataURL(file);
	});

const BusinessBrandingDetailsForm = ({ className, ...props }: BusinessBrandingDetailsFormProps) => {
	const { step, setStep, color, setColor } = useBusinessContext();
	const [image, setImage] = useState('');

	const convertToImage = async (file: File | null) => {
		if (!file) {
			setImage('');
			return;
		}

		const data = await fileToDataUri(file);
		setImage(data);
	};

	return (
		<form className={cn('space-y-8', className)}>
			<Label>
				Main color
				<GradientPicker background={color} setBackground={setColor} />
			</Label>

			<Label>
				Logo
				<div className='flex'>
					{image && <Image src={image} alt='logo' width={48} height={48} className='h-12 w-12 object-cover' />}
					<Card className='border-dashed flex-1'>
						<CardHeader className='grid place-items-center relative'>
							<ImageIcon className='w-12 h-12' />
							<p>
								Drop your image here or <span className='text-primary'>browse</span>
							</p>
							<input
								type='file'
								accept='image/*'
								onChange={(event) => convertToImage(event && event.target && event.target.files ? event.target.files[0] : null)}
								className='absolute z-10 opacity-0 h-full w-full hover:cursor-pointer'
							/>
						</CardHeader>
					</Card>
				</div>
			</Label>

			<div className='flex items-center justify-between'>
				<Button variant='link' className='pl-0' onClick={() => setStep(step - 1)}>
					Previous Step
				</Button>
				<Button>Complete Setup</Button>
			</div>
		</form>
	);
};

export default BusinessBrandingDetailsForm;
