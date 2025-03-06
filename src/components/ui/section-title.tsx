import { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface SectionTitleProps extends HTMLAttributes<HTMLDivElement> {
  subtitle?: string;
  title: string;
  description?: string;
  alignment?: 'left' | 'center' | 'right';
}

export function SectionTitle({
  subtitle,
  title,
  description,
  alignment = 'center',
  className,
  ...props
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        'mb-12 max-w-3xl',
        alignment === 'center' && 'mx-auto text-center',
        alignment === 'right' && 'ml-auto text-right',
        className
      )}
      {...props}
    >
      {subtitle && (
        <span className="inline-block text-natura-600 font-medium text-sm uppercase tracking-wider mb-2">
          {subtitle}
        </span>
      )}
      <h2 className="text-natura-900 natura-font mb-4">{title}</h2>
      {description && <p className="text-natura-700">{description}</p>}
    </div>
  );
}
