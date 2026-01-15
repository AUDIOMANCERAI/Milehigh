
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
