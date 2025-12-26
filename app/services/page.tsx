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


// 'use client'
// import { motion } from 'framer-motion'
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
// import { Button } from '@/components/ui/button'
// import { ArrowRight } from 'lucide-react'

// const allServices = [
//   { 
//     title: 'App Development', 
//     icon: '📱', 
//     desc: 'Comprehensive mobile app development for iOS & Android. User-friendly apps that drive engagement and business growth.',
//     features: ['Native & Cross-platform', 'UI/UX Design', 'Backend Integration', 'App Store Deployment'],
//     color: 'from-emerald-500 to-green-600'
//   },
//   { 
//     title: 'Web Development', 
//     icon: '💻', 
//     desc: 'High-performance, responsive websites that convert visitors into customers. SEO optimized and lightning fast.',
//     features: ['React/Next.js', 'Responsive Design', 'SEO Optimized', 'Performance Focused'],
//     color: 'from-blue-500 to-indigo-600'
//   },
//   // Add all other services similarly...
// ]

// export default function ServicesPage() {
//   return (
//     <div className="min-h-screen py-24">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Hero */}
//         <motion.section 
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           className="text-center mb-24"
//         >
//           <h1 className="text-6xl md:text-7xl font-black bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mb-6">
//             Our Services
//           </h1>
//           <p className="text-2xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
//             Complete digital marketing solutions under one roof. From strategy to execution, we've got you covered.
//           </p>
//         </motion.section>

//         {/* Services Grid */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
//           {allServices.map((service, index) => (
//             <motion.div
//               key={service.title}
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.1 }}
//               whileHover={{ y: -10, scale: 1.02 }}
//             >
//               <Card className="h-full border-0 shadow-xl hover:shadow-2xl overflow-hidden group border-t-4 border-transparent hover:border-[service.color]">
//                 <CardHeader className="pb-6">
//                   <div className={`text-5xl mb-6`}>{service.icon}</div>
//                   <CardTitle className="text-3xl font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">
//                     {service.title}
//                   </CardTitle>
//                   <p className="text-xl text-slate-600 dark:text-slate-400 mt-2">{service.desc}</p>
//                 </CardHeader>
//                 <CardContent>
//                   <ul className="space-y-3 mb-8">
//                     {service.features.map((feature) => (
//                       <li key={feature} className="flex items-center text-lg">
//                         <div className="w-2 h-2 bg-primary rounded-full mr-4" />
//                         {feature}
//                       </li>
//                     ))}
//                   </ul>
//                   <Button className="w-full group-hover:translate-x-2 transition-all duration-300">
//                     Learn More <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1" />
//                   </Button>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }


// 'use client';

// import { motion } from 'framer-motion';
// import { useEffect } from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import Image from "next/image";

// import { 
//   Code2, 
//   Cloud, 
//   Shield, 
//   BarChart3, 
//   Smartphone, 
//   Zap,
//   CheckCircle,
//   ArrowRight,
//   Star
// } from 'lucide-react';

// gsap.registerPlugin(ScrollTrigger);

// /* ------------------------------------------------------------------
//    FIXED MISSING ARRAY → This was causing all your errors
// -------------------------------------------------------------------*/


// const projects = [
//   {
//     company: "Reachdesk",
//     description:
//       "Creating moments that matter for a BIB gifting and experience platform.",
//     image:
//       "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=80",
//   },
//   {
//     company: "MADDICC",
//     description:
//       "Holistic brand revamp to help a BIB SaaS company achieve growth potential.",
//     image:
//       "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=80",
//   },
//   {
//     company: "ABB",
//     description:
//       "Bringing electric perspectives with new ways of managing energy.",
//     image:
//       "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1000&q=80",
//   },
//   {
//     company: "MEDDICC",
//     description:
//       "Complete rebranding and product positioning with web build.",
//     image:
//       "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80",
//   },
// ];

// const processSteps = [
//   { step: 1, title: "Discovery", description: "We understand your business goals." },
//   { step: 2, title: "Strategy", description: "Creating a tailored roadmap for success." },
//   { step: 3, title: "Execution", description: "Building and deploying your solution." },
//   { step: 4, title: "Support", description: "Ongoing maintenance and optimization." },
// ];

