export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export type Database = {
	public: {
		Tables: {
			business_members: {
				Row: {
					business: string;
					member: string;
				};
				Insert: {
					business: string;
					member: string;
				};
				Update: {
					business?: string;
					member?: string;
				};
				Relationships: [
					{
						foreignKeyName: 'business_members_business_fkey';
						columns: ['business'];
						isOneToOne: false;
						referencedRelation: 'businesses';
						referencedColumns: ['id'];
					},
					{
						foreignKeyName: 'business_members_member_fkey';
						columns: ['member'];
						isOneToOne: false;
						referencedRelation: 'users';
						referencedColumns: ['id'];
					}
				];
			};
			business_templates: {
				Row: {
					id: string;
					message: string | null;
					name: string;
					subject: string;
				};
				Insert: {
					id?: string;
					message?: string | null;
					name: string;
					subject: string;
				};
				Update: {
					id?: string;
					message?: string | null;
					name?: string;
					subject?: string;
				};
				Relationships: [];
			};
			business_user_role: {
				Row: {
					description: string | null;
					id: number;
					name: string;
				};
				Insert: {
					description?: string | null;
					id?: number;
					name: string;
				};
				Update: {
					description?: string | null;
					id?: number;
					name?: string;
				};
				Relationships: [];
			};
			businesses: {
				Row: {
					address_line1: string | null;
					address_line2: string | null;
					address_line3: string | null;
					city: string | null;
					color: string | null;
					country: string | null;
					favicon: string | null;
					id: string;
					logo: string | null;
					name: string;
					phone_number: string | null;
					postal_code: string | null;
					tax_id_label: string | null;
					tax_id_number: string | null;
				};
				Insert: {
					address_line1?: string | null;
					address_line2?: string | null;
					address_line3?: string | null;
					city?: string | null;
					color?: string | null;
					country?: string | null;
					favicon?: string | null;
					id?: string;
					logo?: string | null;
					name: string;
					phone_number?: string | null;
					postal_code?: string | null;
					tax_id_label?: string | null;
					tax_id_number?: string | null;
				};
				Update: {
					address_line1?: string | null;
					address_line2?: string | null;
					address_line3?: string | null;
					city?: string | null;
					color?: string | null;
					country?: string | null;
					favicon?: string | null;
					id?: string;
					logo?: string | null;
					name?: string;
					phone_number?: string | null;
					postal_code?: string | null;
					tax_id_label?: string | null;
					tax_id_number?: string | null;
				};
				Relationships: [];
			};
			clients: {
				Row: {
					business: string;
					id: string;
					name: string;
				};
				Insert: {
					business: string;
					id?: string;
					name: string;
				};
				Update: {
					business?: string;
					id?: string;
					name?: string;
				};
				Relationships: [
					{
						foreignKeyName: 'clients_business_fkey';
						columns: ['business'];
						isOneToOne: false;
						referencedRelation: 'businesses';
						referencedColumns: ['id'];
					}
				];
			};
			goals: {
				Row: {
					active: boolean;
					amount: number;
					business: string;
					date: string;
					id: string;
					stripe_id: string | null;
				};
				Insert: {
					active?: boolean;
					amount: number;
					business: string;
					date?: string;
					id?: string;
					stripe_id?: string | null;
				};
				Update: {
					active?: boolean;
					amount?: number;
					business?: string;
					date?: string;
					id?: string;
					stripe_id?: string | null;
				};
				Relationships: [
					{
						foreignKeyName: 'goals_business_fkey';
						columns: ['business'];
						isOneToOne: false;
						referencedRelation: 'businesses';
						referencedColumns: ['id'];
					}
				];
			};
			invoice_line_items: {
				Row: {
					invoice: string;
					line_item: string;
				};
				Insert: {
					invoice: string;
					line_item: string;
				};
				Update: {
					invoice?: string;
					line_item?: string;
				};
				Relationships: [
					{
						foreignKeyName: 'invoice_line_items_invoice_fkey';
						columns: ['invoice'];
						isOneToOne: false;
						referencedRelation: 'invoices';
						referencedColumns: ['id'];
					},
					{
						foreignKeyName: 'invoice_line_items_line_item_fkey';
						columns: ['line_item'];
						isOneToOne: false;
						referencedRelation: 'line_items';
						referencedColumns: ['id'];
					}
				];
			};
			invoices: {
				Row: {
					amount: number;
					client: string | null;
					description: string | null;
					id: string;
					name: string;
				};
				Insert: {
					amount: number;
					client?: string | null;
					description?: string | null;
					id?: string;
					name: string;
				};
				Update: {
					amount?: number;
					client?: string | null;
					description?: string | null;
					id?: string;
					name?: string;
				};
				Relationships: [
					{
						foreignKeyName: 'invoices_client_fkey';
						columns: ['client'];
						isOneToOne: false;
						referencedRelation: 'clients';
						referencedColumns: ['id'];
					}
				];
			};
			line_items: {
				Row: {
					amount: number;
					billing_type: string;
					description: string;
					id: string;
					quantity: number;
				};
				Insert: {
					amount: number;
					billing_type?: string;
					description: string;
					id?: string;
					quantity?: number;
				};
				Update: {
					amount?: number;
					billing_type?: string;
					description?: string;
					id?: string;
					quantity?: number;
				};
				Relationships: [];
			};
			merchants: {
				Row: {
					id: string;
					legal_name: string;
					name: string;
				};
				Insert: {
					id?: string;
					legal_name: string;
					name: string;
				};
				Update: {
					id?: string;
					legal_name?: string;
					name?: string;
				};
				Relationships: [];
			};
			project_billing: {
				Row: {
					deposit_required: boolean;
					id: string;
					occurence: string;
					services_schedule: Json | null;
				};
				Insert: {
					deposit_required?: boolean;
					id?: string;
					occurence?: string;
					services_schedule?: Json | null;
				};
				Update: {
					deposit_required?: boolean;
					id?: string;
					occurence?: string;
					services_schedule?: Json | null;
				};
				Relationships: [];
			};
			project_services: {
				Row: {
					description: string | null;
					hour_cap: number | null;
					project: string;
					service: string;
				};
				Insert: {
					description?: string | null;
					hour_cap?: number | null;
					project: string;
					service: string;
				};
				Update: {
					description?: string | null;
					hour_cap?: number | null;
					project?: string;
					service?: string;
				};
				Relationships: [
					{
						foreignKeyName: 'project_services_project_fkey';
						columns: ['project'];
						isOneToOne: false;
						referencedRelation: 'projects';
						referencedColumns: ['id'];
					},
					{
						foreignKeyName: 'project_services_service_fkey';
						columns: ['service'];
						isOneToOne: false;
						referencedRelation: 'services';
						referencedColumns: ['id'];
					}
				];
			};
			projects: {
				Row: {
					business: string | null;
					client: string | null;
					description: string | null;
					end_date: string | null;
					hour_cap: number | null;
					id: string;
					maximum_revisions: number | null;
					name: string;
					start_date: string | null;
				};
				Insert: {
					business?: string | null;
					client?: string | null;
					description?: string | null;
					end_date?: string | null;
					hour_cap?: number | null;
					id?: string;
					maximum_revisions?: number | null;
					name: string;
					start_date?: string | null;
				};
				Update: {
					business?: string | null;
					client?: string | null;
					description?: string | null;
					end_date?: string | null;
					hour_cap?: number | null;
					id?: string;
					maximum_revisions?: number | null;
					name?: string;
					start_date?: string | null;
				};
				Relationships: [
					{
						foreignKeyName: 'projects_business_fkey';
						columns: ['business'];
						isOneToOne: false;
						referencedRelation: 'businesses';
						referencedColumns: ['id'];
					},
					{
						foreignKeyName: 'projects_client_fkey';
						columns: ['client'];
						isOneToOne: false;
						referencedRelation: 'clients';
						referencedColumns: ['id'];
					}
				];
			};
			services: {
				Row: {
					amount: number;
					business: string;
					description: string | null;
					id: string;
					name: string;
					occurence: string;
				};
				Insert: {
					amount: number;
					business: string;
					description?: string | null;
					id?: string;
					name: string;
					occurence?: string;
				};
				Update: {
					amount?: number;
					business?: string;
					description?: string | null;
					id?: string;
					name?: string;
					occurence?: string;
				};
				Relationships: [
					{
						foreignKeyName: 'services_business_fkey';
						columns: ['business'];
						isOneToOne: false;
						referencedRelation: 'businesses';
						referencedColumns: ['id'];
					}
				];
			};
			subscriptions: {
				Row: {
					created_at: string | null;
					id: string;
					name: string;
				};
				Insert: {
					created_at?: string | null;
					id?: string;
					name: string;
				};
				Update: {
					created_at?: string | null;
					id?: string;
					name?: string;
				};
				Relationships: [];
			};
			task_assignees: {
				Row: {
					task_id: string;
					user_id: string;
				};
				Insert: {
					task_id: string;
					user_id: string;
				};
				Update: {
					task_id?: string;
					user_id?: string;
				};
				Relationships: [
					{
						foreignKeyName: 'task_assignees_task_id_fkey';
						columns: ['task_id'];
						isOneToOne: false;
						referencedRelation: 'tasks';
						referencedColumns: ['id'];
					},
					{
						foreignKeyName: 'task_assignees_user_id_fkey';
						columns: ['user_id'];
						isOneToOne: false;
						referencedRelation: 'users';
						referencedColumns: ['id'];
					}
				];
			};
			tasks: {
				Row: {
					complete: boolean;
					completed_at: string | null;
					created_at: string;
					description: string | null;
					due_date: string | null;
					id: string;
					name: string;
					project: string | null;
					start_date: string | null;
					updated_at: string | null;
				};
				Insert: {
					complete?: boolean;
					completed_at?: string | null;
					created_at?: string;
					description?: string | null;
					due_date?: string | null;
					id?: string;
					name: string;
					project?: string | null;
					start_date?: string | null;
					updated_at?: string | null;
				};
				Update: {
					complete?: boolean;
					completed_at?: string | null;
					created_at?: string;
					description?: string | null;
					due_date?: string | null;
					id?: string;
					name?: string;
					project?: string | null;
					start_date?: string | null;
					updated_at?: string | null;
				};
				Relationships: [
					{
						foreignKeyName: 'tasks_project_fkey';
						columns: ['project'];
						isOneToOne: false;
						referencedRelation: 'projects';
						referencedColumns: ['id'];
					}
				];
			};
			tax_categories: {
				Row: {
					description: string | null;
					id: number;
					name: string;
				};
				Insert: {
					description?: string | null;
					id?: number;
					name: string;
				};
				Update: {
					description?: string | null;
					id?: number;
					name?: string;
				};
				Relationships: [];
			};
			time_entries: {
				Row: {
					activity: string | null;
					client: string | null;
					end_time: string | null;
					id: string;
					project: string | null;
					start_time: string;
					user: string;
				};
				Insert: {
					activity?: string | null;
					client?: string | null;
					end_time?: string | null;
					id?: string;
					project?: string | null;
					start_time?: string;
					user: string;
				};
				Update: {
					activity?: string | null;
					client?: string | null;
					end_time?: string | null;
					id?: string;
					project?: string | null;
					start_time?: string;
					user?: string;
				};
				Relationships: [
					{
						foreignKeyName: 'time_entries_client_fkey';
						columns: ['client'];
						isOneToOne: false;
						referencedRelation: 'clients';
						referencedColumns: ['id'];
					},
					{
						foreignKeyName: 'time_entries_project_fkey';
						columns: ['project'];
						isOneToOne: false;
						referencedRelation: 'projects';
						referencedColumns: ['id'];
					},
					{
						foreignKeyName: 'time_entries_user_fkey';
						columns: ['user'];
						isOneToOne: false;
						referencedRelation: 'users';
						referencedColumns: ['id'];
					}
				];
			};
			transactions: {
				Row: {
					amount: number;
					business: string | null;
					date: string;
					id: string;
					merchant: string | null;
					note: string | null;
					project: string | null;
					purpose: string;
					repeat: string;
					status: string;
					tax_amount: number | null;
					tax_category: number | null;
					tax_label: string | null;
					tax_rate: number | null;
				};
				Insert: {
					amount: number;
					business?: string | null;
					date: string;
					id?: string;
					merchant?: string | null;
					note?: string | null;
					project?: string | null;
					purpose: string;
					repeat?: string;
					status?: string;
					tax_amount?: number | null;
					tax_category?: number | null;
					tax_label?: string | null;
					tax_rate?: number | null;
				};
				Update: {
					amount?: number;
					business?: string | null;
					date?: string;
					id?: string;
					merchant?: string | null;
					note?: string | null;
					project?: string | null;
					purpose?: string;
					repeat?: string;
					status?: string;
					tax_amount?: number | null;
					tax_category?: number | null;
					tax_label?: string | null;
					tax_rate?: number | null;
				};
				Relationships: [
					{
						foreignKeyName: 'transactions_business_fkey';
						columns: ['business'];
						isOneToOne: false;
						referencedRelation: 'businesses';
						referencedColumns: ['id'];
					},
					{
						foreignKeyName: 'transactions_merchant_fkey';
						columns: ['merchant'];
						isOneToOne: false;
						referencedRelation: 'merchants';
						referencedColumns: ['id'];
					},
					{
						foreignKeyName: 'transactions_project_fkey';
						columns: ['project'];
						isOneToOne: false;
						referencedRelation: 'projects';
						referencedColumns: ['id'];
					},
					{
						foreignKeyName: 'transactions_tax_category_fkey';
						columns: ['tax_category'];
						isOneToOne: false;
						referencedRelation: 'tax_categories';
						referencedColumns: ['id'];
					}
				];
			};
			user_client_updates: {
				Row: {
					client: string;
					last_update: string;
					user: string;
				};
				Insert: {
					client: string;
					last_update?: string;
					user: string;
				};
				Update: {
					client?: string;
					last_update?: string;
					user?: string;
				};
				Relationships: [
					{
						foreignKeyName: 'user_client_updates_client_fkey';
						columns: ['client'];
						isOneToOne: false;
						referencedRelation: 'clients';
						referencedColumns: ['id'];
					},
					{
						foreignKeyName: 'user_client_updates_user_fkey';
						columns: ['user'];
						isOneToOne: false;
						referencedRelation: 'users';
						referencedColumns: ['id'];
					}
				];
			};
			users: {
				Row: {
					first_name: string | null;
					id: string;
					image_url: string | null;
					last_name: string | null;
					username: string | null;
				};
				Insert: {
					first_name?: string | null;
					id: string;
					image_url?: string | null;
					last_name?: string | null;
					username?: string | null;
				};
				Update: {
					first_name?: string | null;
					id?: string;
					image_url?: string | null;
					last_name?: string | null;
					username?: string | null;
				};
				Relationships: [
					{
						foreignKeyName: 'users_id_fkey';
						columns: ['id'];
						isOneToOne: true;
						referencedRelation: 'users';
						referencedColumns: ['id'];
					}
				];
			};
			wrappers_fdw_stats: {
				Row: {
					bytes_in: number | null;
					bytes_out: number | null;
					create_times: number | null;
					created_at: string;
					fdw_name: string;
					metadata: Json | null;
					rows_in: number | null;
					rows_out: number | null;
					updated_at: string;
				};
				Insert: {
					bytes_in?: number | null;
					bytes_out?: number | null;
					create_times?: number | null;
					created_at?: string;
					fdw_name: string;
					metadata?: Json | null;
					rows_in?: number | null;
					rows_out?: number | null;
					updated_at?: string;
				};
				Update: {
					bytes_in?: number | null;
					bytes_out?: number | null;
					create_times?: number | null;
					created_at?: string;
					fdw_name?: string;
					metadata?: Json | null;
					rows_in?: number | null;
					rows_out?: number | null;
					updated_at?: string;
				};
				Relationships: [];
			};
		};
		Views: {
			[_ in never]: never;
		};
		Functions: {
			airtable_fdw_handler: {
				Args: Record<PropertyKey, never>;
				Returns: unknown;
			};
			airtable_fdw_meta: {
				Args: Record<PropertyKey, never>;
				Returns: {
					name: string;
					version: string;
					author: string;
					website: string;
				}[];
			};
			airtable_fdw_validator: {
				Args: {
					options: string[];
					catalog: unknown;
				};
				Returns: undefined;
			};
			big_query_fdw_handler: {
				Args: Record<PropertyKey, never>;
				Returns: unknown;
			};
			big_query_fdw_meta: {
				Args: Record<PropertyKey, never>;
				Returns: {
					name: string;
					version: string;
					author: string;
					website: string;
				}[];
			};
			big_query_fdw_validator: {
				Args: {
					options: string[];
					catalog: unknown;
				};
				Returns: undefined;
			};
			click_house_fdw_handler: {
				Args: Record<PropertyKey, never>;
				Returns: unknown;
			};
			click_house_fdw_meta: {
				Args: Record<PropertyKey, never>;
				Returns: {
					name: string;
					version: string;
					author: string;
					website: string;
				}[];
			};
			click_house_fdw_validator: {
				Args: {
					options: string[];
					catalog: unknown;
				};
				Returns: undefined;
			};
			create_business: {
				Args: {
					name: string;
					color: string;
				};
				Returns: {
					address_line1: string | null;
					address_line2: string | null;
					address_line3: string | null;
					city: string | null;
					color: string | null;
					country: string | null;
					favicon: string | null;
					id: string;
					logo: string | null;
					name: string;
					phone_number: string | null;
					postal_code: string | null;
					tax_id_label: string | null;
					tax_id_number: string | null;
				};
			};
			create_section: {
				Args: {
					name: string;
					description: string;
					organization: string;
					color: string;
				};
				Returns: {
					business: string | null;
					client: string | null;
					description: string | null;
					end_date: string | null;
					hour_cap: number | null;
					id: string;
					maximum_revisions: number | null;
					name: string;
					start_date: string | null;
				};
			};
			delete_avatar: {
				Args: {
					avatar_url: string;
				};
				Returns: Record<string, unknown>;
			};
			delete_claim: {
				Args: {
					uid: string;
					claim: string;
				};
				Returns: string;
			};
			delete_logo: {
				Args: {
					logo: string;
				};
				Returns: Record<string, unknown>;
			};
			delete_storage_object: {
				Args: {
					bucket: string;
					object: string;
				};
				Returns: Record<string, unknown>;
			};
			firebase_fdw_handler: {
				Args: Record<PropertyKey, never>;
				Returns: unknown;
			};
			firebase_fdw_meta: {
				Args: Record<PropertyKey, never>;
				Returns: {
					name: string;
					version: string;
					author: string;
					website: string;
				}[];
			};
			firebase_fdw_validator: {
				Args: {
					options: string[];
					catalog: unknown;
				};
				Returns: undefined;
			};
			get_business_overview: {
				Args: {
					start_date: string;
					end_date: string;
					business_id: string;
				};
				Returns: {
					name: string;
					total: number;
				}[];
			};
			get_claim: {
				Args: {
					uid: string;
					claim: string;
				};
				Returns: Json;
			};
			get_claims: {
				Args: {
					uid: string;
				};
				Returns: Json;
			};
			get_my_claim: {
				Args: {
					claim: string;
				};
				Returns: Json;
			};
			get_my_claims: {
				Args: Record<PropertyKey, never>;
				Returns: Json;
			};
			get_outstanding_invoices: {
				Args: {
					start_date: string;
					end_date: string;
					business_id: string;
				};
				Returns: number;
			};
			get_total_projects_between_dates: {
				Args: {
					start_date: string;
					business_id: string;
				};
				Returns: number;
			};
			get_users_business: {
				Args: {
					user_id: string;
				};
				Returns: string[];
			};
			get_customers: {
				Args: Record<PropertyKey, never>;
				Returns: {
					id: string;
					name: string;
					balance: number;
				}[];
			};
			is_business_admin: {
				Args: {
					user_id: string;
				};
				Returns: boolean;
			};
			is_business_member: {
				Args: {
					user_id: string;
					business_id: string;
				};
				Returns: boolean;
			};
			is_chat_member: {
				Args: {
					chat_id: string;
					user_id: string;
				};
				Returns: boolean;
			};
			is_claims_admin: {
				Args: Record<PropertyKey, never>;
				Returns: boolean;
			};
			is_organization_member: {
				Args: {
					org_id: string;
					user_id: string;
				};
				Returns: boolean;
			};
			logflare_fdw_handler: {
				Args: Record<PropertyKey, never>;
				Returns: unknown;
			};
			logflare_fdw_meta: {
				Args: Record<PropertyKey, never>;
				Returns: {
					name: string;
					version: string;
					author: string;
					website: string;
				}[];
			};
			logflare_fdw_validator: {
				Args: {
					options: string[];
					catalog: unknown;
				};
				Returns: undefined;
			};
			s3_fdw_handler: {
				Args: Record<PropertyKey, never>;
				Returns: unknown;
			};
			s3_fdw_meta: {
				Args: Record<PropertyKey, never>;
				Returns: {
					name: string;
					version: string;
					author: string;
					website: string;
				}[];
			};
			s3_fdw_validator: {
				Args: {
					options: string[];
					catalog: unknown;
				};
				Returns: undefined;
			};
			set_claim: {
				Args: {
					uid: string;
					claim: string;
					value: Json;
				};
				Returns: string;
			};
			stripe_fdw_handler: {
				Args: Record<PropertyKey, never>;
				Returns: unknown;
			};
			stripe_fdw_meta: {
				Args: Record<PropertyKey, never>;
				Returns: {
					name: string;
					version: string;
					author: string;
					website: string;
				}[];
			};
			stripe_fdw_validator: {
				Args: {
					options: string[];
					catalog: unknown;
				};
				Returns: undefined;
			};
		};
		Enums: {
			viewType: 'list' | 'board' | 'timeline' | 'gantt' | 'calendar';
		};
		CompositeTypes: {
			[_ in never]: never;
		};
	};
};

