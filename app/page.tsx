

// 'use client'
// import { motion, useInView, useMotionValueEvent } from 'framer-motion'
// import { useRef, useState } from 'react'
// import { Button } from '@/components/ui/button'
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
// import { Badge } from '@/components/ui/badge'
// import { ArrowRight, Play, Smartphone, Code, Palette, Megaphone, Bot, Zap, Mail } from 'lucide-react'

// const services = [
//   { title: 'App Development', icon: Smartphone, desc: 'User-friendly mobile apps', color: 'from-emerald-500 to-green-600', href: '/services/app-development' },
//   { title: 'Web Development', icon: Code, desc: 'High-performance websites', color: 'from-blue-500 to-indigo-600', href: '/services/web-development' },
//   { title: 'Graphic Design', icon: Palette, desc: 'Memorable brand identity', color: 'from-purple-500 to-pink-600', href: '/services/graphic-design' },
//   { title: 'Digital Marketing', icon: Megaphone, desc: 'Boost online presence', color: 'from-orange-500 to-red-600', href: '/services/digital-marketing' },
//   { title: 'Custom Chatbots', icon: Bot, desc: 'Instant customer support', color: 'from-cyan-500 to-blue-600', href: '/services/chatbots' },
//   { title: 'Automations', icon: Zap, desc: 'Streamline workflows', color: 'from-yellow-500 to-amber-600', href: '/services/automations' },
// ]

// export default function Home() {
//   const ref = useRef(null)
//   const isInView = useInView(ref, { once: true, amount: 0.3 })

//   return (
//     <div className="min-h-screen">
//       {/* Hero Section */}
//       <section className="relative h-screen flex items-center justify-center overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent animate-pulse opacity-20" />
        
//         <motion.div 
//           ref={ref}
//           initial="hidden"
//           animate={isInView ? "visible" : "hidden"}
//           variants={{
//             visible: { transition: { staggerChildren: 0.2 } },
//             hidden: { transition: { staggerChildren: 0.2 } }
//           }}
//           className="text-center text-white max-w-4xl mx-auto px-4 z-10 relative"
//         >
//           <motion.div variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}>
//             <Badge className="bg-white/20 backdrop-blur-sm mb-6">HIGHLY RANKED FOR CUSTOMER SATISFACTION</Badge>
//             <h1 className="text-7xl md:text-8xl font-black leading-tight mb-8 drop-shadow-2xl">
//               Globo<span className="text-accent">Persona</span>
//             </h1>
//             <p className="text-2xl md:text-3xl font-light mb-12 max-w-2xl mx-auto leading-relaxed">
//               World-class digital marketing solutions under one roof
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <Button size="lg" className="text-xl px-12 py-8 bg-white text-slate-900 hover:bg-slate-100 shadow-2xl">
//                 Start Your Project <ArrowRight className="ml-2 h-6 w-6" />
//               </Button>
//               <Button variant="outline" size="lg" className="text-xl px-12 py-8 border-white/50 backdrop-blur-sm">
//                 Watch Demo <Play className="ml-2 h-6 w-6" />
//               </Button>
//             </div>
//           </motion.div>
//         </motion.div>

//         {/* Floating Elements */}
//         <motion.div 
//           animate={{ 
//             y: [0, -30, 0], 
//             rotate: [0, 10, -10, 0] 
//           }}
//           transition={{ duration: 8, repeat: Infinity }}
//           className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-xl"
//         />
//         <motion.div 
//           animate={{ y: [0, 30, 0] }}
//           transition={{ duration: 10, repeat: Infinity }}
//           className="absolute bottom-20 right-20 w-48 h-48 bg-accent/20 rounded-full blur-2xl"
//         />
//       </section>

//       {/* Features Section */}
//       <section className="py-32 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div 
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center mb-24"
//           >
//             <h2 className="text-5xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mb-6">
//               Why Choose Us?
//             </h2>
//             <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
//               Excellence meets affordability in every project we deliver
//             </p>
//           </motion.div>

//           <div className="grid md:grid-cols-3 gap-8">
//             {services.map((service, index) => (
//               <motion.div
//                 key={service.title}
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: index * 0.1 }}
//                 whileHover={{ y: -10, scale: 1.02 }}
//                 className="group"
//               >
//                 <Card className="h-full border-0 shadow-xl hover:shadow-2xl bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-700 overflow-hidden border-t-4 border-[service.color]">
//                   <CardHeader className="pb-4">
//                     <div className={`p-4 rounded-2xl bg-gradient-to-r ${service.color} w-fit mb-4`}>
//                       <service.icon className="h-12 w-12 text-white" />
//                     </div>
//                     <CardTitle className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-primary">
//                       {service.title}
//                     </CardTitle>
//                   </CardHeader>
//                   <CardContent>
//                     <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">{service.desc}</p>
//                     <Button 
//                       variant="outline" 
//                       className="w-full group-hover:translate-x-2 transition-all duration-300"
//                     >
//                       Read More <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
//                     </Button>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-32 bg-gradient-to-r from-primary to-secondary text-white">
//         <div className="max-w-4xl mx-auto text-center px-4">
//           <motion.h2 
//             initial={{ scale: 0.9, opacity: 0 }}
//             whileInView={{ scale: 1, opacity: 1 }}
//             className="text-5xl md:text-6xl font-black mb-8"
//           >
//             Ready to Transform Your Digital Presence?
//           </motion.h2>
//           <motion.p 
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ delay: 0.2 }}
//             className="text-2xl mb-12 opacity-90"
//           >
//             Contact us today for world-class solutions at budget-friendly prices
//           </motion.p>
//           <Button size="lg" className="text-xl px-16 py-8 bg-white text-primary hover:bg-slate-100 shadow-2xl">
//             Get Free Consultation
//           </Button>
//         </div>
//       </section>
//     </div>
//   )
// }

// "use client";

// import { motion } from "framer-motion";

// const blue = "#174081"; // main brand blue from logo

// const fadeUp = {
//   hidden: { opacity: 0, y: 24 },
//   show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
// };

// const stagger = {
//   hidden: {},
//   show: {
//     transition: {
//       staggerChildren: 0.15,
//     },
//   },
// };

// export default function HomePage() {
//   return (
//     <main className="min-h-screen bg-slate-950 text-slate-50">
//       {/* background */}
//       <div className="pointer-events-none fixed inset-0 -z-10">
//         <div className="absolute -top-32 left-0 h-80 w-80 rounded-full bg-[rgba(23,64,129,0.45)] blur-3xl" />
//         <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[rgba(23,64,129,0.25)] blur-3xl" />
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.06),transparent_55%)]" />
//       </div>

//       <div className="mx-auto flex max-w-6xl flex-col gap-20 px-4 py-10 md:px-6 md:py-16">

//         {/* HERO SECTION – similar flow to bird hero */}
//         <section className="grid gap-10 md:grid-cols-[1.2fr,1fr] md:items-center">
//           <motion.div
//             variants={stagger}
//             initial="hidden"
//             animate="show"
//             className="space-y-6"
//           >
//             <motion.p
//               variants={fadeUp}
//               className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-[11px] font-medium text-slate-200"
//             >
//               <span className="h-1.5 w-1.5 rounded-full bg-[rgba(255,255,255,0.8)]" />
//               Highly ranked for customer satisfaction
//             </motion.p>

//             <motion.h1
//               variants={fadeUp}
//               className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl"
//             >
//               Full‑funnel digital marketing{" "}
//               <span className="block text-[color:var(--brand-blue)] text-[32px] sm:text-[40px] lg:text-[48px]">
//                 that actually moves the numbers.
//               </span>
//             </motion.h1>

//             <motion.p
//               variants={fadeUp}
//               className="max-w-xl text-sm leading-relaxed text-slate-200/80"
//             >
//               Globo Persona is your premier destination for complete digital
//               marketing, web and app development, automation, and custom
//               solutions that turn every client touchpoint into a growth
//               opportunity.[web:2]
//             </motion.p>

//             <motion.div
//               variants={fadeUp}
//               className="flex flex-wrap items-center gap-4"
//             >
//               <button className="rounded-full bg-[color:var(--brand-blue)] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[rgba(23,64,129,0.45)] transition hover:-translate-y-0.5 hover:bg-[#122f5d]">
//                 Start a Project
//               </button>
//               <button className="text-sm font-semibold text-slate-50 underline-offset-4 hover:underline">
//                 View Our Services
//               </button>
//             </motion.div>

//             <motion.div
//               variants={fadeUp}
//               className="flex flex-wrap gap-6 text-[11px] text-slate-300/80"
//             >
//               <div className="flex items-center gap-2">
//                 <span className="h-1.5 w-8 rounded-full bg-[rgba(23,64,129,0.7)]" />
//                 <span>World‑class yet cost‑effective campaigns.[web:2]</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <span className="h-1.5 w-8 rounded-full bg-[rgba(148,163,184,0.8)]" />
//                 <span>Complete digital solutions under one roof.[web:2]</span>
//               </div>
//             </motion.div>
//           </motion.div>

//           {/* animated stats / features card */}
//           <motion.div
//             initial={{ opacity: 0, x: 40 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ delay: 0.2, duration: 0.6 }}
//             className="relative"
//           >
//             <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/70 p-5 shadow-xl backdrop-blur">
//               <div className="mb-4 flex items-center justify-between text-[11px] text-slate-300/80">
//                 <span>Essential components of Globo Persona</span>
//                 <span className="rounded-full bg-[rgba(23,64,129,0.15)] px-2 py-0.5 text-[10px] text-sky-100">
//                   Strategy · Experience · Technology
//                 </span>
//               </div>
//               <div className="grid gap-3 text-[11px] md:grid-cols-2">
//                 {[
//                   "Targeted audience reach",
//                   "Cost efficiency",
//                   "Trackable performance",
//                   "Interactive engagement",
//                   "Multi‑platform presence",
//                   "Marketing automation",
//                   "Flexibility & adaptability",
//                   "Global outreach",
//                   "Enhanced user experience",
//                   "Social influence",
//                   "Data security & compliance",
//                   "Content strategy",
//                 ].map((item, i) => (
//                   <motion.div
//                     key={item}
//                     whileHover={{ y: -4, scale: 1.02 }}
//                     transition={{ type: "spring", stiffness: 260, damping: 20 }}
//                     className="flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-900/70 px-3 py-2"
//                   >
//                     <span
//                       className="h-1.5 w-1.5 rounded-full"
//                       style={{
//                         backgroundColor:
//                           i % 3 === 0 ? blue : "rgba(148,163,184,0.9)",
//                       }}
//                     />
//                     <span className="text-slate-100/90">{item}</span>
//                   </motion.div>
//                 ))}
//               </div>
//             </div>
//           </motion.div>
//         </section>

//         {/* ABOUT – short story, like Bird “leading agency” section */}
//         <section className="space-y-6">
//           <motion.div
//             variants={stagger}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true, amount: 0.35 }}
//             className="space-y-3"
//           >
//             <motion.p
//               variants={fadeUp}
//               className="text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-300/80"
//             >
//               About Globo Persona
//             </motion.p>
//             <motion.h2
//               variants={fadeUp}
//               className="text-2xl font-semibold tracking-tight md:text-3xl"
//             >
//               A full‑service partner for brands that want measurable digital
//               growth.
//             </motion.h2>
//             <motion.p
//               variants={fadeUp}
//               className="max-w-3xl text-sm leading-relaxed text-slate-200/85"
//             >
//               Welcome to Globo Persona, your premier destination for
//               comprehensive digital marketing solutions.[web:2] The team blends
//               culture, craft, and technical excellence to understand your
//               customers, design experiences that resonate, and deploy technology
//               that delivers results.[web:2]
//             </motion.p>
//           </motion.div>

//           <div className="grid gap-4 md:grid-cols-3">
//             {[
//               {
//                 title: "Strategy‑driven",
//                 desc: "Every engagement starts with clear goals, audiences, and measurement so campaigns stay aligned with revenue.",
//               },
//               {
//                 title: "Experience‑focused",
//                 desc: "From content to UX, every touchpoint is designed to feel consistent, on‑brand, and conversion‑ready.",
//               },
//               {
//                 title: "Tech‑powered",
//                 desc: "Modern stacks, automation, and analytics keep your growth engine fast, scalable, and transparent.",
//               },
//             ].map((card) => (
//               <motion.div
//                 key={card.title}
//                 initial={{ opacity: 0, y: 18 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, amount: 0.3 }}
//                 transition={{ duration: 0.4 }}
//                 className="group rounded-2xl border border-slate-800 bg-slate-900/70 p-5 shadow-sm transition hover:-translate-y-1 hover:border-[rgba(23,64,129,0.8)] hover:shadow-xl"
//               >
//                 <div className="mb-3 h-7 w-7 rounded-full bg-[rgba(23,64,129,0.18)] text-center text-sm font-semibold text-sky-100">
//                   <span className="inline-block translate-y-1">
//                     {card.title[0]}
//                   </span>
//                 </div>
//                 <h3 className="text-sm font-semibold">{card.title}</h3>
//                 <p className="mt-2 text-[11px] leading-relaxed text-slate-300/85">
//                   {card.desc}
//                 </p>
//               </motion.div>
//             ))}
//           </div>
//         </section>

//         {/* SERVICES – similar flow to Bird “Expert Digital Marketing Services” */}
//         <section className="space-y-8">
//           <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
//             <div>
//               <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-300/80">
//                 Our Services
//               </p>
//               <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
//                 Expert digital marketing & development services.
//               </h2>
//             </div>
//             <p className="max-w-md text-[11px] text-slate-300/85">
//               In a competitive online world, your strategy, creative, and
//               technology must work together to create revenue‑driving client
//               experiences.[web:1][web:2]
//             </p>
//           </div>

//           <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
//             {[
//               {
//                 title: "App Development",
//                 desc: "Powerful, user‑friendly mobile apps that improve engagement, streamline processes, and keep your brand in your customer’s pocket.[web:2]",
//               },
//               {
//                 title: "Web Development",
//                 desc: "High‑performance, responsive websites that look premium, load fast, and convert visitors into loyal customers.[web:2]",
//               },
//               {
//                 title: "Digital Marketing",
//                 desc: "Data‑driven strategies across SEO, content, social, and paid channels to grow traffic and revenue.[web:2]",
//               },
//               {
//                 title: "Graphic Design & Branding",
//                 desc: "Memorable visual identities and assets that make your brand instantly recognisable wherever it appears.[web:2]",
//               },
//               {
//                 title: "Account‑Based Marketing",
//                 desc: "Personalised B2B campaigns for high‑value accounts, aligning sales and marketing to maximise ROI.[web:2]",
//               },
//               {
//                 title: "Email Marketing",
//                 desc: "Lifecycle journeys and campaigns that nurture leads, re‑engage customers, and drive repeat business.[web:2]",
//               },
//             ].map((svc, i) => (
//               <motion.article
//                 key={svc.title}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, amount: 0.3 }}
//                 transition={{ duration: 0.35, delay: i * 0.04 }}
//                 className="group flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/80 p-5 shadow-sm transition hover:-translate-y-1 hover:border-[rgba(23,64,129,0.85)] hover:shadow-xl"
//               >
//                 <div>
//                   <h3 className="text-sm font-semibold">{svc.title}</h3>
//                   <p className="mt-2 text-[11px] leading-relaxed text-slate-300/90">
//                     {svc.desc}
//                   </p>
//                 </div>
//                 <span className="mt-4 inline-flex text-[11px] font-semibold text-sky-100">
//                   View details →
//                 </span>
//               </motion.article>
//             ))}
//           </div>
//         </section>

//         {/* AUTOMATION / CUSTOM SOLUTIONS – like Bird extra sections */}
//         <section className="space-y-8">
//           <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
//             <div>
//               <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-300/80">
//                 Automation & Intelligence
//               </p>
//               <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
//                 Automate, personalise, and scale with confidence.
//               </h2>
//             </div>
//             <p className="max-w-md text-[11px] text-slate-300/85">
//               Automation is key to staying competitive and maximising
//               productivity, from repetitive tasks to complex workflows.[web:2]
//             </p>
//           </div>

//           <div className="grid gap-5 md:grid-cols-3">
//             {[
//               {
//                 title: "Custom Chatbots",
//                 desc: "Instant support on your site or app with bots that answer questions, qualify leads, and capture insights 24/7.[web:2]",
//               },
//               {
//                 title: "Marketing & Business Automations",
//                 desc: "Smart workflows across email, social, and lead management that save time and keep communication consistent.[web:2]",
//               },
//               {
//                 title: "Custom Mini Softwares",
//                 desc: "Bespoke plugins, widgets, and tooling to extend your website beyond off‑the‑shelf limitations.[web:2]",
//               },
//             ].map((item, i) => (
//               <motion.div
//                 key={item.title}
//                 initial={{ opacity: 0, y: 18 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, amount: 0.3 }}
//                 transition={{ duration: 0.35, delay: i * 0.04 }}
//                 className="relative overflow-hidden rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900/80 via-slate-900/60 to-[rgba(23,64,129,0.35)] p-5 shadow-md"
//               >
//                 <h3 className="text-sm font-semibold">{item.title}</h3>
//                 <p className="mt-2 text-[11px] leading-relaxed text-slate-100/90">
//                   {item.desc}
//                 </p>
//               </motion.div>
//             ))}
//           </div>
//         </section>

//         {/* WHY GLOBO PERSONA – bullet style like Bird “Leading Agency” */}
//         <section className="space-y-8">
//           <div>
//             <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-300/80">
//               Why Globo Persona
//             </p>
//             <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
//               A leading full‑service digital partner.
//             </h2>
//           </div>

//           <div className="grid gap-4 md:grid-cols-2">
//             {[
//               "Targeted audience reach and multi‑platform presence for stronger brand visibility.[web:2]",
//               "Cost‑efficient strategies with clear tracking, reporting, and measurable outcomes.[web:2]",
//               "Interactive experiences that keep users engaged across web, app, and campaigns.[web:2]",
//               "Marketing automation that reduces manual effort and increases consistency.[web:2]",
//               "Global outreach with localisation and content tailored to each audience.[web:2]",
//               "Data‑driven content strategy with security and compliance at the core.[web:2]",
//             ].map((point, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, y: 16 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, amount: 0.3 }}
//                 transition={{ duration: 0.3 }}
//                 className="flex gap-3 rounded-2xl border border-slate-800 bg-slate-900/80 p-4"
//               >
//                 <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-[rgba(23,64,129,0.95)]" />
//                 <p className="text-[11px] leading-relaxed text-slate-200/90">
//                   {point}
//                 </p>
//               </motion.div>
//             ))}
//           </div>
//         </section>

//         {/* FAQ – short accordions like Bird’s “questions” */}
//         <section className="space-y-6">
//           <div>
//             <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-300/80">
//               Frequently Asked Questions
//             </p>
//             <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
//               Answers for fast‑moving teams.
//             </h2>
//           </div>

//           <div className="space-y-3">
//             {[
//               {
//                 q: "What services does Globo Persona offer?",
//                 a: "Globo Persona offers app development, web development, digital marketing, marketing automation, custom chatbots, email campaigns, and more to enhance your online presence and drive growth.[web:2]",
//               },
//               {
//                 q: "How do your development services help my business?",
//                 a: "User‑friendly, feature‑rich apps and responsive, SEO‑optimised websites improve engagement, streamline processes, and support your business goals.[web:2]",
//               },
//               {
//                 q: "How do you handle marketing automation?",
//                 a: "Advanced tools automate email, social media, and lead generation while personalising communication based on customer behaviour.[web:2]",
//               },
//               {
//                 q: "Can you build custom chatbots for my use cases?",
//                 a: "Yes. Chatbots are tailored to your workflows to provide instant responses, handle routine tasks, and collect valuable customer insights.[web:2]",
//               },
//             ].map((item) => (
//               <details
//                 key={item.q}
//                 className="group rounded-2xl border border-slate-800 bg-slate-900/80 p-4"
//               >
//                 <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold">
//                   {item.q}
//                   <span className="text-xs text-slate-400 group-open:hidden">
//                     +
//                   </span>
//                   <span className="hidden text-xs text-slate-400 group-open:block">
//                     −
//                   </span>
//                 </summary>
//                 <p className="mt-2 text-[11px] leading-relaxed text-slate-300/90">
//                   {item.a}
//                 </p>
//               </details>
//             ))}
//           </div>
//         </section>

//         {/* FINAL CTA – like Bird “Wanna get in touch? Let’s talk” */}
//         <section className="rounded-3xl border border-slate-800 bg-slate-900/80 px-5 py-8 shadow-xl">
//           <div className="grid gap-8 md:grid-cols-[1.2fr,0.9fr] md:items-center">
//             <div className="space-y-3">
//               <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-300/80">
//                 Let&apos;s talk
//               </p>
//               <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
//                 Wanna get in touch? Let&apos;s plan your next digital win.
//               </h2>
//               <p className="text-[11px] leading-relaxed text-slate-300/90">
//                 Connect with the team to discuss your goals, budgets, and
//                 timelines. Expect clear communication, rapid responses, and
//                 solutions focused on real business outcomes.[web:2]
//               </p>
//               <div className="mt-4 flex flex-wrap gap-4 text-[11px] text-slate-200/90">
//                 <div>
//                   <p className="font-semibold text-slate-50">Address</p>
//                   <p>
//                     H.N‑6 48/2, 2nd Floor, South Portion, Buddha Nagar,
//                     Peerzadiguda, Hyderabad, TS 500039[web:2]
//                   </p>
//                 </div>
//                 <div>
//                   <p className="font-semibold text-slate-50">Email</p>
//                   <p>info@globopersona.com</p>
//                   <p>hr@globopersona.com[web:2]</p>
//                 </div>
//                 <div>
//                   <p className="font-semibold text-slate-50">Call</p>
//                   <p>+91 7382330530[web:2]</p>
//                 </div>
//               </div>
//             </div>

//             <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-5">
//               <form className="space-y-3 text-[11px]">
//                 <div>
//                   <label className="mb-1 block font-medium text-slate-200/90">
//                     Name
//                   </label>
//                   <input
//                     className="h-9 w-full rounded-md border border-slate-700 bg-slate-900 px-3 text-[11px] text-slate-50 placeholder:text-slate-500 outline-none focus:border-sky-400"
//                     placeholder="Your full name"
//                   />
//                 </div>
//                 <div>
//                   <label className="mb-1 block font-medium text-slate-200/90">
//                     Work email
//                   </label>
//                   <input
//                     type="email"
//                     className="h-9 w-full rounded-md border border-slate-700 bg-slate-900 px-3 text-[11px] text-slate-50 placeholder:text-slate-500 outline-none focus:border-sky-400"
//                     placeholder="you@company.com"
//                   />
//                 </div>
//                 <div>
//                   <label className="mb-1 block font-medium text-slate-200/90">
//                     Project details
//                   </label>
//                   <textarea
//                     rows={3}
//                     className="w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-[11px] text-slate-50 placeholder:text-slate-500 outline-none focus:border-sky-400"
//                     placeholder="Tell us about your goals, services needed, and timelines."
//                   />
//                 </div>
//                 <button
//                   type="submit"
//                   className="mt-2 w-full rounded-full bg-[color:var(--brand-blue)] px-4 py-2 text-[11px] font-semibold text-white shadow-lg shadow-[rgba(23,64,129,0.45)] transition hover:bg-[#122f5d]"
//                 >
//                   Get a cost‑effective proposal
//                 </button>
//               </form>
//             </div>
//           </div>
//         </section>
//       </div>

//       {/* CSS variable for main blue */}
//       <style jsx global>{`
//         :root {
//           --brand-blue: ${blue};
//         }
//       `}</style>
//     </main>
//   );
// }


// "use client";

// import { motion, Variants } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import {
//   Rocket,
//   Globe2,
//   LineChart,
//   Smartphone,
//   Brush,
//   Workflow,
//   Bot,
//   MailCheck,
//   ShieldCheck,
//   Users,
// } from "lucide-react";

// const brandBlue = "#174081";
// const accent = "#38bdf8";

// // TS-safe variants (no string ease)
// const fadeInUp: Variants = {
//   hidden: { opacity: 0, y: 32 },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
//   },
// };

// const fadeIn: Variants = {
//   hidden: { opacity: 0 },
//   show: {
//     opacity: 1,
//     transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
//   },
// };

// const stagger: Variants = {
//   hidden: {},
//   show: {
//     transition: { staggerChildren: 0.15, delayChildren: 0.05 },
//   },
// };

// export default function HomePage() {
//   return (
//     <main className="min-h-screen bg-slate-950 text-slate-50">
//       {/* Background */}
//       <motion.div
//         initial="hidden"
//         animate="show"
//         variants={fadeIn}
//         className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
//       >
//         <div className="absolute -top-40 left-[-8rem] h-96 w-96 rounded-full bg-[rgba(23,64,129,0.6)] blur-3xl" />
//         <div className="absolute right-[-6rem] top-20 h-80 w-80 rounded-full bg-[rgba(56,189,248,0.3)] blur-3xl" />
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.06),transparent_55%)]" />
//       </motion.div>

//       <div className="mx-auto flex max-w-6xl flex-col gap-20 px-4 py-10 md:px-6 md:py-16">
//         {/* 1. HERO – split panel, headline + stats */}
//         <section className="grid gap-10 md:grid-cols-[1.4fr,1fr] md:items-center">
//           <motion.div
//             variants={stagger}
//             initial="hidden"
//             animate="show"
//             className="space-y-7"
//           >
//             <motion.div
//               variants={fadeInUp}
//               className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-[11px] font-medium text-slate-200"
//             >
//               <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[rgba(56,189,248,0.2)] text-[10px] text-sky-100">
//                 <Rocket className="h-3 w-3" />
//               </span>
//               Highly ranked for customer satisfaction · World‑class yet
//               cost‑effective
//             </motion.div>

//             <motion.h1
//               variants={fadeInUp}
//               className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl"
//             >
//               Complete digital marketing,
//               <span className="block bg-gradient-to-r from-[color:var(--brand-blue)] via-[color:var(--accent)] to-white bg-clip-text text-transparent">
//                 perfectly matched to your clients.
//               </span>
//             </motion.h1>

//             <motion.p
//               variants={fadeInUp}
//               className="max-w-xl text-sm leading-relaxed text-slate-200/85"
//             >
//               GloboPersona is your premier destination for comprehensive digital
//               marketing solutions—bringing strategy, design, development, and
//               automation together to turn visitors into loyal customers.[web:2]
//             </motion.p>

//             <motion.div
//               variants={fadeInUp}
//               className="flex flex-wrap items-center gap-4"
//             >
//               <Button
//                 size="lg"
//                 className="rounded-full bg-[color:var(--brand-blue)] px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[rgba(23,64,129,0.45)] transition hover:-translate-y-0.5 hover:bg-[#122f5d]"
//               >
//                 Start a project
//               </Button>
//               <Button
//                 variant="outline"
//                 size="lg"
//                 className="rounded-full border-slate-600 bg-transparent px-6 py-2.5 text-sm font-semibold text-slate-100 hover:border-[color:var(--accent)] hover:bg-slate-900/60"
//               >
//                 View our services
//               </Button>
//             </motion.div>

//             <motion.div
//               variants={fadeInUp}
//               className="flex flex-wrap gap-6 text-[11px] text-slate-300/85"
//             >
//               <div className="flex items-center gap-2">
//                 <Users className="h-3.5 w-3.5 text-[color:var(--accent)]" />
//                 <span>
//                   Customer‑first culture with measurable impact on satisfaction
//                   and retention.[web:2]
//                 </span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <LineChart className="h-3.5 w-3.5 text-emerald-300" />
//                 <span>
//                   Data‑driven campaigns that track every click, visit, and
//                   conversion.
//                 </span>
//               </div>
//             </motion.div>
//           </motion.div>

//           {/* Hero side: animated “feature grid” */}
//           <motion.div
//             variants={fadeIn}
//             initial="hidden"
//             animate="show"
//             className="relative"
//           >
//             <motion.div
//               layout
//               className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/70 p-5 shadow-xl backdrop-blur"
//             >
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
//                 className="mb-4 flex items-center justify-between text-[11px] text-slate-300/85"
//               >
//                 <span className="inline-flex items-center gap-2">
//                   <Globe2 className="h-4 w-4 text-[color:var(--accent)]" />
//                   Essential components of GloboPersona
//                 </span>
//                 <span className="rounded-full bg-[rgba(23,64,129,0.2)] px-2 py-0.5 text-[10px] text-sky-100">
//                   Target · Engage · Automate
//                 </span>
//               </motion.div>

//               <motion.div
//                 variants={stagger}
//                 initial="hidden"
//                 animate="show"
//                 className="grid gap-3 text-[11px] md:grid-cols-2"
//               >
//                 {[
//                   "Targeted audience reach",
//                   "Cost efficiency",
//                   "Trackable performance",
//                   "Interactive engagement",
//                   "Multi‑platform presence",
//                   "Marketing automation",
//                   "Flexibility & adaptability",
//                   "Global outreach",
//                   "Enhanced user experience",
//                   "Social influence",
//                   "Data security & compliance",
//                   "Content strategy",
//                 ].map((item, i) => (
//                   <motion.div
//                     key={item}
//                     variants={fadeInUp}
//                     whileHover={{ y: -4, scale: 1.02 }}
//                     transition={{
//                       type: "spring",
//                       stiffness: 260,
//                       damping: 20,
//                     }}
//                     className="flex items-center gap-2 rounded-xl border border-slate-800/80 bg-slate-900/80 px-3 py-2"
//                   >
//                     <span
//                       className="h-1.5 w-1.5 rounded-full"
//                       style={{
//                         background:
//                           i % 2 === 0
//                             ? "conic-gradient(from_90deg,_var(--brand-blue),var(--accent))"
//                             : "rgba(148,163,184,0.9)",
//                       }}
//                     />
//                     <span className="text-slate-100/90">{item}</span>
//                   </motion.div>
//                 ))}
//               </motion.div>
//             </motion.div>
//           </motion.div>
//         </section>

//         {/* 2. ABOUT – split text + timeline style list */}
//         <section className="grid gap-10 md:grid-cols-[1.4fr,1fr] md:items-start">
//           <motion.div
//             variants={stagger}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true, amount: 0.35 }}
//             className="space-y-4"
//           >
//             <motion.p
//               variants={fadeInUp}
//               className="text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-300/80"
//             >
//               About us
//             </motion.p>
//             <motion.h2
//               variants={fadeInUp}
//               className="text-2xl font-semibold tracking-tight md:text-3xl"
//             >
//               Complete digital marketing solutions under one roof.
//             </motion.h2>
//             <motion.p
//               variants={fadeInUp}
//               className="text-sm leading-relaxed text-slate-200/85"
//             >
//               Welcome to GloboPersona, your premier destination for
//               comprehensive digital marketing solutions.[web:2] From strategy
//               and creative to development and automation, every step is aligned
//               to your business goals and your clients’ expectations.
//             </motion.p>

//             <motion.div
//               variants={fadeInUp}
//               className="grid gap-3 text-[11px] text-slate-300/90 md:grid-cols-2"
//             >
//               <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
//                 <p className="font-semibold text-slate-50">
//                   Highly ranked for customer satisfaction
//                 </p>
//                 <p className="mt-2">
//                   A customer‑first culture that focuses on clarity, support, and
//                   long‑term partnerships.[web:2]
//                 </p>
//               </div>
//               <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
//                 <p className="font-semibold text-slate-50">
//                   World‑class yet cost‑effective
//                 </p>
//                 <p className="mt-2">
//                   Enterprise‑grade delivery without enterprise pricing—designed
//                   to be lean, transparent, and ROI‑driven.[web:2]
//                 </p>
//               </div>
//             </motion.div>
//           </motion.div>

//           {/* Mini timeline */}
//           <motion.ol
//             variants={stagger}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true, amount: 0.4 }}
//             className="space-y-4 border-l border-slate-800 pl-4 text-[11px]"
//           >
//             {[
//               {
//                 title: "Understand needs",
//                 desc: "Every journey begins with deeply understanding your business, audience, and challenges.[web:2]",
//               },
//               {
//                 title: "Craft experiences",
//                 desc: "Collaborative strategy and design to create experiences that resonate and convert.[web:2]",
//               },
//               {
//                 title: "Leverage technology",
//                 desc: "Use modern stacks, automation, and analytics to scale what works.[web:2]",
//               },
//             ].map((step, i) => (
//               <motion.li
//                 key={step.title}
//                 variants={fadeInUp}
//                 className="relative pl-4"
//               >
//                 <span className="absolute -left-[9px] top-1 h-2 w-2 rounded-full bg-[color:var(--accent)]" />
//                 <p className="font-semibold text-slate-100">{step.title}</p>
//                 <p className="mt-1 text-slate-300/90">{step.desc}</p>
//               </motion.li>
//             ))}
//           </motion.ol>
//         </section>

//         {/* 3. SERVICES – grid cards, each with different icon */}
//         <section className="space-y-8">
//           <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
//             <div>
//               <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-300/80">
//                 Our services
//               </p>
//               <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
//                 From idea to execution, across every channel.
//               </h2>
//             </div>
//             <p className="max-w-md text-[11px] text-slate-300/85">
//               GloboPersona offers app & web development, digital marketing, ABM,
//               automation, custom chatbots, mini‑software, and email marketing to
//               elevate your brand and drive growth.[web:2]
//             </p>
//           </div>

//           <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
//             {[
//               {
//                 title: "App Development",
//                 icon: Smartphone,
//                 desc: "Powerful, user‑friendly apps that increase engagement and act as a direct channel to your customers.",
//               },
//               {
//                 title: "Web Development",
//                 icon: Globe2,
//                 desc: "High‑performance, visually appealing websites that convert visitors into loyal customers.",
//               },
//               {
//                 title: "Digital Marketing",
//                 icon: LineChart,
//                 desc: "SEO, paid, and content strategies that grow traffic and revenue across multiple channels.",
//               },
//               {
//                 title: "Graphic Design & Branding",
//                 icon: Brush,
//                 desc: "Visual identities and assets that make your brand instantly recognisable and memorable.",
//               },
//               {
//                 title: "Account‑Based Marketing",
//                 icon: Workflow,
//                 desc: "Target and win high‑value B2B accounts with personalised, aligned sales and marketing campaigns.",
//               },
//               {
//                 title: "Email Marketing",
//                 icon: MailCheck,
//                 desc: "Lifecycle campaigns and newsletters that nurture leads, re‑engage customers, and boost retention.",
//               },
//             ].map((svc, i) => {
//               const Icon = svc.icon;
//               return (
//                 <motion.article
//                   key={svc.title}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true, amount: 0.3 }}
//                   transition={{ duration: 0.4, delay: i * 0.04 }}
//                   className="group flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/80 p-5 shadow-sm transition hover:-translate-y-1.5 hover:border-[rgba(56,189,248,0.9)] hover:shadow-2xl"
//                 >
//                   <div className="flex items-center gap-3">
//                     <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[rgba(23,64,129,0.2)] text-sky-100">
//                       <Icon className="h-4.5 w-4.5" />
//                     </div>
//                     <h3 className="text-sm font-semibold">{svc.title}</h3>
//                   </div>
//                   <p className="mt-2 text-[11px] leading-relaxed text-slate-300/90">
//                     {svc.desc}
//                   </p>
//                   <div className="mt-4 flex items-center justify-between">
//                     <span className="text-[11px] font-semibold text-sky-100">
//                       Learn more →
//                     </span>
//                     <span className="h-6 w-6 rounded-full border border-slate-700 bg-slate-900/80 text-center text-xs text-slate-300">
//                       {String(i + 1).padStart(2, "0")}
//                     </span>
//                   </div>
//                 </motion.article>
//               );
//             })}
//           </div>
//         </section>

//         {/* 4. FEATURES – horizontal scroll “pills” + two highlight cards */}
//         <section className="space-y-6">
//           <motion.div
//             variants={stagger}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true, amount: 0.35 }}
//             className="space-y-3"
//           >
//             <motion.p
//               variants={fadeInUp}
//               className="text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-300/80"
//             >
//               Features
//             </motion.p>
//             <motion.h2
//               variants={fadeInUp}
//               className="text-2xl font-semibold tracking-tight md:text-3xl"
//             >
//               The modern engine behind your digital growth.
//             </motion.h2>
//             <motion.p
//               variants={fadeInUp}
//               className="max-w-2xl text-sm leading-relaxed text-slate-200/85"
//             >
//               From cost‑effective strategies and multi‑channel outreach to
//               enhanced experiences and strict data security, GloboPersona gives
//               you every component needed to thrive online.[web:2]
//             </motion.p>
//           </motion.div>

//           <motion.div
//             variants={fadeIn}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true, amount: 0.3 }}
//             className="flex gap-3 overflow-x-auto pb-2 text-[11px]"
//           >
//             {[
//               "Targeted audience reach",
//               "Cost efficiency",
//               "Trackable performance",
//               "Interactive engagement",
//               "Multi‑platform presence",
//               "Marketing automation",
//               "Flexibility & adaptability",
//               "Global outreach",
//               "Enhanced user experience",
//               "Social influence",
//               "Data security & compliance",
//               "Content strategy",
//             ].map((tag) => (
//               <motion.div
//                 key={tag}
//                 whileHover={{ y: -4 }}
//                 className="whitespace-nowrap rounded-full border border-slate-800 bg-slate-900/80 px-4 py-2 text-slate-200/90"
//               >
//                 {tag}
//               </motion.div>
//             ))}
//           </motion.div>

//           <div className="grid gap-4 md:grid-cols-2">
//             <motion.div
//               initial={{ opacity: 0, y: 18 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, amount: 0.3 }}
//               transition={{ duration: 0.4 }}
//               className="flex items-start gap-3 rounded-2xl border border-slate-800 bg-slate-900/80 p-4 text-[11px]"
//             >
//               <LineChart className="mt-1 h-4 w-4 text-emerald-300" />
//               <div>
//                 <p className="font-semibold text-slate-50">
//                   Trackable, ROI‑driven performance
//                 </p>
//                 <p className="mt-1 text-slate-300/90">
//                   Dashboards and analytics keep every campaign measurable, so
//                   you can double‑down on what works and refine what does not.
//                 </p>
//               </div>
//             </motion.div>
//             <motion.div
//               initial={{ opacity: 0, y: 18 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, amount: 0.3 }}
//               transition={{ duration: 0.4 }}
//               className="flex items-start gap-3 rounded-2xl border border-slate-800 bg-slate-900/80 p-4 text-[11px]"
//             >
//               <ShieldCheck className="mt-1 h-4 w-4 text-sky-300" />
//               <div>
//                 <p className="font-semibold text-slate-50">
//                   Security & compliance built‑in
//                 </p>
//                 <p className="mt-1 text-slate-300/90">
//                   Data security and compliance are treated as core design
//                   requirements, not afterthoughts, across campaigns and
//                   platforms.[web:2]
//                 </p>
//               </div>
//             </motion.div>
//           </div>
//         </section>

//         {/* 5. FAQ – accordions */}
//         <section className="space-y-6">
//           <div>
//             <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-300/80">
//               Frequently asked questions
//             </p>
//             <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
//               Everything you need to know before we start.
//             </h2>
//           </div>

//           <div className="space-y-3">
//             {[
//               {
//                 q: "What services does GloboPersona offer?",
//                 a: "GloboPersona delivers app development, web development, digital marketing, marketing automation, custom chatbots, and email campaign management to strengthen your digital presence and drive growth.[web:2]",
//               },
//               {
//                 q: "How can your app development help my business?",
//                 a: "By creating custom mobile apps that improve customer engagement, streamline processes, and provide a direct communication channel with your audience across devices.[web:2]",
//               },
//               {
//                 q: "What makes your web development different?",
//                 a: "Websites are built to be responsive, visually appealing, and highly functional, with strong SEO foundations and smooth integration with other digital tools.[web:2]",
//               },
//               {
//                 q: "How do you implement marketing automation?",
//                 a: "Advanced tools automate email campaigns, social media posting, and lead generation, while personalising journeys based on customer behaviour.[web:2]",
//               },
//               {
//                 q: "Can you build custom chatbots?",
//                 a: "Yes. Chatbots are tailored to your business, providing instant responses, handling routine tasks, and capturing valuable customer insights.[web:2]",
//               },
//             ].map((item) => (
//               <details
//                 key={item.q}
//                 className="group rounded-2xl border border-slate-800 bg-slate-900/80 p-4"
//               >
//                 <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold">
//                   {item.q}
//                   <span className="text-xs text-slate-400 group-open:hidden">
//                     +
//                   </span>
//                   <span className="hidden text-xs text-slate-400 group-open:block">
//                     −
//                   </span>
//                 </summary>
//                 <p className="mt-2 text-[11px] leading-relaxed text-slate-300/90">
//                   {item.a}
//                 </p>
//               </details>
//             ))}
//           </div>
//         </section>

//         {/* 6. CONTACT – strong CTA panel like Bird “Wanna get in touch” */}
//         <section className="grid gap-10 md:grid-cols-[1.2fr,1fr] md:items-center">
//           <motion.div
//             variants={stagger}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true, amount: 0.35 }}
//             className="space-y-4 rounded-3xl border border-slate-800 bg-slate-900/80 px-5 py-7 shadow-xl"
//           >
//             <motion.p
//               variants={fadeInUp}
//               className="text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-300/80"
//             >
//               Contact us
//             </motion.p>
//             <motion.h2
//               variants={fadeInUp}
//               className="text-2xl font-semibold tracking-tight md:text-3xl"
//             >
//               Wanna get in touch? Let&apos;s talk.
//             </motion.h2>
//             <motion.p
//               variants={fadeInUp}
//               className="text-[11px] leading-relaxed text-slate-300/90"
//             >
//               Connect with our team today and let&apos;s collaborate to elevate
//               your online presence and drive measurable results.[web:2] Share
//               your goals and we&apos;ll come back quickly with a clear,
//               cost‑effective plan.
//             </motion.p>

//             <motion.div
//               variants={fadeInUp}
//               className="mt-4 grid gap-4 text-[11px] text-slate-200/90 md:grid-cols-2"
//             >
//               <div>
//                 <p className="font-semibold text-slate-50">Address</p>
//                 <p>
//                   H.N‑6 48/2, 2nd Floor, South Portion, Buddha Nagar,
//                   Peerzadiguda, Hyderabad, TS 500039[web:2]
//                 </p>
//               </div>
//               <div>
//                 <p className="font-semibold text-slate-50">Email</p>
//                 <p>info@globopersona.com</p>
//                 <p>hr@globopersona.com[web:2]</p>
//                 <p className="mt-2 font-semibold text-slate-50">Call</p>
//                 <p>+91 7382330530[web:2]</p>
//               </div>
//             </motion.div>
//           </motion.div>

//           {/* Form */}
//           <motion.div
//             variants={fadeInUp}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true, amount: 0.4 }}
//             className="rounded-3xl border border-slate-800 bg-slate-950/80 px-5 py-6 shadow-xl"
//           >
//             <div className="mb-4 flex items-center gap-2 text-[11px] font-semibold text-slate-200">
//               <Rocket className="h-4 w-4 text-[color:var(--accent)]" />
//               Start a project with GloboPersona
//             </div>
//             <form className="space-y-3 text-[11px]">
//               <div>
//                 <label className="mb-1 block font-medium text-slate-200/90">
//                   Name
//                 </label>
//                 <input
//                   className="h-9 w-full rounded-md border border-slate-700 bg-slate-900 px-3 text-[11px] text-slate-50 placeholder:text-slate-500 outline-none focus:border-[color:var(--accent)]"
//                   placeholder="Your full name"
//                 />
//               </div>
//               <div>
//                 <label className="mb-1 block font-medium text-slate-200/90">
//                   Work email
//                 </label>
//                 <input
//                   type="email"
//                   className="h-9 w-full rounded-md border border-slate-700 bg-slate-900 px-3 text-[11px] text-slate-50 placeholder:text-slate-500 outline-none focus:border-[color:var(--accent)]"
//                   placeholder="you@company.com"
//                 />
//               </div>
//               <div>
//                 <label className="mb-1 block font-medium text-slate-200/90">
//                   Project details
//                 </label>
//                 <textarea
//                   rows={3}
//                   className="w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-[11px] text-slate-50 placeholder:text-slate-500 outline-none focus:border-[color:var(--accent)]"
//                   placeholder="Tell us about your goals, services needed, and timelines."
//                 />
//               </div>
//               <Button
//                 type="submit"
//                 className="mt-2 w-full rounded-full bg-[color:var(--brand-blue)] text-[11px] font-semibold text-white shadow-lg shadow-[rgba(23,64,129,0.45)] hover:bg-[#122f5d]"
//               >
//                 Get a cost‑effective proposal
//               </Button>
//             </form>
//           </motion.div>
//         </section>
//       </div>

//       {/* Brand colours */}
//       <style jsx global>{`
//         :root {
//           --brand-blue: ${brandBlue};
//           --accent: ${accent};
//         }
//       `}</style>
//     </main>
//   );
// }



// "use client";

// import { motion, Variants, useScroll, useTransform } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import {
//   Rocket,
//   Users,
//   LineChart,
//   Smartphone,
//   Globe2,
//   Brush,
//   Workflow,
//   Bot,
//   MailCheck,
//   ShieldCheck,
// } from "lucide-react";

// const darkBlue = "#244082,";
// const accent = "#38bdf8";

// // Variants (TS-safe)
// const fadeUp: Variants = {
//   hidden: { opacity: 0, y: 32 },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
//   },
// };

// const fadeIn: Variants = {
//   hidden: { opacity: 0 },
//   show: {
//     opacity: 1,
//     transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
//   },
// };

// const stagger: Variants = {
//   hidden: {},
//   show: {
//     transition: { staggerChildren: 0.15, delayChildren: 0.05 },
//   },
// };

// const aboutTabs = [
//   {
//     key: "satisfaction",
//     label: "Customer Satisfaction",
//     title: "Highly ranked for customer satisfaction",
//     body: "Our commitment to customer satisfaction is at the core of everything we do. Engagements are built around clear outcomes, transparency, and long‑term support.",
//   },
//   {
//     key: "cost",
//     label: "Cost‑Effective",
//     title: "World‑class yet cost‑effective",
//     body: "Excellence without the enterprise price tag. Solutions are designed to be lean, efficient, and focused on maximising your return on investment.",
//   },
//   {
//     key: "complete",
//     label: "All‑in‑One",
//     title: "Complete solutions under one roof",
//     body: "From strategy to design, development, automation, and email, Globo Persona brings every essential capability into a single, integrated partner.[web:2][web:43]",
//   },
//   {
//     key: "culture",
//     label: "Culture & Craft",
//     title: "Culture, craft, and technical excellence",
//     body: "Every journey begins with understanding your needs, crafting experiences that resonate with your audience, and leveraging modern technology to drive results.[web:2]",
//   },
// ];

// const featureItems = [
//   "Targeted Audience Reach",
//   "Cost Efficiency",
//   "Trackable Performance",
//   "Interactive Engagement",
//   "Multi‑Platform Presence",
//   "Marketing Automation",
//   "Flexibility & Adaptability",
//   "Global Outreach",
//   "Enhanced User Experience",
//   "Social Influence",
//   "Data Security & Compliance",
//   "Content Strategy",
// ];

// export default function HomePage() {
//   return (
//     <main className="min-h-screen bg-slate-950 text-slate-50">
//       {/* BACKGROUND */}
//       <motion.div
//         initial="hidden"
//         animate="show"
//         variants={fadeIn}
//         className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
//       >
//         <div className="absolute -top-40 left-[-8rem] h-96 w-96 rounded-full bg-[rgba(23,64,129,0.6)] blur-3xl" />
//         <div className="absolute right-[-6rem] top-24 h-80 w-80 rounded-full bg-[rgba(56,189,248,0.3)] blur-3xl" />
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.06),transparent_55%)]" />
//       </motion.div>

//       <div className="mx-auto flex max-w-6xl flex-col gap-20 px-4 py-10 md:px-6 md:py-16">
//         {/* 1. HERO / BANNER – polished simple split */}
//         <section className="relative grid gap-10 md:grid-cols-[1.4fr,1fr] md:items-center">
//           {/* left content */}
//           <motion.div
//             variants={stagger}
//             initial="hidden"
//             animate="show"
//             className="space-y-7"
//           >
//             <motion.p
//               variants={fadeUp}
//               className="text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-300/80"
//             >
//               Digital growth partner
//             </motion.p>

//             <motion.h1
//               variants={fadeUp}
//               className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl"
//             >
//               We Don&apos;t Run <span className="text-[#fdc134]">Ads.</span>
//               <br />
//               We Build <span className="text-[#244082]">Growth Engines.</span>
//             </motion.h1>

//             <motion.p
//               variants={fadeUp}
//               className="max-w-xl text-sm leading-relaxed text-slate-200/85"
//             >
//               Globo Persona crafts unique digital experiences that help your
//               business grow, stand out, and convert the right audiences across
//               the web.
//             </motion.p>

//             <motion.div
//               variants={fadeUp}
//               className="flex flex-wrap items-center gap-4"
//             >
//               {/* primary button with angled hover overlay */}
//               <button
//                 className="relative overflow-hidden rounded-full bg-[#244082] px-7 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[rgba(36,64,130,0.5)] transition-transform duration-200 hover:-translate-y-0.5"
//               >
//                 <span className="relative z-10">Connect With Us</span>
//                 <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-tr from-[#fdc134] via-[#244082] to-white opacity-80 transition-transform duration-300 ease-out hover:translate-x-0" />
//               </button>

//               {/* secondary outline button */}
//               <button
//                 className="rounded-full border border-slate-500 bg-transparent px-7 py-2.5 text-sm font-semibold text-slate-100 transition-colors duration-200 hover:border-[#244082] hover:bg-white/10"
//               >
//                 View our work
//               </button>
//             </motion.div>
//           </motion.div>

//          {/* right side globe – similar to reference */}
// <motion.div
//   variants={fadeIn}
//   initial="hidden"
//   animate="show"
//   className="relative flex items-center justify-center"
// >
//   <motion.div
//     className="relative h-64 w-64 md:h-80 md:w-80 rounded-full overflow-hidden"
//     animate={{ rotate: 360 }}
//     transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
//   >
//     {/* outer glow + rim */}
//     <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,#1e293b_0%,#020617_55%,#020617_100%)]" />
//     <div className="absolute inset-[1px] rounded-full border border-[rgba(56,189,248,0.7)] shadow-[0_0_70px_rgba(56,189,248,0.9)]" />

//     {/* dotted world silhouette */}
//     <div className="absolute inset-6 rounded-full overflow-hidden">
//       {/* blue dot field */}
//       <div className="h-full w-full bg-[radial-gradient(circle,#1d4ed8_1px,transparent_1px)] [background-size:4px_4px] opacity-90" />
//       {/* dark land mask at bottom half */}
//       <div className="absolute bottom-0 left-1/2 h-[70%] w-[140%] -translate-x-1/2 rounded-t-[999px] bg-gradient-to-t from-[#020617] via-[#020617] to-transparent" />
//     </div>

//     {/* subtle latitude/longitude glow */}
//     <div className="pointer-events-none absolute inset-x-6 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-[rgba(148,163,184,0.7)] to-transparent" />
//     <div className="pointer-events-none absolute inset-y-6 left-1/2 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[rgba(148,163,184,0.7)] to-transparent" />
//   </motion.div>
// </motion.div>
//  </section>

//         {/* 2. ABOUT – tabbed 4‑title interaction (unique layout) */}
//         <AboutSection />

//         {/* 3. SERVICES – parallax‑style horizontal stacked cards */}
//         {/* 3. SERVICES – stacked cards */}
//         <ServicesParallaxSection />


//         {/* 4. FEATURES – 12 small titles in a dense grid */}
//         <FeaturesSection />

//         {/* 5. FAQ – interaction like accordions */}
//         <FAQSection />

//         {/* 6. CTA – strong final panel */}
//         <CTASection />
//       </div>

//       <style jsx global>{`
//         :root {
//           --brand-blue: ${darkBlue};
//           --accent: ${accent};
//         }
//       `}</style>
//     </main>
//   );
// }

// /* -------------------- ABOUT SECTION -------------------- */


// function AboutSection() {
//   const [active, setActive] = React.useState<string>("satisfaction");
//   const current = aboutTabs.find((t) => t.key === active)!;

//   // simple icons per tab
//   const tabIcons: Record<string, React.ReactNode> = {
//     satisfaction: <Users className="h-3.5 w-3.5" />,
//     cost: <LineChart className="h-3.5 w-3.5" />,
//     complete: <Globe2 className="h-3.5 w-3.5" />,
//     culture: <Brush className="h-3.5 w-3.5" />,
//   };

//   return (
//     <section className="space-y-6">
//       <motion.div
//         variants={stagger}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: true, amount: 0.35 }}
//         className="space-y-3"
//       >
//         <motion.p
//           variants={fadeUp}
//           className="text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-300/80"
//         >
//           About Globo Persona
//         </motion.p>
//         <motion.h2
//           variants={fadeUp}
//           className="text-2xl font-semibold tracking-tight text-white md:text-3xl"
//         >
//           World‑class digital marketing, made accessible.
//         </motion.h2>
//         <motion.p
//           variants={fadeUp}
//           className="max-w-3xl text-sm leading-relaxed text-slate-200/85"
//         >
//           Welcome to GloboPersona, your premier destination for comprehensive
//           digital marketing solutions. Every engagement is grounded in
//           understanding your needs, your audience, and the outcomes that matter
//           most.[web:2]
//         </motion.p>
//       </motion.div>

//       <div className="grid gap-6 md:grid-cols-[0.9fr,1.3fr] md:items-stretch">
//         {/* LEFT: tabs list with icons */}
//         <motion.div
//           variants={fadeIn}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, amount: 0.4 }}
//           className="flex h-full flex-col gap-2 rounded-3xl border border-slate-800 bg-slate-900/80 p-3 text-[11px]"
//         >
//           {aboutTabs.map((tab) => (
//             <button
//               key={tab.key}
//               onClick={() => setActive(tab.key)}
//               className={`flex items-center justify-between rounded-2xl px-3 py-3 text-left transition ${
//                 active === tab.key
//                   ? "bg-[#244082] text-slate-50 shadow-sm"
//                   : "bg-slate-900/40 text-slate-300 hover:bg-slate-900"
//               }`}
//             >
//               <span className="flex items-center gap-2">
//                 <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-900/60 text-[rgba(248,250,252,0.9)]">
//                   {tabIcons[tab.key]}
//                 </span>
//                 {tab.label}
//               </span>
//               <span className="text-[10px] text-slate-400">
//                 {active === tab.key ? "●" : "○"}
//               </span>
//             </button>
//           ))}
//         </motion.div>

//         {/* RIGHT: detail card with white bg + blue text */}
// {/* RIGHT: detail card – dark bg, highlighted title */}
// <motion.div
//   key={current.key}
//   initial={{ opacity: 0, y: 18 }}
//   whileInView={{ opacity: 1, y: 0 }}
//   viewport={{ once: false, amount: 0.4 }}
//   transition={{ duration: 0.4 }}
//   className="flex h-full flex-col justify-center rounded-3xl border border-slate-800 bg-slate-900/90 p-6 shadow-[0_18px_45px_rgba(0,0,0,0.6)]"
// >
//   <h3 className="inline-flex items-center gap-2 rounded-full bg-[rgba(36,64,130,0.25)] px-5 py-2 text-sm font-semibold text-slate-50">
//     <span className="h-1.5 w-1.5 rounded-full bg-[#fdc134]" />
//     {current.title}
//   </h3>
//   <p className="mt-3 text-12px] leading-relaxed text-slate-200/90">
//     {current.body}
//   </p>
// </motion.div>


//       </div>
//     </section>
//   );
// }



// const gpServices = [
//   {
//     title: "App Development",
//     subtitle: "Engaging mobile experiences",
//     body:
//       "Custom mobile apps that improve customer engagement, streamline processes, and create a direct line to your audience across devices.[web:2]",
//     img: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800",
//   },
//   {
//     title: "Web Development",
//     subtitle: "High‑performance websites",
//     body:
//       "Responsive, visually appealing, SEO‑friendly websites that convert visitors into loyal customers.[web:2]",
//     img: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800",
//   },
//   {
//     title: "Graphic Design & Branding",
//     subtitle: "Memorable brand identity",
//     body:
//       "Logos, brand systems, and creative assets that keep your business instantly recognisable in any channel.[web:2]",
//     img: "https://images.pexels.com/photos/1939485/pexels-photo-1939485.jpeg?auto=compress&cs=tinysrgb&w=800",
//   },
//   {
//     title: "Digital Marketing",
//     subtitle: "Full‑funnel growth",
//     body:
//       "Integrated SEO, content, social, and paid programmes to grow traffic and revenue.[web:2][web:43]",
//     img: "https://images.pexels.com/photos/1559651/pexels-photo-1559651.jpeg?auto=compress&cs=tinysrgb&w=800",
//   },
//   {
//     title: "Account‑Based Marketing",
//     subtitle: "Win key accounts",
//     body:
//       "ABM strategies focused on high‑value B2B accounts with aligned sales and marketing.[web:2]",
//     img: "https://images.pexels.com/photos/1181468/pexels-photo-1181468.jpeg?auto=compress&cs=tinysrgb&w=800",
//   },
//   {
//     title: "Automations",
//     subtitle: "Always‑on workflows",
//     body:
//       "Custom automation solutions that remove repetitive work, reduce errors, and maximise productivity.[web:2][web:47]",
//     img: "https://images.pexels.com/photos/1181438/pexels-photo-1181438.jpeg?auto=compress&cs=tinysrgb&w=800",
//   },
//   {
//     title: "Custom Chatbots",
//     subtitle: "Instant support 24/7",
//     body:
//       "Chatbots tailored to your business that answer questions, qualify leads, and collect insights.[web:2][web:43]",
//     img: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800",
//   },
//   {
//     title: "Custom Mini Softwares",
//     subtitle: "Bespoke micro‑solutions",
//     body:
//       "Plugins, widgets, and lightweight apps that extend your website or existing stack.[web:2]",
//     img: "https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&w=800",
//   },
//   {
//     title: "Email Marketing",
//     subtitle: "Nurture & retain",
//     body:
//       "Targeted email campaigns and automation journeys that nurture leads and drive retention.[web:2][web:46]",
//     img: "https://images.pexels.com/photos/261949/pexels-photo-261949.jpeg?auto=compress&cs=tinysrgb&w=800",
//   },
// ];

// function ServicesParallaxSection() {
//   const sectionRef = React.useRef<HTMLDivElement | null>(null);

//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ["start start", "end end"],
//   });

//   return (
//     <section className="space-y-8">
//       <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
//         <div>
//           <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-300/80">
//             Our services
//           </p>
//           <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
//             9 services, stacked as you scroll.
//           </h2>
//         </div>
//         <p className="max-w-md text-[11px] text-slate-300/90">
//           Cards stay in place while the next one scrolls over it, creating a
//           layered vertical story of Globo Persona&apos;s capabilities.[web:1][web:2]
//         </p>
//       </div>

//       <div ref={sectionRef} className="relative h-[900vh]">
//         {gpServices.map((service, index) => (
//           <StickyServiceCard
//             key={service.title}
//             index={index}
//             total={gpServices.length}
//             service={service}
//             progress={scrollYProgress}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }

// type StickyServiceCardProps = {
//   index: number;
//   total: number;
//   service: (typeof gpServices)[number];
//   progress: any;
// };

// function StickyServiceCard({
//   index,
//   total,
//   service,
//   progress,
// }: StickyServiceCardProps) {
//   const step = 1 / total;
//   const start = index * step;
//   const end = start + step;

//   const targetScale = 0.9 + (index / total) * 0.08;
//   const scale = useTransform(progress, [start, end], [1, targetScale]);
//   const translateY = useTransform(
//     progress,
//     [start, end],
//     [index * 16, index * -8]
//   );

//   return (
//     <motion.div
//       style={{ scale, y: translateY }}
//       className="sticky top-16 mx-auto flex max-w-4xl justify-center"
//     >
//       <article className="grid h-[420px] w-full grid-cols-1 overflow-hidden rounded-3xl border border-slate-200 bg-white text-slate-900 shadow-xl md:h-[420px] md:grid-cols-[1.3fr,1fr]">
//         <div className="col-span-1 h-3 w-full rounded-t-3xl bg-[#244082] md:col-span-2" />

//         <div className="flex flex-col justify-between px-6 pb-6 pt-4">
//           <div>
//             <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#244082]">
//               {service.subtitle}
//             </p>
//             <h3 className="mt-1 text-lg font-semibold text-[#213b52]">
//               {service.title}
//             </h3>
//             <p className="mt-2 text-[11px] leading-relaxed text-slate-700">
//               {service.body}
//             </p>
//           </div>
//           <span className="mt-3 text-[11px] font-semibold text-[#244082]">
//             Learn more →
//           </span>
//         </div>

//         <div className="relative hidden overflow-hidden rounded-l-3xl rounded-tr-3xl bg-slate-100 md:block">
//           <motion.div
//             className="absolute inset-0 bg-cover bg-center"
//             style={{ backgroundImage: `url(${service.img})` }}
//             initial={{ scale: 1.15 }}
//             whileInView={{ scale: 1 }}
//             viewport={{ once: true, amount: 0.7 }}
//             transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
//           />
//         </div>
//       </article>
//     </motion.div>
//   );
// }

// /* -------------------- FEATURES -------------------- */

// function FeaturesSection() {
//   const [reverse, setReverse] = React.useState(false);

//   // every 60s direction flip
//   React.useEffect(() => {
//     const id = setInterval(() => setReverse((r) => !r), 60000);
//     return () => clearInterval(id);
//   }, []);

//   const featureCards = [
//     "Targeted Audience Reach",
//     "Cost Efficiency",
//     "Trackable Performance",
//     "Interactive Engagement",
//     "Multi‑Platform Presence",
//     "Marketing Automation",
//     "Flexibility & Adaptability",
//     "Global Outreach",
//     "Enhanced User Experience",
//     "Social Influence",
//     "Data Security & Compliance",
//     "Content Strategy",
//   ];

//   const topRow = featureCards.slice(0, 6);
//   const bottomRow = featureCards.slice(6, 12);
//   const allTop = topRow.concat(topRow);
//   const allBottom = bottomRow.concat(bottomRow);

//   const xFrom = reverse ? "-50%" : "0%";
//   const xTo = reverse ? "0%" : "-50%";

//   return (
//     <section className="py-14">
//       <div className="grid gap-10 md:grid-cols-2 md:items-start">
//         {/* LEFT 50% – text block */}
//         <div className="space-y-4">
//           <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-300/80">
//             Real‑world impact
//           </p>
//           <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
//             Client success stories built on strong features.
//           </h2>
//           <p className="max-w-md text-sm leading-relaxed text-slate-200/85">
//             See how organisations like yours transform operations and customer
//             experiences using Globo Persona&apos;s capabilities—from automation
//             and analytics to omni‑channel engagement.[web:2]
//           </p>

//           <button className="inline-flex items-center gap-2 rounded-full border border-slate-500 bg-transparent px-5 py-2 text-[11px] font-semibold text-slate-100 transition-colors duration-200 hover:border-[#244082] hover:bg-white/5">
//             Explore client stories
//             <span className="text-xs">↗</span>
//           </button>
//         </div>

//         {/* RIGHT 50% – scrolling feature cards */}
//         <div className="space-y-4">
//           {/* Top row */}
//           <div className="relative overflow-hidden rounded-2xl bg-[#020617] p-2">
//             <motion.div
//               className="flex w-max gap-4"
//               animate={{ x: [xFrom, xTo] }}
//               transition={{ duration: 30, ease: "linear", repeat: Infinity }}
//             >
//               {allTop.map((item, i) => (
//                 <div
//                   key={`top-${i}`}
//                   className="flex h-24 min-w-[220px] md:h-28 md:min-w-[260px] items-center rounded-2xl bg-[#244082] px-4 text-left text-slate-50 shadow-[0_18px_40px_rgba(0,0,0,0.7)]"
//                 >
//                   <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
//                     <span className="h-2 w-2 rounded-full bg-white" />
//                   </div>
//                   <p className="text-sm font-semibold leading-snug">
//                     {item}
//                   </p>
//                 </div>
//               ))}
//             </motion.div>
//           </div>

//           {/* Bottom row */}
//           <div className="relative overflow-hidden rounded-2xl bg-[#020617] p-2">
//             <motion.div
//               className="flex w-max gap-4"
//               animate={{ x: [xFrom, xTo] }}
//               transition={{ duration: 30, ease: "linear", repeat: Infinity }}
//             >
//               {allBottom.map((item, i) => (
//                 <div
//                   key={`bottom-${i}`}
//                   className="flex h-24 min-w-[220px] md:h-28 md:min-w-[260px] items-center rounded-2xl bg-[#244082] px-4 text-left text-slate-50 shadow-[0_18px_40px_rgba(0,0,0,0.7)]"
//                 >
//                   <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
//                     <span className="h-2 w-2 rounded-full bg-white" />
//                   </div>
//                   <p className="text-sm font-semibold leading-snug">
//                     {item}
//                   </p>
//                 </div>
//               ))}
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



// /* -------------------- FAQ -------------------- */

// const faqItems = [
//   {
//     q: "What services does Globo Persona offer?",
//     a: "Globo Persona offers app development, web development, marketing automation, custom chatbot development, email campaign management, and additional digital services to enhance your presence and drive growth.[web:2][web:43]",
//   },
//   {
//     q: "How do your app development services help?",
//     a: "Custom mobile apps improve engagement, streamline processes, and provide a platform for direct communication with your audience across devices.[web:2][web:43]",
//   },
//   {
//     q: "What makes your web development stand out?",
//     a: "Websites are responsive, visually appealing, and highly functional, with UX, SEO optimisation, and integrations designed to support business goals.[web:2][web:45]",
//   },
//   {
//     q: "How do you implement marketing automation?",
//     a: "Advanced software automates email campaigns, social media posting, and lead generation, enabling efficient, personalised communication at scale.[web:2][web:47]",
//   },
//   {
//     q: "Can you build custom chatbots?",
//     a: "Yes. Chatbots are tailored to your business needs, offering instant responses, handling routine tasks, and gathering valuable customer insights.[web:2][web:43]",
//   },
// ];

// function FAQSection() {
//   return (
//     <section className="space-y-6">
//       <div>
//         <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-300/80">
//           Frequently asked questions
//         </p>
//         <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
//           Clear answers before we get started.
//         </h2>
//       </div>

//       <div className="space-y-3">
//         {faqItems.map((item) => (
//           <details
//             key={item.q}
//             className="group rounded-2xl border border-slate-800 bg-slate-900/80 p-4"
//           >
//             <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold">
//               {item.q}
//               <span className="text-xs text-slate-400 group-open:hidden">
//                 +
//               </span>
//               <span className="hidden text-xs text-slate-400 group-open:block">
//                 −
//               </span>
//             </summary>
//             <p className="mt-2 text-[11px] leading-relaxed text-slate-300/90">
//               {item.a}
//             </p>
//           </details>
//         ))}
//       </div>
//     </section>
//   );
// }

// /* -------------------- CTA -------------------- */

// function CTASection() {
//   const tags = [
//     "Digital Marketing",
//     "Business Automation",
//     "AI Development",
//     "Performance Marketing",
//     "Account‑Based Marketing",
//     "Custom Chatbots",
//     "Web Development",
//     "App Development",
//     "Email Marketing",
//   ];

//   return (
//     <section className="py-10">
//       <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[40px] border border-[#1c2f63] bg-[#244082] p-10 shadow-[0_40px_120px_rgba(0,0,0,0.8)]">
//         {/* soft background lights */}
//         <div className="pointer-events-none absolute inset-0 opacity-70 mix-blend-screen">
//           <div className="absolute -left-10 top-0 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,#ffffff,transparent_60%)] blur-3xl" />
//           <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,#fdc134,transparent_60%)] blur-3xl" />
//         </div>

//         <div className="relative z-10 flex flex-col items-center gap-6 text-center text-white">
//           <div className="space-y-2">
//             <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-white/80">
//               Automate your growth
//             </p>
//             <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
//               Transform your business with{" "}
//               <span className="text-[#fdc134]">cutting‑edge solutions</span>.
//             </h2>
//             <p className="text-[11px] text-white/85">
//               Book a call today and start automating your marketing, sales, and
//               customer journeys with Globo Persona.
//             </p>
//           </div>

//           {/* horizontal scrolling tags */}
//           <div className="relative w-full overflow-hidden">
//             <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-[#244082] via-[#244082] to-transparent" />
//             <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-[#244082] via-[#244082] to-transparent" />

//             <div className="flex w-max animate-[scrollTags_20s_linear_infinite] gap-3">
//               {tags.concat(tags).map((tag, i) => (
//                 <div
//                   key={i}
//                   className="rounded-full border border-white/20 bg-black/35 px-4 py-1 text-[11px] text-slate-50 shadow-[0_8px_20px_rgba(0,0,0,0.6)]"
//                 >
//                   {tag}
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* primary CTA button */}
//           <button className="mt-2 rounded-full bg-white px-8 py-2.5 text-sm font-semibold text-[#244082] shadow-[0_18px_45px_rgba(0,0,0,0.6)] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-slate-100">
//             Book a free call
//           </button>
//         </div>
//       </div>

    

//       <style jsx>{`
//         @keyframes scrollTags {
//           0% {
//             transform: translateX(0);
//           }
//           100% {
//             transform: translateX(-50%);
//           }
//         }
//       `}</style>
//     </section>
//   );
// }


// /* to use React in this file */
// import * as React from "react";


// app/page.tsx
// 'use client'

// import { motion } from 'framer-motion'
// import { useState, useEffect } from 'react'
// import { 
//   ArrowRight, 
//   Sparkles, 
//   Shield, 
//   Zap, 
//   Code, 
//   Cloud, 
//   Database, 
//   Cpu, 
//   Settings, 
//   Building2, 
// CreditCard, 
//   Heart, 
//   Car, 
//   ShoppingBag, 
//   Factory, 
//   Users, 
//   Globe, 
//   Award, 
//   TrendingUp,
//   MessageSquare,
//   Calendar,
//   CheckCircle,
//   ChevronRight,
//   Star,
//   Clock,
//   Target,
//   BarChart3,
//   Lock,
//   Server
// } from 'lucide-react'

// export default function HomePage() {
//   const [stats, setStats] = useState([
//     { value: 0, target: 500, label: 'Happy Clients', suffix: '+', color: 'text-blue-500', icon: <Users /> },
//     { value: 0, target: 25, label: 'Countries Served', suffix: '+', color: 'text-green-500', icon: <Globe /> },
//     { value: 0, target: 98, label: 'Client Retention', suffix: '%', color: 'text-yellow-500', icon: <Award /> },
//     { value: 0, target: 47, label: 'Avg. ROI Increase', suffix: '%', color: 'text-cyan-500', icon: <TrendingUp /> },
//   ])

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setStats(prev => prev.map(stat => ({
//         ...stat,
//         value: stat.value < stat.target 
//           ? Math.min(stat.value + Math.ceil(stat.target / 50), stat.target)
//           : stat.target
//       })))
//     }, 30)

//     return () => clearInterval(interval)
//   }, [])

//   const services = [
//     {
//       icon: <Code className="w-6 h-6" />,
//       title: "Custom Software Development",
//       description: "Tailor-made applications built with cutting-edge frameworks and best practices.",
//       features: ["Web & Mobile Apps", "Enterprise Solutions", "API Development"],
//       gradient: "from-blue-500 to-cyan-500",
//       delay: 0.1
//     },
//     {
//       icon: <Cloud className="w-6 h-6" />,
//       title: "Cloud & DevOps",
//       description: "Scalable cloud infrastructure with automated CI/CD pipelines and monitoring.",
//       features: ["AWS/Azure/GCP", "Kubernetes", "24/7 Support"],
//       gradient: "from-purple-500 to-pink-500",
//       delay: 0.2
//     },
//     {
//       icon: <Shield className="w-6 h-6" />,
//       title: "Cybersecurity",
//       description: "End-to-end security solutions to protect your digital assets and data.",
//       features: ["Penetration Testing", "SOC Implementation", "Compliance"],
//       gradient: "from-green-500 to-emerald-500",
//       delay: 0.3
//     },
//     {
//       icon: <Database className="w-6 h-6" />,
//       title: "Data Analytics & AI",
//       description: "Transform raw data into actionable insights with AI-powered analytics.",
//       features: ["Predictive Analytics", "Machine Learning", "BI Dashboards"],
//       gradient: "from-orange-500 to-red-500",
//       delay: 0.4
//     },
//     {
//       icon: <Cpu className="w-6 h-6" />,
//       title: "IT Consulting",
//       description: "Strategic technology advisory to optimize your IT infrastructure and processes.",
//       features: ["Digital Transformation", "Tech Stack Audit", "Roadmap Planning"],
//       gradient: "from-indigo-500 to-purple-500",
//       delay: 0.5
//     },
//     {
//       icon: <Settings className="w-6 h-6" />,
//       title: "Managed Services",
//       description: "Proactive IT management to ensure maximum uptime and performance.",
//       features: ["24/7 Monitoring", "Incident Response", "Regular Updates"],
//       gradient: "from-cyan-500 to-blue-500",
//       delay: 0.6
//     }
//   ]

//   const industries = [
//     { icon: <Building2 />, name: "Enterprise", count: 150, color: "bg-blue-500" },
//     { icon: < CreditCard/>, name: "Finance & Banking", count: 89, color: "bg-green-500" },
//     { icon: <Heart />, name: "Healthcare", count: 67, color: "bg-red-500" },
//     { icon: <Car />, name: "Automotive", count: 42, color: "bg-orange-500" },
//     { icon: <ShoppingBag />, name: "Retail & E-commerce", count: 134, color: "bg-purple-500" },
//     { icon: <Factory />, name: "Manufacturing", count: 76, color: "bg-cyan-500" },
//   ]

//   const testimonials = [
//     {
//       name: "Michael Rodriguez",
//       role: "CTO at TechCorp",
//       content: "Their data-driven approach transformed our analytics pipeline. Efficiency increased by 65%.",
//       rating: 5,
//       delay: 0.1
//     },
//     {
//       name: "Sarah Chen",
//       role: "Director at HealthPlus",
//       content: "The cybersecurity implementation was seamless. Our compliance audit passed with flying colors.",
//       rating: 5,
//       delay: 0.2
//     },
//     {
//       name: "David Park",
//       role: "VP Operations at RetailPro",
//       content: "Cloud migration completed 2 weeks ahead of schedule with zero downtime. Outstanding work.",
//       rating: 5,
//       delay: 0.3
//     }
//   ]

//   return (
//     <main className="min-h-screen bg-gradient-to-b from-gray-950 to-black text-white">
      
//       {/* ========== HERO SECTION ========== */}
//       <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 px-4">
//         {/* Background Effects */}
//         <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-500/5" />
//         <motion.div 
//           animate={{ y: [0, -20, 0] }}
//           transition={{ repeat: Infinity, duration: 6 }}
//           className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
//         />
//         <motion.div 
//           animate={{ y: [0, 20, 0] }}
//           transition={{ repeat: Infinity, duration: 7, delay: 0.5 }}
//           className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
//         />
        
//         <div className="container mx-auto max-w-7xl relative z-10">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
            
//             {/* Left Content */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//             >
//               <motion.div 
//                 initial={{ opacity: 0, x: -20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ delay: 0.2 }}
//                 className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 rounded-full px-4 py-2 mb-8"
//               >
//                 <Sparkles className="w-4 h-4" />
//                 <span className="text-sm font-medium">Trusted by 500+ Global Companies</span>
//               </motion.div>

//               <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
//                 <span className="block text-white">Transform Your</span>
//                 <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent">
//                   Digital Future
//                 </span>
//               </h1>

//               <p className="text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
//                 We engineer <span className="text-cyan-400 font-semibold">data-driven solutions</span> that scale exponentially. 
//                 From concept to deployment, we deliver excellence with cutting-edge technology.
//               </p>

//               <div className="flex flex-col sm:flex-row gap-4 mb-12">
//                 <motion.button
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="group bg-gradient-to-r from-blue-500 to-cyan-500 text-black font-semibold px-8 py-4 rounded-xl text-lg flex items-center justify-center gap-2 hover:shadow-xl hover:shadow-blue-500/25 transition-all"
//                 >
//                   Start Free Consultation
//                   <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//                 </motion.button>
                
//                 <motion.button
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="group border border-gray-700 hover:border-cyan-500 bg-gray-900/50 backdrop-blur-sm px-8 py-4 rounded-xl text-lg flex items-center justify-center gap-2 hover:bg-gray-800/50 transition-all"
//                 >
//                   <Zap className="w-5 h-5" />
//                   View Case Studies
//                 </motion.button>
//               </div>

//               {/* Trust Indicators */}
//               <div className="flex flex-wrap items-center gap-8">
//                 <div className="flex items-center gap-4">
//                   <div className="flex -space-x-3">
//                     {[1,2,3,4].map((i) => (
//                       <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-cyan-500 border-2 border-gray-900" />
//                     ))}
//                   </div>
//                   <div>
//                     <p className="text-gray-400 text-sm">Rated 4.9/5 by</p>
//                     <p className="font-semibold">200+ Industry Leaders</p>
//                   </div>
//                 </div>
                
//                 <div className="hidden md:flex items-center gap-4">
//                   <div className="flex gap-1">
//                     {[1,2,3,4,5].map((i) => (
//                       <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
//                     ))}
//                   </div>
//                   <span className="text-gray-300">On Clutch</span>
//                 </div>
//               </div>
//             </motion.div>

//             {/* Right Visual */}
//             <motion.div
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.8, delay: 0.3 }}
//               className="relative"
//             >
//               <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-2">
//                 {/* Dashboard Mockup */}
//                 <div className="bg-gray-900 rounded-xl p-6">
//                   <div className="flex justify-between items-center mb-6">
//                     <div>
//                       <h3 className="font-semibold text-lg">Analytics Dashboard</h3>
//                       <p className="text-gray-400 text-sm">Real-time performance metrics</p>
//                     </div>
//                     <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
//                       Live
//                     </span>
//                   </div>
                  
//                   {/* Chart */}
//                   <div className="h-48 bg-gradient-to-br from-blue-900/30 to-cyan-900/30 rounded-lg mb-6 relative overflow-hidden">
//                     <div className="absolute inset-0 flex items-center justify-center">
//                       <div className="text-center">
//                         <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
//                           +47%
//                         </div>
//                         <div className="text-cyan-400 font-medium">Revenue Growth</div>
//                       </div>
//                     </div>
//                   </div>
                  
//                   {/* Stats Grid */}
//                   <div className="grid grid-cols-3 gap-4">
//                     {[
//                       { label: 'Active Users', value: '12.5K', change: '+24%' },
//                       { label: 'Monthly Revenue', value: '$2.1M', change: '+47%' },
//                       { label: 'System Uptime', value: '99.9%', change: '+0.5%' }
//                     ].map((stat, i) => (
//                       <div key={i} className="bg-gray-800/50 rounded-lg p-4">
//                         <div className="text-2xl font-bold">{stat.value}</div>
//                         <div className="text-gray-400 text-sm">{stat.label}</div>
//                         <div className="text-green-400 text-sm font-medium mt-1">{stat.change}</div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
                
//                 {/* Floating Elements */}
//                 <motion.div
//                   animate={{ y: [0, -10, 0] }}
//                   transition={{ repeat: Infinity, duration: 3 }}
//                   className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-black px-4 py-2 rounded-lg font-bold shadow-xl"
//                 >
//                   ⚡ Real-time
//                 </motion.div>
                
//                 <motion.div
//                   animate={{ y: [0, 10, 0] }}
//                   transition={{ repeat: Infinity, duration: 3, delay: 1 }}
//                   className="absolute -bottom-4 -left-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg font-bold shadow-xl"
//                 >
//                   🔒 Secure
//                 </motion.div>
//               </div>
//             </motion.div>
//           </div>
//         </div>

//         {/* Scroll Indicator */}
//         <motion.div
//           animate={{ y: [0, 10, 0] }}
//           transition={{ repeat: Infinity, duration: 2 }}
//           className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
//         >
//           <div className="text-gray-500 text-sm flex flex-col items-center">
//             <span>Scroll to explore</span>
//             <div className="w-6 h-10 border-2 border-gray-700 rounded-full mt-2 flex justify-center">
//               <div className="w-1 h-3 bg-cyan-500 rounded-full mt-2" />
//             </div>
//           </div>
//         </motion.div>
//       </section>

//       {/* ========== SERVICES SECTION ========== */}
//       <section className="py-24 px-4">
//         <div className="container mx-auto max-w-7xl">
//           {/* Section Header */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center max-w-3xl mx-auto mb-16"
//           >
//             <span className="inline-block bg-cyan-500/10 text-cyan-400 px-4 py-2 rounded-full text-sm font-semibold mb-4">
//               OUR EXPERTISE
//             </span>
//             <h2 className="text-4xl md:text-5xl font-bold mb-6">
//               Comprehensive <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Digital Solutions</span>
//             </h2>
//             <p className="text-xl text-gray-400">
//               We deliver end-to-end technology services that drive innovation and growth
//             </p>
//           </motion.div>

//           {/* Services Grid */}
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {services.map((service, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: service.delay }}
//                 whileHover={{ y: -10 }}
//                 className="group"
//               >
//                 <div className="h-full bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300">
//                   {/* Icon */}
//                   <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white mb-6`}>
//                     {service.icon}
//                   </div>

//                   {/* Title & Description */}
//                   <h3 className="text-2xl font-bold mb-4 group-hover:text-cyan-400 transition-colors">
//                     {service.title}
//                   </h3>
//                   <p className="text-gray-400 mb-6 leading-relaxed">
//                     {service.description}
//                   </p>

//                   {/* Features */}
//                   <ul className="space-y-3 mb-8">
//                     {service.features.map((feature, i) => (
//                       <li key={i} className="flex items-center text-gray-300">
//                         <CheckCircle className="w-5 h-5 text-cyan-500 mr-3" />
//                         {feature}
//                       </li>
//                     ))}
//                   </ul>

//                   {/* CTA */}
//                   <button className="w-full border border-gray-700 hover:border-cyan-500 text-gray-400 hover:text-cyan-400 py-3 rounded-lg flex items-center justify-center gap-2 group-hover:bg-cyan-500/5 transition-all">
//                     <span>Learn More</span>
//                     <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//                   </button>
//                 </div>
//               </motion.div>
//             ))}
//           </div>

//           {/* CTA Button */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center mt-16"
//           >
//             <button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-black font-semibold px-10 py-4 rounded-xl text-lg transition-all hover:shadow-xl hover:shadow-cyan-500/25">
//               View All Services
//             </button>
//           </motion.div>
//         </div>
//       </section>

//       {/* ========== INDUSTRIES SECTION ========== */}
//       <section className="py-24 px-4 bg-gradient-to-b from-gray-900/50 to-black">
//         <div className="container mx-auto max-w-7xl">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
            
//             {/* Left Content */}
//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//             >
//               <span className="inline-block bg-blue-500/10 text-blue-400 px-4 py-2 rounded-full text-sm font-semibold mb-4">
//                 INDUSTRY EXPERTISE
//               </span>
//               <h2 className="text-4xl md:text-5xl font-bold mb-6">
//                 Serving <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Diverse</span> Industries
//               </h2>
//               <p className="text-xl text-gray-400 mb-8">
//                 We understand the unique challenges of each sector and deliver tailored solutions that drive results.
//               </p>
              
//               <div className="space-y-6">
//                 <div className="flex items-center">
//                   <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mr-4">
//                     <Target className="w-6 h-6 text-blue-400" />
//                   </div>
//                   <div>
//                     <h4 className="font-semibold text-lg">Industry-Specific Solutions</h4>
//                     <p className="text-gray-400">Customized approaches for each vertical</p>
//                   </div>
//                 </div>
                
//                 <div className="flex items-center">
//                   <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center mr-4">
//                     <Shield className="w-6 h-6 text-green-400" />
//                   </div>
//                   <div>
//                     <h4 className="font-semibold text-lg">Compliance Ready</h4>
//                     <p className="text-gray-400">Meeting industry regulations and standards</p>
//                   </div>
//                 </div>

//                 <div className="flex items-center">
//                   <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mr-4">
//                     <BarChart3 className="w-6 h-6 text-purple-400" />
//                   </div>
//                   <div>
//                     <h4 className="font-semibold text-lg">Performance Optimized</h4>
//                     <p className="text-gray-400">Maximum efficiency and scalability</p>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>

//             {/* Right Grid */}
//             <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
//               {industries.map((industry, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   whileInView={{ opacity: 1, scale: 1 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: index * 0.1 }}
//                   whileHover={{ y: -10 }}
//                 >
//                   <div className="group bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-blue-500/50 rounded-xl p-6 text-center transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10">
//                     <div className={`w-16 h-16 rounded-2xl ${industry.color.replace('bg-', 'bg-')}/10 group-hover:bg-opacity-20 flex items-center justify-center mx-auto mb-4 transition-all`}>
//                       <div className={`${industry.color.replace('bg-', 'text-')} text-2xl`}>
//                         {industry.icon}
//                       </div>
//                     </div>
                    
//                     <h3 className="text-lg font-semibold mb-2">{industry.name}</h3>
                    
//                     <div className="text-3xl font-bold mb-2">{industry.count}+</div>
                    
//                     <p className="text-sm text-gray-400 mb-4">Projects Delivered</p>
                    
//                     {/* Progress Bar */}
//                     <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
//                       <motion.div
//                         initial={{ width: 0 }}
//                         whileInView={{ width: `${Math.min(100, (industry.count / 150) * 100)}%` }}
//                         viewport={{ once: true }}
//                         transition={{ duration: 1, delay: 0.5 }}
//                         className={`h-full ${industry.color} rounded-full`}
//                       />
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ========== STATS SECTION ========== */}
//       <section className="py-20 px-4">
//         <div className="container mx-auto max-w-7xl">
//           <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
//             {stats.map((stat, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.1 }}
//                 className="text-center group"
//               >
//                 <div className="w-20 h-20 rounded-2xl bg-gray-900/50 border border-gray-800 group-hover:border-cyan-500/50 flex items-center justify-center mx-auto mb-6 transition-all duration-300">
//                   <div className={`${stat.color} text-3xl`}>
//                     {stat.icon}
//                   </div>
//                 </div>
                
//                 <div className="text-5xl font-bold mb-2">
//                   {stat.value}
//                   <span className={stat.color}>{stat.suffix}</span>
//                 </div>
                
//                 <p className="text-gray-400 text-lg">{stat.label}</p>
                
//                 <div className="w-0 group-hover:w-16 h-0.5 bg-gradient-to-r from-transparent via-cyan-500 to-transparent mx-auto mt-4 transition-all duration-500" />
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ========== TESTIMONIALS SECTION ========== */}
//       <section className="py-24 px-4 bg-gradient-to-b from-black to-gray-950">
//         <div className="container mx-auto max-w-7xl">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center max-w-3xl mx-auto mb-16"
//           >
//             <span className="inline-block bg-purple-500/10 text-purple-400 px-4 py-2 rounded-full text-sm font-semibold mb-4">
//               CLIENT SUCCESS
//             </span>
//             <h2 className="text-4xl md:text-5xl font-bold mb-6">
//               Trusted by <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Industry Leaders</span>
//             </h2>
//             <p className="text-xl text-gray-400">
//               See what our clients say about working with us
//             </p>
//           </motion.div>

//           <div className="grid md:grid-cols-3 gap-8">
//             {testimonials.map((testimonial, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: testimonial.delay }}
//                 className="group"
//               >
//                 <div className="h-full bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300">
//                   {/* Rating */}
//                   <div className="flex gap-1 mb-6">
//                     {[...Array(testimonial.rating)].map((_, i) => (
//                       <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
//                     ))}
//                   </div>
                  
//                   {/* Content */}
//                   <p className="text-gray-300 text-lg italic mb-8">
//                     "{testimonial.content}"
//                   </p>
                  
//                   {/* Author */}
//                   <div className="flex items-center gap-4">
//                     <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500" />
//                     <div>
//                       <h4 className="font-semibold">{testimonial.name}</h4>
//                       <p className="text-gray-400 text-sm">{testimonial.role}</p>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ========== CTA SECTION ========== */}
//       <section className="py-24 px-4 relative overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-500/5" />
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        
//         <div className="container mx-auto max-w-4xl relative z-10">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center mb-12"
//           >
//             <span className="inline-block bg-gradient-to-r from-blue-500/10 to-cyan-500/10 text-cyan-400 px-4 py-2 rounded-full text-sm font-semibold mb-4">
//               GET STARTED
//             </span>
//             <h2 className="text-4xl md:text-5xl font-bold mb-6">
//               Ready to <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Transform</span> Your Business?
//             </h2>
//             <p className="text-xl text-gray-400 max-w-2xl mx-auto">
//               Schedule a free consultation with our experts and discover how we can drive your digital success.
//             </p>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.2 }}
//           >
//             <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 md:p-12 shadow-2xl">
//               <div className="grid md:grid-cols-3 gap-6 mb-8">
//                 <div className="space-y-3">
//                   <div className="flex items-center text-gray-400">
//                     <MessageSquare className="w-5 h-5 mr-2" />
//                     <span>Quick Response</span>
//                   </div>
//                   <div className="font-semibold">Within 2 Hours</div>
//                 </div>
                
//                 <div className="space-y-3">
//                   <div className="flex items-center text-gray-400">
//                     <Calendar className="w-5 h-5 mr-2" />
//                     <span>Flexible Scheduling</span>
//                   </div>
//                   <div className="font-semibold">Online or On-site</div>
//                 </div>
                
//                 <div className="space-y-3">
//                   <div className="flex items-center text-gray-400">
//                     <div className="w-5 h-5 rounded-full bg-cyan-500 mr-2" />
//                     <span>No Commitment</span>
//                   </div>
//                   <div className="font-semibold">Free First Consultation</div>
//                 </div>
//               </div>

//               <form className="space-y-6">
//                 <div className="grid md:grid-cols-2 gap-6">
//                   <input
//                     type="text"
//                     placeholder="Your Name"
//                     className="bg-gray-900 border border-gray-700 hover:border-cyan-500 focus:border-cyan-500 rounded-lg px-4 py-3 focus:outline-none transition-colors"
//                   />
//                   <input
//                     type="email"
//                     placeholder="Email Address"
//                     className="bg-gray-900 border border-gray-700 hover:border-cyan-500 focus:border-cyan-500 rounded-lg px-4 py-3 focus:outline-none transition-colors"
//                   />
//                   <input
//                     type="text"
//                     placeholder="Company Name"
//                     className="bg-gray-900 border border-gray-700 hover:border-cyan-500 focus:border-cyan-500 rounded-lg px-4 py-3 focus:outline-none transition-colors"
//                   />
//                   <input
//                     type="tel"
//                     placeholder="Phone Number"
//                     className="bg-gray-900 border border-gray-700 hover:border-cyan-500 focus:border-cyan-500 rounded-lg px-4 py-3 focus:outline-none transition-colors"
//                   />
//                 </div>
                
//                 <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
//                   <label className="text-gray-400 text-sm mb-2 block">
//                     What services are you interested in?
//                   </label>
//                   <div className="flex flex-wrap gap-2">
//                     {['Software Development', 'Cloud Services', 'Cybersecurity', 'Data Analytics', 'IT Consulting'].map((service) => (
//                       <button
//                         key={service}
//                         type="button"
//                         className="px-4 py-2 rounded-full border border-gray-700 text-gray-400 hover:border-cyan-500 hover:text-cyan-400 transition-all text-sm"
//                       >
//                         {service}
//                       </button>
//                     ))}
//                   </div>
//                 </div>

//                 <div className="flex flex-col sm:flex-row gap-4 items-center justify-between pt-6">
//                   <div className="text-gray-400 text-sm">
//                     By submitting, you agree to our Privacy Policy
//                   </div>
//                   <motion.button
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                     className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-black font-semibold px-10 py-4 rounded-xl text-lg flex items-center gap-2 hover:shadow-xl hover:shadow-cyan-500/25 transition-all"
//                   >
//                     Schedule Free Consultation
//                     <ArrowRight className="w-5 h-5" />
//                   </motion.button>
//                 </div>
//               </form>
//             </div>
//           </motion.div>
//         </div>
//       </section>

      
//     </main>
//   )
// }



// 'use client'

// import { motion } from 'framer-motion'
// import { useState, useRef, useEffect } from 'react'
// import { 
//   ArrowRight, 
//   Sparkles, 
//   Shield, 
//   Zap, 
//   Code, 
//   Cloud, 
//   Database, 
//   Cpu, 
//   Settings, 
//   Building2, 
//   CreditCard, 
//   Heart, 
//   Car, 
//   ShoppingBag, 
//   Factory, 
//   Users, 
//   Globe, 
//   Award, 
//   TrendingUp,
//   MessageSquare,
//   Calendar,
//   CheckCircle,
//   ChevronRight,
//   Star,
//   Target,
//   BarChart3
// } from 'lucide-react'

// // GSAP imports
// import gsap from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'

// // Register GSAP plugins
// gsap.registerPlugin(ScrollTrigger)

// // Typing animation function
// const animateTextTyping = (element: HTMLElement | null, duration: number = 1) => {
//   if (!element) return
  
//   const text = element.textContent || ''
//   element.textContent = ''
  
//   let index = 0
//   const interval = (duration * 1000) / text.length
  
//   const type = () => {
//     if (index < text.length) {
//       element.textContent += text[index]
//       index++
//       setTimeout(type, interval)
//     }
//   }
  
//   type()
// }

// export default function HomePage() {
//   const mainRef = useRef<HTMLDivElement>(null)

//   const [stats] = useState([
//     { value: 500, label: 'Happy Clients', suffix: '+', color: 'text-blue-500', icon: <Users /> },
//     { value: 25, label: 'Countries Served', suffix: '+', color: 'text-green-500', icon: <Globe /> },
//     { value: 98, label: 'Client Retention', suffix: '%', color: 'text-yellow-500', icon: <Award /> },
//     { value: 47, label: 'Avg. ROI Increase', suffix: '%', color: 'text-cyan-500', icon: <TrendingUp /> },
//   ])

//   // GSAP Animations with Typing Effect
//   useEffect(() => {
//     // Hero heading typing animation
//     const heroH1 = document.querySelector('[data-hero-h1]') as HTMLElement | null
//     if (heroH1) {
//       gsap.set(heroH1, { opacity: 0 })
//       gsap.to(heroH1, {
//         opacity: 1,
//         duration: 0.3,
//         delay: 0.2,
//         onStart: () => {
//           animateTextTyping(heroH1, 1.5)
//         }
//       })
//     }

//     // Services heading typing animation on scroll
//     const servicesTrigger = document.querySelector('[data-services-section]')
//     if (servicesTrigger) {
//       const servicesH2 = document.querySelector('[data-services-h2]') as HTMLElement | null
//       const servicesP = document.querySelector('[data-services-p]') as HTMLElement | null
      
//       if (servicesH2) {
//         gsap.set(servicesH2, { opacity: 0 })
//       }
      
//       gsap.to(servicesH2, {
//         scrollTrigger: {
//           trigger: servicesTrigger,
//           start: 'top 75%',
//           toggleActions: 'play none none reverse',
//           onEnter: () => {
//             animateTextTyping(servicesH2, 1.2)
//           }
//         },
//         opacity: 1,
//         duration: 0.3
//       })

//       if (servicesP) {
//         gsap.from(servicesP, {
//           scrollTrigger: {
//             trigger: servicesTrigger,
//             start: 'top 75%',
//           },
//           opacity: 0,
//           y: 20,
//           duration: 0.6,
//           delay: 1.3
//         })
//       }
//     }

//     // Industries heading typing animation on scroll
//     const industriesTrigger = document.querySelector('[data-industries-section]')
//     if (industriesTrigger) {
//       const industriesH2 = document.querySelector('[data-industries-h2]') as HTMLElement | null
//       const industriesP = document.querySelector('[data-industries-p]') as HTMLElement | null
      
//       if (industriesH2) {
//         gsap.set(industriesH2, { opacity: 0 })
//       }
      
//       gsap.to(industriesH2, {
//         scrollTrigger: {
//           trigger: industriesTrigger,
//           start: 'top 75%',
//           toggleActions: 'play none none reverse',
//           onEnter: () => {
//             animateTextTyping(industriesH2, 1.2)
//           }
//         },
//         opacity: 1,
//         duration: 0.3
//       })

//       if (industriesP) {
//         gsap.from(industriesP, {
//           scrollTrigger: {
//             trigger: industriesTrigger,
//             start: 'top 75%',
//           },
//           opacity: 0,
//           y: 20,
//           duration: 0.6,
//           delay: 1.3
//         })
//       }
//     }

//     // Testimonials heading typing animation on scroll
//     const testimonialsTrigger = document.querySelector('[data-testimonials-section]')
//     if (testimonialsTrigger) {
//       const testimonialsH2 = document.querySelector('[data-testimonials-h2]') as HTMLElement | null
//       const testimonialsP = document.querySelector('[data-testimonials-p]') as HTMLElement | null
      
//       if (testimonialsH2) {
//         gsap.set(testimonialsH2, { opacity: 0 })
//       }
      
//       gsap.to(testimonialsH2, {
//         scrollTrigger: {
//           trigger: testimonialsTrigger,
//           start: 'top 75%',
//           toggleActions: 'play none none reverse',
//           onEnter: () => {
//             animateTextTyping(testimonialsH2, 1.2)
//           }
//         },
//         opacity: 1,
//         duration: 0.3
//       })

//       if (testimonialsP) {
//         gsap.from(testimonialsP, {
//           scrollTrigger: {
//             trigger: testimonialsTrigger,
//             start: 'top 75%',
//           },
//           opacity: 0,
//           y: 20,
//           duration: 0.6,
//           delay: 1.3
//         })
//       }
//     }

//     // CTA heading typing animation on scroll
//     const ctaTrigger = document.querySelector('[data-cta-section]')
//     if (ctaTrigger) {
//       const ctaH2 = document.querySelector('[data-cta-h2]') as HTMLElement | null
//       const ctaP = document.querySelector('[data-cta-p]') as HTMLElement | null
      
//       if (ctaH2) {
//         gsap.set(ctaH2, { opacity: 0 })
//       }
      
//       gsap.to(ctaH2, {
//         scrollTrigger: {
//           trigger: ctaTrigger,
//           start: 'top 75%',
//           toggleActions: 'play none none reverse',
//           onEnter: () => {
//             animateTextTyping(ctaH2, 1.2)
//           }
//         },
//         opacity: 1,
//         duration: 0.3
//       })

//       if (ctaP) {
//         gsap.from(ctaP, {
//           scrollTrigger: {
//             trigger: ctaTrigger,
//             start: 'top 75%',
//           },
//           opacity: 0,
//           y: 20,
//           duration: 0.6,
//           delay: 1.3
//         })
//       }
//     }

//     return () => {
//       ScrollTrigger.getAll().forEach(trigger => trigger.kill())
//     }
//   }, [])

//   const services = [
//     {
//       image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
//       title: "Web Development",
//       description: "At Globo Persona, we specialize in creating high-performance, visually appealing websites that not only attract visitors but also convert them into loyal customers.",
//       features: ["Web & Mobile Apps", "Enterprise Solutions", "API Development"],
//     },
//     {
//       image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
//       title: "Email Marketing",
//       description: "We offer comprehensive email marketing services tailored to your unique needs and objectives.",
//       features: ["AWS / Azure / GCP", "Kubernetes", "24/7 Monitoring"],
//     },
//     {
//       image: "https://images.unsplash.com/photo-1563986768609-f4ee4b97e88d?auto=format&fit=crop&w=800&q=80",
//       title: "Cybersecurity",
//       description: "End‑to‑end security solutions to protect your applications, data and infrastructure.",
//       features: ["Penetration Testing", "SOC Implementation", "Compliance Ready"],
//     },
//     {
//       image: "https://images.unsplash.com/photo-1516534775068-bb6348260c8d?auto=format&fit=crop&w=800&q=80",
//       title: "Automations",
//       description: "Automation is key to staying competitive and maximizing productivity. From repetitive tasks to complex workflows, custom automation solutions can help streamline your processes.",
//       features: ["Predictive Analytics", "Machine Learning Models", "BI Dashboards"],
//     },
//     {
//       image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
//       title: "Account Based Marketing",
//       description: "(ABM) focuses on identifying and targeting high-value accounts with personalized campaigns designed to engage and convert. ",
//       features: ["Digital Roadmaps", "Architecture Review", "Tech Stack Audit"],
//     },
//     {
//       image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
//       title: "Graphic Design",
//       description: "At Globo Persona, we offer comprehensive graphic design and branding services that help you build a memorable and impactful brand presence.",
//       features: ["24/7 Monitoring", "Incident Response", "Regular Updates"],
//     }
//   ]

//   const industries = [
//     { icon: <Building2 />, name: "email Marketing", count: 150, color: "bg-blue-500" },
//     { icon: <CreditCard />, name: "Sales", count: 89, color: "bg-green-500" },
//     { icon: <Heart />, name: "Lead Generation", count: 67, color: "bg-red-500" },
//     { icon: <Car />, name: "web development", count: 42, color: "bg-orange-500" },
//     { icon: <ShoppingBag />, name: "graphic design", count: 134, color: "bg-purple-500" },
//     { icon: <Factory />, name: "digital marketing", count: 76, color: "bg-cyan-500" },
//   ]

//   const testimonials = [
//     {
//       name: "Michael Rodriguez",
//       role: "CTO at TechCorp",
//       content: "Their data-driven approach transformed our analytics pipeline. Efficiency increased by 65%.",
//       rating: 5,
//     },
//     {
//       name: "Sarah Chen",
//       role: "Director at HealthPlus",
//       content: "The cybersecurity implementation was seamless. Our compliance audit passed with flying colors.",
//       rating: 5,
//     },
//     {
//       name: "David Park",
//       role: "VP Operations at RetailPro",
//       content: "Cloud migration completed 2 weeks ahead of schedule with zero downtime. Outstanding work.",
//       rating: 5,
//     }
//   ]

//   return (
//     <>
//       <main ref={mainRef} className="min-h-screen bg-gradient-to-b from-gray-950 to-black text-white">
        
//         {/* ========== HERO SECTION ========== */}
//         <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 px-4">
//           {/* Background Effects */}
//           <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-500/5" />
//           <motion.div 
//             animate={{ y: [0, -20, 0] }}
//             transition={{ repeat: Infinity, duration: 6 }}
//             className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
//           />
//           <motion.div 
//             animate={{ y: [0, 20, 0] }}
//             transition={{ repeat: Infinity, duration: 7, delay: 0.5 }}
//             className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
//           />
          
//           <div className="container mx-auto max-w-7xl relative z-10">
//             <div className="grid lg:grid-cols-2 gap-12 items-center">
              
//               {/* Left Content */}
//               <div>
//                 <motion.div 
//                   initial={{ opacity: 0, x: -20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ delay: 0.2 }}
//                   className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 rounded-full px-4 py-2 mb-8"
//                 >
//                   <Sparkles className="w-4 h-4" />
//                   <span className="text-sm font-medium">Trusted by 500+ Global Companies</span>
//                 </motion.div>

//                 <h1 data-hero-h1 className="text-5xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
//                   <span className="block text-white">Welcome to</span>
//                   <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent">
//                     Globo Persona
//                   </span>
//                 </h1>

//                 <motion.p 
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.3 }}
//                   className="text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed"
//                 >
//                   Empowering businesses to thrive in the digital age. At <span className="text-cyan-400 font-semibold">Globo Persona</span> we're not just building websites or running campaigns; we're crafting digital experiences that drive success and inspire growth. Let's transform your digital presence together.
//                 </motion.p>

//                 <motion.div 
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.4 }}
//                   className="flex flex-col sm:flex-row gap-4 mb-12"
//                 >
//                   <motion.button
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                     className="group bg-gradient-to-r from-blue-500 to-cyan-500 text-black font-semibold px-8 py-4 rounded-xl text-lg flex items-center justify-center gap-2 hover:shadow-xl hover:shadow-blue-500/25 transition-all"
//                   >
//                     Get started
//                     <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//                   </motion.button>
                  
//                   <motion.button
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                     className="group border border-gray-700 hover:border-cyan-500 bg-gray-900/50 backdrop-blur-sm px-8 py-4 rounded-xl text-lg flex items-center justify-center gap-2 hover:bg-gray-800/50 transition-all"
//                   >
//                     <Zap className="w-5 h-5" />
//                     Let's talk
//                   </motion.button>
//                 </motion.div>

//                 {/* Trust Indicators */}
//                 <motion.div 
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.5 }}
//                   className="flex flex-wrap items-center gap-8"
//                 >
//                   <div className="flex items-center gap-4">
//                     <div className="flex -space-x-3">
//                       {[1,2,3,4].map((i) => (
//                         <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-cyan-500 border-2 border-gray-900" />
//                       ))}
//                     </div>
//                     <div>
//                       <p className="text-gray-400 text-sm">Rated 4.9/5 by</p>
//                       <p className="font-semibold">100+ clients</p>
//                     </div>
//                   </div>
                  
//                   <div className="hidden md:flex items-center gap-4">
//                     <div className="flex gap-1">
//                       {[1,2,3,4,5].map((i) => (
//                         <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
//                       ))}
//                     </div>
//                     <span className="text-gray-300">On Clutch</span>
//                   </div>
//                 </motion.div>
//               </div>

//               {/* Right Visual */}
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.8, delay: 0.3 }}
//                 className="relative"
//               >
//                 <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-2">
//                   {/* Dashboard Mockup */}
//                   <div className="bg-gray-900 rounded-xl p-6">
//                     <div className="flex justify-between items-center mb-6">
//                       <div>
//                         <h3 className="font-semibold text-lg">Analytics Dashboard</h3>
//                         <p className="text-gray-400 text-sm">Real-time performance metrics</p>
//                       </div>
//                       <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
//                         Live
//                       </span>
//                     </div>
                    
//                     {/* Chart */}
//                     <div className="h-48 bg-gradient-to-br from-blue-900/30 to-cyan-900/30 rounded-lg mb-6 relative overflow-hidden">
//                       <div className="absolute inset-0 flex items-center justify-center">
//                         <div className="text-center">
//                           <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
//                             +47%
//                           </div>
//                           <div className="text-cyan-400 font-medium">Revenue Growth</div>
//                         </div>
//                       </div>
//                     </div>
                    
//                     {/* Stats Grid */}
//                     <div className="grid grid-cols-3 gap-4">
//                       {[
//                         { label: 'Active Users', value: '12.5K', change: '+24%' },
//                         { label: 'Monthly Revenue', value: '$2.1M', change: '+47%' },
//                         { label: 'System Uptime', value: '99.9%', change: '+0.5%' }
//                       ].map((stat, i) => (
//                         <div key={i} className="bg-gray-800/50 rounded-lg p-4">
//                           <div className="text-2xl font-bold">{stat.value}</div>
//                           <div className="text-gray-400 text-sm">{stat.label}</div>
//                           <div className="text-green-400 text-sm font-medium mt-1">{stat.change}</div>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
                  
//                   {/* Floating Elements */}
//                   <motion.div
//                     animate={{ y: [0, -10, 0] }}
//                     transition={{ repeat: Infinity, duration: 3 }}
//                     className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-black px-4 py-2 rounded-lg font-bold shadow-xl"
//                   >
//                     ⚡ Real-time
//                   </motion.div>
                  
//                   <motion.div
//                     animate={{ y: [0, 10, 0] }}
//                     transition={{ repeat: Infinity, duration: 3, delay: 1 }}
//                     className="absolute -bottom-4 -left-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg font-bold shadow-xl"
//                   >
//                     🔒 Secure
//                   </motion.div>
//                 </div>
//               </motion.div>
//             </div>
//           </div>

//           {/* Scroll Indicator */}
//           <motion.div
//             animate={{ y: [0, 10, 0] }}
//             transition={{ repeat: Infinity, duration: 2 }}
//             className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
//           >
//             <div className="text-gray-500 text-sm flex flex-col items-center">
//               <span>Scroll to explore</span>
//               <div className="w-6 h-10 border-2 border-gray-700 rounded-full mt-2 flex justify-center">
//                 <div className="w-1 h-3 bg-cyan-500 rounded-full mt-2" />
//               </div>
//             </div>
//           </motion.div>
//         </section>

//         {/* ========== SERVICES SECTION ========== */}
//         <section className="py-24 px-4">
//           <div className="container mx-auto max-w-7xl">
//             {/* Section Header */}
//             <div data-services-section className="text-center max-w-3xl mx-auto mb-16">
//               <span className="inline-block bg-cyan-500/10 text-cyan-400 px-4 py-2 rounded-full text-sm font-semibold mb-4">
//                 OUR EXPERTISE
//               </span>
//               <h2 data-services-h2 className="text-4xl md:text-5xl font-bold mb-6">
//                 Comprehensive <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Digital Solutions</span>
//               </h2>
//               <p data-services-p className="text-xl text-gray-400">
//                 We deliver end-to-end technology services that drive innovation and growth
//               </p>
//             </div>

//             {/* Services Grid – 3D Image Flip Cards */}
//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {services.map((service, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: index * 0.1 }}
//                   className="service-card-3d"
//                 >
//                   <div className="service-card-inner shadow-2xl shadow-cyan-500/10 border border-cyan-500/10 bg-gray-900/40">
                    
//                     {/* Front – Image + title */}
//                     <div
//                       className="service-card-front"
//                       style={{ backgroundImage: `url(${service.image})` }}
//                     >
//                       <div className="service-card-front-overlay">
//                         <div className="service-title-front">
//                           {service.title}
//                         </div>
//                       </div>
//                     </div>

//                     {/* Back – Details */}
//                     <div className="service-card-back">
//                       <h3 className="service-back-title">
//                         {service.title}
//                       </h3>
//                       <p className="service-back-desc">
//                         {service.description}
//                       </p>
//                       <ul className="service-back-features">
//                         {service.features.map((feature, i) => (
//                           <li key={i}>{feature}</li>
//                         ))}
//                       </ul>
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>

//             {/* CTA Button */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className="text-center mt-16"
//             >
//               <button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-black font-semibold px-10 py-4 rounded-xl text-lg transition-all hover:shadow-xl hover:shadow-cyan-500/25">
//                 View All Services
//               </button>
//             </motion.div>
//           </div>
//         </section>

//         {/* ========== INDUSTRIES SECTION ========== */}
//         <section className="py-24 px-4 bg-gradient-to-b from-gray-900/50 to-black">
//           <div className="container mx-auto max-w-7xl">
//             <div className="grid lg:grid-cols-2 gap-12 items-center">
              
//               {/* Left Content */}
//               <div data-industries-section>
//                 <span className="inline-block bg-blue-500/10 text-blue-400 px-4 py-2 rounded-full text-sm font-semibold mb-4">
//                   Features
//                 </span>
//                 <h2 data-industries-h2 className="text-4xl md:text-5xl font-bold mb-6">
//                   Serving <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Diverse</span> Industries
//                 </h2>
//                 <p data-industries-p className="text-xl text-gray-400 mb-8">
//                   Understanding these features is essential for any business looking to thrive in the digital age.
//                 </p>
                
//                 <div className="space-y-6">
//                   <div className="flex items-center">
//                     <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mr-4">
//                       <Target className="w-6 h-6 text-blue-400" />
//                     </div>
//                     <div>
//                       <h4 className="font-semibold text-lg">Targeted Audience Reach</h4>
//                       <p className="text-gray-400">Customized approaches for each vertical</p>
//                     </div>
//                   </div>
                  
//                   <div className="flex items-center">
//                     <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center mr-4">
//                       <Shield className="w-6 h-6 text-green-400" />
//                     </div>
//                     <div>
//                       <h4 className="font-semibold text-lg">Marketing Automation</h4>
//                       <p className="text-gray-400">Meeting industry regulations and standards</p>
//                     </div>
//                   </div>

//                   <div className="flex items-center">
//                     <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mr-4">
//                       <BarChart3 className="w-6 h-6 text-purple-400" />
//                     </div>
//                     <div>
//                       <h4 className="font-semibold text-lg">Global Outreach</h4>
//                       <p className="text-gray-400">Maximum efficiency and scalability</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Right Grid */}
//               <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
//                 {industries.map((industry, index) => (
//                   <motion.div
//                     key={index}
//                     initial={{ opacity: 0, scale: 0.9 }}
//                     whileInView={{ opacity: 1, scale: 1 }}
//                     viewport={{ once: true }}
//                     transition={{ delay: index * 0.1 }}
//                     whileHover={{ y: -10 }}
//                   >
//                     <div className="group bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-blue-500/50 rounded-xl p-6 text-center transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10">
//                       <div className={`w-16 h-16 rounded-2xl ${industry.color.replace('bg-', 'bg-')}/10 group-hover:bg-opacity-20 flex items-center justify-center mx-auto mb-4 transition-all`}>
//                         <div className={`${industry.color.replace('bg-', 'text-')} text-2xl`}>
//                           {industry.icon}
//                         </div>
//                       </div>
                      
//                       <h3 className="text-lg font-semibold mb-2">{industry.name}</h3>
                      
//                       <div className="text-3xl font-bold mb-2">{industry.count}+</div>
                      
//                       <p className="text-sm text-gray-400 mb-4">Projects Delivered</p>
                      
//                       {/* Progress Bar */}
//                       <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
//                         <motion.div
//                           initial={{ width: 0 }}
//                           whileInView={{ width: `${Math.min(100, (industry.count / 150) * 100)}%` }}
//                           viewport={{ once: true }}
//                           transition={{ duration: 1, delay: 0.5 }}
//                           className={`h-full ${industry.color} rounded-full`}
//                         />
//                       </div>
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* ========== STATS SECTION ========== */}
//         <section className="py-20 px-4">
//           <div className="container mx-auto max-w-7xl">
//             <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
//               {stats.map((stat, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: index * 0.1 }}
//                   className="text-center group"
//                 >
//                   <div className="w-20 h-20 rounded-2xl bg-gray-900/50 border border-gray-800 group-hover:border-cyan-500/50 flex items-center justify-center mx-auto mb-6 transition-all duration-300">
//                     <div className={`${stat.color} text-3xl`}>
//                       {stat.icon}
//                     </div>
//                   </div>
                  
//                   <div className="text-5xl font-bold mb-2">
//                     {stat.value}
//                     <span className={stat.color}>{stat.suffix}</span>
//                   </div>
                  
//                   <p className="text-gray-400 text-lg">{stat.label}</p>
                  
//                   <div className="w-0 group-hover:w-16 h-0.5 bg-gradient-to-r from-transparent via-cyan-500 to-transparent mx-auto mt-4 transition-all duration-500" />
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* ========== TESTIMONIALS SECTION ========== */}
//         <section className="py-24 px-4 bg-gradient-to-b from-black to-gray-950">
//   <div className="container mx-auto max-w-7xl">
//     <div
//       data-testimonials-section
//       className="text-center max-w-3xl mx-auto mb-16"
//     >
//       <span className="inline-block bg-purple-500/10 text-purple-400 px-4 py-2 rounded-full text-sm font-semibold mb-4">
//         CLIENT SUCCESS
//       </span>
//       <h2
//         data-testimonials-h2
//         className="text-4xl md:text-5xl font-bold mb-6"
//       >
//         Trusted by{" "}
//         <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
//           Industry Leaders
//         </span>
//       </h2>
//       <p data-testimonials-p className="text-xl text-gray-400">
//         See what our clients say about working with us
//       </p>
//     </div>

//     <div className="grid md:grid-cols-3 gap-8">
//       {testimonials.map((testimonial, index) => (
//         <motion.div
//     key={index}
//     initial={{ opacity: 0, y: 30 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     viewport={{ once: true, amount: 0.3 }}
//     animate={{ y: [0, -8, 0] }}
//     transition={{
//       // entrance delay
//       delay: index * 0.12,
//       // total duration for float loop
//       duration: 4,
//       repeat: Infinity,
//       repeatType: "reverse",
//       ease: "easeInOut",
//     }}
//     className="relative"
//   >

//           {/* Subtle glow behind card */}
//           <div className="pointer-events-none absolute -inset-0.5 rounded-3xl bg-gradient-to-br from-purple-500/25 via-fuchsia-500/10 to-cyan-500/25 opacity-70 blur-2xl" />

//           {/* Floating Card */}
//           <div className="relative h-full bg-gradient-to-br from-white/8 via-white/5 to-white/10 border border-white/15 rounded-3xl px-6 py-7 backdrop-blur-xl shadow-[0_22px_80px_rgba(15,23,42,0.9)] flex flex-col transition-all duration-300 hover:-translate-y-3 hover:shadow-[0_26px_100px_rgba(168,85,247,0.65)] hover:border-purple-400/50">
//             {/* Rating row */}
//             <div className="flex items-center justify-between mb-5">
//               <div className="flex gap-1">
//                 {[...Array(testimonial.rating)].map((_, i) => (
//                   <Star
//                     key={i}
//                     className="w-4 h-4 md:w-5 md:h-5 text-yellow-400 drop-shadow-[0_0_10px_rgba(250,204,21,0.8)]"
//                     fill="currentColor"
//                   />
//                 ))}
//               </div>
//               <span className="text-[11px] uppercase tracking-wide px-2.5 py-1 rounded-full bg-emerald-400/10 text-emerald-200 border border-emerald-400/30">
//                 Top Rated
//               </span>
//             </div>

//             {/* Quote */}
//             <p className="text-gray-100 text-sm md:text-base lg:text-lg leading-relaxed mb-6">
//               <span className="text-purple-300 text-2xl align-top mr-1">“</span>
//               {testimonial.content}
//               <span className="text-purple-300 text-2xl align-bottom ml-1">”</span>
//             </p>

//             {/* Bottom – author */}
//             <div className="mt-auto flex items-center gap-4">
//               <div className="relative">
//                 <div className="w-11 h-11 md:w-12 md:h-12 rounded-2xl bg-gradient-to-br from-purple-400 via-pink-500 to-blue-500 shadow-[0_0_20px_rgba(147,51,234,0.7)]" />
//                 <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-gray-900 border border-emerald-400 flex items-center justify-center text-[10px] text-emerald-400">
//                   ★
//                 </div>
//               </div>
//               <div>
//                 <h4 className="font-semibold text-sm md:text-base text-gray-50">
//                   {testimonial.name}
//                 </h4>
//                 <p className="text-xs md:text-sm text-gray-400">
//                   {testimonial.role}
//                 </p>
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       ))}
//     </div>
//   </div>
// </section>


//         {/* ========== CTA SECTION ========== */}
//         <section className="py-24 px-4 relative overflow-hidden">
//           <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-500/5" />
//           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-96 bg-cyan-500/10 rounded-full blur-3xl" />
          
//           <div className="container mx-auto max-w-4xl relative z-10">
//             <div data-cta-section className="text-center mb-12">
//               <span className="inline-block bg-gradient-to-r from-blue-500/10 to-cyan-500/10 text-cyan-400 px-4 py-2 rounded-full text-sm font-semibold mb-4">
//                 GET STARTED
//               </span>
//               <h2 data-cta-h2 className="text-4xl md:text-5xl font-bold mb-6">
//                 Ready to <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Transform</span> Your Business?
//               </h2>
//               <p data-cta-p className="text-xl text-gray-400 max-w-2xl mx-auto">
//                 Schedule a free consultation with our experts and discover how we can drive your digital success.
//               </p>
//             </div>

//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: 0.2 }}
//             >
//               <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 md:p-12 shadow-2xl">
//                 <div className="grid md:grid-cols-3 gap-6 mb-8">
//                   <div className="space-y-3">
//                     <div className="flex items-center text-gray-400">
//                       <MessageSquare className="w-5 h-5 mr-2" />
//                       <span>Quick Response</span>
//                     </div>
//                     <div className="font-semibold">Within 2 Hours</div>
//                   </div>
                  
//                   <div className="space-y-3">
//                     <div className="flex items-center text-gray-400">
//                       <Calendar className="w-5 h-5 mr-2" />
//                       <span>Flexible Scheduling</span>
//                     </div>
//                     <div className="font-semibold">Online or On-site</div>
//                   </div>
                  
//                   <div className="space-y-3">
//                     <div className="flex items-center text-gray-400">
//                       <div className="w-5 h-5 rounded-full bg-cyan-500 mr-2" />
//                       <span>No Commitment</span>
//                     </div>
//                     <div className="font-semibold">Free First Consultation</div>
//                   </div>
//                 </div>

//                 <form className="space-y-6">
//                   <div className="grid md:grid-cols-2 gap-6">
//                     <input
//                       type="text"
//                       placeholder="Your Name"
//                       className="bg-gray-900 border border-gray-700 hover:border-cyan-500 focus:border-cyan-500 rounded-lg px-4 py-3 focus:outline-none transition-colors text-white placeholder-gray-500"
//                     />
//                     <input
//                       type="email"
//                       placeholder="Email Address"
//                       className="bg-gray-900 border border-gray-700 hover:border-cyan-500 focus:border-cyan-500 rounded-lg px-4 py-3 focus:outline-none transition-colors text-white placeholder-gray-500"
//                     />
//                     <input
//                       type="text"
//                       placeholder="Company Name"
//                       className="bg-gray-900 border border-gray-700 hover:border-cyan-500 focus:border-cyan-500 rounded-lg px-4 py-3 focus:outline-none transition-colors text-white placeholder-gray-500"
//                     />
//                     <input
//                       type="tel"
//                       placeholder="Phone Number"
//                       className="bg-gray-900 border border-gray-700 hover:border-cyan-500 focus:border-cyan-500 rounded-lg px-4 py-3 focus:outline-none transition-colors text-white placeholder-gray-500"
//                     />
//                   </div>
                  
//                   <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
//                     <label className="text-gray-400 text-sm mb-2 block">
//                       What services are you interested in?
//                     </label>
//                     <div className="flex flex-wrap gap-2">
//                       {['Software Development', 'Cloud Services', 'Cybersecurity', 'Data Analytics', 'IT Consulting'].map((service) => (
//                         <button
//                           key={service}
//                           type="button"
//                           className="px-4 py-2 rounded-full border border-gray-700 text-gray-400 hover:border-cyan-500 hover:text-cyan-400 transition-all text-sm"
//                         >
//                           {service}
//                         </button>
//                       ))}
//                     </div>
//                   </div>

//                   <div className="flex flex-col sm:flex-row gap-4 items-center justify-between pt-6">
//                     <div className="text-gray-400 text-sm">
//                       By submitting, you agree to our Privacy Policy
//                     </div>
//                     <motion.button
//                       whileHover={{ scale: 1.05 }}
//                       whileTap={{ scale: 0.95 }}
//                       className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-black font-semibold px-10 py-4 rounded-xl text-lg flex items-center gap-2 hover:shadow-xl hover:shadow-cyan-500/25 transition-all"
//                     >
//                       Schedule Free Consultation
//                       <ArrowRight className="w-5 h-5" />
//                     </motion.button>
//                   </div>
//                 </form>
//               </div>
//             </motion.div>
//           </div>
//         </section>
//       </main>

//       {/* Local styles only for this page */}
//       <style jsx global>{`
//         .service-card-3d {
//           perspective: 1200px;
//           height: 340px;
//         }
//         .service-card-inner {
//           position: relative;
//           width: 100%;
//           height: 100%;
//           transform-style: preserve-3d;
//           transition: transform 0.6s cubic-bezier(0.22, 0.61, 0.36, 1);
//         }
//         .service-card-3d:hover .service-card-inner {
//           transform: rotateY(180deg);
//         }
//         .service-card-front,
//         .service-card-back {
//           position: absolute;
//           inset: 0;
//           backface-visibility: hidden;
//           border-radius: 1.5rem;
//           overflow: hidden;
//         }
//         .service-card-front {
//           background-size: cover;
//           background-position: center;
//           display: flex;
//           align-items: flex-end;
//           padding: 1.5rem;
//         }
//         .service-card-front-overlay {
//           width: 100%;
//           border-radius: 1.25rem;
//           background: linear-gradient(
//             to top,
//             rgba(15, 23, 42, 0.9),
//             rgba(15, 23, 42, 0)
//           );
//           padding: 1rem 1.25rem;
//         }
//         .service-title-front {
//           color: #e5e7eb;
//           font-size: 1.1rem;
//           font-weight: 700;
//         }
//         .service-card-back {
//           transform: rotateY(180deg);
//           background: radial-gradient(
//               circle at top,
//               rgba(56, 189, 248, 0.18),
//               transparent
//             ),
//             rgba(15, 23, 42, 0.96);
//           border: 1px solid rgba(148, 163, 184, 0.4);
//           padding: 1.75rem;
//           display: flex;
//           flex-direction: column;
//           justify-content: center;
//         }
//         .service-back-title {
//           font-size: 1.25rem;
//           font-weight: 700;
//           margin-bottom: 0.75rem;
//           color: #e5e7eb;
//         }
//         .service-back-desc {
//           font-size: 0.95rem;
//           color: #cbd5e1;
//           margin-bottom: 1rem;
//         }
//         .service-back-features {
//           list-style: none;
//           padding: 0;
//           margin: 0;
//         }
//         .service-back-features li {
//           font-size: 0.9rem;
//           color: #94a3b8;
//           display: flex;
//           align-items: center;
//           gap: 0.4rem;
//           padding: 0.25rem 0;
//         }
//       `}</style>
//     </>
//   )
// }


// app/components/HeroSection.tsx
// "use client";

// import { useEffect, useRef, useState } from "react";
// import { Button } from "@/components/ui/button";
// import { motion } from "framer-motion";
// import gsap from "gsap";
// import { SplitText } from "gsap/SplitText";

// if (typeof window !== "undefined") {
//   gsap.registerPlugin(SplitText);
// }

// export default function HeroSection() {
//   const headingRef = useRef<HTMLHeadingElement>(null);
//   const servicesRef = useRef<HTMLDivElement>(null);
//   const [cursorVariant, setCursorVariant] = useState("default");
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [isMobile, setIsMobile] = useState(false);

//   const services = [
//     "Website Development",
//     "App Development", 
//     "Performance Analytics",
//     "Brand Identity Creation",
//     "E-commerce Solutions",
//     "Custom Web Solutions",
//     "Performance Marketing"
//   ];

//   // Custom cursor movement
//   useEffect(() => {
//     const isMobileDevice = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
//     setIsMobile(isMobileDevice);
    
//     if (isMobileDevice) return;

//     const mouseMove = (e: MouseEvent) => {
//       setMousePosition({ x: e.clientX, y: e.clientY });
//     };

//     window.addEventListener("mousemove", mouseMove);
    
//     // Add hover event listeners to all interactive elements
//     const interactiveElements = document.querySelectorAll(
//       "button, .service-item, h1, h2, .cursor-hover"
//     );
    
//     interactiveElements.forEach(el => {
//       el.addEventListener("mouseenter", () => setCursorVariant("hover"));
//       el.addEventListener("mouseleave", () => setCursorVariant("default"));
//     });

//     return () => {
//       window.removeEventListener("mousemove", mouseMove);
//       interactiveElements.forEach(el => {
//         el.removeEventListener("mouseenter", () => setCursorVariant("hover"));
//         el.removeEventListener("mouseleave", () => setCursorVariant("default"));
//       });
//     };
//   }, []);

//   // GSAP animations
//   useEffect(() => {
//     if (!headingRef.current) return;

//     const split = new SplitText(headingRef.current, {
//       type: "words,chars",
//       wordsClass: "word",
//       charsClass: "char"
//     });

//     const tl = gsap.timeline();
    
//     // Animate "Digital" and "Mar" separately with space between
//     tl.from(split.words[0], {
//       opacity: 0,
//       y: 80,
//       duration: 1,
//       ease: "power4.out"
//     })
//     .from(split.words[1], {
//       opacity: 0,
//       y: 80,
//       duration: 1,
//       ease: "power4.out"
//     }, "-=0.5");

//     // Horizontal scroll animation for services
//     if (servicesRef.current) {
//       gsap.to(servicesRef.current, {
//         x: "-50%",
//         duration: 20,
//         ease: "none",
//         repeat: -1
//       });
//     }

//     return () => {
//       if (split.revert) split.revert();
//     };
//   }, []);

//   const cursorVariants = {
//     default: {
//       x: mousePosition.x - 12,
//       y: mousePosition.y - 12,
//       width: 24,
//       height: 24,
//       backgroundColor: "rgba(59, 130, 246, 0.1)",
//       borderColor: "rgba(59, 130, 246, 0.5)",
//       mixBlendMode: "difference" as const
//     },
//     hover: {
//       x: mousePosition.x - 25,
//       y: mousePosition.y - 25,
//       width: 50,
//       height: 50,
//       backgroundColor: "rgba(59, 130, 246, 0.2)",
//       borderColor: "rgba(34, 211, 238, 0.8)",
//       mixBlendMode: "difference" as const
//     }
//   };

//   return (
//     <>
//       {/* Custom Cursor - Hidden on mobile */}
//       {!isMobile && (
//         <motion.div
//           className="fixed top-0 left-0 rounded-full pointer-events-none z-50 border-2 border-blue-500"
//           variants={cursorVariants}
//           animate={cursorVariant}
//           transition={{ type: "spring", mass: 0.5 }}
//         />
//       )}

//       {/* Main Hero Section */}
//       <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-950 px-4 py-12 md:py-20">
//         {/* Subtle background elements */}
//         <div className="absolute inset-0 opacity-[0.03]">
//           <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
//           <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-purple-500 rounded-full blur-3xl"></div>
//         </div>

//         {/* Content Container */}
//         <div className="relative z-10 container max-w-5xl mx-auto text-center">
//           {/* Welcome Heading */}
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="mb-8 md:mb-12"
//           >
//             <h2 className="text-lg md:text-xl font-light tracking-[0.3em] uppercase text-blue-400/80">
//               Welcome to Digital i360..!
//             </h2>
//           </motion.div>

//           {/* Main Heading with GSAP Animation */}
//           <div className="mb-6 md:mb-10">
//             <h3 className="text-2xl md:text-3xl lg:text-4xl font-normal text-gray-300 mb-2">
//               Innovative solutions for
//             </h3>
//             <div className="h-24 md:h-32 lg:h-40 flex items-center justify-center">
//               <h1
//                 ref={headingRef}
//                 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight"
//               >
//                 <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400">
//                   Digital<span className="mx-4 md:mx-6 lg:mx-8"></span>Mar
//                 </span>
//               </h1>
//             </div>
//           </div>

//           {/* Description Paragraph */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 1.5, duration: 1 }}
//             className="max-w-3xl mx-auto mb-10 md:mb-14"
//           >
//             <p className="text-base md:text-lg text-gray-400 leading-relaxed">
//               At Digitali360, we transform your vision into reality by creating engaging,{" "}
//               <span className="text-cyan-300 font-medium">impactful digital experiences</span>{" "}
//               that resonate with audiences and deliver measurable results. From{" "}
//               <span className="text-cyan-300 font-medium">tailored website development</span>{" "}
//               to <span className="text-cyan-300 font-medium">dynamic content creation</span>{" "}
//               and <span className="text-cyan-300 font-medium">innovation marketing strategies</span>.
//             </p>
//           </motion.div>

//           {/* Get in Touch Button */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ delay: 2, duration: 0.5 }}
//             className="mb-16 md:mb-20"
//           >
//             <Button
//               className="cursor-hover px-8 py-6 text-base md:text-lg bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 rounded-full shadow-2xl shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300"
//             >
//               Get in Touch
//             </Button>
//           </motion.div>
//         </div>

//         {/* Horizontal Scrollable Services Bar */}
//         <div className="relative w-full overflow-hidden py-6 md:py-8">
//           <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-transparent to-gray-900 z-10 pointer-events-none" />
          
//           <div
//             ref={servicesRef}
//             className="flex space-x-6 md:space-x-10 px-4"
//             style={{ width: "max-content" }}
//           >
//             {/* Duplicate services for seamless loop */}
//             {[...services, ...services].map((service, index) => (
//               <div
//                 key={index}
//                 className="service-item cursor-hover flex-shrink-0 px-6 py-3 md:px-8 md:py-4 rounded-full bg-gray-900/70 backdrop-blur-sm border border-gray-800 hover:border-cyan-500/50 transition-all duration-300 group"
//               >
//                 <div className="flex items-center space-x-3">
//                   <div className="w-2 h-2 rounded-full bg-cyan-400 group-hover:scale-150 transition-transform duration-300" />
//                   <span className="text-sm md:text-base text-gray-300 group-hover:text-white font-medium whitespace-nowrap">
//                     {service}
//                   </span>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Scroll Indicator */}
//         <motion.div
//           animate={{ y: [0, 10, 0] }}
//           transition={{ repeat: Infinity, duration: 2 }}
//           className="absolute bottom-6 md:bottom-10 left-1/2 transform -translate-x-1/2"
//         >
//           <div className="w-5 h-8 border-2 border-gray-600 rounded-full flex justify-center">
//             <div className="w-1 h-3 bg-cyan-400 rounded-full mt-1" />
//           </div>
//         </motion.div>
//       </section>
//     </>
//   );
// }



// 'use client';

// import React, { useEffect, useRef, useState } from 'react';
// import { motion, useScroll, useTransform, useInView } from 'framer-motion';
// import { gsap } from 'gsap';
// import { ArrowRight, Globe, TrendingUp, Sparkles, Users, Code, Target } from 'lucide-react';

// const HomePage = () => {
//   const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
//   const [cursorSize, setCursorSize] = useState(20);
//   const heroRef = useRef(null);
//   const servicesRef = useRef(null);

//   // Custom cursor
//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       setCursorPosition({ x: e.clientX, y: e.clientY });
//     };

//     const handleMouseEnter = (e: MouseEvent) => {
//       const target = e.target as HTMLElement;
//       if (
//         target.tagName === 'BUTTON' ||
//         target.tagName === 'A' ||
//         target.classList.contains('cursor-hover')
//       ) {
//         setCursorSize(60);
//       }
//     };

//     const handleMouseLeave = () => {
//       setCursorSize(20);
//     };

//     window.addEventListener('mousemove', handleMouseMove);
    
//     const interactiveElements = document.querySelectorAll('button, a, .cursor-hover');
//     interactiveElements.forEach(el => {
//       el.addEventListener('mouseenter', handleMouseEnter as EventListener);
//       el.addEventListener('mouseleave', handleMouseLeave);
//     });

//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//       interactiveElements.forEach(el => {
//         el.removeEventListener('mouseenter', handleMouseEnter as EventListener);
//         el.removeEventListener('mouseleave', handleMouseLeave);
//       });
//     };
//   }, []);

//   // GSAP Heading Animation
//   useEffect(() => {
//     const headings = document.querySelectorAll('.gsap-heading');
    
//     headings.forEach((heading) => {
//       const words = heading.textContent?.split(' ') || [];
//       heading.innerHTML = words
//         .map(word => `<span class="word inline-block opacity-0">${word}</span>`)
//         .join(' ');

//       const wordElements = heading.querySelectorAll('.word');
      
//       gsap.fromTo(
//         wordElements,
//         { opacity: 0, y: 50 },
//         {
//           opacity: 1,
//           y: 0,
//           duration: 0.8,
//           stagger: 0.1,
//           ease: 'power3.out',
//           scrollTrigger: {
//             trigger: heading,
//             start: 'top 80%',
//           },
//         }
//       );
//     });
//   }, []);

//   const services = [
//     'Web Development',
//     'Lead Generation',
//     'SEO',
//     'Graphic Designing',
//     'Business Development',
//     'Social Media Marketing',
//   ];

//   const serviceCards = [
//     {
//       title: 'Strategic Lead Generation',
//       image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
//       icon: Target,
//     },
//     {
//       title: 'Creative Graphic Design',
//       image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
//       icon: Sparkles,
//     },
//     {
//       title: 'Search Engine Optimization',
//       image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
//       icon: TrendingUp,
//     },
//     {
//       title: 'Business Development Excellence',
//       image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80',
//       icon: Users,
//     },
//     {
//       title: 'Custom Web Development',
//       image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80',
//       icon: Code,
//     },
//   ];

//   const stats = [
//     { label: 'Years of Excellence', value: '2+' },
//     { label: '360marco Partner', value: 'Global' },
//     { label: 'Countries Reached', value: '117+' },
//     { label: 'Execution Standard', value: 'Premium' },
//   ];

//   const whyChooseUs = [
//     {
//       title: "360marco's Proven Methodology",
//       description: 'Access to global frameworks and 8.5M+ verified contacts',
//       icon: Globe,
//     },
//     {
//       title: 'Dedicated Sales Team',
//       description: 'Expert BDE team that converts and closes leads',
//       icon: Users,
//     },
//     {
//       title: 'Creative Excellence',
//       description: 'Award-winning designs that capture attention',
//       icon: Sparkles,
//     },
//     {
//       title: 'Technical Expertise',
//       description: 'Cutting-edge web solutions built for performance',
//       icon: Code,
//     },
//   ];

//   const marqueeText = [
//     'High-Converting Lead Generation',
//     'Award-Winning Design',
//     'SEO That Ranks',
//     'Websites That Convert',
//     'Sales Teams That Close',
//   ];

//   return (
//     <div className="bg-[#0A0A0A] text-white min-h-screen overflow-x-hidden">
//       {/* Custom Cursor */}
//       <motion.div
//         className="fixed top-0 left-0 pointer-events-none z-50 mix-blend-difference"
//         animate={{
//           x: cursorPosition.x - cursorSize / 2,
//           y: cursorPosition.y - cursorSize / 2,
//           width: cursorSize,
//           height: cursorSize,
//         }}
//         transition={{ type: 'spring', stiffness: 500, damping: 28 }}
//       >
//         <div className="w-full h-full rounded-full border-2 border-[#60A5FA] bg-[#60A5FA]/20" />
//       </motion.div>

//       {/* Navigation */}
//       <nav className="fixed top-0 w-full z-40 bg-[#0A0A0A]/80 backdrop-blur-lg border-b border-white/10">
//         <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
//           <div className="flex items-center space-x-2">
//             <Globe className="w-8 h-8 text-[#2B4C7E]" />
//             <span className="text-xl font-bold">Globo Persona</span>
//           </div>
//           <div className="hidden md:flex space-x-8">
//             <a href="#" className="hover:text-[#60A5FA] transition cursor-hover">Home</a>
//             <a href="#" className="hover:text-[#60A5FA] transition cursor-hover">About</a>
//             <a href="#" className="hover:text-[#60A5FA] transition cursor-hover">Services</a>
//             <a href="#" className="hover:text-[#60A5FA] transition cursor-hover">Contact</a>
//             <a href="#" className="hover:text-[#60A5FA] transition cursor-hover">Careers</a>
//           </div>
//           <button className="bg-[#2B4C7E] hover:bg-[#60A5FA] px-6 py-2 rounded-full transition flex items-center space-x-2">
//             <span>Get Started</span>
//             <ArrowRight className="w-4 h-4" />
//           </button>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section ref={heroRef} className="relative min-h-screen flex items-center justify-center pt-20">
//         <div className="absolute inset-0 bg-gradient-to-b from-[#2B4C7E]/10 to-transparent" />
//         <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="mb-6"
//           >
//             <span className="text-[#60A5FA] text-lg">Your True Digital Partner</span>
//           </motion.div>
          
//           <h1 className="gsap-heading text-6xl md:text-6xl font-bold mb-8 leading-tight cursor-hover">
//             We Don't Just Generate Leads. We Build Perfect Client Connections.
//           </h1>
          
//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.5, duration: 0.8 }}
//             className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto"
//           >
//             Strategic execution backed by 360marco's global expertise
//           </motion.p>
          
//           <motion.button
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ delay: 0.8, duration: 0.5 }}
//             className="bg-[#2B4C7E] hover:bg-[#60A5FA] px-12 py-4 rounded-full text-lg font-semibold transition flex items-center space-x-3 mx-auto"
//           >
//             <span>Start Your Journey</span>
//             <ArrowRight className="w-5 h-5" />
//           </motion.button>
//         </div>
//       </section>

//       {/* Infinite Scrolling Services */}
//       <section className="py-6 border-y border-white/10 overflow-hidden bg-[#111111]">
//         <div className="flex whitespace-nowrap animate-marquee">
//           {[...services, ...services, ...services].map((service, i) => (
//             <span key={i} className="text-1xl font-bold mx-8 text-gray-500">
//               <span className="text-[#60A5FA] mr-2">•</span>
//                {service}
//             </span>
//           ))}
//         </div>
//       </section>

//       {/* Who We Are */}
//       <section className="py-32 px-6">
//         <div className="max-w-7xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="text-center mb-16"
//           >
//             <h2 className="gsap-heading text-5xl md:text-7xl font-bold mb-8 cursor-hover">
//               We Are Globo Persona
//             </h2>
//             <p className="text-xl text-gray-400 max-w-4xl mx-auto">
//               Strategic branch of 360 Marketing Concepts, delivering high-impact solutions that connect businesses with their ideal clients across India and beyond.
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//             {stats.map((stat, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: i * 0.1, duration: 0.6 }}
//                 viewport={{ once: true }}
//                 className="text-center p-8 bg-[#111111] rounded-2xl border border-white/10 cursor-hover"
//               >
//                 <div className="text-4xl font-bold text-[#60A5FA] mb-2">{stat.value}</div>
//                 <div className="text-gray-400">{stat.label}</div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Services Grid - Audy Style */}
//       <section ref={servicesRef} className="py-32 px-6 bg-[#111111]">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="gsap-heading text-5xl md:text-7xl font-bold mb-16 text-center cursor-hover">
//             Our Services
//           </h2>
          
//           <div className="grid md:grid-cols-2 gap-6">
//             {serviceCards.map((service, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 transition={{ delay: i * 0.1, duration: 0.6 }}
//                 viewport={{ once: true }}
//                 className="group relative h-96 rounded-3xl overflow-hidden cursor-hover"
//               >
//                 <div
//                   className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
//                   style={{ backgroundImage: `url(${service.image})` }}
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
//                 <div className="absolute inset-0 flex flex-col justify-end p-8">
//                   <service.icon className="w-12 h-12 text-[#60A5FA] mb-4" />
//                   <h3 className="text-3xl font-bold mb-4">{service.title}</h3>
//                   <button className="bg-white/10 backdrop-blur-sm hover:bg-[#2B4C7E] px-6 py-3 rounded-full w-fit transition flex items-center space-x-2 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0">
//                     <span>Explore</span>
//                     <ArrowRight className="w-4 h-4" />
//                   </button>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Our Approach */}
//       <section className="py-32 px-6">
//         <div className="max-w-7xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="text-center mb-16"
//           >
//             <h2 className="gsap-heading text-5xl md:text-7xl font-bold mb-8 cursor-hover">
//               Precision Execution. Global Standards.
//             </h2>
//           </motion.div>

//           <div className="grid md:grid-cols-2 gap-12 items-center">
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//               className="space-y-8"
//             >
//               {[
//                 { title: 'Strategy First', desc: "Backed by 360marco's proven frameworks" },
//                 { title: 'Local Excellence', desc: 'Indian market expertise with global quality' },
//                 { title: 'Results Driven', desc: 'Every campaign optimized for conversion' },
//                 { title: 'End-to-End', desc: 'From lead generation to client closure' },
//               ].map((item, i) => (
//                 <div key={i} className="border-l-4 border-[#2B4C7E] pl-6">
//                   <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
//                   <p className="text-gray-400">{item.desc}</p>
//                 </div>
//               ))}
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//               className="relative h-96"
//             >
//               <img
//                 src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
//                 alt="Team collaboration"
//                 className="w-full h-full object-cover rounded-3xl"
//               />
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Why Choose Us */}
//       <section className="py-32 px-6 bg-[#111111]">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="gsap-heading text-5xl md:text-7xl font-bold mb-16 text-center cursor-hover">
//             Why Globo Persona?
//           </h2>

//           <div className="grid md:grid-cols-2 gap-8">
//             {whyChooseUs.map((item, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: i * 0.1, duration: 0.6 }}
//                 viewport={{ once: true }}
//                 className="p-8 bg-[#0A0A0A] rounded-2xl border border-white/10 hover:border-[#60A5FA] transition cursor-hover"
//               >
//                 <item.icon className="w-12 h-12 text-[#60A5FA] mb-4" />
//                 <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
//                 <p className="text-gray-400">{item.description}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Banner with Marquee */}
//       <section className="relative py-32 overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-r from-[#2B4C7E] to-[#60A5FA]" />
        
//         {/* Marquee */}
//         <div className="relative mb-16 overflow-hidden">
//           <div className="flex whitespace-nowrap animate-marquee">
//             {[...marqueeText, ...marqueeText, ...marqueeText].map((text, i) => (
//               <span key={i} className="text-4xl font-bold mx-12 text-white/80">
//                 {text} •
//               </span>
//             ))}
//           </div>
//         </div>

//         {/* CTA Content */}
//         <div className="relative max-w-7xl mx-auto px-6 text-center">
//           <motion.h2
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="text-5xl md:text-7xl font-bold mb-6 cursor-hover"
//           >
//             Transform Your Business Today
//           </motion.h2>
//           <motion.p
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ delay: 0.3, duration: 0.8 }}
//             viewport={{ once: true }}
//             className="text-2xl mb-12 text-white/90"
//           >
//             Let's build your path to perfect client connections
//           </motion.p>
//           <motion.button
//             initial={{ opacity: 0, scale: 0.8 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ delay: 0.6, duration: 0.5 }}
//             viewport={{ once: true }}
//             className="bg-white text-[#2B4C7E] hover:bg-gray-100 px-12 py-4 rounded-full text-lg font-semibold transition flex items-center space-x-3 mx-auto"
//           >
//             <span>Book a Consultation</span>
//             <ArrowRight className="w-5 h-5" />
//           </motion.button>
//         </div>
//       </section>

//       <style jsx>{`
//         @keyframes marquee {
//           0% {
//             transform: translateX(0);
//           }
//           100% {
//             transform: translateX(-33.333%);
//           }
//         }
//         .animate-marquee {
//           animation: marquee 30s linear infinite;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default HomePage;


// 'use client';

// import React, { useEffect, useRef, useState } from 'react';
// import {
//   motion,
//   useMotionValue,
//   useSpring,
//   useScroll,
//   useTransform,
// } from 'framer-motion';
// import { gsap } from 'gsap';
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import {
//   ArrowRight,
//   Globe,
//   TrendingUp,
//   Sparkles,
//   Users,
//   Code,
//   Target,
// } from 'lucide-react';

// gsap.registerPlugin(ScrollTrigger);

// // Typing animation
// const animateTextTyping = (element: HTMLElement | null, duration: number = 1) => {
//   if (!element) return;

//   const text = element.textContent || '';
//   element.textContent = '';

//   let index = 0;
//   const interval = (duration * 1000) / text.length;

//   const type = () => {
//     if (index < text.length) {
//       element.textContent += text[index];
//       index++;
//       setTimeout(type, interval);
//     }
//   };

//   type();
// };

// // Data
// const services = [
//   'Web Development',
//   'Lead Generation',
//   'SEO',
//   'Graphic Designing',
//   'Business Development',
//   'Social Media Marketing',
// ];

// const ParallaxServices = () => {
//   const cards = [
//     {
//       id: 1,
//       title: 'Innovative Design',
//       description: 'Crafting beautiful experiences',
//       content:
//         'We push the boundaries of design to create stunning visual experiences.',
//       gradient: 'from-purple-500 to-pink-500',
//       icon: '🎨',
//     },
//     {
//       id: 2,
//       title: 'Performance First',
//       description: 'Speed meets elegance',
//       content:
//         'Optimized for lightning-fast performance without compromise.',
//       gradient: 'from-blue-500 to-cyan-500',
//       icon: '⚡',
//     },
//     {
//       id: 3,
//       title: 'User Centric',
//       description: 'Built for people',
//       content:
//         'Every interaction is carefully crafted with the end user in mind.',
//       gradient: 'from-orange-500 to-red-500',
//       icon: '👥',
//     },
//     {
//       id: 4,
//       title: 'Future Ready',
//       description: "Tomorrow's technology today",
//       content:
//         'Leveraging modern technologies to build long-lasting solutions.',
//       gradient: 'from-green-500 to-emerald-500',
//       icon: '🚀',
//     },
//   ];

//   return (
//     <section
//       data-services-section
//       className="bg-black"
//       style={{ height: `${cards.length * 100}vh` }}
//     >
//       {cards.map((card, index) => (
//         <ServiceCard
//           key={card.id}
//           card={card}
//           index={index}
//           totalCards={cards.length}
//         />
//       ))}
//     </section>
//   );
// };

// const ServiceCard = ({ card, index, totalCards }: any) => {
//   const ref = useRef<HTMLDivElement | null>(null);

//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ['start end', 'start start'],
//   });

//   const scale = useTransform(
//     scrollYProgress,
//     [0, 1],
//     [1, 1 - (totalCards - index) * 0.05]
//   );

//   return (
//     <div
//       ref={ref}
//       className="h-screen sticky top-0 flex items-center justify-center"
//     >
//       <motion.div
//         // style={{ scale, top: index * 25 }}
//          style={{ scale, top: `${index * 25}px` }} 
//         className="w-full max-w-md px-8"
//       >
//         <Card className="overflow-hidden border-0 shadow-2xl">
//           <div
//             className={`h-64 bg-gradient-to-r ${card.gradient} flex items-center justify-center relative`}
//           >
//             <h1 className="absolute top-6 text-6xl font-bold text-white/20">
//               Our Services
//             </h1>
//             <div className="text-8xl z-10">{card.icon}</div>
//           </div>

//           <CardHeader className="bg-white">
//             <CardTitle className="text-4xl text-black">
//               {card.title}
//             </CardTitle>
//             <CardDescription className="text-xl">
//               {card.description}
//             </CardDescription>
//           </CardHeader>

//           <CardContent className="bg-white">
//             <p className="text-gray-600 text-xl leading-relaxed">
//               {card.content}
//             </p>
//           </CardContent>
//         </Card>
//       </motion.div>
//     </div>
//   );
// };




// const stats = [
//   { label: 'Years of Excellence', value: '2+' },
//   { label: '360marco Partner', value: 'Global' },
//   { label: 'Countries Reached', value: '117+' },
//   { label: 'Execution Standard', value: 'Premium' },
// ];



// const marqueeText = [
//   'High-Converting Lead Generation',
//   'Award-Winning Design',
//   'SEO That Ranks',
//   'Websites That Convert',
//   'Sales Teams That Close',
// ];

// const faqs = [
//   {
//     question: 'What services does Globo Persona offer?',
//     answer:
//       'We provide lead generation, SEO, creative campaigns, and sales enablement tailored to your business goals.',
//   },
//   {
//     question: 'Which industries do you work with?',
//     answer:
//       'We partner with B2B and B2C brands across tech, education, healthcare, real estate, and consumer services.',
//   },
//   {
//     question: 'How soon can we see results?',
//     answer:
//       'Most clients start seeing measurable improvements in 4–6 weeks, depending on channel mix and goals.',
//   },
//   {
//     question: 'Do you offer long-term retainers?',
//     answer:
//       'Yes, we offer flexible retainers as well as project-based engagements based on your requirements.',
//   },
// ];

// /* ---------------- FAQ SECTION ---------------- */

// const FAQSection = () => {
//   const [openIndex, setOpenIndex] = useState<number | null>(0);

//   const toggle = (index: number) => {
//     setOpenIndex((prev) => (prev === index ? null : index));
//   };

//   return (
//     <section className="py-24 px-6 bg-[#0A0A0A]" data-faq-section>
//       <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr,2fr] gap-12 items-start">
//         <div>
//           <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 cursor-hover">
//             Frequently Asked Questions
//           </h2>
//           <p className="text-gray-400 text-sm md:text-base">
//             Clear answers to how Globo Persona works, pricing, and engagement
//             process so you know exactly what to expect.
//           </p>
//         </div>

//         <div className="space-y-4">
//           {faqs.map((item, index) => {
//             const isOpen = openIndex === index;
//             return (
//               <div
//                 key={item.question}
//                 className="border border-white/10 rounded-2xl bg-[#050505] overflow-hidden"
//               >
//                 <button
//                   onClick={() => toggle(index)}
//                   className="w-full flex items-center justify-between px-5 py-4 text-left cursor-hover"
//                 >
//                   <span className="text-sm md:text-base font-medium">
//                     {item.question}
//                   </span>
//                   <motion.span
//                     animate={{ rotate: isOpen ? 90 : 0 }}
//                     transition={{ duration: 0.2 }}
//                     className="ml-4 flex items-center justify-center w-8 h-8 rounded-full border border-white/20 text-md"
//                   >
//                     ▶
//                   </motion.span>
//                 </button>

//                 <motion.div
//                   initial={false}
//                   animate={{
//                     height: isOpen ? 'auto' : 0,
//                     opacity: isOpen ? 1 : 0,
//                   }}
//                   transition={{ duration: 0.25 }}
//                   className="px-5 pb-4 text-md text-gray-300 overflow-hidden"
//                 >
//                   {isOpen && <p className="pt-1">{item.answer}</p>}
//                 </motion.div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// const GridFlowBG = () => {
//   return (
//     <div className="absolute inset-0 overflow-hidden pointer-events-none">
//       {/* base */}
//       <div className="absolute inset-0 bg-[#0A0A0A]" />

//       {/* floating rectangles */}
//       <div className="absolute inset-[-30%] grid-box grid-1" />
//       <div className="absolute inset-[-30%] grid-box grid-2" />
//       <div className="absolute inset-[-40%] grid-box grid-3" />

//       {/* soft fade */}
//       <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
//     </div>
//   );
// };



// const HomePage = () => {
//   const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
//   const [cursorSize, setCursorSize] = useState(20);
//   const heroRef = useRef<HTMLDivElement | null>(null);
//   const servicesRef = useRef<HTMLDivElement | null>(null);

//   // Custom cursor
//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       setCursorPosition({ x: e.clientX, y: e.clientY });
//     };

//     const handleMouseEnter = (e: MouseEvent) => {
//       const target = e.target as HTMLElement;
//       if (
//         target.tagName === 'BUTTON' ||
//         target.tagName === 'A' ||
//         target.classList.contains('cursor-hover')
//       ) {
//         setCursorSize(60);
//       }
//     };

//     const handleMouseLeave = () => {
//       setCursorSize(20);
//     };

//     window.addEventListener('mousemove', handleMouseMove);

//     const interactiveElements = document.querySelectorAll(
//       'button, a, .cursor-hover'
//     );
//     interactiveElements.forEach((el) => {
//       el.addEventListener('mouseenter', handleMouseEnter as EventListener);
//       el.addEventListener('mouseleave', handleMouseLeave);
//     });

//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//       interactiveElements.forEach((el) => {
//         el.removeEventListener('mouseenter', handleMouseEnter as EventListener);
//         el.removeEventListener('mouseleave', handleMouseLeave);
//       });
//     };
//   }, []);

//   // GSAP typing + scroll triggers
//   useEffect(() => {
//     const heroH1 = document.querySelector(
//       '[data-hero-h1]'
//     ) as HTMLElement | null;
//     if (heroH1) {
//       gsap.set(heroH1, { opacity: 0 });
//       gsap.to(heroH1, {
//         opacity: 1,
//         duration: 0.3,
//         delay: 0.2,
//         onStart: () => {
//           animateTextTyping(heroH1, 1.5);
//         },
//       });
//     }

//     const setupHeading = (
//       sectionSelector: string,
//       h2Selector: string,
//       pSelector?: string
//     ) => {
//       const trigger = document.querySelector(sectionSelector);
//       if (!trigger) return;

//       const h2 = document.querySelector(h2Selector) as HTMLElement | null;
//       const p = pSelector
//         ? (document.querySelector(pSelector) as HTMLElement | null)
//         : null;

//       if (h2) {
//         gsap.set(h2, { opacity: 0 });
//         gsap.to(h2, {
//           scrollTrigger: {
//             trigger,
//             start: 'top 75%',
//             toggleActions: 'play none none reverse',
//             onEnter: () => {
//               animateTextTyping(h2, 1.2);
//             },
//           },
//           opacity: 1,
//           duration: 0.3,
//         });
//       }

//       if (p) {
//         gsap.from(p, {
//           scrollTrigger: {
//             trigger,
//             start: 'top 75%',
//           },
//           opacity: 0,
//           y: 20,
//           duration: 0.6,
//           delay: 1.3,
//         });
//       }
//     };

//     setupHeading('[data-services-section]', '[data-services-h2]');
//     setupHeading(
//       '[data-who-we-are-section]',
//       '[data-who-we-are-h2]',
//       '[data-who-we-are-p]'
//     );
//     setupHeading('[data-approach-section]', '[data-approach-h2]');
//     setupHeading('[data-why-choose-section]', '[data-why-choose-h2]');
//     setupHeading(
//       '[data-cta-section]',
//       '[data-cta-h2]',
//       '[data-cta-p]'
//     );

//     return () => {
//       ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//     };
//   }, []);

//   return (
//     <div className="bg-[#0A0A0A] text-white min-h-screen overflow-x-hidden">
//       {/* Custom Cursor */}
//       <motion.div
//         className="fixed top-0 left-0 pointer-events-none z-50 mix-blend-difference"
//         animate={{
//           x: cursorPosition.x - cursorSize / 2,
//           y: cursorPosition.y - cursorSize / 2,
//           width: cursorSize,
//           height: cursorSize,
//         }}
//         transition={{ type: 'spring', stiffness: 500, damping: 28 }}
//       >
//         <div className="w-full h-full rounded-full border-2 border-[#60A5FA] bg-[#60A5FA]/20" />
//       </motion.div>

//       {/* Navigation */}
//       <nav className="fixed top-0 w-full z-40 bg-[#0A0A0A]/80 backdrop-blur-lg border-b border-white/10">
//         <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
//           <div className="flex items-center space-x-2">
//             <Globe className="w-8 h-8 text-[#2B4C7E]" />
//             <span className="text-xl font-bold">Globo Persona</span>
//           </div>
//           <div className="hidden md:flex space-x-8">
//             <a
//               href="#"
//               className="hover:text-[#60A5FA] transition cursor-hover"
//             >
//               Home
//             </a>
//             <a
//               href="#"
//               className="hover:text-[#60A5FA] transition cursor-hover"
//             >
//               About
//             </a>
//             <a
//               href="#"
//               className="hover:text-[#60A5FA] transition cursor-hover"
//             >
//               Services
//             </a>
//             <a
//               href="#"
//               className="hover:text-[#60A5FA] transition cursor-hover"
//             >
//               Contact
//             </a>
//             <a
//               href="#"
//               className="hover:text-[#60A5FA] transition cursor-hover"
//             >
//               Careers
//             </a>
//           </div>
//           <button className="bg-[#2B4C7E] hover:bg-[#60A5FA] px-6 py-2 rounded-full transition flex items-center space-x-2 cursor-hover">
//             <span>Get Started</span>
//             <ArrowRight className="w-4 h-4" />
//           </button>
//         </div>
//       </nav>


//       <section
//   ref={heroRef}
//   className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
// >
//   {/* ✨ New flowing background */}
//   <GridFlowBG />


//   <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
//     {/* existing hero content stays same */}


//     <h1
//       data-hero-h1
//       className="text-6xl md:text-6xl font-bold mb-8 leading-tight cursor-hover"
//     >
//       We Don&apos;t Just Generate Leads. We Build Perfect Client Connections.
//     </h1>

//     <motion.p
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ delay: 0.5, duration: 0.8 }}
//       className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto"
//     >
//       Strategic execution backed by 360marco&apos;s global expertise
//     </motion.p>

//     <motion.button
//       initial={{ opacity: 0, scale: 0.8 }}
//       animate={{ opacity: 1, scale: 1 }}
//       transition={{ delay: 0.8, duration: 0.5 }}
//       className="bg-[#2B4C7E] hover:bg-[#60A5FA] px-12 py-4 rounded-full text-lg font-semibold transition flex items-center space-x-3 mx-auto cursor-hover"
//     >
//       <span>Start Your Journey</span>
//       <ArrowRight className="w-5 h-5" />
//     </motion.button>
//   </div>
// </section>


//       {/* Infinite marquee */}
//       <section className="py-6 border-y border-white/10 overflow-hidden bg-[#111111]">
//         <div className="flex whitespace-nowrap animate-marquee">
//           {[...services, ...services, ...services].map((service, i) => (
//             <span key={i} className="text-1xl font-bold mx-8 text-gray-500">
//               <span className="text-[#60A5FA] mr-2">•</span>
//               {service}
//             </span>
//           ))}
//         </div>
//       </section>

//       {/* Who We Are */}
//       <section data-who-we-are-section className="py-16 md:py-32 px-6">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//             >
//               <h2
//                 data-who-we-are-h2
//                 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 cursor-hover"
//               >
//                 We Are Globo Persona
//               </h2>

//               <motion.p
//                 data-who-we-are-p
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 transition={{ delay: 0.3, duration: 0.8 }}
//                 viewport={{ once: true }}
//                 className="text-base md:text-lg text-gray-400 leading-relaxed"
//               >
//                 Strategic branch of 360 Marketing Concepts, delivering high-impact
//                 solutions that connect businesses with their ideal clients across
//                 India and beyond. We bring global standards with local execution
//                 excellence.
//               </motion.p>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//               className="relative h-64 md:h-96 rounded-2xl overflow-hidden"
//             >
//               <img
//                 src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
//                 alt="Team collaboration"
//                 className="w-full h-full object-cover"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
//             </motion.div>
//           </div>
//         </div>
//       </section>

//      {/* Our Services with parallax cards */}
//            <ParallaxServices />

//       {/* Our Approach */}
//       <section data-approach-section className="py-32 px-6">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-16">
//             <h2
//               data-approach-h2
//               className="text-5xl md:text-7xl font-bold mb-8 cursor-hover"
//             >
//               Precision Execution. Global Standards.
//             </h2>
//           </div>

//           <div className="grid md:grid-cols-2 gap-12 items-center">
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//               className="space-y-8"
//             >
//               {[
//                 {
//                   title: 'Strategy First',
//                   desc: "Backed by 360marco's proven frameworks",
//                 },
//                 {
//                   title: 'Local Excellence',
//                   desc: 'Indian market expertise with global quality',
//                 },
//                 {
//                   title: 'Results Driven',
//                   desc: 'Every campaign optimized for conversion',
//                 },
//                 {
//                   title: 'End-to-End',
//                   desc: 'From lead generation to client closure',
//                 },
//               ].map((item, i) => (
//                 <div key={i} className="border-l-4 border-[#2B4C7E] pl-6">
//                   <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
//                   <p className="text-gray-400">{item.desc}</p>
//                 </div>
//               ))}
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//               className="relative h-96"
//             >
//               <img
//                 src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
//                 alt="Team collaboration"
//                 className="w-full h-full object-cover rounded-3xl"
//               />
//             </motion.div>
//           </div>
//         </div>
//       </section>

      
//       {/* FAQ added ABOVE CTA */}
//       <FAQSection />

//       {/* CTA */}
// <section className="py-32 px-6 bg-black">
//   <div className="relative max-w-7xl mx-auto rounded-3xl overflow-hidden border border-white/10">

//     {/* Background glow */}
//     <div className="absolute inset-0">
//       <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(96,165,250,0.25),transparent_60%)]" />
//       <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-blue-500/30 via-purple-500/20 to-orange-400/20 blur-[120px]" />
//     </div>

//     {/* Grain / noise overlay */}
//     <div className="absolute inset-0 opacity-[0.15] bg-[url('/noise.png')] mix-blend-overlay" />

//     {/* Content */}
//     <div className="relative z-10 text-center px-6 py-24">
//       <h2 className="text-4xl md:text-6xl font-semibold leading-tight mb-6 cursor-hover">
//         Transform your business with <br />
//         <span className="text-white/90">cutting-edge solutions</span>
//       </h2>

//       <p className="text-sm md:text-base text-white/70 mb-10">
//         Book a call today and start automating
//       </p>

//       {/* Infinite scrolling pills */}
// <div className="relative overflow-hidden mb-14">
//   <div className="flex w-max animate-pill-marquee">
//     {[ 
//       'AI Development',
//       'Performance Marketing',
//       'Business Automation',
//       'AI Development',
//       'Performance Marketing',
//       'Business Automation',
//       'AI Development',
//       'Performance Marketing',
//     ].map((item, i) => (
//       <span
//         key={i}
//         className="mx-2 px-5 py-2 rounded-full text-xs md:text-sm bg-black/60 border border-white/10 text-white/80 backdrop-blur cursor-hover whitespace-nowrap"
//       >
//         {item}
//       </span>
//     ))}
//   </div>
// </div>

//       {/* Button */}
//       <button className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-blue-600 hover:bg-blue-500 transition text-white font-medium cursor-hover">
//         Book a free call
//         <span className="text-lg">→</span>
//       </button>
//     </div>
//   </div>
// </section>


//            <style jsx>{`
//         /* ===== MARQUEE TEXT ===== */
//         @keyframes marquee {
//           0% {
//             transform: translateX(0);
//           }
//           100% {
//             transform: translateX(-33.333%);
//           }
//         }

//         @keyframes pill-marquee {
//           0% {
//             transform: translateX(0);
//           }
//           100% {
//             transform: translateX(-50%);
//           }
//         }

//         .animate-marquee {
//           animation: marquee 30s linear infinite;
//         }

//         .animate-pill-marquee {
//           animation: pill-marquee 25s linear infinite;
//         }
//           /* ===== SQUARE / RECTANGLE BACKGROUND (UPDATED) ===== */

// .grid-box {
//   background:
//     linear-gradient(
//       90deg,
//       rgba(255, 255, 255, 0.07) 1px,
//       transparent 1px
//     ),
//     linear-gradient(
//       180deg,
//       rgba(255, 255, 255, 0.07) 1px,
//       transparent 1px
//     );
//   background-size: 120px 120px;
//   opacity: 0.55;
// }

// .grid-1 {
//   animation: gridScaleMove1 42s ease-in-out infinite;
// }

// .grid-2 {
//   animation: gridScaleMove2 60s ease-in-out infinite;
//   background-size: 180px 180px;
//   opacity: 0.4;
// }

// .grid-3 {
//   animation: gridScaleMove3 85s ease-in-out infinite;
//   background-size: 260px 260px;
//   opacity: 0.3;
// }

// @keyframes gridScaleMove1 {
//   0% {
//     transform: translate(0, 0) scale(0.85);
//   }
//   50% {
//     transform: translate(-120px, -120px) scale(1.15);
//   }
//   100% {
//     transform: translate(0, 0) scale(0.85);
//   }
// }

// @keyframes gridScaleMove2 {
//   0% {
//     transform: translate(0, 0) scale(0.8);
//   }
//   50% {
//     transform: translate(160px, -160px) scale(1.25);
//   }
//   100% {
//     transform: translate(0, 0) scale(0.8);
//   }
// }

// @keyframes gridScaleMove3 {
//   0% {
//     transform: translate(0, 0) scale(0.75);
//   }
//   50% {
//     transform: translate(-220px, 220px) scale(1.35);
//   }
//   100% {
//     transform: translate(0, 0) scale(0.75);
//   }
// }


//       `}</style>
//     </div>
//   );
// };

// export default HomePage;


// 'use client';

// import React, { useEffect, useRef, useState } from 'react';
// import {
//   motion,
//   useScroll,
//   useTransform,
//   useSpring,
// } from 'framer-motion';
// import { gsap } from 'gsap';
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import {
//   ArrowRight,
//   Globe,
// } from 'lucide-react';

// gsap.registerPlugin(ScrollTrigger);

// // Typing animation
// const animateTextTyping = (element: HTMLElement | null, duration: number = 1) => {
//   if (!element) return;

//   const text = element.textContent || '';
//   element.textContent = '';

//   let index = 0;
//   const interval = (duration * 1000) / text.length;

//   const type = () => {
//     if (index < text.length) {
//       element.textContent += text[index];
//       index++;
//       setTimeout(type, interval);
//     }
//   };

//   type();
// };


// // Data
// const services = [
//   'Web Development',
//   'Lead Generation',
//   'SEO',
//   'Graphic Designing',
//   'Business Development',
//   'Social Media Marketing',
// ];

// const cards = [
//   {
//     id: 1,
//     title: 'Innovative Design',
//     description: 'Crafting beautiful experiences',
//     content:
//       'We push the boundaries of design to create stunning visual experiences.',
//     gradient: 'from-purple-500 to-pink-500',
//     icon: '🎨',
//   },
//   {
//     id: 2,
//     title: 'Performance First',
//     description: 'Speed meets elegance',
//     content:
//       'Optimized for lightning-fast performance without compromise.',
//     gradient: 'from-blue-500 to-cyan-500',
//     icon: '⚡',
//   },
//   {
//     id: 3,
//     title: 'User Centric',
//     description: 'Built for people',
//     content:
//       'Every interaction is carefully crafted with the end user in mind.',
//     gradient: 'from-orange-500 to-red-500',
//     icon: '👥',
//   },
//   {
//     id: 4,
//     title: 'Future Ready',
//     description: "Tomorrow's technology today",
//     content:
//       'Leveraging modern technologies to build long-lasting solutions.',
//     gradient: 'from-green-500 to-emerald-500',
//     icon: '🚀',
//   },
// ];

// // This is the working version
// const ParallaxServices = () => {
//   return (
//     <section className="relative bg-black">
//       {cards.map((card, index) => (
//         <ServiceCard
//           key={card.id}
//           card={card}
//           index={index}
//           totalCards={cards.length}
//         />
//       ))}
//     </section>
//   );
// };

// const ServiceCard = ({ card, index, totalCards }: any) => {
//   const cardRef = useRef<HTMLDivElement>(null);
  
//   // Scroll progress for this specific card
//   const { scrollYProgress } = useScroll({
//     target: cardRef,
//     offset: ["start end", "end start"],
//   });

//   // Scale transformation
//   const scale = useTransform(
//     scrollYProgress,
//     [0, 0.5, 1],
//     [0.9, 1, 0.9]
//   );

//   // Opacity transformation
//   const opacity = useTransform(
//     scrollYProgress,
//     [0, 0.3, 0.7, 1],
//     [0.5, 1, 1, 0.5]
//   );

//   // Y position transformation
//   const y = useTransform(
//     scrollYProgress,
//     [0, 0.5, 1],
//     [50, 0, -50]
//   );

//   return (
//     <div 
//       ref={cardRef} 
//       className="h-screen sticky top-0 flex items-center justify-center"
//       style={{ 
//         zIndex: totalCards - index,
//         marginTop: `${index * -80}px` // This creates the overlap effect
//       }}
//     >
//       <motion.div
//         style={{
//           scale,
//           opacity,
//           y,
//           rotateX: useTransform(scrollYProgress, [0, 1], [5, -5]), // Adds 3D effect
//         }}
//         className="w-full max-w-md mx-auto px-8"
//       >
//         <Card className="overflow-hidden border-0 shadow-2xl">
//           <div
//             className={`h-64 bg-gradient-to-r ${card.gradient} flex flex-col items-center justify-center relative`}
//           >
//             <h1 className="absolute top-6 text-6xl font-bold text-white/20">
//               Our Services
//             </h1>
//             <div className="text-8xl z-10">{card.icon}</div>
//           </div>

//           <CardHeader className="bg-white">
//             <CardTitle className="text-4xl text-black">
//               {card.title}
//             </CardTitle>
//             <CardDescription className="text-xl">
//               {card.description}
//             </CardDescription>
//           </CardHeader>

//           <CardContent className="bg-white pt-6">
//             <p className="text-gray-600 text-xl leading-relaxed">
//               {card.content}
//             </p>
//           </CardContent>
//         </Card>
//       </motion.div>
//     </div>
//   );
// };

// const faqs = [
//   {
//     question: 'What services does Globo Persona offer?',
//     answer:
//       'We provide lead generation, SEO, creative campaigns, and sales enablement tailored to your business goals.',
//   },
//   {
//     question: 'Which industries do you work with?',
//     answer:
//       'We partner with B2B and B2C brands across tech, education, healthcare, real estate, and consumer services.',
//   },
//   {
//     question: 'How soon can we see results?',
//     answer:
//       'Most clients start seeing measurable improvements in 4–6 weeks, depending on channel mix and goals.',
//   },
//   {
//     question: 'Do you offer long-term retainers?',
//     answer:
//       'Yes, we offer flexible retainers as well as project-based engagements based on your requirements.',
//   },
// ];

// const FAQSection = () => {
//   const [openIndex, setOpenIndex] = useState<number | null>(0);

//   const toggle = (index: number) => {
//     setOpenIndex((prev) => (prev === index ? null : index));
//   };

//   return (
//     <section className="py-24 px-6 bg-[#0A0A0A]" data-faq-section>
//       <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr,2fr] gap-12 items-start">
//         <div>
//           <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 cursor-hover">
//             Frequently Asked Questions
//           </h2>
//           <p className="text-gray-400 text-sm md:text-base">
//             Clear answers to how Globo Persona works, pricing, and engagement
//             process so you know exactly what to expect.
//           </p>
//         </div>

//         <div className="space-y-4">
//           {faqs.map((item, index) => {
//             const isOpen = openIndex === index;
//             return (
//               <div
//                 key={item.question}
//                 className="border border-white/10 rounded-2xl bg-[#050505] overflow-hidden"
//               >
//                 <button
//                   onClick={() => toggle(index)}
//                   className="w-full flex items-center justify-between px-5 py-4 text-left cursor-hover"
//                 >
//                   <span className="text-sm md:text-base font-medium">
//                     {item.question}
//                   </span>
//                   <motion.span
//                     animate={{ rotate: isOpen ? 90 : 0 }}
//                     transition={{ duration: 0.2 }}
//                     className="ml-4 flex items-center justify-center w-8 h-8 rounded-full border border-white/20 text-md"
//                   >
//                     ▶
//                   </motion.span>
//                 </button>

//                 <motion.div
//                   initial={false}
//                   animate={{
//                     height: isOpen ? 'auto' : 0,
//                     opacity: isOpen ? 1 : 0,
//                   }}
//                   transition={{ duration: 0.25 }}
//                   className="px-5 pb-4 text-md text-gray-300 overflow-hidden"
//                 >
//                   {isOpen && <p className="pt-1">{item.answer}</p>}
//                 </motion.div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };


// const GridFlowBG = () => {
//   return (
//     <div className="absolute inset-0 overflow-hidden pointer-events-none">
//       <div className="absolute inset-0 bg-[#0A0A0A]" />
//       <div className="absolute inset-[40%] grid-box grid-1" />
//       <div className="absolute inset-[30%] grid-box grid-2" />
//       <div className="absolute inset-[30%] grid-box grid-3" />
//       <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
//     </div>
//   );
// };

// const HomePage = () => {
//   const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
//   const [cursorSize, setCursorSize] = useState(20);
//   const heroRef = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       setCursorPosition({ x: e.clientX, y: e.clientY });
//     };

//     const handleMouseEnter = (e: MouseEvent) => {
//       const target = e.target as HTMLElement;
//       if (
//         target.tagName === 'BUTTON' ||
//         target.tagName === 'A' ||
//         target.classList.contains('cursor-hover')
//       ) {
//         setCursorSize(60);
//       }
//     };

//     const handleMouseLeave = () => {
//       setCursorSize(20);
//     };

//     window.addEventListener('mousemove', handleMouseMove);

//     const interactiveElements = document.querySelectorAll(
//       'button, a, .cursor-hover'
//     );
//     interactiveElements.forEach((el) => {
//       el.addEventListener('mouseenter', handleMouseEnter as EventListener);
//       el.addEventListener('mouseleave', handleMouseLeave);
//     });

//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//       interactiveElements.forEach((el) => {
//         el.removeEventListener('mouseenter', handleMouseEnter as EventListener);
//         el.removeEventListener('mouseleave', handleMouseLeave);
//       });
//     };
//   }, []);

//   useEffect(() => {
//     const heroH1 = document.querySelector(
//       '[data-hero-h1]'
//     ) as HTMLElement | null;
//     if (heroH1) {
//       gsap.set(heroH1, { opacity: 0 });
//       gsap.to(heroH1, {
//         opacity: 1,
//         duration: 0.3,
//         delay: 0.2,
//         onStart: () => {
//           animateTextTyping(heroH1, 1.5);
//         },
//       });
//     }

//     const setupHeading = (
//       sectionSelector: string,
//       h2Selector: string,
//       pSelector?: string
//     ) => {
//       const trigger = document.querySelector(sectionSelector);
//       if (!trigger) return;

//       const h2 = document.querySelector(h2Selector) as HTMLElement | null;
//       const p = pSelector
//         ? (document.querySelector(pSelector) as HTMLElement | null)
//         : null;

//       if (h2) {
//         gsap.set(h2, { opacity: 0 });
//         gsap.to(h2, {
//           scrollTrigger: {
//             trigger,
//             start: 'top 75%',
//             toggleActions: 'play none none reverse',
//             onEnter: () => {
//               animateTextTyping(h2, 1.2);
//             },
//           },
//           opacity: 1,
//           duration: 0.3,
//         });
//       }

//       if (p) {
//         gsap.from(p, {
//           scrollTrigger: {
//             trigger,
//             start: 'top 75%',
//           },
//           opacity: 0,
//           y: 20,
//           duration: 0.6,
//           delay: 1.3,
//         });
//       }
//     };

//     setupHeading('[data-services-section]', '[data-services-h2]');
//     setupHeading(
//       '[data-who-we-are-section]',
//       '[data-who-we-are-h2]',
//       '[data-who-we-are-p]'
//     );
//     setupHeading('[data-approach-section]', '[data-approach-h2]');
//     setupHeading('[data-why-choose-section]', '[data-why-choose-h2]');
//     setupHeading('[data-cta-section]', '[data-cta-h2]', '[data-cta-p]');

//     return () => {
//       ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//     };
//   }, []);

//   return (
//     <div className="bg-[#0A0A0A] text-white min-h-screen overflow-x-hidden">
//       {/* Custom Cursor */}
//       <motion.div
//         className="fixed top-0 left-0 pointer-events-none z-50 mix-blend-difference"
//         animate={{
//           x: cursorPosition.x - cursorSize / 2,
//           y: cursorPosition.y - cursorSize / 2,
//           width: cursorSize,
//           height: cursorSize,
//         }}
//         transition={{ type: 'spring', stiffness: 500, damping: 28 }}
//       >
//         <div className="w-full h-full rounded-full border-2 border-[#60A5FA] bg-[#60A5FA]/20" />
//       </motion.div>

//       {/* Navigation */}
//       <nav className="fixed top-0 w-full z-40 bg-[#0A0A0A]/80 backdrop-blur-lg border-b border-white/10">
//         <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
//           <div className="flex items-center space-x-2">
//             <Globe className="w-8 h-8 text-[#2B4C7E]" />
//             <span className="text-xl font-bold">Globo Persona</span>
//           </div>
//           <div className="hidden md:flex space-x-8">
//             <a href="#" className="hover:text-[#60A5FA] transition cursor-hover">
//               Home
//             </a>
//             <a href="#" className="hover:text-[#60A5FA] transition cursor-hover">
//               About
//             </a>
//             <a href="#" className="hover:text-[#60A5FA] transition cursor-hover">
//               Services
//             </a>
//             <a href="#" className="hover:text-[#60A5FA] transition cursor-hover">
//               Contact
//             </a>
//             <a href="#" className="hover:text-[#60A5FA] transition cursor-hover">
//               Careers
//             </a>
//           </div>
//           <button className="bg-[#2B4C7E] hover:bg-[#60A5FA] px-6 py-2 rounded-full transition flex items-center space-x-2 cursor-hover">
//             <span>Get Started</span>
//             <ArrowRight className="w-4 h-4" />
//           </button>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section
//         ref={heroRef}
//         className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
//       >

//         {/* new concentric circles bg */}
//   <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
//     {Array.from({ length: 10 }).map((_, i) => {
//       const size = 220 + i * 120; // px
//       const delay = i * 0.25;

//       return (
//         <motion.div
//           key={i}
//           className="absolute rounded-full border border-gray-600/25"
//           style={{ width: size, height: size }}
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{
//             opacity: 1,
//             scale: [1, 1.03, 1],
//           }}
//           transition={{
//             duration: 10,
//             ease: 'easeInOut',
//             repeat: Infinity,
//             delay,
//           }}
//         />
//       );
//     })}

//     {/* center filled circle */}
//     <motion.div
//       className="absolute rounded-full bg-gray-100/10"
//       style={{ width: 220, height: 220 }}
//       animate={{
//         scale: [1, 1.05, 1],
//       }}
//       transition={{
//         duration: 6,
//         ease: 'easeInOut',
//         repeat: Infinity,
//       }}
//     />

//     {/* dark vignette to match reference */}
//     <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,transparent_40%,#000000_85%)]" />
//   </div>

       


//         <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
//           <h1
//             data-hero-h1
//             className="text-6xl md:text-6xl font-bold mb-8 leading-tight cursor-hover"
//           >
//             We Don&apos;t Just Generate Leads. We Build Perfect Client Connections.
//           </h1>

//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.5, duration: 0.8 }}
//             className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto"
//           >
//             Strategic execution backed by 360marco&apos;s global expertise
//           </motion.p>

//           <motion.button
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ delay: 0.8, duration: 0.5 }}
//             className="bg-[#2B4C7E] hover:bg-[#60A5FA] px-12 py-4 rounded-full text-lg font-semibold transition flex items-center space-x-3 mx-auto cursor-hover"
//           >
//             <span>Start Your Journey</span>
//             <ArrowRight className="w-5 h-5" />
//           </motion.button>
//         </div>
//       </section>

//       {/* Services Marquee */}
//       <section className="py-6 border-y border-white/10 overflow-hidden bg-[#111111]">
//         <div className="flex whitespace-nowrap animate-marquee">
//           {[...services, ...services, ...services].map((service, i) => (
//             <span key={i} className="text-1xl font-bold mx-8 text-gray-500">
//               <span className="text-[#60A5FA] mr-2">•</span>
//               {service}
//             </span>
//           ))}
//         </div>
//       </section>

//       {/* Who We Are */}
//       <section data-who-we-are-section className="py-16 md:py-32 px-6">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//             >
//               <h2
//                 data-who-we-are-h2
//                 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 cursor-hover"
//               >
//                 We Are Globo Persona
//               </h2>

//               <motion.p
//                 data-who-we-are-p
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 transition={{ delay: 0.3, duration: 0.8 }}
//                 viewport={{ once: true }}
//                 className="text-base md:text-lg text-gray-400 leading-relaxed"
//               >
//                 Strategic branch of 360 Marketing Concepts, delivering high-impact
//                 solutions that connect businesses with their ideal clients across
//                 India and beyond. We bring global standards with local execution
//                 excellence.
//               </motion.p>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//               className="relative h-64 md:h-96 rounded-2xl overflow-hidden"
//             >
//               <img
//                 src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
//                 alt="Team collaboration"
//                 className="w-full h-full object-cover"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Fixed Parallax Services Section */}
//       <div data-services-section>
//         <ParallaxServices />
//       </div>

//       {/* Approach Section */}
//       <section data-approach-section className="py-32 px-6">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-16">
//             <h2
//               data-approach-h2
//               className="text-5xl md:text-7xl font-bold mb-8 cursor-hover"
//             >
//               Precision Execution. Global Standards.
//             </h2>
//           </div>

//           <div className="grid md:grid-cols-2 gap-12 items-center">
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//               className="space-y-8"
//             >
//               {[
//                 {
//                   title: 'Strategy First',
//                   desc: "Backed by 360marco's proven frameworks",
//                 },
//                 {
//                   title: 'Local Excellence',
//                   desc: 'Indian market expertise with global quality',
//                 },
//                 {
//                   title: 'Results Driven',
//                   desc: 'Every campaign optimized for conversion',
//                 },
//                 {
//                   title: 'End-to-End',
//                   desc: 'From lead generation to client closure',
//                 },
//               ].map((item, i) => (
//                 <div key={i} className="border-l-4 border-[#2B4C7E] pl-6">
//                   <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
//                   <p className="text-gray-400">{item.desc}</p>
//                 </div>
//               ))}
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//               className="relative h-96"
//             >
//               <img
//                 src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
//                 alt="Team collaboration"
//                 className="w-full h-full object-cover rounded-3xl"
//               />
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* FAQ Section */}
//       <FAQSection />

//       {/* CTA Section */}
//       <section className="py-32 px-6 bg-black">
//         <div className="relative max-w-7xl mx-auto rounded-3xl overflow-hidden border border-white/10">
//           <div className="absolute inset-0">
//             <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(96,165,250,0.25),transparent_60%)]" />
//             <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-blue-500/30 via-purple-500/20 to-orange-400/20 blur-[120px]" />
//           </div>

//           <div className="absolute inset-0 opacity-[0.15] bg-[url('/noise.png')] mix-blend-overlay" />

//           <div className="relative z-10 text-center px-6 py-24">
//             <h2 className="text-4xl md:text-6xl font-semibold leading-tight mb-6 cursor-hover">
//               Transform your business with <br />
//               <span className="text-white/90">cutting-edge solutions</span>
//             </h2>

//             <p className="text-sm md:text-base text-white/70 mb-10">
//               Book a call today and start automating
//             </p>

//             <div className="relative overflow-hidden mb-14">
//               <div className="flex w-max animate-pill-marquee">
//                 {[
//                   'AI Development',
//                   'Performance Marketing',
//                   'Business Automation',
//                   'AI Development',
//                   'Performance Marketing',
//                   'Business Automation',
//                   'AI Development',
//                   'Performance Marketing',
//                 ].map((item, i) => (
//                   <span
//                     key={i}
//                     className="mx-2 px-5 py-2 rounded-full text-xs md:text-sm bg-black/60 border border-white/10 text-white/80 backdrop-blur cursor-hover whitespace-nowrap"
//                   >
//                     {item}
//                   </span>
//                 ))}
//               </div>
//             </div>

//             <button className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-blue-600 hover:bg-blue-500 transition text-white font-medium cursor-hover">
//               Book a free call
//               <span className="text-lg">→</span>
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Styles */}
//       <style jsx>{`
//         @keyframes marquee {
//           0% {
//             transform: translateX(0);
//           }
//           100% {
//             transform: translateX(-33.333%);
//           }
//         }

//         @keyframes pill-marquee {
//           0% {
//             transform: translateX(0);
//           }
//           100% {
//             transform: translateX(-50%);
//           }
//         }

//         .animate-marquee {
//           animation: marquee 30s linear infinite;
//         }

//         .animate-pill-marquee {
//           animation: pill-marquee 25s linear infinite;
//         }

//         /* Grid animations */
//         .grid-box {
//           background: linear-gradient(
//               90deg,
//               rgba(255, 255, 255, 0.07) 1px,
//               transparent 1px
//             ),
//             linear-gradient(180deg, rgba(255, 255, 255, 0.07) 1px, transparent 1px);
//           background-size: 120px 120px;
//           opacity: 0.55;
//         }

//         .grid-1 {
//           animation: gridScaleMove1 42s ease-in-out infinite;
//         }

//         .grid-2 {
//           animation: gridScaleMove2 60s ease-in-out infinite;
//           background-size: 180px 180px;
//           opacity: 0.4;
//         }

//         .grid-3 {
//           animation: gridScaleMove3 85s ease-in-out infinite;
//           background-size: 260px 260px;
//           opacity: 0.3;
//         }

//         @keyframes gridScaleMove1 {
//           0% {
//             transform: translate(0, 0) scale(0.85);
//           }
//           50% {
//             transform: translate(-120px, -120px) scale(1.15);
//           }
//           100% {
//             transform: translate(0, 0) scale(0.85);
//           }
//         }

//         @keyframes gridScaleMove2 {
//           0% {
//             transform: translate(0, 0) scale(0.8);
//           }
//           50% {
//             transform: translate(160px, -160px) scale(1.25);
//           }
//           100% {
//             transform: translate(0, 0) scale(0.8);
//           }
//         }

//         @keyframes gridScaleMove3 {
//           0% {
//             transform: translate(0, 0) scale(0.75);
//           }
//           50% {
//             transform: translate(-220px, 220px) scale(1.35);
//           }
//           100% {
//             transform: translate(0, 0) scale(0.75);
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default HomePage;


// 'use client'

// import { useState, useEffect, useRef } from 'react'
// import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
// import { 
//   ChevronLeft, ChevronRight, Code, Palette, TrendingUp, 
//   Users, Globe, Shield, Target, Zap, ArrowRight, 
//   MessageCircle, Phone, Briefcase, Award, Clock,
//   CheckCircle, BarChart, Headphones
// } from 'lucide-react'
// import Image from 'next/image'

// // Button Component with proper TypeScript types
// interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
//   size?: 'default' | 'sm' | 'lg' | 'icon';
//   variant?: 'default' | 'outline' | 'secondary';
// }

// const Button = ({ children, className = '', size = 'default', variant = 'default', ...props }: ButtonProps) => {
//   const sizeClasses: Record<string, string> = {
//     default: 'h-9 px-4 py-2',
//     sm: 'h-8 px-3 text-xs',
//     lg: 'h-12 px-8 text-base',
//     icon: 'h-9 w-9'
//   }
  
//   const variantClasses: Record<string, string> = {
//     default: 'bg-blue-600 text-white hover:bg-blue-700',
//     outline: 'border border-gray-200 bg-transparent text-gray-900 hover:bg-gray-100',
//     secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200',
//   }
  
//   return (
//     <button
//       className={`inline-flex items-center justify-center whitespace-nowrap rounded-lg font-medium transition-colors ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
//       {...props}
//     >
//       {children}
//     </button>
//   )
// }

// // Banner Carousel Data
// const slides = [
//   {
//     id: 1,
//     image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
//     title: 'Innovative Solutions for Modern Businesses',
//     description: 'Providing cutting-edge B2B and B2C solutions that drive growth and transform industries.',
//     buttonText: 'Explore Solutions',
//   },
//   {
//     id: 2,
//     image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
//     title: 'Transforming Digital Experiences',
//     description: 'Creating seamless experiences for both businesses and end consumers.',
//     buttonText: 'Learn More',
//   },
//   {
//     id: 3,
//     image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
//     title: 'Your Partner in Growth',
//     description: 'Strategic partnerships that deliver measurable results and sustainable success.',
//     buttonText: 'Partner With Us',
//   },
// ]

// // Services Data
// const services = [
//   {
//     id: 1,
//     title: 'Web Development',
//     description: 'Custom web applications and scalable solutions built with modern technologies for optimal performance.',
//     icon: Code,
//     image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
//     borderColor: 'border-blue-900'
//   },
//   {
//     id: 2,
//     title: 'Digital Marketing',
//     description: 'Comprehensive marketing strategies that drive engagement and conversion across all digital channels.',
//     icon: TrendingUp,
//     image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
//     borderColor: 'border-blue-900'
//   },
//   {
//     id: 3,
//     title: 'UI/UX Design',
//     description: 'User-centered design solutions that create intuitive and engaging digital experiences.',
//     icon: Palette,
//     image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
//     borderColor: 'border-blue-900'
//   },
//   {
//     id: 4,
//     title: 'Business Development',
//     description: 'Strategic partnership development and market expansion services for sustainable growth.',
//     icon: Users,
//     image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
//     borderColor: 'border-blue-900'
//   },
//   {
//     id: 5,
//     title: 'Global Solutions',
//     description: 'International business strategies and localization services for global market penetration.',
//     icon: Globe,
//     image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
//     borderColor: 'border-blue-900'
//   },
//   {
//     id: 6,
//     title: 'Enterprise Security',
//     description: 'Robust security solutions protecting your digital assets and ensuring compliance.',
//     icon: Shield,
//     image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
//     borderColor: 'border-blue-900'
//   },
// ]

// // Features Data
// const features = [
//   {
//     icon: Target,
//     title: 'Precision Targeting',
//     description: 'Advanced analytics for precise B2B and B2C audience targeting and engagement.',
//   },
//   {
//     icon: Zap,
//     title: 'Fast Deployment',
//     description: 'Rapid implementation of solutions with minimal disruption to your operations.',
//   },
//   {
//     icon: Headphones,
//     title: 'Dedicated Support',
//     description: '24/7 expert support for both technical and strategic business needs.',
//   },
//   {
//     icon: Globe,
//     title: 'Global Reach',
//     description: 'International capabilities with local market understanding and execution.',
//   },
//   {
//     icon: Shield,
//     title: 'Enterprise Security',
//     description: 'Bank-grade security protocols protecting all business and customer data.',
//   },
//   {
//     icon: TrendingUp,
//     title: 'Growth Focused',
//     description: 'Solutions designed to drive measurable growth and ROI for your business.',
//   },
// ]

// // Stats Data
// const stats = [
//   { number: '500+', label: 'Happy Clients' },
//   { number: '50+', label: 'Countries Served' },
//   { number: '24/7', label: 'Support' },
//   { number: '99%', label: 'Satisfaction Rate' },
// ]

// export default function HomePage() {
//   const [currentSlide, setCurrentSlide] = useState(0)
//   const servicesRef = useRef<HTMLDivElement>(null)
//   const { scrollYProgress } = useScroll({
//     target: servicesRef,
//     offset: ["start start", "end end"]
//   })

//   const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])

//   // Auto-rotate carousel
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % slides.length)
//     }, 5000)
//     return () => clearInterval(interval)
//   }, [])

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % slides.length)
//   }

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
//   }

//   return (
//     <div className="w-full overflow-hidden">
//       {/* ===== BANNER CAROUSEL SECTION ===== */}
//       <section className="relative h-screen overflow-hidden">
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={currentSlide}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.5 }}
//             className="absolute inset-0"
//           >
//             <div
//               className="absolute inset-0 bg-cover bg-center"
//               style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
//             />
//             <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
//           </motion.div>
//         </AnimatePresence>

//         <div className="relative h-full flex items-center">
//           <div className="container mx-auto px-4 md:px-8 lg:px-16">
//             <motion.div
//               key={currentSlide}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -20 }}
//               transition={{ duration: 0.5 }}
//               className="max-w-2xl"
//             >
//               <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
//                 {slides[currentSlide].title}
//               </h1>
//               <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-lg">
//                 {slides[currentSlide].description}
//               </p>
//               <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
//                 {slides[currentSlide].buttonText}
//               </Button>
//             </motion.div>
//           </div>
//         </div>

//         <button
//           onClick={prevSlide}
//           className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors z-10"
//         >
//           <ChevronLeft className="w-6 h-6" />
//         </button>
//         <button
//           onClick={nextSlide}
//           className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors z-10"
//         >
//           <ChevronRight className="w-6 h-6" />
//         </button>

//         <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-10">
//           {slides.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setCurrentSlide(index)}
//               className={`w-3 h-3 rounded-full transition-all ${
//                 index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
//               }`}
//             />
//           ))}
//         </div>
//       </section>

//       {/* ===== STATS SECTION ===== */}
//       <section className="py-12 bg-blue-900">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//             {stats.map((stat, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 className="text-center"
//               >
//                 <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
//                 <div className="text-blue-200">{stat.label}</div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ===== ABOUT SECTION ===== */}
//       <section className="py-20 px-4 md:px-8 lg:px-16 bg-gray-50">
//         <div className="container mx-auto">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5 }}
//             >
//               <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
//                 About <span className="text-blue-600">Globo Persona</span>
//               </h2>
//               <div className="space-y-4 text-gray-600">
//                 <p className="text-lg">
//                   Globo Persona is a premier B2B and B2C solutions provider, bridging the gap between 
//                   innovative technology and market demands. We specialize in creating transformative 
//                   experiences that drive business growth and customer satisfaction.
//                 </p>
//                 <p className="text-lg">
//                   With a global perspective and local expertise, we deliver tailored solutions that 
//                   empower businesses to thrive in today's competitive landscape. Our approach combines 
//                   strategic insight with cutting-edge execution.
//                 </p>
//                 <p className="text-lg">
//                   Our mission is to redefine industry standards by delivering exceptional value to 
//                   both our business partners and end consumers through innovative thinking and 
//                   sustainable practices.
//                 </p>
//               </div>
//               <div className="mt-8">
//                 <Button size="lg" className="mr-4">Learn More</Button>
//                 <Button size="lg" variant="outline">Our Values</Button>
//               </div>
//             </motion.div>
            
//             <motion.div
//               initial={{ opacity: 0, x: 20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: 0.2 }}
//               className="relative"
//             >
//               <div className="relative h-[500px] w-full overflow-hidden rounded-2xl shadow-2xl">
//                 <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20" />
//                 <Image
//                   src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
//                   alt="Globo Persona Team"
//                   fill
//                   className="object-cover"
//                   priority
//                 />
//               </div>
//               <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl max-w-xs">
//                 <h3 className="text-xl font-bold text-gray-900 mb-2">Global Presence</h3>
//                 <p className="text-gray-600">Serving clients across 50+ countries worldwide</p>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* ===== SERVICES SECTION ===== */}
//       <section ref={servicesRef} className="relative py-20 px-4 md:px-8 lg:px-16 bg-white overflow-hidden">
//         <div className="container mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
//               Our <span className="text-blue-600">Services</span>
//             </h2>
//             <p className="text-gray-600 text-lg max-w-2xl mx-auto">
//               Comprehensive solutions tailored for both B2B and B2C markets
//             </p>
//           </motion.div>

//           <div className="relative">
//             <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-blue-900 via-blue-700 to-blue-900" />
            
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//               {services.map((service, index) => (
//                 <motion.div
//                   key={service.id}
//                   initial={{ opacity: 0, y: 50 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.5, delay: index * 0.1 }}
//                   className={`relative group ${
//                     index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8 lg:mt-20'
//                   }`}
//                 >
//                   <div className={`relative bg-white rounded-2xl shadow-lg overflow-hidden border-t-4 ${service.borderColor} hover:shadow-2xl transition-all duration-300`}>
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
//                       <div className={`order-2 md:order-1 ${
//                         index % 2 === 0 ? 'md:order-2' : 'md:order-1'
//                       }`}>
//                         <div className="flex items-center mb-6">
//                           <div className="p-3 bg-blue-100 rounded-xl mr-4">
//                             <service.icon className="w-8 h-8 text-blue-600" />
//                           </div>
//                           <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
//                         </div>
//                         <p className="text-gray-600 mb-6">{service.description}</p>
//                         <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
//                           Learn More
//                         </Button>
//                       </div>
                      
//                       <div className={`relative h-64 rounded-xl overflow-hidden order-1 md:order-2 ${
//                         index % 2 === 0 ? 'md:order-1' : 'md:order-2'
//                       }`}>
//                         <motion.div
//                           style={{ y, backgroundImage: `url(${service.image})` }}
//                           className="absolute inset-0 bg-cover bg-center"
//                         />
//                         <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
//                       </div>
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ===== FEATURES SECTION ===== */}
//       <section className="py-20 px-4 md:px-8 lg:px-16 bg-gray-50">
//         <div className="container mx-auto">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5 }}
//             >
//               <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
//                 Why Choose <span className="text-blue-600">Globo Persona</span>
//               </h2>
//               <p className="text-gray-600 text-lg">
//                 We combine innovative technology with deep industry expertise to deliver 
//                 exceptional results for businesses of all sizes.
//               </p>
//               <div className="mt-8">
//                 <ul className="space-y-4">
//                   <li className="flex items-center">
//                     <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
//                     <span>Industry-leading expertise</span>
//                   </li>
//                   <li className="flex items-center">
//                     <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
//                     <span>Proven track record</span>
//                   </li>
//                   <li className="flex items-center">
//                     <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
//                     <span>Customized solutions</span>
//                   </li>
//                   <li className="flex items-center">
//                     <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
//                     <span>Transparent pricing</span>
//                   </li>
//                 </ul>
//               </div>
//             </motion.div>
            
//             <motion.div
//               initial={{ opacity: 0, x: 20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: 0.2 }}
//             >
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
//                 {features.map((feature, index) => (
//                   <motion.div
//                     key={index}
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.5, delay: index * 0.1 }}
//                     className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
//                   >
//                     <div className="inline-flex p-3 bg-blue-100 rounded-xl mb-6">
//                       <feature.icon className="w-8 h-8 text-blue-600" />
//                     </div>
//                     <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
//                     <p className="text-gray-600">{feature.description}</p>
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* ===== CTA SECTION ===== */}
//       <section className="py-20 px-4 md:px-8 lg:px-16 relative overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900" />
//         <div 
//           className="absolute inset-0 opacity-10 bg-cover bg-center"
//           style={{ 
//             backgroundImage: 'url(https://images.unsplash.com/photo-1558603668-6570496b66f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)' 
//           }}
//         />
        
//         <div className="container mx-auto relative z-10">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5 }}
//             className="max-w-4xl mx-auto text-center"
//           >
//             <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
//               Ready to Transform Your Business?
//             </h2>
//             <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
//               Join hundreds of businesses that trust Globo Persona for their B2B and B2C solutions.
//             </p>
            
//             <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
//               <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
//                 Start Free Trial
//                 <ArrowRight className="ml-2 w-5 h-5" />
//               </Button>
//               <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
//                 <MessageCircle className="mr-2 w-5 h-5" />
//                 Schedule Demo
//               </Button>
//             </div>
            
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
//               <div className="text-center">
//                 <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mb-4">
//                   <Phone className="w-6 h-6 text-white" />
//                 </div>
//                 <h3 className="text-white font-semibold mb-2">Call Us</h3>
//                 <p className="text-blue-200">+1 (555) 123-4567</p>
//               </div>
              
//               <div className="text-center">
//                 <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mb-4">
//                   <MessageCircle className="w-6 h-6 text-white" />
//                 </div>
//                 <h3 className="text-white font-semibold mb-2">Email Us</h3>
//                 <p className="text-blue-200">contact@globopersona.com</p>
//               </div>
              
//               <div className="text-center">
//                 <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mb-4">
//                   <ArrowRight className="w-6 h-6 text-white" />
//                 </div>
//                 <h3 className="text-white font-semibold mb-2">Quick Start</h3>
//                 <p className="text-blue-200">Get started in 24 hours</p>
//               </div>
//             </div>
//           </motion.div>
//         </div>
        
//         <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent" />
//       </section>

//       {/* ===== FOOTER SECTION ===== */}
//       <footer className="bg-gray-900 text-white py-12 px-4">
//         <div className="container mx-auto">
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//             <div>
//               <h3 className="text-2xl font-bold mb-4">Globo Persona</h3>
//               <p className="text-gray-400">Innovating B2B and B2C solutions for a connected world.</p>
//             </div>
//             <div>
//               <h4 className="text-lg font-semibold mb-4">Services</h4>
//               <ul className="space-y-2 text-gray-400">
//                 <li>Web Development</li>
//                 <li>Digital Marketing</li>
//                 <li>Business Development</li>
//                 <li>Consulting</li>
//               </ul>
//             </div>
//             <div>
//               <h4 className="text-lg font-semibold mb-4">Company</h4>
//               <ul className="space-y-2 text-gray-400">
//                 <li>About Us</li>
//                 <li>Careers</li>
//                 <li>Contact</li>
//                 <li>Blog</li>
//               </ul>
//             </div>
//             <div>
//               <h4 className="text-lg font-semibold mb-4">Stay Connected</h4>
//               <p className="text-gray-400 mb-4">Subscribe to our newsletter</p>
//               <div className="flex">
//                 <input 
//                   type="email" 
//                   placeholder="Your email"
//                   className="bg-gray-800 text-white px-4 py-2 rounded-l-lg flex-grow"
//                 />
//                 <Button className="rounded-l-none bg-blue-600 hover:bg-blue-700">
//                   Subscribe
//                 </Button>
//               </div>
//             </div>
//           </div>
//           <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
//             <p>&copy; {new Date().getFullYear()} Globo Persona. All rights reserved.</p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   )
// }


// 'use client'

// import { useState, useEffect, useRef } from 'react'
// import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
// import { 
//   ChevronLeft, ChevronRight, Code, Palette, TrendingUp, 
//   Users, Globe, Shield, Target, Zap, ArrowRight, 
//   MessageCircle, Phone, CheckCircle, Headphones,
//   Building, Globe as GlobeIcon, Users as UsersIcon,
//   Sparkles, Link, Cloud, BarChart3
// } from 'lucide-react'
// import Image from 'next/image'

// // Button Component with proper TypeScript types
// interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
//   size?: 'default' | 'sm' | 'lg' | 'icon';
//   variant?: 'default' | 'outline' | 'secondary';
// }

// const Button = ({ children, className = '', size = 'default', variant = 'default', ...props }: ButtonProps) => {
//   const sizeClasses: Record<string, string> = {
//     default: 'h-10 px-6 py-2',
//     sm: 'h-8 px-4 text-sm',
//     lg: 'h-14 px-10 text-lg font-semibold',
//     icon: 'h-10 w-10'
//   }
  
//   const variantClasses: Record<string, string> = {
//     default: 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl',
//     outline: 'border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20',
//     secondary: 'bg-gray-800 text-white hover:bg-gray-700',
//   }
  
//   return (
//     <button
//       className={`inline-flex items-center justify-center whitespace-nowrap rounded-full font-medium transition-all duration-300 ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
//       {...props}
//     >
//       {children}
//     </button>
//   )
// }

// // Banner Carousel Data
// const slides = [
//   {
//     id: 1,
//     image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
//     title: 'Path to Perfect Client Connections',
//     description: 'Bridging businesses with their ideal customers through innovative technology and strategic insights.',
//     buttonText: 'Start Your Journey',
//   },
//   {
//     id: 2,
//     image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
//     title: 'Transform Your Business Outreach',
//     description: 'Advanced solutions for seamless B2B and B2C engagement.',
//     buttonText: 'Explore Solutions',
//   },
// ]

// // Infinite scrolling services
// const scrollingServices = [
//   'Enterprise Solutions',
//   'Digital Marketing',
//   'Web Development',
//   'Business Intelligence',
//   'Client Acquisition',
//   'Market Expansion',
//   'Brand Strategy',
//   'Customer Engagement',
// ]

// // Services Cards Data (4 cards)
// const services = [
//   {
//     id: 1,
//     title: 'Digital Transformation',
//     description: 'Comprehensive digital overhaul to modernize your business processes and customer interactions.',
//     icon: Sparkles,
//     bgColor: 'from-blue-500/10 to-purple-500/10',
//     borderColor: 'border-l-blue-500',
//     index: 1
//   },
//   {
//     id: 2,
//     title: 'Client Acquisition',
//     description: 'Strategic approaches to identify and engage your ideal customer base effectively.',
//     icon: Target,
//     bgColor: 'from-purple-500/10 to-pink-500/10',
//     borderColor: 'border-l-purple-500',
//     index: 2
//   },
//   {
//     id: 3,
//     title: 'Market Expansion',
//     description: 'Scale your business reach with data-driven market analysis and localization strategies.',
//     icon: GlobeIcon,
//     bgColor: 'from-pink-500/10 to-orange-500/10',
//     borderColor: 'border-l-pink-500',
//     index: 3
//   },
//   {
//     id: 4,
//     title: 'Growth Analytics',
//     description: 'Advanced analytics and insights to drive sustainable business growth and customer retention.',
//     icon: BarChart3,
//     bgColor: 'from-orange-500/10 to-blue-500/10',
//     borderColor: 'border-l-orange-500',
//     index: 4
//   },
// ]

// // Features/Why Choose Us Data
// const features = [
//   {
//     icon: Target,
//     title: 'Precision Targeting',
//     description: 'AI-powered analytics to identify and connect with your perfect client persona.',
//     gradient: 'from-blue-500 to-cyan-500'
//   },
//   {
//     icon: Link,
//     title: 'Seamless Integration',
//     description: 'Effortlessly connect with your existing systems and workflows.',
//     gradient: 'from-purple-500 to-pink-500'
//   },
//   {
//     icon: Cloud,
//     title: 'Cloud-First Approach',
//     description: 'Scalable solutions hosted on secure, reliable cloud infrastructure.',
//     gradient: 'from-green-500 to-emerald-500'
//   },
//   {
//     icon: UsersIcon,
//     title: 'Dedicated Partnership',
//     description: 'We work as an extension of your team, committed to your success.',
//     gradient: 'from-orange-500 to-red-500'
//   },
// ]

// export default function HomePage() {
//   const [currentSlide, setCurrentSlide] = useState(0)
//   const [scrollingServicesCopy, setScrollingServicesCopy] = useState([...scrollingServices, ...scrollingServices])
//   const servicesRef = useRef<HTMLDivElement>(null)
//   const { scrollYProgress } = useScroll({
//     target: servicesRef,
//     offset: ["start start", "end end"]
//   })

//   const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])

//   // Auto-rotate carousel
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % slides.length)
//     }, 5000)
//     return () => clearInterval(interval)
//   }, [])

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % slides.length)
//   }

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
//   }

//   return (
//     <div className="w-full overflow-hidden bg-gray-50">
//       {/* ===== HEADER ===== */}
//       {/* <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
//         <div className="container mx-auto px-6 py-4">
//           <div className="flex items-center justify-between">
//             <div className="flex items-center space-x-2">
//               <div className="h-10 w-10 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
//                 <span className="text-white font-bold text-xl">GP</span>
//               </div>
//               <div>
//                 <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//                   Globo Persona
//                 </h1>
//                 <p className="text-xs text-gray-500">Perfect Client Connections</p>
//               </div>
//             </div>
            
//             <nav className="hidden md:flex items-center space-x-8">
//               <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium">Services</a>
//               <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium">About</a>
//               <a href="#features" className="text-gray-700 hover:text-blue-600 font-medium">Why Choose Us</a>
//               <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium">Contact</a>
//             </nav>
            
//             <Button className="hidden md:inline-flex">
//               Get Started
//               <ArrowRight className="ml-2 w-4 h-4" />
//             </Button>
//           </div>
//         </div>
//       </header> */}

//       {/* ===== BANNER CAROUSEL SECTION ===== */}
//       <section className="relative h-screen overflow-hidden pt-16">
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={currentSlide}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.7 }}
//             className="absolute inset-0"
//           >
//             <div
//               className="absolute inset-0 bg-cover bg-center scale-105"
//               style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
//             />
//             {/* <div className="absolute inset-0 bg-gradient-to-r from-black-900/70 via-purple-900/50 to-transparent" /> */}
//             <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
//             <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30" />
//           </motion.div>
//         </AnimatePresence>

//         <div className="relative h-full flex items-center">
//           <div className="container mx-auto px-6 lg:px-12">
//             <motion.div
//               key={currentSlide}
//               initial={{ opacity: 0, y: 40 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -40 }}
//               transition={{ duration: 0.8 }}
//               className="max-w-3xl"
//             >
//               <h1 className="text-5xl md:text-7xl lg:text-6xl font-black text-white mb-8 leading-none tracking-tight">
//                 {slides[currentSlide].title}
//               </h1>
//               <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl font-light">
//                 {slides[currentSlide].description}
//               </p>
//               <div className="flex flex-col sm:flex-row gap-4">
//                 <Button size="lg">
//                   {slides[currentSlide].buttonText}
//                   <ArrowRight className="ml-3 w-5 h-5" />
//                 </Button>
//                 <Button size="lg" variant="outline">
//                   <MessageCircle className="mr-3 w-5 h-5" />
//                   Book a Demo
//                 </Button>
//               </div>
//             </motion.div>
//           </div>
//         </div>

//         {/* Carousel Controls */}
//         <button
//           onClick={prevSlide}
//           className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 z-10"
//         >
//           <ChevronLeft className="w-6 h-6" />
//         </button>
//         <button
//           onClick={nextSlide}
//           className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 z-10"
//         >
//           <ChevronRight className="w-6 h-6" />
//         </button>

//         {/* Indicators */}
//         <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex space-x-3 z-10">
//           {slides.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setCurrentSlide(index)}
//               className={`w-12 h-1.5 rounded-full transition-all duration-300 ${
//                 index === currentSlide ? 'bg-white' : 'bg-white/40'
//               }`}
//             />
//           ))}
//         </div>
//       </section>

//       {/* ===== INFINITE SCROLLING SERVICES ===== */}
//       <section className="py-8 bg-gradient-to-r from-blue-600 to-purple-600 overflow-hidden">
//         <div className="relative">
//           <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-blue-600 to-transparent z-5" />
//           <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-purple-600 to-transparent z-5" />
          
//           <motion.div
//             className="flex whitespace-nowrap"
//             animate={{
//               x: [0, -1920],
//             }}
//             transition={{
//               x: {
//                 repeat: Infinity,
//                 repeatType: "loop",
//                 duration: 30,
//                 ease: "linear",
//               },
//             }}
//           >
//             {scrollingServicesCopy.map((service, index) => (
//               <div key={index} className="inline-flex items-center mx-8">
//                 <span className="text-2xl font-bold text-white/90 px-4 py-2">
//                   {service}
//                 </span>
//                 <div className="w-2 h-2 rounded-full bg-white/50" />
//               </div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* ===== ABOUT SECTION ===== */}
//       <section id="about" className="py-24 px-6 lg:px-12 bg-white">
//         <div className="container mx-auto">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//             <motion.div
//               initial={{ opacity: 0, x: -40 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8 }}
//             >
//               <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
//                 About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Globo Persona</span>
//               </h2>
//               <div className="space-y-6 text-gray-600 text-lg">
//                 <p>
//                   Globo Persona is revolutionizing how businesses connect with their ideal clients. We blend cutting-edge 
//                   technology with deep market insights to create perfect client-business matches.
//                 </p>
//                 <p>
//                   Our platform serves as the bridge between ambitious businesses and their target audiences, 
//                   delivering measurable results through data-driven strategies and innovative solutions.
//                 </p>
//                 <p>
//                   With a global perspective and local expertise, we empower companies to expand their reach, 
//                   enhance engagement, and drive sustainable growth in today's dynamic market landscape.
//                 </p>
//               </div>
//               <div className="mt-10 flex flex-wrap gap-4">
//                 <Button>Discover More</Button>
//                 <Button variant="outline" className="text-gray-700 border-gray-300">
//                   Our Methodology
//                 </Button>
//               </div>
//             </motion.div>
            
//             <motion.div
//               initial={{ opacity: 0, x: 40 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//               className="relative"
//             >
//               <div className="relative h-[500px] w-full overflow-hidden rounded-3xl shadow-2xl">
//                 <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20" />
//                 <Image
//                   src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
//                   alt="Globo Persona Team Collaboration"
//                   fill
//                   className="object-cover"
//                   priority
//                 />
//               </div>
//               <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-2xl shadow-xl max-w-xs">
//                 <div className="text-3xl font-bold mb-2">50+</div>
//                 <div className="font-medium">Countries Reached</div>
//                 <div className="text-sm opacity-90">Global network of partners</div>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* ===== SERVICES SECTION ===== */}
//       <section id="services" ref={servicesRef} className="relative py-32 px-6 lg:px-12 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
//         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=10')] opacity-5 bg-cover bg-center" />
        
//         <div className="container mx-auto relative z-10">
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center mb-20"
//           >
//             <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
//               Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Services</span>
//             </h2>
//             <p className="text-gray-600 text-xl max-w-2xl mx-auto">
//               Tailored solutions designed to connect you with your perfect client persona
//             </p>
//           </motion.div>

//           <div className="relative max-w-4xl mx-auto">
//             {/* Vertical line connector */}
//             <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500" />
            
//             {/* Service Cards */}
//             {services.map((service, index) => (
//               <motion.div
//                 key={service.id}
//                 initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.8, delay: index * 0.2 }}
//                 className={`relative mb-16 ${index % 2 === 0 ? 'pr-1/2' : 'pl-1/2'}`}
//               >
//                 <div className={`relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border-l-4 ${service.borderColor} overflow-hidden group`}>
//                   <div className={`absolute inset-0 bg-gradient-to-r ${service.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
//                   <div className="relative p-8">
//                     <div className="flex items-start space-x-6">
//                       <div className={`p-4 rounded-xl bg-gradient-to-r ${service.borderColor.replace('border-l-', 'from-')} to-white shadow-lg`}>
//                         <service.icon className="w-8 h-8 text-white" />
//                       </div>
//                       <div className="flex-1">
//                         <div className="flex items-center mb-4">
//                           <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-sm mr-4">
//                             {service.index}
//                           </div>
//                           <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
//                         </div>
//                         <p className="text-gray-600 text-lg">{service.description}</p>
//                         <button className="mt-6 text-blue-600 hover:text-blue-700 font-medium flex items-center group">
//                           Learn More
//                           <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
//                         </button>
//                       </div>
//                     </div>
//                   </div>
                  
//                   {/* Floating decorative element */}
//                   <motion.div
//                     style={{ y }}
//                     className="absolute top-4 right-4 w-24 h-24 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-xl"
//                   />
//                 </div>
                
//                 {/* Connector dot */}
//                 <div className={`absolute top-1/2 transform -translate-y-1/2 w-4 h-4 rounded-full bg-gradient-to-r ${service.borderColor.replace('border-l-', 'from-')} shadow-lg ${
//                   index % 2 === 0 ? 'right-0 translate-x-1/2' : 'left-0 -translate-x-1/2'
//                 }`} />
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ===== WHY CHOOSE US SECTION ===== */}
//       <section id="features" className="py-24 px-6 lg:px-12 bg-white">
//         <div className="container mx-auto">
//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
//             {/* Left side - Heading */}
//             <motion.div
//               initial={{ opacity: 0, x: -40 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8 }}
//               className="lg:col-span-1"
//             >
//               <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
//                 Why <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Choose Us</span>
//               </h2>
//               <p className="text-gray-600 text-lg">
//                 We combine innovative technology with deep industry expertise to deliver exceptional results for your business.
//               </p>
//               <div className="mt-10">
//                 <Button size="lg">
//                   Experience Excellence
//                   <ArrowRight className="ml-3 w-5 h-5" />
//                 </Button>
//               </div>
//             </motion.div>

//             {/* Right side - Features with vertical divider */}
//             <motion.div
//               initial={{ opacity: 0, x: 40 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//               className="lg:col-span-2 relative"
//             >
//               {/* Vertical divider */}
//               <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500" />
              
//               <div className="ml-8 lg:ml-12">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                   {features.map((feature, index) => (
//                     <motion.div
//                       key={index}
//                       initial={{ opacity: 0, y: 20 }}
//                       whileInView={{ opacity: 1, y: 0 }}
//                       viewport={{ once: true }}
//                       transition={{ duration: 0.5, delay: index * 0.1 }}
//                       className="relative pl-8"
//                     >
//                       {/* Vertical line from divider */}
//                       <div className="absolute left-0 top-6 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500" />
                      
//                       <div className="p-6 rounded-2xl hover:bg-gradient-to-br hover:from-white hover:to-gray-50 transition-all duration-300 group">
//                         <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${feature.gradient} mb-4`}>
//                           <feature.icon className="w-6 h-6 text-white" />
//                         </div>
//                         <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
//                         <p className="text-gray-600">{feature.description}</p>
//                       </div>
//                     </motion.div>
//                   ))}
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* ===== CTA SECTION ===== */}
//       <section id="contact" className="py-20 px-6 lg:px-12 relative overflow-hidden">
//         <div className="container mx-auto">
//           <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
//             {/* 3/4 width CTA card */}
//             <motion.div
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className="lg:col-span-3 relative"
//             >
//               <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 to-purple-600 p-12 lg:p-16">
//                 {/* Background pattern */}
//                 <div className="absolute inset-0 opacity-10">
//                   <div className="absolute inset-0" style={{
//                     backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
//                     backgroundSize: '60px 60px'
//                   }} />
//                 </div>
                
//                 <div className="relative z-10">
//                   <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
//                     Ready to Connect with Your Perfect Clients?
//                   </h2>
//                   <p className="text-xl text-blue-100 mb-10 max-w-2xl">
//                     Join hundreds of successful businesses already using Globo Persona to transform their client acquisition.
//                   </p>
                  
//                   <div className="flex flex-col sm:flex-row gap-4">
//                     <div className="flex-1 max-w-md">
//                       <div className="bg-white/20 backdrop-blur-sm rounded-xl p-2 flex">
//                         <input
//                           type="email"
//                           placeholder="Enter your work email"
//                           className="flex-1 bg-transparent text-white placeholder-blue-200 px-4 py-3 outline-none"
//                         />
//                         <Button className="rounded-lg">
//                           Get Started
//                           <ArrowRight className="ml-2 w-4 h-4" />
//                         </Button>
//                       </div>
//                     </div>
//                     <Button variant="outline" size="lg">
//                       <MessageCircle className="mr-3 w-5 h-5" />
//                       Schedule Demo
//                     </Button>
//                   </div>
//                 </div>
                
//                 {/* Floating elements */}
//                 <motion.div
//                   animate={{ y: [0, -20, 0] }}
//                   transition={{ duration: 4, repeat: Infinity }}
//                   className="absolute top-8 right-8 w-32 h-32 rounded-full bg-white/5 blur-xl"
//                 />
//                 <motion.div
//                   animate={{ y: [0, 20, 0] }}
//                   transition={{ duration: 5, repeat: Infinity, delay: 1 }}
//                   className="absolute bottom-8 left-8 w-40 h-40 rounded-full bg-purple-500/10 blur-xl"
//                 />
//               </div>
//             </motion.div>

//             {/* 1/4 width Contact info */}
//             <motion.div
//               initial={{ opacity: 0, x: 40 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8, delay: 0.3 }}
//               className="lg:col-span-1"
//             >
//               <div className="bg-white rounded-3xl shadow-xl p-8 h-full">
//                 <h3 className="text-2xl font-bold text-gray-900 mb-8">Get in Touch</h3>
                
//                 <div className="space-y-6">
//                   <div className="flex items-center space-x-4">
//                     <div className="p-3 rounded-full bg-gradient-to-r from-blue-100 to-purple-100">
//                       <Phone className="w-5 h-5 text-blue-600" />
//                     </div>
//                     <div>
//                       <p className="text-sm text-gray-500">Call Us</p>
//                       <p className="font-semibold text-gray-900">+1 (555) 123-4567</p>
//                     </div>
//                   </div>
                  
//                   <div className="flex items-center space-x-4">
//                     <div className="p-3 rounded-full bg-gradient-to-r from-blue-100 to-purple-100">
//                       <MessageCircle className="w-5 h-5 text-blue-600" />
//                     </div>
//                     <div>
//                       <p className="text-sm text-gray-500">Email Us</p>
//                       <p className="font-semibold text-gray-900">hello@globopersona.com</p>
//                     </div>
//                   </div>
                  
//                   <div className="pt-6 border-t border-gray-100">
//                     <p className="text-sm text-gray-500 mb-4">Business Hours</p>
//                     <p className="font-medium text-gray-900">Mon - Fri: 9AM - 6PM</p>
//                     <p className="text-sm text-gray-600">Global support available</p>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* ===== FOOTER ===== */}
//       <footer className="bg-gray-900 text-white py-12 px-6">
//         <div className="container mx-auto">
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//             <div>
//               <div className="flex items-center space-x-3 mb-6">
//                 <div className="h-10 w-10 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
//                   <span className="text-white font-bold text-xl">GP</span>
//                 </div>
//                 <div>
//                   <h3 className="text-xl font-bold">Globo Persona</h3>
//                   <p className="text-sm text-gray-400">Perfect Client Connections</p>
//                 </div>
//               </div>
//               <p className="text-gray-400 text-sm">
//                 Transforming business connections through innovative technology and strategic insights.
//               </p>
//             </div>
            
//             <div>
//               <h4 className="font-semibold text-lg mb-4">Services</h4>
//               <ul className="space-y-2 text-gray-400">
//                 <li>Client Acquisition</li>
//                 <li>Market Expansion</li>
//                 <li>Digital Transformation</li>
//                 <li>Growth Analytics</li>
//               </ul>
//             </div>
            
//             <div>
//               <h4 className="font-semibold text-lg mb-4">Company</h4>
//               <ul className="space-y-2 text-gray-400">
//                 <li>About Us</li>
//                 <li>Careers</li>
//                 <li>Blog</li>
//                 <li>Partners</li>
//               </ul>
//             </div>
            
//             <div>
//               <h4 className="font-semibold text-lg mb-4">Stay Updated</h4>
//               <p className="text-gray-400 text-sm mb-4">Subscribe to our newsletter</p>
//               <div className="flex">
//                 <input 
//                   type="email" 
//                   placeholder="Your email"
//                   className="bg-gray-800 text-white px-4 py-3 rounded-l-lg flex-grow text-sm"
//                 />
//                 <Button className="rounded-l-none text-sm">
//                   Subscribe
//                 </Button>
//               </div>
//             </div>
//           </div>
          
//           <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
//             <p>&copy; {new Date().getFullYear()} Globo Persona. All rights reserved.</p>
//             <p className="mt-2">Path to Perfect Client Connections</p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   )
// }




// 'use client'

// import { useState, useEffect, useRef } from 'react'
// import { motion, AnimatePresence, useScroll, useTransform, MotionValue } from 'framer-motion'
// import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'
// import Image from 'next/image'
// import Lenis from '@studio-freight/lenis'

// // --- REUSABLE COMPONENTS ---
// interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
//   size?: 'default' | 'sm' | 'lg' | 'icon';
//   variant?: 'default' | 'outline' | 'secondary';
// }

// const Button = ({ children, className = '', size = 'default', variant = 'default', ...props }: ButtonProps) => {
//   const sizeClasses: Record<string, string> = {
//     default: 'h-10 px-6 py-2',
//     sm: 'h-8 px-4 text-sm',
//     lg: 'h-14 px-10 text-lg font-semibold',
//     icon: 'h-10 w-10'
//   }
  
//   const variantClasses: Record<string, string> = {
//     default: 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700',
//     outline: 'border-2 border-white/30 bg-white/10 text-white hover:bg-white/20',
//     secondary: 'bg-gray-800 text-white hover:bg-gray-700',
//   }
  
//   return (
//     <button
//       className={`inline-flex items-center justify-center whitespace-nowrap rounded-lg font-medium transition-all ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
//       {...props}
//     >
//       {children}
//     </button>
//   )
// }

// // --- CARD COMPONENT ---
// // This is where the magic happens. 
// const Card = ({ 
//   project, 
//   index, 
//   progress, 
//   range, 
//   targetScale 
// }: { 
//   project: any, 
//   index: number, 
//   progress: MotionValue<number>, 
//   range: number[], 
//   targetScale: number 
// }) => {
//   const containerRef = useRef<HTMLDivElement>(null)
  
//   // Image scaling: Local scroll progress (when THIS card is in view)
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ['start end', 'start start']
//   })
//   const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1])
  
//   // Card scaling: Global scroll progress (passed from parent)
//   const scale = useTransform(progress, range, [1, targetScale])

//   return (
//     <div 
//       ref={containerRef} 
//       className="h-screen flex items-center justify-center sticky top-0"
//       // This 'top' calculation ensures the "stack" effect (blue borders visible)
//       // Card 0 sticks at top: 0
//       // Card 1 sticks at top: 25px
//       // Card 2 sticks at top: 50px ...etc
//       style={{ top: index * 30 }} 
//     >
//       <motion.div
//         className="w-[90vw] max-w-6xl h-[70vh] rounded-2xl p-12 flex items-center gap-12 shadow-2xl bg-white border-t-4 border-blue-600 overflow-hidden relative origin-top"
//         style={{ 
//           scale,
//           // Natural DOM order handles z-index for sticky elements, 
//           // but we can enforce it if needed. 
//           // index 0 is at bottom, index 1 slides over it, index 2 slides over 1...
//         }}
//       >
//         {/* IMAGE LEFT SIDE */}
//         <div className="flex-shrink-0 w-[45%] h-full relative overflow-hidden rounded-xl">
//           <motion.div className="w-full h-full" style={{ scale: imageScale }}>
//             <Image
//               src={project.image}
//               alt={project.title}
//               fill
//               className="object-cover"
//               sizes="45vw"
//               priority={index === 0}
//             />
//           </motion.div>
//         </div>

//         {/* CONTENT RIGHT SIDE */}
//         <div className="flex-1 flex flex-col justify-center space-y-5">
//           <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
//             {project.title}
//           </h2>
//           <p className="text-base md:text-lg text-gray-700 leading-relaxed">
//             {project.description}
//           </p>
//           <div>
//             <a 
//               href="#" 
//               className="inline-flex px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all items-center gap-2"
//             >
//               Learn More
//               <ArrowRight className="w-4 h-4" />
//             </a>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   )
// }

// // --- MAIN PAGE COMPONENT ---
// export default function HomePage() {
//   const containerRef = useRef<HTMLDivElement>(null)
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ['start start', 'end end']
//   })

//   // Projects Data
//   const projects = [
//     {
//       title: 'Web Development',
//       description: 'Modern responsive websites built with Next.js, React, TailwindCSS & TypeScript.',
//       image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop',
//     },
//     {
//       title: 'SEO',
//       description: 'Search engine optimization strategies that drive organic traffic.',
//       image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop',
//     },
//     {
//       title: 'Lead Generation',
//       description: 'High-converting landing pages & sales funnels.',
//       image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop',
//     },
//     {
//       title: 'BDE',
//       description: 'Business Development Engine & revenue growth.',
//       image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop',
//     }
//   ]

//   // Hero Slides Data
//   const slides = [
//     {
//       id: 1,
//       image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
//       title: 'Path to Perfect Client Connections',
//       description: 'Bridging businesses with ideal customers.',
//       buttonText: 'Start Your Journey',
//     },
//     {
//       id: 2,
//       image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
//       title: 'Transform Your Business Outreach',
//       description: 'Advanced B2B and B2C solutions.',
//       buttonText: 'Explore Solutions',
//     },
//   ]

//   const [currentSlide, setCurrentSlide] = useState(0)

//   // Lenis Smooth Scroll
//   useEffect(() => {
//     const lenis = new Lenis({
//       duration: 1.2,
//       easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
//       smoothWheel: true
//     })
//     function raf(time: number) {
//       lenis.raf(time)
//       requestAnimationFrame(raf)
//     }
//     requestAnimationFrame(raf)
//     return () => lenis.destroy()
//   }, [])

//   // Auto-rotate hero
//   useEffect(() => {
//     const interval = setInterval(() => setCurrentSlide((prev) => (prev + 1) % slides.length), 5000)
//     return () => clearInterval(interval)
//   }, [])

//   return (
//     <main className="bg-slate-950">
      
//       {/* HERO SECTION (Unchanged) */}
//       <section className="relative h-screen overflow-hidden">
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={currentSlide}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.7 }}
//             className="absolute inset-0"
//           >
//             <div className="absolute inset-0 bg-cover bg-center scale-105" style={{ backgroundImage: `url(${slides[currentSlide].image})` }} />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
//           </motion.div>
//         </AnimatePresence>

//         <div className="relative h-full flex items-center z-10 px-6">
//           <div className="container mx-auto">
//              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-4xl">
//               {slides[currentSlide].title}
//             </h1>
//             <p className="text-base md:text-lg text-gray-200 mb-8 max-w-2xl">
//               {slides[currentSlide].description}
//             </p>
//              <Button size="lg">
//                 {slides[currentSlide].buttonText}
//                 <ArrowRight className="ml-2 w-5 h-5" />
//               </Button>
//           </div>
//         </div>
//          {/* Controls (Arrows) */}
//          <button onClick={() => setCurrentSlide((p) => (p - 1 + slides.length) % slides.length)} className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full backdrop-blur-sm transition-all"><ChevronLeft className="w-6 h-6"/></button>
//          <button onClick={() => setCurrentSlide((p) => (p + 1) % slides.length)} className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full backdrop-blur-sm transition-all"><ChevronRight className="w-6 h-6"/></button>
//       </section>

//       {/* SERVICE HEADER */}
//        <section className="py-20 flex items-center justify-center text-center px-6">
//         <div className="max-w-4xl space-y-4">
//           <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
//             Our Services
//           </h1>
//           <p className="text-base md:text-lg text-slate-300">
//             Comprehensive digital solutions from web to business growth.
//           </p>
//         </div>
//       </section>

//       {/* PARALLAX STACK SECTION */}
//       {/* 'ref' goes here to track the scroll progress of the entire stack container */}
//       <div ref={containerRef} className="relative pb-[10vh]">
//         {projects.map((project, index) => {
//           // Dynamic scaling logic
//           // As we scroll, the 'targetScale' is how small the card eventually gets
//           // Card 0 shrinks to 0.8
//           // Card 1 shrinks to 0.85
//           // ...etc.
//           const targetScale = 1 - ((projects.length - index) * 0.05)
          
//           return (
//             <Card 
//               key={index}
//               index={index}
//               project={project}
//               progress={scrollYProgress}
//               // This range ensures the scaling happens exactly as the NEXT card arrives
//               range={[index * 0.25, 1]}
//               targetScale={targetScale}
//             />
//           )
//         })}
//       </div>
      
//        {/* Footer / Next Section Placeholder */}
//        <section className="h-screen flex items-center justify-center bg-slate-900 text-white">
//           <h2 className="text-4xl font-bold">Next Section</h2>
//        </section>

//     </main>
//   )
// }



// 'use client'

// import { useState, useEffect, useRef, useMemo } from 'react'
// import { motion, AnimatePresence, useScroll, useTransform, MotionValue } from 'framer-motion'
// import { 
//   ChevronLeft, ChevronRight, ArrowRight, MessageCircle, Phone, Target, Link, Cloud, Users as UsersIcon, Layers, Lightbulb, Database, 
// } from 'lucide-react'
// import Image from 'next/image'
// import Lenis from '@studio-freight/lenis'

// // ===== BUTTON COMPONENT =====
// interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
//   size?: 'default' | 'sm' | 'lg' | 'icon';
//   variant?: 'default' | 'outline' | 'secondary';
// }

// const Button = ({ children, className = '', size = 'default', variant = 'default', ...props }: ButtonProps) => {
//   const sizeClasses: Record<string, string> = {
//     default: 'h-10 px-6 py-2',
//     sm: 'h-8 px-4 text-sm',
//     lg: 'h-14 px-10 text-lg font-semibold',
//     icon: 'h-10 w-10'
//   }
  
//   const variantClasses: Record<string, string> = {
//     default: 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl',
//     outline: 'border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20',
//     secondary: 'bg-gray-800 text-white hover:bg-gray-700',
//   }
  
//   return (
//     <button
//       className={`inline-flex items-center justify-center whitespace-nowrap rounded-full font-medium transition-all duration-300 ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
//       {...props}
//     >
//       {children}
//     </button>
//   )
// }

// // ===== BANNER DATA =====
// const slides = [
//   {
//     id: 1,
//     image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
//     title: 'Path to Perfect Client Connections',
//     description: 'Bridging businesses with their ideal customers through innovative technology and strategic insights.',
//     buttonText: 'Start Your Journey',
//   },
//   {
//     id: 2,
//     image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
//     title: 'Transform Your Business Outreach',
//     description: 'Advanced solutions for seamless B2B and B2C engagement.',
//     buttonText: 'Explore Solutions',
//   },
// ]

// // ===== INFINITE SCROLLING SERVICES =====
// const scrollingServices = [
//   'Enterprise Solutions',
//   'Digital Marketing',
//   'Web Development',
//   'Business Intelligence',
//   'Client Acquisition',
//   'Market Expansion',
//   'Brand Strategy',
//   'Customer Engagement',
// ]



// // ===== PARALLAX CARDS DATA =====
// const Projects = [
//   {
//     title: 'Web Development',
//     desc: 'Fast, scalable, conversion focused websites built with modern tech.',
//     image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1600&q=80',
//   },
//   {
//     title: 'SEO & Growth',
//     desc: 'Long term organic growth strategies that actually convert.',
//     image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=1600&q=80',
//   },
//   {
//     title: 'Lead Generation',
//     desc: 'High quality leads using funnels, ads and landing pages.',
//     image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1600&q=80',
//   },
//   {
//     title: 'Brand Strategy',
//     desc: 'Positioning your brand to win in a crowded market.',
//     image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&q=80',
//   },
// ]

// // ===== FEATURES DATA =====
// const points = [
//   {
//     icon: Layers,
//     title: 'Creators Of Digital Excellence',
//     desc: 'We craft tailored digital solutions that elevate brands and deliver measurable impact.',
//   },
//   {
//     icon: Lightbulb,
//     title: 'Innovating The Digital Landscape',
//     desc: 'Driven by creativity and technology, we help brands stand out in competitive markets.',
//   },
//   {
//     icon: Database,
//     title: 'Helping Brands Thrive Online',
//     desc: 'We build scalable systems and strategies that create long-term business value.',
//   },
//   {
//     icon: Target,
//     title: 'Results Focused Approach',
//     desc: 'Every decision we make is tied to performance, growth, and real outcomes.',
//   },
// ]


// // // --- CARD COMPONENT ---
// // // This is where the magic happens. 
// const Card = ({ 
//   project, 
//   index, 
//   progress, 
//   range, 
//   targetScale 
// }: { 
//   project: any; 
//   index: number; 
//   progress: MotionValue<number>; 
//   range: number[]; 
//   targetScale: number 
// }) => {
//   const ref = useRef<HTMLDivElement>(null)
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ['start end', 'start start']
//   })
  
//   const scale = useTransform(progress, range, [1, targetScale])
//   const imageScale = useTransform(scrollYProgress, [0, 1], [1.8, 1])

//   return (
//     <motion.div
//       ref={ref}
//       className="h-[80vh] flex items-center justify-center sticky top-0"
//       style={{ top: `${index * 25}px`, scale }}
//     >
//       <div className="w-[90vw] max-w-6xl h-[65vh] rounded-3xl p-8 md:p-12 flex items-center gap-8 shadow-2xl bg-white/95 backdrop-blur-md border border-blue-200 border-t-8 border-blue-500 overflow-hidden relative">
        
//         {/* ✅ FIXED IMAGE CONTAINER - Added relative */}
//         <div className="w-[40%] h-[90%] relative rounded-2xl overflow-hidden flex-shrink-0">
//           <motion.div className="w-full h-full relative" style={{ scale: imageScale }}> {/* ✅ relative here */}
//             <Image
//               src={project.image}
//               alt={project.title}
//               fill
//               className="object-cover"
//               sizes="(max-width: 768px) 40vw, 50vw"
//             />
//           </motion.div>
//         </div>
        
//         {/* CONTENT */}
//         <div className="flex-1 space-y-4">
//           <h2 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
//             {project.title}
//           </h2>
//           <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-lg">
//             {project.desc}
//           </p>
//           <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg">
//             Learn More <ArrowRight className="ml-2 w-4 h-4 inline" />
//           </button>
//         </div>
//       </div>
//     </motion.div>
//   )
// }


// // ===== MAIN PAGE COMPONENT =====
// export default function HomePage() {
//   const [currentSlide, setCurrentSlide] = useState(0)
//   const [scrollingServicesCopy, setScrollingServicesCopy] = useState([...scrollingServices, ...scrollingServices])
//   const containerRef = useRef<HTMLDivElement>(null)
//   // const { scrollYProgress } = useScroll({
//   //   target: containerRef,
//   //   offset: ['start start', 'end end']
//   // })
//      // 1. CREATE SEPARATE REF FOR PARALLAX
// const parallaxRef = useRef<HTMLDivElement>(null) // NEW REF!
// const { scrollYProgress } = useScroll({
//   target: parallaxRef,  // Use parallaxRef here!
//   offset: ['0 1', '1 1']
// })



//   // Lenis smooth scroll
//   useEffect(() => {
//     const lenis = new Lenis({
//       duration: 1.2,
//       easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
//       smoothWheel: true
//     })
//     function raf(time: number) {
//       lenis.raf(time)
//       requestAnimationFrame(raf)
//     }
//     requestAnimationFrame(raf)
//     return () => lenis.destroy()
//   }, [])

//   // Auto-rotate hero
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % slides.length)
//     }, 5000)
//     return () => clearInterval(interval)
//   }, [])

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % slides.length)
//   }

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
//   }

 

//   return (
//     <div className="w-full overflow-hidden bg-gray-50">
      
//       {/* ===== BANNER CAROUSEL SECTION ===== */}
//       <section className="relative h-screen overflow-hidden pt-16">
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={currentSlide}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.7 }}
//             className="absolute inset-0"
//           >
//             <div
//               className="absolute inset-0 bg-cover bg-center scale-105"
//               style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
//             <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30" />
//           </motion.div>
//         </AnimatePresence>

//         <div className="relative h-full flex items-center px-6">
//           <div className="container mx-auto lg:px-12">
//             <motion.div
//               key={currentSlide}
//               initial={{ opacity: 0, y: 40 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -40 }}
//               transition={{ duration: 0.8 }}
//               className="max-w-3xl"
//             >
//               <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 md:mb-8 leading-none tracking-tight">
//                 {slides[currentSlide].title}
//               </h1>
//               <p className="text-lg md:text-xl text-gray-200 mb-8 md:mb-10 max-w-2xl font-light">
//                 {slides[currentSlide].description}
//               </p>
//               <div className="flex flex-col sm:flex-row gap-4">
//                 <Button size="lg">
//                   {slides[currentSlide].buttonText}
//                   <ArrowRight className="ml-3 w-5 h-5" />
//                 </Button>
//                 <Button size="lg" variant="outline">
//                   <MessageCircle className="mr-3 w-5 h-5" />
//                   Book a Demo
//                 </Button>
//               </div>
//             </motion.div>
//           </div>
//         </div>

//         {/* Carousel Controls */}
//         <button
//           onClick={prevSlide}
//           className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 z-10"
//         >
//           <ChevronLeft className="w-6 h-6" />
//         </button>
//         <button
//           onClick={nextSlide}
//           className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 z-10"
//         >
//           <ChevronRight className="w-6 h-6" />
//         </button>

//         {/* Indicators */}
//         <div className="absolute bottom-8 md:bottom-10 left-1/2 -translate-x-1/2 flex space-x-2 md:space-x-3 z-10">
//           {slides.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setCurrentSlide(index)}
//               className={`h-1.5 rounded-full transition-all duration-300 ${
//                 index === currentSlide ? 'bg-white w-8' : 'bg-white/40 w-6'
//               }`}
//             />
//           ))}
//         </div>
//       </section>

//       {/* ===== INFINITE SCROLLING SERVICES ===== */}
//       <section className="py-4 md:py-6 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
//         <div className="relative h-16 md:h-8">
//           <div className="absolute inset-y-0 left-0 w-12 md:w-24 bg-gradient-to-r from-slate-900 to-transparent z-5" />
//           <div className="absolute inset-y-0 right-0 w-12 md:w-24 bg-gradient-to-l from-slate-900 to-transparent z-5" />
          
//           <motion.div
//             className="flex whitespace-nowrap h-full items-center"
//             animate={{
//               x: [0, -1920],
//             }}
//             transition={{
//               x: {
//                 repeat: Infinity,
//                 repeatType: "loop",
//                 duration: 30,
//                 ease: "linear",
//               },
//             }}
//           >
//             {scrollingServicesCopy.map((service, index) => (
//               <div key={index} className="inline-flex items-center mx-4 md:mx-8 h-full">
//                 <span className="text-lg md:text-xl font-bold text-white/90 px-2 md:px-4 py-2 whitespace-nowrap">
//                   {service}
//                 </span>
//                 <div className="w-2 h-2 rounded-full bg-white/50 ml-4 md:ml-8" />
//               </div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* ===== ABOUT SECTION ===== */}
//       <section id="about" className="py-16 md:py-24 px-6 lg:px-12 bg-white">
//         <div className="container mx-auto">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
//             <motion.div
//               initial={{ opacity: 0, x: -40 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8 }}
//             >
//               <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 md:mb-8 leading-tight">
//                 About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Globo Persona</span>
//               </h2>
//               <div className="space-y-4 md:space-y-6 text-gray-600 text-base md:text-lg">
//                 <p>
//                   Globo Persona is revolutionizing how businesses connect with their ideal clients. We blend cutting-edge 
//                   technology with deep market insights to create perfect client-business matches.
//                 </p>
//                 <p>
//                   Our platform serves as the bridge between ambitious businesses and their target audiences, 
//                   delivering measurable results through data-driven strategies and innovative solutions.
//                 </p>
//                 <p>
//                   With a global perspective and local expertise, we empower companies to expand their reach, 
//                   enhance engagement, and drive sustainable growth in today's dynamic market landscape.
//                 </p>
//               </div>
//               <div className="mt-8 md:mt-10 flex flex-wrap gap-4">
//                 <Button>Discover More</Button>
//                 <Button variant="outline" className="text-gray-700 border-gray-300">
//                   Our Methodology
//                 </Button>
//               </div>
//             </motion.div>
            
//             <motion.div
//               initial={{ opacity: 0, x: 40 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//               className="relative"
//             >
//               <div className="relative h-80 md:h-[500px] w-full overflow-hidden rounded-3xl shadow-2xl">
//                 <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20" />
//                 <Image
//                   src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
//                   alt="Globo Persona Team Collaboration"
//                   fill
//                   className="object-cover"
//                   priority
//                 />
//               </div>
//               <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 md:p-8 rounded-2xl shadow-xl max-w-xs">
//                 <div className="text-2xl md:text-3xl font-bold mb-2">50+</div>
//                 <div className="font-medium text-sm md:text-base">Countries Reached</div>
//                 <div className="text-xs md:text-sm opacity-90">Global network of partners</div>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//             {/* ===== PARALLAX SERVICES SECTION ===== */}
// {/* SERVICE HEADER */}

//        <section className="py-20 flex items-center justify-center text-center px-6 bg-gradient-to-b from-gray-50 to-white">
//   <div className="max-w-4xl space-y-4">
//     <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
//       Our Services
//     </h1>
//     <p className="text-base md:text-lg text-slate-600">
//       Comprehensive digital solutions from web to business growth.
//     </p>
//   </div>
// </section>

// {/* PARALLAX STACK SECTION - NOW ACTIVE! */}
// <div ref={parallaxRef} className="relative pb-[10vh]">
//   {Projects.map((project, index) => {  // ✅ FIXED: Projects (PascalCase)
//     const targetScale = 1 - ((Projects.length - index) * 0.05)
    
//     return (
//       <Card 
//         key={index}
//         index={index}
//         project={project}
//         progress={scrollYProgress}
//         range={[index * 0.25, 1]}
//         targetScale={targetScale}
//       />
//     )
//   })}
// </div>


//       {/* ===== WHY CHOOSE US SECTION ===== */}
//       <section className="py-32 bg-white">
//       <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20">

//         {/* LEFT */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//         >
//           <span className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 mb-6">
//             <span className="w-2 h-2 bg-blue-500 rounded-full" />
//             ABOUT AGENCY
//           </span>

//           <h2 className="text-4xl lg:text-5xl font-semibold text-black leading-tight mb-8">
//             Crafting <span className="text-blue-600">unique digital</span>
//             <br />
//             experiences that elevate
//             <br />
//             your brand
//           </h2>

//           <Button className="rounded-full px-6 py-6 text-base">
//             More About
//             <ArrowRight className="ml-2" size={16} />
//           </Button>
//         </motion.div>

//         {/* RIGHT */}
//         <div className="relative space-y-12">
//           <div className="absolute left-5 top-0 h-full w-px bg-gray-200" />

//           {points.map((item, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               className="relative flex gap-6 pl-16"
//             >
//               <div className="absolute left-2 top-2 w-6 h-6 rounded-full bg-white border-2 border-blue-500 flex items-center justify-center">
//                 <div className="w-2 h-2 bg-blue-500 rounded-full" />
//               </div>

//               <div>
//                 <item.icon className="text-blue-600 mb-3" size={28} />
//                 <h3 className="text-lg font-semibold text-black mb-2">
//                   {item.title}
//                 </h3>
//                 <p className="text-gray-600 leading-relaxed">
//                   {item.desc}
//                 </p>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//       </div>
//     </section>
//   )

//       {/* ===== CTA SECTION ===== */}
//  <section className="py-20 px-4 md:px-8 lg:px-16 relative overflow-hidden">
//          <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900" />
//          <div 
//           className="absolute inset-0 opacity-10 bg-cover bg-center"
//           style={{ 
//             backgroundImage: 'url(https://images.unsplash.com/photo-1558603668-6570496b66f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)' 
//           }}
//         />
        
//         <div className="container mx-auto relative z-10">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5 }}
//             className="max-w-4xl mx-auto text-center"
//           >
//             <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
//               Ready to Transform Your Business?
//             </h2>
//             <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
//               Join hundreds of businesses that trust Globo Persona for their B2B and B2C solutions.
//             </p>
            
//             <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
//               <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
//                 Start Free Trial
//                 <ArrowRight className="ml-2 w-5 h-5" />
//               </Button>
//               <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
//                 <MessageCircle className="mr-2 w-5 h-5" />
//                 Schedule Demo
//               </Button>
//             </div>
            
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
//               <div className="text-center">
//                 <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mb-4">
//                   <Phone className="w-6 h-6 text-white" />
//                 </div>
//                 <h3 className="text-white font-semibold mb-2">Call Us</h3>
//                 <p className="text-blue-200">+1 (555) 123-4567</p>
//               </div>
              
//               <div className="text-center">
//                 <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mb-4">
//                   <MessageCircle className="w-6 h-6 text-white" />
//                 </div>
//                 <h3 className="text-white font-semibold mb-2">Email Us</h3>
//                 <p className="text-blue-200">contact@globopersona.com</p>
//               </div>
              
//               <div className="text-center">
//                 <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mb-4">
//                   <ArrowRight className="w-6 h-6 text-white" />
//                 </div>
//                 <h3 className="text-white font-semibold mb-2">Quick Start</h3>
//                 <p className="text-blue-200">Get started in 24 hours</p>
//               </div>
//             </div>
//           </motion.div>
//         </div>
        
//         <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent" />
//       </section>


//       {/* ===== FOOTER ===== */}
//       <footer className="bg-gray-900 text-white py-8 md:py-12 px-6">
//         <div className="container mx-auto">
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-8">
//             <div>
//               <div className="flex items-center space-x-3 mb-4 md:mb-6">
//                 <div className="h-10 w-10 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
//                   <span className="text-white font-bold text-xl">GP</span>
//                 </div>
//                 <div>
//                   <h3 className="text-lg md:text-xl font-bold">Globo Persona</h3>
//                   <p className="text-xs md:text-sm text-gray-400">Perfect Client Connections</p>
//                 </div>
//               </div>
//               <p className="text-gray-400 text-xs md:text-sm">
//                 Transforming business connections through innovative technology and strategic insights.
//               </p>
//             </div>
            
//             <div>
//               <h4 className="font-semibold text-base md:text-lg mb-3 md:mb-4">Services</h4>
//               <ul className="space-y-2 text-gray-400 text-xs md:text-sm">
//                 <li className="hover:text-white cursor-pointer transition">Client Acquisition</li>
//                 <li className="hover:text-white cursor-pointer transition">Market Expansion</li>
//                 <li className="hover:text-white cursor-pointer transition">Digital Transformation</li>
//                 <li className="hover:text-white cursor-pointer transition">Growth Analytics</li>
//               </ul>
//             </div>
            
//             <div>
//               <h4 className="font-semibold text-base md:text-lg mb-3 md:mb-4">Company</h4>
//               <ul className="space-y-2 text-gray-400 text-xs md:text-sm">
//                 <li className="hover:text-white cursor-pointer transition">About Us</li>
//                 <li className="hover:text-white cursor-pointer transition">Careers</li>
//                 <li className="hover:text-white cursor-pointer transition">Blog</li>
//                 <li className="hover:text-white cursor-pointer transition">Partners</li>
//               </ul>
//             </div>
            
//             <div>
//               <h4 className="font-semibold text-base md:text-lg mb-3 md:mb-4">Stay Updated</h4>
//               <p className="text-gray-400 text-xs md:text-sm mb-3 md:mb-4">Subscribe to our newsletter</p>
//               <div className="flex gap-2">
//                 <input 
//                   type="email" 
//                   placeholder="Your email"
//                   className="bg-gray-800 text-white px-3 md:px-4 py-2 rounded-l-lg flex-grow text-xs md:text-sm placeholder-gray-500"
//                 />
//                 <Button className="rounded-l-none text-xs md:text-sm px-3 md:px-4">
//                   Subscribe
//                 </Button>
//               </div>
//             </div>
//           </div>
          
//           <div className="border-t border-gray-800 pt-6 md:pt-8 text-center text-gray-400 text-xs md:text-sm">
//             <p>&copy; {new Date().getFullYear()} Globo Persona. All rights reserved.</p>
//             <p className="mt-2">Path to Perfect Client Connections</p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   )
// }




// 'use client';

// import React, { useState, useEffect, useRef } from 'react';
// import Image from 'next/image';
// import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
// import { ChevronRight, Layers, Database, Lightbulb, Target, ArrowRight} from 'lucide-react';


// // ===== BUTTON COMPONENT =====

// interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
//   size?: 'default' | 'sm' | 'lg' | 'icon';
//   variant?: 'default' | 'outline' | 'secondary';
// }

// const Button = ({ children, className = '', size = 'default', variant = 'default', ...props }: ButtonProps) => {
//   const sizeClasses: Record<string, string> = {
//     default: 'h-10 px-6 py-2',
//     sm: 'h-8 px-4 text-sm',
//     lg: 'h-14 px-10 text-lg font-semibold',
//     icon: 'h-10 w-10'
//   }
  
//   const variantClasses: Record<string, string> = {
//     default: 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl',
//     outline: 'border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20',
//     secondary: 'bg-gray-800 text-white hover:bg-gray-700',
//   }
  
//   return (
//     <button
//       className={`inline-flex items-center justify-center whitespace-nowrap rounded-full font-medium transition-all duration-300 ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
//       {...props}
//     >
//       {children}
//     </button>
//   )
// }

// // ============================================
// // CUSTOM CURSOR COMPONENT
// // ============================================

// const CustomCursor = () => {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [isHoveringInteractive, setIsHoveringInteractive] = useState(false);
//   const cursorRef = useRef(null);
//   const dotRef = useRef(null);

//   useEffect(() => {
//     const handleMouseMove = (e:any) => {
//       setMousePosition({ x: e.clientX, y: e.clientY });

//       // Check if hovering over interactive elements
//       const target = e.target as HTMLElement;
//       const isInteractive =
//         target.tagName === 'BUTTON' ||
//         target.tagName === 'A' ||
//         target.classList.contains('interactive-element') ||
//         target.closest('button') ||
//         target.closest('a') ||
//         target.closest('.interactive-element');

//       setIsHoveringInteractive(!!isInteractive);
//     };

//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, []);

//   return (
//     <>
//       <motion.div
//         ref={cursorRef}
//         className={`fixed w-8 h-8 border-2 border-blue-600 rounded-full pointer-events-none z-50 ${
//           isHoveringInteractive ? 'scale-150' : 'scale-100'
//         }`}
//         animate={{
//           x: mousePosition.x - 16,
//           y: mousePosition.y - 16,
//         }}
//         transition={{ type: 'spring', stiffness: 500, damping: 28 }}
//       />
//       <motion.div
//         ref={dotRef}
//         className="fixed w-2 h-2 bg-blue-600 rounded-full pointer-events-none z-50"
//         animate={{
//           x: mousePosition.x - 4,
//           y: mousePosition.y - 4,
//         }}
//         transition={{ type: 'spring', stiffness: 800, damping: 35 }}
//       />
//     </>
//   );
// };

// // ============================================
// // WORD BY WORD ANIMATION COMPONENT
// // ============================================
// const AnimatedHeading = ({ text, className = '' }: { text: string; className?: string }) => {
//   const words = text.split(' ');

//   return (
//     <div className={`flex flex-wrap gap-2 ${className}`}>
//       {words.map((word, index) => (
//         <motion.span
//           key={index}
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: index * 0.1 }}
//           viewport={{ once: true }}
//           className="inline-block"
//         >
//           {word}
//         </motion.span>
//       ))}
//     </div>
//   );
// };

// // ============================================
// // HERO BANNER WITH CAROUSEL
// // ============================================
// const HeroBanner = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
  
//   const slides = [
//     {
//       image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&h=1080&fit=crop',
//       heading: 'Perfect Client Connections',
//       subheading: 'Connect with your ideal clients effortlessly',
//       buttonText: 'Get Started',
//     },
//     {
//       image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
//       heading: 'Scale Your Business',
//       subheading: 'Reach new markets and grow exponentially',
//       buttonText: 'Learn More',
//     },
//     {
//       image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&h=1080&fit=crop',
//       heading: 'Transform Your Strategy',
//       subheading: 'Data-driven solutions for modern businesses',
//       buttonText: 'Explore Now',
//     },
//   ];

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % slides.length);
//     }, 5000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <section className="relative w-full h-screen overflow-hidden">
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={currentSlide}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.8 }}
//           className="absolute inset-0"
//         >
//           <Image
//             src={slides[currentSlide].image}
//             alt="Hero slide"
//             fill
//             className="object-cover"
//             priority
//           />
//           {/* Dark Overlay */}
//           <div className="absolute inset-0 bg-black/40" />
//         </motion.div>
//       </AnimatePresence>

//       {/* Content */}
//       <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
//         <motion.div
//           key={currentSlide}
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: -30 }}
//           transition={{ duration: 0.8 }}
//         >
//           <AnimatedHeading
//             text={slides[currentSlide].heading}
//             className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
//           />
//           <p className="text-lg md:text-4xl text-gray-200 mb-8 max-w-2xl mx-auto">
//             {slides[currentSlide].subheading}
//           </p>
//           <button className="interactive-element px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all transform hover:scale-105">
//             {slides[currentSlide].buttonText}
//           </button>
//         </motion.div>
//       </div>

//       {/* Carousel Indicators */}
//       <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
//         {slides.map((_, index) => (
//           <motion.button
//             key={index}
//             onClick={() => setCurrentSlide(index)}
//             className={`w-2 h-2 rounded-full transition-all ${
//               index === currentSlide ? 'w-8 bg-white' : 'bg-white/50'
//             }`}
//             whileHover={{ scale: 1.2 }}
//           />
//         ))}
//       </div>
//     </section>
//   );
// };

// // ============================================
// // INFINITE LOOPING SERVICES
// // ============================================
// const InfiniteLoopingServices = () => {
//   const services = [
//     'Web Development',
//     'Digital Marketing',
//     'Business Strategy',
//     'Brand Development',
//     'Web Development',
//     'Digital Marketing',
//     'Business Strategy',
//     'Brand Development',
//   ];

//   return (
//      <section className="py-4 md:py-6 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
//         <div className="relative h-16 md:h-8">
//            <div className="absolute inset-y-0 left-0 w-12 md:w-24 bg-gradient-to-r from-slate-900 to-transparent z-5" />
//             <div className="absolute inset-y-0 right-0 w-12 md:w-24 bg-gradient-to-l from-slate-900 to-transparent z-5" />
          
//           <motion.div
//             className="flex whitespace-nowrap h-full items-center"
//             animate={{
//               x: [0, -1920],
//             }}
//             transition={{
//               x: {
//                 repeat: Infinity,
//                 repeatType: "loop",
//                 duration: 30,
//                 ease: "linear",
//               },
//             }}
//           >
//             {services.map((services, index) => (
//               <div key={index} className="inline-flex items-center mx-4 md:mx-8 h-full">
//                 <span className="text-lg md:text-xl font-bold text-white/90 px-2 md:px-4 py-2 whitespace-nowrap">
//                     {services}
//                 </span>
//                 {/* <div className="w-2 h-2 rounded-full bg-white/50 ml-4 md:ml-8" /> */}
//               </div>
//             ))}
//           </motion.div>
//         </div>
//       </section>
//   )
// }


// // ============================================
// // ABOUT SECTION
// // ============================================
// const AboutSection = () => {
//   return (
//     <section className="py-20 px-6 md:px-16 lg:px-24">
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//         {/* Left Side - Text */}
//         <motion.div
//           initial={{ opacity: 0, x: -50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//         >
//           <AnimatedHeading
//             text="About Globo Persona"
//             className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
//           />
//           <p className="text-gray-700 text-lg leading-relaxed mb-6">
//             Globo Persona is your trusted partner in building meaningful client connections. With over a decade of expertise in B2B and B2C solutions, we help businesses transform their outreach strategies and scale sustainably.
//           </p>
//           <p className="text-gray-700 text-lg leading-relaxed mb-8">
//             Our innovative approach combines data-driven insights with creative excellence, ensuring every interaction with your clients is purposeful and impactful.
//           </p>
//           <button className="interactive-element px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all">
//             Learn More
//           </button>
//         </motion.div>

//         {/* Right Side - Image */}
//         <motion.div
//           initial={{ opacity: 0, x: 50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="relative h-96"
//         >
//           <Image
//             src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
//             alt="About Globo Persona"
//             fill
//             className="object-cover rounded-lg"
//           />
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// // ============================================
// // PARALLAX STACKED CARDS SECTION
// // ============================================
// const ParallaxCard = ({
//   title,
//   description,
//   image,
//   index,
//   totalCards,
// }: {
//   title: string;
//   description: string;
//   image: string;
//   index: number;
//   totalCards: number;
// }) => {
//   const ref = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ['start end', 'start start'],
//   });

//   const y = useTransform(scrollYProgress, [0, 1], [100 * (totalCards - index - 1), 0]);

//   return (
//     <motion.div
//       ref={ref}
//       style={{ y }}
//       className="sticky top-20 h-96 rounded-xl overflow-hidden border-t-8 border-blue-400 shadow-2xl"
//     >
//       <div className="grid grid-cols-1 lg:grid-cols-2 h-full bg-white">
//         {/* Left - Text Content */}
//         <div className="p-8 lg:p-12 flex flex-col justify-center text-black">
//           <h3 className="text-3xl lg:text-4xl font-bold mb-4">{title}</h3>
//           <p className="text-gray-700 text-lg leading-relaxed">{description}</p>
//         </div>

//         {/* Right - Image */}
//         <div className="relative hidden lg:block">
//           <Image src={image} alt={title} fill className="object-cover" />
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// const ParallaxSection = () => {
//   const cards = [
//     {
//       title: 'Web Development',
//       description: 'Cutting-edge web solutions tailored to your business needs. From responsive designs to complex applications, we deliver excellence.',
//       image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1600&q=80',
//     },
//     {
//       title: 'Digital Marketing',
//       description: 'Strategic marketing campaigns that drive engagement and conversion. Data-driven insights to maximize your ROI.',
//       image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&h=1080&fit=crop',
//     },
//     {
//       title: 'Business Strategy',
//       description: 'Comprehensive business strategies designed to scale. We analyze, strategize, and execute for sustainable growth.',
//       image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1600&q=80',
//     },
//     {
//       title: 'BDE (Business Development)',
//       description: 'Expert business development services to expand your market reach. Building partnerships and driving revenue growth.',
//       image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&q=80',
//     },
//   ];

//   return (
//     <section className="bg-blue-900 py-20 px-6 md:px-16 lg:px-24">
//       <div className="max-w-7xl mx-auto">
//         <AnimatedHeading
//           text="Our Services"
//           className="text-4xl md:text-5xl font-bold text-white mb-20"
//         />
//         <div className="space-y-20">
//           {cards.map((card, index) => (
//             <ParallaxCard
//               key={index}
//               {...card}
//               index={index}
//               totalCards={cards.length}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// // ============================================
// // TEAM ROLES SECTION
// // ============================================
// const TeamRoles = () => {
// const points = [
//   {
//     icon: Layers,
//     title: 'Creators Of Digital Excellence',
//     desc: 'We craft tailored digital solutions that elevate brands and deliver measurable impact.',
//   },
//   {
//     icon: Lightbulb,
//     title: 'Innovating The Digital Landscape',
//     desc: 'Driven by creativity and technology, we help brands stand out in competitive markets.',
//   },
//   {
//     icon: Database,
//     title: 'Helping Brands Thrive Online',
//     desc: 'We build scalable systems and strategies that create long-term business value.',
//   },
//   {
//     icon: Target,
//     title: 'Results Focused Approach',
//     desc: 'Every decision we make is tied to performance, growth, and real outcomes.',
//   },
// ] 


//   return (
//       <section className="py-32 bg-white">
//       <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20">

//         {/* LEFT */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//         >
//           <span className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 mb-6">
//             <span className="w-2 h-2 bg-blue-500 rounded-full" />
//             ABOUT AGENCY
//           </span>

//           <h2 className="text-4xl lg:text-5xl font-semibold text-black leading-tight mb-8">
//             Crafting <span className="text-blue-600">unique digital</span>
//             <br />
//             experiences that elevate
//             <br />
//             your brand
//           </h2>

//           <Button className="rounded-full px-6 py-6 text-base">
//             More About
//             <ArrowRight className="ml-2" size={16} />
//           </Button>
//         </motion.div>

//         {/* RIGHT */}
//         <div className="relative space-y-12">
//           <div className="absolute left-5 top-0 h-full w-px bg-gray-200" />

//           {points.map((item, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               className="relative flex gap-6 pl-16"
//             >
//               <div className="absolute left-2 top-2 w-6 h-6 rounded-full bg-white border-2 border-blue-500 flex items-center justify-center">
//                 <div className="w-2 h-2 bg-blue-500 rounded-full" />
//               </div>

//               <div>
//                 <item.icon className="text-blue-600 mb-3" size={28} />
//                 <h3 className="text-lg font-semibold text-black mb-2">
//                   {item.title}
//                 </h3>
//                 <p className="text-gray-600 leading-relaxed">
//                   {item.desc}
//                 </p>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// };

// const CTASection = () => {
//   return (
//     <section className="py-16 md:py-24 bg-white">
//       <div className="container mx-auto px-4">
//         <div className="max-w-5xl mx-auto"> {/* Changed to 5xl for 3/4 width */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//             className="bg-gradient-to-r from-[#001F3F] to-blue-900 rounded-3xl p-8 md:p-12 text-white overflow-hidden relative"
//           >
//             {/* Background Pattern */}
//             <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full -translate-y-32 translate-x-32"></div>
//             <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/10 rounded-full translate-y-48 -translate-x-48"></div>
            
//             <div className="relative z-10">
//               <div className="max-w-3xl"> {/* Further constraint for content */}
//                 <h2 className="text-3xl md:text-4xl font-bold mb-6">
//                   Ready to Transform Your Business?
//                 </h2>
//                 <p className="text-gray-300 text-lg mb-8">
//                   Join 1000+ successful businesses already leveraging our integrated 
//                   B2B and B2C solutions. Whether you're looking to streamline operations, 
//                   enhance customer experiences, or both - we have the expertise to help 
//                   you succeed.
//                 </p>
                
//                 <div className="flex flex-col sm:flex-row gap-4 mb-8">
//                   <Button 
//                     size="lg" 
//                     className="bg-white text-[#001F3F] hover:bg-gray-100 font-semibold"
//                   >
//                     Start Free Trial
//                     <ChevronRight className="ml-2 h-4 w-4" />
//                   </Button>
//                   <Button 
//                     size="lg" 
//                     variant="outline"
//                     className="border-white text-white hover:bg-white/10"
//                   >
//                     Schedule Demo
//                   </Button>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   )
// }

// // ============================================
// // MAIN PAGE COMPONENT
// // ============================================
// export default function Home() {
//   useEffect(() => {
//     document.body.style.cursor = 'none';
//     return () => {
//       document.body.style.cursor = 'auto';
//     };
//   }, []);

//   return (
//     <main className="bg-white">
//       <CustomCursor />
//       <HeroBanner />
//       <InfiniteLoopingServices />
//       <AboutSection />
//       <ParallaxSection />
//       <TeamRoles />
//       <CTASection />
//     </main>
//   );
// }




// 'use client';

// import React, { useState, useEffect, useRef } from 'react';
// import Image from 'next/image';
// import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
// import { ChevronRight, Layers, Database, Lightbulb, Target, ArrowRight} from 'lucide-react';
// import { gsap } from 'gsap'; // Add this import

// // ===== BUTTON COMPONENT =====
// interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
//   size?: 'default' | 'sm' | 'lg' | 'icon';
//   variant?: 'default' | 'outline' | 'secondary';
// }

// const Button = ({ children, className = '', size = 'default', variant = 'default', ...props }: ButtonProps) => {
//   const sizeClasses: Record<string, string> = {
//     default: 'h-10 px-6 py-2',
//     sm: 'h-8 px-4 text-sm',
//     lg: 'h-14 px-10 text-lg font-semibold',
//     icon: 'h-10 w-10'
//   }
  
//   const variantClasses: Record<string, string> = {
//     default: 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl',
//     outline: 'border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20',
//     secondary: 'bg-gray-800 text-white hover:bg-gray-700',
//   }
  
//   return (
//     <button
//       className={`inline-flex items-center justify-center whitespace-nowrap rounded-full font-medium transition-all duration-300 ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
//       {...props}
//     >
//       {children}
//     </button>
//   )
// }

// // ============================================
// // CUSTOM CURSOR COMPONENT
// // ============================================

// const CustomCursor = () => {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [isHoveringInteractive, setIsHoveringInteractive] = useState(false);
//   const cursorRef = useRef(null);
//   const dotRef = useRef(null);

//   useEffect(() => {
//     const handleMouseMove = (e:any) => {
//       setMousePosition({ x: e.clientX, y: e.clientY });

//       // Check if hovering over interactive elements
//       const target = e.target as HTMLElement;
//       const isInteractive =
//         target.tagName === 'BUTTON' ||
//         target.tagName === 'A' ||
//         target.classList.contains('interactive-element') ||
//         target.closest('button') ||
//         target.closest('a') ||
//         target.closest('.interactive-element');

//       setIsHoveringInteractive(!!isInteractive);
//     };

//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, []);

//   return (
//     <>
//       <motion.div
//         ref={cursorRef}
//         className={`fixed w-8 h-8 border-2 border-blue-600 rounded-full pointer-events-none z-50 ${
//           isHoveringInteractive ? 'scale-150' : 'scale-100'
//         }`}
//         animate={{
//           x: mousePosition.x - 16,
//           y: mousePosition.y - 16,
//         }}
//         transition={{ type: 'spring', stiffness: 500, damping: 28 }}
//       />
//       <motion.div
//         ref={dotRef}
//         className="fixed w-2 h-2 bg-blue-600 rounded-full pointer-events-none z-50"
//         animate={{
//           x: mousePosition.x - 4,
//           y: mousePosition.y - 4,
//         }}
//         transition={{ type: 'spring', stiffness: 800, damping: 35 }}
//       />
//     </>
//   );
// };

// // GSAP WORD BY WORD TYPING - EVERY HEADING
// // ============================================
// const AnimatedHeading = ({ text, className = '' }: { text: string; className?: string }) => {
//   const ref = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const element = ref.current;
//     if (!element) return;

//     const words = element.textContent?.split(' ') || [];
    
//     // Clear content and create spans
//     element.innerHTML = '';
//     words.forEach((word, index) => {
//       const span = document.createElement('span');
//       span.textContent = word + ' ';
//       span.style.opacity = '0';
//       span.style.display = 'inline-block';
//       element.appendChild(span);
//     });

//     // Animate words
//     gsap.to(element.querySelectorAll('span'), {
//       opacity: 1,
//       duration: 0.4,
//       stagger: 0.1,
//       ease: "power2.out"
//     });
//   }, [text]);

//   return (
//     <div ref={ref} className={className}>
//       {text}
//     </div>
//   );
// };


// // ============================================
// // HERO BANNER WITH CAROUSEL
// // ============================================
// const HeroBanner = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
  
//   const slides = [
//     {
//       image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&h=1080&fit=crop',
//       heading: 'Perfect Client Connections',
//       subheading: 'Connect with your ideal clients effortlessly',
//       buttonText: 'Get Started',
//     },
//     {
//       image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
//       heading: 'Scale Your Business',
//       subheading: 'Reach new markets and grow exponentially',
//       buttonText: 'Learn More',
//     },
//     {
//       image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&h=1080&fit=crop',
//       heading: 'Transform Your Strategy',
//       subheading: 'Data-driven solutions for modern businesses',
//       buttonText: 'Explore Now',
//     },
//   ];

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % slides.length);
//     }, 5000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <section className="relative w-full h-screen overflow-hidden">
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={currentSlide}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.8 }}
//           className="absolute inset-0"
//         >
//           <Image
//             src={slides[currentSlide].image}
//             alt="Hero slide"
//             fill
//             className="object-cover"
//             priority
//           />
//           {/* Dark Overlay */}
//           <div className="absolute inset-0 bg-black/40" />
//         </motion.div>
//       </AnimatePresence>

//       {/* Content */}
//       <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
//         <motion.div
//           key={currentSlide}
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: -30 }}
//           transition={{ duration: 0.8 }}
//         >
//           <AnimatedHeading
//             text={slides[currentSlide].heading}
//             className="text-5xl md:text-6xl lg:text-7xl mb-6"
//           />
//           <p className="text-lg md:text-4xl text-gray-200 mb-8 max-w-2xl mx-auto">
//             {slides[currentSlide].subheading}
//           </p>
//           <button className="interactive-element px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all transform hover:scale-105">
//             {slides[currentSlide].buttonText}
//           </button>
//         </motion.div>
//       </div>

//       {/* Carousel Indicators */}
//       <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
//         {slides.map((_, index) => (
//           <motion.button
//             key={index}
//             onClick={() => setCurrentSlide(index)}
//             className={`w-2 h-2 rounded-full transition-all ${
//               index === currentSlide ? 'w-8 bg-white' : 'bg-white/50'
//             }`}
//             whileHover={{ scale: 1.2 }}
//           />
//         ))}
//       </div>
//     </section>
//   );
// };

// // ============================================
// // INFINITE LOOPING SERVICES
// // ============================================
// const InfiniteLoopingServices = () => {
//   const services = [
//     'Web Development',
//     'Digital Marketing',
//     'Business Strategy',
//     'Brand Development',
//     'Web Development',
//     'Digital Marketing',
//     'Business Strategy',
//     'Brand Development',
//   ];

//   return (
//      <section className="py-4 md:py-6 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
//         <div className="relative h-16 md:h-8">
//            <div className="absolute inset-y-0 left-0 w-12 md:w-24 bg-gradient-to-r from-slate-900 to-transparent z-5" />
//             <div className="absolute inset-y-0 right-0 w-12 md:w-24 bg-gradient-to-l from-slate-900 to-transparent z-5" />
         
//         <motion.div
//           className="flex whitespace-nowrap h-full items-center"
//           animate={{
//             x: [0, -1920],
//           }}
//           transition={{
//             x: {
//               repeat: Infinity,
//               repeatType: "loop",
//               duration: 30,
//               ease: "linear",
//             },
//           }}
//         >
//           {services.map((services, index) => (
//             <div key={index} className="inline-flex items-center mx-4 md:mx-8 h-full">
//               <span className="text-lg md:text-xl font-bold text-white/90 px-2 md:px-4 py-2 whitespace-nowrap">
//                   {services}
//               </span>
//             </div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   )
// }

// // ============================================
// // ABOUT SECTION
// // ============================================
// const AboutSection = () => {
//   return (
//     <section className="py-20 px-6 md:px-16 lg:px-24">
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//         {/* Left Side - Text */}
//         <motion.div
//           initial={{ opacity: 0, x: -50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//         >
//           <AnimatedHeading
//             text="About Globo Persona"
//             className="text-4xl md:text-5xl text-gray-900 mb-6"
//           />
//           <p className="text-gray-700 text-lg leading-relaxed mb-6">
//             Globo Persona is your trusted partner in building meaningful client connections. With over a decade of expertise in B2B and B2C solutions, we help businesses transform their outreach strategies and scale sustainably.
//           </p>
//           <p className="text-gray-700 text-lg leading-relaxed mb-8">
//             Our innovative approach combines data-driven insights with creative excellence, ensuring every interaction with your clients is purposeful and impactful.
//           </p>
//           <button className="interactive-element px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all">
//             Learn More
//           </button>
//         </motion.div>

//         {/* Right Side - Image */}
//         <motion.div
//           initial={{ opacity: 0, x: 50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="relative h-96"
//         >
//           <Image
//             src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
//             alt="About Globo Persona"
//             fill
//             className="object-cover rounded-lg"
//           />
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// // ============================================
// // PARALLAX STACKED CARDS SECTION
// // ============================================
// const ParallaxCard = ({
//   title,
//   description,
//   image,
//   index,
//   totalCards,
// }: {
//   title: string;
//   description: string;
//   image: string;
//   index: number;
//   totalCards: number;
// }) => {
//   const ref = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ['start end', 'start start'],
//   });

//   const y = useTransform(scrollYProgress, [0, 1], [100 * (totalCards - index - 1), 0]);

//   return (
//     <motion.div
//       ref={ref}
//       style={{ y }}
//       className="sticky top-20 h-96 rounded-xl overflow-hidden border-t-8 border-blue-400 shadow-2xl"
//     >
//       <div className="grid grid-cols-1 lg:grid-cols-2 h-full bg-white">
//         {/* Left - Text Content */}
//         <div className="p-8 lg:p-12 flex flex-col justify-center text-black">
//           <h3 className="text-3xl lg:text-4xl font-bold mb-4">{title}</h3>
//           <p className="text-gray-700 text-lg leading-relaxed">{description}</p>
//         </div>

//         {/* Right - Image */}
//         <div className="relative hidden lg:block">
//           <Image src={image} alt={title} fill className="object-cover" />
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// const ParallaxSection = () => {
//   const cards = [
//     {
//       title: 'Web Development',
//       description: 'Cutting-edge web solutions tailored to your business needs. From responsive designs to complex applications, we deliver excellence.',
//       image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1600&q=80',
//     },
//     {
//       title: 'Digital Marketing',
//       description: 'Strategic marketing campaigns that drive engagement and conversion. Data-driven insights to maximize your ROI.',
//       image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&h=1080&fit=crop',
//     },
//     {
//       title: 'Business Strategy',
//       description: 'Comprehensive business strategies designed to scale. We analyze, strategize, and execute for sustainable growth.',
//       image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1600&q=80',
//     },
//     {
//       title: 'BDE (Business Development)',
//       description: 'Expert business development services to expand your market reach. Building partnerships and driving revenue growth.',
//       image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&q=80',
//     },
//   ];

//   return (
//     <section className="bg-blue-900 py-20 px-6 md:px-16 lg:px-24">
//       <div className="max-w-7xl mx-auto">
//         <AnimatedHeading
//           text="Our Services"
//           className="text-4xl md:text-5xl font-bold text-white mb-20"
//         />
//         <div className="space-y-20">
//           {cards.map((card, index) => (
//             <ParallaxCard
//               key={index}
//               {...card}
//               index={index}
//               totalCards={cards.length}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// // ============================================
// // TEAM ROLES SECTION
// // ============================================
// const TeamRoles = () => {
//   const points = [
//     {
//       icon: Layers,
//       title: 'Creators Of Digital Excellence',
//       desc: 'We craft tailored digital solutions that elevate brands and deliver measurable impact.',
//     },
//     {
//       icon: Lightbulb,
//       title: 'Innovating The Digital Landscape',
//       desc: 'Driven by creativity and technology, we help brands stand out in competitive markets.',
//     },
//     {
//       icon: Database,
//       title: 'Helping Brands Thrive Online',
//       desc: 'We build scalable systems and strategies that create long-term business value.',
//     },
//     {
//       icon: Target,
//       title: 'Results Focused Approach',
//       desc: 'Every decision we make is tied to performance, growth, and real outcomes.',
//     },
//   ] 

//   return (
//       <section className="py-32 bg-white">
//       <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20">

//         {/* LEFT */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//         >
//           <span className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 mb-6">
//             <span className="w-2 h-2 bg-blue-500 rounded-full" />
//             ABOUT AGENCY
//           </span>

//           <h2 className="text-4xl lg:text-5xl font-semibold text-black leading-tight mb-8">
//             Crafting <span className="text-blue-600">unique digital</span>
//             <br />
//             experiences that elevate
//             <br />
//             your brand
//           </h2>

//           <Button className="rounded-full px-6 py-6 text-base">
//             More About
//             <ArrowRight className="ml-2" size={16} />
//           </Button>
//         </motion.div>

//         {/* RIGHT */}
//         <div className="relative space-y-12">
//           <div className="absolute left-5 top-0 h-full w-px bg-gray-200" />

//           {points.map((item, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               className="relative flex gap-6 pl-16"
//             >
//               <div className="absolute left-2 top-2 w-6 h-6 rounded-full bg-white border-2 border-blue-500 flex items-center justify-center">
//                 <div className="w-2 h-2 bg-blue-500 rounded-full" />
//               </div>

//               <div>
//                 <item.icon className="text-blue-600 mb-3" size={28} />
//                 <h3 className="text-lg font-semibold text-black mb-2">
//                   {item.title}
//                 </h3>
//                 <p className="text-gray-600 leading-relaxed">
//                   {item.desc}
//                 </p>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// };

// const CTASection = () => {
//   return (
//     <section className="py-16 md:py-24 bg-white">
//       <div className="container mx-auto px-4">
//         <div className="max-w-5xl mx-auto"> {/* Changed to 5xl for 3/4 width */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//             className="bg-gradient-to-r from-[#001F3F] to-blue-900 rounded-3xl p-8 md:p-12 text-white overflow-hidden relative"
//           >
//             {/* Background Pattern */}
//             <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full -translate-y-32 translate-x-32"></div>
//             <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/10 rounded-full translate-y-48 -translate-x-48"></div>
            
//             <div className="relative z-10">
//               <div className="max-w-3xl"> {/* Further constraint for content */}
//                 <h2 className="text-3xl md:text-4xl font-bold mb-6">
//                   Ready to Transform Your Business?
//                 </h2>
//                 <p className="text-gray-300 text-lg mb-8">
//                   Join 1000+ successful businesses already leveraging our integrated 
//                   B2B and B2C solutions. Whether you're looking to streamline operations, 
//                   enhance customer experiences, or both - we have the expertise to help 
//                   you succeed.
//                 </p>
                
//                 <div className="flex flex-col sm:flex-row gap-4 mb-8">
//                   <Button 
//                     size="lg" 
//                     className="bg-white text-[#001F3F] hover:bg-gray-100 font-semibold"
//                   >
//                     Start Free Trial
//                     <ChevronRight className="ml-2 h-4 w-4" />
//                   </Button>
//                   <Button 
//                     size="lg" 
//                     variant="outline"
//                     className="border-white text-white hover:bg-white/10"
//                   >
//                     Schedule Demo
//                   </Button>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   )
// }

// // ============================================
// // MAIN PAGE COMPONENT
// // ============================================
// export default function Home() {
//   useEffect(() => {
//     document.body.style.cursor = 'none';
//     return () => {
//       document.body.style.cursor = 'auto';
//     };
//   }, []);

//   return (
//     <main className="bg-white">
//       <CustomCursor />
//       <HeroBanner />
//       <InfiniteLoopingServices />
//       <AboutSection />
//       <ParallaxSection />
//       <TeamRoles />
//       <CTASection />
//     </main>
//   );
// }




// 'use client';

// import React, { useState, useEffect, useRef } from 'react';
// import Image from 'next/image';
// import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
// import { ChevronRight, Layers, Database, Lightbulb, Target, ArrowRight} from 'lucide-react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// // Register GSAP plugins
// gsap.registerPlugin(ScrollTrigger);

// // Typing animation function
// const animateTextTyping = (element: HTMLElement | null, duration: number = 2) => {
//   if (!element) return;

//   const text = element.textContent || '';
//   element.textContent = '';

//   let index = 0;
//   const interval = (duration * 1000) / text.length;

//   const type = () => {
//     if (index < text.length) {
//       element.textContent += text[index];
//       index++;
//       setTimeout(type, interval);
//     }
//   };

//   type();
// };

// // ===== BUTTON COMPONENT =====
// interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
//   size?: 'default' | 'sm' | 'lg' | 'icon';
//   variant?: 'default' | 'outline' | 'secondary';
// }

// const Button = ({ children, className = '', size = 'default', variant = 'default', ...props }: ButtonProps) => {
//   const sizeClasses: Record<string, string> = {
//     default: 'h-10 px-6 py-2',
//     sm: 'h-8 px-4 text-sm',
//     lg: 'h-14 px-10 text-lg font-semibold',
//     icon: 'h-10 w-10'
//   }
  
//   const variantClasses: Record<string, string> = {
//     default: 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl',
//     outline: 'border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20',
//     secondary: 'bg-gray-800 text-white hover:bg-gray-700',
//   }
  
//   return (
//     <button
//       className={`inline-flex items-center justify-center whitespace-nowrap rounded-full font-medium transition-all duration-300 ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
//       {...props}
//     >
//       {children}
//     </button>
//   )
// }

// // ============================================
// // CUSTOM CURSOR COMPONENT
// // ============================================
// const CustomCursor = () => {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [isHoveringInteractive, setIsHoveringInteractive] = useState(false);
//   const cursorRef = useRef(null);
//   const dotRef = useRef(null);

//   useEffect(() => {
//     const handleMouseMove = (e:any) => {
//       setMousePosition({ x: e.clientX, y: e.clientY });

//       const target = e.target as HTMLElement;
//       const isInteractive =
//         target.tagName === 'BUTTON' ||
//         target.tagName === 'A' ||
//         target.classList.contains('interactive-element') ||
//         target.closest('button') ||
//         target.closest('a') ||
//         target.closest('.interactive-element');

//       setIsHoveringInteractive(!!isInteractive);
//     };

//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, []);

//   return (
//     <>
//       <motion.div
//         ref={cursorRef}
//         className={`fixed w-8 h-8 border-2 border-blue-600 rounded-full pointer-events-none z-50 ${
//           isHoveringInteractive ? 'scale-150' : 'scale-100'
//         }`}
//         animate={{
//           x: mousePosition.x - 16,
//           y: mousePosition.y - 16,
//         }}
//         transition={{ type: 'spring', stiffness: 500, damping: 28 }}
//       />
//       <motion.div
//         ref={dotRef}
//         className="fixed w-2 h-2 bg-blue-600 rounded-full pointer-events-none z-50"
//         animate={{
//           x: mousePosition.x - 4,
//           y: mousePosition.y - 4,
//         }}
//         transition={{ type: 'spring', stiffness: 800, damping: 35 }}
//       />
//     </>
//   );
// };

// // ============================================
// // TYPING HEADING COMPONENT
// // ============================================
// const TypingHeading = ({ text, className = '' }: { text: string; className?: string }) => {
//   const ref = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const element = ref.current;
//     if (!element) return;

//     // ScrollTrigger + Typing animation
//     ScrollTrigger.create({
//       trigger: element,
//       start: "top 85%",
//       onEnter: () => {
//         gsap.set(element, { opacity: 0 });
//         gsap.to(element, {
//           opacity: 1,
//           duration: 0.3,
//           delay: 0.2,
//           onStart: () => {
//             animateTextTyping(element, 2.5);
//           }
//         });
//       }
//     });

//     return () => {
//       ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//     };
//   }, [text]);

//   return (
//     <div ref={ref} className={className}>
//       {text}
//     </div>
//   );
// };

// // ============================================
// // HERO BANNER WITH CAROUSEL
// // ============================================
// const HeroBanner = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
  
//   const slides = [
//     {
//       image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&h=1080&fit=crop',
//       heading: 'Perfect Client Connections',
//       subheading: 'Connect with your ideal clients effortlessly',
//       buttonText: 'Get Started',
//     },
//     {
//       image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
//       heading: 'Scale Your Business',
//       subheading: 'Reach new markets and grow exponentially',
//       buttonText: 'Learn More',
//     },
//     {
//       image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&h=1080&fit=crop',
//       heading: 'Transform Your Strategy',
//       subheading: 'Data-driven solutions for modern businesses',
//       buttonText: 'Explore Now',
//     },
//   ];

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % slides.length);
//     }, 5000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <section className="relative w-full h-screen overflow-hidden">
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={currentSlide}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.8 }}
//           className="absolute inset-0"
//         >
//           <Image
//             src={slides[currentSlide].image}
//             alt="Hero slide"
//             fill
//             className="object-cover"
//             priority
//           />
//           <div className="absolute inset-0 bg-black/40" />
//         </motion.div>
//       </AnimatePresence>

//       <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
//         <motion.div
//           key={currentSlide}
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: -30 }}
//           transition={{ duration: 0.8 }}
//         >
//           <TypingHeading
//             text={slides[currentSlide].heading}
//             className="text-5xl md:text-6xl lg:text-6xl font-bold text-white mb-6"
//           />
//           <p className="text-lg md:text-2xl text-gray-200 mb-8 max-w-sm mx-auto">
//             {slides[currentSlide].subheading}
//           </p>
//           <button className="interactive-element px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all transform hover:scale-105">
//             {slides[currentSlide].buttonText}
//           </button>
//         </motion.div>
//       </div>

//       <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
//         {slides.map((_, index) => (
//           <motion.button
//             key={index}
//             onClick={() => setCurrentSlide(index)}
//             className={`w-2 h-2 rounded-full transition-all ${
//               index === currentSlide ? 'w-8 bg-white' : 'bg-white/50'
//             }`}
//             whileHover={{ scale: 1.2 }}
//           />
//         ))}
//       </div>
//     </section>
//   );
// };

// // Rest of your components remain EXACTLY the same but with TypingHeading
// const InfiniteLoopingServices = () => {
//   const services = [
//     'Web Development', 'Digital Marketing', 'Business Strategy', 'Brand Development',
//     'Web Development', 'Digital Marketing', 'Business Strategy', 'Brand Development',
//   ];

//   return (
//     <section className="py-4 md:py-6 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
//       <div className="relative h-16 md:h-8">
//         <div className="absolute inset-y-0 left-0 w-12 md:w-24 bg-gradient-to-r from-slate-900 to-transparent z-5" />
//         <div className="absolute inset-y-0 right-0 w-12 md:w-24 bg-gradient-to-l from-slate-900 to-transparent z-5" />
//         <motion.div
//           className="flex whitespace-nowrap h-full items-center"
//           animate={{ x: [0, -1920] }}
//           transition={{ x: { repeat: Infinity, repeatType: "loop", duration: 30, ease: "linear" } }}
//         >
//           {services.map((service, index) => (
//             <div key={index} className="inline-flex items-center mx-4 md:mx-8 h-full">
//               <span className="text-lg md:text-xl font-bold text-white/90 px-2 md:px-4 py-2 whitespace-nowrap">
//                 {service}
//               </span>
//             </div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   )
// }

// const AboutSection = () => {
//   return (
//     <section className="py-20 px-6 md:px-16 lg:px-24">
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//         <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
//           <TypingHeading text="About Globo Persona" className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" />
//           <p className="text-gray-700 text-lg leading-relaxed mb-6">
//             Globo Persona is your trusted partner in building meaningful client connections. With over a decade of expertise in B2B and B2C solutions, we help businesses transform their outreach strategies and scale sustainably.
//           </p>
//           <p className="text-gray-700 text-lg leading-relaxed mb-8">
//             Our innovative approach combines data-driven insights with creative excellence, ensuring every interaction with your clients is purposeful and impactful.
//           </p>
//           <button className="interactive-element px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all">
//             Learn More
//           </button>
//         </motion.div>

//         <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="relative h-96">
//           <Image src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" alt="About Globo Persona" fill className="object-cover rounded-lg" />
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// const ParallaxCard = ({ title, description, image, index, totalCards }: any) => {
//   const ref = useRef(null);
//   const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'start start'] });
//   const y = useTransform(scrollYProgress, [0, 1], [100 * (totalCards - index - 1), 0]);

//   return (
//     <motion.div ref={ref} style={{ y }} className="sticky top-20 h-96 rounded-xl overflow-hidden border-t-8 border-blue-400 shadow-2xl">
//       <div className="grid grid-cols-1 lg:grid-cols-2 h-full bg-white">
//         <div className="p-8 lg:p-12 flex flex-col justify-center text-black">
//           <TypingHeading text={title} className="text-3xl lg:text-4xl font-bold mb-4" />
//           <p className="text-gray-700 text-lg leading-relaxed">{description}</p>
//         </div>
//         <div className="relative hidden lg:block">
//           <Image src={image} alt={title} fill className="object-cover" />
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// const ParallaxSection = () => {
//   const cards = [
//     { title: 'Web Development', description: 'Cutting-edge web solutions tailored to your business needs. From responsive designs to complex applications, we deliver excellence.', image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1600&q=80' },
//     { title: 'Digital Marketing', description: 'Strategic marketing campaigns that drive engagement and conversion. Data-driven insights to maximize your ROI.', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&h=1080&fit=crop' },
//     { title: 'Business Strategy', description: 'Comprehensive business strategies designed to scale. We analyze, strategize, and execute for sustainable growth.', image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1600&q=80' },
//     { title: 'BDE (Business Development)', description: 'Expert business development services to expand your market reach. Building partnerships and driving revenue growth.', image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&q=80' },
//   ];

//   return (
//     <section className="bg-blue-900 py-20 px-6 md:px-16 lg:px-24">
//       <div className="max-w-7xl mx-auto">
//         <TypingHeading text="Our Services" className="text-4xl md:text-5xl font-bold text-white mb-20" />
//         <div className="space-y-20">
//           {cards.map((card: any, index: number) => (
//             <ParallaxCard key={index} {...card} index={index} totalCards={cards.length} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// const TeamRoles = () => {
//   const points = [
//     { icon: Layers, title: 'Creators Of Digital Excellence', desc: 'We craft tailored digital solutions that elevate brands and deliver measurable impact.' },
//     { icon: Lightbulb, title: 'Innovating The Digital Landscape', desc: 'Driven by creativity and technology, we help brands stand out in competitive markets.' },
//     { icon: Database, title: 'Helping Brands Thrive Online', desc: 'We build scalable systems and strategies that create long-term business value.' },
//     { icon: Target, title: 'Results Focused Approach', desc: 'Every decision we make is tied to performance, growth, and real outcomes.' },
//   ];

//   return (
//     <section className="py-32 bg-white">
//       <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20">
//         <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
//           <span className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 mb-6">
//             <span className="w-2 h-2 bg-blue-500 rounded-full" /> ABOUT AGENCY
//           </span>
//           <TypingHeading text="Crafting unique digital experiences that elevate your brand" className="text-4xl lg:text-5xl font-semibold text-black leading-tight mb-8" />
//           <Button className="rounded-full px-6 py-6 text-base">
//             More About <ArrowRight className="ml-2" size={16} />
//           </Button>
//         </motion.div>

//         <div className="relative space-y-12">
//           <div className="absolute left-5 top-0 h-full w-px bg-gray-200" />
//           {points.map((item: any, index: number) => (
//             <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="relative flex gap-6 pl-16">
//               <div className="absolute left-2 top-2 w-6 h-6 rounded-full bg-white border-2 border-blue-500 flex items-center justify-center">
//                 <div className="w-2 h-2 bg-blue-500 rounded-full" />
//               </div>
//               <div>
//                 <item.icon className="text-blue-600 mb-3" size={28} />
//                 <TypingHeading text={item.title} className="text-lg font-semibold text-black mb-2" />
//                 <p className="text-gray-600 leading-relaxed">{item.desc}</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// const CTASection = () => {
//   return (
//     <section className="py-16 md:py-24 bg-white">
//       <div className="container mx-auto px-4">
//         <div className="max-w-5xl mx-auto">
//           <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="bg-gradient-to-r from-[#001F3F] to-blue-900 rounded-3xl p-8 md:p-12 text-white overflow-hidden relative">
//             <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full -translate-y-32 translate-x-32"></div>
//             <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/10 rounded-full translate-y-48 -translate-x-48"></div>
//             <div className="relative z-10">
//               <div className="max-w-3xl">
//                 <TypingHeading text="Ready to Transform Your Business?" className="text-3xl md:text-4xl font-bold mb-6" />
//                 <p className="text-gray-300 text-lg mb-8">
//                   Join 1000+ successful businesses already leveraging our integrated B2B and B2C solutions. Whether you're looking to streamline operations, enhance customer experiences, or both - we have the expertise to help you succeed.
//                 </p>
//                 <div className="flex flex-col sm:flex-row gap-4 mb-8">
//                   <Button size="lg" className="bg-white text-[#001F3F] hover:bg-gray-100 font-semibold">
//                     Start Free Trial <ChevronRight className="ml-2 h-4 w-4" />
//                   </Button>
//                   <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
//                     Schedule Demo
//                   </Button>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default function Home() {
//   useEffect(() => {
//     document.body.style.cursor = 'none';
//     return () => {
//       document.body.style.cursor = 'auto';
//     };
//   }, []);

//   return (
//     <main className="bg-white">
//       <CustomCursor />
//       <HeroBanner />
//       <InfiniteLoopingServices />
//       <AboutSection />
//       <ParallaxSection />
//       <TeamRoles />
//       <CTASection />
//     </main>
//   );
// }



// 'use client';

// import React, { useState, useEffect, useRef } from 'react';
// import Image from 'next/image';
// import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
// import { ChevronRight, Layers, Database, Lightbulb, Target, ArrowRight, Star, TrendingUp, Users, Award, CheckCircle, Quote} from 'lucide-react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

// const animateTextTyping = (element: HTMLElement | null, duration: number = 2) => {
//   if (!element) return;
//   const text = element.textContent || '';
//   element.textContent = '';
//   let index = 0;
//   const interval = (duration * 1000) / text.length;
//   const type = () => {
//     if (index < text.length) {
//       element.textContent += text[index];
//       index++;
//       setTimeout(type, interval);
//     }
//   };
//   type();
// };

// interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
//   size?: 'default' | 'sm' | 'lg' | 'icon';
//   variant?: 'default' | 'outline' | 'secondary';
// }

// const Button = ({ children, className = '', size = 'default', variant = 'default', ...props }: ButtonProps) => {
//   const sizeClasses: Record<string, string> = {
//     default: 'h-10 px-6 py-2',
//     sm: 'h-8 px-4 text-sm',
//     lg: 'h-14 px-10 text-lg font-semibold',
//     icon: 'h-10 w-10'
//   }
  
//   const variantClasses: Record<string, string> = {
//     default: 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl',
//     outline: 'border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20',
//     secondary: 'bg-gray-800 text-white hover:bg-gray-700',
//   }
  
//   return (
//     <button
//       className={`inline-flex items-center justify-center whitespace-nowrap rounded-full font-medium transition-all duration-300 ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
//       {...props}
//     >
//       {children}
//     </button>
//   )
// }

// const CustomCursor = () => {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [isHoveringInteractive, setIsHoveringInteractive] = useState(false);

//   useEffect(() => {
//     const handleMouseMove = (e:any) => {
//       setMousePosition({ x: e.clientX, y: e.clientY });
//       const target = e.target as HTMLElement;
//       const isInteractive = target.tagName === 'BUTTON' || target.tagName === 'A' || target.classList.contains('interactive-element') || target.closest('button') || target.closest('a') || target.closest('.interactive-element');
//       setIsHoveringInteractive(!!isInteractive);
//     };
//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, []);

//   return (
//     <>
//       <motion.div
//         className={`fixed w-8 h-8 border-2 border-blue-600 rounded-full pointer-events-none z-50 ${isHoveringInteractive ? 'scale-150' : 'scale-100'}`}
//         animate={{ x: mousePosition.x - 16, y: mousePosition.y - 16 }}
//         transition={{ type: 'spring', stiffness: 500, damping: 28 }}
//       />
//       <motion.div
//         className="fixed w-2 h-2 bg-blue-600 rounded-full pointer-events-none z-50"
//         animate={{ x: mousePosition.x - 4, y: mousePosition.y - 4 }}
//         transition={{ type: 'spring', stiffness: 800, damping: 35 }}
//       />
//     </>
//   );
// };

// const TypingHeading = ({ text, className = '' }: { text: string; className?: string }) => {
//   const ref = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const element = ref.current;
//     if (!element) return;
//     ScrollTrigger.create({
//       trigger: element,
//       start: "top 85%",
//       onEnter: () => {
//         gsap.set(element, { opacity: 0 });
//         gsap.to(element, {
//           opacity: 1,
//           duration: 0.3,
//           delay: 0.2,
//           onStart: () => { animateTextTyping(element, 2.5); }
//         });
//       }
//     });
//     return () => { ScrollTrigger.getAll().forEach((trigger) => trigger.kill()); };
//   }, [text]);

//   return <div ref={ref} className={className}>{text}</div>;
// };

// const HeroBanner = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const slides = [
//     { image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&h=1080&fit=crop', heading: 'Perfect Client Connections', subheading: 'We connect B2B & B2C businesses with their ideal clients through data-driven strategies and innovative technology', buttonText: 'Get Started', secondaryButton: 'Watch Demo' },
//     { image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80', heading: 'Scale Your Business', subheading: 'Reach new markets and grow exponentially with our proven B2B/B2C solutions', buttonText: 'Learn More', secondaryButton: 'View Portfolio' },
//     { image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&h=1080&fit=crop', heading: 'Transform Your Strategy', subheading: 'Data-driven solutions that deliver measurable results for modern businesses', buttonText: 'Explore Now', secondaryButton: 'Schedule Call' },
//   ];

//   useEffect(() => {
//     const timer = setInterval(() => { setCurrentSlide((prev) => (prev + 1) % slides.length); }, 5000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <section className="relative w-full h-screen overflow-hidden">
//       <AnimatePresence mode="wait">
//         <motion.div key={currentSlide} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.8 }} className="absolute inset-0">
//           <Image src={slides[currentSlide].image} alt="Hero slide" fill className="object-cover" priority />
//           <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
//         </motion.div>
//       </AnimatePresence>
//       <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
//         <motion.div key={currentSlide} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -30 }} transition={{ duration: 0.8 }} className="max-w-4xl">
//           <TypingHeading text={slides[currentSlide].heading} className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6" />
//           <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">{slides[currentSlide].subheading}</p>
//           <div className="flex flex-wrap justify-center gap-6 mb-8 text-white/90">
//             <div className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-400" /><span className="text-sm font-medium">Trusted by 1000+ Companies</span></div>
//             <div className="flex items-center gap-2"><Star className="w-5 h-5 text-yellow-400" /><span className="text-sm font-medium">4.9/5.0 Rating</span></div>
//             <div className="flex items-center gap-2"><Award className="w-5 h-5 text-blue-400" /><span className="text-sm font-medium">10+ Years Experience</span></div>
//           </div>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <button className="interactive-element px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full font-semibold transition-all transform hover:scale-105 shadow-xl">{slides[currentSlide].buttonText}</button>
//             <button className="interactive-element px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-2 border-white/30 rounded-full font-semibold transition-all">{slides[currentSlide].secondaryButton}</button>
//           </div>
//         </motion.div>
//       </div>
//       <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
//         {slides.map((_, index) => (
//           <motion.button key={index} onClick={() => setCurrentSlide(index)} className={`w-2 h-2 rounded-full transition-all ${index === currentSlide ? 'w-8 bg-white' : 'bg-white/50'}`} whileHover={{ scale: 1.2 }} />
//         ))}
//       </div>
//     </section>
//   );
// };

// const InfiniteLoopingServices = () => {
//   const services = ['Web Development', 'Digital Marketing', 'Business Strategy', 'Brand Development', 'Web Development', 'Digital Marketing', 'Business Strategy', 'Brand Development'];
//   return (
//     <section className="py-4 md:py-6 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
//       <div className="relative h-16 md:h-8">
//         <div className="absolute inset-y-0 left-0 w-12 md:w-24 bg-gradient-to-r from-slate-900 to-transparent z-5" />
//         <div className="absolute inset-y-0 right-0 w-12 md:w-24 bg-gradient-to-l from-slate-900 to-transparent z-5" />
//         <motion.div className="flex whitespace-nowrap h-full items-center" animate={{ x: [0, -1920] }} transition={{ x: { repeat: Infinity, repeatType: "loop", duration: 30, ease: "linear" } }}>
//           {services.map((service, index) => (
//             <div key={index} className="inline-flex items-center mx-4 md:mx-8 h-full">
//               <span className="text-lg md:text-xl font-bold text-white/90 px-2 md:px-4 py-2 whitespace-nowrap">{service}</span>
//             </div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   )
// }

// const StatsSection = () => {
//   const [counts, setCounts] = useState({ 0: 0, 1: 0, 2: 0, 3: 0 });
//   const sectionRef = useRef(null);
//   const [hasAnimated, setHasAnimated] = useState(false);
//   const stats = [
//     { icon: Users, end: 1000, suffix: '+', label: 'Happy Clients', color: 'text-blue-600' },
//     { icon: TrendingUp, end: 2500, suffix: '+', label: 'Projects Delivered', color: 'text-purple-600' },
//     { icon: Award, end: 10, suffix: '+', label: 'Years Experience', color: 'text-green-600' },
//     { icon: Star, end: 98, suffix: '%', label: 'Client Satisfaction', color: 'text-yellow-600' },
//   ];

//   useEffect(() => {
//     const observer = new IntersectionObserver((entries) => {
//       if (entries[0].isIntersecting && !hasAnimated) {
//         setHasAnimated(true);
//         stats.forEach((stat, index) => {
//           let count = 0;
//           const increment = stat.end / 50;
//           const timer = setInterval(() => {
//             count += increment;
//             if (count >= stat.end) {
//               count = stat.end;
//               clearInterval(timer);
//             }
//             setCounts(prev => ({ ...prev, [index]: Math.floor(count) }));
//           }, 30);
//         });
//       }
//     }, { threshold: 0.3 });
//     if (sectionRef.current) observer.observe(sectionRef.current);
//     return () => observer.disconnect();
//   }, [hasAnimated]);

//   return (
//     <section ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
//       <div className="max-w-7xl mx-auto px-6">
//         <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
//           <TypingHeading text="Trusted by Businesses Worldwide" className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" />
//           <p className="text-gray-600 text-lg max-w-2xl mx-auto">Our numbers speak for themselves. We deliver results that matter.</p>
//         </motion.div>
//         <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
//           {stats.map((stat, index) => (
//             <motion.div key={index} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
//               <stat.icon className={`w-12 h-12 mx-auto mb-4 ${stat.color}`} />
//               <div className={`text-4xl md:text-5xl font-bold ${stat.color} mb-2`}>{counts[index as keyof typeof counts]}{stat.suffix}</div>
//               <div className="text-gray-600 font-medium">{stat.label}</div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// const AboutSection = () => {
//   return (
//     <section className="py-20 px-6 md:px-16 lg:px-24 bg-white">
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
//         <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
//           <TypingHeading text="About Globo Persona" className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" />
//           <p className="text-gray-700 text-lg leading-relaxed mb-6">Globo Persona is your trusted partner in building meaningful client connections. With over a decade of expertise in B2B and B2C solutions, we help businesses transform their outreach strategies and scale sustainably.</p>
//           <p className="text-gray-700 text-lg leading-relaxed mb-8">Our innovative approach combines data-driven insights with creative excellence, ensuring every interaction with your clients is purposeful and impactful.</p>
//           <button className="interactive-element px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all transform hover:scale-105">Learn More</button>
//         </motion.div>
//         <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="relative h-96 rounded-xl overflow-hidden shadow-2xl">
//           <Image src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" alt="About Globo Persona" fill className="object-cover" />
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// const HowItWorksSection = () => {
//   const steps = [
//     { number: '01', title: 'Discovery Call', description: 'We understand your business needs, goals, and challenges through a comprehensive consultation.', icon: '🎯' },
//     { number: '02', title: 'Strategy Development', description: 'Our experts create a customized plan tailored specifically to your business objectives.', icon: '📊' },
//     { number: '03', title: 'Execution', description: 'Our dedicated team brings your vision to life with precision and excellence.', icon: '⚡' },
//     { number: '04', title: 'Growth & Support', description: 'We provide ongoing optimization and support to ensure continuous success and growth.', icon: '📈' }
//   ];

//   return (
//     <section className="py-20 bg-gradient-to-b from-white to-gray-50">
//       <div className="max-w-7xl mx-auto px-6">
//         <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
//           <TypingHeading text="How It Works" className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" />
//           <p className="text-gray-600 text-lg max-w-2xl mx-auto">Our proven 4-step process ensures your success from start to finish</p>
//         </motion.div>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {steps.map((step, index) => (
//             <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="relative">
//               <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-blue-600">
//                 <div className="text-6xl mb-4">{step.icon}</div>
//                 <div className="text-blue-600 font-bold text-5xl mb-4 opacity-20">{step.number}</div>
//                 <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
//                 <p className="text-gray-600 leading-relaxed">{step.description}</p>
//               </div>
//               {index < steps.length - 1 && (
//                 <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-blue-200">
//                   <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-4 border-t-transparent border-l-8 border-l-blue-200 border-b-4 border-b-transparent"></div>
//                 </div>
//               )}
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// const ParallaxCard = ({ title, description, image, index, totalCards }: any) => {
//   const ref = useRef(null);
//   const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'start start'] });
//   const y = useTransform(scrollYProgress, [0, 1], [100 * (totalCards - index - 1), 0]);
//   return (
//     <motion.div ref={ref} style={{ y }} className="sticky top-20 h-96 rounded-xl overflow-hidden border-t-8 border-blue-400 shadow-2xl">
//       <div className="grid grid-cols-1 lg:grid-cols-2 h-full bg-white">
//         <div className="p-8 lg:p-12 flex flex-col justify-center text-black">
//           <TypingHeading text={title} className="text-3xl lg:text-4xl font-bold mb-4" />
//           <p className="text-gray-700 text-lg leading-relaxed">{description}</p>
//         </div>
//         <div className="relative hidden lg:block"><Image src={image} alt={title} fill className="object-cover" /></div>
//       </div>
//     </motion.div>
//   );
// };

// const ParallaxSection = () => {
//   const cards = [
//     { title: 'Web Development', description: 'Cutting-edge web solutions tailored to your business needs. From responsive designs to complex applications, we deliver excellence.', image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1600&q=80' },
//     { title: 'Digital Marketing', description: 'Strategic marketing campaigns that drive engagement and conversion. Data-driven insights to maximize your ROI.', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&h=1080&fit=crop' },
//     { title: 'Business Strategy', description: 'Comprehensive business strategies designed to scale. We analyze, strategize, and execute for sustainable growth.', image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1600&q=80' },
//     { title: 'BDE (Business Development)', description: 'Expert business development services to expand your market reach. Building partnerships and driving revenue growth.', image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&q=80' },
//   ];
//   return (
//     <section className="bg-gradient-to-b from-blue-900 to-slate-900 py-20 px-6 md:px-16 lg:px-24">
//       <div className="max-w-7xl mx-auto">
//         <TypingHeading text="Our Services" className="text-4xl md:text-5xl font-bold text-white mb-20 text-center" />
//         <div className="space-y-20">{cards.map((card: any, index: number) => (<ParallaxCard key={index} {...card} index={index} totalCards={cards.length} />))}</div>
//       </div>
//     </section>
//   );
// };

// const TestimonialsSection = () => {
//   const testimonials = [
//     { name: 'Sarah Johnson', position: 'CEO', company: 'TechCorp Solutions', rating: 5, text: 'Working with Globo Persona transformed our digital presence completely. Our lead generation increased by 250% in just 3 months. The team is professional, responsive, and truly understands B2B needs.', image: 'https://i.pravatar.cc/150?img=1' },
//     { name: 'Michael Chen', position: 'Marketing Director', company: 'Global Retail Inc', rating: 5, text: 'The best decision we made was partnering with Globo Persona. Their data-driven approach to digital marketing delivered exceptional ROI. Highly recommend for any business looking to scale.', image: 'https://i.pravatar.cc/150?img=13' },
//     { name: 'Emma Williams', position: 'Founder', company: 'StartupHub', rating: 5, text: 'From web development to business strategy, Globo Persona handled everything flawlessly. They helped us grow from a startup to a market leader. Outstanding service and results!', image: 'https://i.pravatar.cc/150?img=5' }
//   ];

//   return (
//     <section className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-6">
//         <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
//           <TypingHeading text="What Our Clients Say" className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" />
//           <p className="text-gray-600 text-lg max-w-2xl mx-auto">Don't just take our word for it. Here's what our clients have to say about working with us.</p>
//         </motion.div>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {testimonials.map((testimonial, index) => (
//             <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
//               <Quote className="w-10 h-10 text-blue-600 mb-4" />
//               <div className="flex gap-1 mb-4">{[...Array(testimonial.rating)].map((_, i) => (<Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />))}</div>
//               <p className="text-gray-700 leading-relaxed mb-6 italic">"{testimonial.text}"</p>
//               <div className="flex items-center gap-4">
//                 <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover" />
//                 <div>
//                   <div className="font-bold text-gray-900">{testimonial.name}</div>
//                   <div className="text-sm text-gray-600">{testimonial.position}</div>
//                   <div className="text-sm text-blue-600 font-medium">{testimonial.company}</div>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//         <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mt-12">
//           <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-6 py-3 rounded-full font-semibold">
//             <CheckCircle className="w-5 h-5" /><span>4.9/5.0 Average Rating from 500+ Reviews</span>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// const TeamRoles = () => {
//   const points = [
//     { icon: Layers, title: 'Creators Of Digital Excellence', desc: 'We craft tailored digital solutions that elevate brands and deliver measurable impact.' },
//     { icon: Lightbulb, title: 'Innovating The Digital Landscape', desc: 'Driven by creativity and technology, we help brands stand out in competitive markets.' },
//     { icon: Database, title: 'Helping Brands Thrive Online', desc: 'We build scalable systems and strategies that create long-term business value.' },
//     { icon: Target, title: 'Results Focused Approach', desc: 'Every decision we make is tied to performance, growth, and real outcomes.' },
//   ];

//   return (
//     <section className="py-32 bg-white">
//       <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20">
//         <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
//           <span className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 mb-6"><span className="w-2 h-2 bg-blue-500 rounded-full" /> ABOUT AGENCY</span>
//           <TypingHeading text="Crafting unique digital experiences that elevate your brand" className="text-4xl lg:text-5xl font-semibold text-black leading-tight mb-8" />
//           <Button className="rounded-full px-6 py-6 text-base">More About <ArrowRight className="ml-2" size={16} /></Button>
//         </motion.div>
//         <div className="relative space-y-12">
//           <div className="absolute left-5 top-0 h-full w-px bg-gray-200" />
//           {points.map((item: any, index: number) => (
//             <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="relative flex gap-6 pl-16">
//               <div className="absolute left-2 top-2 w-6 h-6 rounded-full bg-white border-2 border-blue-500 flex items-center justify-center"><div className="w-2 h-2 bg-blue-500 rounded-full" /></div>
//               <div>
//                 <item.icon className="text-blue-600 mb-3" size={28} />
//                 <TypingHeading text={item.title} className="text-lg font-semibold text-black mb-2" />
//                 <p className="text-gray-600 leading-relaxed">{item.desc}</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// const CTASection = () => {
//   return (
//     <section className="py-16 md:py-24 bg-white">
//       <div className="container mx-auto px-4">
//         <div className="max-w-5xl mx-auto">
//           <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="bg-gradient-to-r from-[#001F3F] to-blue-900 rounded-3xl p-8 md:p-12 text-white overflow-hidden relative">
//             <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full -translate-y-32 translate-x-32"></div>
//             <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/10 rounded-full translate-y-48 -translate-x-48"></div>
//             <div className="relative z-10">
//               <div className="max-w-3xl">
//                 <TypingHeading text="Ready to Transform Your Business?" className="text-3xl md:text-4xl font-bold mb-6" />
//                 <p className="text-gray-300 text-lg mb-8">
//                   Join 1000+ successful businesses already leveraging our integrated B2B and B2C solutions. Whether you're looking to streamline operations, enhance customer experiences, or both - we have the expertise to help you succeed.
//                 </p>
//                 <div className="flex flex-col sm:flex-row gap-4 mb-8">
//                   <Button size="lg" className="bg-white text-[#001F3F] hover:bg-gray-100 font-semibold">
//                     Start Free Trial <ChevronRight className="ml-2 h-4 w-4" />
//                   </Button>
//                   <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
//                     Schedule Demo
//                   </Button>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default function Home() {
//   useEffect(() => {
//     document.body.style.cursor = 'none';
//     return () => {
//       document.body.style.cursor = 'auto';
//     };
//   }, []);

//   return (
//     <main className="bg-white">
//       <CustomCursor />
//       <HeroBanner />
//       <InfiniteLoopingServices />
//       <StatsSection />
//       <AboutSection />
//       <HowItWorksSection />
//       <ParallaxSection />
//       <TestimonialsSection />
//       <TeamRoles />
//       <CTASection />
//     </main>
//   );
// }



'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import {
  ChevronRight,
  Layers,
  Database,
  Lightbulb,
  Target,
  ArrowRight,
  Star,
  CheckCircle,
  Quote
} from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const animateTextTyping = (element: HTMLElement | null, duration: number = 2) => {
  if (!element) return;
  const text = element.textContent || '';
  element.textContent = '';
  let index = 0;
  const interval = (duration * 1000) / text.length;
  const type = () => {
    if (index < text.length) {
      element.textContent += text[index];
      index++;
      setTimeout(type, interval);
    }
  };
  type();
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'default' | 'sm' | 'lg' | 'icon';
  variant?: 'default' | 'outline' | 'secondary';
}

const Button = ({
  children,
  className = '',
  size = 'default',
  variant = 'default',
  ...props
}: ButtonProps) => {
  const sizeClasses: Record<string, string> = {
    default: 'h-10 px-6 py-2',
    sm: 'h-8 px-4 text-sm',
    lg: 'h-14 px-10 text-lg font-semibold',
    icon: 'h-10 w-10'
  };

  const variantClasses: Record<string, string> = {
    default:
      'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl',
    outline:
      'border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20',
    secondary: 'bg-gray-800 text-white hover:bg-gray-700'
  };

  return (
    <button
      className={`inline-flex items-center justify-center whitespace-nowrap rounded-full font-medium transition-all duration-300 ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHoveringInteractive, setIsHoveringInteractive] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: any) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      const target = e.target as HTMLElement;
      const isInteractive =
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.classList.contains('interactive-element') ||
        target.closest('button') ||
        target.closest('a') ||
        target.closest('.interactive-element');
      setIsHoveringInteractive(!!isInteractive);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <motion.div
        className={`fixed w-8 h-8 border-2 border-blue-600 rounded-full pointer-events-none z-50 ${
          isHoveringInteractive ? 'scale-150' : 'scale-100'
        }`}
        animate={{ x: mousePosition.x - 16, y: mousePosition.y - 16 }}
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
      />
      <motion.div
        className="fixed w-2 h-2 bg-blue-600 rounded-full pointer-events-none z-50"
        animate={{ x: mousePosition.x - 4, y: mousePosition.y - 4 }}
        transition={{ type: 'spring', stiffness: 800, damping: 35 }}
      />
    </>
  );
};

const TypingHeading = ({ text, className = '' }: { text: string; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    ScrollTrigger.create({
      trigger: element,
      start: 'top 85%',
      onEnter: () => {
        gsap.set(element, { opacity: 0 });
        gsap.to(element, {
          opacity: 1,
          duration: 0.3,
          delay: 0.2,
          onStart: () => {
            animateTextTyping(element, 2.5);
          }
        });
      }
    });
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [text]);

  return (
    <div ref={ref} className={className}>
      {text}
    </div>
  );
};

const HeroBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image:
        'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&h=1080&fit=crop',
      heading: 'Perfect Client Connections',
      subheading:
        'We connect B2B & B2C businesses with their ideal clients through data-driven strategies and innovative technology',
      buttonText: 'Get Started',
      secondaryButton: 'Watch Demo'
    },
    {
      image:
        'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      heading: 'Scale Your Business',
      subheading:
        'Reach new markets and grow exponentially with our proven B2B/B2C solutions',
      buttonText: 'Learn More',
      secondaryButton: 'View Portfolio'
    },
    {
      image:
        'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&h=1080&fit=crop',
      heading: 'Transform Your Strategy',
      subheading:
        'Data-driven solutions that deliver measurable results for modern businesses',
      buttonText: 'Explore Now',
      secondaryButton: 'Schedule Call'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <Image
            src={slides[currentSlide].image}
            alt="Hero slide"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <TypingHeading
            text={slides[currentSlide].heading}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
          />
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
            {slides[currentSlide].subheading}
          </p>
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-white/90">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span className="text-sm font-medium">Trusted by 1000+ Companies</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-400" />
              <span className="text-sm font-medium">4.9/5.0 Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <Quote className="w-5 h-5 text-blue-400" />
              <span className="text-sm font-medium">10+ Years Experience</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="interactive-element px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full font-semibold transition-all transform hover:scale-105 shadow-xl">
              {slides[currentSlide].buttonText}
            </button>
            <button className="interactive-element px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-2 border-white/30 rounded-full font-semibold transition-all">
              {slides[currentSlide].secondaryButton}
            </button>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentSlide ? 'w-8 bg-white' : 'bg-white/50'
            }`}
            whileHover={{ scale: 1.2 }}
          />
        ))}
      </div>
    </section>
  );
};

const InfiniteLoopingServices = () => {
  const services = [
    'Web Development',
    'Digital Marketing',
    'Business Strategy',
    'Brand Development',
    'Web Development',
    'Digital Marketing',
    'Business Strategy',
    'Brand Development'
  ];
  return (
    <section className="py-4 md:py-6 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
      <div className="relative h-16 md:h-8">
        <div className="absolute inset-y-0 left-0 w-12 md:w-24 bg-gradient-to-r from-slate-900 to-transparent z-5" />
        <div className="absolute inset-y-0 right-0 w-12 md:w-24 bg-gradient-to-l from-slate-900 to-transparent z-5" />
        <motion.div
          className="flex whitespace-nowrap h-full items-center"
          animate={{ x: [0, -1920] }}
          transition={{
            x: { repeat: Infinity, repeatType: 'loop', duration: 30, ease: 'linear' }
          }}
        >
          {services.map((service, index) => (
            <div key={index} className="inline-flex items-center mx-4 md:mx-8 h-full">
              <span className="text-lg md:text-xl font-bold text-white/90 px-2 md:px-4 py-2 whitespace-nowrap">
                {service}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const AboutSection = () => {
  return (
    <section className="py-20 px-6 md:px-16 lg:px-24 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <TypingHeading
            text="About Globo Persona"
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          />
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Globo Persona is your trusted partner in building meaningful client connections.
            With over a decade of expertise in B2B and B2C solutions, we help businesses
            transform their outreach strategies and scale sustainably.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            Our innovative approach combines data-driven insights with creative excellence,
            ensuring every interaction with your clients is purposeful and impactful.
          </p>
          <button className="interactive-element px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all transform hover:scale-105">
            Learn More
          </button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative h-96 rounded-xl overflow-hidden shadow-2xl"
        >
          <Image
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="About Globo Persona"
            fill
            className="object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

const ParallaxCard = ({
  title,
  description,
  image,
  index,
  totalCards
}: {
  title: string;
  description: string;
  image: string;
  index: number;
  totalCards: number;
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'start start']
  });
  const y = useTransform(scrollYProgress, [0, 1], [100 * (totalCards - index - 1), 0]);
  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className="sticky top-20 h-96 rounded-xl overflow-hidden border-t-8 border-blue-400 shadow-2xl"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 h-full bg-white">
        <div className="p-8 lg:p-12 flex flex-col justify-center text-black">
          <TypingHeading text={title} className="text-3xl lg:text-4xl font-bold mb-4" />
          <p className="text-gray-700 text-lg leading-relaxed">{description}</p>
        </div>
        <div className="relative hidden lg:block">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>
      </div>
    </motion.div>
  );
};

const ParallaxSection = () => {
  const cards = [
    {
      title: 'Web Development',
      description:
        'Cutting-edge web solutions tailored to your business needs. From responsive designs to complex applications, we deliver excellence.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1600&q=80'
    },
    {
      title: 'Digital Marketing',
      description:
        'Strategic marketing campaigns that drive engagement and conversion. Data-driven insights to maximize your ROI.',
      image:
        'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&h=1080&fit=crop'
    },
    {
      title: 'Business Strategy',
      description:
        'Comprehensive business strategies designed to scale. We analyze, strategize, and execute for sustainable growth.',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1600&q=80'
    },
    {
      title: 'BDE (Business Development)',
      description:
        'Expert business development services to expand your market reach. Building partnerships and driving revenue growth.',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&q=80'
    }
  ];
  return (
    <section className="bg-gradient-to-b from-blue-900 to-slate-900 py-20 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <TypingHeading
          text="Our Services"
          className="text-4xl md:text-5xl font-bold text-white mb-20 text-center"
        />
        <div className="space-y-20">
          {cards.map((card, index) => (
            <ParallaxCard key={index} {...card} index={index} totalCards={cards.length} />
          ))}
        </div>
      </div>
    </section>
  );
};


const TeamRoles = () => {
  const points = [
    {
      icon: Layers,
      title: 'Creators Of Digital Excellence',
      desc: 'We craft tailored digital solutions that elevate brands and deliver measurable impact.'
    },
    {
      icon: Lightbulb,
      title: 'Innovating The Digital Landscape',
      desc: 'Driven by creativity and technology, we help brands stand out in competitive markets.'
    },
    {
      icon: Database,
      title: 'Helping Brands Thrive Online',
      desc: 'We build scalable systems and strategies that create long-term business value.'
    },
    {
      icon: Target,
      title: 'Results Focused Approach',
      desc: 'Every decision we make is tied to performance, growth, and real outcomes.'
    }
  ];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 mb-6">
            <span className="w-2 h-2 bg-blue-500 rounded-full" />
            ABOUT AGENCY
          </span>
          <h2 className="text-4xl lg:text-5xl font-semibold text-black leading-tight mb-8">
  Crafting{' '}
  <span className="text-blue-600">
    unique digital experiences
  </span>{' '}
  that elevate your{' '}
  <span className="text-blue-600">
    brand
  </span>
</h2>

          <Button className="rounded-full px-6 py-6 text-base">
            More About <ArrowRight className="ml-2" size={16} />
          </Button>
        </motion.div>
        <div className="relative space-y-12">
          <div className="absolute left-5 top-0 h-full w-px bg-gray-200" />
          {points.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative flex gap-6 pl-16"
            >
              <div className="absolute left-2 top-2 w-6 h-6 rounded-full bg-white border-2 border-blue-500 flex items-center justify-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full" />
              </div>
              <div>
                <item.icon className="text-blue-600 mb-3" size={28} />
                <TypingHeading
                  text={item.title}
                  className="text-lg font-semibold text-black mb-2"
                />
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      position: 'CEO',
      company: 'TechCorp Solutions',
      rating: 5,
      text: 'Working with Globo Persona transformed our digital presence completely. Our lead generation increased by 250% in just 3 months. The team is professional, responsive, and truly understands B2B needs.',
      image: 'https://i.pravatar.cc/150?img=1'
    },
    {
      name: 'Michael Chen',
      position: 'Marketing Director',
      company: 'Global Retail Inc',
      rating: 5,
      text: 'The best decision we made was partnering with Globo Persona. Their data-driven approach to digital marketing delivered exceptional ROI. Highly recommend for any business looking to scale.',
      image: 'https://i.pravatar.cc/150?img=13'
    },
    {
      name: 'Emma Williams',
      position: 'Founder',
      company: 'StartupHub',
      rating: 5,
      text: 'From web development to business strategy, Globo Persona handled everything flawlessly. They helped us grow from a startup to a market leader. Outstanding service and results!',
      image: 'https://i.pravatar.cc/150?img=5'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <TypingHeading
            text="What Our Clients Say"
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          />
          <p className="text-gray-200 text-lg max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our clients have to say about
            working with us.
          </p>
        </motion.div>

        {/* 3-card row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative bg-white/10 backdrop-blur-xl border border-white/15 rounded-3xl p-7 shadow-[0_20px_70px_rgba(0,0,0,0.6)] hover:shadow-[0_25px_90px_rgba(0,0,0,0.8)] hover:-translate-y-2 transition-all duration-300"
            >
              {/* top accent line */}
              <div className="absolute inset-x-6 top-0 h-[3px] bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-b-full" />

              <Quote className="w-8 h-8 text-blue-300 mb-4" />
              <div className="flex gap-1 mb-3">
                {[...Array(t.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <p className="text-gray-100 leading-relaxed mb-6 italic text-sm md:text-base">
                &quot;{t.text}&quot;
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-blue-400"
                />
                <div>
                  <div className="font-semibold text-white">{t.name}</div>
                  <div className="text-xs text-gray-300">{t.position}</div>
                  <div className="text-xs text-blue-300 font-medium">
                    {t.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};



const CTASection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-[#001F3F] to-blue-900 rounded-3xl p-8 md:p-12 text-white overflow-hidden relative"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full -translate-y-32 translate-x-32" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/10 rounded-full translate-y-48 -translate-x-48" />
            <div className="relative z-10">
              <div className="max-w-3xl">
                <TypingHeading
                  text="Ready to Transform Your Business?"
                  className="text-3xl md:text-4xl font-bold mb-6"
                />
                <p className="text-gray-300 text-lg mb-8">
                  Join 1000+ successful businesses already leveraging our integrated B2B
                  and B2C solutions. Whether you&apos;re looking to streamline operations,
                  enhance customer experiences, or both - we have the expertise to help
                  you succeed.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Button
                    size="lg"
                    className="bg-white text-[#001F3F] hover:bg-gray-100 font-semibold"
                  >
                    Start Free Trial <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white/10"
                  >
                    Schedule Demo
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  useEffect(() => {
    document.body.style.cursor = 'none';
    return () => {
      document.body.style.cursor = 'auto';
    };
  }, []);

  return (
    <main className="bg-white">
      <CustomCursor />
      <HeroBanner />
      <InfiniteLoopingServices />
      {/* StatsSection removed */}
      <AboutSection />
      {/* HowItWorksSection removed */}
      <ParallaxSection />
      <TeamRoles />
      <TestimonialsSection />

      <CTASection />
    </main>
  );
}
