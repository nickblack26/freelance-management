'use client';
import * as React from 'react';
import { cn } from '@/app/lib/utils';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { ReloadIcon, GitHubLogoIcon } from '@radix-ui/react-icons';
import { handleSignIn } from '@/app/actions';
import { experimental_useFormStatus as useFormStatus } from 'react-dom';
import { redirect } from 'next/navigation';

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
	const { pending } = useFormStatus();

	async function onSubmit(formData: FormData) {
		const email = formData.get('email');
		const password = formData.get('password');
		if (!email || !password) return;
		const user = await handleSignIn({ email, password });

		if (!user || !user.user_metadata.organizations) return;

		redirect(`/${user.user_metadata.organizations[0]}`);
	}

	return (
		<div className={cn('grid gap-6', className)} {...props}>
			<form action={onSubmit}>
				<div className='grid gap-2'>
					<div className='grid gap-1'>
						<Label className='sr-only' htmlFor='email'>
							Email
						</Label>
						<Input
							id='email'
							name='email'
							placeholder='name@example.com'
							type='email'
							autoCapitalize='none'
							autoComplete='email'
							autoCorrect='off'
							disabled={pending}
						/>
					</div>
					<div className='grid gap-1'>
						<Label className='sr-only' htmlFor='password'>
							Password
						</Label>
						<Input
							id='password'
							name='password'
							placeholder='•••••'
							type='password'
							autoCapitalize='none'
							autoComplete='password'
							autoCorrect='off'
							disabled={pending}
						/>
					</div>
					<Button>
						{pending && <ReloadIcon className='mr-2 h-4 w-4 animate-spin' />}
						Sign In
					</Button>
				</div>
			</form>
			<div className='relative'>
				<div className='absolute inset-0 flex items-center'>
					<span className='w-full border-t' />
				</div>
				<div className='relative flex justify-center text-xs uppercase'>
					<span className='bg-background px-2 text-muted-foreground'>Or continue with</span>
				</div>
			</div>
			<Button variant='outline' type='button'>
				{pending ? <ReloadIcon className='mr-2 h-4 w-4 animate-spin' /> : <GitHubLogoIcon className='mr-2 h-4 w-4' />} Github
			</Button>
		</div>
	);
}