// const benefits = [
//   "Expert Team with 12+ years experience",
//   "500+ Successful Projects Delivered",
//   "24/7 Customer Support",
//   "Agile Development Methodology",
//   "Latest Technology Stack",
//   "Competitive Pricing",
// ];


// export default function Services() {
//   useEffect(() => {
//     const headings = document.querySelectorAll('.gsap-heading');

//     headings.forEach((heading) => {
//       const text = heading.textContent || "";
//       heading.innerHTML = "";

//       text.split("").forEach((char, i) => {
//         const span = document.createElement("span");
//         span.textContent = char;
//         span.style.opacity = "0";

//         heading.appendChild(span);

//         gsap.to(span, {
//           opacity: 1,
//           duration: 0.05,
//           delay: i * 0.03,
//           scrollTrigger: {
//             trigger: heading,
//             start: "top 80%",
//             toggleActions: "play none none none",
//           },
//         });
//       });
//     });
//   }, []);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-950 to-black text-white overflow-hidden">

//       {/* HERO */}
//       <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
//         <div className="absolute inset-0">
//           <img 
//             src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop" 
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute inset-0 bg-black/60"></div>
//         </div>

//         <div className="relative z-10 text-center px-4">
//           <motion.h1 className="gsap-heading text-6xl font-bold bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
//             Our Services
//           </motion.h1>

//           <p className="text-gray-300 text-xl mt-4">
//             At Globo Persona, we offer a range of services designed to elevate your brand, enhance your online presence, and drive growth. From digital marketing to web development and everything in between, we have the expertise and resources to help you achieve your business goals. Explore our services below:
//           </p>
//         </div>
//       </section>

//       {/* PROJECTS SECTION (YOUR FULL CODE – NO CHANGE, JUST CLEANED IMPORTS) */}
//       <section className="min-h-screen p-8" style={{ backgroundColor: "#213b52" }}>
//         <div className="max-w-[1200px] mx-auto">

//           <h1 className="text-5xl font-bold text-white mb-3">Our Work</h1>
//           <p className="text-white/90 max-w-3xl mb-14">
//             Creating meaningful digital experiences through innovative design & strategy.
//           </p>

//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">

//             {/* LEFT COLUMN */}
//             <div className="space-y-16">

//               {[0, 2].map((i) => (
//                 <div key={i} className="space-y-6">
//                   <motion.div className="relative h-[200px] w-full rounded-lg overflow-hidden">
//                     <Image src={projects[i].image} fill className="object-cover" alt="" />
//                   </motion.div>

//                   <h2 className="text-3xl font-bold text-white">{projects[i].company}</h2>
//                   <div className="w-full h-[1px] bg-white/40"></div>
//                   <p className="text-white/80">{projects[i].description}</p>
//                 </div>
//               ))}

//             </div>

//             {/* RIGHT COLUMN */}
//             <div className="space-y-16">

//               {[1, 3].map((i) => (
//                 <div key={i} className="space-y-6 pt-20">
//                   <motion.div className="relative h-[200px] w-full rounded-lg overflow-hidden">
//                     <Image src={projects[i].image} fill className="object-cover" alt="" />
//                   </motion.div>

//                   <h2 className="text-3xl font-bold text-white">{projects[i].company}</h2>
//                   <div className="w-full h-[1px] bg-white/40"></div>
//                   <p className="text-white/80">{projects[i].description}</p>
//                 </div>
//               ))}

//             </div>

//           </div>
//         </div>
//       </section>


//       {/* PROCESS SECTION */}
//       <section className="py-20 px-6 bg-gray-900/60">
//         <div className="max-w-7xl mx-auto">

//           <h2 className="gsap-heading text-5xl font-bold text-center mb-12">
//             How We Work
//           </h2>

//           <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

//             {processSteps.map((step, i) => (
//               <div key={i} className="bg-blue-500/10 p-6 rounded-lg border border-blue-500/30">
//                 <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center font-bold text-lg mb-4">
//                   {step.step}
//                 </div>

//                 <h3 className="text-xl font-semibold">{step.title}</h3>
//                 <p className="text-gray-300 mt-2">{step.description}</p>
//               </div>
//             ))}

