import * as React from "react"
import { cva } from "class-variance-authority"
import { cn } from "../../lib/utils" 

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
        outline: "text-foreground",
        my:
        "cursor-pointer py-2 px-3  text-[16px] pt-[7px] block bg-transparent border-[2px] border-[#fff] rounded-md text-[#fff] hover:bg-[#fff] hover:text-[black]"
      },
    },
    defaultVariants: {
      variant: "default", // Set default variant to "default"
    },
  }
)

function Badge({ className, variant = "default", ...props }) {
  // Fix the `cn()` usage to ensure valid class merging
  const variantClass = badgeVariants({ variant })  // Get the class for the variant
  const combinedClasses = cn(variantClass, className)  // Combine with any additional className

  return <div className={combinedClasses} {...props} />
}

export { Badge, badgeVariants }
