import { useEffect, useRef } from 'react';
import { Layout } from '@/components/layout/Layout';
import { SectionTitle } from '@/components/ui/section-title';
import { ProductCard } from '@/components/ui/product-card';
import { InfoCard } from '@/components/ui/info-card';
import { InvestmentSection } from '@/components/ui/investment-section';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Recycle, Heart, ShieldCheck, TreePine, Globe, DollarSign } from 'lucide-react';

// Mock data for products
const featuredProducts = [
  {
    id: 'moisturizer',
    name: 'Daily Moisturizer',
    description: 'Hydrating cream with natural extracts for all skin types.',
    price: 35,
    image: 'https://images.unsplash.com/photo-1570194065650-d99fb4cb64c4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80',
    category: 'Skincare'
  },
  {
    id: 'serum',
    name: 'Vitamin C Serum',
    description: 'Brightening serum that reduces dark spots and enhances glow.',
    price: 48,
    image: 'https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=80',
    category: 'Skincare'
  },
  {
    id: 'oil',
    name: 'Calming Essential Oil',
    description: 'Blend of lavender and chamomile to promote relaxation and sleep.',
    price: 28,
    image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=80',
    category: 'Wellness'
  },
  {
    id: 'mask',
    name: 'Clay Purifying Mask',
    description: 'Deep cleansing mask that draws out impurities and toxins.',
    price: 32,
    image: 'https://images.unsplash.com/photo-1601049673742-d24bc1aa1f2b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=80',
    category: 'Skincare'
  },
];

