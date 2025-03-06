
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  className?: string;
}

export function ProductCard({
  id,
  name,
  description,
  price,
  image,
  category,
  className,
}: ProductCardProps) {
  return (
    <Link 
      to={`/products/${id}`}
      className={cn(
        'group block overflow-hidden transition-all duration-300 h-full',
        className
      )}
    >
      <div className="relative aspect-square overflow-hidden bg-natura-50 rounded-md mb-4">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      <div className="space-y-2">
        <span className="text-xs font-medium uppercase tracking-wider text-natura-500">
          {category}
        </span>
        <h3 className="font-medium text-natura-900 group-hover:text-natura-700 transition-colors">
          {name}
        </h3>
        <p className="text-natura-600 text-sm line-clamp-2">{description}</p>
        <p className="font-medium text-natura-900">${price.toFixed(2)}</p>
      </div>
    </Link>
  );
}
