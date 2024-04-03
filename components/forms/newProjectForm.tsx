'use client';
import React from 'react';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from '@/components/ui/command';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { CaretSortIcon, CheckIcon, ReloadIcon } from '@radix-ui/react-icons';
import { cn } from '@/lib/utils';
import { useFormStatus } from 'react-dom';
import { createProject } from '@/app/actions';
import { useGlobalContext } from '@/app/context/store';

const projectFormSchema = z.object({
	name: z.string().min(1, {
		message: 'Name must be at least 1 character.',
	}),
	client: z.string().uuid({
		message: 'Please select an client.',
	}),
	// description: z.string(),
	// maximum_revisions: z.number(),
	// url: z.string().url({ message: 'Please enter a valid URL.' }),
});

export type ProjectFormValues = z.infer<typeof projectFormSchema>;

// This can come from your database or API.
const defaultValues: Partial<ProjectFormValues> = {
	// maximum_revisions: 5,
};

const NewProjectForm = ({ clients }: { clients: Client[] }) => {
	const { pending } = useFormStatus();
	const { organizationId } = useGlobalContext();

	const form = useForm<ProjectFormValues>({
		resolver: zodResolver(projectFormSchema),
		defaultValues,
		mode: 'onChange',
	});

	function onSubmit(data: ProjectFormValues) {
		console.log(data);
		createProject({ ...data, business: organizationId! });
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
								<Input placeholder='Website Maintenance' {...field} />
							</FormControl>
							<FormDescription>This is the name of the client.</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='client'
					render={({ field }) => (
						<FormItem className='flex flex-col'>
							<FormLabel>Client</FormLabel>
							<Popover>
								<PopoverTrigger asChild>
									<FormControl>
										<Button variant='outline' role='combobox' className={cn('justify-between', !field.value && 'text-muted-foreground')}>
											{field.value ? clients.find((client) => client.id === field.value)?.name : 'Select client'}
											<CaretSortIcon className='ml-2 h-4 w-4 shrink-0 opacity-50' />
										</Button>
									</FormControl>
								</PopoverTrigger>
								<PopoverContent className='p-0'>
									<Command>
										<CommandInput placeholder='Search client...' className='h-9' />
										<CommandEmpty>No client found.</CommandEmpty>
										<CommandGroup>
											{clients?.map((client) => (
												<CommandItem
													value={client.id}
													key={client.id}
													onSelect={() => {
														form.setValue('client', client.id);
													}}
												>
													{client.name}
													<CheckIcon className={cn('ml-auto h-4 w-4', client.id === field.value ? 'opacity-100' : 'opacity-0')} />
												</CommandItem>
											))}
										</CommandGroup>
									</Command>
								</PopoverContent>
							</Popover>
							<FormDescription>This is the language that will be used in the dashboard.</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				{/* <FormField
					control={form.control}
					name='maximum_revisions'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Maxiumum Revisions</FormLabel>
							<FormControl>
								<Input type='number' {...field} onChange={(event) => field.onChange(+event.target.valueAsNumber)} />
							</FormControl>
							<FormDescription>
								This is the number of revisions that you allow the client to have. They will get charged a 50% premium if they go over.
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/> */}
				<Button>{pending && <ReloadIcon className='mr-2 h-4 w-4 animate-spin' />}Create</Button>
				{/* <SheetClose asChild>
				</SheetClose> */}
			</form>
		</Form>
	);
};

export default NewProjectForm;
