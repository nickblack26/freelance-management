'use client';

import * as React from 'react';
import { CalendarIcon } from '@radix-ui/react-icons';
import { subDays, format, set } from 'date-fns';
import { DateRange } from 'react-day-picker';

import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import { Calendar } from './ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from './ui//popover';
import { Transaction } from './recent-sales';

interface CalendarDateRangePickerProps {
	className?: React.HTMLAttributes<HTMLDivElement>;
	onDateChange?: (date1: Date, date2: Date) => Promise<Transaction[]>;
}

export function CalendarDateRangePicker({ className, onDateChange }: CalendarDateRangePickerProps) {
	const [date, setDate] = React.useState<DateRange | undefined>({
		from: subDays(new Date(), 30),
		to: new Date(),
	});

	const handleDateChange = (date: DateRange | undefined) => {
		setDate({ from: date?.from, to: date?.to });
	};

	return (
		<div className={cn('grid gap-2', className)}>
			<Popover>
				<PopoverTrigger asChild>
					<Button id='date' variant={'outline'} className={cn('w-[260px] justify-start text-left font-normal', !date && 'text-muted-foreground')}>
						<CalendarIcon className='mr-2 h-4 w-4' />
						{date?.from ? (
							date.to ? (
								<>
									{format(date.from, 'LLL dd, y')} - {format(date.to, 'LLL dd, y')}
								</>
							) : (
								format(date.from, 'LLL dd, y')
							)
						) : (
							<span>Pick a date</span>
						)}
					</Button>
				</PopoverTrigger>
				<PopoverContent className='w-auto p-0' align='end'>
					<Calendar initialFocus mode='range' defaultMonth={date?.from} selected={date} onSelect={handleDateChange} numberOfMonths={1} />
				</PopoverContent>
			</Popover>
		</div>
	);
}
