"use client"

import * as React from "react"
import { Calendar as CalendarIcon } from "lucide-react"
import { format } from "date-fns"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Input } from "./input"

export function DateTimePicker({
  date,
  setDate,
}: {
  date?: Date
  setDate: (date: Date | undefined) => void
}) {
  const [selectedTime, setSelectedTime] = React.useState<string>(
    date ? format(date, "HH:mm") : format(new Date(), "HH:mm")
  )

  const handleTimeChange = (time: string) => {
    setSelectedTime(time)
    if (date) {
      const [hours, minutes] = time.split(":")
      const newDate = new Date(date)
      newDate.setHours(parseInt(hours), parseInt(minutes))
      setDate(newDate)
    }
  }

  const handleDateSelect = (newDate: Date | undefined) => {
    if (newDate) {
      const [hours, minutes] = selectedTime.split(":")
      newDate.setHours(parseInt(hours), parseInt(minutes))
      setDate(newDate)
    } else {
      setDate(undefined)
    }
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-full justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? (
            format(date, "PPP HH:mm")
          ) : (
            <span>Pick a date and time</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={handleDateSelect}
          disabled={{ after: new Date() }}
          initialFocus
        />
        <div className="p-3 border-t">
          <Input
            type="time"
            value={selectedTime}
            onChange={(e) => handleTimeChange(e.target.value)}
            className="w-full"
          />
        </div>
      </PopoverContent>
    </Popover>
  )
}