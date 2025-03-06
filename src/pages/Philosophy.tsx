
import { Layout } from '@/components/layout/Layout';
import { SectionTitle } from '@/components/ui/section-title';

const Philosophy = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-natura-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center reveal-on-scroll">
            <span className="inline-block text-natura-600 text-sm uppercase tracking-wider mb-4 font-medium">
              Our Philosophy
            </span>
            <h1 className="text-natura-900 mb-6">The Guiding Principles of Our Approach</h1>
            <p className="text-natura-700 text-lg">
              At Natura, our philosophy is rooted in a profound respect for the wisdom of nature and a commitment to 
              creating products that honor both human well-being and environmental health.
            </p>
          </div>
        </div>
      </section>
      
      {/* Philosophy Sections */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="reveal-on-scroll order-2 lg:order-1">
              <div className="relative">
                <div className="absolute -inset-4 rounded-lg bg-natura-50 -z-10 transform -rotate-2"></div>
                <div className="relative overflow-hidden rounded-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1470058869958-2a77ade41c02?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                    alt="Natural ingredients" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
            
            <div className="reveal-on-scroll animation-delay-200 order-1 lg:order-2">
              <span className="inline-block text-natura-600 text-sm uppercase tracking-wider mb-2 font-medium">
                Ingredient Philosophy
              </span>
              <h2 className="text-natura-900 text-3xl font-serif mb-6">The Power of Plant Wisdom</h2>
              <div className="space-y-6 text-natura-700">
                <p>
                  We believe that nature provides everything we need for health and vitality. Our formulations harness the 
                  potent properties of botanicals that have been used for centuries in traditional wellness practices around the world.
                </p>
                <p>
                  Each ingredient is selected not only for its efficacy but also for its sustainability. We prioritize organic, 
                  wild-harvested, and responsibly cultivated botanicals that support both human health and ecosystem diversity.
                </p>
                <p>
                  What we leave out is just as important as what we include. You'll never find harmful synthetic chemicals, 
                  artificial fragrances, parabens, or sulfates in our products. We believe beauty and wellness should never 
                  come at the cost of your health.
                </p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="reveal-on-scroll animation-delay-200">
              <span className="inline-block text-natura-600 text-sm uppercase tracking-wider mb-2 font-medium">
                Environmental Ethics
              </span>
              <h2 className="text-natura-900 text-3xl font-serif mb-6">In Harmony with the Earth</h2>
              <div className="space-y-6 text-natura-700">
                <p>
                  Our commitment to environmental stewardship informs every aspect of our business. We understand that 
                  true wellness cannot exist in isolation from the health of our planet.
                </p>
                <p>
                  From our regenerative sourcing practices to our plastic-free packaging, we strive to create a positive 
                  impact through every step of our process. We're continuously seeking ways to reduce our ecological footprint 
                  and contribute to a more sustainable future.
                </p>
                <p>
                  We believe in transparency and accountability. Each year, we publish an environmental impact report that 
                  details our resource use, conservation efforts, and goals for improvement. We're not perfect, but we're 
                  committed to constant progress.
                </p>
              </div>
            </div>
            
            <div className="reveal-on-scroll">
              <div className="relative">
                <div className="absolute -inset-4 rounded-lg bg-natura-50 -z-10 transform rotate-2"></div>
                <div className="relative overflow-hidden rounded-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1313&q=80" 
                    alt="Sustainable practices" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="reveal-on-scroll order-2 lg:order-1">
              <div className="relative">
                <div className="absolute -inset-4 rounded-lg bg-natura-50 -z-10 transform -rotate-1"></div>
                <div className="relative overflow-hidden rounded-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1475483768296-6163e08872a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                    alt="Community" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
            
            <div className="reveal-on-scroll animation-delay-200 order-1 lg:order-2">
              <span className="inline-block text-natura-600 text-sm uppercase tracking-wider mb-2 font-medium">
                Social Responsibility
              </span>
              <h2 className="text-natura-900 text-3xl font-serif mb-6">Empowering Communities</h2>
              <div className="space-y-6 text-natura-700">
                <p>
                  We believe that business can be a force for positive change. Our commitment to social responsibility extends 
                  to everyone involved in bringing our products to life.
                </p>
                <p>
                  We work directly with growers and harvesters, establishing fair trade relationships that provide sustainable 
                  livelihoods. By eliminating middlemen, we ensure that the communities who steward these precious botanical 
                  resources receive fair compensation for their knowledge and labor.
                </p>
                <p>
                  Through our Natura Foundation, we reinvest a portion of our profits in education, conservation, and community 
                  development initiatives in the regions where we source our ingredients. We're committed to creating a virtuous 
                  cycle of wellness that extends from individual users to the global community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Quote Section */}
      <section className="py-24 bg-natura-50">
        <div className="container max-w-4xl">
          <blockquote className="text-center reveal-on-scroll">
            <p className="text-natura-800 text-2xl md:text-3xl font-serif italic mb-8">
              "We don't inherit the earth from our ancestors; we borrow it from our children. At Natura, this principle guides 
              every decision we make—from the ingredients we select to the communities we support."
            </p>
            <cite className="block text-natura-600">
              <span className="font-medium block mb-1">— Maria Garcia</span>
              <span className="text-sm">Founder, Natura</span>
            </cite>
          </blockquote>
        </div>
      </section>
    </Layout>
  );
};

export default Philosophy;
