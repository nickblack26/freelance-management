'use client';
import React from 'react';
import { Button, buttonVariants } from '@/components/ui/button';
import { ReloadIcon } from '@radix-ui/react-icons';
// @ts-ignore
import { useFormStatus } from 'react-dom';

import { type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
// import { experimental_useFormStatus } from 'react-dom';

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
	children: React.ReactNode;
}

const SubmitButton = React.forwardRef<HTMLButtonElement, Props>(({ children, variant, className, size, ...props }, ref) => {
	const { pending } = useFormStatus();

	return (
		<Button className={cn(buttonVariants({ variant, size, className }))} type='submit' ref={ref} {...props} disabled={pending || props.disabled}>
			{pending && <ReloadIcon className='mr-2 h-4 w-4 animate-spin' />}
			{children}
		</Button>
	);
});

SubmitButton.displayName = 'SubmitButton';

export default SubmitButton;
