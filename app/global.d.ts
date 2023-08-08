import type { Database as DB } from '@/app/lib/database.types';

declare global {
	type Database = DB;
	interface Business extends DB['public']['Tables']['businesses']['Row'] {
		transactions?: Transaction[];
	}
	type BusinessMember = DB['public']['Tables']['business_members']['Row'];
	type BusinessUserRole = DB['public']['Tables']['business_user_role']['Row'];
	type Client = DB['public']['Tables']['clients']['Row'];
	type Goal = DB['public']['Tables']['goals']['Row'];
	type Invoice = DB['public']['Tables']['invoices']['Row'];
	type InvoiceLineItems = DB['public']['Tables']['invoice_line_items']['Row'];
	type LineItem = DB['public']['Tables']['line_items']['Row'];
	type Merchant = DB['public']['Tables']['merchants']['Row'];
	interface Project extends DB['public']['Tables']['projects']['Row'] {
		project_services?: ProjectService[];
	}
	interface ProjectService extends DB['public']['Tables']['project_services']['Row'] {
		project: Project;
		service: Service;
	}
	type Service = DB['public']['Tables']['services']['Row'];
	type Subscription = DB['public']['Tables']['subscriptions']['Row'];
	type Task = DB['public']['Tables']['tasks']['Row'];
	type TaxCategory = DB['public']['Tables']['tax_categories']['Row'];
	type TimeSheets = DB['public']['Tables']['time_sheets']['Row'];
	type Transaction = DB['public']['Tables']['transactions']['Row'];
	type User = DB['public']['Tables']['users']['Row'];
	type SidebarNavItem = {
		title: string;
		href: string;
	};
}
