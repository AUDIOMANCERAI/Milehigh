
// Added React import to fix "Cannot find namespace 'React'" error
import React from 'react';

export type Theme = 'dark' | 'light';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface StatItem {
  label: string;
  value: string;
  suffix?: string;
}