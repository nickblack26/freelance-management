export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      business_members: {
        Row: {
          business: string
          member: string
          role: number
        }
        Insert: {
          business: string
          member: string
          role?: number
        }
        Update: {
          business?: string
          member?: string
          role?: number
        }
        Relationships: [
          {
            foreignKeyName: "business_members_business_fkey"
            columns: ["business"]
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "business_members_member_fkey"
            columns: ["member"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "business_members_role_fkey"
            columns: ["role"]
            referencedRelation: "business_user_role"
            referencedColumns: ["id"]
          }
        ]
      }
      business_templates: {
        Row: {
          id: string
          message: string | null
          name: string
          subject: string
        }
        Insert: {
          id?: string
          message?: string | null
          name: string
          subject: string
        }
        Update: {
          id?: string
          message?: string | null
          name?: string
          subject?: string
        }
        Relationships: []
      }
      business_user_role: {
        Row: {
          description: string | null
          id: number
          name: string
        }
        Insert: {
          description?: string | null
          id?: number
          name: string
        }
        Update: {
          description?: string | null
          id?: number
          name?: string
        }
        Relationships: []
      }
      businesses: {
        Row: {
          address_line1: string | null
          address_line2: string | null
          address_line3: string | null
          city: string | null
          color: string | null
          country: string | null
          favicon: string | null
          id: string
          logo: string | null
          name: string
          phone_number: string | null
          postal_code: string | null
          tax_id_label: string | null
          tax_id_number: string | null
        }
        Insert: {
          address_line1?: string | null
          address_line2?: string | null
          address_line3?: string | null
          city?: string | null
          color?: string | null
          country?: string | null
          favicon?: string | null
          id?: string
          logo?: string | null
          name: string
          phone_number?: string | null
          postal_code?: string | null
          tax_id_label?: string | null
          tax_id_number?: string | null
        }
        Update: {
          address_line1?: string | null
          address_line2?: string | null
          address_line3?: string | null
          city?: string | null
          color?: string | null
          country?: string | null
          favicon?: string | null
          id?: string
          logo?: string | null
          name?: string
          phone_number?: string | null
          postal_code?: string | null
          tax_id_label?: string | null
          tax_id_number?: string | null
        }
        Relationships: []
      }
      clients: {
        Row: {
          business: string
          id: string
          name: string
        }
        Insert: {
          business: string
          id?: string
          name: string
        }
        Update: {
          business?: string
          id?: string
          name?: string
        }
        Relationships: [
          {
            foreignKeyName: "clients_business_fkey"
            columns: ["business"]
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          }
        ]
      }
      goals: {
        Row: {
          active: boolean
          amount: number
          business: string
          date: string
          id: string
          stripe_id: string | null
        }
        Insert: {
          active?: boolean
          amount: number
          business: string
          date?: string
          id?: string
          stripe_id?: string | null
        }
        Update: {
          active?: boolean
          amount?: number
          business?: string
          date?: string
          id?: string
          stripe_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "goals_business_fkey"
            columns: ["business"]
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          }
        ]
      }
      invoice_line_items: {
        Row: {
          invoice: string
          line_item: string
        }
        Insert: {
          invoice: string
          line_item: string
        }
        Update: {
          invoice?: string
          line_item?: string
        }
        Relationships: [
          {
            foreignKeyName: "invoice_line_items_invoice_fkey"
            columns: ["invoice"]
            referencedRelation: "invoices"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "invoice_line_items_line_item_fkey"
            columns: ["line_item"]
            referencedRelation: "line_items"
            referencedColumns: ["id"]
          }
        ]
      }
      invoices: {
        Row: {
          amount: number
          client: string | null
          description: string | null
          id: string
          name: string
        }
        Insert: {
          amount: number
          client?: string | null
          description?: string | null
          id?: string
          name: string
        }
        Update: {
          amount?: number
          client?: string | null
          description?: string | null
          id?: string
          name?: string
        }
        Relationships: [
          {
            foreignKeyName: "invoices_client_fkey"
            columns: ["client"]
            referencedRelation: "clients"
            referencedColumns: ["id"]
          }
        ]
      }
      line_items: {
        Row: {
          amount: number
          billing_type: string
          description: string
          id: string
          quantity: number
        }
        Insert: {
          amount: number
          billing_type?: string
          description: string
          id?: string
          quantity?: number
        }
        Update: {
          amount?: number
          billing_type?: string
          description?: string
          id?: string
          quantity?: number
        }
        Relationships: []
      }
      merchants: {
        Row: {
          id: string
          legal_name: string
          name: string
        }
        Insert: {
          id?: string
          legal_name: string
          name: string
        }
        Update: {
          id?: string
          legal_name?: string
          name?: string
        }
        Relationships: []
      }
      project_services: {
        Row: {
          project: string
          service: string
        }
        Insert: {
          project: string
          service: string
        }
        Update: {
          project?: string
          service?: string
        }
        Relationships: [
          {
            foreignKeyName: "project_services_project_fkey"
            columns: ["project"]
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "project_services_service_fkey"
            columns: ["service"]
            referencedRelation: "services"
            referencedColumns: ["id"]
          }
        ]
      }
      projects: {
        Row: {
          business: string
          client: string | null
          color: string | null
          description: string | null
          end_date: string | null
          id: string
          maximum_revisions: number | null
          name: string
          start_date: string | null
        }
        Insert: {
          business: string
          client?: string | null
          color?: string | null
          description?: string | null
          end_date?: string | null
          id?: string
          maximum_revisions?: number | null
          name: string
          start_date?: string | null
        }
        Update: {
          business?: string
          client?: string | null
          color?: string | null
          description?: string | null
          end_date?: string | null
          id?: string
          maximum_revisions?: number | null
          name?: string
          start_date?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "projects_business_fkey"
            columns: ["business"]
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "projects_client_fkey"
            columns: ["client"]
            referencedRelation: "clients"
            referencedColumns: ["id"]
          }
        ]
      }
      services: {
        Row: {
          amount: number
          business: string
          description: string | null
          id: string
          name: string
          occurence: string
        }
        Insert: {
          amount: number
          business: string
          description?: string | null
          id?: string
          name: string
          occurence?: string
        }
        Update: {
          amount?: number
          business?: string
          description?: string | null
          id?: string
          name?: string
          occurence?: string
        }
        Relationships: [
          {
            foreignKeyName: "services_business_fkey"
            columns: ["business"]
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          }
        ]
      }
      subscriptions: {
        Row: {
          created_at: string | null
          id: string
          name: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          name: string
        }
        Update: {
          created_at?: string | null
          id?: string
          name?: string
        }
        Relationships: []
      }
      task_assignees: {
        Row: {
          task_id: string
          user_id: string
        }
        Insert: {
          task_id: string
          user_id: string
        }
        Update: {
          task_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "task_assignees_task_id_fkey"
            columns: ["task_id"]
            referencedRelation: "tasks"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "task_assignees_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      tasks: {
        Row: {
          complete: boolean
          completed_at: string | null
          created_at: string
          description: string | null
          due_date: string | null
          id: string
          name: string
          project: string | null
          start_date: string | null
          updated_at: string | null
        }
        Insert: {
          complete?: boolean
          completed_at?: string | null
          created_at?: string
          description?: string | null
          due_date?: string | null
          id?: string
          name: string
          project?: string | null
          start_date?: string | null
          updated_at?: string | null
        }
        Update: {
          complete?: boolean
          completed_at?: string | null
          created_at?: string
          description?: string | null
          due_date?: string | null
          id?: string
          name?: string
          project?: string | null
          start_date?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "tasks_project_fkey"
            columns: ["project"]
            referencedRelation: "projects"
            referencedColumns: ["id"]
          }
        ]
      }
      tax_categories: {
        Row: {
          description: string | null
          id: number
          name: string
        }
        Insert: {
          description?: string | null
          id?: number
          name: string
        }
        Update: {
          description?: string | null
          id?: number
          name?: string
        }
        Relationships: []
      }
      time_sheets: {
        Row: {
          end_time: string | null
          id: string
          project: string | null
          service: string | null
          start_time: string
          task_id: string
          user_id: string
        }
        Insert: {
          end_time?: string | null
          id: string
          project?: string | null
          service?: string | null
          start_time: string
          task_id: string
          user_id: string
        }
        Update: {
          end_time?: string | null
          id?: string
          project?: string | null
          service?: string | null
          start_time?: string
          task_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "time_sheets_project_fkey"
            columns: ["project"]
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "time_sheets_service_fkey"
            columns: ["service"]
            referencedRelation: "services"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "time_sheets_task_id_fkey"
            columns: ["task_id"]
            referencedRelation: "tasks"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "time_sheets_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      transactions: {
        Row: {
          amount: number
          business: string | null
          date: string
          id: string
          merchant: string | null
          note: string | null
          project: string | null
          purpose: string
          repeat: string
          status: string
          tax_amount: number | null
          tax_category: number | null
          tax_label: string | null
          tax_rate: number | null
        }
        Insert: {
          amount: number
          business?: string | null
          date: string
          id?: string
          merchant?: string | null
          note?: string | null
          project?: string | null
          purpose: string
          repeat?: string
          status?: string
          tax_amount?: number | null
          tax_category?: number | null
          tax_label?: string | null
          tax_rate?: number | null
        }
        Update: {
          amount?: number
          business?: string | null
          date?: string
          id?: string
          merchant?: string | null
          note?: string | null
          project?: string | null
          purpose?: string
          repeat?: string
          status?: string
          tax_amount?: number | null
          tax_category?: number | null
          tax_label?: string | null
          tax_rate?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "transactions_business_fkey"
            columns: ["business"]
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "transactions_merchant_fkey"
            columns: ["merchant"]
            referencedRelation: "merchants"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "transactions_project_fkey"
            columns: ["project"]
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "transactions_tax_category_fkey"
            columns: ["tax_category"]
            referencedRelation: "tax_categories"
            referencedColumns: ["id"]
          }
        ]
      }
      users: {
        Row: {
          first_name: string
          id: string
          image_url: string | null
          last_name: string
          username: string
        }
        Insert: {
          first_name: string
          id: string
          image_url?: string | null
          last_name: string
          username: string
        }
        Update: {
          first_name?: string
          id?: string
          image_url?: string | null
          last_name?: string
          username?: string
        }
        Relationships: [
          {
            foreignKeyName: "users_id_fkey"
            columns: ["id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      create_business: {
        Args: {
          name: string
          color: string
        }
        Returns: {
          address_line1: string | null
          address_line2: string | null
          address_line3: string | null
          city: string | null
          color: string | null
          country: string | null
          favicon: string | null
          id: string
          logo: string | null
          name: string
          phone_number: string | null
          postal_code: string | null
          tax_id_label: string | null
          tax_id_number: string | null
        }
      }
      create_section: {
        Args: {
          name: string
          description: string
          organization: string
          color: string
        }
        Returns: {
          business: string
          client: string | null
          color: string | null
          description: string | null
          end_date: string | null
          id: string
          maximum_revisions: number | null
          name: string
          start_date: string | null
        }
      }
      delete_avatar: {
        Args: {
          avatar_url: string
        }
        Returns: Record<string, unknown>
      }
      delete_storage_object: {
        Args: {
          bucket: string
          object: string
        }
        Returns: Record<string, unknown>
      }
      get_business_overview: {
        Args: {
          start_date: string
          end_date: string
          business_id: string
        }
        Returns: {
          name: string
          total: number
        }[]
      }
      get_outstanding_invoices: {
        Args: {
          start_date: string
          end_date: string
          business_id: string
        }
        Returns: number
      }
      get_total_projects_between_dates: {
        Args: {
          start_date: string
          business_id: string
        }
        Returns: number
      }
      is_chat_member: {
        Args: {
          chat_id: string
          user_id: string
        }
        Returns: boolean
      }
      is_organization_member: {
        Args: {
          org_id: string
          user_id: string
        }
        Returns: boolean
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
