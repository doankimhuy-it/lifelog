import { addDays, format } from 'date-fns';
import { DateRange } from 'react-day-picker';

import { Button } from '@/components/button';
import { Calendar } from '@/components/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/popover';
import { cn } from '@/lib/utils';
import { Calendar as CalendarIcon } from 'lucide-react';
import React from 'react';

export const DateRangePicker = ({
  className,
}: React.HTMLAttributes<HTMLDivElement>) => {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: addDays(Date.now(), -30),
    to: addDays(Date.now(), 0),
  });

  return (
    <div className={cn('grid gap-2', className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={'outline'}
            className={cn(
              'w-[300px] justify-start text-left font-normal md:text-sm',
              !date && 'text-muted-foreground',
              className,
            )}
          >
            <CalendarIcon size={16} />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, 'LLL dd, y')}
                  {' - '}
                  {format(date.to, 'LLL dd, y')}
                </>
              ) : (
                format(date.from, 'LLL dd, y')
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};
