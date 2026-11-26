import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function formatLength(meters, feet) {
  return `${meters}m / ${feet}ft`;
}

export function formatPrice(price) {
  if (typeof price === "number") {
    return `€${price.toLocaleString()}`;
  }
  return price;
}
