import { Layout } from '@/components/layout/Layout';
import { SectionTitle } from '@/components/ui/section-title';
import { InfoCard } from '@/components/ui/info-card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Leaf, Recycle, Globe, Clock, DollarSign, LineChart } from 'lucide-react';

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
              <h1 className="text-natura-900 mb-6 natura-font text-4xl md:text-5xl lg:text-6xl">NaturaTua Ustorp</h1>
              <p className="text-natura-700 mb-6 text-lg">
                The NaturaTua Ustorp pilot project represents our first step toward creating a new market mechanism for biodiversity restoration. Located in Ustorp, this project transforms degraded farmland into thriving ecosystems.
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
            description="The pilot project combines our investment model with ecological restoration expertise to create a blueprint for future projects."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="reveal-on-scroll">
              <InfoCard
                icon={<Leaf size={24} />}
                title="Ecological Restoration"
                content="We are transforming 50 hectares of degraded farmland into diverse habitats that support hundreds of native species and enhance ecosystem functions."
              />
            </div>
            <div className="reveal-on-scroll animation-delay-200">
              <InfoCard
                icon={<DollarSign size={24} />}
                title="BDU Investment Model"
                content="For the first time, investors can purchase BioDiversity Units that directly finance the restoration and maintenance of specific land areas."
              />
            </div>
            <div className="reveal-on-scroll animation-delay-400">
              <InfoCard
                icon={<LineChart size={24} />}
                title="Sustainable Returns"
                content="The project generates returns through sustainable resource utilization, carbon sequestration, ecosystem services, and recreational value."
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
                description="A new asset class connecting investors with ecological restoration"
                alignment="left"
              />
              
              <div className="mt-8 space-y-6">
                <div className="flex items-start">
                  <div className="mt-1 mr-4 p-2 bg-natura-100 rounded-full text-natura-600">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-natura-900 mb-2">What is a BDU?</h3>
                    <p className="text-natura-700">
                      A BioDiversity Unit (BDU) represents the annual cost of maintaining and monitoring one hectare of 
                      restored habitat. By purchasing BDUs, investors directly finance specific areas within the project.
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
                      BDUs for the Ustorp project are priced at €5,000 per unit per year. Investors can purchase multiple BDUs 
                      and receive detailed reports on the ecological progress and financial performance of their investment.
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
                      We target annual returns of 5-8% through a combination of sustainable resource utilization, carbon credits, 
                      ecotourism opportunities, and payments for ecosystem services that develop as the land is restored.
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
            description="The Ustorp project follows a carefully planned restoration process designed to maximize ecological recovery and investment returns over time."
          />
          
          <div className="relative mt-16 pl-8 border-l-2 border-natura-200 space-y-16 max-w-3xl mx-auto">
            {[
              {
                year: "2023",
                title: "Land Acquisition & Planning",
                description: "We secured 500 hectares of degraded farmland in Ustorp. Our team conducted comprehensive ecological assessments and developed detailed restoration plans with expert partners."
              },
              {
                year: "2024",
                title: "Initial Restoration",
                description: "We've begun the first phase of active restoration, including soil remediation, removing invasive species, and planting native vegetation across 30% of the project area."
              },
              {
                year: "2025-2026",
                title: "Ecosystem Development",
                description: "We'll continue restoration efforts across the remaining project area, establish wildlife corridors, and implement sustainable management practices to enhance biodiversity."
              },
              {
                year: "2027 onwards",
                title: "Monitoring & Management",
                description: "Long-term ecological monitoring and adaptive management will ensure continued biodiversity enhancement, while sustainable resource utilization will generate returns for investors."
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
            <h2 className="text-3xl md:text-4xl font-serif mb-6 reveal-on-scroll">Become a Biodiversity Investor</h2>
            <p className="text-natura-200 mb-8 text-lg reveal-on-scroll animation-delay-200">
              Join our pioneering community of investors who are financing the restoration of nature while generating sustainable returns. 
              The Ustorp project is currently accepting investments in BioDiversity Units (BDUs).
            </p>
            <div className="flex flex-wrap justify-center gap-4 reveal-on-scroll animation-delay-400">
              <Button size="lg" className="bg-natura-600 hover:bg-natura-500 text-white">
                Invest in BDUs
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
