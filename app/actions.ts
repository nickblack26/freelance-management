'use server';
import { createServerActionClient } from '@supabase/auth-helpers-nextjs';
import { PostgrestSingleResponse } from '@supabase/postgrest-js';
import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';
import { ProjectFormValues } from '@/components/forms/newProjectForm';
import { stripe } from '@/utils/stripe';
import { BusinessDetailFormValues } from './business/create/business-details-form';

export async function uploadFile(table: string, path: string, file: File) {
	'use server';
	const supabase = createServerActionClient<Database>({ cookies });

	try {
		const { data, error } = await supabase.storage.from(table).upload(path, file, {
			cacheControl: '3600',
			upsert: false,
		});

		if (!data || error) throw error;
		return data;
	} catch (error) {
		console.log(error);
	}
}

export const handleSignIn = async ({ email, password }: { email: string; password: string }) => {
	'use server';
	const supabase = createServerActionClient<Database>({ cookies });

	const { data, error } = await supabase.auth.signInWithPassword({
		email,
		password,
	});

	if (!data && error) {
		throw Error(`${error}`);
	}

	return data.user;
};

export const handleCreateUser = async (email: string, password: string, metadata: object) => {
	'use server';
	const supabase = createServerActionClient<Database>({ cookies });

	try {
		const { data, error } = await supabase.auth.signUp({
			email,
			password,
			options: {
				data: metadata,
			},
		});

		if (!data || error) throw error;

		return data.user;
	} catch (error) {
		console.log(error);
	}
};

export const handleSignOut = async () => {
	'use server';
	const supabase = createServerActionClient<Database>({ cookies });

	await supabase.auth.signOut();
	revalidatePath('/');
};

export const updateUserMetadata = async (metadata: object) => {
	'use server';
	const supabase = createServerActionClient<Database>({ cookies });
	const {
		data: { session },
	} = await supabase.auth.getSession();
	if (!session) return;
	const { user } = session;

	const { data, error } = await supabase.auth.updateUser({
		data: { ...user.user_metadata, metadata },
	});

	if (error) throw error;

	revalidatePath('/');
	return data;
};

export const createProject = async (project: ProjectFormValues) => {
	'use server';
	if (!project) return;
	const supabase = createServerActionClient<Database>({ cookies });

	const { error, data } = await supabase.from('projects').insert(project).select().single();

	if (error || !data) {
		console.log(error);
		throw Error(`${error}`);
	}

	revalidatePath('/');

	return data;
};

export const deleteProject = async (projectId: string) => {
	'use server';
	const supabase = createServerActionClient<Database>({ cookies });

	const { error } = await supabase.from('projects').delete().eq('id', projectId);

	if (error) {
		throw Error(`${error}`);
	}

	revalidatePath('/');
};

export const addClient = async (item: any) => {
	'use server';
	const supabase = createServerActionClient<Database>({ cookies });

	const { data, error } = await supabase.from('clients').insert(item).select().single();
	if (!data || error) {
		throw Error(`${error}`);
	}

	revalidatePath('/');
};

export const deleteClient = async (organizationId: string, client_id: string) => {
	'use server';
	const supabase = createServerActionClient<Database>({ cookies });

	revalidatePath('/');
};

export const getTransactions = async () => {
	'use server';
	const supabase = createServerActionClient<Database>({ cookies });

	const { error, data }: PostgrestSingleResponse<Transaction[]> = await supabase.from('transaction').select();

	if (error || !data) {
		console.log(error);
		return;
	}

	return data;
};

export const createBusiness = async (business: BusinessDetailFormValues) => {
	'use server';
	const supabase = createServerActionClient<Database>({ cookies });
	try {
		const { data, error } = await supabase.from('businesses').insert(business).select('*');
		if (!data || error) throw error;
		revalidatePath('/');
		return data;
	} catch (error) {
		console.log(error);
	}
};

export const createCheckout = async (priceId: string, orgId: string) => {
	'use server';

	const session = await stripe.checkout.sessions.create({
		mode: 'subscription',
		payment_method_types: ['card'],
		line_items: [{ price: priceId, quantity: 1 }],
		success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/${orgId}`,
		cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/pricing`,
	});

	return session;
};
