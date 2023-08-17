import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import NewClientForm from '@/components/forms/newClientForm';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { getClients } from '@/app/lib/helpers';

const ClientsPage = async ({ params: { org_id } }: { params: { org_id: string } }) => {
	const clients = await getClients(org_id);

	return (
		<>
			<div className='flex items-center justify-between mb-4'>
				<h2 className='text-2xl font-semibold tracking-tight'>Clients</h2>
				<Sheet>
					<SheetTrigger asChild>
						<Button>Add Client</Button>
					</SheetTrigger>
					<SheetContent className='w-[700px] sm:w-[900px]'>
						<SheetHeader>
							<SheetTitle>Create Client</SheetTitle>
							<SheetDescription>
								This action cannot be undone. This will permanently delete your account and remove your data from our servers.
							</SheetDescription>
						</SheetHeader>
						<NewClientForm />
					</SheetContent>
				</Sheet>
			</div>
			<div className='grid grid-cols-2 gap-4'>
				<Card>
					<CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
						<CardTitle className='text-sm font-medium'>Active Clients</CardTitle>
					</CardHeader>
					<CardContent>
						<div className='text-2xl font-bold'>1,620</div>
					</CardContent>
				</Card>
				<Card>
					<CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
						<CardTitle className='text-sm font-medium'>Potential Clients</CardTitle>
					</CardHeader>
					<CardContent>
						<div className='text-2xl font-bold'>1,620</div>
					</CardContent>
				</Card>
			</div>
			<div className='grid grid-cols-3 gap-4 pt-4'>
				{clients.map((client) => (
					<Link key={client.id.toString()} href={`/${org_id}/clients/${client.id.toString()}`}>
						<Card>
							<CardHeader>
								<div className='flex items-center gap-4'>
									{/* <Avatar>
										<AvatarFallback>{client.name[0]}</AvatarFallback>
									</Avatar> */}
									<div>
										<CardTitle>{client.name}</CardTitle>
										<CardDescription>Test</CardDescription>
									</div>
								</div>
							</CardHeader>
							<CardContent>
								<div className='text-s'>$0.00</div>
								<p className='text-xs text-muted-foreground'>0.00% of income</p>
							</CardContent>
						</Card>
					</Link>
				))}
			</div>
		</>
	);
};

export default ClientsPage;
