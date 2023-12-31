import { ProfileForm } from '@/components/forms/profile-form';
import { Separator } from '@/components/ui/separator';
import React from 'react';

const SettingBusinessPage = () => {
	return (
		<div className='space-y-6'>
			<div>
				<h3 className='text-lg font-medium'>Account</h3>
				<p className='text-sm text-muted-foreground'>Update your account settings. Set your preferred language and timezone.</p>
			</div>
			<Separator />
			<ProfileForm />
		</div>
	);
};

export default SettingBusinessPage;
