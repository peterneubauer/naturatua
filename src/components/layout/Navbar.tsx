
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';

interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { 
    label: 'Projects', 
    href: '#',
    children: [
      { label: 'Ustorp', href: '/projects/ustorp' },
    ]
  },
  { label: 'Philosophy', href: '/philosophy' },
  { label: 'Contact', href: '/contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

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

  const toggleDropdown = (label: string) => {
    if (activeDropdown === label) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(label);
    }
  };

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
          className="text-natura-900 font-serif transition-all hover:opacity-90"
        >
          <img 
            src="/naturatua-logo.png" 
            alt="NaturaTua Logo" 
            className="h-10 md:h-12"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <div key={item.label} className="relative group">
              {item.children ? (
                <div className="flex items-center cursor-pointer">
                  <button
                    onClick={() => toggleDropdown(item.label)}
                    className="text-natura-800 text-sm font-medium transition-all hover:text-natura-600 relative flex items-center gap-1"
                  >
                    {item.label}
                    <ChevronDown size={16} className={cn(
                      "transition-transform",
                      activeDropdown === item.label ? "rotate-180" : ""
                    )} />
                  </button>
                  
                  {activeDropdown === item.label && (
                    <div className="absolute top-full left-0 mt-2 bg-white shadow-md rounded-md overflow-hidden min-w-[180px] py-2 z-20">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.href}
                          className="block px-4 py-2 text-natura-800 hover:bg-natura-50 text-sm"
                          onClick={() => setActiveDropdown(null)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  to={item.href}
                  className="text-natura-800 text-sm font-medium transition-all hover:text-natura-600 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-natura-600 after:transition-all hover:after:w-full"
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
          <Button variant="default" className="bg-natura-700 hover:bg-natura-800 transition-all ml-4">
            Invest Now
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
              <div key={item.label}>
                {item.children ? (
                  <div>
                    <button
                      onClick={() => toggleDropdown(item.label)}
                      className="flex items-center justify-between w-full text-natura-800 text-xl font-medium p-2 transition-all hover:text-natura-600 border-b border-natura-100"
                    >
                      {item.label}
                      <ChevronDown size={16} className={cn(
                        "transition-transform",
                        activeDropdown === item.label ? "rotate-180" : ""
                      )} />
                    </button>
                    
                    {activeDropdown === item.label && (
                      <div className="pl-4 mt-2 space-y-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            to={child.href}
                            className="block py-2 text-natura-700 hover:text-natura-600 text-lg"
                            onClick={() => {
                              setActiveDropdown(null);
                              setIsOpen(false);
                            }}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className="text-natura-800 text-xl font-medium p-2 transition-all hover:text-natura-600 border-b border-natura-100"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <Button 
              variant="default" 
              className="bg-natura-700 hover:bg-natura-800 transition-all w-full mt-4"
              onClick={() => setIsOpen(false)}
            >
              Invest Now
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
