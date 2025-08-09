import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Simple function to generate numbered gallery images
export function getGalleryImages(folderPath: string, count: number): string[] {
  const images: string[] = [];
  
  for (let i = 1; i <= count; i++) {
    images.push(`${folderPath}${i}.jpg`);
  }
  
  return images;
}