export type Tables<
	PublicTableNameOrOptions extends keyof (Database['public']['Tables'] & Database['public']['Views']) | { schema: keyof Database },
	TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
		? keyof (Database[PublicTableNameOrOptions['schema']]['Tables'] & Database[PublicTableNameOrOptions['schema']]['Views'])
		: never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
	? (Database[PublicTableNameOrOptions['schema']]['Tables'] & Database[PublicTableNameOrOptions['schema']]['Views'])[TableName] extends {
			Row: infer R;
	  }
		? R
		: never
	: PublicTableNameOrOptions extends keyof (Database['public']['Tables'] & Database['public']['Views'])
	? (Database['public']['Tables'] & Database['public']['Views'])[PublicTableNameOrOptions] extends {
			Row: infer R;
	  }
		? R
		: never
	: never;

export type TablesInsert<
	PublicTableNameOrOptions extends keyof Database['public']['Tables'] | { schema: keyof Database },
	TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
		? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
		: never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
	? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
			Insert: infer I;
	  }
		? I
		: never
	: PublicTableNameOrOptions extends keyof Database['public']['Tables']
	? Database['public']['Tables'][PublicTableNameOrOptions] extends {
			Insert: infer I;
	  }
		? I
		: never
	: never;

export type TablesUpdate<
	PublicTableNameOrOptions extends keyof Database['public']['Tables'] | { schema: keyof Database },
	TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
		? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
		: never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
	? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
			Update: infer U;
	  }
		? U
		: never
	: PublicTableNameOrOptions extends keyof Database['public']['Tables']
	? Database['public']['Tables'][PublicTableNameOrOptions] extends {
			Update: infer U;
	  }
		? U
		: never
	: never;

export type Enums<
	PublicEnumNameOrOptions extends keyof Database['public']['Enums'] | { schema: keyof Database },
	EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
		? keyof Database[PublicEnumNameOrOptions['schema']]['Enums']
		: never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
	? Database[PublicEnumNameOrOptions['schema']]['Enums'][EnumName]
	: PublicEnumNameOrOptions extends keyof Database['public']['Enums']
	? Database['public']['Enums'][PublicEnumNameOrOptions]
	: never;
