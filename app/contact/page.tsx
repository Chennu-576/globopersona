// 'use client';

// import { motion } from 'framer-motion';
// import { useState } from 'react';
// import { Mail, Phone, MapPin, Send } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Textarea } from '@/components/ui/textarea';
// import { Card, CardContent } from '@/components/ui/card';

// const contactInfo = [
//   {
//     icon: Mail,
//     title: 'Email',
//     content: 'info@globopersona.com',
//     link: 'mailto:info@globopersona.com',
//   },
//   {
//     icon: Phone,
//     title: 'Phone',
//     content: '+1 (555) 123-4567',
//     link: 'tel:+15551234567',
//   },
//   {
//     icon: MapPin,
//     title: 'Address',
//     content: '123 Business Ave, Tech City, TC 12345',
//     link: '#',
//   },
// ];

// export default function Contact() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     company: '',
//     phone: '',
//     message: '',
//   });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log('Form submitted:', formData);
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   return (
//     <div className="pt-20">
//       <section className="relative hero-gradient py-20 overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-br from-[#244082]" />

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
//                 Get in Touch
//               </span>
//             </motion.div>
//             <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
//               Let's Start a <span className="text-[#fdc134]">Conversation</span>
//             </h1>
//             <p className="text-xl text-gray-300 max-w-3xl mx-auto">
//               Have a question or ready to transform your business? We're here to help. Reach out to discuss your project.
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       <section className="py-20 bg-[#1a2f42]">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid lg:grid-cols-3 gap-8 mb-16">
//             {contactInfo.map((info, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.1 }}
//               >
//                 <Card className="bg-[#244082] border-none card-hover">
//                   <CardContent className="p-8 text-center">
//                     <div className="w-16 h-16 bg-[#fdc134]/20 rounded-full flex items-center justify-center mx-auto mb-4">
//                       <info.icon className="w-8 h-8 text-[#fdc134]" />
//                     </div>
//                     <h3 className="text-xl font-semibold text-white mb-2">{info.title}</h3>
//                     <a
//                       href={info.link}
//                       className="text-gray-300 hover:text-[#fdc134] transition-colors"
//                     >
//                       {info.content}
//                     </a>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             ))}
//           </div>

//           <div className="grid lg:grid-cols-2 gap-12">
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//             >
//               <h2 className="text-4xl font-bold text-white mb-6">
//                 Send us a <span className="text-[#fdc134]">Message</span>
//               </h2>
//               <p className="text-gray-300 mb-8">
//                 Fill out the form below and our team will get back to you within 24 hours.
//               </p>

//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <div className="grid md:grid-cols-2 gap-6">
//                   <div>
//                     <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
//                       Full Name *
//                     </label>
//                     <Input
//                       id="name"
//                       name="name"
//                       type="text"
//                       required
//                       value={formData.name}
//                       onChange={handleChange}
//                       className="bg-[#244082] border-[#244082] text-white placeholder:text-gray-500"
//                       placeholder="John Doe"
//                     />
//                   </div>
//                   <div>
//                     <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
//                       Email Address *
//                     </label>
//                     <Input
//                       id="email"
//                       name="email"
//                       type="email"
//                       required
//                       value={formData.email}
//                       onChange={handleChange}
//                       className="bg-[#244082] border-[#244082] text-white placeholder:text-gray-500"
//                       placeholder="john@example.com"
//                     />
//                   </div>
//                 </div>

//                 <div className="grid md:grid-cols-2 gap-6">
//                   <div>
//                     <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
//                       Company
//                     </label>
//                     <Input
//                       id="company"
//                       name="company"
//                       type="text"
//                       value={formData.company}
//                       onChange={handleChange}
//                       className="bg-[#244082] border-[#244082] text-white placeholder:text-gray-500"
//                       placeholder="Your Company"
//                     />
//                   </div>
//                   <div>
//                     <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
//                       Phone Number
//                     </label>
//                     <Input
//                       id="phone"
//                       name="phone"
//                       type="tel"
//                       value={formData.phone}
//                       onChange={handleChange}
//                       className="bg-[#244082] border-[#244082] text-white placeholder:text-gray-500"
//                       placeholder="+1 (555) 123-4567"
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
//                     Message *
//                   </label>
//                   <Textarea
//                     id="message"
//                     name="message"
//                     required
//                     value={formData.message}
//                     onChange={handleChange}
//                     className="bg-[#244082] border-[#244082] text-white placeholder:text-gray-500 min-h-[150px]"
//                     placeholder="Tell us about your project..."
//                   />
//                 </div>

//                 <Button
//                   type="submit"
//                   size="lg"
//                   className="w-full bg-[#fdc134] text-[#213b52] hover:bg-[#fdc134]/90 font-semibold"
//                 >
//                   Send Message
//                   <Send className="ml-2 w-5 h-5" />
//                 </Button>
//               </form>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               className="lg:pl-8"
//             >
//               <h2 className="text-4xl font-bold text-white mb-6">
//                 Why Choose <span className="text-[#fdc134]">GloboPersona</span>?
//               </h2>
//               <div className="space-y-6">
//                 <div className="flex items-start space-x-4">
//                   <div className="w-2 h-2 bg-[#fdc134] rounded-full mt-2 flex-shrink-0" />
//                   <div>
//                     <h3 className="text-xl font-semibold text-white mb-2">Expert Team</h3>
//                     <p className="text-gray-300">
//                       Our team of seasoned professionals brings decades of combined experience in technology and business transformation.
//                     </p>
//                   </div>
//                 </div>
//                 <div className="flex items-start space-x-4">
//                   <div className="w-2 h-2 bg-[#fdc134] rounded-full mt-2 flex-shrink-0" />
//                   <div>
//                     <h3 className="text-xl font-semibold text-white mb-2">Proven Track Record</h3>
//                     <p className="text-gray-300">
//                       With 500+ successful projects and a 98% client satisfaction rate, we deliver results that matter.
//                     </p>
//                   </div>
//                 </div>
//                 <div className="flex items-start space-x-4">
//                   <div className="w-2 h-2 bg-[#fdc134] rounded-full mt-2 flex-shrink-0" />
//                   <div>
//                     <h3 className="text-xl font-semibold text-white mb-2">Tailored Solutions</h3>
//                     <p className="text-gray-300">
//                       We understand that every business is unique. Our solutions are customized to meet your specific needs and goals.
//                     </p>
//                   </div>
//                 </div>
//                 <div className="flex items-start space-x-4">
//                   <div className="w-2 h-2 bg-[#fdc134] rounded-full mt-2 flex-shrink-0" />
//                   <div>
//                     <h3 className="text-xl font-semibold text-white mb-2">24/7 Support</h3>
//                     <p className="text-gray-300">
//                       Our dedicated support team is available around the clock to ensure your success.
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               <Card className="bg-gradient-to-br from-[#244082] to-[#213b52] border-[#fdc134] mt-8">
//                 <CardContent className="p-8 text-center">
//                   <h3 className="text-2xl font-bold text-white mb-4">
//                     Quick Response Guarantee
//                   </h3>
//                   <p className="text-gray-300 mb-4">
//                     We respond to all inquiries within 24 hours during business days.
//                   </p>
//                   <div className="text-5xl font-bold text-[#fdc134]">24hrs</div>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }


"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  ArrowRight,
  Linkedin,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

gsap.registerPlugin(ScrollTrigger);

const container = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// GSAP letter-by-letter headings
const useGsapHeadings = () => {
  useEffect(() => {
    const headings = document.querySelectorAll(".gsap-heading");

    headings.forEach((heading) => {
      const el = heading as HTMLElement;
      const original = el.textContent || "";
      el.innerHTML = "";

      const wrapper = document.createElement("span");
      wrapper.style.display = "inline-block";
      wrapper.style.overflow = "hidden";
      el.appendChild(wrapper);

      original.split("").forEach((ch) => {
        const span = document.createElement("span");
        span.textContent = ch;
        span.style.display = "inline-block";
        span.style.transform = "translateY(110%)";
        span.style.opacity = "0";
        wrapper.appendChild(span);
      });

      gsap.to(wrapper.children, {
        y: "0%",
        opacity: 1,
        duration: 0.5,
        ease: "power3.out",
        stagger: 0.03,
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          once: true,
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);
};

export default function ContactPage() {
  useGsapHeadings();

  return (
    <div className="min-h-screen bg-[#020617] text-white relative overflow-hidden">
      {/* Ambient animated background */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <motion.div
          className="absolute -top-32 -left-24 h-72 w-72 rounded-full bg-[#244082]/40 blur-3xl"
          animate={{ x: [0, 30, -20, 0], y: [0, 10, -15, 0] }}
          transition={{
            duration: 18,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-[-140px] right-[-80px] h-80 w-80 rounded-full bg-cyan-500/30 blur-3xl"
          animate={{ x: [0, -25, 15, 0], y: [0, -10, 20, 0] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        />
      </motion.div>

      {/* Banner */}
      <section className="relative border-b border-white/5">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_#244082_0,_transparent_55%)] opacity-70" />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-4 py-20 sm:px-6 lg:flex-row lg:items-center lg:gap-12">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="flex-1 space-y-5"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-200">
              Contact Globo Persona
            </p>
            <h1 className="gsap-heading text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              Let&apos;s build your next{" "}
              <span className="text-[#57a5ff]">persona‑driven experience</span>.
            </h1>
            <p className="max-w-xl text-sm text-blue-100 sm:text-base">
              Share a bit about your product, team, or campaign. The team will
              get back within one business day with next steps.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs text-blue-200 sm:text-sm">
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-950/40 px-3 py-1">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                Typically replies in under 24 hours
              </div>
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-950/40 px-3 py-1">
                <span className="h-2 w-2 rounded-full bg-cyan-400" />
                Product, marketing & CX teams welcome
              </div>
            </div>
          </motion.div>

          {/* Contact quick info card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.6, delay: 0.1 },
            }}
            className="mt-6 w-full max-w-md flex-1 lg:mt-0"
          >
            <Card className="border-blue-500/30 bg-white/5 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-lg">Talk to a human</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm text-blue-100">
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-cyan-400" />
                  <span>hello@globopersona.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-cyan-400" />
                  <span>+91‑98765‑43210</span>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 text-cyan-400" />
                  <span>
                    Hyderabad · Remote‑first team across India &amp; beyond.
                  </span>
                </div>
                <Separator className="border-blue-900/70" />
                <div className="flex flex-wrap gap-3 text-xs">
                  <Button
                    variant="outline"
                    size="icon"
                    className="border-blue-400/60 bg-transparent text-blue-100 hover:bg-blue-900/60"
                  >
                    <Linkedin className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="border-emerald-400/60 bg-transparent text-emerald-100 hover:bg-emerald-900/60"
                  >
                    <MessageCircle className="h-4 w-4" />
                  </Button>
                  <span className="text-[11px] text-blue-200">
                    Prefer async? Drop a note, not a calendar link.
                  </span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Contact form + details */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          {/* Form */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="rounded-2xl border border-blue-500/30 bg-blue-950/40 p-6 shadow-[0_18px_45px_rgba(15,23,42,0.9)] backdrop-blur"
          >
            <h2 className="gsap-heading text-xl font-semibold sm:text-2xl">
              Tell us about your project.
            </h2>
            <p className="mt-2 text-xs text-blue-100 sm:text-sm">
              A few quick details help route your message to the right squad.
            </p>

            <form className="mt-6 space-y-5">
              <div className="grid gap-4 sm:grid-cols-2">
                <motion.div whileHover={{ scale: 1.01 }}>
                  <label className="text-xs text-blue-200">
                    Name<span className="text-red-400">*</span>
                  </label>
                  <Input
                    required
                    placeholder="Your name"
                    className="mt-1 border-blue-500/40 bg-blue-950/60 text-sm placeholder:text-blue-400 focus-visible:ring-blue-400"
                  />
                </motion.div>
                <motion.div whileHover={{ scale: 1.01 }}>
                  <label className="text-xs text-blue-200">
                    Work email<span className="text-red-400">*</span>
                  </label>
                  <Input
                    required
                    type="email"
                    placeholder="you@company.com"
                    className="mt-1 border-blue-500/40 bg-blue-950/60 text-sm placeholder:text-blue-400 focus-visible:ring-blue-400"
                  />
                </motion.div>
              </div>

              <motion.div whileHover={{ scale: 1.01 }}>
                <label className="text-xs text-blue-200">Company / Brand</label>
                <Input
                  placeholder="Company or product name"
                  className="mt-1 border-blue-500/40 bg-blue-950/60 text-sm placeholder:text-blue-400 focus-visible:ring-blue-400"
                />
              </motion.div>

              <motion.div whileHover={{ scale: 1.01 }}>
                <label className="text-xs text-blue-200">
                  What do you want to work on?
                </label>
                <Textarea
                  rows={4}
                  placeholder="Discovery research, persona system, campaign strategy, product launch..."
                  className="mt-1 border-blue-500/40 bg-blue-950/60 text-sm placeholder:text-blue-400 focus-visible:ring-blue-400"
                />
              </motion.div>

              <div className="grid gap-4 sm:grid-cols-2">
                <motion.div whileHover={{ scale: 1.01 }}>
                  <label className="text-xs text-blue-200">Budget range</label>
                  <Input
                    placeholder="e.g. ₹2L – ₹5L"
                    className="mt-1 border-blue-500/40 bg-blue-950/60 text-sm placeholder:text-blue-400 focus-visible:ring-blue-400"
                  />
                </motion.div>
                <motion.div whileHover={{ scale: 1.01 }}>
                  <label className="text-xs text-blue-200">
                    Timeline / launch date
                  </label>
                  <Input
                    placeholder="e.g. Q1 2026"
                    className="mt-1 border-blue-500/40 bg-blue-950/60 text-sm placeholder:text-blue-400 focus-visible:ring-blue-400"
                  />
                </motion.div>
              </div>

              <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
                <div className="text-[11px] text-blue-300">
                  By submitting, you agree to be contacted about Globo Persona
                  services. No spam, ever.
                </div>
                <motion.button
                  type="submit"
                  whileHover={{
                    scale: 1.03,
                    boxShadow: "0 0 25px rgba(56,189,248,0.7)",
                  }}
                  whileTap={{ scale: 0.96 }}
                  className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 px-5 py-2.5 text-xs font-semibold text-white"
                >
                  Send message
                  <Send className="h-4 w-4" />
                </motion.button>
              </div>
            </form>
          </motion.div>

          {/* Side details / mini FAQ */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-6"
          >
            <h3 className="gsap-heading text-lg font-semibold">
              How Globo Persona can help.
            </h3>
            <p className="text-sm text-blue-100">
              Whether you&apos;re validating a new market, rethinking messaging,
              or building a persona hub for your GTM team, the crew can plug in
              at strategy or execution level.
            </p>

            <div className="space-y-4 text-sm text-blue-100">
              <div className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-cyan-400" />
                <p>
                  Persona systems for product, growth, and lifecycle teams that
                  actually get used.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
                <p>
                  Research‑backed messaging playbooks, not just pretty decks.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-violet-400" />
                <p>
                  Integrations with your existing stack: CRM, analytics, and
                  AI‑content workflows.
                </p>
              </div>
            </div>

            <Separator className="border-blue-900/70" />

            <div className="rounded-xl border border-blue-500/30 bg-blue-950/40 p-4 text-xs text-blue-100">
              <p className="font-semibold text-blue-50">
                Just want to say hi or collaborate?
              </p>
              <p className="mt-1">
                Drop a short note with links to your work, product, or channel.
                Collaborations with agencies, studios, and creators are welcome.
              </p>
              <Button
                variant="outline"
                className="mt-3 border-blue-400/60 bg-transparent text-xs text-blue-100 hover:bg-blue-900/60"
              >
                Email the team
                <ArrowRight className="ml-1.5 h-3 w-3" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

