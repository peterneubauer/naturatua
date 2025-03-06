import { useEffect, useRef } from 'react';
import { Layout } from '@/components/layout/Layout';
import { SectionTitle } from '@/components/ui/section-title';
import { InfoCard } from '@/components/ui/info-card';
import { InvestmentSection } from '@/components/ui/investment-section';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Leaf, Recycle, Heart, ShieldCheck, TreePine, Globe, DollarSign } from 'lucide-react';

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
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2000&q=80" 
            alt="Natural landscape" 
            className="h-full w-full object-cover object-center"
          />
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-2xl animate-fade-up">
            <span className="inline-block text-sand-100 text-sm uppercase tracking-wider mb-4 font-medium">
              Invest in Biodiversity
            </span>
            <h1 className="text-white mb-6">Help Restore Earth's Biodiversity</h1>
            <p className="text-sand-100 mb-8 text-lg md:text-xl">
              NaturaTua seeks to reverse the negative trend in biodiversity through a new investment model. We create transparent opportunities for individuals and institutions to directly finance targeted ecological restoration.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-natura-500 hover:bg-natura-600 text-white"
                asChild
              >
                <Link to="/projects/ustorp">
                  Our First Project
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="bg-transparent border-white text-white hover:bg-white/10"
                asChild
              >
                <Link to="/philosophy">
                  Our Philosophy
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Biodiversity Investment Section */}
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
              description="Our flagship project transforms 50 hectares of degraded farmland in Ustorp into a thriving ecosystem. Invest in BioDiversity Units (BDUs) that represent the annual cost of maintaining one hectare of restored land."
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
      
      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="reveal-on-scroll">
              <span className="inline-block text-natura-600 text-sm uppercase tracking-wider mb-4 font-medium">
                Our Approach
              </span>
              <h2 className="text-natura-900 mb-6">A New Asset Class for Ecosystem Restoration</h2>
              <p className="text-natura-700 mb-6">
                NaturaTua introduces BioDiversity Units (BDUs) - a new asset class designed to finance ecosystem restoration and preservation. Each BDU represents the annual cost of restoring and maintaining one hectare of land.
              </p>
              <p className="text-natura-700 mb-8">
                Investors in BDUs receive financial returns generated through sustainable resource utilization, carbon credits, and ecosystem services, while making a measurable positive impact on biodiversity.
              </p>
              <Button className="bg-natura-700 hover:bg-natura-800 text-white" asChild>
                <Link to="/philosophy">Learn More About Our Approach</Link>
              </Button>
            </div>
            
            <div className="relative reveal-on-scroll">
              <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1608613304226-f133cdfc074c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" 
                  alt="Natura ecosystems" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 w-64 aspect-square bg-natura-100 rounded-lg p-6 shadow-lg">
                <div className="h-full flex flex-col justify-center">
                  <p className="font-serif text-lg text-natura-800 italic">
                    "Biodiversity loss is one of humanity's greatest challenges. Through investments, we can reverse this trend."
                  </p>
                  <p className="mt-4 text-sm text-natura-600">— NaturaTua Team</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="py-20 bg-natura-50">
        <div className="container">
          <SectionTitle
            subtitle="Our Core Values"
            title="What Drives Our Mission"
            description="At NaturaTua, we're guided by a set of principles that shape our approach to biodiversity investment and restoration."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="reveal-on-scroll animation-delay-200">
              <InfoCard
                icon={<Leaf size={24} />}
                title="Biodiversity First"
                content="We prioritize ecological outcomes and biodiversity protection in all our projects and investments."
              />
            </div>
            <div className="reveal-on-scroll animation-delay-400">
              <InfoCard
                icon={<Recycle size={24} />}
                title="Sustainable Returns"
                content="We believe financial returns and ecological restoration can go hand-in-hand through innovative investment models."
              />
            </div>
            <div className="reveal-on-scroll animation-delay-600">
              <InfoCard
                icon={<Heart size={24} />}
                title="Transparency"
                content="All our projects feature clear metrics, regular reporting, and verifiable ecological outcomes."
              />
            </div>
            <div className="reveal-on-scroll animation-delay-800">
              <InfoCard
                icon={<ShieldCheck size={24} />}
                title="Scientific Approach"
                content="Our restoration projects are based on scientific principles and monitored by ecology experts."
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 bg-natura-900 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif mb-6 reveal-on-scroll">Join the Biodiversity Restoration Movement</h2>
            <p className="text-natura-200 mb-8 text-lg reveal-on-scroll animation-delay-200">
              Subscribe to our newsletter for updates on our projects, investment opportunities, and the latest from the world of biodiversity restoration.
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
