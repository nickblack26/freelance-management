import { connectToServer } from '@/app/lib/supabase';
import React from 'react';

const SettingsAccountPage = async () => {
	const { supabase } = connectToServer();
	const {
		data: { session },
	} = await supabase.auth.getSession();

	return <div>SettingsAccountPage</div>;
};

export default SettingsAccountPage;
