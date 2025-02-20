import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// A utility function to merge Tailwind classes properly
export function cn(...inputs: (string | undefined | null | boolean)[]) {
  return twMerge(clsx(inputs));
}
