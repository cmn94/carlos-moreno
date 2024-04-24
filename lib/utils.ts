import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { sections } from '@/data/sections';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getSectionFromPath(path: string) {
  return sections.find((section) => section.path === path);
}

export function stringifyDate(date: Date): string {
  return date.toLocaleString('en', { month: 'long', year: 'numeric' });
}

export function getYears(start: Date, end: Date) {
  let diff = end.getFullYear() - start.getFullYear();

  if (end.getMonth() < start.getMonth() || (end.getMonth() === start.getMonth()
    && end.getDate() < start.getDate())
  ) {
    diff -= 1;
  }

  let months = end.getMonth() - start.getMonth()
  + (12 * (end.getFullYear() - start.getFullYear()));
  if (end.getDate() < start.getDate()) {
    months -= 1;
  }

  const fraction = (months % 12) / 12;

  diff += fraction;

  if (diff < 1) {
    return `${Math.round(months)} months`;
  }

  return `${diff.toFixed(1)} years`;
}
