import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export function assetFromCloudinary(url: string) {
  const base = process.env.NEXT_PUBLIC_CDN_BASE_URL || "";
  if (!base) return url;
  const last = url.split("/").pop() || "";
  return `${base.replace(/\/$/, "")}/${last}`;
}
export function asset(path: string) {
  const base = process.env.NEXT_PUBLIC_CDN_BASE_URL || "";
  if (!base) return path;
  return `${base.replace(/\/$/, "")}/${path.replace(/^\//, "")}`;
}
