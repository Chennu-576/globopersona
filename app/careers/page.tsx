// 'use client';

// import { motion } from 'framer-motion';
// import Link from 'next/link';
// import { Briefcase, MapPin, Clock, ArrowRight, Heart, Zap, Users, TrendingUp } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent } from '@/components/ui/card';

// const jobs = [
//   {
//     title: 'Senior Full Stack Developer',
//     department: 'Engineering',
//     location: 'Remote',
//     type: 'Full-time',
//     description: 'Build scalable web applications using modern technologies.',
//   },
//   {
//     title: 'Cloud Solutions Architect',
//     department: 'Cloud Services',
//     location: 'New York, NY',
//     type: 'Full-time',
//     description: 'Design and implement enterprise cloud infrastructure solutions.',
//   },
//   {
//     title: 'Data Scientist',
//     department: 'AI & Analytics',
//     location: 'San Francisco, CA',
//     type: 'Full-time',
//     description: 'Develop machine learning models and extract insights from data.',
//   },
//   {
//     title: 'DevOps Engineer',
//     department: 'Engineering',
//     location: 'Remote',
//     type: 'Full-time',
//     description: 'Automate infrastructure and optimize deployment processes.',
//   },
//   {
//     title: 'UI/UX Designer',
//     department: 'Design',
//     location: 'London, UK',
//     type: 'Full-time',
//     description: 'Create beautiful, user-friendly interfaces for our clients.',
//   },
//   {
//     title: 'Cybersecurity Analyst',
//     department: 'Security',
//     location: 'Remote',
//     type: 'Full-time',
//     description: 'Protect our clients from cyber threats and vulnerabilities.',
//   },
// ];

// const benefits = [
//   {
//     icon: Heart,
//     title: 'Health & Wellness',
//     description: 'Comprehensive health insurance and wellness programs',
//   },
//   {
//     icon: Zap,
//     title: 'Flexible Work',
//     description: 'Remote-first culture with flexible working hours',
//   },
//   {
//     icon: Users,
//     title: 'Learning & Development',
//     description: 'Continuous learning opportunities and career growth',
//   },
//   {
//     icon: TrendingUp,
//     title: 'Competitive Compensation',
//     description: 'Competitive salary, equity, and performance bonuses',
//   },
// ];

// export default function Careers() {
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
//                 Join Our Team
//               </span>
//             </motion.div>
//             <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
//               Build Your Career with <span className="text-[#fdc134]">GloboPersona</span>
//             </h1>
//             <p className="text-xl text-gray-300 max-w-3xl mx-auto">
//               Join a team of passionate innovators working on cutting-edge technology solutions that transform businesses worldwide.
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       <section className="py-20 bg-[#1a2f42]">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center mb-12"
//           >
//             <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
//               Why Work <span className="text-[#fdc134]">With Us</span>
//             </h2>
//             <p className="text-xl text-gray-300 max-w-3xl mx-auto">
//               We're committed to creating an environment where innovation thrives and careers flourish
//             </p>
//           </motion.div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
//             {benefits.map((benefit, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.1 }}
//               >
//                 <Card className="bg-[#244082] border-none card-hover h-full">
//                   <CardContent className="p-6 text-center">
//                     <div className="w-16 h-16 bg-[#fdc134]/20 rounded-full flex items-center justify-center mx-auto mb-4">
//                       <benefit.icon className="w-8 h-8 text-[#fdc134]" />
//                     </div>
//                     <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
//                     <p className="text-gray-300">{benefit.description}</p>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             ))}
//           </div>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center mb-12"
//           >
//             <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
//               Open <span className="text-[#fdc134]">Positions</span>
//             </h2>
//             <p className="text-xl text-gray-300 max-w-3xl mx-auto">
//               Explore our current opportunities and find your perfect role
//             </p>
//           </motion.div>

//           <div className="space-y-6">
//             {jobs.map((job, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.05 }}
//               >
//                 <Card className="bg-[#244082] border-none hover:border-[#fdc134] transition-all group">
//                   <CardContent className="p-8">
//                     <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
//                       <div className="flex-1">
//                         <div className="flex items-center gap-3 mb-3">
//                           <div className="w-12 h-12 bg-[#fdc134]/20 rounded-lg flex items-center justify-center flex-shrink-0">
//                             <Briefcase className="w-6 h-6 text-[#fdc134]" />
//                           </div>
//                           <div>
//                             <h3 className="text-2xl font-bold text-white mb-1">{job.title}</h3>
//                             <div className="text-[#fdc134] font-medium">{job.department}</div>
//                           </div>
//                         </div>
//                         <p className="text-gray-300 mb-4">{job.description}</p>
//                         <div className="flex flex-wrap gap-4 text-sm text-gray-400">
//                           <div className="flex items-center">
//                             <MapPin className="w-4 h-4 mr-2 text-[#fdc134]" />
//                             {job.location}
//                           </div>
//                           <div className="flex items-center">
//                             <Clock className="w-4 h-4 mr-2 text-[#fdc134]" />
//                             {job.type}
//                           </div>
//                         </div>
//                       </div>
//                       <div className="flex-shrink-0">
//                         <Button
//                           className="bg-[#fdc134] text-[#213b52] hover:bg-[#fdc134]/90 font-semibold group-hover:scale-105 transition-transform"
//                         >
//                           Apply Now
//                           <ArrowRight className="ml-2 w-4 h-4" />
//                         </Button>
//                       </div>
//                     </div>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section className="py-20 bg-gradient-to-br from-[#213b52] to-[#244082]">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//           >
//             <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
//               Don't See Your Role?
//             </h2>
//             <p className="text-xl text-gray-300 mb-8">
//               We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
//             </p>
//             <Button
//               size="lg"
//               className="bg-[#fdc134] text-[#213b52] hover:bg-[#fdc134]/90 font-semibold text-lg"
//               asChild
//             >
//               <Link href="/contact">Get in Touch</Link>
//             </Button>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// }


// 'use client';

// import { motion } from 'framer-motion';
// import { Card, CardContent } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { Badge } from '@/components/ui/badge';
// import {
//   Briefcase,
//   MapPin,
//   Clock,
//   Heart,
//   Zap,
//   Users,
//   TrendingUp,
//   Award,
//   Coffee,
//   Laptop,
// } from 'lucide-react';

// const benefits = [
//   {
//     icon: Heart,
//     title: 'Health & Wellness',
//     description: 'Comprehensive health insurance and wellness programs',
//   },
//   {
//     icon: TrendingUp,
//     title: 'Career Growth',
//     description: 'Continuous learning opportunities and clear career paths',
//   },
//   {
//     icon: Coffee,
//     title: 'Work-Life Balance',
//     description: 'Flexible hours and generous paid time off',
//   },
//   {
//     icon: Laptop,
//     title: 'Remote Work',
//     description: 'Hybrid or fully remote work options available',
//   },
//   {
//     icon: Users,
//     title: 'Great Team',
//     description: 'Collaborative culture with talented professionals',
//   },
//   {
//     icon: Award,
//     title: 'Competitive Pay',
//     description: 'Industry-leading salary and performance bonuses',
//   },
// ];

// const openings = [
//   {
//     title: 'Senior Full Stack Developer',
//     department: 'Engineering',
//     location: 'New York, NY / Remote',
//     type: 'Full-time',
//     description: 'Join our engineering team to build scalable applications using modern technologies.',
//   },
//   {
//     title: 'Cloud Solutions Architect',
//     department: 'Cloud Services',
//     location: 'San Francisco, CA',
//     type: 'Full-time',
//     description: 'Design and implement cloud infrastructure solutions for enterprise clients.',
//   },
//   {
//     title: 'Data Scientist',
//     department: 'Data Analytics',
//     location: 'Remote',
//     type: 'Full-time',
//     description: 'Analyze complex datasets and develop machine learning models for business insights.',
//   },
//   {
//     title: 'UX/UI Designer',
//     department: 'Design',
//     location: 'London, UK',
//     type: 'Full-time',
//     description: 'Create beautiful, intuitive interfaces that delight users and drive engagement.',
//   },
//   {
//     title: 'Cybersecurity Specialist',
//     department: 'Security',
//     location: 'Remote',
//     type: 'Full-time',
//     description: 'Protect our clients digital assets with advanced security solutions and strategies.',
//   },
//   {
//     title: 'Project Manager',
//     department: 'Operations',
//     location: 'Chicago, IL',
//     type: 'Full-time',
//     description: 'Lead cross-functional teams to deliver complex projects on time and within budget.',
//   },
// ];

// export default function Careers() {
//   return (
//     <div className="pt-20">
//       <section className="relative py-24 bg-gradient-to-br from-[#244082] to-[#1b2a3d] overflow-hidden">
//         <div className="absolute inset-0">
//           <div className="absolute top-0 right-0 w-96 h-96 bg-[#fdc134] rounded-full opacity-5 blur-3xl" />
//           <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#fdc134] rounded-full opacity-5 blur-3xl" />
//         </div>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="text-center"
//           >
//             <h1 className="font-display font-bold text-5xl md:text-6xl text-white mb-6">
//               Build Your Career With Us
//             </h1>
//             <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
//               Join a team of talented professionals who are passionate about innovation and committed to making a difference.
//             </p>
//             <Button
//               size="lg"
//               className="bg-[#fdc134] hover:bg-[#f0b429] text-[#1b2a3d] font-semibold text-lg px-10 h-14"
//             >
//               View Open Positions
//             </Button>
//           </motion.div>
//         </div>
//       </section>

