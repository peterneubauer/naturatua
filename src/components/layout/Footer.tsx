
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Facebook, Mail, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';

export function Footer() {
  const { toast } = useToast();
  
  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real application, you would handle the form submission here
    toast({
      title: "Subscribed!",
      description: "Thank you for subscribing to our newsletter.",
    });
    (e.target as HTMLFormElement).reset();
  };
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-natura-50 pt-16 pb-8 border-t border-natura-100">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-1">
            <h3 className="text-2xl font-serif mb-4">NaturaTua</h3>
            <p className="text-natura-700 mb-6">Empowering biodiversity restoration through innovative investment models that benefit both investors and the planet.</p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" className="text-natura-700 hover:text-natura-900 transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" className="text-natura-700 hover:text-natura-900 transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="https://facebook.com" className="text-natura-700 hover:text-natura-900 transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="mailto:info@naturatua.com" className="text-natura-700 hover:text-natura-900 transition-colors" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Projects</h4>
            <ul className="space-y-2">
              <li><Link to="/projects/ustorp" className="text-natura-700 hover:text-natura-900 transition-colors">Ustorp Project</Link></li>
              <li><Link to="/projects" className="text-natura-700 hover:text-natura-900 transition-colors">Future Projects</Link></li>
              <li><Link to="/investments" className="text-natura-700 hover:text-natura-900 transition-colors">Investment Models</Link></li>
              <li><Link to="/impact" className="text-natura-700 hover:text-natura-900 transition-colors">Impact Reports</Link></li>
              <li><Link to="/biodiversity" className="text-natura-700 hover:text-natura-900 transition-colors">Biodiversity Resources</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">About</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-natura-700 hover:text-natura-900 transition-colors">Our Story</Link></li>
              <li><Link to="/philosophy" className="text-natura-700 hover:text-natura-900 transition-colors">Philosophy</Link></li>
              <li><Link to="/team" className="text-natura-700 hover:text-natura-900 transition-colors">Our Team</Link></li>
              <li><Link to="/partners" className="text-natura-700 hover:text-natura-900 transition-colors">Partners</Link></li>
              <li><Link to="/contact" className="text-natura-700 hover:text-natura-900 transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Newsletter</h4>
            <p className="text-natura-700 mb-4">Subscribe for updates on our projects, biodiversity insights, and investment opportunities.</p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <Input 
                type="email" 
                placeholder="Your email address" 
                required 
                className="bg-white border-natura-200 focus:border-natura-500 focus:ring-natura-500"
              />
              <Button type="submit" className="w-full bg-natura-700 hover:bg-natura-800">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        
        <div className="pt-8 border-t border-natura-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-natura-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} NaturaTua. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link to="/privacy" className="text-natura-500 hover:text-natura-700 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-natura-500 hover:text-natura-700 transition-colors">Terms of Service</Link>
            <Link to="/legal" className="text-natura-500 hover:text-natura-700 transition-colors">Legal Information</Link>
          </div>
          <Button 
            variant="ghost" 
            size="icon" 
            className="hidden md:flex text-natura-500 hover:text-natura-700 mt-4 md:mt-0"
            onClick={scrollToTop}
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </Button>
        </div>
      </div>
    </footer>
  );
}
