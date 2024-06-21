import React, { useState } from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "../lib/utils";
import { Button } from "./ui/button";
import { Calendar } from "./ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

const DatePicker = () => {
  const [date, setDate] = useState();

  return (
    <div>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={"custom"}
            className={cn(
              "w-[280px] justify-start text-left font-normal border- bg-white",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className='mr-2 h-4 w-4' />
            {date ? format(date, "PPP") : <span>Pick a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className='w-auto p-0 '>
          <Calendar
            mode='single'
            selected={date}
            onSelect={setDate}
            initialFocus
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default DatePicker;