const Index = () => {
  // Refs for scroll animations
  const heroImageRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Parallax effect for hero section
    const handleScroll = () => {
      if (heroImageRef.current) {
        const scrollPosition = window.scrollY;
        heroImageRef.current.style.transform = `translateY(${scrollPosition * 0.1}px)`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 -z-10"
          ref={heroImageRef}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/10 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1501870022016-de6802b7c439?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
            alt="Natural landscape" 
            className="h-full w-full object-cover object-center"
          />
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-2xl animate-fade-up">
            <span className="inline-block text-sand-100 text-sm uppercase tracking-wider mb-4 font-medium">
              Natural. Sustainable. Effective.
            </span>
            <h1 className="text-white mb-6">Embrace the power of nature for your well-being</h1>
            <p className="text-sand-100 mb-8 text-lg md:text-xl">
              Our products are crafted with care using sustainable ingredients that nourish your body and respect the earth.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-natura-700 hover:bg-natura-800 text-white"
              >
                Explore Products
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="bg-transparent border-white text-white hover:bg-white/10"
              >
                Our Philosophy
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Biodiversity Investment Section - NEW */}
      <section className="py-20 bg-natura-50">
        <div className="container">
          <SectionTitle
            subtitle="Invest in Nature"
            title="Biodiversity Restoration Investment"
            description="NaturaTua offers a pioneering approach to ecological investment, allowing you to contribute to biodiversity restoration while generating sustainable returns."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="reveal-on-scroll">
              <InfoCard
                icon={<TreePine size={24} />}
                title="Ecological Impact"
                content="Your investment directly funds the restoration and protection of vital ecosystems, enhancing biodiversity and ecosystem services."
              />
            </div>
            <div className="reveal-on-scroll animation-delay-200">
              <InfoCard
                icon={<DollarSign size={24} />}
                title="Financial Returns"
                content="Our innovative investment model generates sustainable returns through ecosystem services, carbon credits, and sustainable resource utilization."
              />
            </div>
            <div className="reveal-on-scroll animation-delay-400">
              <InfoCard
                icon={<Globe size={24} />}
                title="Global Significance"
                content="By investing in biodiversity, you're contributing to climate resilience, species preservation, and sustainable development goals."
              />
            </div>
          </div>
          
          <div className="mt-16 pt-8 border-t border-natura-200">
            <InvestmentSection
              title="NaturaTua Ustorp: Our First Project"
              description="Our flagship project transforms 500 hectares of degraded farmland in Ustorp into a thriving ecosystem. Invest in BioDiversity Units (BDUs) that represent the annual cost of maintaining one hectare of restored land."
              imageSrc="https://images.unsplash.com/photo-1511497584788-876760111969?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              linkPath="/projects/ustorp"
              linkText="Explore Project"
            />
          </div>
          
          <div className="mt-12 text-center">
            <Button 
              className="bg-natura-700 hover:bg-natura-800 text-white"
              asChild
            >
              <Link to="/projects/ustorp">
                Become an Investor
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Featured Products */}
      <section className="py-20 bg-white">
        <div className="container">
          <SectionTitle
            subtitle="Our Collection"
            title="Crafted with Care"
            description="Discover our selection of premium products designed to enhance your natural beauty and well-being."
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <div key={product.id} className="reveal-on-scroll">
                <ProductCard {...product} />
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button 
              variant="outline"
              className="border-natura-700 text-natura-700 hover:bg-natura-50 group"
            >
              View All Products
              <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="py-20 bg-natura-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="reveal-on-scroll">
              <span className="inline-block text-natura-600 text-sm uppercase tracking-wider mb-4 font-medium">
                Our Story
              </span>
              <h2 className="text-natura-900 mb-6">Inspired by tradition, guided by science</h2>
              <p className="text-natura-700 mb-6">
                Natura was born from a passion for the healing power of plants and a commitment to sustainable practices. 
                For generations, our family has harvested botanicals using time-honored traditions while embracing 
                modern scientific advancements to create products that truly work.
              </p>
              <p className="text-natura-700 mb-8">
                Each formula is meticulously crafted to harness the potent properties of organic ingredients, 
                delivering effective results while honoring our commitment to environmental stewardship.
              </p>
              <Button className="bg-natura-700 hover:bg-natura-800 text-white">
                Learn More About Us
              </Button>
            </div>
            
            <div className="relative reveal-on-scroll">
              <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1608613304226-f133cdfc074c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" 
                  alt="Natura botanicals" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 w-64 aspect-square bg-natura-100 rounded-lg p-6 shadow-lg">
                <div className="h-full flex flex-col justify-center">
                  <p className="font-serif text-lg text-natura-800 italic">
                    "We believe that beauty and wellness should never come at the expense of our planet."
                  </p>
                  <p className="mt-4 text-sm text-natura-600">— Maria Garcia, Founder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <SectionTitle
            subtitle="Our Values"
            title="What We Stand For"
            description="Our commitment goes beyond creating great products. We're guided by core principles that shape everything we do."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="reveal-on-scroll animation-delay-200">
              <InfoCard
                icon={<Leaf size={24} />}
                title="Natural Ingredients"
                content="We source only the highest quality botanical ingredients, free from harmful chemicals and synthetic additives."
              />
            </div>
            <div className="reveal-on-scroll animation-delay-400">
              <InfoCard
                icon={<Recycle size={24} />}
                title="Sustainable Practices"
                content="From harvesting to packaging, we implement eco-friendly processes that minimize our environmental footprint."
              />
            </div>
            <div className="reveal-on-scroll animation-delay-600">
              <InfoCard
                icon={<Heart size={24} />}
                title="Ethical Sourcing"
                content="We work directly with local farmers and communities, ensuring fair compensation and sustainable cultivation."
              />
            </div>
            <div className="reveal-on-scroll animation-delay-800">
              <InfoCard
                icon={<ShieldCheck size={24} />}
                title="Proven Efficacy"
                content="Our formulations are backed by scientific research and testing to ensure they deliver real results."
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonial Section */}
      <section className="py-20 bg-natura-50">
        <div className="container">
          <SectionTitle
            subtitle="Testimonials"
            title="What Our Customers Say"
            description="Join thousands of satisfied customers who have made Natura a part of their daily wellness routine."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-lg shadow-sm border border-natura-100 reveal-on-scroll"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex items-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg 
                      key={star} 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 24 24" 
                      fill="currentColor" 
                      className="w-5 h-5 text-yellow-500"
                    >
                      <path 
                        fillRule="evenodd" 
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" 
                        clipRule="evenodd" 
                      />
                    </svg>
                  ))}
                </div>
                <blockquote className="mb-4 text-natura-800 font-serif italic">
                  "I've tried countless natural skincare products, but Natura truly stands out. The results are remarkable, and I love knowing that I'm supporting sustainable practices."
                </blockquote>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-natura-200 mr-3"></div>
                  <div>
                    <p className="font-medium text-natura-900">Jane Smith</p>
                    <p className="text-sm text-natura-600">Loyal Customer</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 bg-natura-900 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif mb-6 reveal-on-scroll">Join the Natura community</h2>
            <p className="text-natura-200 mb-8 text-lg reveal-on-scroll animation-delay-200">
              Subscribe to our newsletter for exclusive offers, wellness tips, and updates on new products.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto reveal-on-scroll animation-delay-400">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-3 rounded-lg bg-natura-800 border border-natura-700 text-white placeholder-natura-400 focus:outline-none focus:ring-2 focus:ring-natura-500"
              />
              <Button type="submit" className="bg-natura-600 hover:bg-natura-500 text-white whitespace-nowrap">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
