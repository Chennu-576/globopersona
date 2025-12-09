'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    content: 'info@globopersona.com',
    link: 'mailto:info@globopersona.com',
  },
  {
    icon: Phone,
    title: 'Phone',
    content: '+1 (555) 123-4567',
    link: 'tel:+15551234567',
  },
  {
    icon: MapPin,
    title: 'Address',
    content: '123 Business Ave, Tech City, TC 12345',
    link: '#',
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="pt-20">
      <section className="relative hero-gradient py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#244082]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-4"
            >
              <span className="bg-[#fdc134]/20 text-[#fdc134] px-4 py-2 rounded-full text-sm font-semibold">
                Get in Touch
              </span>
            </motion.div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Let's Start a <span className="text-[#fdc134]">Conversation</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Have a question or ready to transform your business? We're here to help. Reach out to discuss your project.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-[#1a2f42]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-[#244082] border-none card-hover">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-[#fdc134]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <info.icon className="w-8 h-8 text-[#fdc134]" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{info.title}</h3>
                    <a
                      href={info.link}
                      className="text-gray-300 hover:text-[#fdc134] transition-colors"
                    >
                      {info.content}
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Send us a <span className="text-[#fdc134]">Message</span>
              </h2>
              <p className="text-gray-300 mb-8">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-[#244082] border-[#244082] text-white placeholder:text-gray-500"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-[#244082] border-[#244082] text-white placeholder:text-gray-500"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                      Company
                    </label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      className="bg-[#244082] border-[#244082] text-white placeholder:text-gray-500"
                      placeholder="Your Company"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="bg-[#244082] border-[#244082] text-white placeholder:text-gray-500"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-[#244082] border-[#244082] text-white placeholder:text-gray-500 min-h-[150px]"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-[#fdc134] text-[#213b52] hover:bg-[#fdc134]/90 font-semibold"
                >
                  Send Message
                  <Send className="ml-2 w-5 h-5" />
                </Button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:pl-8"
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Why Choose <span className="text-[#fdc134]">GloboPersona</span>?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-[#fdc134] rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Expert Team</h3>
                    <p className="text-gray-300">
                      Our team of seasoned professionals brings decades of combined experience in technology and business transformation.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-[#fdc134] rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Proven Track Record</h3>
                    <p className="text-gray-300">
                      With 500+ successful projects and a 98% client satisfaction rate, we deliver results that matter.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-[#fdc134] rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Tailored Solutions</h3>
                    <p className="text-gray-300">
                      We understand that every business is unique. Our solutions are customized to meet your specific needs and goals.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-[#fdc134] rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">24/7 Support</h3>
                    <p className="text-gray-300">
                      Our dedicated support team is available around the clock to ensure your success.
                    </p>
                  </div>
                </div>
              </div>

              <Card className="bg-gradient-to-br from-[#244082] to-[#213b52] border-[#fdc134] mt-8">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Quick Response Guarantee
                  </h3>
                  <p className="text-gray-300 mb-4">
                    We respond to all inquiries within 24 hours during business days.
                  </p>
                  <div className="text-5xl font-bold text-[#fdc134]">24hrs</div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}








