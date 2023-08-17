// import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
// import { NextResponse } from 'next/server';
// import { cookies } from 'next/headers';

// export async function GET(request: Request, { params: { org_id } }: { params: { org_id: string } }) {
// 	const cookiesList = cookies();
// 	console.log(cookiesList.getAll());
// 	const supabase = createRouteHandlerClient<Database>({ cookies });
// 	console.log(org_id);
// 	const { data, error } = await supabase
// 		.from('transactions')
// 		.select('id, amount, purpose, date')
// 		.eq('business', org_id)
// 		.gte('date', '2023-01-01')
// 		.lte('date', '2023-03-21')
// 		.order('date', { ascending: false });

// 	return NextResponse.json(data);
// }
