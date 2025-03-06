
import { Layout } from '@/components/layout/Layout';
import { SectionTitle } from '@/components/ui/section-title';
import { InfoCard } from '@/components/ui/info-card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Leaf, Recycle, GlobeClock, DollarSign, LineChart } from 'lucide-react';

export default function UstorpProject() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-natura-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="reveal-on-scroll">
              <span className="inline-block text-natura-600 text-sm uppercase tracking-wider mb-4 font-medium">
                Our First Project
              </span>
              <h1 className="text-natura-900 mb-6">NaturaTua Ustorp</h1>
              <p className="text-natura-700 mb-6 text-lg">
                Invest in biodiversity restoration through our pioneering project in Ustorp, 
                where we're transforming degraded land into thriving ecosystems.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  className="bg-natura-700 hover:bg-natura-800 text-white"
                >
                  Invest Now
                </Button>
                <Button 
                  variant="outline" 
                  className="border-natura-700 text-natura-700"
                >
                  Learn More
                </Button>
              </div>
            </div>
            
            <div className="relative aspect-w-16 aspect-h-9 rounded-lg overflow-hidden reveal-on-scroll">
              <img 
                src="https://images.unsplash.com/photo-1511497584788-876760111969?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Ustorp restoration area" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Project Overview */}
      <section className="py-20 bg-white">
        <div className="container">
          <SectionTitle
            subtitle="Project Overview"
            title="Restoring Biodiversity in Ustorp"
            description="Our flagship project represents a new approach to biodiversity investment, combining ecological restoration with sustainable financial returns."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="reveal-on-scroll">
              <InfoCard
                icon={<Leaf size={24} />}
                title="Ecological Impact"
                content="Restoration of 500 hectares of degraded farmland into diverse habitats supporting hundreds of native species."
              />
            </div>
            <div className="reveal-on-scroll animation-delay-200">
              <InfoCard
                icon={<DollarSign size={24} />}
                title="Investment Opportunity"
                content="Purchase BioDiversity Units (BDUs) representing the annual cost of maintaining one hectare of restored land."
              />
            </div>
            <div className="reveal-on-scroll animation-delay-400">
              <InfoCard
                icon={<LineChart size={24} />}
                title="Long-term Returns"
                content="Projected annual returns of 5-8% through sustainable resource utilization and ecosystem services."
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* BioDiversity Units */}
      <section className="py-20 bg-natura-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative rounded-lg overflow-hidden reveal-on-scroll">
              <div className="aspect-w-4 aspect-h-3">
                <img 
                  src="https://images.unsplash.com/photo-1470137237906-d8a4f71e1966?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                  alt="BioDiversity Units" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="order-1 lg:order-2 reveal-on-scroll">
              <SectionTitle
                subtitle="Investment Model"
                title="BioDiversity Units (BDUs)"
                description="A new asset class for ecological investment"
                alignment="left"
              />
              
              <div className="mt-8 space-y-6">
                <div className="flex items-start">
                  <div className="mt-1 mr-4 p-2 bg-natura-100 rounded-full text-natura-600">
                    <GlobeClock size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-natura-900 mb-2">What is a BDU?</h3>
                    <p className="text-natura-700">
                      A BioDiversity Unit represents the annual cost of maintaining and monitoring one hectare of 
                      restored land, ensuring biodiversity protection and ecological improvement.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 mr-4 p-2 bg-natura-100 rounded-full text-natura-600">
                    <DollarSign size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-natura-900 mb-2">Investment Structure</h3>
                    <p className="text-natura-700">
                      BDUs are available at €5,000 per unit, with a minimum investment of 1 BDU. 
                      Investors receive annual reports on ecological progress and financial performance.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 mr-4 p-2 bg-natura-100 rounded-full text-natura-600">
                    <Recycle size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-natura-900 mb-2">Return Mechanism</h3>
                    <p className="text-natura-700">
                      Returns are generated through sustainable resource utilization, carbon credits, 
                      ecotourism, and other ecosystem services developed on the restored land.
                    </p>
                  </div>
                </div>
              </div>
              
              <Button className="mt-8 bg-natura-700 hover:bg-natura-800 text-white">
                Download Investor Brochure
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <SectionTitle
            subtitle="Project Timeline"
            title="Our Restoration Journey"
            description="The Ustorp project follows a carefully planned restoration process spanning multiple years."
          />
          
          <div className="relative mt-16 pl-8 border-l-2 border-natura-200 space-y-16 max-w-3xl mx-auto">
            {[
              {
                year: "2023",
                title: "Land Acquisition & Planning",
                description: "Purchase of 500 hectares of degraded farmland. Comprehensive ecological assessment and restoration planning with expert partners."
              },
              {
                year: "2024",
                title: "Initial Restoration",
                description: "Soil remediation, invasive species removal, and planting of native vegetation across 30% of the project area."
              },
              {
                year: "2025-2026",
                title: "Ecosystem Development",
                description: "Continued restoration efforts, wildlife corridor establishment, and implementation of sustainable management practices."
              },
              {
                year: "2027 onwards",
                title: "Monitoring & Management",
                description: "Long-term ecological monitoring, adaptive management, and sustainable resource utilization to generate returns."
              }
            ].map((phase, index) => (
              <div key={index} className="relative reveal-on-scroll">
                <div className="absolute -left-[calc(2rem+1px)] top-0 w-8 h-8 bg-natura-600 rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
                <div>
                  <span className="inline-block text-natura-600 text-sm font-medium mb-2">{phase.year}</span>
                  <h3 className="text-xl font-medium text-natura-900 mb-2">{phase.title}</h3>
                  <p className="text-natura-700">{phase.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-natura-900 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif mb-6 reveal-on-scroll">Join the Biodiversity Restoration Movement</h2>
            <p className="text-natura-200 mb-8 text-lg reveal-on-scroll animation-delay-200">
              By investing in NaturaTua Ustorp, you're not just supporting ecological restoration – 
              you're pioneering a new asset class that values nature as it should be valued.
            </p>
            <div className="flex flex-wrap justify-center gap-4 reveal-on-scroll animation-delay-400">
              <Button size="lg" className="bg-natura-600 hover:bg-natura-500 text-white">
                Become an Investor
              </Button>
              <Button variant="outline" size="lg" className="border-natura-400 text-white hover:bg-natura-800">
                Schedule a Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
