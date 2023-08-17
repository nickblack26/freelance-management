import { connectToServer } from './supabase';

export async function getProjects(org_id: string) {
	const { supabase } = connectToServer();
	try {
		const { data, error } = await supabase.from('projects').select();
		if (!data || error) throw error;
		return data;
	} catch (error) {
		console.log(error);
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
	const { supabase } = connectToServer();

	try {
		const { data, error } = await supabase.from('clients').select().eq('business', org_id);
		if (!data || error) throw error;
		return data;
	} catch (error) {
		console.log(error);
	}
}

export async function getClient(client_id: string) {
	const { supabase } = connectToServer();

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
