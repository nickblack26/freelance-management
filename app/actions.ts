'use server';
import { PostgrestSingleResponse } from '@supabase/postgrest-js';
import { revalidatePath } from 'next/cache';
import { ProjectFormValues } from '@/components/forms/newProjectForm';
import { stripe } from '@/utils/stripe';
import { BusinessDetailFormValues } from './business/create/business-details-form';
import { createClient } from '@/utils/supabase/server';

export async function uploadFile(table: string, path: string, file: File) {
	const supabase = createClient();

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
	const supabase = createClient();

	const { data, error } = await supabase.auth.signInWithPassword({
		email,
		password,
	});

	console.log(data);

	if (!data && error) {
		throw Error(`${error}`);
	}

	return data.user;
};

export const handleCreateUser = async (email: string, password: string, metadata: object) => {
	const supabase = createClient();

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
	const supabase = createClient();

	await supabase.auth.signOut();
	revalidatePath('/');
};

export const updateUserMetadata = async (metadata: object) => {
	const supabase = createClient();

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
	const supabase = createClient();
	if (!project) return;

	const { error, data } = await supabase.from('projects').insert(project).select().single();

	if (error || !data) {
		console.log(error);
		throw Error(`${error}`);
	}

	revalidatePath('/');

	return data;
};

export const deleteProject = async (projectId: string) => {
	const supabase = createClient();

	const { error } = await supabase.from('projects').delete().eq('id', projectId);

	if (error) {
		throw Error(`${error}`);
	}

	revalidatePath('/');
};

export const addClient = async (item: any) => {
	const supabase = createClient();

	const { data, error } = await supabase.from('clients').insert(item).select().single();
	if (!data || error) {
		throw Error(`${error}`);
	}

	revalidatePath('/');
};

export const deleteClient = async (organizationId: string, client_id: string) => {
	const supabase = createClient();

	revalidatePath('/');
};

export const getTransactions = async () => {
	const supabase = createClient();

	const { error, data }: PostgrestSingleResponse<Transaction[]> = await supabase.from('transaction').select();

	if (error || !data) {
		console.log(error);
		return;
	}

	return data;
};

export const createBusiness = async (business: BusinessDetailFormValues) => {
	const supabase = createClient();

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
	const session = await stripe.checkout.sessions.create({
		mode: 'subscription',
		payment_method_types: ['card'],
		line_items: [{ price: priceId, quantity: 1 }],
		success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/${orgId}`,
		cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/pricing`,
	});

	return session;
};

export async function signInWithGithub() {
	const supabase = createClient();
	const { data, error } = await supabase.auth.signInWithOAuth({
		provider: 'github',
		options: {
			redirectTo: '/d552242b-4403-4e76-b122-ad8365113e9d/',
		},
	});

	console.log(error, data);
}
