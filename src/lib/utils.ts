import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Get the base URL from Astro config
const baseUrl = import.meta.env.BASE_URL;


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Adjusts the URL to prepend the Astro Base URL
 * @param url 
 * @returns 
 */
export function getUrlRelativeToBase(url:string):string{

  // Don't prepend baseUrl for special URL types
  if (url.startsWith('#') || 
      url.startsWith('javascript:') || 
      url.startsWith('mailto:') || 
      url.startsWith('tel:')) {
    return url;
  }

  // Remove trailing slash from baseUrl if it exists
  const normalizedBaseUrl = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl;
  
  // Remove leading slash from url if it exists, then add exactly one
  const cleanUrl = url.startsWith('/') ? url.slice(1) : url;
  const normalizedUrl = '/' + cleanUrl;
  
  const fullUrl = normalizedBaseUrl + normalizedUrl;
  return fullUrl;
}