import type { Database as DB } from '@/app/lib/database.types';

declare global {
	type Database = DB;
	type B = DB['public']['Tables']['businesses']['Row'];
	interface Business extends B {
		services?: Service[];
	}
	type BusinessMember = DB['public']['Tables']['business_members']['Row'];
	type BusinessUserRole = DB['public']['Tables']['business_user_role']['Row'];
	type Client = DB['public']['Tables']['clients']['Row'];
	type Goal = DB['public']['Tables']['goals']['Row'];
	type Invoice = DB['public']['Tables']['invoices']['Row'];
	type InvoiceLineItems = DB['public']['Tables']['invoice_line_items']['Row'];
	type LineItem = DB['public']['Tables']['line_items']['Row'];
	type Merchant = DB['public']['Tables']['merchants']['Row'];
	type Project = DB['public']['Tables']['projects']['Row'];
	interface ProjectWithService extends Project {
		project_services?: ProjectService[];
	}
	type ProjectService = DB['public']['Tables']['project_services']['Row'];
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
