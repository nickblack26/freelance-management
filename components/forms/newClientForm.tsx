'use client';
import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { addClient } from '@/app/actions';
import { experimental_useFormStatus as useFormStatus } from 'react-dom';
import { useGlobalContext } from '@/app/context/store';

const clientFormSchema = z.object({
	name: z.string().min(1, {
		message: 'Name must be at least 1 character.',
	}),
	business: z.string().min(1, {
		message: 'Name must be at least 1 character.',
	}),
});

const NewClientForm = () => {
	const { pending } = useFormStatus();
	const { organizationId } = useGlobalContext();

	const form = useForm<z.infer<typeof clientFormSchema>>({
		resolver: zodResolver(clientFormSchema),
		defaultValues: {
			name: '',
			business: organizationId!,
		},
	});

	function onSubmit(values: z.infer<typeof clientFormSchema>) {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		values = { ...values, business: organizationId ? organizationId : '' };
		console.log(values);
		addClient(values);
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
				<FormField
					control={form.control}
					name='name'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Name</FormLabel>
							<FormControl>
								<Input placeholder='shadcn' {...field} />
							</FormControl>
							<FormDescription>This is your public display name.</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button type='submit'>Submit</Button>
			</form>
		</Form>
	);
};

export default NewClientForm;
