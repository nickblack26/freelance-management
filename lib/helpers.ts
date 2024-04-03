import { createClient } from '@/utils/supabase/server';
import { connectToServer } from './supabase';

export async function getProjects(org_id: string) {
	const supabase = createClient();

	try {
		const { data, error } = await supabase.from('projects').select();
		if (!data || error)
			throw Error('Error getting projects', {
				cause: error.message,
			});
		return data;
	} catch (error) {
		console.log(error);
	}
}

export type Repository = {
	id: number;
	node_id: string;
	name: string;
	full_name: string;
};

export async function getRepositories(): Promise<Repository[] | undefined> {
	'use server';
	const supabase = createClient();

	const {
		data: { user },
	} = await supabase.auth.getUser();

	if (!user) return;

	console.log(user.user_metadata.github.access_token);
	try {
		const response = await fetch('https://api.github.com/user/repos', {
			headers: {
				Accept: 'Accept: application/vnd.github+json',
				Authorization: `Bearer ${user.user_metadata.github.access_token}`,
				'X-GitHub-Api-Version': '2022-11-28',
			},
		});

		const data = await response.json();

		return data;
	} catch (error) {
		console.error(error);
	}
}

export async function getProject(project_id: string) {
	const { supabase } = connectToServer();

	try {
		const { data: project, error } = await supabase.from('projects').select().eq('id', project_id).single();
		if (error) throw error;
		const { data: tasks, error: taskError } = await supabase.from('tasks').select();
		if (taskError) throw taskError;
		return {
			project,
			tasks,
		};
	} catch (error) {
		console.log(error);
	}
}

export async function getClients(org_id: string) {
	const supabase = createClient();

	try {
		const { data, error } = await supabase.from('clients').select().eq('business', org_id);
		console.log(data, error);
		if (!data || error) throw Error('Error getting clients', { cause: error });
		return data;
	} catch (error) {
		console.error(error);
	}
}

export async function getClient(client_id: string) {
	const supabase = createClient();

	try {
		const { data, error } = await supabase.from('clients').select('*, projects(id, name, project_services(service(*)))').eq('id', client_id).single();
		if (!data || error) throw error;
		return data;
	} catch (error) {
		console.log(error);
	}
}

export async function getTransactions(org_id: string) {
	const { supabase } = connectToServer();

	try {
		const { data, error } = await supabase
			.from('transactions')
			.select('id, purpose, date, amount, tax_category(name), merchant(*)')
			.eq('business', org_id)
			.order('date', { ascending: false });
		if (!data || error) throw error;
	} catch (error) {
		console.log(error);
	}
}

export async function getBusiness(business_id: string) {
	const { supabase } = connectToServer();

	try {
		const { data, error } = await supabase.from('businesses').select('*, services(*)').eq('id', business_id).single();
		if (!data || error) throw error;
		return data;
	} catch (error) {
		console.log(error);
	}
}
