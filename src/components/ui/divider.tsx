import * as React from "react"
import { cn } from "@/lib/utils"

interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: "horizontal" | "vertical"
}

export function Divider({ 
  orientation = "horizontal", 
  className,
  ...props 
}: DividerProps) {
  return (
    <div
      className={cn(
        "shrink-0 bg-border",
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        className
      )}
      {...props}
    />
  )
}