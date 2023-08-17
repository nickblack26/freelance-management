import { connectToServer } from '@/app/lib/supabase';
import { ProfileForm } from '@/components/forms/profile-form';
import { Separator } from '@/components/ui/separator';
import React from 'react';

const SettingAccountPage = async () => {
	const { supabase } = connectToServer();
	const {
		data: { session },
	} = await supabase.auth.getSession();
	if (!session) return;
	const {
		user: { id },
	} = session;
	let { data: user } = await supabase.from('users').select().eq('id', id).single();
	if (user && user?.image_url) {
		const { data } = await supabase.storage.from('avatars').download(user.image_url);
		if (!data) return;
		const image_url = URL.createObjectURL(data);
		user = { ...user, image_url };
		console.log(user);
	}
	if (!user) return;

	return (
		<div className='space-y-6'>
			<div>
				<h3 className='text-lg font-medium'>Account</h3>
				<p className='text-sm text-muted-foreground'>Update your account settings. Set your preferred language and timezone.</p>
			</div>
			<Separator />
			<ProfileForm user={user} />
		</div>
	);
};

export default SettingAccountPage;
