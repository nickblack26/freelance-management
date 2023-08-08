import { buttonVariants } from '@/components/ui/button';
import { UserAuthForm } from '@/components/user-auth-form';
import { cn } from '@/app/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const LoginPage = () => {
	return (
		<>
			<div className='md:hidden'>
				<Image src='/examples/authentication-light.png' width={1280} height={843} alt='Authentication' className='block dark:hidden' />
				<Image src='/examples/authentication-dark.png' width={1280} height={843} alt='Authentication' className='hidden dark:block' />
			</div>
			<div className='container relative hidden h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0'>
				<Link href='/create-account' className={cn(buttonVariants({ variant: 'ghost' }), 'absolute right-4 top-4 md:right-8 md:top-8')}>
					Create account
				</Link>
				<div className='relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex'>
					<div className='absolute inset-0 bg-zinc-900' />
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
				<div className='lg:p-8'>
					<div className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]'>
						<div className='flex flex-col space-y-2 text-center'>
							<h1 className='text-2xl font-semibold tracking-tight'>Create an account</h1>
							<p className='text-sm text-muted-foreground'>Enter your email below to create your account</p>
						</div>
						<UserAuthForm />
						<p className='px-8 text-center text-sm text-muted-foreground'>
							By clicking continue, you agree to our{' '}
							<Link href='/terms' className='underline underline-offset-4 hover:text-primary'>
								Terms of Service
							</Link>{' '}
							and{' '}
							<Link href='/privacy' className='underline underline-offset-4 hover:text-primary'>
								Privacy Policy
							</Link>
							.
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default LoginPage;
