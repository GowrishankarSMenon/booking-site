"use client"

import { useState } from "react"
import { CalendarIcon, Plane, Car, Hotel } from "lucide-react"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar as CalendarComponent } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import locations from "@/data/locations.json"
import { motion } from "framer-motion"

export default function SearchSection({ compact = false }: { compact?: boolean }) {
  const [service, setService] = useState("flight")
  const [origin, setOrigin] = useState("")
  const [destination, setDestination] = useState("")
  const [date, setDate] = useState<Date>()

  const handleSearch = () => {
    const searchParams = new URLSearchParams({
      service,
      destination,
      date: date ? format(date, "yyyy-MM-dd") : "",
    })
    if (service === "flight") {
      searchParams.append("origin", origin)
    }
    window.location.href = `https://example.com?${searchParams.toString()}`
  }

  return (
    <motion.section
      className={cn(
        "mx-auto rounded-2xl bg-background-50 dark:bg-background-800 p-8 shadow-lg",
        compact ? "w-full" : "max-w-4xl",
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {!compact && (
        <div className="mb-6 flex space-x-4">
          <Button
            variant={service === "flight" ? "default" : "outline"}
            onClick={() => setService("flight")}
            className="flex items-center"
          >
            <Plane className="mr-2 h-4 w-4" />
            Flight
          </Button>
          <Button
            variant={service === "car" ? "default" : "outline"}
            onClick={() => setService("car")}
            className="flex items-center"
          >
            <Car className="mr-2 h-4 w-4" />
            Car
          </Button>
          <Button
            variant={service === "hotel" ? "default" : "outline"}
            onClick={() => setService("hotel")}
            className="flex items-center"
          >
            <Hotel className="mr-2 h-4 w-4" />
            Hotel
          </Button>
        </div>
      )}
      <div className={cn("grid gap-4", compact ? "grid-cols-4" : "md:grid-cols-2 lg:grid-cols-4")}>
        {service === "flight" && (
          <Select onValueChange={setOrigin}>
            <SelectTrigger>
              <SelectValue placeholder="Origin" />
            </SelectTrigger>
            <SelectContent>
              {locations.cities.map((city) => (
                <SelectItem key={city} value={city}>
                  {city}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
        <Select onValueChange={setDestination}>
          <SelectTrigger>
            <SelectValue placeholder="Destination" />
          </SelectTrigger>
          <SelectContent>
            {locations.cities.map((city) => (
              <SelectItem key={city} value={city}>
                {city}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"outline"}
              className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, "PPP") : <span>Pick a date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0 bg-background-50 dark:bg-background-800">
            <CalendarComponent
              mode="single"
              selected={date}
              onSelect={setDate}
              initialFocus
              className="bg-background-50 dark:bg-background-800"
            />
          </PopoverContent>
        </Popover>
        <Button onClick={handleSearch} className="bg-color1-500 hover:bg-color1-600 text-background-50 font-medium">
          Search
        </Button>
      </div>
    </motion.section>
  )
}

