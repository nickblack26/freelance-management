'use client';
import { cn } from '@/app/lib/utils';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useBusinessContext } from '../BusinessContext';
import { createBusiness, updateUserMetadata } from '@/app/actions';

const businessDetailFormSchema = z.object({
	name: z.string().min(1, {
		message: 'Business must be at least 1 character.',
	}),
	tax_id_label: z.string().optional(),
	tax_id_number: z.string().optional(),
	phone_number: z.string().optional(),
	address_line1: z.string().optional(),
	address_line2: z.string().optional(),
	address_line3: z.string().optional(),
	city: z.string().optional(),
	postal_code: z.string().optional(),
	country: z.string().optional(),
});

export type BusinessDetailFormValues = z.infer<typeof businessDetailFormSchema>;

interface BusinessDetailsFormProps extends React.HTMLAttributes<HTMLDivElement> {}

const BusinessDetailsForm = ({ className, ...props }: BusinessDetailsFormProps) => {
	const { step, setStep, name, setName } = useBusinessContext();

	const form = useForm<BusinessDetailFormValues>({
		resolver: zodResolver(businessDetailFormSchema),
		mode: 'onChange',
	});

	async function onSubmit(values: z.infer<typeof businessDetailFormSchema>) {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		console.log('hello');
		setStep(step + 1);
		const data = await createBusiness(values);
		await updateUserMetadata(data?.id);
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className={cn('space-y-8', className)}>
				<FormField
					control={form.control}
					name='name'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Business Name</FormLabel>
							<FormControl>
								<Input placeholder='Acme Corporation, Inc.' {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<div className='grid gap-2 grid-cols-4'>
					<FormField
						control={form.control}
						name='tax_id_label'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Tax ID Label</FormLabel>
								<FormControl>
									<Input placeholder='Label' {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='tax_id_number'
						render={({ field }) => (
							<FormItem className='col-span-3'>
								<FormLabel>Tax ID Number</FormLabel>
								<FormControl>
									<Input placeholder='Z-123456' {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>
				<FormField
					control={form.control}
					name='phone_number'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Phone Number</FormLabel>
							<FormControl>
								<Input autoComplete='phone' placeholder='(555) 555-5555' {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<div className='grid grid-cols-2 gap-2'>
					<FormField
						control={form.control}
						name='address_line1'
						render={({ field }) => (
							<FormItem className='col-span-2'>
								<FormLabel>Address</FormLabel>
								<FormControl>
									<Input autoComplete='address_line1' placeholder='123 Corporation Dr' {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='address_line2'
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Input autoComplete='address_line2' placeholder='Ste. 12345' {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='address_line3'
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Input autoComplete='address_line3' placeholder='Ste. 12345' {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='city'
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Input placeholder='City' {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='country'
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Input placeholder='United States' {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>
				<div className='flex items-center justify-between'>
					<Button variant='link' className='pl-0' onClick={() => setStep(step - 1)}>
						Previous Step
					</Button>
					<Button type='submit'>
						Next <ArrowRightIcon className='ml-2' />
					</Button>
				</div>
			</form>
		</Form>
	);
};

export default BusinessDetailsForm;
