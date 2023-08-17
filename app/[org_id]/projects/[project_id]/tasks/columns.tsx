'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Calendar } from '@/components/ui/calendar';
import { Checkbox } from '@/components/ui/checkbox';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CalendarIcon } from '@radix-ui/react-icons';
import { ColumnDef } from '@tanstack/react-table';
import { format } from 'date-fns';
import React from 'react';

export const columns: ColumnDef<Task>[] = [
	{
		id: 'select',
		header: ({ table }) => (
			<Checkbox
				checked={table.getIsAllPageRowsSelected()}
				onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
				aria-label='Select all'
			/>
		),
		cell: ({ row }) => <Checkbox checked={row.getIsSelected()} onCheckedChange={(value) => row.toggleSelected(!!value)} aria-label='Select row' />,
		enableSorting: false,
		enableHiding: false,
	},
	{
		accessorKey: 'name',
		header: 'Task name',
		cell({ row }) {
			const name: string = row.getValue('name');

			return (
				<Sheet>
					<SheetTrigger asChild>
						<div className='hover:cursor-pointer'>{name}</div>
					</SheetTrigger>
					<SheetContent className='w-[500px]'>
						<SheetHeader>
							<SheetTitle>{name}</SheetTitle>
						</SheetHeader>
						<Tabs>
							<TabsList className='w-full'>
								<TabsTrigger value='overview' className='w-full'>
									Overview
								</TabsTrigger>
								<TabsTrigger value='comments' className='w-full'>
									Comments
								</TabsTrigger>
							</TabsList>
						</Tabs>
					</SheetContent>
				</Sheet>
			);
		},
	},
	{
		id: 'assignee.name',
		header: 'Assignee',
		cell: ({ row }) => {
			const user = row.getValue('assignee');

			return (
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Avatar>
							<AvatarFallback>NB</AvatarFallback>
						</Avatar>
					</DropdownMenuTrigger>
					<DropdownMenuContent align='end'>
						<DropdownMenuItem>Nick Black</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			);
		},
	},
	{
		id: 'due_date',
		header: 'Due Date',
		cell: ({ row }) => {
			const due_date = row.getValue<string | undefined>('due_date');
			const start_date = row.getValue<string | undefined>('start_date');
			const [date, setDate] = React.useState<DateRange | undefined>({
				from: start_date ? new Date(start_date) : null,
				to: due_date ? new Date(due_date) : null,
			});

			return (
				<Popover>
					<PopoverTrigger asChild>
						<div className='w-32'>
							{date?.from ? (
								date.to ? (
									<>
										{format(date.from, 'LLL dd')} - {format(date.to, 'LLL dd')}
									</>
								) : (
									format(date.from, 'LLL dd')
								)
							) : (
								<CalendarIcon />
							)}
						</div>
					</PopoverTrigger>
					<PopoverContent className='w-auto p-0' align='start'>
						<Calendar initialFocus mode='range' defaultMonth={date?.from} selected={date} onSelect={setDate} numberOfMonths={1} />
					</PopoverContent>
				</Popover>
			);
		},
	},
];
