'use server';
import { createServerActionClient } from '@supabase/auth-helpers-nextjs';
import { PostgrestSingleResponse } from '@supabase/postgrest-js';
import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { ProjectFormValues } from '@/components/forms/newProjectForm';

const supabase = createServerActionClient<Database>({ cookies });

export const handleSignIn = async ({ email, password }: { email: any; password: any }) => {
	'use server';
	const { data, error } = await supabase.auth.signInWithPassword({
		email,
		password,
	});

	if (!data && error) {
		throw Error(`${error}`);
	}

	return data.user;
};

export const handleSignOut = async () => {
	'use server';
	await supabase.auth.signOut();
	revalidatePath('/');
};

export const createProject = async (project: ProjectFormValues) => {
	'use server';
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
	const { error } = await supabase.from('projects').delete().eq('id', projectId);

	if (error) {
		throw Error(`${error}`);
	}

	revalidatePath('/');
};

export const addClient = async (item: any) => {
	'use server';
	const { data, error } = await supabase.from('clients').insert(item).select().single();
	if (!data || error) {
		throw Error(`${error}`);
	}

	revalidatePath('/');
};

export const deleteClient = async (organizationId: string, client_id: string) => {
	'use server';

	revalidatePath('/');
};

export const getTransactions = async () => {
	'use server';
	const { error, data }: PostgrestSingleResponse<Transaction[]> = await supabase.from('transaction').select();

	if (error || !data) {
		console.log(error);
		return;
	}

	return data;
};