//       <section className="py-24 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center mb-16"
//           >
//             <span className="text-[#fdc134] font-semibold text-sm uppercase tracking-wider">
//               Why Globopersona
//             </span>
//             <h2 className="font-display font-bold text-4xl md:text-5xl text-[#1b2a3d] mt-3 mb-4">
//               Benefits & Perks
//             </h2>
//             <p className="text-gray-600 text-lg max-w-2xl mx-auto">
//               We believe in taking care of our team so they can do their best work
//             </p>
//           </motion.div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {benefits.map((benefit, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.1 }}
//               >
//                 <Card className="h-full border-2 border-gray-300 hover:border-[#244082] shadow-md hover:shadow-3xl transition-shadow duration-300 bg-white rounded-xl">
//                   <CardContent className="p-6">
//                     <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#244082] to-[#1b2a3d] flex items-center justify-center mb-4">
//                       <benefit.icon className="w-6 h-6 text-[#fdc134]" />
//                     </div>
//                     <h3 className="font-display font-semibold text-xl text-[#1b2a3d] mb-2">
//                       {benefit.title}
//                     </h3>
//                     <p className="text-gray-600 leading-relaxed">
//                       {benefit.description}
//                     </p>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section className="py-24 bg-gradient-to-br from-gray-200 to-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center mb-16"
//           >
//             <span className="text-[#fdc134] font-semibold text-sm uppercase tracking-wider">
//               Open Positions
//             </span>
//             <h2 className="font-display font-bold text-4xl md:text-5xl text-[#1b2a3d] mt-3 mb-4">
//               Current Opportunities
//             </h2>
//             <p className="text-gray-600 text-lg max-w-2xl mx-auto">
//               Explore our open roles and find the perfect fit for your skills and aspirations
//             </p>
//           </motion.div>

//           <div className="space-y-6">
//             {openings.map((job, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.05 }}
//               >
//                 <Card className="border-2 border-gray-100 hover:border-[#244082] hover:shadow-lg transition-all group">
//                   <CardContent className="p-8">
//                     <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
//                       <div className="flex-1">
//                         <div className="flex items-center gap-3 mb-3">
//                           <h3 className="font-display font-semibold text-2xl text-[#1b2a3d] group-hover:text-[#244082] transition-colors">
//                             {job.title}
//                           </h3>
//                           <Badge className="bg-[#fdc134] text-[#1b2a3d] hover:bg-[#f0b429]">
//                             {job.type}
//                           </Badge>
//                         </div>
//                         <p className="text-gray-600 mb-4 leading-relaxed">
//                           {job.description}
//                         </p>
//                         <div className="flex flex-wrap gap-4 text-sm text-gray-500">
//                           <div className="flex items-center gap-2">
//                             <Briefcase className="w-4 h-4 text-[#244082]" />
//                             {job.department}
//                           </div>
//                           <div className="flex items-center gap-2">
//                             <MapPin className="w-4 h-4 text-[#244082]" />
//                             {job.location}
//                           </div>
//                         </div>
//                       </div>
//                       <div className="flex-shrink-0">
//                         <Button className="bg-[#244082] hover:bg-[#1b2a3d] text-white font-semibold px-8">
//                           Apply Now
//                         </Button>
//                       </div>
//                     </div>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section className="py-24 bg-gradient-to-br from-[#244082] to-[#1b2a3d] relative overflow-hidden">
//         <div className="absolute inset-0">
//           <div className="absolute top-0 right-0 w-96 h-96 bg-[#fdc134] rounded-full opacity-5 blur-3xl" />
//         </div>
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//           >
//             <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-6">
//               Don't See a Perfect Fit?
//             </h2>
//             <p className="text-xl text-gray-300 mb-8 leading-relaxed">
//               We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
//             </p>
//             <Button
//               size="lg"
//               className="bg-[#fdc134] hover:bg-[#f0b429] text-[#1b2a3d] font-semibold text-lg px-10 h-14"
//             >
//               Submit General Application
//             </Button>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// }



// 'use client';

// import { motion } from 'framer-motion';
// import { useState, useEffect } from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { 
//   Users,
//   Zap,
//   Heart,
//   Code,
//   Target,
//   TrendingUp,
//   CheckCircle,
//   ArrowRight,
//   Briefcase,
//   MapPin,
//   BarChart3
// } from 'lucide-react';

// gsap.registerPlugin(ScrollTrigger);

// const Careers = () => {
//   const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
//   const [showCursor, setShowCursor] = useState(false);

//   const benefits = [
//     {
//       icon: TrendingUp,
//       title: 'Growth Opportunities',
//       description: 'Career development and advancement in a fast-growing company'
//     },
//     {
//       icon: Zap,
//       title: 'Competitive Salary',
//       description: 'Attractive compensation packages and performance bonuses'
//     },
//     {
//       icon: Heart,
//       title: 'Work-Life Balance',
//       description: 'Flexible working arrangements and wellness programs'
//     },
//     {
//       icon: Code,
//       title: 'Modern Tools & Tech',
//       description: 'Work with cutting-edge technology and frameworks'
//     },
//     {
//       icon: Users,
//       title: 'Collaborative Culture',
//       description: 'Team-oriented environment with open communication'
//     },
//     {
//       icon: Target,
//       title: 'Career Development',
//       description: 'Training, mentoring, and skill enhancement programs'
//     }
//   ];

//   const jobOpenings = [
//     {
//       title: 'Frontend Developer',
//       department: 'Engineering',
//       level: 'Mid-Level',
//       location: 'Remote',
//       description: 'Build responsive web applications with React & Next.js'
//     },
//     {
//       title: 'Backend Engineer',
//       department: 'Engineering',
//       level: 'Senior',
//       location: 'India',
//       description: 'Design scalable backend systems with Node.js & Python'
//     },
//     {
//       title: 'UI/UX Designer',
//       department: 'Design',
//       level: 'Mid-Level',
//       location: 'Remote',
//       description: 'Create beautiful and intuitive user experiences'
//     },
//     {
//       title: 'DevOps Engineer',
//       department: 'Infrastructure',
//       level: 'Senior',
//       location: 'India',
//       description: 'Manage cloud infrastructure and deployment pipelines'
//     },
//     {
//       title: 'Product Manager',
//       department: 'Product',
//       level: 'Mid-Level',
//       location: 'Remote',
//       description: 'Drive product strategy and development roadmap'
//     },
//     {
//       title: 'QA Engineer',
//       department: 'Quality Assurance',
//       level: 'Junior',
//       location: 'India',
//       description: 'Ensure quality through comprehensive testing strategies'
//     }
//   ];

//   const processSteps = [
//     {
//       step: 1,
//       title: 'Submit Application',
//       description: 'Apply with your resume and cover letter'
//     },
//     {
//       step: 2,
//       title: 'Initial Interview',
//       description: 'Screening call with our HR team'
//     },
//     {
//       step: 3,
//       title: 'Technical Assessment',
//       description: 'Demonstrate your skills and expertise'
//     },
//     {
//       step: 4,
//       title: 'Final Round',
//       description: 'Meet with team leads and decision makers'
//     }
//   ];

//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       setCursorPos({ x: e.clientX, y: e.clientY });
//       setShowCursor(true);
//     };

//     const handleMouseLeave = () => {
//       setShowCursor(false);
//     };

//     window.addEventListener('mousemove', handleMouseMove);
//     window.addEventListener('mouseleave', handleMouseLeave);

//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//       window.removeEventListener('mouseleave', handleMouseLeave);
//     };
//   }, []);

//   useEffect(() => {
//     const headings = document.querySelectorAll('.gsap-heading');
//     headings.forEach((heading) => {
//       const text = heading.textContent;
//       heading.innerHTML = '';
      
//       text.split('').forEach((char, i) => {
//         const span = document.createElement('span');
//         span.textContent = char;
//         span.style.opacity = '0';
//         heading.appendChild(span);
        
//         gsap.to(span, {
//           opacity: 1,
//           duration: 0.05,
//           delay: i * 0.03,
//           scrollTrigger: {
//             trigger: heading,
//             start: 'top 80%',
//             toggleActions: 'play none none none',
//           },
//         });
//       });
//     });
//   }, []);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-950 to-black text-white overflow-hidden relative">
//       {/* Custom Cursor */}
//       {showCursor && (
//         <motion.div
//           className="fixed pointer-events-none z-50 mix-blend-screen"
//           animate={{ x: cursorPos.x, y: cursorPos.y }}
//           transition={{ type: 'spring', stiffness: 500, damping: 28 }}
//         >
//           <div className="w-8 h-8 border-2 border-cyan-500 rounded-full flex items-center justify-center">
//             <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
//           </div>
//         </motion.div>
//       )}

//       {/* Hero Banner */}
//       <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
//         <div className="absolute inset-0">
//           <img 
//             src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop" 
//             alt="Careers Hero"
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute inset-0 bg-black/60"></div>
//         </div>
        
//         <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
//           <motion.h1 
//             className="gsap-heading text-5xl md:text-6xl font-bold mb-4 text-white"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.8 }}
//           >
//             Join Our Team
//           </motion.h1>
//           <motion.p 
//             className="text-xl md:text-2xl text-gray-300 mb-8"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//           >
//             Build Your Career with Globo Persona
//           </motion.p>
//         </div>
//       </section>

