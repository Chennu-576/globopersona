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


'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Briefcase,
  MapPin,
  Clock,
  Heart,
  Zap,
  Users,
  TrendingUp,
  Award,
  Coffee,
  Laptop,
} from 'lucide-react';

const benefits = [
  {
    icon: Heart,
    title: 'Health & Wellness',
    description: 'Comprehensive health insurance and wellness programs',
  },
  {
    icon: TrendingUp,
    title: 'Career Growth',
    description: 'Continuous learning opportunities and clear career paths',
  },
  {
    icon: Coffee,
    title: 'Work-Life Balance',
    description: 'Flexible hours and generous paid time off',
  },
  {
    icon: Laptop,
    title: 'Remote Work',
    description: 'Hybrid or fully remote work options available',
  },
  {
    icon: Users,
    title: 'Great Team',
    description: 'Collaborative culture with talented professionals',
  },
  {
    icon: Award,
    title: 'Competitive Pay',
    description: 'Industry-leading salary and performance bonuses',
  },
];

const openings = [
  {
    title: 'Senior Full Stack Developer',
    department: 'Engineering',
    location: 'New York, NY / Remote',
    type: 'Full-time',
    description: 'Join our engineering team to build scalable applications using modern technologies.',
  },
  {
    title: 'Cloud Solutions Architect',
    department: 'Cloud Services',
    location: 'San Francisco, CA',
    type: 'Full-time',
    description: 'Design and implement cloud infrastructure solutions for enterprise clients.',
  },
  {
    title: 'Data Scientist',
    department: 'Data Analytics',
    location: 'Remote',
    type: 'Full-time',
    description: 'Analyze complex datasets and develop machine learning models for business insights.',
  },
  {
    title: 'UX/UI Designer',
    department: 'Design',
    location: 'London, UK',
    type: 'Full-time',
    description: 'Create beautiful, intuitive interfaces that delight users and drive engagement.',
  },
  {
    title: 'Cybersecurity Specialist',
    department: 'Security',
    location: 'Remote',
    type: 'Full-time',
    description: 'Protect our clients digital assets with advanced security solutions and strategies.',
  },
  {
    title: 'Project Manager',
    department: 'Operations',
    location: 'Chicago, IL',
    type: 'Full-time',
    description: 'Lead cross-functional teams to deliver complex projects on time and within budget.',
  },
];

export default function Careers() {
  return (
    <div className="pt-20">
      <section className="relative py-24 bg-gradient-to-br from-[#244082] to-[#1b2a3d] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#fdc134] rounded-full opacity-5 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#fdc134] rounded-full opacity-5 blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="font-display font-bold text-5xl md:text-6xl text-white mb-6">
              Build Your Career With Us
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Join a team of talented professionals who are passionate about innovation and committed to making a difference.
            </p>
            <Button
              size="lg"
              className="bg-[#fdc134] hover:bg-[#f0b429] text-[#1b2a3d] font-semibold text-lg px-10 h-14"
            >
              View Open Positions
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[#fdc134] font-semibold text-sm uppercase tracking-wider">
              Why Globopersona
            </span>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-[#1b2a3d] mt-3 mb-4">
              Benefits & Perks
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We believe in taking care of our team so they can do their best work
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-2 border-gray-300 hover:border-[#244082] shadow-md hover:shadow-3xl transition-shadow duration-300 bg-white rounded-xl">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#244082] to-[#1b2a3d] flex items-center justify-center mb-4">
                      <benefit.icon className="w-6 h-6 text-[#fdc134]" />
                    </div>
                    <h3 className="font-display font-semibold text-xl text-[#1b2a3d] mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-gray-200 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[#fdc134] font-semibold text-sm uppercase tracking-wider">
              Open Positions
            </span>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-[#1b2a3d] mt-3 mb-4">
              Current Opportunities
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Explore our open roles and find the perfect fit for your skills and aspirations
            </p>
          </motion.div>

          <div className="space-y-6">
            {openings.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="border-2 border-gray-100 hover:border-[#244082] hover:shadow-lg transition-all group">
                  <CardContent className="p-8">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <h3 className="font-display font-semibold text-2xl text-[#1b2a3d] group-hover:text-[#244082] transition-colors">
                            {job.title}
                          </h3>
                          <Badge className="bg-[#fdc134] text-[#1b2a3d] hover:bg-[#f0b429]">
                            {job.type}
                          </Badge>
                        </div>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                          {job.description}
                        </p>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                          <div className="flex items-center gap-2">
                            <Briefcase className="w-4 h-4 text-[#244082]" />
                            {job.department}
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-[#244082]" />
                            {job.location}
                          </div>
                        </div>
                      </div>
                      <div className="flex-shrink-0">
                        <Button className="bg-[#244082] hover:bg-[#1b2a3d] text-white font-semibold px-8">
                          Apply Now
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-[#244082] to-[#1b2a3d] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#fdc134] rounded-full opacity-5 blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-6">
              Don't See a Perfect Fit?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <Button
              size="lg"
              className="bg-[#fdc134] hover:bg-[#f0b429] text-[#1b2a3d] font-semibold text-lg px-10 h-14"
            >
              Submit General Application
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
