
import { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { SectionTitle } from '@/components/ui/section-title';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    toast({
      title: "Message sent!",
      description: "We've received your message and will respond soon.",
    });
    
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
    setIsSubmitting(false);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-natura-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center reveal-on-scroll">
            <span className="inline-block text-natura-600 text-sm uppercase tracking-wider mb-4 font-medium">
              Contact Us
            </span>
            <h1 className="text-natura-900 mb-6">Get in Touch</h1>
            <p className="text-natura-700 text-lg">
              Have questions, suggestions, or just want to say hello? We'd love to hear from you. 
              Our team is here to help and eager to connect.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="reveal-on-scroll">
              <SectionTitle
                subtitle="Contact Information"
                title="How to Reach Us"
                description="We're here to answer any questions you might have about our products, philosophy, or anything else."
                alignment="left"
              />
              
              <div className="mt-8 space-y-6">
                <div className="flex items-start">
                  <div className="mt-1 mr-4 bg-natura-50 p-3 rounded-full text-natura-600">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium text-natura-900 mb-1">Our Location</h3>
                    <p className="text-natura-700">123 Nature Way, Portland, OR 97204, USA</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 mr-4 bg-natura-50 p-3 rounded-full text-natura-600">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium text-natura-900 mb-1">Phone</h3>
                    <p className="text-natura-700">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 mr-4 bg-natura-50 p-3 rounded-full text-natura-600">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium text-natura-900 mb-1">Email</h3>
                    <p className="text-natura-700">hello@natura.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 mr-4 bg-natura-50 p-3 rounded-full text-natura-600">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium text-natura-900 mb-1">Hours</h3>
                    <p className="text-natura-700">Monday-Friday: 9am - 5pm PST</p>
                    <p className="text-natura-700">Weekend: Closed</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h3 className="font-medium text-natura-900 mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://instagram.com"
                    className="bg-natura-50 hover:bg-natura-100 p-3 rounded-full text-natura-600 transition-colors"
                    aria-label="Instagram"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                  </a>
                  <a
                    href="https://twitter.com"
                    className="bg-natura-50 hover:bg-natura-100 p-3 rounded-full text-natura-600 transition-colors"
                    aria-label="Twitter"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                  </a>
                  <a
                    href="https://facebook.com"
                    className="bg-natura-50 hover:bg-natura-100 p-3 rounded-full text-natura-600 transition-colors"
                    aria-label="Facebook"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                  </a>
                  <a
                    href="https://pinterest.com"
                    className="bg-natura-50 hover:bg-natura-100 p-3 rounded-full text-natura-600 transition-colors"
                    aria-label="Pinterest"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" x2="12" y1="8" y2="16"/><line x1="8" x2="16" y1="12" y2="12"/></svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="reveal-on-scroll animation-delay-200">
              <div className="bg-natura-50 p-8 rounded-lg border border-natura-100">
                <h2 className="text-2xl font-medium text-natura-900 mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-white border-natura-200 focus:border-natura-500 focus:ring-natura-500"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-white border-natura-200 focus:border-natura-500 focus:ring-natura-500"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="bg-white border-natura-200 focus:border-natura-500 focus:ring-natura-500"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Your Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="bg-white border-natura-200 focus:border-natura-500 focus:ring-natura-500"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-natura-700 hover:bg-natura-800"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-20 bg-natura-50">
        <div className="container">
          <SectionTitle
            subtitle="Visit Us"
            title="Our Location"
            description="Our flagship store and offices are located in the heart of Portland. We'd love to welcome you in person."
          />
          
          <div className="mt-12 rounded-lg overflow-hidden shadow-lg reveal-on-scroll">
            <div className="aspect-video relative bg-natura-200">
              {/* This is where you would typically embed a Google Map */}
              <div className="absolute inset-0 flex items-center justify-center bg-natura-100">
                <p className="text-natura-700">Map Embedding Placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <SectionTitle
            subtitle="FAQ"
            title="Frequently Asked Questions"
            description="Find quick answers to common questions about our products, shipping, and more."
          />
          
          <div className="max-w-3xl mx-auto mt-12 space-y-6">
            {[
              {
                question: "What shipping options do you offer?",
                answer: "We offer standard shipping (5-7 business days), expedited shipping (2-3 business days), and overnight shipping. Free standard shipping is available for orders over $50."
              },
              {
                question: "Are your products tested on animals?",
                answer: "Absolutely not. We are committed to cruelty-free practices and never test our products on animals. We're proud to be certified by Leaping Bunny and PETA's Beauty Without Bunnies program."
              },
              {
                question: "What is your return policy?",
                answer: "We offer a 30-day satisfaction guarantee. If you're not completely satisfied with your purchase, you can return it within 30 days for a full refund or exchange."
              },
              {
                question: "Are your products suitable for sensitive skin?",
                answer: "Many of our products are formulated with sensitive skin in mind, but we always recommend checking the ingredients list and possibly doing a patch test if you have specific sensitivities or allergies."
              },
            ].map((faq, index) => (
              <div 
                key={index} 
                className="border border-natura-100 rounded-lg p-6 reveal-on-scroll"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-natura-900 font-medium text-lg mb-3">{faq.question}</h3>
                <p className="text-natura-700">{faq.answer}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12 reveal-on-scroll">
            <p className="text-natura-700 mb-4">
              Don't see your question here? Feel free to reach out to us directly.
            </p>
            <Button className="bg-natura-700 hover:bg-natura-800">
              Contact Support
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