//       {/* Why Join Us (Benefits) */}
//       <section className="py-20 px-4 md:px-8">
//         <div className="max-w-7xl mx-auto">
//           <motion.div
//             className="text-center mb-16"
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//           >
//             <h2 className="gsap-heading text-4xl md:text-5xl font-bold mb-4">
//               Why Join Us?
//             </h2>
//             <p className="text-gray-400 text-lg max-w-2xl mx-auto">
//               Be part of a dynamic team working on innovative solutions
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {benefits.map((benefit, index) => {
//               const Icon = benefit.icon;
//               return (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.5, delay: index * 0.1 }}
//                   viewport={{ once: true }}
//                   whileHover={{ y: -8, transition: { duration: 0.3 } }}
//                   className="group relative"
//                 >
//                   <div className="bg-blue-500/10 rounded-xl p-8 backdrop-blur-md border border-gray-800 hover:border-gray-700 transition-all duration-300 h-full">
//                     <div className="inline-block p-3 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 mb-4">
//                       <Icon className="w-6 h-6 text-white" />
//                     </div>
                    
//                     <h3 className="text-xl font-semibold mb-3 text-white">
//                       {benefit.title}
//                     </h3>
                    
//                     <p className="text-gray-400">
//                       {benefit.description}
//                     </p>
//                   </div>
//                 </motion.div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* Current Opportunities */}
//       <section className="py-20 px-4 md:px-8 bg-gray-900/50">
//         <div className="max-w-7xl mx-auto">
//           <motion.div
//             className="text-center mb-16"
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//           >
//             <h2 className="gsap-heading text-4xl md:text-5xl font-bold mb-4">
//               Current Opportunities
//             </h2>
//             <p className="text-gray-400 text-lg max-w-2xl mx-auto">
//               Explore open positions across our organization
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {jobOpenings.map((job, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//                 whileHover={{ y: -8, transition: { duration: 0.3 } }}
//                 className="group relative"
//               >
//                 <div className="bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-xl p-6 backdrop-blur-md border border-gray-800 hover:border-cyan-500/50 transition-all duration-300 h-full flex flex-col">
//                   <div className="flex items-start justify-between mb-4">
//                     <div>
//                       <h3 className="text-xl font-semibold mb-2 text-white">
//                         {job.title}
//                       </h3>
//                       <div className="space-y-2 mb-4">
//                         <div className="flex items-center gap-2 text-sm text-gray-400">
//                           <Briefcase className="w-4 h-4" />
//                           <span>{job.department}</span>
//                         </div>
//                         <div className="flex items-center gap-2 text-sm text-gray-400">
//                           <BarChart3 className="w-4 h-4" />
//                           <span>{job.level}</span>
//                         </div>
//                         <div className="flex items-center gap-2 text-sm text-gray-400">
//                           <MapPin className="w-4 h-4" />
//                           <span>{job.location}</span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   <p className="text-gray-400 mb-6 flex-grow">
//                     {job.description}
//                   </p>

//                   <motion.button
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                     className="w-full px-4 py-3 rounded-lg font-semibold bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
//                   >
//                     Apply Now
//                   </motion.button>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Application Process */}
//       <section className="py-20 px-4 md:px-8">
//         <div className="max-w-7xl mx-auto">
//           <motion.div
//             className="text-center mb-16"
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//           >
//             <h2 className="gsap-heading text-4xl md:text-5xl font-bold mb-4">
//               Application Process
//             </h2>
//             <p className="text-gray-400 text-lg max-w-2xl mx-auto">
//               Simple and straightforward steps to join our team
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//             {processSteps.map((item, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//                 className="relative"
//               >
//                 <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg p-6 border border-blue-500/30">
//                   <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center font-bold text-lg mb-4">
//                     {item.step}
//                   </div>
                  
//                   <h3 className="text-xl font-semibold mb-2 text-white">
//                     {item.title}
//                   </h3>
                  
//                   <p className="text-gray-400">
//                     {item.description}
//                   </p>
//                 </div>

//                 {index < processSteps.length - 1 && (
//                   <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
//                     <ArrowRight className="w-6 h-6 text-blue-500/50" />
//                   </div>
//                 )}
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 px-4 md:px-8 relative overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20"></div>
        
//         <div className="max-w-4xl mx-auto relative z-10 text-center">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//           >
//             <h2 className="gsap-heading text-4xl md:text-5xl font-bold mb-4">
//               Ready to Join Us?
//             </h2>
            
//             <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
//               Take the next step in your career with Globo Persona
//             </p>

//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="px-8 py-4 rounded-lg font-semibold bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
//               >
//                 Browse All Jobs
//               </motion.button>
              
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="px-8 py-4 rounded-lg font-semibold border-2 border-blue-500 text-blue-400 hover:bg-blue-500/10 transition-all"
//               >
//                 Send Resume
//               </motion.button>
//             </div>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Careers;



// 'use client';

// import { motion } from 'framer-motion';
// import { useState, useEffect } from 'react';
// import gsap from 'gsap';
// import { Card, CardContent } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { Badge } from '@/components/ui/badge';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { 
//   Users,
//   Zap,
//   Heart,
//   Code,
//   Target,
//   TrendingUp,
//   CheckCircle,
//   ArrowRight,
//   Briefcase,
//   MapPin,
//   BarChart3
// } from 'lucide-react';

// gsap.registerPlugin(ScrollTrigger);

// const Careers = () => {
//   const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
//   const [showCursor, setShowCursor] = useState(false);

//   const benefits = [
//     {
//       icon: TrendingUp,
//       title: 'Growth Opportunities',
//       description: 'Career development and advancement in a fast-growing company'
//     },
//     {
//       icon: Zap,
//       title: 'Competitive Salary',
//       description: 'Attractive compensation packages and performance bonuses'
//     },
//     {
//       icon: Heart,
//       title: 'Work-Life Balance',
//       description: 'Flexible working arrangements and wellness programs'
//     },
//     {
//       icon: Code,
//       title: 'Modern Tools & Tech',
//       description: 'Work with cutting-edge technology and frameworks'
//     },
//     {
//       icon: Users,
//       title: 'Collaborative Culture',
//       description: 'Team-oriented environment with open communication'
//     },
//     {
//       icon: Target,
//       title: 'Career Development',
//       description: 'Training, mentoring, and skill enhancement programs'
//     }
//   ];

//   const openings = [
//   {
//     title: 'Senior Full Stack Developer',
//     department: 'Engineering',
//     location: 'New York, NY / Remote',
//     type: 'Full-time',
//     description: 'Join our engineering team to build scalable applications using modern technologies.',
//   },
//   {
//     title: 'Cloud Solutions Architect',
//     department: 'Cloud Services',
//     location: 'San Francisco, CA',
//     type: 'Full-time',
//     description: 'Design and implement cloud infrastructure solutions for enterprise clients.',
//   },
//   {
//     title: 'Data Scientist',
//     department: 'Data Analytics',
//     location: 'Remote',
//     type: 'Full-time',
//     description: 'Analyze complex datasets and develop machine learning models for business insights.',
//   },
//   {
//     title: 'UX/UI Designer',
//     department: 'Design',
//     location: 'London, UK',
//     type: 'Full-time',
//     description: 'Create beautiful, intuitive interfaces that delight users and drive engagement.',
//   },
//   {
//     title: 'Cybersecurity Specialist',
//     department: 'Security',
//     location: 'Remote',
//     type: 'Full-time',
//     description: 'Protect our clients digital assets with advanced security solutions and strategies.',
//   },
//   {
//     title: 'Project Manager',
//     department: 'Operations',
//     location: 'Chicago, IL',
//     type: 'Full-time',
//     description: 'Lead cross-functional teams to deliver complex projects on time and within budget.',
//   },
// ];

//   const processSteps = [
//     {
//       step: 1,
//       title: 'Submit Application',
//       description: 'Apply with your resume and cover letter'
//     },
//     {
//       step: 2,
//       title: 'Initial Interview',
//       description: 'Screening call with our HR team'
//     },
//     {
//       step: 3,
//       title: 'Technical Assessment',
//       description: 'Demonstrate your skills and expertise'
//     },
//     {
//       step: 4,
//       title: 'Final Round',
//       description: 'Meet with team leads and decision makers'
//     }
//   ];

//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       setCursorPos({ x: e.clientX, y: e.clientY });
//       setShowCursor(true);
//     };

//     const handleMouseLeave = () => {
//       setShowCursor(false);
//     };

//     window.addEventListener('mousemove', handleMouseMove);
//     window.addEventListener('mouseleave', handleMouseLeave);

//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//       window.removeEventListener('mouseleave', handleMouseLeave);
//     };
//   }, []);

//   useEffect(() => {
//     const headings = document.querySelectorAll('.gsap-heading');
//     headings.forEach((heading) => {
//       const text = heading.textContent;
//       heading.innerHTML = '';
      
//       text.split('').forEach((char, i) => {
//         const span = document.createElement('span');
//         span.textContent = char;
//         span.style.opacity = '0';
//         heading.appendChild(span);
        
//         gsap.to(span, {
//           opacity: 1,
//           duration: 0.05,
//           delay: i * 0.03,
//           scrollTrigger: {
//             trigger: heading,
//             start: 'top 80%',
//             toggleActions: 'play none none none',
//           },
//         });
//       });
//     });
//   }, []);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-950 to-black text-white overflow-hidden relative">
//       {/* Custom Cursor */}
//       {showCursor && (
//         <motion.div
//           className="fixed pointer-events-none z-50 mix-blend-screen"
//           animate={{ x: cursorPos.x, y: cursorPos.y }}
//           transition={{ type: 'spring', stiffness: 500, damping: 28 }}
//         >
//           <div className="w-8 h-8 border-2 border-cyan-500 rounded-full flex items-center justify-center">
//             <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
//           </div>
//         </motion.div>
//       )}

//       {/* Hero Banner */}
//       <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-600 via-slate-800 to-cyan-900">
//         <div className="absolute inset-0 opacity-20">
//           <svg className="w-full h-full" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice">
//             <defs>
//               <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
//                 <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.1" />
//                 <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.1" />
//               </linearGradient>
//             </defs>
//             <circle cx="200" cy="150" r="100" fill="url(#grad1)" />
//             <circle cx="900" cy="400" r="150" fill="url(#grad1)" />
//             <rect x="50" y="350" width="200" height="200" fill="url(#grad1)" rx="20" />
//           </svg>
//         </div>
        
//         <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
//           <motion.h1 
//             className="gsap-heading text-5xl md:text-6xl font-bold mb-4 text-white"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.8 }}
//           >
//             Join Our Team
//           </motion.h1>
//           <motion.p 
//             className="text-xl md:text-2xl text-gray-300 mb-8"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//           >
//             Build Your Career with Globo Persona
//           </motion.p>
//         </div>
//       </section>

//       {/* Why Join Us (Benefits) */}
//       <section className="py-20 px-4 md:px-8" style={{ backgroundColor: "#244082" }}>
//         <div className="max-w-7xl mx-auto">
//           <motion.div
//             className="text-center mb-16"
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//           >
//             <h2 className="gsap-heading text-4xl md:text-5xl font-bold mb-4 text-white">
//               Why Join Us?
//             </h2>
//             <p className="text-gray-300 text-lg max-w-2xl mx-auto">
//               Be part of a dynamic team working on innovative solutions
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {benefits.map((benefit, index) => {
//               const Icon = benefit.icon;
//               return (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.5, delay: index * 0.1 }}
//                   viewport={{ once: true }}
//                   whileHover={{ y: -10, scale: 1.02, transition: { duration: 0.3 } }}
//                   className="group relative"
//                 >
//                   <div className="bg-gradient-to-br from-blue-500/15 to-cyan-500/10 rounded-2xl p-8 backdrop-blur-xl border border-cyan-500/30 hover:border-cyan-500/60 transition-all duration-300 h-full shadow-lg hover:shadow-xl hover:shadow-cyan-500/20">
//                     <motion.div 
//                       className="inline-block p-4 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 mb-6 shadow-lg"
//                       whileHover={{ rotate: 10, scale: 1.1 }}
//                       transition={{ type: 'spring', stiffness: 400 }}
//                     >
//                       <Icon className="w-7 h-7 text-white" />
//                     </motion.div>
                    
//                     <h3 className="text-xl font-bold mb-3 text-white">
//                       {benefit.title}
//                     </h3>
                    
//                     <p className="text-gray-300 leading-relaxed">
//                       {benefit.description}
//                     </p>

//                     <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none"></div>
//                   </div>
//                 </motion.div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* Current Opportunities */}
//       <section className="py-24 bg-gradient-to-br from-gray-200 to-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center mb-16"
//           >
//             <span className="text-[#fdc134] font-semibold text-sm uppercase tracking-wider">
//               Open Positions
//             </span>
//             <h2 className="font-display font-bold text-4xl md:text-5xl text-[#1b2a3d] mt-3 mb-4">
//               Current Opportunities
//             </h2>
//             <p className="text-gray-600 text-lg max-w-2xl mx-auto">
//               Explore our open roles and find the perfect fit for your skills and aspirations
//             </p>
//           </motion.div>

//           <div className="space-y-6">
//             {openings.map((job, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.05 }}
//               >
//                 <Card className="border-2 border-gray-100 hover:border-[#244082] hover:shadow-lg transition-all group">
//                   <CardContent className="p-8">
//                     <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
//                       <div className="flex-1">
//                         <div className="flex items-center gap-3 mb-3">
//                           <h3 className="font-display font-semibold text-2xl text-[#1b2a3d] group-hover:text-[#244082] transition-colors">
//                             {job.title}
//                           </h3>
//                           <Badge className="bg-[#fdc134] text-[#1b2a3d] hover:bg-[#f0b429]">
//                             {job.type}
//                           </Badge>
//                         </div>
//                         <p className="text-gray-600 mb-4 leading-relaxed">
//                           {job.description}
//                         </p>
//                         <div className="flex flex-wrap gap-4 text-sm text-gray-500">
//                           <div className="flex items-center gap-2">
//                             <Briefcase className="w-4 h-4 text-[#244082]" />
//                             {job.department}
//                           </div>
//                           <div className="flex items-center gap-2">
//                             <MapPin className="w-4 h-4 text-[#244082]" />
//                             {job.location}
//                           </div>
//                         </div>
//                       </div>
//                       <div className="flex-shrink-0">
//                         <Button className="bg-[#244082] hover:bg-[#1b2a3d] text-white font-semibold px-8">
//                           Apply Now
//                         </Button>
//                       </div>
//                     </div>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>


//       {/* Application Process */}
//       <section className="py-20 px-4 md:px-8">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-20">
//             {/* Left: Content */}
//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//             >
//               <h2 className="gsap-heading text-4xl md:text-5xl font-bold mb-6 text-white">
//                 Application Process
//               </h2>
//               <p className="text-gray-400 text-lg mb-8 leading-relaxed">
//                 Our simple and straightforward hiring process ensures we find the best candidates for our team. We believe in transparent communication and giving every applicant a fair chance to showcase their talents.
//               </p>
              
//               <div className="space-y-4">
//                 {['Fast-tracked reviews', '1-week response time', 'Fair & transparent', 'Multiple opportunities'].map((point, i) => (
//                   <div key={i} className="flex items-center gap-3">
//                     <CheckCircle className="w-5 h-5 text-cyan-500 flex-shrink-0" />
//                     <span className="text-gray-300">{point}</span>
//                   </div>
//                 ))}
//               </div>
//             </motion.div>

//             {/* Right: Image */}
//             <motion.div
//               initial={{ opacity: 0, scale: 0.95 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//               className="relative"
//             >
//               <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur-3xl opacity-20"></div>
//               <img
//                 src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=500&fit=crop"
//                 alt="Application Process"
//                 className="relative rounded-2xl w-full h-[400px] object-cover border border-cyan-500/30"
//               />
//             </motion.div>
//           </div>

//           <motion.div
//             className="text-center mb-16"
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//           >
//             <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
//               Four Simple Steps
//             </h3>
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//             {processSteps.map((item, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//                 className="relative"
//               >
//                 <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg p-6 border border-blue-500/30">
//                   <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center font-bold text-lg mb-4">
//                     {item.step}
//                   </div>
                  
//                   <h3 className="text-xl font-semibold mb-2 text-white">
//                     {item.title}
//                   </h3>
                  
//                   <p className="text-gray-400">
//                     {item.description}
//                   </p>
//                 </div>

//                 {index < processSteps.length - 1 && (
//                   <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
//                     <ArrowRight className="w-6 h-6 text-blue-500/50" />
//                   </div>
//                 )}
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 px-4 md:px-8 relative overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20"></div>
        
//         <div className="max-w-4xl mx-auto relative z-10 text-center">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//           >
//             <h2 className="gsap-heading text-4xl md:text-5xl font-bold mb-4">
//               Ready to Join Us?
//             </h2>
            
//             <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
//               Take the next step in your career with Globo Persona
//             </p>

//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="px-8 py-4 rounded-lg font-semibold bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
//               >
//                 Browse All Jobs
//               </motion.button>
              
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="px-8 py-4 rounded-lg font-semibold border-2 border-blue-500 text-blue-400 hover:bg-blue-500/10 transition-all"
//               >
//                 Send Resume
//               </motion.button>
//             </div>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Careers;

// "use client";

// import { motion } from "framer-motion";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
// import { Separator } from "@/components/ui/separator";

// const jobs = [
//   {
//     id: 1,
//     title: "Frontend Engineer",
//     location: "Remote · India",
//     type: "Full-time",
//     level: "Mid-level",
//     tags: ["React", "Next.js", "Tailwind"],
//   },
//   {
//     id: 2,
//     title: "AI Content Strategist",
//     location: "Remote · Global",
//     type: "Contract",
//     level: "Senior",
//     tags: ["GenAI", "SEO", "Content"],
//   },
//   {
//     id: 3,
//     title: "Full-Stack Developer",
//     location: "Hybrid · Hyderabad",
//     type: "Full-time",
//     level: "Junior",
//     tags: ["Next.js", "Node.js", "PostgreSQL"],
//   },
// ];

// const container = {
//   hidden: { opacity: 0, y: 20 },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.5, ease: "easeOut" },
//   },
// };

// export default function CareersPage() {
//   return (
//     <div className="min-h-screen bg-[#0b1120] text-white">
//       {/* Banner */}
//       <section className="relative overflow-hidden border-b border-white/5">
//         <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_#244082_0,_transparent_55%)] opacity-70" />
//         <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-20 text-center sm:px-6 lg:flex-row lg:items-center lg:gap-10 lg:text-left">
//           <motion.div
//             variants={container}
//             initial="hidden"
//             animate="show"
//             className="flex-1 space-y-4"
//           >
//             <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-200">
//               Careers at Globo Persona
//             </p>
//             <h1 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
//               Build the future of AI-driven{" "}
//               <span className="text-[#57a5ff]">customer personas</span>.
//             </h1>
//             <p className="max-w-xl text-sm text-blue-100 sm:text-base">
//               Join a product-first team that blends engineering, design, and strategy to help brands
//               understand their users at a deeper level.
//             </p>
//             <div className="flex flex-wrap items-center gap-3">
//               <Button className="bg-[#244082] hover:bg-[#213b52]">
//                 View open roles
//               </Button>
//               <Button variant="outline" className="border-blue-300/40 bg-transparent text-blue-100 hover:bg-blue-900/40">
//                 Talk to our team
//               </Button>
//             </div>
//           </motion.div>

//           {/* Highlight card */}
//           <motion.div
//             variants={container}
//             initial={{ opacity: 0, x: 40 }}
//             animate={{ opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.1 } }}
//             className="mt-10 w-full max-w-md flex-1 lg:mt-0"
//           >
//             <Card className="border-blue-500/30 bg-white/5 backdrop-blur">
//               <CardHeader>
//                 <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
//                   Why work with us
//                 </p>
//                 <CardTitle className="text-xl">
//                   Product, people, and growth.
//                 </CardTitle>
//               </CardHeader>
//               <CardContent className="space-y-4 text-sm text-blue-100">
//                 <div className="flex items-start gap-3">
//                   <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
//                   <p>Work with a modern stack: Next.js, TypeScript, AI tooling, and motion-first UI.</p>
//                 </div>
//                 <div className="flex items-start gap-3">
//                   <span className="mt-1 h-2 w-2 rounded-full bg-sky-400" />
//                   <p>Small, focused squads with direct impact on roadmap and customer experience.</p>
//                 </div>
//                 <div className="flex items-start gap-3">
//                   <span className="mt-1 h-2 w-2 rounded-full bg-violet-400" />
//                   <p>Remote-friendly culture, async-first communication, and flexible hours.</p>
//                 </div>
//               </CardContent>
//             </Card>
//           </motion.div>
//         </div>
//       </section>

//       {/* Benefits */}
//       <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
//         <div className="flex flex-col gap-10 lg:flex-row">
//           <div className="flex-1 space-y-3">
//             <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
//               Benefits
//             </p>
//             <h2 className="text-2xl font-semibold sm:text-3xl">
//               A workplace designed for builders.
//             </h2>
//             <p className="text-sm text-blue-100 sm:text-base">
//               Competitive pay, meaningful equity, and a culture that lets you ship fast without
//               burning out.
//             </p>
//           </div>
//           <div className="grid flex-1 gap-4 sm:grid-cols-2">
//             <div className="rounded-xl border border-white/10 bg-white/5 p-4">
//               <p className="text-sm font-semibold">Remote-first & flexible</p>
//               <p className="mt-2 text-xs text-blue-100">
//                 Work from anywhere with async rituals that respect your focus time.
//               </p>
//             </div>
//             <div className="rounded-xl border border-white/10 bg-white/5 p-4">
//               <p className="text-sm font-semibold">Learning budget</p>
//               <p className="mt-2 text-xs text-blue-100">
//                 Stipend for courses, conferences, and tools that level up your craft.
//               </p>
//             </div>
//             <div className="rounded-xl border border-white/10 bg-white/5 p-4">
//               <p className="text-sm font-semibold">Modern dev setup</p>
//               <p className="mt-2 text-xs text-blue-100">
//                 Top-tier hardware, paid SaaS tools, and clean engineering practices.
//               </p>
//             </div>
//             <div className="rounded-xl border border-white/10 bg-white/5 p-4">
//               <p className="text-sm font-semibold">Ownership & impact</p>
//               <p className="mt-2 text-xs text-blue-100">
//                 Ship end-to-end features used by real customers, not internal dashboards.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       <Separator className="border-blue-900/70" />

//       {/* Open roles */}
//       <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
//         <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
//           <div>
//             <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
//               Open roles
//             </p>
//             <h2 className="mt-1 text-2xl font-semibold sm:text-3xl">
//               Join the Globo Persona team.
//             </h2>
//           </div>
//           <p className="text-xs text-blue-100 sm:text-sm">
//             Don’t see a perfect fit? Send a general application with your portfolio and what you’d
//             like to work on.
//           </p>
//         </div>

//         <div className="mt-8 space-y-4">
//           {jobs.map((job, index) => (
//             <motion.div
//               key={job.id}
//               initial={{ opacity: 0, y: 15 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, amount: 0.3 }}
//               transition={{ duration: 0.35, delay: index * 0.05 }}
//             >
//               <Card className="group flex flex-col border-blue-500/10 bg-blue-950/40 backdrop-blur hover:border-blue-400/60 hover:bg-blue-900/40 sm:flex-row sm:items-center sm:justify-between">
//                 <CardHeader className="space-y-2 sm:basis-2/3">
//                   <div className="flex items-center gap-2">
//                     <Badge className="bg-emerald-500/90 text-xs text-emerald-950">
//                       Hiring
//                     </Badge>
//                     <span className="text-xs text-blue-200">{job.type}</span>
//                   </div>
//                   <CardTitle className="text-lg group-hover:text-blue-100">
//                     {job.title}
//                   </CardTitle>
//                   <div className="flex flex-wrap gap-3 text-xs text-blue-200">
//                     <span>{job.location}</span>
//                     <span className="h-1 w-1 rounded-full bg-blue-400" />
//                     <span>{job.level}</span>
//                   </div>
//                   <div className="mt-3 flex flex-wrap gap-2">
//                     {job.tags.map((tag) => (
//                       <Badge
//                         key={tag}
//                         variant="outline"
//                         className="border-blue-400/40 bg-blue-950/60 text-[11px] text-blue-100"
//                       >
//                         {tag}
//                       </Badge>
//                     ))}
//                   </div>
//                 </CardHeader>
//                 <CardFooter className="flex items-center justify-end gap-3 border-t border-blue-900/60 px-4 py-4 sm:basis-1/3 sm:border-l sm:border-t-0 sm:py-6">
//                   <Button
//                     variant="outline"
//                     className="border-blue-400/60 bg-transparent text-xs text-blue-100 hover:bg-blue-900/60"
//                   >
//                     View details
//                   </Button>
//                   <Button className="bg-[#244082] text-xs hover:bg-[#213b52]">
//                     Apply now
//                   </Button>
//                 </CardFooter>
//               </Card>
//             </motion.div>
//           ))}
//         </div>

//         {/* General application */}
//         <div className="mt-10 rounded-xl border border-dashed border-blue-500/40 bg-blue-950/40 p-5 text-sm text-blue-100 sm:flex sm:items-center sm:justify-between sm:gap-6">
//           <div>
//             <p className="text-sm font-semibold text-blue-50">
//               No perfect role? Pitch your own.
//             </p>
//             <p className="mt-1 text-xs sm:text-sm">
//               Share what you’d like to build at Globo Persona and how you think you can help.
//             </p>
//           </div>
//           <Button
//             variant="outline"
//             className="mt-3 border-blue-400/60 bg-transparent text-xs text-blue-100 hover:bg-blue-900/60 sm:mt-0"
//           >
//             Send general application
//           </Button>
//         </div>
//       </section>
//     </div>
//   );
// }


// "use client";

// import { motion } from "framer-motion";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
// import { Separator } from "@/components/ui/separator";

// const jobs = [
//   {
//     id: 1,
//     title: "Frontend Engineer",
//     location: "Remote · India",
//     type: "Full-time",
//     level: "Mid-level",
//     tags: ["React", "Next.js", "Tailwind"],
//   },
//   {
//     id: 2,
//     title: "AI Content Strategist",
//     location: "Remote · Global",
//     type: "Contract",
//     level: "Senior",
//     tags: ["GenAI", "SEO", "Content"],
//   },
//   {
//     id: 3,
//     title: "Full-Stack Developer",
//     location: "Hybrid · Hyderabad",
//     type: "Full-time",
//     level: "Junior",
//     tags: ["Next.js", "Node.js", "PostgreSQL"],
//   },
// ];

// const container = {
//   hidden: { opacity: 0, y: 20 },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.5, ease: "easeOut" },
//   },
// };

// export default function CareersPage() {
//   return (
//     <div className="min-h-screen bg-[#0b1120] text-white">
//       {/* Banner */}
//       <section className="relative overflow-hidden border-b border-white/5">
//         <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_#244082_0,_transparent_55%)] opacity-70" />
//         <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-20 text-center sm:px-6 lg:flex-row lg:items-center lg:gap-10 lg:text-left">
//           <motion.div
//             variants={container}
//             initial="hidden"
//             animate="show"
//             className="flex-1 space-y-4"
//           >
//             <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-200">
//               Careers at Globo Persona
//             </p>
//             <h1 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
//               Build the future of AI-driven{" "}
//               <span className="text-[#57a5ff]">customer personas</span>.
//             </h1>
//             <p className="max-w-xl text-sm text-blue-100 sm:text-base">
//               Join a product-first team that blends engineering, design, and strategy to help brands
//               understand their users at a deeper level.
//             </p>
//             <div className="flex flex-wrap items-center gap-3">
//               <Button className="bg-[#244082] hover:bg-[#213b52]">
//                 View open roles
//               </Button>
//               <Button variant="outline" className="border-blue-300/40 bg-transparent text-blue-100 hover:bg-blue-900/40">
//                 Talk to our team
//               </Button>
//             </div>
//           </motion.div>

//           {/* Highlight card */}
//           <motion.div
//             variants={container}
//             initial={{ opacity: 0, x: 40 }}
//             animate={{ opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.1 } }}
//             className="mt-10 w-full max-w-md flex-1 lg:mt-0"
//           >
//             <Card className="border-blue-500/30 bg-white/5 backdrop-blur">
//               <CardHeader>
//                 <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
//                   Why work with us
//                 </p>
//                 <CardTitle className="text-xl">
//                   Product, people, and growth.
//                 </CardTitle>
//               </CardHeader>
//               <CardContent className="space-y-4 text-sm text-blue-100">
//                 <div className="flex items-start gap-3">
//                   <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
//                   <p>Work with a modern stack: Next.js, TypeScript, AI tooling, and motion-first UI.</p>
//                 </div>
//                 <div className="flex items-start gap-3">
//                   <span className="mt-1 h-2 w-2 rounded-full bg-sky-400" />
//                   <p>Small, focused squads with direct impact on roadmap and customer experience.</p>
//                 </div>
//                 <div className="flex items-start gap-3">
//                   <span className="mt-1 h-2 w-2 rounded-full bg-violet-400" />
//                   <p>Remote-friendly culture, async-first communication, and flexible hours.</p>
//                 </div>
//               </CardContent>
//             </Card>
//           </motion.div>
//         </div>
//       </section>

//       {/* Benefits */}
//       <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
//         <div className="flex flex-col gap-10 lg:flex-row">
//           <div className="flex-1 space-y-3">
//             <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
//               Benefits
//             </p>
//             <h2 className="text-2xl font-semibold sm:text-3xl">
//               A workplace designed for builders.
//             </h2>
//             <p className="text-sm text-blue-100 sm:text-base">
//               Competitive pay, meaningful equity, and a culture that lets you ship fast without
//               burning out.
//             </p>
//           </div>
//           <div className="grid flex-1 gap-4 sm:grid-cols-2">
//             <div className="rounded-xl border border-white/10 bg-white/5 p-4">
//               <p className="text-sm font-semibold">Remote-first & flexible</p>
//               <p className="mt-2 text-xs text-blue-100">
//                 Work from anywhere with async rituals that respect your focus time.
//               </p>
//             </div>
//             <div className="rounded-xl border border-white/10 bg-white/5 p-4">
//               <p className="text-sm font-semibold">Learning budget</p>
//               <p className="mt-2 text-xs text-blue-100">
//                 Stipend for courses, conferences, and tools that level up your craft.
//               </p>
//             </div>
//             <div className="rounded-xl border border-white/10 bg-white/5 p-4">
//               <p className="text-sm font-semibold">Modern dev setup</p>
//               <p className="mt-2 text-xs text-blue-100">
//                 Top-tier hardware, paid SaaS tools, and clean engineering practices.
//               </p>
//             </div>
//             <div className="rounded-xl border border-white/10 bg-white/5 p-4">
//               <p className="text-sm font-semibold">Ownership & impact</p>
//               <p className="mt-2 text-xs text-blue-100">
//                 Ship end-to-end features used by real customers, not internal dashboards.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       <Separator className="border-blue-900/70" />

//       {/* Open roles */}
//       <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
//         <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
//           <div>
//             <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
//               Open roles
//             </p>
//             <h2 className="mt-1 text-2xl font-semibold sm:text-3xl">
//               Join the Globo Persona team.
//             </h2>
//           </div>
//           <p className="text-xs text-blue-100 sm:text-sm">
//             Don’t see a perfect fit? Send a general application with your portfolio and what you’d
//             like to work on.
//           </p>
//         </div>

//         <div className="mt-8 space-y-4">
//           {jobs.map((job, index) => (
//             <motion.div
//               key={job.id}
//               initial={{ opacity: 0, y: 15 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, amount: 0.3 }}
//               transition={{ duration: 0.35, delay: index * 0.05 }}
//             >
//               <Card className="group flex flex-col border-blue-500/10 bg-blue-950/40 backdrop-blur hover:border-blue-400/60 hover:bg-blue-900/40 sm:flex-row sm:items-center sm:justify-between">
//                 <CardHeader className="space-y-2 sm:basis-2/3">
//                   <div className="flex items-center gap-2">
//                     <Badge className="bg-emerald-500/90 text-xs text-emerald-950">
//                       Hiring
//                     </Badge>
//                     <span className="text-xs text-blue-200">{job.type}</span>
//                   </div>
//                   <CardTitle className="text-lg group-hover:text-blue-100">
//                     {job.title}
//                   </CardTitle>
//                   <div className="flex flex-wrap gap-3 text-xs text-blue-200">
//                     <span>{job.location}</span>
//                     <span className="h-1 w-1 rounded-full bg-blue-400" />
//                     <span>{job.level}</span>
//                   </div>
//                   <div className="mt-3 flex flex-wrap gap-2">
//                     {job.tags.map((tag) => (
//                       <Badge
//                         key={tag}
//                         variant="outline"
//                         className="border-blue-400/40 bg-blue-950/60 text-[11px] text-blue-100"
//                       >
//                         {tag}
//                       </Badge>
//                     ))}
//                   </div>
//                 </CardHeader>
//                 <CardFooter className="flex items-center justify-end gap-3 border-t border-blue-900/60 px-4 py-4 sm:basis-1/3 sm:border-l sm:border-t-0 sm:py-6">
//                   <Button
//                     variant="outline"
//                     className="border-blue-400/60 bg-transparent text-xs text-blue-100 hover:bg-blue-900/60"
//                   >
//                     View details
//                   </Button>
//                   <Button className="bg-[#244082] text-xs hover:bg-[#213b52]">
//                     Apply now
//                   </Button>
//                 </CardFooter>
//               </Card>
//             </motion.div>
//           ))}
//         </div>

//         {/* General application */}
//         <div className="mt-10 rounded-xl border border-dashed border-blue-500/40 bg-blue-950/40 p-5 text-sm text-blue-100 sm:flex sm:items-center sm:justify-between sm:gap-6">
//           <div>
//             <p className="text-sm font-semibold text-blue-50">
//               No perfect role? Pitch your own.
//             </p>
//             <p className="mt-1 text-xs sm:text-sm">
//               Share what you’d like to build at Globo Persona and how you think you can help.
//             </p>
//           </div>
//           <Button
//             variant="outline"
//             className="mt-3 border-blue-400/60 bg-transparent text-xs text-blue-100 hover:bg-blue-900/60 sm:mt-0"
//           >
//             Send general application
//           </Button>
//         </div>
//       </section>
//     </div>
//   );
// }


// app/careers/page.tsx
// "use client";

// import { useEffect, useRef } from "react";
// import { motion } from "framer-motion";
// import gsap from "gsap";
// // If you use the TextPlugin for advanced typing: import TextPlugin from "gsap/TextPlugin";
// // gsap.registerPlugin(TextPlugin);

// import { Card } from "@/components/ui/card"; // shadcn/ui card [web:5][web:8]

// const benefits = [
//   {
//     title: "Competitive Salary",
//     description: "Stay ahead with performance-based increments and bonuses.",
//   },
//   {
//     title: "Remote Friendly",
//     description: "Flexible work options to match your lifestyle.",
//   },
//   {
//     title: "Learning Budget",
//     description: "Yearly allowance for courses, books, and conferences.",
//   },
//   {
//     title: "Health & Wellness",
//     description: "Comprehensive medical coverage and wellness programs.",
//   },
// ];

// const openings = [
//   { title: "Frontend Developer", tag: "React / Next.js" },
//   { title: "Backend Developer", tag: "Node / Python" },
//   { title: "SEO Specialist", tag: "On-page / Technical SEO" },
//   { title: "Business Development Executive", tag: "BDE" },
//   { title: "Lead Generator", tag: "LG" },
//   { title: "Marketing Specialist", tag: "Digital / Performance" },
// ];

// export default function CareerPage() {
//   const headingRef = useRef<HTMLSpanElement | null>(null);

//   useEffect(() => {
//     if (!headingRef.current) return;

//     const words = ["Build.", "Grow.", "Lead.", "With GloboPersona."];
//     const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.6 });

//     tl.set(headingRef.current, { textContent: "" });

//     words.forEach((word) => {
//       tl.to(headingRef.current, {
//         duration: 0.6,
//         textContent: word,
//         ease: "none",
//       }).to(headingRef.current, {
//         duration: 0.2,
//         opacity: 0,
//         y: 4,
//         onComplete() {
//           if (headingRef.current) {
//             headingRef.current.style.opacity = "1";
//             headingRef.current.style.transform = "translateY(0px)";
//           }
//         },
//       });
//     });
//   }, []);

//   return (
//     <main className="min-h-screen bg-[#020617] text-white">
//       {/* Banner */}
//       <section className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-20 md:flex-row md:items-center">
//         {/* Left: Heading + para */}
//         <div className="flex-1 space-y-6">
//           <h1 className="text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
//             <span className="block text-sky-400">Careers at GloboPersona</span>
//             <span
//               ref={headingRef}
//               className="mt-3 inline-block min-h-[1.2em] border-b border-dotted border-sky-500 pb-1 align-middle"
//             >
//               {/* GSAP will type here */}
//             </span>
//           </h1>
//           <p className="max-w-xl text-sm text-slate-300 sm:text-base">
//             Join a team that ships fast, experiments boldly, and designs digital
//             experiences that businesses love to use.
//           </p>
//         </div>

//         {/* Right: Image placeholder */}
//         <motion.div
//           className="flex-1"
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7, ease: "easeOut" }}
//         >
//           <div className="aspect-[4/3] w-full rounded-2xl bg-gradient-to-br from-sky-500/20 via-sky-400/10 to-indigo-500/20 p-[1px]">
//             <div className="flex h-full items-center justify-center rounded-2xl bg-slate-900/60">
//               <div className="space-y-3 text-center">
//                 <p className="text-xs uppercase tracking-[0.2em] text-sky-300/80">
//                   We are hiring
//                 </p>
//                 <p className="text-lg font-medium text-slate-50">
//                   Product, engineering & growth roles for 2025.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       </section>

//       {/* Benefits */}
//       <section className="border-t border-slate-800 bg-slate-950/40">
//         <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-16 md:flex-row">
//           {/* Left heading */}
//           <div className="md:w-1/3 space-y-4">
//             <h2 className="text-2xl font-semibold text-slate-50">
//               Why work with us
//             </h2>
//             <p className="text-sm text-slate-400">
//               Craft meaningful products, grow with mentors, and enjoy a culture
//               that respects focus time and deep work.
//             </p>
//           </div>

//           {/* Right 4 cards */}
//           <motion.div
//             className="grid flex-1 gap-5 sm:grid-cols-2"
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             transition={{ staggerChildren: 0.08 }}
//           >
//             {benefits.map((benefit, index) => (
//               <motion.div
//                 key={benefit.title}
//                 variants={{
//                   hidden: { opacity: 0, y: 20 },
//                   visible: { opacity: 1, y: 0 },
//                 }}
//                 transition={{ duration: 0.4, delay: index * 0.05 }}
//               >
//                 <Card className="h-full border-slate-800 bg-slate-900/60 p-4 text-slate-100">
//                   <h3 className="mb-2 text-sm font-semibold">
//                     {benefit.title}
//                   </h3>
//                   <p className="text-xs text-slate-400">
//                     {benefit.description}
//                   </p>
//                 </Card>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* Current openings */}
//       <section className="border-t border-slate-800 bg-slate-950">
//         <div className="mx-auto max-w-6xl px-6 py-16">
//           <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
//             <div>
//               <h2 className="text-2xl font-semibold text-slate-50">
//                 Current openings
//               </h2>
//               <p className="text-sm text-slate-400">
//                 Pick a role that matches your craft. One focused card per row
//                 for better readability.
//               </p>
//             </div>
//             <button className="inline-flex items-center justify-center rounded-full border border-sky-500/60 bg-sky-500/10 px-4 py-2 text-xs font-medium text-sky-100 hover:bg-sky-500/20">
//               View all roles
//             </button>
//           </div>

//           <div className="space-y-4">
//             {openings.map((role, index) => (
//               <motion.div
//                 key={role.title}
//                 className="rounded-xl border border-slate-800 bg-slate-900/60 px-4 py-4 sm:px-6"
//                 initial={{ opacity: 0, y: 10 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.4, delay: index * 0.04 }}
//               >
//                 <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
//                   <div>
//                     <h3 className="text-sm font-semibold text-slate-50">
//                       {role.title}
//                     </h3>
//                     <p className="text-xs text-slate-400">{role.tag}</p>
//                   </div>
//                   <div className="flex items-center gap-2 text-xs">
//                     <span className="rounded-full border border-emerald-500/40 bg-emerald-500/10 px-2 py-1 text-[11px] uppercase tracking-wide text-emerald-300">
//                       Hiring now
//                     </span>
//                     <button className="rounded-full bg-sky-500 px-3 py-1 text-[11px] font-medium text-slate-950 hover:bg-sky-400">
//                       View details
//                     </button>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }



// app/careers/page.tsx
// "use client";

// import { useEffect, useRef } from "react";
// import { motion } from "framer-motion";
// import gsap from "gsap";
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import Image from "next/image";

// const benefits = [
//   { title: "Competitive Salary", description: "Performance-based increments and bonuses." },
//   { title: "Remote Friendly", description: "Flexible work options to match your lifestyle." },
//   { title: "Learning Budget", description: "Yearly allowance for courses and conferences." },
//   { title: "Health & Wellness", description: "Comprehensive medical coverage and programs." },
// ];

// const jobs = [
//   {
//     id: 1,
//     title: "Frontend Engineer",
//     location: "Remote · India",
//     type: "Full-time",
//     level: "Mid-level",
//     tags: ["React", "Next.js", "Tailwind"],
//   },
//   {
//     id: 2,
//     title: "AI Content Strategist",
//     location: "Remote · Global",
//     type: "Contract",
//     level: "Senior",
//     tags: ["GenAI", "SEO", "Content"],
//   },
//   {
//     id: 3,
//     title: "Full-Stack Developer",
//     location: "Hybrid · Hyderabad",
//     type: "Full-time",
//     level: "Junior",
//     tags: ["Next.js", "Node.js", "PostgreSQL"],
//   },
// ];

// export default function CareerPage() {
//   const headingRef = useRef<HTMLSpanElement | null>(null);

//   useEffect(() => {
//     if (!headingRef.current) return;

//     const words = ["Build.", "Grow.", "Lead.", "With GloboPersona."];
//     const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.6 });

//     tl.set(headingRef.current, { textContent: "" });

//     words.forEach((word) => {
//       tl.to(headingRef.current, {
//         duration: 0.6,
//         textContent: word,
//         ease: "none",
//       }).to(headingRef.current, {
//         duration: 0.2,
//         opacity: 0,
//         y: 4,
//       });
//     });
//   }, []);

//   return (
//     <main className="min-h-screen bg-gradient-to-b from-[#020617] to-[#0a0f1e]">
//       {/* Banner - Dark Navy */}
//       <section className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-20 md:flex-row md:items-center">
//   <div className="flex-1 space-y-6">
//     <h1 className="text-3xl font-semibold leading-tight sm:text-4xl md:text-6xl">
//       <span className="block text-sky-400">Careers at GloboPersona</span>
//       <span
//         ref={headingRef}
//         className="mt-3 inline-block min-h-[1.2em] border-b border-dotted border-sky-500 pb-1 align-middle"
//       />
//     </h1>
 
//     <p className="max-w-xl text-sm text-slate-300 sm:text-base">
//       Join a team that ships fast, experiments boldly, and designs digital experiences.
//     </p>
//   </div>
//   <motion.div 
//     initial={{ opacity: 0, x: 50 }} 
//     whileInView={{ opacity: 1, x: 0 }} 
//     transition={{ duration: 0.8 }} 
//     viewport={{ once: true }} 
//     className="flex-1 relative h-96 rounded-2xl overflow-hidden md:h-[400px]"
//   >
//     <Image 
//       src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
//       alt="Team working together at GloboPersona" 
//       fill 
//       className="object-cover"
//       priority
//     />
//   </motion.div>
// </section>

//       {/* Why work with us - Light BG + Highlighted cards */}
//       <section className="bg-gradient-to-r from-slate-50/90 to-blue-50/80">
//         <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-16 md:flex-row">
//           <div className="md:w-1/3 space-y-4">
//             <h2 className="text-4xl font-bold text-slate-900">Why work with us</h2>
//             <p className="text-lg text-slate-600">
//               Craft meaningful products, grow with mentors, and enjoy a culture that respects focus time.
//             </p>
//           </div>
//           <motion.div
//             className="grid flex-1 gap-6 sm:grid-cols-2"
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             transition={{ staggerChildren: 0.1 }}
//           >
//             {benefits.map((benefit, index) => (
//               <motion.div
//                 key={benefit.title}
//                 variants={{
//                   hidden: { opacity: 0, y: 30, scale: 0.95 },
//                   visible: { opacity: 1, y: 0, scale: 1 },
//                 }}
//                 whileHover={{ scale: 1.02, y: -5 }}
//                 transition={{ duration: 0.4 }}
//               >
//                 <Card className="h-full border-0 bg-white/70 shadow-xl backdrop-blur-sm hover:shadow-2xl hover:ring-2 hover:ring-blue-200/50">
//                   <CardContent className="p-8">
//                     <div className="mb-4 h-12 w-12 rounded-2xl bg-gradient-to-r from-blue-500 to-sky-500" />
//                     <CardTitle className="mb-3 text-xl font-bold text-slate-900">{benefit.title}</CardTitle>
//                     <CardDescription className="text-base text-slate-600">{benefit.description}</CardDescription>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* Current openings - Custom BG + White cards with black text */}
//       <section className="bg-gradient-to-b from-indigo-900/20 via-slate-900/50 to-slate-950 border-t border-slate-800/50">
//         <div className="mx-auto max-w-6xl px-6 py-20">
//           <div className="mb-12 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
//             <div>
//               <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">Open roles</p>
//               <h2 className="mt-2 text-4xl font-bold text-white">Join the Globo Persona team.</h2>
//             </div>
//             <p className="text-sm text-slate-300">
//               Don't see a perfect fit? Send a general application with your portfolio.
//             </p>
//           </div>

//           <div className="space-y-6">
//             {jobs.map((job, index) => (
//               <motion.div
//                 key={job.id}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.4, delay: index * 0.1 }}
//               >
//                 <Card className="group flex flex-col border-blue-500/20 bg-white shadow-2xl hover:border-blue-400/60 hover:shadow-3xl sm:flex-row sm:items-center sm:justify-between">
//                   <CardHeader className="space-y-3 p-6 sm:basis-2/3">
//                     <div className="flex items-center gap-3">
//                       <Badge className="bg-emerald-500/90 text-xs font-bold text-emerald-950 shadow-md">Hiring</Badge>
//                       <span className="text-sm font-medium text-slate-700">{job.type}</span>
//                     </div>
//                     <CardTitle className="text-xl font-bold text-slate-900 group-hover:text-blue-700">
//                       {job.title}
//                     </CardTitle>
//                     <div className="flex flex-wrap items-center gap-3 text-sm text-slate-600">
//                       <span>{job.location}</span>
//                       <span className="h-1 w-1 rounded-full bg-slate-400" />
//                       <span>{job.level}</span>
//                     </div>
//                     <div className="flex flex-wrap gap-2">
//                       {job.tags.map((tag) => (
//                         <Badge
//                           key={tag}
//                           variant="secondary"
//                           className="border-slate-300 bg-slate-100/80 text-xs font-medium text-slate-700 hover:bg-slate-200"
//                         >
//                           {tag}
//                         </Badge>
//                       ))}
//                     </div>
//                   </CardHeader>
//                   <CardFooter className="flex items-center justify-end gap-3 border-t border-slate-200/50 p-6 sm:basis-1/3 sm:border-l sm:border-t-0 sm:px-8 sm:py-8">
//                     {/* <Button
//                       variant="outline"
//                       className="border-slate-300 bg-white/80 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50 hover:shadow-md"
//                     >
//                       View details
//                     </Button> */}
//                     <Button className="border-2 border-blue-600 bg-blue-600 px-6 py-2 text-sm font-bold text-white shadow-lg hover:border-blue-700 hover:bg-blue-700 hover:shadow-xl">
//                       Apply now
//                     </Button>
//                   </CardFooter>
//                 </Card>
//               </motion.div>
//             ))}
//           </div>

//           {/* General application */}
//           <motion.div
//             className="mt-16 rounded-2xl border-2 border-dashed border-blue-400/50 bg-white/20 backdrop-blur-xl p-8 text-white shadow-2xl"
//             initial={{ opacity: 0, scale: 0.95 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//           >
//             <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
//               <div>
//                 <p className="text-lg font-bold text-white">No perfect role? Pitch your own.</p>
//                 <p className="text-sm text-slate-200">
//                   Share what you'd like to build at Globo Persona and how you think you can help.
//                 </p>
//               </div>
//               <Button
//                 variant="outline"
//                 size="lg"
//                 className="border-2 border-white/60 bg-white/10 backdrop-blur-sm text-sm font-bold text-white hover:border-white hover:bg-white/20"
//               >
//                 Send general application
//               </Button>
//             </div>
//           </motion.div>
//         </div>
//       </section>
//     </main>
//   );
// }



"use client";

import { useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

gsap.registerPlugin(TextPlugin);

const benefits = [
  { title: "Competitive Salary", description: "Performance-based increments and bonuses." },
  { title: "Remote Friendly", description: "Flexible work options to match your lifestyle." },
  { title: "Learning Budget", description: "Yearly allowance for courses and conferences." },
  { title: "Health & Wellness", description: "Comprehensive medical coverage and programs." },
];

const jobs = [
  {
    id: 1,
    title: "Frontend Engineer",
    location: "Remote · India",
    type: "Full-time",
    level: "Mid-level",
    tags: ["React", "Next.js", "Tailwind"],
  },
  {
    id: 2,
    title: "AI Content Strategist",
    location: "Remote · Global",
    type: "Contract",
    level: "Senior",
    tags: ["GenAI", "SEO", "Content"],
  },
  {
    id: 3,
    title: "Full-Stack Developer",
    location: "Hybrid · Hyderabad",
    type: "Full-time",
    level: "Junior",
    tags: ["Next.js", "Node.js", "PostgreSQL"],
  },
];

type HeadingKey = "banner" | "whyWork" | "openRoles" | "noRole";

interface HeadingTexts {
  [key: string]: string[];
  banner: string[];
  whyWork: string[];
  openRoles: string[];
  noRole: string[];
}

const headingTexts: HeadingTexts = {
  banner: ["Build.", "Grow.", "Lead."],
  whyWork: ["Why work", "with us"],
  openRoles: ["Join the", "Globo Persona", "team"],
  noRole: ["No perfect", "role?"]
};

const headingKeys: HeadingKey[] = ["banner", "whyWork", "openRoles", "noRole"];

export default function CareerPage() {
  const headingRefs = useRef<(HTMLElement | null)[]>([]);

  const setRef = useCallback((index: number) => (el: HTMLElement | null) => {
    headingRefs.current[index] = el;
  }, []);

  useEffect(() => {
    headingRefs.current.forEach((ref, index) => {
      if (!ref) return;

      const texts = headingTexts[headingKeys[index]];
      const tl = gsap.timeline({ 
        repeat: -1, 
        repeatDelay: 1.5,
        defaults: { ease: "none" }
      });

      // Clean typing - no fade out
      texts.forEach((text: string, i: number) => {
        tl.to(ref, {
          duration: 0.6 + (text.length * 0.04),
          text: text,
        });
        
        // Pause between words (except last one)
        if (i < texts.length - 1) {
          tl.to(ref, {
            duration: 1.0,
            text: ""
          });
        }
      });
    });

    // Cleanup on unmount
    return () => {
      headingRefs.current.forEach(ref => {
        if (ref) {
          gsap.killTweensOf(ref);
        }
      });
    };
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#020617] to-[#0a0f1e]">
      {/* Banner - Dark Navy */}
      <section className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-20 md:flex-row md:items-center">
        <div className="flex-1 space-y-6">
          <h1 className="text-3xl font-semibold leading-tight sm:text-4xl md:text-6xl">
            <span className="block text-sky-400">Careers at GloboPersona</span>
            <span
              ref={setRef(0)}
              className="mt-3 inline-block min-h-[1.5em] border-b border-dotted border-sky-500 pb-1 align-middle bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent font-semibold"
            />
          </h1>

          <p className="max-w-xl text-sm text-slate-300 sm:text-base">
            Join a team that ships fast, experiments boldly, and designs digital experiences.
          </p>
        </div>
        <motion.div 
          initial={{ opacity: 0, x: 50 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8 }} 
          viewport={{ once: true }} 
          className="flex-1 relative h-96 rounded-2xl overflow-hidden md:h-[400px]"
        >
          <Image 
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            alt="Team working together at GloboPersona" 
            fill 
            className="object-cover"
            priority
          />
        </motion.div>
      </section>

      {/* Why work with us - Light BG + Highlighted cards */}
      <section className="bg-gradient-to-r from-slate-50/90 to-blue-50/80">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-16 md:flex-row">
          <div className="md:w-1/3 space-y-4">
            <h2 
              ref={setRef(1)}
              className="text-4xl font-bold text-slate-900 min-h-[100px] leading-tight bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent"
            >
              Why work with us
            </h2>
            <p className="text-lg text-slate-600">
              Craft meaningful products, grow with mentors, and enjoy a culture that respects focus time.
            </p>
          </div>
          <motion.div
            className="grid flex-1 gap-6 sm:grid-cols-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.1 }}
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                variants={{
                  hidden: { opacity: 0, y: 30, scale: 0.95 },
                  visible: { opacity: 1, y: 0, scale: 1 },
                }}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.4 }}
              >
                <Card className="h-full border-0 bg-white/70 shadow-xl backdrop-blur-sm hover:shadow-2xl hover:ring-2 hover:ring-blue-200/50">
                  <CardContent className="p-8">
                    <div className="mb-4 h-12 w-12 rounded-2xl bg-gradient-to-r from-blue-500 to-sky-500" />
                    <CardTitle className="mb-3 text-xl font-bold text-slate-900">{benefit.title}</CardTitle>
                    <CardDescription className="text-base text-slate-600">{benefit.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Current openings - Custom BG + White cards with black text */}
      <section className="bg-gradient-to-b from-indigo-900/20 via-slate-900/50 to-slate-950 border-t border-slate-800/50">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-12 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">Open roles</p>
              <h2 
                ref={setRef(2)}
                className="mt-2 text-4xl font-bold text-white min-h-[120px] leading-tight"
              >
                Join the Globo Persona team.
              </h2>
            </div>
            <p className="text-sm text-slate-300">
              Don't see a perfect fit? Send a general application with your portfolio.
            </p>
          </div>

          <div className="space-y-6">
            {jobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="group flex flex-col border-blue-500/20 bg-white shadow-2xl hover:border-blue-400/60 hover:shadow-3xl sm:flex-row sm:items-center sm:justify-between">
                  <CardHeader className="space-y-3 p-6 sm:basis-2/3">
                    <div className="flex items-center gap-3">
                      <Badge className="bg-emerald-500/90 text-xs font-bold text-emerald-950 shadow-md">Hiring</Badge>
                      <span className="text-sm font-medium text-slate-700">{job.type}</span>
                    </div>
                    <CardTitle className="text-xl font-bold text-slate-900 group-hover:text-blue-700">
                      {job.title}
                    </CardTitle>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-slate-600">
                      <span>{job.location}</span>
                      <span className="h-1 w-1 rounded-full bg-slate-400" />
                      <span>{job.level}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {job.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="border-slate-300 bg-slate-100/80 text-xs font-medium text-slate-700 hover:bg-slate-200"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardHeader>
                  <CardFooter className="flex items-center justify-end gap-3 border-t border-slate-200/50 p-6 sm:basis-1/3 sm:border-l sm:border-t-0 sm:px-8 sm:py-8">
                    <Button className="border-2 border-blue-600 bg-blue-600 px-6 py-2 text-sm font-bold text-white shadow-lg hover:border-blue-700 hover:bg-blue-700 hover:shadow-xl">
                      Apply now
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* General application */}
          <motion.div
            className="mt-16 rounded-2xl border-2 border-dashed border-blue-400/50 bg-white/20 backdrop-blur-xl p-8 text-white shadow-2xl"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
              <div>
                <p 
                  ref={setRef(3)}
                  className="text-lg font-bold text-white min-h-[80px] leading-tight"
                >
                  No perfect role? Pitch your own.
                </p>
                <p className="text-sm text-slate-200">
                  Share what you'd like to build at Globo Persona and how you think you can help.
                </p>
              </div>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white/60 bg-white/10 backdrop-blur-sm text-sm font-bold text-white hover:border-white hover:bg-white/20"
              >
                Send general application
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
