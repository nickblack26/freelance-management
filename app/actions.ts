'use server';

import { createServerActionClient } from '@supabase/auth-helpers-nextjs';
import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

const supabase = createServerActionClient({ cookies });

export const handleSignIn = async (formData: FormData) => {
	'use server';
	const email = String(formData.get('email'));
	const password = String(formData.get('password'));

	console.log(email, password);

	const supabase = createServerActionClient({ cookies });
	const { data, error } = await supabase.auth.signInWithPassword({
		email,
		password,
	});

	if (!error) {
		redirect(`/${data.user.user_metadata.organizations[0]}/`);
	}

	revalidatePath('/[org_id]/');
};

export const handleSignOut = async () => {
	await supabase.auth.signOut();
	revalidatePath('/[org_id]/');
};
