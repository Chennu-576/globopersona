// 'use client';

// import { motion } from 'framer-motion';
// import Link from 'next/link';
// import { Globe, Cloud, Brain, Shield, Code, Database, Smartphone, Settings } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent } from '@/components/ui/card';

// const services = [
//   {
//     icon: Globe,
//     title: 'Digital Transformation',
//     description: 'Transform your business with comprehensive digital strategies that drive growth and innovation.',
//     features: ['Digital Strategy', 'Process Automation', 'Change Management', 'Legacy Modernization'],
//     href: '/services/digital-transformation',
//   },
//   {
//     icon: Cloud,
//     title: 'Cloud Solutions',
//     description: 'Scalable, secure cloud infrastructure solutions tailored to your business needs.',
//     features: ['Cloud Migration', 'Infrastructure Setup', 'Cloud Optimization', 'Multi-Cloud Strategy'],
//     href: '/services/cloud-solutions',
//   },
//   {
//     icon: Brain,
//     title: 'AI & Analytics',
//     description: 'Harness the power of artificial intelligence and data analytics for smarter decision-making.',
//     features: ['Machine Learning', 'Predictive Analytics', 'Data Visualization', 'Business Intelligence'],
//     href: '/services/ai-analytics',
//   },
//   {
//     icon: Shield,
//     title: 'Cybersecurity',
//     description: 'Comprehensive security solutions to protect your business from evolving cyber threats.',
//     features: ['Security Audits', 'Threat Detection', 'Compliance', 'Incident Response'],
//     href: '/services/cybersecurity',
//   },
//   {
//     icon: Code,
//     title: 'Custom Software Development',
//     description: 'Build scalable, high-performance applications tailored to your unique requirements.',
//     features: ['Web Development', 'API Integration', 'Microservices', 'DevOps'],
//     href: '/services',
//   },
//   {
//     icon: Database,
//     title: 'Data Management',
//     description: 'Optimize your data infrastructure for better performance, security, and insights.',
//     features: ['Data Warehousing', 'ETL Processes', 'Data Governance', 'Real-time Processing'],
//     href: '/services',
//   },
//   {
//     icon: Smartphone,
//     title: 'Mobile Solutions',
//     description: 'Native and cross-platform mobile applications that deliver exceptional user experiences.',
//     features: ['iOS Development', 'Android Development', 'React Native', 'Flutter'],
//     href: '/services',
//   },
//   {
//     icon: Settings,
//     title: 'IT Consulting',
//     description: 'Strategic technology consulting to align your IT infrastructure with business goals.',
//     features: ['Technology Strategy', 'Architecture Design', 'Vendor Selection', 'IT Roadmaps'],
//     href: '/services',
//   },
// ];

// export default function Services() {
//   return (
//     <div className="pt-20">
//       <section className="relative hero-gradient py-20 overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-br from-[#244082]/20 to-transparent" />

//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="text-center"
//           >
//             <motion.div
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ delay: 0.2 }}
//               className="inline-block mb-4"
//             >
//               <span className="bg-[#fdc134]/20 text-[#fdc134] px-4 py-2 rounded-full text-sm font-semibold">
//                 Our Services
//               </span>
//             </motion.div>
//             <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
//               Comprehensive <span className="text-[#fdc134]">Technology Solutions</span>
//             </h1>
//             <p className="text-xl text-gray-300 max-w-3xl mx-auto">
//               From strategy to execution, we deliver end-to-end technology solutions that transform businesses and drive measurable results.
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       <section className="py-20 bg-[#1a2f42]">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
//             {services.map((service, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.05 }}
//               >
//                 <Card className="bg-[#244082] border-none card-hover h-full group">
//                   <CardContent className="p-8">
//                     <div className="w-16 h-16 bg-[#fdc134]/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#fdc134]/30 transition-colors">
//                       <service.icon className="w-8 h-8 text-[#fdc134]" />
//                     </div>

//                     <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
//                     <p className="text-gray-300 mb-6">{service.description}</p>

//                     <ul className="space-y-2 mb-6">
//                       {service.features.map((feature, idx) => (
//                         <li key={idx} className="flex items-center text-gray-300">
//                           <div className="w-1.5 h-1.5 bg-[#fdc134] rounded-full mr-3" />
//                           {feature}
//                         </li>
//                       ))}
//                     </ul>

//                     <Button
//                       variant="outline"
//                       className="w-full border-[#fdc134] text-[#fdc134] hover:bg-[#fdc134] hover:text-[#213b52]"
//                       asChild
//                     >
//                       <Link href={service.href}>Learn More</Link>
//                     </Button>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section className="py-20 bg-gradient-to-br from-[#213b52] to-[#244082]">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center"
//           >
//             <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
//               Ready to Get Started?
//             </h2>
//             <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
//               Let's discuss how our services can help transform your business and achieve your goals.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <Button
//                 size="lg"
//                 className="bg-[#fdc134] text-[#213b52] hover:bg-[#fdc134]/90 font-semibold text-lg"
//                 asChild
//               >
//                 <Link href="/contact">Contact Us</Link>
//               </Button>
//               <Button
//                 size="lg"
//                 variant="outline"
//                 className="border-2 border-white text-white hover:bg-white hover:text-[#213b52] font-semibold text-lg"
//                 asChild
//               >
//                 <Link href="/about">Learn About Us</Link>
//               </Button>
//             </div>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// }


'use client'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

const allServices = [
  { 
    title: 'App Development', 
    icon: '📱', 
    desc: 'Comprehensive mobile app development for iOS & Android. User-friendly apps that drive engagement and business growth.',
    features: ['Native & Cross-platform', 'UI/UX Design', 'Backend Integration', 'App Store Deployment'],
    color: 'from-emerald-500 to-green-600'
  },
  { 
    title: 'Web Development', 
    icon: '💻', 
    desc: 'High-performance, responsive websites that convert visitors into customers. SEO optimized and lightning fast.',
    features: ['React/Next.js', 'Responsive Design', 'SEO Optimized', 'Performance Focused'],
    color: 'from-blue-500 to-indigo-600'
  },
  // Add all other services similarly...
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-24"
        >
          <h1 className="text-6xl md:text-7xl font-black bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mb-6">
            Our Services
          </h1>
          <p className="text-2xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Complete digital marketing solutions under one roof. From strategy to execution, we've got you covered.
          </p>
        </motion.section>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {allServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <Card className="h-full border-0 shadow-xl hover:shadow-2xl overflow-hidden group border-t-4 border-transparent hover:border-[service.color]">
                <CardHeader className="pb-6">
                  <div className={`text-5xl mb-6`}>{service.icon}</div>
                  <CardTitle className="text-3xl font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                  <p className="text-xl text-slate-600 dark:text-slate-400 mt-2">{service.desc}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-lg">
                        <div className="w-2 h-2 bg-primary rounded-full mr-4" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full group-hover:translate-x-2 transition-all duration-300">
                    Learn More <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
