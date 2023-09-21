import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

export const connectToServer = () => {
	const supabase = createServerComponentClient<Database>({ cookies });
	return { supabase };
};
