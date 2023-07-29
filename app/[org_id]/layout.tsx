import { MainNav } from '@/components/navbar';
import { ScrollArea } from '@/components/ui/scroll-area';

const OrganizationLayout = async ({ params, children }: { params: { org_id: string }; children: React.ReactNode }) => {
	const { org_id } = params;

	return (
		<div className='flex flex-col h-full'>
			<div className='border-b'>
				<div className='flex h-16 items-center px-4'>
					<MainNav org_id={org_id} />
					<div className='ml-auto flex items-center space-x-4'>
						{/* <Search />
						<UserNav /> */}
					</div>
				</div>
			</div>
			<div>
				<ScrollArea className='flex-1 space-y-6 p-10 pb-16'>{children}</ScrollArea>
			</div>
		</div>
	);
};

export default OrganizationLayout;