//           </div>
//         </div>
//       </section>


//       {/* WHY CHOOSE US */}
//       <section className="py-20 px-6">
//         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">

//           <div>
//             <h2 className="gsap-heading text-5xl font-bold mb-8">Why Choose Us?</h2>

//             <div className="space-y-5">
//               {benefits.map((b, i) => (
//                 <div key={i} className="flex gap-4 items-start">
//                   <CheckCircle className="w-6 h-6 text-cyan-400 mt-1" />
//                   <p className="text-gray-300 text-lg">{b}</p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="hidden lg:block">
//             <img
//               src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=600&fit=crop"
//               className="rounded-2xl w-full h-[400px] object-cover"
//             />
//           </div>

//         </div>
//       </section>


//       {/* CTA */}
//       <section className="py-20 px-6 relative">
//         <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20"></div>

//         <div className="relative text-center max-w-3xl mx-auto">

//           <h2 className="gsap-heading text-5xl font-bold mb-4">
//             Ready to Get Started?
//           </h2>

//           <p className="text-gray-300 text-xl mb-6">
//             Let’s discuss how our services can transform your business.
//           </p>

//           <div className="flex gap-4 justify-center">
//             <button className="px-8 py-4 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 font-semibold">
//               Schedule Consultation
//             </button>

//             <button className="px-8 py-4 rounded-lg border-2 border-blue-500 text-blue-400 font-semibold">
//               View Case Studies
//             </button>
//           </div>

//         </div>
//       </section>

//     </div>
//   );
// }



