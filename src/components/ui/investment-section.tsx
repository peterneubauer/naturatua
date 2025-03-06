
import { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';
import { Button } from './button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface InvestmentSectionProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  imageSrc: string;
  linkPath: string;
  linkText: string;
}

export function InvestmentSection({
  title,
  description,
  imageSrc,
  linkPath,
  linkText,
  className,
  ...props
}: InvestmentSectionProps) {
  return (
    <div
      className={cn(
        'grid grid-cols-1 md:grid-cols-2 gap-8 items-center',
        className
      )}
      {...props}
    >
      <div className="reveal-on-scroll">
        <h3 className="text-2xl font-serif text-natura-900 mb-4">{title}</h3>
        <p className="text-natura-700 mb-6">{description}</p>
        <Button
          variant="outline"
          className="border-natura-700 text-natura-700 hover:bg-natura-50 group"
          asChild
        >
          <Link to={linkPath}>
            {linkText}
            <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </div>
      
      <div className="relative aspect-w-16 aspect-h-9 rounded-lg overflow-hidden reveal-on-scroll">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
