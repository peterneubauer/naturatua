
import { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface InfoCardProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  content: string;
  icon?: React.ReactNode;
}

export function InfoCard({
  title,
  content,
  icon,
  className,
  ...props
}: InfoCardProps) {
  return (
    <div
      className={cn(
        'p-6 bg-white border border-natura-100 rounded-lg shadow-sm hover:shadow-md transition-all duration-300',
        className
      )}
      {...props}
    >
      {icon && <div className="mb-4 text-natura-600">{icon}</div>}
      <h3 className="text-xl font-medium text-natura-900 mb-2">{title}</h3>
      <p className="text-natura-700">{content}</p>
    </div>
  );
}
