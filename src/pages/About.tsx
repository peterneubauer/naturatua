
import { Layout } from '@/components/layout/Layout';
import { SectionTitle } from '@/components/ui/section-title';
import { InfoCard } from '@/components/ui/info-card';
import { Leaf, Award, Heart, Globe, Clock, Users } from 'lucide-react';

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-natura-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center reveal-on-scroll">
            <span className="inline-block text-natura-600 text-sm uppercase tracking-wider mb-4 font-medium">
              About Us
            </span>
            <h1 className="text-natura-900 mb-6">Our Story of Passion for Natural Wellness</h1>
            <p className="text-natura-700 text-lg">
              Founded on the belief that beauty and wellness should be in harmony with nature, 
              Natura has grown from humble beginnings to become a trusted name in sustainable, 
              effective natural products.
            </p>
          </div>
        </div>
      </section>
      
      {/* Our Journey */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="reveal-on-scroll">
              <img 
                src="https://images.unsplash.com/photo-1612837017391-4b6b7b0b0b0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" 
                alt="Our journey" 
                className="rounded-lg shadow-xl"
              />
            </div>
            
            <div className="reveal-on-scroll animation-delay-200">
              <SectionTitle
                subtitle="Our Journey"
                title="From Garden to Global"
                description="What began as a small family business has evolved into a purpose-driven brand with a worldwide presence."
                alignment="left"
              />
              
              <div className="space-y-6 mt-6">
                <p className="text-natura-700">
                  Our founder, Maria Garcia, grew up surrounded by the lush botanical gardens of her grandmother's farm. 
                  Witnessing firsthand the profound healing properties of plants, she developed a deep appreciation for 
                  nature's wisdom.
                </p>
                <p className="text-natura-700">
                  In 2008, after years of research and experimentation, Maria launched Natura with a small collection 
                  of handcrafted formulations. Her mission was clear: to create products that honor traditional botanical 
                  knowledge while embracing scientific innovation.
                </p>
                <p className="text-natura-700">
                  Today, we remain true to our roots while continuously evolving. Our team of experts—botanists, 
                  chemists, and wellness practitioners—work together to create formulations that deliver real results 
                  without compromising our commitment to sustainability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="py-20 bg-natura-50">
        <div className="container">
          <SectionTitle
            subtitle="Our Values"
            title="Principles That Guide Us"
            description="These core values inform everything we do, from product development to customer relationships."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="reveal-on-scroll">
              <InfoCard
                icon={<Leaf size={24} />}
                title="Nature First"
                content="We believe in the power of nature's wisdom and strive to harness it responsibly in every product we create."
              />
            </div>
            <div className="reveal-on-scroll animation-delay-200">
              <InfoCard
                icon={<Award size={24} />}
                title="Uncompromising Quality"
                content="From sourcing to formulation to packaging, we maintain the highest standards of quality and efficacy."
              />
            </div>
            <div className="reveal-on-scroll animation-delay-400">
              <InfoCard
                icon={<Heart size={24} />}
                title="Holistic Wellness"
                content="We create products that nurture not just physical beauty, but overall well-being and environmental health."
              />
            </div>
            <div className="reveal-on-scroll animation-delay-200">
              <InfoCard
                icon={<Globe size={24} />}
                title="Environmental Stewardship"
                content="We actively work to minimize our ecological footprint and contribute to a healthier planet."
              />
            </div>
            <div className="reveal-on-scroll animation-delay-400">
              <InfoCard
                icon={<Clock size={24} />}
                title="Sustainability"
                content="We make choices that consider long-term impact, from renewable resources to compostable packaging."
              />
            </div>
            <div className="reveal-on-scroll animation-delay-600">
              <InfoCard
                icon={<Users size={24} />}
                title="Community"
                content="We foster meaningful connections with our customers, suppliers, and the communities we touch."
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <SectionTitle
            subtitle="Our Team"
            title="The People Behind Natura"
            description="Meet our passionate team of experts committed to bringing you the best in natural wellness."
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {[
              {
                name: "Maria Garcia",
                role: "Founder & CEO",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
              },
              {
                name: "David Chen",
                role: "Chief Botanist",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              },
              {
                name: "Sophia Patel",
                role: "Product Developer",
                image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80"
              },
              {
                name: "James Wilson",
                role: "Sustainability Director",
                image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              }
            ].map((member, index) => (
              <div 
                key={member.name} 
                className="reveal-on-scroll"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="bg-natura-50 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md group">
                  <div className="aspect-square relative overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-natura-900 font-medium text-lg">{member.name}</h3>
                    <p className="text-natura-600">{member.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Mission Statement */}
      <section className="py-24 bg-natura-900 text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center reveal-on-scroll">
            <h2 className="text-3xl md:text-4xl font-serif mb-6">Our Mission</h2>
            <p className="text-xl text-natura-100 italic font-serif mb-8">
              "To harness the healing power of nature in products that enhance well-being, 
              while nurturing the earth and empowering communities."
            </p>
            <div className="w-20 h-1 bg-natura-600 mx-auto"></div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
