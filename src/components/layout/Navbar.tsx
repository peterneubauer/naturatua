
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Products', href: '/products' },
  { label: 'Philosophy', href: '/philosophy' },
  { label: 'Contact', href: '/contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        scrolled 
          ? 'py-2 backdrop-blur-glass border-b border-natura-200/20 shadow-sm' 
          : 'py-4 bg-transparent'
      )}
    >
      <div className="container flex items-center justify-between">
        <Link 
          to="/" 
          className="text-natura-900 font-serif text-2xl font-medium transition-all hover:text-natura-700"
        >
          Natura
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="text-natura-800 text-sm font-medium transition-all hover:text-natura-600 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-natura-600 after:transition-all hover:after:w-full"
            >
              {item.label}
            </Link>
          ))}
          <Button variant="default" className="bg-natura-700 hover:bg-natura-800 transition-all ml-4">
            Shop Now
          </Button>
        </nav>

        {/* Mobile Navigation Toggle */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>

        {/* Mobile Navigation Menu */}
        <div
          className={cn(
            'fixed inset-0 bg-white z-50 p-6 flex flex-col md:hidden transition-transform duration-300 ease-in-out',
            isOpen ? 'translate-x-0' : 'translate-x-full'
          )}
          style={{ top: '60px' }}
        >
          <nav className="flex flex-col space-y-6 mt-10">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="text-natura-800 text-xl font-medium p-2 transition-all hover:text-natura-600 border-b border-natura-100"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button 
              variant="default" 
              className="bg-natura-700 hover:bg-natura-800 transition-all w-full mt-4"
              onClick={() => setIsOpen(false)}
            >
              Shop Now
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
