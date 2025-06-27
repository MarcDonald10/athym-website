// components/About/types.ts
import { LucideIcon } from 'lucide-react';

export interface Value {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

export interface Reason {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface Stat {
  value: string;
  label: string;
}