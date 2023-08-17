'use client';

import Link from 'next/link';
import { zodResolver } from '@hookform/resolvers/zod';
import { useFieldArray, useForm } from 'react-hook-form';
import * as z from 'zod';
import { cn } from '@/app/lib/utils';
import { Button } from '../ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Input } from '../ui/input';
import { toast } from '../ui/use-toast';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

const profileFormSchema = z.object({
	id: z.string(),
	first_name: z.string().min(1, {
		message: 'First name must be at least 1 character.',
	}),
	last_name: z.string().min(1, {
		message: 'Last name must be at least 1 character.',
	}),
	username: z.string().min(1, {
		message: 'Username must be at least 1 character.',
	}),
	email: z
		.string({
			required_error: 'Please select an email to display.',
		})
		.email(),
	image_url: z.string(),
});

type ProfileFormValues = z.infer<typeof profileFormSchema>;

export function ProfileForm({ user }: { user: User }) {
	// This can come from your database or API.
	const defaultValues: Partial<ProfileFormValues> = user;

	const form = useForm<ProfileFormValues>({
		resolver: zodResolver(profileFormSchema),
		defaultValues,
		mode: 'onChange',
	});

	function onSubmit(data: ProfileFormValues) {
		toast({
			title: 'You submitted the following values:',
			description: (
				<pre className='mt-2 w-[340px] rounded-md bg-slate-950 p-4'>
					<code className='text-white'>{JSON.stringify(data, null, 2)}</code>
				</pre>
			),
		});
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
				<FormField
					control={form.control}
					name='image_url'
					render={({ field }) => (
						<FormItem className='flex items-center gap-4'>
							<Avatar className=' h-24 w-24'>
								<AvatarImage className='object-cover' src={field.value ?? undefined} />
								<AvatarFallback></AvatarFallback>
							</Avatar>
							<FormControl>
								<Input type='file' {...field} />
							</FormControl>

							<FormMessage />
						</FormItem>
					)}
				/>
				<div className='grid gap-4 lg:grid-cols-2 sm:grid-cols-1'>
					<FormField
						control={form.control}
						name='first_name'
						render={({ field }) => (
							<FormItem>
								<FormLabel>First Name</FormLabel>
								<FormControl>
									<Input placeholder='John' {...field} />
								</FormControl>

								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='last_name'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Last Name</FormLabel>
								<FormControl>
									<Input placeholder='Smith' {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>
				<FormField
					control={form.control}
					name='username'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Username</FormLabel>
							<FormControl>
								<Input placeholder='jsmith' {...field} />
							</FormControl>
							<FormDescription>
								This is your public display name. It can be your real name or a pseudonym. You can only change this once every 30 days.
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='email'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Email</FormLabel>

							<FormDescription>
								You can manage verified email addresses in your <Link href='/examples/forms'>email settings</Link>.
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button type='submit'>Update profile</Button>
			</form>
		</Form>
	);
}
