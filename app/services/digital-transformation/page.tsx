'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Globe, ArrowRight, CheckCircle, Workflow, Zap, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const offerings = [
  {
    icon: Workflow,
    title: 'Digital Strategy',
    description: 'Develop comprehensive digital roadmaps aligned with your business objectives.',
  },
  {
    icon: Zap,
    title: 'Process Automation',
    description: 'Streamline operations and reduce costs through intelligent automation solutions.',
  },
  {
    icon: TrendingUp,
    title: 'Change Management',
    description: 'Guide your organization through successful digital adoption and transformation.',
  },
];

const benefits = [
  'Accelerated time to market',
  'Enhanced customer experiences',
  'Improved operational efficiency',
  'Data-driven decision making',
  'Increased competitive advantage',
  'Scalable growth infrastructure',
];

export default function DigitalTransformation() {
  return (
    <div className="pt-20">
      <section className="relative hero-gradient py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#244082]/20 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Link href="/services" className="inline-flex items-center text-[#fdc134] hover:text-[#fdc134]/80 mb-6">
              <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
              Back to Services
            </Link>

            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-[#fdc134]/20 rounded-xl flex items-center justify-center mr-4">
                <Globe className="w-8 h-8 text-[#fdc134]" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white">
                Digital <span className="text-[#fdc134]">Transformation</span>
              </h1>
            </div>

            <p className="text-xl text-gray-300 max-w-3xl">
              Transform your business with comprehensive digital strategies that drive innovation, efficiency, and sustainable growth in the digital age.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-[#1a2f42]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Why Digital Transformation <span className="text-[#fdc134]">Matters</span>
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                In today's rapidly evolving business landscape, digital transformation is no longer optional—it's essential for survival and growth. Our approach helps organizations modernize their operations, enhance customer experiences, and unlock new revenue opportunities.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                We partner with you to develop and execute strategies that leverage emerging technologies, optimize processes, and build a culture of continuous innovation.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-3 bg-[#244082] p-4 rounded-lg"
                >
                  <CheckCircle className="w-6 h-6 text-[#fdc134] flex-shrink-0" />
                  <span className="text-gray-200">{benefit}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Our <span className="text-[#fdc134]">Offerings</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {offerings.map((offering, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-[#244082] border-none card-hover h-full">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-[#fdc134]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <offering.icon className="w-8 h-8 text-[#fdc134]" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{offering.title}</h3>
                    <p className="text-gray-300">{offering.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#213b52] to-[#244082]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Start Your Transformation Journey
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how we can help transform your business for the digital future.
            </p>
            <Button
              size="lg"
              className="bg-[#fdc134] text-[#213b52] hover:bg-[#fdc134]/90 font-semibold text-lg"
              asChild
            >
              <Link href="/contact">Get Started</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