'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Code2, 
  Cloud, 
  Shield, 
  BarChart3, 
  Smartphone, 
  Zap,
  CheckCircle,
  ArrowRight,
  Star
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [showCursor, setShowCursor] = useState(false);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const portfolioProjects = [
    {
      company: "Reachdesk",
      description:
        "Creating moments that matter for a B2B gifting and experience platform.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=80",
        link: "app/services/ai-analytics/page.tsx"
    },
    {
      company: "MEDDICC",
      description:
        "Complete rebranding and product positioning with web build.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80",
    },
    {
      company: "ABB",
      description:
        "Bringing electric perspectives with new ways of managing energy.",
      image:
        "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1000&q=80",
    },
    {
      company: "MADDICC",
      description:
        "Holistic brand revamp to help a B2B SaaS company achieve growth potential.",
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=80",
    },
    {
      company: "Schneider Electric",
      description:
        "Digital transformation strategy for sustainable energy solutions.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=80",
    },
    {
      company: "TechVision",
      description:
        "Complete brand identity redesign and digital platform development.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80",
    },
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
      setShowCursor(true);
    };

    const handleMouseLeave = () => {
      setShowCursor(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);
 
  useEffect(() => {
  // GSAP letter-by-letter animation for headings
  const headings = document.querySelectorAll('.gsap-heading');

  headings.forEach((heading) => {
    const text = heading.textContent;
    if (!text) return; // 👈 important null check

    heading.innerHTML = '';

    text.split('').forEach((char, i) => {
      const span = document.createElement('span');
      span.textContent = char;
      span.style.opacity = '0';
      heading.appendChild(span);

      gsap.to(span, {
        opacity: 1,
        duration: 0.05,
        delay: i * 0.03,
        scrollTrigger: {
          trigger: heading,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });
    });
  });
}, []);


  
  const processSteps = [
    {
      step: 1,
      title: 'Discovery',
      description: 'We understand your business goals and requirements'
    },
    {
      step: 2,
      title: 'Strategy',
      description: 'Creating a tailored roadmap for success'
    },
    {
      step: 3,
      title: 'Execution',
      description: 'Building and deploying your solution'
    },
    {
      step: 4,
      title: 'Support',
      description: 'Ongoing maintenance and optimization'
    }
  ];

  const benefits = [
    'Expert Team with 12+ years experience',
    '500+ Successful Projects Delivered',
    '24/7 Customer Support',
    'Agile Development Methodology',
    'Latest Technology Stack',
    'Competitive Pricing'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 to-black text-white overflow-hidden relative">
      {/* Custom Cursor */}
      {showCursor && (
        <motion.div
          className="fixed pointer-events-none z-50 mix-blend-screen"
          animate={{ x: cursorPos.x, y: cursorPos.y }}
          transition={{ type: 'spring', stiffness: 500, damping: 28 }}
        >
          <div className="w-8 h-8 border-2 border-cyan-500 rounded-full flex items-center justify-center">
            <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
          </div>
        </motion.div>
      )}

      {/* Hero Banner */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop" 
            alt="Services Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.h1 
            className="gsap-heading text-5xl md:text-6xl font-bold mb-4 text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Our Services
          </motion.h1>
          <motion.p 
            className="text-xl md:text-xl text-gray-300 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            At Globo Persona, we offer a range of services designed to elevate your brand, enhance your online presence, and drive growth. From digital marketing to web development and everything in between, we have the expertise and resources to help you achieve your business goals. Explore our services below:
          </motion.p>
        </div>
      </section>

     <section className="min-h-screen py-20 px-4 md:px-8 bg-white">
  <div className="max-w-[1200px] mx-auto">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="mb-14"
    >
      <h2 className="gsap-heading text-5xl font-bold text-gray-900 mb-3">what we offer</h2>
      <p className="text-gray-700 max-w-3xl">
        Creating meaningful digital experiences through innovative design & strategy.
      </p>
    </motion.div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
      {/* LEFT COLUMN */}
      <div className="space-y-16">
        {[0, 2, 4].map((i) => (
          <motion.div 
            key={i} 
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="relative h-[250px] w-full rounded-lg overflow-hidden group">
              <img 
                src={portfolioProjects[i].image} 
                alt={portfolioProjects[i].company}
                className="w-[85%] h-full object-cover transition-transform duration-500 group-hover:scale-105 mx-auto"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300"></div>
              
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                whileHover={{ opacity: 1, scale: 1 }}
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-white font-semibold text-sm hover:shadow-lg hover:shadow-cyan-500/50 transition-all">
                  Learn More
                </div>
              </motion.button>
            </div>

            <h3 className="text-3xl font-bold text-gray-900">{portfolioProjects[i].company}</h3>
            <div className="w-full h-[1px] bg-gray-300"></div>
            <p className="text-gray-700">{portfolioProjects[i].description}</p>
          </motion.div>
        ))}
      </div>

      {/* RIGHT COLUMN */}
      <div className="space-y-16 pt-0 lg:pt-20">
        {[1, 3, 5].map((i) => (
          <motion.div 
            key={i} 
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: (i - 1) * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="relative h-[250px] w-full rounded-lg overflow-hidden group">
              <img 
                src={portfolioProjects[i].image} 
                alt={portfolioProjects[i].company}
                className="w-[85%] h-full object-cover transition-transform duration-500 group-hover:scale-105 mx-auto"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300"></div>
              
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                whileHover={{ opacity: 1, scale: 1 }}
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-white font-semibold text-sm hover:shadow-lg hover:shadow-cyan-500/50 transition-all">
                  Learn More
                </div>
              </motion.button>
            </div>

            <h3 className="text-3xl font-bold text-gray-900">{portfolioProjects[i].company}</h3>
            <div className="w-full h-[1px] bg-gray-300"></div>
            <p className="text-gray-700">{portfolioProjects[i].description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
</section>

      {/* How We Work Process */}
      {/* <section className="py-20 px-4 md:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="gsap-heading text-4xl md:text-5xl font-bold mb-4">
              How We Work
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Our proven methodology ensures project success every time
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {processSteps.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg p-6 border border-blue-500/30">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center font-bold text-lg mb-4">
                    {item.step}
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-400">
                    {item.description}
                  </p>
                </div>

                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-blue-500/50" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Why Choose Us */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <h2 className="gsap-heading text-4xl md:text-5xl font-bold mb-8">
                Why Choose Us?
              </h2>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle className="w-6 h-6 text-cyan-500 flex-shrink-0 mt-1" />
                    <span className="text-lg text-gray-300">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="hidden lg:block"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur-3xl opacity-30"></div>
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=600&fit=crop"
                  alt="Why Choose Us"
                  className="relative rounded-2xl w-full h-[400px] object-cover"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>  
    </div>
  );
};

export default Services;


