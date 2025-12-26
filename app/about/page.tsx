// 'use client';

// import { motion, AnimatePresence} from 'framer-motion';
// import { useState, useEffect } from "react";
// import { Button } from "@/components/ui/button";



 

// export default function About() {
//   // ========== BANNER SECTION STATES ==========
//     const [bannerCurrentLine, setBannerCurrentLine] = useState(0);
//     const [bannerCurrentWord, setBannerCurrentWord] = useState(0);
//     const [showBannerButtons, setShowBannerButtons] = useState(false);
  
//     // Banner content
//     const bannerLines = [
//       "About Us",
//     ];
  
//     const bannerParagraph = "Welcome to GloboPersona, your premier destination for comprehensive digital marketing solutions.";
//     const bannerWords = bannerParagraph.split(" ");

//     // ========== BANNER ANIMATIONS ==========
//   useEffect(() => {
//     // Animate banner lines one by one
//     const lineTimer = setInterval(() => {
//       setBannerCurrentLine((prev) => {
//         if (prev < bannerLines.length - 1) {
//           return prev + 1;
//         } else {
//           clearInterval(lineTimer);
//           return prev;
//         }
//       });
//     }, 1200);

//     return () => clearInterval(lineTimer);
//   }, []);

//   useEffect(() => {
//     // Animate banner words after lines are done
//     if (bannerCurrentLine === bannerLines.length - 1) {
//       const wordTimer = setTimeout(() => {
//         const wordInterval = setInterval(() => {
//           setBannerCurrentWord((prev) => {
//             if (prev < bannerWords.length - 1) {
//               return prev + 1;
//             } else {
//               clearInterval(wordInterval);
//               setTimeout(() => setShowBannerButtons(true), 300);
//               return prev;
//             }
//           });
//         }, 80);

//         return () => clearInterval(wordInterval);
//       }, 500);

//       return () => clearTimeout(wordTimer);
//     }
//   }, [bannerCurrentLine]);

  

//   return (
//    <main className="min-h-screen">
//       {/* ========== BANNER SECTION ========== */}
//       <section className="relative min-h-screen bg-black text-white overflow-hidden">
//         {/* Background effects */}
//         <div className="absolute inset-0">
//           <div className="absolute inset-0 opacity-[0.03]" 
//             style={{
//               backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px),
//                                linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
//               backgroundSize: '50px 50px',
//             }}
//           />
          
//           <motion.div
//             animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
//             transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//             className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-full blur-3xl"
//           />
//         </div>

//         {/* Banner content */}
//         <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8 min-h-screen flex flex-col justify-center">
//           <div className="max-w-4xl mx-auto space-y-8 md:space-y-12">
//             {/* Animated heading lines */}
//             <div className="space-y-4 md:space-y-6">
//               <AnimatePresence>
//                 {bannerLines.slice(0, bannerCurrentLine + 1).map((line, index) => (
//                   <motion.h1
//                     key={index}
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.8, delay: index * 0.3, ease: "easeOut" }}
//                     className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight"
//                   >
//                     {line}
//                   </motion.h1>
//                 ))}
//               </AnimatePresence>
//             </div>

//             {/* Word-by-word paragraph animation */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.5 }}
//               className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl"
//             >
//               <p>
//                 {bannerWords.slice(0, bannerCurrentWord + 1).map((word, index) => (
//                   <motion.span
//                     key={index}
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ duration: 0.1 }}
//                     className="inline-block mr-2"
//                   >
//                     {word}
//                   </motion.span>
//                 ))}
                
//                 {/* Blinking cursor */}
//                 {bannerCurrentWord < bannerWords.length - 1 && (
//                   <motion.span
//                     animate={{ opacity: [1, 0, 1] }}
//                     transition={{ repeat: Infinity, duration: 1 }}
//                     className="inline-block w-[1px] h-6 bg-white ml-1 align-middle"
//                   />
//                 )}
//               </p>
//             </motion.div>
//             {/* Banner buttons */}
//             <AnimatePresence>
//               {showBannerButtons && (
//                 <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.5 }}
//                   className="flex flex-wrap gap-4 pt-8"
//                 >
                
                  
//                   <Button
//                     size="lg"
//                     variant="outline"
//                     className="border-white text-white hover:bg-white/10 text-lg px-8 py-6 rounded-full"
//                   >
//                     <motion.span whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                       Let's talk
//                     </motion.span>
//                   </Button>
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </div>
//         </div>
    
//        </section>

//        <div className="min-h-screen bg-gray-50 p-4 md:p-8">
//       <div className="max-w-7xl mx-auto">
//         {/* GRID CONTAINER */}
//         <motion.div 
//           className="grid grid-cols-1 md:grid-cols-2 gap-6"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.5 }}
//         >
//           {/* TOP ROW */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {/* Card 1 - Top Left */}
//             <motion.div
//               initial={{ y: 50, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ duration: 0.6 }}
//               className="rounded-2xl overflow-hidden shadow-2xl"
//             >
//               <div className={`${cards[0].bgColor} p-8 h-full min-h-[400px] flex flex-col justify-between`}>
//                 <div>
//                   <h2 className={`${cards[0].textColor} text-4xl font-bold mb-4`}>
//                     {cards[0].title}
//                   </h2>
//                   <h3 className={`${cards[0].textColor} text-xl font-semibold mb-6`}>
//                     {cards[0].subtitle}
//                   </h3>
//                   <p className={`${cards[0].textColor} text-lg leading-relaxed`}>
//                     {cards[0].content}
//                   </p>
//                 </div>
//                 <div className="mt-8 pt-6 border-t border-white/20">
//                   <div className="flex justify-between items-center">
//                     <span className={`${cards[0].textColor} text-sm opacity-80`}>View Project</span>
//                     <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
//                       <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
//                       </svg>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>

//             {/* Card 2 - Top Right */}
//             <motion.div
//               initial={{ y: 50, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ duration: 0.6, delay: 0.1 }}
//               className="rounded-2xl overflow-hidden shadow-2xl"
//             >
//               <div className={`${cards[1].bgColor} p-8 h-full min-h-[400px] flex flex-col justify-between`}>
//                 <div>
//                   <h2 className={`${cards[1].textColor} text-3xl font-bold mb-8`}>
//                     {cards[1].title}
//                   </h2>
//                   <ul className="space-y-4">
//                     {cards[1].bulletPoints?.map((point, index) => (
//                       <li key={index} className="flex items-start">
//                         <div className={`w-2 h-2 rounded-full mr-3 mt-2 ${cards[1].textColor === 'text-white' ? 'bg-white' : 'bg-[#213b52]'}`}></div>
//                         <span className={`${cards[1].textColor} text-lg`}>{point}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//                 <div className="mt-8 pt-6 border-t border-[#213b52]/20">
//                   <div className="flex justify-between items-center">
//                     <span className={`${cards[1].textColor} text-sm opacity-80`}>View Case Study</span>
//                     <div className={`w-10 h-10 rounded-full ${cards[1].textColor === 'text-white' ? 'bg-white/20' : 'bg-[#213b52]/20'} flex items-center justify-center`}>
//                       <svg className={`w-5 h-5 ${cards[1].textColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
//                       </svg>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </div>

//           {/* BOTTOM ROW */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
//             {/* Card 3 - Bottom Left */}
//             <motion.div
//               initial={{ y: 50, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//               className="rounded-2xl overflow-hidden shadow-2xl"
//             >
//               <div className={`${cards[2].bgColor} p-8 h-full min-h-[350px] flex flex-col justify-between`}>
//                 <div>
//                   <h2 className={`${cards[2].textColor} text-4xl font-bold mb-6`}>
//                     {cards[2].title}
//                   </h2>
//                   <p className={`${cards[2].textColor} text-lg leading-relaxed`}>
//                     {cards[2].content}
//                   </p>
//                 </div>
//                 <div className="mt-8 pt-6 border-t border-white/20">
//                   <div className="flex justify-between items-center">
//                     <span className={`${cards[2].textColor} text-sm opacity-80`}>Explore Solution</span>
//                     <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
//                       <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
//                       </svg>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>

//             {/* Card 4 - Bottom Right */}
//             <motion.div
//               initial={{ y: 50, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ duration: 0.6, delay: 0.3 }}
//               className="rounded-2xl overflow-hidden shadow-2xl"
//             >
//               <div className={`${cards[3].bgColor} p-8 h-full min-h-[350px] flex flex-col justify-between`}>
//                 <div className="text-center">
//                   <h2 className={`${cards[3].textColor} text-3xl font-bold mb-6`}>
//                     {cards[3].title}
//                   </h2>
//                   <h3 className={`${cards[3].textColor} text-xl font-semibold opacity-90`}>
//                     {cards[3].subtitle}
//                   </h3>
//                 </div>
//                 <div className="mt-8 pt-6 border-t border-white/20">
//                   <div className="flex justify-between items-center">
//                     <span className={`${cards[3].textColor} text-sm opacity-80`}>Get Started</span>
//                     <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
//                       <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
//                       </svg>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
          
//   </main>

  
//   )
// }

// 'use client';

// import { motion, AnimatePresence } from 'framer-motion';
// import { Button } from "@/components/ui/button";
// import { useState, useEffect } from "react";

// export default function About() {
//   // ========== BANNER SECTION STATES ==========
//   const [bannerCurrentLine, setBannerCurrentLine] = useState(0);
//   const [bannerCurrentWord, setBannerCurrentWord] = useState(0);
//   const [showBannerButtons, setShowBannerButtons] = useState(false);

//   // Banner content
//   const bannerLines = [
//     "About Us",
//   ];

//   const bannerParagraph = "Welcome to GloboPersona, your premier destination for comprehensive digital marketing solutions.";
//   const bannerWords = bannerParagraph.split(" ");

//   // ========== 4 CARDS DATA ==========
//   const projects = [
//     {
//       company: "Reachdesk",
//       description: "Creating moments that matter for a BIB glifting and experience platform. From brand strategy to product positioning to a new web experience."
//     },
//     {
//       company: "MADDICC",
//       description: "Understanding an holistic brand revamp to help a BIB SaaS company achieve their growth potential. From audience insights to a new brand identity and web build."
//     },
//     {
//       company: "ABB",
//       description: "Bringing electric perspectives to a new way of managing energy. From product positioning to demand generation and growth acceleration."
//     },
//     {
//       company: "MEDDICC",
//       description: "Understanding an holistic brand revamp to help a BIB SaaS company achieve their growth potential. From audience insights to a new brand identity and web build."
//     }
//   ];

//   // ========== BANNER ANIMATIONS ==========
//   useEffect(() => {
//     // Animate banner lines one by one
//     const lineTimer = setInterval(() => {
//       setBannerCurrentLine((prev) => {
//         if (prev < bannerLines.length - 1) {
//           return prev + 1;
//         } else {
//           clearInterval(lineTimer);
//           return prev;
//         }
//       });
//     }, 1200);

//     return () => clearInterval(lineTimer);
//   }, []);

//   useEffect(() => {
//     // Animate banner words after lines are done
//     if (bannerCurrentLine === bannerLines.length - 1) {
//       const wordTimer = setTimeout(() => {
//         const wordInterval = setInterval(() => {
//           setBannerCurrentWord((prev) => {
//             if (prev < bannerWords.length - 1) {
//               return prev + 1;
//             } else {
//               clearInterval(wordInterval);
//               setTimeout(() => setShowBannerButtons(true), 300);
//               return prev;
//             }
//           });
//         }, 80);

//         return () => clearInterval(wordInterval);
//       }, 500);

//       return () => clearTimeout(wordTimer);
//     }
//   }, [bannerCurrentLine, bannerWords.length]);

//   return (
//     <main className="min-h-screen">
//       {/* ========== BANNER SECTION ========== */}
//       <section className="relative min-h-screen bg-black text-white overflow-hidden">
//         {/* Background effects */}
//         <div className="absolute inset-0">
//           <div
//             className="absolute inset-0 opacity-[0.03]"
//             style={{
//               backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px),
//                                linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
//               backgroundSize: '50px 50px',
//             }}
//           />

//           <motion.div
//             animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
//             transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//             className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-full blur-3xl"
//           />
//         </div>

//         {/* Banner content */}
//         <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8 min-h-screen flex flex-col justify-center">
//           <div className="max-w-4xl mx-auto space-y-8 md:space-y-12">
//             {/* Animated heading lines */}
//             <div className="space-y-4 md:space-y-6">
//               <AnimatePresence>
//                 {bannerLines.slice(0, bannerCurrentLine + 1).map((line, index) => (
//                   <motion.h1
//                     key={index}
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.8, delay: index * 0.3, ease: "easeOut" }}
//                     className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight"
//                   >
//                     {line}
//                   </motion.h1>
//                 ))}
//               </AnimatePresence>
//             </div>

//             {/* Word-by-word paragraph animation */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.5 }}
//               className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl"
//             >
//               <p>
//                 {bannerWords.slice(0, bannerCurrentWord + 1).map((word, index) => (
//                   <motion.span
//                     key={index}
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ duration: 0.1 }}
//                     className="inline-block mr-2"
//                   >
//                     {word}
//                   </motion.span>
//                 ))}

//                 {/* Blinking cursor */}
//                 {bannerCurrentWord < bannerWords.length - 1 && (
//                   <motion.span
//                     animate={{ opacity: [1, 0, 1] }}
//                     transition={{ repeat: Infinity, duration: 1 }}
//                     className="inline-block w-[1px] h-6 bg-white ml-1 align-middle"
//                   />
//                 )}
//               </p>
//             </motion.div>

//             {/* Banner buttons */}
//             <AnimatePresence>
//               {showBannerButtons && (
//                 <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.5 }}
//                   className="flex flex-wrap gap-4 pt-8"
//                 >
//                   <Button
//                     size="lg"
//                     variant="outline"
//                     className="border-white text-white hover:bg-white/10 text-lg px-8 py-6 rounded-full"
//                   >
//                     <motion.span whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                       Let's talk
//                     </motion.span>
//                   </Button>
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </div>
//         </div>
//       </section>

//       {/* ========== 4 CARDS SECTION ========== */}
//       <section 
//         className="min-h-screen p-8"
//         style={{ backgroundColor: '#213b52' }}
//       >
//         <div className="max-w-[1200px] mx-auto">
          
//           {/* Main Heading */}
//           <div className="mb-12">
//             <h1 className="text-5xl font-bold text-white mb-3">
//               Our Work
//             </h1>
//             <p className="text-white/90 text-lg max-w-3xl">
//               Creating moments that matter for digital platforms. 
//               From brand strategy to product positioning to new web experiences.
//             </p>
//           </div>

//           {/* Divider Line */}
//           <div className="w-full h-[2px] bg-white/30 mb-12" />

//           {/* 4 Cards Grid */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {projects.map((project, index) => (
//               <div key={index} className="space-y-5">
                
//                 {/* Card Header with Company Name and Line */}
//                 <div>
//                   <h2 className="text-2xl font-bold text-white mb-3">
//                     {project.company}
//                   </h2>
//                   <div className="w-full h-[1px] bg-white" />
//                 </div>
                
//                 {/* Card Content */}
//                 <div className="space-y-4">
//                   {project.description && (
//                     <p className="text-white/80 text-sm leading-relaxed">
//                       {project.description}
//                     </p>
//                   )}
//                 </div>
                
//               </div>
//             ))}
//           </div>

//           {/* Bottom Divider Line */}
//           <div className="w-full h-[2px] bg-white/30 mt-12" />
          
//         </div>
//       </section>
//     </main>
//   );
// }

// 'use client';

// import { motion, AnimatePresence } from 'framer-motion';
// import { Button } from "@/components/ui/button";
// import { useState, useEffect } from "react";
// import Image from 'next/image';
// import { TrendingUp, ShieldCheck, Zap, Leaf } from "lucide-react";
// import { CheckCircle } from 'lucide-react';

// export default function About() {
//   // ========== BANNER SECTION STATES ==========
//   const [bannerCurrentLine, setBannerCurrentLine] = useState(0);
//   const [bannerCurrentWord, setBannerCurrentWord] = useState(0);
//   const [showBannerButtons, setShowBannerButtons] = useState(false);

//   // Banner content
//   const bannerLines = [
//     "About Us",
//   ];

//   const bannerParagraph = "Welcome to GloboPersona, your premier destination for comprehensive digital marketing solutions.";
//   const bannerWords = bannerParagraph.split(" ");

//   // ========== 4 CARDS WITH IMAGES DATA ==========
//   const projects = [
//     {
//       company: "Reachdesk",
//       description: "Creating moments that matter for a BIB glifting and experience platform. From brand strategy to product positioning to a new web experience.",
//       image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
//     },
//     {
//       company: "MADDICC",
//       description: "Understanding an holistic brand revamp to help a BIB SaaS company achieve their growth potential. From audience insights to a new brand identity and web build.",
//       image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
//     },
//     {
//       company: "ABB",
//       description: "Bringing electric perspectives to a new way of managing energy. From product positioning to demand generation and growth acceleration.",
//       image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
//     },
//     {
//       company: "MEDDICC",
//       description: "Understanding an holistic brand revamp to help a BIB SaaS company achieve their growth potential. From audience insights to a new brand identity and web build.",
//       image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
//     }
//   ];

//   // ========== BANNER ANIMATIONS ==========
//   useEffect(() => {
//     // Animate banner lines one by one
//     const lineTimer = setInterval(() => {
//       setBannerCurrentLine((prev) => {
//         if (prev < bannerLines.length - 1) {
//           return prev + 1;
//         } else {
//           clearInterval(lineTimer);
//           return prev;
//         }
//       });
//     }, 1200);

//     return () => clearInterval(lineTimer);
//   }, []);

//   useEffect(() => {
//     // Animate banner words after lines are done
//     if (bannerCurrentLine === bannerLines.length - 1) {
//       const wordTimer = setTimeout(() => {
//         const wordInterval = setInterval(() => {
//           setBannerCurrentWord((prev) => {
//             if (prev < bannerWords.length - 1) {
//               return prev + 1;
//             } else {
//               clearInterval(wordInterval);
//               setTimeout(() => setShowBannerButtons(true), 300);
//               return prev;
//             }
//           });
//         }, 80);

//         return () => clearInterval(wordInterval);
//       }, 500);

//       return () => clearTimeout(wordTimer);
//     }
//   }, [bannerCurrentLine, bannerWords.length]);

//   const ethosPrinciples = [
//   {
//     title: "ROI FOCUSED",
//     description: "We succeed if you succeed. That's why we focus on your Return On Investment as our number one priority.",
//     icon: TrendingUp,
//     color: "text-blue-600",
//     bgColor: "bg-blue-50",
//     borderColor: "border-blue-200",
//   },
//   {
//     title: "BEST PRACTICES",
//     description: "We enforce best practices on all services provided, ensuring every client receives the same high-quality service throughout.",
//     icon: ShieldCheck,
//     color: "text-emerald-600",
//     bgColor: "bg-emerald-50",
//     borderColor: "border-emerald-200",
//   },
//   {
//     title: "EFFICIENT",
//     description: "Using our tried and tested formulas we offer a more efficient, valuable service, without sacrificing quality.",
//     icon: Zap,
//     color: "text-amber-600",
//     bgColor: "bg-amber-50",
//     borderColor: "border-amber-200",
//   },
//   {
//     title: "CONSCIOUS",
//     description: "100% green servers, paperless offices and constantly reviewing our suppliers and processes with the bigger picture in mind.",
//     icon: Leaf,
//     color: "text-green-600",
//     bgColor: "bg-green-50",
//     borderColor: "border-green-200",
//   },
// ];

// export default function AboutPage() {
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         duration: 0.8,
//         ease: "easeOut",
//         staggerChildren: 0.3,
//       },
//     },
//   };

//   const principleVariants = {
//     hidden: { 
//       opacity: 0, 
//       x: -50 
//     },
//     visible: { 
//       opacity: 1, 
//       x: 0,
//       transition: {
//         type: "spring",
//         stiffness: 80,
//         damping: 15,
//       }
//     },
//   };

//   const lineVariants = {
//     hidden: { width: 0 },
//     visible: { 
//       width: "100%",
//       transition: {
//         duration: 0.8,
//         ease: "easeOut",
//       }
//     },
//   };

//   const fadeInUp = {
//     hidden: { opacity: 0, y: 30 },
//     visible: { 
//       opacity: 1, 
//       y: 0,
//       transition: {
//         duration: 0.7,
//         ease: "easeOut",
//       }
//     },
//   };

//   return (
//     <main className="min-h-screen">
//       {/* ========== BANNER SECTION ========== */}
//       <section className="relative min-h-screen bg-black text-white overflow-hidden">
//         {/* Background effects */}
//         <div className="absolute inset-0">
//           <div
//             className="absolute inset-0 opacity-[0.03]"
//             style={{
//               backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px),
//                                linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
//               backgroundSize: '50px 50px',
//             }}
//           />

//           <motion.div
//             animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
//             transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//             className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-full blur-3xl"
//           />
//         </div>

//         {/* Banner content */}
//         <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8 min-h-screen flex flex-col justify-center">
//           <div className="max-w-4xl mx-auto space-y-8 md:space-y-12">
//             {/* Animated heading lines */}
//             <div className="space-y-4 md:space-y-6">
//               <AnimatePresence>
//                 {bannerLines.slice(0, bannerCurrentLine + 1).map((line, index) => (
//                   <motion.h1
//                     key={index}
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.8, delay: index * 0.3, ease: "easeOut" }}
//                     className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight"
//                   >
//                     {line}
//                   </motion.h1>
//                 ))}
//               </AnimatePresence>
//             </div>

//             {/* Word-by-word paragraph animation */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.5 }}
//               className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl"
//             >
//               <p>
//                 {bannerWords.slice(0, bannerCurrentWord + 1).map((word, index) => (
//                   <motion.span
//                     key={index}
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ duration: 0.1 }}
//                     className="inline-block mr-2"
//                   >
//                     {word}
//                   </motion.span>
//                 ))}

//                 {/* Blinking cursor */}
//                 {bannerCurrentWord < bannerWords.length - 1 && (
//                   <motion.span
//                     animate={{ opacity: [1, 0, 1] }}
//                     transition={{ repeat: Infinity, duration: 1 }}
//                     className="inline-block w-[1px] h-6 bg-white ml-1 align-middle"
//                   />
//                 )}
//               </p>
//             </motion.div>

//             {/* Banner buttons */}
//             <AnimatePresence>
//               {showBannerButtons && (
//                 <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.5 }}
//                   className="flex flex-wrap gap-4 pt-8"
//                 >
//                   <Button
//                     size="lg"
//                     variant="outline"
//                     className="border-white text-white hover:bg-white/10 text-lg px-8 py-6 rounded-full"
//                   >
//                     <motion.span whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                       Let's talk
//                     </motion.span>
//                   </Button>
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </div>
//         </div>
//       </section>

//       {/* ========== 4 CARDS WITH IMAGES SECTION ========== */}
//       <section 
//         className="min-h-screen p-8"
//         style={{ backgroundColor: '#213b52' }}
//       >
//         <div className="max-w-[1200px] mx-auto">
          
//           {/* Main Heading */}
//           <div className="mb-12">
//             <h1 className="text-5xl font-bold text-white mb-3">
//               Our Work
//             </h1>
//             <p className="text-white/90 text-lg max-w-3xl">
//               Creating moments that matter for digital platforms. 
//               From brand strategy to product positioning to new web experiences.
//             </p>
//           </div>

//           {/* Divider Line */}
//           {/* <div className="w-full h-[2px] bg-white/30 mb-12" /> */}

//           {/* 2x2 Grid Layout with Images */}
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//             {/* Row 1 */}
//             <div className="space-y-12">
//               {/* Card 1 - Image top, content bottom */}
//               <div className="space-y-6">
//                 {/* Image */}
//                 <motion.div
//                   initial={{ opacity: 0, y: 30 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.7 }}
//                   viewport={{ once: true }}
//                   className="relative h-[200px] w-full overflow-hidden rounded-lg"
//                 >
//                   <Image
//                     src={projects[0].image}
//                     alt={projects[0].company}
//                     fill
//                     className="object-cover"
//                     sizes="(max-width: 768px) 100vw, 50vw"
//                   />
//                 </motion.div>
                
//                 {/* Content below image */}
//                 <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.7, delay: 0.2 }}
//                   viewport={{ once: true }}
//                   className="space-y-4"
//                 >
//                   <h2 className="text-3xl font-bold text-white">
//                     {projects[0].company}
//                   </h2>
//                   <div className="w-full h-[1px] bg-white/50" />
//                   <p className="text-white/80 text-base leading-relaxed">
//                     {projects[0].description}
//                   </p>
//                 </motion.div>
//               </div>

//               {/* Card 3 - Image top, content bottom (same as card 1) */}
//               <div className="space-y-6">
//                 {/* Image */}
//                 <motion.div
//                   initial={{ opacity: 0, y: 30 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.7 }}
//                   viewport={{ once: true }}
//                   className="relative h-[200px] w-full overflow-hidden rounded-lg"
//                 >
//                   <Image
//                     src={projects[2].image}
//                     alt={projects[2].company}
//                     fill
//                     className="object-cover"
//                     sizes="(max-width: 768px) 100vw, 50vw"
//                   />
//                 </motion.div>
                
//                 {/* Content below image */}
//                 <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.7, delay: 0.2 }}
//                   viewport={{ once: true }}
//                   className="space-y-4"
//                 >
//                   <h2 className="text-3xl font-bold text-white">
//                     {projects[2].company}
//                   </h2>
//                   <div className="w-full h-[1px] bg-white/50" />
//                   <p className="text-white/80 text-base leading-relaxed">
//                     {projects[2].description}
//                   </p>
//                 </motion.div>
//               </div>
//             </div>

//             {/* Row 2 */}
//             {/* Row 2 - Image with margin, Content below */}
// <div className="space-y-12">
//   {/* Card 2 - Image top with 50px margin, Content below */}
//   <div className="space-y-6">
//     {/* Image with 50px margin at top */}
//     <motion.div
//       initial={{ opacity: 0, y: 30 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.7 }}
//       viewport={{ once: true }}
//       className="relative h-[200px] w-full overflow-hidden rounded-lg"
//       style={{ marginTop: '80px' }}
//     >
//       <Image
//         src={projects[1].image}
//         alt={projects[1].company}
//         fill
//         className="object-cover"
//         sizes="(max-width: 768px) 100vw, 50vw"
//       />
//     </motion.div>
    
//     {/* Content below image */}
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.7, delay: 0.2 }}
//       viewport={{ once: true }}
//       className="space-y-4"
//     >
//       <h2 className="text-3xl font-bold text-white">
//         {projects[1].company}
//       </h2>
//       <div className="w-full h-[1px] bg-white/50" />
//       <p className="text-white/80 text-base leading-relaxed">
//         {projects[1].description}
//       </p>
//     </motion.div>
//   </div>

//   {/* Card 4 - Image top with 50px margin, Content below */}
//   <div className="space-y-6">
//     {/* Image with 50px margin at top */}
//     <motion.div
//       initial={{ opacity: 0, y: 30 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.7 }}
//       viewport={{ once: true }}
//       className="relative h-[200px] w-full overflow-hidden rounded-lg"
//       style={{ marginTop: '80px' }}
//     >
//       <Image
//         src={projects[3].image}
//         alt={projects[3].company}
//         fill
//         className="object-cover"
//         sizes="(max-width: 768px) 100vw, 50vw"
//       />
//     </motion.div>
    
//     {/* Content below image */}
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.7, delay: 0.2 }}
//       viewport={{ once: true }}
//       className="space-y-4"
//     >
//       <h2 className="text-3xl font-bold text-white">
//         {projects[3].company}
//       </h2>
//       <div className="w-full h-[1px] bg-white/50" />
//       <p className="text-white/80 text-base leading-relaxed">
//         {projects[3].description}
//       </p>
//     </motion.div>
//   </div>
// </div>
// </div>
//           {/* Bottom Divider Line */}
//           {/* <div className="w-full h-[2px] bg-white/30 mt-12" /> */}
          
//         </div>
//       </section>

//       <motion.div 
//       className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8"
//       initial="hidden"
//       animate="visible"
//       variants={containerVariants}
//     >
//       <div className="max-w-4xl mx-auto">
//         {/* Header */}
//         <motion.div variants={fadeInUp} className="text-center mb-16">
//           <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
//             OUR ETHOS
//           </h1>
          
//           <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-8">
//             Our unique operating philosophy
//           </h2>
          
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
//             As an extremely principled company, we stand by the following core operating philosophies.
//           </p>
//         </motion.div>

//         {/* Vertical List of Principles */}
//         <div className="space-y-12">
//           {ethosPrinciples.map((principle, index) => {
//             const Icon = principle.icon;
//             return (
//               <motion.div
//                 key={principle.title}
//                 variants={principleVariants}
//                 className={`border-l-4 ${principle.borderColor} ${principle.bgColor} pl-6 py-8 pr-8 rounded-r-xl`}
//               >
//                 <div className="flex flex-col space-y-6">
//                   {/* Title with Icon */}
//                   <div className="flex items-center gap-4">
//                     <div className={`p-3 rounded-lg ${principle.bgColor} border ${principle.borderColor}`}>
//                       <Icon className={`h-8 w-8 ${principle.color}`} />
//                     </div>
//                     <h3 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-wide">
//                       {principle.title}
//                     </h3>
//                   </div>

//                   {/* Separator Line */}
//                   <motion.div 
//                     variants={lineVariants}
//                     className={`h-[2px] ${principle.borderColor.replace('border-', 'bg-')} opacity-60`}
//                     style={{ backgroundColor: principle.borderColor.includes('blue') ? '#bfdbfe' : 
//                              principle.borderColor.includes('emerald') ? '#bbf7d0' : 
//                              principle.borderColor.includes('amber') ? '#fde68a' : '#bbf7d0' }}
//                   />

//                   {/* Description */}
//                   <p className="text-lg md:text-xl text-gray-700 leading-relaxed pl-14">
//                     {principle.description}
//                   </p>

//                   {/* Number Indicator */}
//                   <div className="flex justify-end mt-4">
//                     <div className={`h-12 w-12 rounded-full flex items-center justify-center ${principle.color} ${principle.bgColor} border ${principle.borderColor}`}>
//                       <span className="text-xl font-bold">
//                         0{index + 1}
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </div>

//         {/* Bottom Decorative Line */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 2, duration: 1 }}
//           className="mt-16 h-[3px] bg-gradient-to-r from-blue-400 via-emerald-400 to-amber-400 rounded-full"
//         />
//       </div>
//     </motion.div>
//     </main>
//   );
// }

// 'use client';

// import { motion, AnimatePresence, Variants } from 'framer-motion';
// import { Button } from "@/components/ui/button";
// import { useState, useEffect } from "react";
// import Image from 'next/image';
// import { TrendingUp, ShieldCheck, Zap, Leaf } from "lucide-react";

// export default function AboutPage() {
//   // ========== BANNER SECTION STATES ==========
//   const [bannerCurrentLine, setBannerCurrentLine] = useState(0);
//   const [bannerCurrentWord, setBannerCurrentWord] = useState(0);
//   const [showBannerButtons, setShowBannerButtons] = useState(false);

//   // Banner content
//   const bannerLines = ["About Us"];
//   const bannerParagraph = "Welcome to GloboPersona, your premier destination for comprehensive digital marketing solutions.";
//   const bannerWords = bannerParagraph.split(" ");

//   // ========== 4 CARDS WITH IMAGES DATA ==========
//   const projects = [
//     {
//       company: "Reachdesk",
//       description: "Creating moments that matter for a BIB glifting and experience platform. From brand strategy to product positioning to a new web experience.",
//       image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
//     },
//     {
//       company: "MADDICC",
//       description: "Understanding an holistic brand revamp to help a BIB SaaS company achieve their growth potential. From audience insights to a new brand identity and web build.",
//       image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
//     },
//     {
//       company: "ABB",
//       description: "Bringing electric perspectives to a new way of managing energy. From product positioning to demand generation and growth acceleration.",
//       image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
//     },
//     {
//       company: "MEDDICC",
//       description: "Understanding an holistic brand revamp to help a BIB SaaS company achieve their growth potential. From audience insights to a new brand identity and web build.",
//       image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
//     }
//   ];

//   // ========== ETHOS PRINCIPLES DATA ==========
//   const ethosPrinciples = [
//     {
//       title: "ROI FOCUSED",
//       description: "We succeed if you succeed. That's why we focus on your Return On Investment as our number one priority.",
//       icon: TrendingUp,
//       color: "text-blue-600",
//       bgColor: "bg-blue-50",
//       borderColor: "border-blue-200",
//     },
//     {
//       title: "BEST PRACTICES",
//       description: "We enforce best practices on all services provided, ensuring every client receives the same high-quality service throughout.",
//       icon: ShieldCheck,
//       color: "text-emerald-600",
//       bgColor: "bg-emerald-50",
//       borderColor: "border-emerald-200",
//     },
//     {
//       title: "EFFICIENT",
//       description: "Using our tried and tested formulas we offer a more efficient, valuable service, without sacrificing quality.",
//       icon: Zap,
//       color: "text-amber-600",
//       bgColor: "bg-amber-50",
//       borderColor: "border-amber-200",
//     },
//     {
//       title: "CONSCIOUS",
//       description: "100% green servers, paperless offices and constantly reviewing our suppliers and processes with the bigger picture in mind.",
//       icon: Leaf,
//       color: "text-green-600",
//       bgColor: "bg-green-50",
//       borderColor: "border-green-200",
//     },
//   ];

//   // ========== BANNER ANIMATIONS ==========
//   useEffect(() => {
//     // Animate banner lines one by one
//     const lineTimer = setInterval(() => {
//       setBannerCurrentLine((prev) => {
//         if (prev < bannerLines.length - 1) {
//           return prev + 1;
//         } else {
//           clearInterval(lineTimer);
//           return prev;
//         }
//       });
//     }, 1200);

//     return () => clearInterval(lineTimer);
//   }, []);

//   useEffect(() => {
//     // Animate banner words after lines are done
//     if (bannerCurrentLine === bannerLines.length - 1) {
//       const wordTimer = setTimeout(() => {
//         const wordInterval = setInterval(() => {
//           setBannerCurrentWord((prev) => {
//             if (prev < bannerWords.length - 1) {
//               return prev + 1;
//             } else {
//               clearInterval(wordInterval);
//               setTimeout(() => setShowBannerButtons(true), 300);
//               return prev;
//             }
//           });
//         }, 80);

//         return () => clearInterval(wordInterval);
//       }, 500);

//       return () => clearTimeout(wordTimer);
//     }
//   }, [bannerCurrentLine, bannerWords.length]);

//   // ========== SIMPLIFIED ETHOS ANIMATIONS (No Variants) ==========
  
//   // Helper function for line color
//   const getLineColor = (borderColor: string): string => {
//     if (borderColor.includes('blue')) return 'bg-blue-300';
//     if (borderColor.includes('emerald')) return 'bg-emerald-300';
//     if (borderColor.includes('amber')) return 'bg-amber-300';
//     return 'bg-green-300';
//   };

//   return (
//     <main className="min-h-screen">
//       {/* ========== BANNER SECTION ========== */}
//       <section className="relative min-h-screen bg-black text-white overflow-hidden">
//         {/* Background effects */}
//         <div className="absolute inset-0">
//           <div
//             className="absolute inset-0 opacity-[0.03]"
//             style={{
//               backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px),
//                                linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
//               backgroundSize: '50px 50px',
//             }}
//           />

//           <motion.div
//             animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
//             transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//             className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-full blur-3xl"
//           />
//         </div>

//         {/* Banner content */}
//         <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8 min-h-screen flex flex-col justify-center">
//           <div className="max-w-4xl mx-auto space-y-8 md:space-y-12">
//             {/* Animated heading lines */}
//             <div className="space-y-4 md:space-y-6">
//               <AnimatePresence>
//                 {bannerLines.slice(0, bannerCurrentLine + 1).map((line, index) => (
//                   <motion.h1
//                     key={index}
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.8, delay: index * 0.3, ease: "easeOut" }}
//                     className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight"
//                   >
//                     {line}
//                   </motion.h1>
//                 ))}
//               </AnimatePresence>
//             </div>

//             {/* Word-by-word paragraph animation */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.5 }}
//               className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl"
//             >
//               <p>
//                 {bannerWords.slice(0, bannerCurrentWord + 1).map((word, index) => (
//                   <motion.span
//                     key={index}
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ duration: 0.1 }}
//                     className="inline-block mr-2"
//                   >
//                     {word}
//                   </motion.span>
//                 ))}

//                 {/* Blinking cursor */}
//                 {bannerCurrentWord < bannerWords.length - 1 && (
//                   <motion.span
//                     animate={{ opacity: [1, 0, 1] }}
//                     transition={{ repeat: Infinity, duration: 1 }}
//                     className="inline-block w-[1px] h-6 bg-white ml-1 align-middle"
//                   />
//                 )}
//               </p>
//             </motion.div>

//             {/* Banner buttons */}
//             <AnimatePresence>
//               {showBannerButtons && (
//                 <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.5 }}
//                   className="flex flex-wrap gap-4 pt-8"
//                 >
//                   <Button
//                     size="lg"
//                     variant="outline"
//                     className="border-white text-white hover:bg-white/10 text-lg px-8 py-6 rounded-full"
//                   >
//                     <motion.span whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                       Let's talk
//                     </motion.span>
//                   </Button>
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </div>
//         </div>
//       </section>

//       {/* ========== 4 CARDS WITH IMAGES SECTION ========== */}
//       <section 
//         className="min-h-screen p-8"
//         style={{ backgroundColor: '#213b52' }}
//       >
//         <div className="max-w-[1200px] mx-auto">
          
//           {/* Main Heading */}
//           <div className="mb-12">
//             <h1 className="text-5xl font-bold text-white mb-3">
//               Our Work
//             </h1>
//             <p className="text-white/90 text-lg max-w-3xl">
//               Creating moments that matter for digital platforms. 
//               From brand strategy to product positioning to new web experiences.
//             </p>
//           </div>

//           {/* 2x2 Grid Layout with Images */}
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//             {/* Column 1 */}
//             <div className="space-y-12">
//               {/* Card 1 */}
//               <div className="space-y-6">
//                 <motion.div
//                   initial={{ opacity: 0, y: 30 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.7 }}
//                   viewport={{ once: true }}
//                   className="relative h-[200px] w-full overflow-hidden rounded-lg"
//                 >
//                   <Image
//                     src={projects[0].image}
//                     alt={projects[0].company}
//                     fill
//                     className="object-cover"
//                     sizes="(max-width: 768px) 100vw, 50vw"
//                   />
//                 </motion.div>
                
//                 <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.7, delay: 0.2 }}
//                   viewport={{ once: true }}
//                   className="space-y-4"
//                 >
//                   <h2 className="text-3xl font-bold text-white">
//                     {projects[0].company}
//                   </h2>
//                   <div className="w-full h-[1px] bg-white/50" />
//                   <p className="text-white/80 text-base leading-relaxed">
//                     {projects[0].description}
//                   </p>
//                 </motion.div>
//               </div>

//               {/* Card 3 */}
//               <div className="space-y-6">
//                 <motion.div
//                   initial={{ opacity: 0, y: 30 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.7 }}
//                   viewport={{ once: true }}
//                   className="relative h-[200px] w-full overflow-hidden rounded-lg"
//                 >
//                   <Image
//                     src={projects[2].image}
//                     alt={projects[2].company}
//                     fill
//                     className="object-cover"
//                     sizes="(max-width: 768px) 100vw, 50vw"
//                   />
//                 </motion.div>
                
//                 <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.7, delay: 0.2 }}
//                   viewport={{ once: true }}
//                   className="space-y-4"
//                 >
//                   <h2 className="text-3xl font-bold text-white">
//                     {projects[2].company}
//                   </h2>
//                   <div className="w-full h-[1px] bg-white/50" />
//                   <p className="text-white/80 text-base leading-relaxed">
//                     {projects[2].description}
//                   </p>
//                 </motion.div>
//               </div>
//             </div>

//             {/* Column 2 */}
//             <div className="space-y-12">
//               {/* Card 2 */}
//               <div className="space-y-6 pt-20">
//                 <motion.div
//                   initial={{ opacity: 0, y: 30 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.7 }}
//                   viewport={{ once: true }}
//                   className="relative h-[200px] w-full overflow-hidden rounded-lg"
//                 >
//                   <Image
//                     src={projects[1].image}
//                     alt={projects[1].company}
//                     fill
//                     className="object-cover"
//                     sizes="(max-width: 768px) 100vw, 50vw"
//                   />
//                 </motion.div>
                
//                 <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.7, delay: 0.2 }}
//                   viewport={{ once: true }}
//                   className="space-y-4"
//                 >
//                   <h2 className="text-3xl font-bold text-white">
//                     {projects[1].company}
//                   </h2>
//                   <div className="w-full h-[1px] bg-white/50" />
//                   <p className="text-white/80 text-base leading-relaxed">
//                     {projects[1].description}
//                   </p>
//                 </motion.div>
//               </div>

//               {/* Card 4 */}
//               <div className="space-y-6 pt-20">
//                 <motion.div
//                   initial={{ opacity: 0, y: 30 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.7 }}
//                   viewport={{ once: true }}
//                   className="relative h-[200px] w-full overflow-hidden rounded-lg"
//                 >
//                   <Image
//                     src={projects[3].image}
//                     alt={projects[3].company}
//                     fill
//                     className="object-cover"
//                     sizes="(max-width: 768px) 100vw, 50vw"
//                   />
//                 </motion.div>
                
//                 <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.7, delay: 0.2 }}
//                   viewport={{ once: true }}
//                   className="space-y-4"
//                 >
//                   <h2 className="text-3xl font-bold text-white">
//                     {projects[3].company}
//                   </h2>
//                   <div className="w-full h-[1px] bg-white/50" />
//                   <p className="text-white/80 text-base leading-relaxed">
//                     {projects[3].description}
//                   </p>
//                 </motion.div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ========== ETHOS SECTION ========== */}
//       <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-4xl mx-auto">
//           {/* Header */}
//           <motion.div 
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7 }}
//             className="text-center mb-16"
//           >
//             <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
//               OUR ETHOS
//             </h1>
            
//             <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-8">
//               Our unique operating philosophy
//             </h2>
            
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
//               As an extremely principled company, we stand by the following core operating philosophies.
//             </p>
//           </motion.div>

//           {/* Vertical List of Principles */}
//           <div className="space-y-12">
//             {ethosPrinciples.map((principle, index) => {
//               const Icon = principle.icon;
//               const lineColor = getLineColor(principle.borderColor);
              
//               return (
//                 <motion.div
//                   key={principle.title}
//                   initial={{ opacity: 0, x: -50 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ 
//                     delay: index * 0.2,
//                     type: "spring",
//                     stiffness: 80,
//                     damping: 15
//                   }}
//                   className={`border-l-4 ${principle.borderColor} ${principle.bgColor} pl-6 py-8 pr-8 rounded-r-xl`}
//                 >
//                   <div className="flex flex-col space-y-6">
//                     {/* Title with Icon */}
//                     <div className="flex items-center gap-4">
//                       <div className={`p-3 rounded-lg ${principle.bgColor} border ${principle.borderColor}`}>
//                         <Icon className={`h-8 w-8 ${principle.color}`} />
//                       </div>
//                       <h3 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-wide">
//                         {principle.title}
//                       </h3>
//                     </div>

//                     {/* Separator Line */}
//                     <div className="relative h-[2px] overflow-hidden">
//                       <motion.div 
//                         initial={{ scaleX: 0 }}
//                         animate={{ scaleX: 1 }}
//                         transition={{ 
//                           delay: 0.5 + (index * 0.1),
//                           duration: 0.8,
//                           ease: "easeOut"
//                         }}
//                         className={`h-full ${lineColor} origin-left`}
//                         style={{ transformOrigin: "left center" }}
//                       />
//                     </div>

//                     {/* Description */}
//                     <p className="text-lg md:text-xl text-gray-700 leading-relaxed pl-14">
//                       {principle.description}
//                     </p>

//                     {/* Number Indicator */}
//                     <div className="flex justify-end mt-4">
//                       <div className={`h-12 w-12 rounded-full flex items-center justify-center ${principle.color} ${principle.bgColor} border ${principle.borderColor}`}>
//                         <span className="text-xl font-bold">
//                           0{index + 1}
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                 </motion.div>
//               );
//             })}
//           </div>

//           {/* Bottom Decorative Line */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 2, duration: 1 }}
//             className="mt-16 h-[3px] bg-gradient-to-r from-blue-400 via-emerald-400 to-amber-400 rounded-full"
//           />
//         </div>
//       </div>
//     </main>
//   );
// }


// "use client";

// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Button } from "@/components/ui/button";

// export default function AboutPage() {
//   const [bannerCurrentLine, setBannerCurrentLine] = useState(0);
//   const [bannerCurrentWord, setBannerCurrentWord] = useState(0);
//   const [showBannerButton, setShowBannerButton] = useState(false);

//   const bannerLines = ["About Our Team"];
//   const bannerParagraph =
//     "Welcome to GloboPersona, your premier destination for comprehensive digital marketing solutions.";
//   const bannerWords = bannerParagraph.split(" ");

//   // heading animation
//   useEffect(() => {
//     const lineTimer = setInterval(() => {
//       setBannerCurrentLine((prev) => {
//         if (prev < bannerLines.length - 1) {
//           return prev + 1;
//         } else {
//           clearInterval(lineTimer);
//           return prev;
//         }
//       });
//     }, 1000);

//     return () => clearInterval(lineTimer);
//   }, []);

//   // paragraph + button animation
//   useEffect(() => {
//     if (bannerCurrentLine === bannerLines.length - 1) {
//       const wordTimer = setTimeout(() => {
//         const wordInterval = setInterval(() => {
//           setBannerCurrentWord((prev) => {
//             if (prev < bannerWords.length - 1) {
//               return prev + 1;
//             } else {
//               clearInterval(wordInterval);
//               setTimeout(() => setShowBannerButton(true), 500);
//               return prev;
//             }
//           });
//         }, 70);

//         return () => clearInterval(wordInterval);
//       }, 400);

//       return () => clearTimeout(wordTimer);
//     }
//   }, [bannerCurrentLine, bannerWords.length]);
//   const services = [
//   {
//     icon: "🔍",
//     title: "SEO",
//     points: [
//       "Enhanced visibility to reach global audiences.",
//       "SEO-centric campaigns to engage ideal customers.",
//       "Data-driven optimisation for better performance.",
//     ],
//   },
//   {
//     icon: "💻",
//     title: "Web Design",
//     points: [
//       "Customised sites aligned with your brand.",
//       "Functional UX focused on smooth navigation.",
//       "Reliable performance, speed and security.",
//     ],
//   },
//   {
//     icon: "🧰",
//     title: "Web Development",
//     points: [
//       "Lightweight, scalable websites for reach.",
//       "Tailored builds for your business needs.",
//       "Ongoing technical improvements and support.",
//     ],
//   },
//   {
//     icon: "🎯",
//     title: "Performance & Social",
//     points: [
//       "Targeted campaigns to grow your audience.",
//       "Creative content for strong brand recall.",
//       "Real-time optimisation using clear metrics.",
//     ],
//   },
// ];


//   return (
//     <main className="bg-black text-white">
//       {/* ===== BANNER SECTION ===== */}
//       <section className="relative py-20 md:py-28 overflow-hidden border-b border-white/10">
//         <div className="absolute inset-0 bg-gradient-to-br from-[#244082]/8 via-transparent to-[#213b52]/5" />

//         <div className="container mx-auto px-6 max-w-3xl relative z-10">
//           <div className="max-w-2xl mx-auto space-y-8 text-center">
//             {/* Heading */}
//             <div className="space-y-2">
//               <AnimatePresence>
//                 {bannerLines
//                   .slice(0, bannerCurrentLine + 1)
//                   .map((line, index) => (
//                     <motion.h1
//                       key={index}
//                       initial={{ opacity: 0, y: 20 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       exit={{ opacity: 0, y: -20 }}
//                       transition={{ duration: 0.6 }}
//                       className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight"
//                     >
//                       {line}
//                     </motion.h1>
//                   ))}
//               </AnimatePresence>
//             </div>

//             {/* Word-by-word description */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.8 }}
//               className="text-lg md:text-xl text-slate-300 max-w-xl mx-auto leading-relaxed"
//             >
//               <p>
//                 {bannerWords
//                   .slice(0, bannerCurrentWord + 1)
//                   .map((word, index) => (
//                     <motion.span
//                       key={index}
//                       initial={{ opacity: 0, scale: 0.9 }}
//                       animate={{ opacity: 1, scale: 1 }}
//                       transition={{ duration: 0.15 }}
//                       className="inline-block mr-1.5 last:mr-0"
//                     >
//                       {word}
//                     </motion.span>
//                   ))}

//                 {bannerCurrentWord < bannerWords.length - 1 && (
//                   <motion.span
//                     animate={{ opacity: [1, 0, 1] }}
//                     transition={{ repeat: Infinity, duration: 1 }}
//                     className="inline-block w-[2px] h-7 bg-white ml-1.5 align-middle"
//                   />
//                 )}
//               </p>
//             </motion.div>

//             {/* Button */}
//             <AnimatePresence>
//               {showBannerButton && (
//                 <motion.div
//                   initial={{ opacity: 0, y: 15 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.5 }}
//                   className="pt-6"
//                 >
//                   <Button
//                     size="lg"
//                     className="bg-[#244082] hover:bg-[#213b52] text-white shadow-lg shadow-[#244082]/30 font-semibold px-8 py-5 h-14 rounded-xl text-base border border-white/20 w-full md:w-auto"
//                   >
//                     Let&apos;s talk
//                   </Button>
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </div>
//         </div>
//       </section>

//       {/* ===== ABOUT GLOBO PERSONA GRID SECTION ===== */}
    
//       <section className="bg-black text-white py-16 md:py-20">
//   <div className="container mx-auto px-4 md:px-8 max-w-6xl">
//     <div className="grid md:grid-cols-2 border-t border-l border-[#222]">
//       {services.map((item, idx) => (
//         <div
//           key={item.title}
//           className="border-b border-r border-[#222] p-8 md:p-10"
//         >
//           {/* icon + title */}
//           <div className="flex items-center gap-4 mb-6">
//             <div className="h-10 w-10 rounded-full border border-[#244082] flex items-center justify-center text-xl">
//               <span className="text-[#244082]">{item.icon}</span>
//             </div>
//             <h3 className="text-xl font-semibold">{item.title}</h3>
//           </div>

//           {/* description bullets */}
//           <ul className="space-y-3 text-sm md:text-base text-slate-300">
//             {item.points.map((p) => (
//               <li key={p} className="flex gap-3">
//                 <span className="mt-1 h-1 w-6 bg-[#444]" /> {/* ____ horizontal line */}
//                 <span>{p}</span>
//               </li>
//             ))}
//           </ul>
//         </div>
//       ))}
//     </div>
//   </div>
// </section>

//     </main>
//   );
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
//   Users,
//   Globe,
//   Award,
//   TrendingUp,
//   MessageSquare,
//   Calendar,
//   CheckCircle,
//   Check,
//   ChevronRight,
//   Star,
//   Target,
//   Lightbulb,
//   Rocket,
//   Heart,
//   Eye,
//   Compass,
//   Lock,
//   Briefcase,
//   Cpu,
//   Search,
//   Palette,
//   Wrench
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

// export default function AboutPage() {
//   const mainRef = useRef<HTMLDivElement>(null)

//   const services = [
//   {
//     title: "SEO",
//     icon: Search,
//     points: [
//       "Enhanced Visibility",
//       "Precision Targeting",
//       "Data-Driven Optimisation"
//     ],
//   },
//   {
//     title: "Web Design",
//     icon: Palette,
//     points: [
//       "Customised Websites",
//       "Functional Features",
//       "Reliable Performance"
//     ],
//   },
//   {
//     title: "Creative",
//     icon: Lightbulb,
//     points: [
//       "Strong Brand Presence",
//       "Engaging Visuals",
//       "Seamless Interactions"
//     ],
//   },
//   {
//     title: "Web Development",
//     icon: Wrench,
//     points: [
//       "Global Accessibility",
//       "Bespoke Development",
//       "Analytical Advancements"
//     ],
//   },
// ];

//   const achievements = [
//     { value: 12, label: 'Years in Business', suffix: '+', color: 'text-blue-500', icon: <Award /> },
//     { value: 500, label: 'Happy Clients', suffix: '+', color: 'text-green-500', icon: <Users /> },
//     { value: 1200, label: 'Projects Delivered', suffix: '+', color: 'text-yellow-500', icon: <CheckCircle /> },
//     { value: 98, label: 'Client Satisfaction', suffix: '%', color: 'text-cyan-500', icon: <Star /> },
//   ]

//   const teamTestimonials = [
//     {
//       name: "Alex Johnson",
//       role: "CEO & Founder",
//       content: "Building Globo Persona with passion for technology and commitment to client success.",
//       rating: 5,
//       avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop"
//     },
//     {
//       name: "Priya Sharma",
//       role: "CTO",
//       content: "Leading talented engineers who push boundaries every day. Our culture of innovation.",
//       rating: 5,
//       avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
//     },
//     {
//       name: "Marcus Chen",
//       role: "VP, Client Success",
//       content: "Every client relationship is sacred. We measure success by the impact we create.",
//       rating: 5,
//       avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop"
//     }
//   ]

//   // GSAP Animations
//   useEffect(() => {
//     const heroH1 = document.querySelector('[data-about-hero-h1]') as HTMLElement | null
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

//     const aboutSectionTrigger = document.querySelector('[data-about-globo-section]')
//     if (aboutSectionTrigger) {
//       const aboutH2 = document.querySelector('[data-about-globo-h2]') as HTMLElement | null
      
//       if (aboutH2) {
//         gsap.set(aboutH2, { opacity: 0 })
//       }
      
//       gsap.to(aboutH2, {
//         scrollTrigger: {
//           trigger: aboutSectionTrigger,
//           start: 'top 75%',
//           toggleActions: 'play none none reverse',
//           onEnter: () => {
//             animateTextTyping(aboutH2, 1.2)
//           }
//         },
//         opacity: 1,
//         duration: 0.3
//       })
//     }

//     const achievementsTrigger = document.querySelector('[data-achievements-section]')
//     if (achievementsTrigger) {
//       const achievH2 = document.querySelector('[data-achievements-h2]') as HTMLElement | null
      
//       if (achievH2) {
//         gsap.set(achievH2, { opacity: 0 })
//       }
      
//       gsap.to(achievH2, {
//         scrollTrigger: {
//           trigger: achievementsTrigger,
//           start: 'top 75%',
//           toggleActions: 'play none none reverse',
//           onEnter: () => {
//             animateTextTyping(achievH2, 1.2)
//           }
//         },
//         opacity: 1,
//         duration: 0.3
//       })
//     }

//     const teamTrigger = document.querySelector('[data-team-section]')
//     if (teamTrigger) {
//       const teamH2 = document.querySelector('[data-team-h2]') as HTMLElement | null
      
//       if (teamH2) {
//         gsap.set(teamH2, { opacity: 0 })
//       }
      
//       gsap.to(teamH2, {
//         scrollTrigger: {
//           trigger: teamTrigger,
//           start: 'top 75%',
//           toggleActions: 'play none none reverse',
//           onEnter: () => {
//             animateTextTyping(teamH2, 1.2)
//           }
//         },
//         opacity: 1,
//         duration: 0.3
//       })
//     }

//     const ctaTrigger = document.querySelector('[data-about-cta-section]')
//     if (ctaTrigger) {
//       const ctaH2 = document.querySelector('[data-about-cta-h2]') as HTMLElement | null
      
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
//     }

//     return () => {
//       ScrollTrigger.getAll().forEach(trigger => trigger.kill())
//     }
//   }, [])

//   return (
//     <>
//       <main ref={mainRef} className="min-h-screen bg-gradient-to-b from-gray-950 to-black text-white">
        
//         {/* ========== HERO BANNER ========== */}
//         <section className="relative h-screen flex items-center justify-center overflow-hidden">
//           {/* Background Image with Overlay */}
//           <div className="absolute inset-0">
//             <div 
//               className="absolute inset-0 bg-cover bg-center"
//               style={{
//                 backgroundImage: 'url(https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=1200&fit=crop)',
//                 backgroundPosition: 'center'
//               }}
//             />
//             <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
//             <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black" />
//           </div>

//           {/* Animated Background Shapes */}
//           <motion.div 
//             animate={{ y: [0, -30, 0] }}
//             transition={{ repeat: Infinity, duration: 8 }}
//             className="absolute top-10 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl opacity-20"
//           />
          
//           <div className="container mx-auto max-w-6xl relative z-10 px-4">
//             <motion.div 
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.2 }}
//               className="max-w-3xl"
//             >
//               <motion.div 
//                 initial={{ opacity: 0, x: -20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ delay: 0.2 }}
//                 className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/40 rounded-full px-4 py-2 mb-8 backdrop-blur-sm"
//               >
//                 <Sparkles className="w-4 h-4" />
//                 <span className="text-sm font-medium">About Our Journey</span>
//               </motion.div>

//               <h1 data-about-hero-h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
//                 <span className="block text-white">Innovating for</span>
//                 <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent">
//                   Tomorrow, Today
//                 </span>
//               </h1>

//               <motion.p 
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.3 }}
//                 className="text-xl text-gray-200 max-w-2xl leading-relaxed mb-8"
//               >
//                 We transform enterprises through technology, delivering solutions that don't just solve problems—they create opportunities for exponential growth.
//               </motion.p>

//               <motion.div 
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.4 }}
//                 className="flex flex-col sm:flex-row gap-4"
//               >
//                 <motion.button
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="group bg-gradient-to-r from-blue-500 to-cyan-500 text-black font-semibold px-8 py-4 rounded-xl text-lg flex items-center justify-center gap-2 hover:shadow-xl hover:shadow-blue-500/25 transition-all"
//                 >
//                   Start Conversation
//                   <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//                 </motion.button>
//               </motion.div>
//             </motion.div>
//           </div>

//           {/* Scroll Indicator */}
//           <motion.div
//             animate={{ y: [0, 10, 0] }}
//             transition={{ repeat: Infinity, duration: 2 }}
//             className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block"
//           >
//             <div className="text-gray-400 text-sm flex flex-col items-center">
//               <span>Scroll to explore</span>
//               <div className="w-6 h-10 border-2 border-gray-600 rounded-full mt-2 flex justify-center">
//                 <div className="w-1 h-3 bg-cyan-500 rounded-full mt-2" />
//               </div>
//             </div>
//           </motion.div>
//         </section>

//         {/* ========== ABOUT GLOBO PERSONA - 2x2 GRID ========== */}
//         {/* ========== WHAT I DO (2x2 GRID WITH INNER DIVIDERS ONLY) ========== */}
// <section className="w-full bg-black text-white px-6 md:px-12 py-24">
//   <div className="max-w-7xl mx-auto">
//     <h1 className="text-4xl font-bold mb-12 text-center">What I Do</h1>

//     <div className="grid grid-cols-1 md:grid-cols-2 w-full">

//       {services.map((service, i) => {
//         const Icon = service.icon;

//         return (
//           <div
//             key={i}
//             className={`
//               p-10

//               /* Horizontal Divider (top row only) */
//               ${i < 2 ? "border-b border-white" : ""}

//               /* Vertical Divider (left column only) */
//               ${i % 2 === 0 ? "border-r border-white" : ""}
//             `}
//           >
//             {/* Title + Icon */}
//             <div className="flex items-center gap-3 mb-6">
//               <Icon className="w-7 h-7 text-yellow-400" />
//               <h2 className="text-2xl font-semibold">{service.title}</h2>
//             </div>

//             {/* Bullet Points */}
//           <ul className="space-y-4 text-neutral-300">
//   {service.points.map((p, idx) => (
//     <li key={idx} className="flex gap-3">
//       <Check className="w-4 h-4 text-yellow-400 mt-1" />
//       <p>{p}</p>
//     </li>
//   ))}
// </ul>
//           </div>
//         );
//       })}

//     </div>
//   </div>
// </section>



// {/* ========== ACHIEVEMENTS - OUR ETHOS STYLE ========== */}
// <section className="py-32 px-4 bg-black" data-achievements-section>
//   <div className="container mx-auto max-w-7xl">
//     <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
      
//       {/* LEFT - HEADING */}
//       <div>
//         <span className="inline-block bg-cyan-500/15 text-cyan-300 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-cyan-500/30">
//           OUR ETHOS
//         </span>
//         <h2 data-achievements-h2 className="text-5xl md:text-6xl font-bold leading-tight">
//           Our{' '}
//           <span className="bg-yellow-400 text-black px-2">unique</span>
//           {' '}operating
//           <br />
//           philosophy
//         </h2>
//         <p className="text-gray-400 text-base mt-6">
//           As an extremely principled company, we stand by the following core operating philosophies.
//         </p>
//       </div>

//       {/* RIGHT - SINGLE COLUMN 4 CARDS WITH DIVIDERS */}
//       <div className="space-y-0">
        
//         {/* Card 1 - ROI Focused */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0 }}
//           className="border-b border-gray-700 py-8 flex justify-between items-start group"
//         >
//           <div className="flex-1">
//             <h3 className="text-xl font-bold mb-3">ROI Focused</h3>
//             <motion.p 
//               animate={{ opacity: [1, 0.5, 1] }}
//               transition={{ duration: 3, repeat: Infinity }}
//               className="text-gray-400 text-sm leading-relaxed"
//             >
//               We succeed if you succeed, that's why we focus on your Return On Investment as our number one priority.
//             </motion.p>
//           </div>
//           <ArrowRight className="w-6 h-6 text-gray-600 group-hover:text-cyan-400 transition-colors ml-4 flex-shrink-0 mt-1" />
//         </motion.div>

//         {/* Card 2 - Best Practices */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.1 }}
//           className="border-b border-gray-700 py-8 flex justify-between items-start group"
//         >
//           <div className="flex-1">
//             <h3 className="text-xl font-bold mb-3">Best Practices</h3>
//             <motion.p 
//               animate={{ opacity: [1, 0.5, 1] }}
//               transition={{ duration: 3, repeat: Infinity }}
//               className="text-gray-400 text-sm leading-relaxed"
//             >
//               We enforce best practices on all services provided, ensuring every client receives the same high-quality service throughout.
//             </motion.p>
//           </div>
//           <CheckCircle className="w-6 h-6 text-gray-600 group-hover:text-cyan-400 transition-colors ml-4 flex-shrink-0 mt-1" />
//         </motion.div>

//         {/* Card 3 - Efficient */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.2 }}
//           className="border-b border-gray-700 py-8 flex justify-between items-start group"
//         >
//           <div className="flex-1">
//             <h3 className="text-xl font-bold mb-3">Efficient</h3>
//             <motion.p 
//               animate={{ opacity: [1, 0.5, 1] }}
//               transition={{ duration: 3, repeat: Infinity }}
//               className="text-gray-400 text-sm leading-relaxed"
//             >
//               Using our tried and tested formulas we offer a more efficient, valuable service, without sacrificing quality.
//             </motion.p>
//           </div>
//           <Zap className="w-6 h-6 text-gray-600 group-hover:text-cyan-400 transition-colors ml-4 flex-shrink-0 mt-1" />
//         </motion.div>

//         {/* Card 4 - Conscious */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.3 }}
//           className="py-8 flex justify-between items-start group"
//         >
//           <div className="flex-1">
//             <h3 className="text-xl font-bold mb-3">Conscious</h3>
//             <motion.p 
//               animate={{ opacity: [1, 0.5, 1] }}
//               transition={{ duration: 3, repeat: Infinity }}
//               className="text-gray-400 text-sm leading-relaxed"
//             >
//               100% green servers, paperless offices and constantly reviewing our suppliers and processes with the bigger picture in mind.
//             </motion.p>
//           </div>
//           <Lightbulb className="w-6 h-6 text-gray-600 group-hover:text-cyan-400 transition-colors ml-4 flex-shrink-0 mt-1" />
//         </motion.div>
//       </div>
//     </div>
//   </div>
// </section>



//         {/* ========== TEAM TESTIMONIALS ========== */}
//         <section className="py-32 px-4 bg-gradient-to-b from-black to-gray-950" data-team-section>
//           <div className="container mx-auto max-w-7xl">
//             <div className="text-center max-w-3xl mx-auto mb-20">
//               <span className="inline-block bg-purple-500/15 text-purple-300 px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-purple-500/30">
//                 LEADERSHIP VOICES
//               </span>
//               <h2 data-team-h2 className="text-5xl md:text-6xl font-bold mb-6">
//                 What Our <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Team Says</span>
//               </h2>
//             </div>

//             <div className="grid md:grid-cols-3 gap-8">
//               {teamTestimonials.map((testimonial, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: index * 0.1 }}
//                   className="relative"
//                 >
//                   <div className="pointer-events-none absolute -inset-0.5 rounded-3xl bg-gradient-to-br from-purple-500/25 via-fuchsia-500/10 to-cyan-500/25 opacity-70 blur-2xl" />

//                   <div className="relative h-full bg-gradient-to-br from-white/8 via-white/5 to-white/10 border border-white/15 rounded-3xl px-8 py-10 backdrop-blur-xl shadow-[0_18px_60px_rgba(15,23,42,0.65)] flex flex-col transition-all duration-300 hover:-translate-y-2 hover:border-purple-400/40">
                    
//                     <div className="flex gap-1 mb-6">
//                       {[...Array(testimonial.rating)].map((_, i) => (
//                         <Star
//                           key={i}
//                           className="w-5 h-5 text-yellow-400 drop-shadow-[0_0_10px_rgba(250,204,21,0.8)]"
//                           fill="currentColor"
//                         />
//                       ))}
//                     </div>

//                     <p className="text-gray-100 text-lg leading-relaxed mb-8 flex-1">
//                       <span className="text-purple-300 text-3xl align-top mr-1">"</span>
//                       {testimonial.content}
//                       <span className="text-purple-300 text-3xl align-bottom ml-1">"</span>
//                     </p>

//                     <div className="h-px w-full bg-gradient-to-r from-transparent via-purple-500/40 to-transparent mb-6 mt-auto" />

//                     <div className="flex items-center gap-4">
//                       <img
//                         src={testimonial.avatar}
//                         alt={testimonial.name}
//                         className="w-12 h-12 rounded-2xl object-cover"
//                       />
//                       <div>
//                         <h4 className="font-semibold text-gray-50">{testimonial.name}</h4>
//                         <p className="text-sm text-gray-400">{testimonial.role}</p>
//                       </div>
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* ========== CTA SECTION ========== */}
//         <section className="py-32 px-4 relative overflow-hidden" data-about-cta-section>
//           <div className="absolute inset-0 bg-gradient-to-br from-blue-500/8 via-transparent to-cyan-500/8" />
//           <motion.div
//             animate={{ y: [0, -30, 0] }}
//             transition={{ repeat: Infinity, duration: 8 }}
//             className="absolute top-20 right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl opacity-30"
//           />
          
//           <div className="container mx-auto max-w-4xl relative z-10">
//             <div className="text-center mb-12">
//               <span className="inline-block bg-gradient-to-r from-blue-500/15 to-cyan-500/15 text-cyan-300 px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-cyan-500/30">
//                 LET'S WORK TOGETHER
//               </span>
//               <h2 data-about-cta-h2 className="text-5xl md:text-6xl font-bold mb-6">
//                 Ready to Transform Your <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Organization?</span>
//               </h2>
//               <p className="text-xl text-gray-300 max-w-2xl mx-auto">
//                 Schedule a consultation with our experts and discover how Globo Persona can drive your digital transformation journey.
//               </p>
//             </div>

//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: 0.2 }}
//               className="flex flex-col sm:flex-row gap-4 justify-center"
//             >
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="group bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-black font-semibold px-10 py-4 rounded-xl text-lg flex items-center justify-center gap-2 hover:shadow-xl hover:shadow-blue-500/25 transition-all"
//               >
//                 Start Your Journey
//                 <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//               </motion.button>

//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="group border border-gray-700 hover:border-cyan-500 bg-gray-900/50 backdrop-blur-sm px-10 py-4 rounded-xl text-lg flex items-center justify-center gap-2 hover:bg-gray-800/50 transition-all"
//               >
//                 <MessageSquare className="w-5 h-5" />
//                 Contact Us
//               </motion.button>
//             </motion.div>
//           </div>
//         </section>
//       </main>
//     </>
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
//   Users,
//   Globe,
//   Award,
//   TrendingUp,
//   MessageSquare,
//   Calendar,
//   CheckCircle,
//   Check,
//   ChevronRight,
//   Star,
//   Target,
//   Lightbulb,
//   Rocket,
//   Heart,
//   Eye,
//   Compass,
//   Lock,
//   Briefcase,
//   Cpu,
//   Search,
//   Palette,
//   Wrench
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

// export default function AboutPage() {
//   const mainRef = useRef<HTMLDivElement>(null)
//   const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0)

//   const services = [
//     {
//       title: "SEO",
//       icon: Search,
//       points: [
//         "Enhanced Visibility",
//         "Precision Targeting",
//         "Data-Driven Optimisation"
//       ],
//     },
//     {
//       title: "Web Design",
//       icon: Palette,
//       points: [
//         "Customised Websites",
//         "Functional Features",
//         "Reliable Performance"
//       ],
//     },
//     {
//       title: "Creative",
//       icon: Lightbulb,
//       points: [
//         "Strong Brand Presence",
//         "Engaging Visuals",
//         "Seamless Interactions"
//       ],
//     },
//     {
//       title: "Web Development",
//       icon: Wrench,
//       points: [
//         "Global Accessibility",
//         "Bespoke Development",
//         "Analytical Advancements"
//       ],
//     },
//   ]

//   const achievements = [
//     {
//       title: "ROI Focused",
//       description: "We succeed if you succeed, that's why we focus on your Return On Investment as our number one priority.",
//       icon: ArrowRight,
//     },
//     {
//       title: "Best Practices",
//       description: "We enforce best practices on all services provided, ensuring every client receives the same high-quality service throughout.",
//       icon: CheckCircle,
//     },
//     {
//       title: "Efficient",
//       description: "Using our tried and tested formulas we offer a more efficient, valuable service, without sacrificing quality.",
//       icon: Zap,
//     },
//     {
//       title: "Conscious",
//       description: "100% green servers, paperless offices and constantly reviewing our suppliers and processes with the bigger picture in mind.",
//       icon: Lightbulb,
//     },
//   ]

//   const teamTestimonials = [
//     {
//       name: "Alex Johnson",
//       role: "CEO & Founder",
//       content: "Building Globo Persona with passion for technology and commitment to client success.",
//       rating: 5,
//       avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop"
//     },
//     {
//       name: "Priya Sharma",
//       role: "CTO",
//       content: "Leading talented engineers who push boundaries every day. Our culture of innovation.",
//       rating: 5,
//       avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
//     },
//     {
//       name: "Marcus Chen",
//       role: "VP, Client Success",
//       content: "Every client relationship is sacred. We measure success by the impact we create.",
//       rating: 5,
//       avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop"
//     },
//     {
//       name: "Sarah Williams",
//       role: "Product Lead",
//       content: "Innovation drives everything we do. Our team constantly pushes boundaries to deliver excellence.",
//       rating: 5,
//       avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop"
//     }
//   ]

//   // GSAP Animations
//   useEffect(() => {
//     const heroH1 = document.querySelector('[data-about-hero-h1]') as HTMLElement | null
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

//     const aboutSectionTrigger = document.querySelector('[data-about-globo-section]')
//     if (aboutSectionTrigger) {
//       const aboutH2 = document.querySelector('[data-about-globo-h2]') as HTMLElement | null
      
//       if (aboutH2) {
//         gsap.set(aboutH2, { opacity: 0 })
//       }
      
//       gsap.to(aboutH2, {
//         scrollTrigger: {
//           trigger: aboutSectionTrigger,
//           start: 'top 75%',
//           toggleActions: 'play none none reverse',
//           onEnter: () => {
//             animateTextTyping(aboutH2, 1.2)
//           }
//         },
//         opacity: 1,
//         duration: 0.3
//       })
//     }

//     const achievementsTrigger = document.querySelector('[data-achievements-section]')
//     if (achievementsTrigger) {
//       const achievH2 = document.querySelector('[data-achievements-h2]') as HTMLElement | null
      
//       if (achievH2) {
//         gsap.set(achievH2, { opacity: 0 })
//       }
      
//       gsap.to(achievH2, {
//         scrollTrigger: {
//           trigger: achievementsTrigger,
//           start: 'top 75%',
//           toggleActions: 'play none none reverse',
//           onEnter: () => {
//             animateTextTyping(achievH2, 1.2)
//           }
//         },
//         opacity: 1,
//         duration: 0.3
//       })
//     }

//     const ctaTrigger = document.querySelector('[data-about-cta-section]')
//     if (ctaTrigger) {
//       const ctaH2 = document.querySelector('[data-about-cta-h2]') as HTMLElement | null
      
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
//     }

//     return () => {
//       ScrollTrigger.getAll().forEach(trigger => trigger.kill())
//     }
//   }, [])

//   // Auto-sliding testimonials every 30 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentTestimonialIndex((prev) => (prev + 1) % teamTestimonials.length)
//     }, 30000) // 30 seconds

//     return () => clearInterval(interval)
//   }, [teamTestimonials.length])

//   return (
//     <>
//       <main ref={mainRef} className="min-h-screen bg-gradient-to-b from-gray-950 to-black text-white">
        
//         {/* ========== HERO BANNER ========== */}
//         <section className="relative h-screen flex items-center justify-center overflow-hidden">
//           {/* Background Image with Overlay */}
//           <div className="absolute inset-0">
//             <div 
//               className="absolute inset-0 bg-cover bg-center"
//               style={{
//                 backgroundImage: 'url(https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=1200&fit=crop)',
//                 backgroundPosition: 'center'
//               }}
//             />
//             <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
//             <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black" />
//           </div>

//           {/* Animated Background Shapes */}
//           <motion.div 
//             animate={{ y: [0, -30, 0] }}
//             transition={{ repeat: Infinity, duration: 8 }}
//             className="absolute top-10 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl opacity-20"
//           />
          
//           <div className="container mx-auto max-w-6xl relative z-10 px-4">
//             <motion.div 
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.2 }}
//               className="max-w-3xl"
//             >
//               <motion.div 
//                 initial={{ opacity: 0, x: -20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ delay: 0.2 }}
//                 className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/40 rounded-full px-4 py-2 mb-8 backdrop-blur-sm"
//               >
//                 <Sparkles className="w-4 h-4" />
//                 <span className="text-sm font-medium">About Our Journey</span>
//               </motion.div>

//               <h1 data-about-hero-h1 className="text-5xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
//                 <span className="block text-white">Innovating for</span>
//                 <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent">
//                   Tomorrow, Today
//                 </span>
//               </h1>

//               <motion.p 
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.3 }}
//                 className="text-xl text-gray-200 max-w-2xl leading-relaxed mb-8"
//               >
//                 We transform enterprises through technology, delivering solutions that don't just solve problems—they create opportunities for exponential growth.
//               </motion.p>

//               <motion.div 
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.4 }}
//                 className="flex flex-col sm:flex-row gap-4"
//               >
//                 <motion.button
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="group bg-gradient-to-r from-blue-500 to-cyan-500 text-black font-semibold px-8 py-4 rounded-xl text-lg flex items-center justify-center gap-2 hover:shadow-xl hover:shadow-blue-500/25 transition-all"
//                 >
//                   Start Conversation
//                   <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//                 </motion.button>
//               </motion.div>
//             </motion.div>
//           </div>

//           {/* Scroll Indicator */}
//           <motion.div
//             animate={{ y: [0, 10, 0] }}
//             transition={{ repeat: Infinity, duration: 2 }}
//             className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block"
//           >
//             <div className="text-gray-400 text-sm flex flex-col items-center">
//               <span>Scroll to explore</span>
//               <div className="w-6 h-10 border-2 border-gray-600 rounded-full mt-2 flex justify-center">
//                 <div className="w-1 h-3 bg-cyan-500 rounded-full mt-2" />
//               </div>
//             </div>
//           </motion.div>
//         </section>

//         {/* ========== WHAT I DO (2x2 GRID WITH INNER DIVIDERS ONLY) ========== */}
//         <section className="w-full bg-black text-white px-6 md:px-12 py-24">
//           <div className="max-w-7xl mx-auto">
//             <h1 className="text-4xl font-bold mb-12 text-center">What I Do</h1>

//             <div className="grid grid-cols-1 md:grid-cols-2 w-full">
//               {services.map((service, i) => {
//                 const Icon = service.icon;

//                 return (
//                   <div
//                     key={i}
//                     className={`
//                       p-10
//                       ${i < 2 ? "border-b border-white" : ""}
//                       ${i % 2 === 0 ? "border-r border-white" : ""}
//                     `}
//                   >
//                     <div className="flex items-center gap-3 mb-6">
//                       <Icon className="w-7 h-7 text-yellow-400" />
//                       <h2 className="text-2xl font-semibold">{service.title}</h2>
//                     </div>

//                     <ul className="space-y-4 text-neutral-300">
//                       {service.points.map((p, idx) => (
//                         <li key={idx} className="flex gap-3">
//                           <Check className="w-4 h-4 text-yellow-400 mt-1" />
//                           <p>{p}</p>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </section>

//         {/* ========== ACHIEVEMENTS - OUR ETHOS STYLE ========== */}
//         <section className="py-32 px-4 bg-black" data-achievements-section>
//           <div className="container mx-auto max-w-7xl">
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              
//               {/* LEFT - HEADING */}
//               <div>
//                 <span className="inline-block bg-cyan-500/15 text-cyan-300 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-cyan-500/30">
//                   OUR ETHOS
//                 </span>
//                 <h2 data-achievements-h2 className="text-5xl md:text-6xl font-bold leading-tight">
//                   Our{' '}
//                   <span className="bg-yellow-400 text-black px-2">unique</span>
//                   {' '}operating
//                   <br />
//                   philosophy
//                 </h2>
//                 <p className="text-gray-400 text-base mt-6">
//                   As an extremely principled company, we stand by the following core operating philosophies.
//                 </p>
//               </div>

//               {/* RIGHT - SINGLE COLUMN 4 CARDS WITH DIVIDERS */}
//               <div className="space-y-0">
                
//                 {achievements.map((achievement, index) => {
//                   const Icon = achievement.icon;
//                   return (
//                     <motion.div
//                       key={index}
//                       initial={{ opacity: 0, y: 20 }}
//                       whileInView={{ opacity: 1, y: 0 }}
//                       viewport={{ once: true }}
//                       transition={{ delay: index * 0.1 }}
//                       className="border-b border-gray-700 py-8 flex justify-between items-start group"
//                     >
//                       <div className="flex-1">
//                         <h3 className="text-xl font-bold mb-3">{achievement.title}</h3>
//                         <motion.p 
//                           animate={{ opacity: [1, 0.5, 1] }}
//                           transition={{ duration: 3, repeat: Infinity }}
//                           className="text-gray-400 text-sm leading-relaxed"
//                         >
//                           {achievement.description}
//                         </motion.p>
//                       </div>
//                       <Icon className="w-6 h-6 text-gray-600 group-hover:text-cyan-400 transition-colors ml-4 flex-shrink-0 mt-1" />
//                     </motion.div>
//                   );
//                 })}
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* ========== TESTIMONIALS - AUTO SLIDING CAROUSEL ========== */}
//         <section className="py-32 px-4 bg-gradient-to-b from-black to-gray-950">
//           <div className="container mx-auto max-w-7xl">
//             <div className="text-center max-w-3xl mx-auto mb-20">
//               <span className="inline-block bg-purple-500/15 text-purple-300 px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-purple-500/30">
//                 WHAT CLIENTS SAY
//               </span>
//               <h2 className="text-5xl md:text-6xl font-bold mb-6">
//                 Client <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Testimonials</span>
//               </h2>
//               <p className="text-gray-400 text-lg">
//                 Hear from our satisfied clients about their experience working with us
//               </p>
//             </div>

//             {/* Carousel Container */}
//             <div className="relative w-full overflow-hidden">
//               <motion.div
//                 animate={{ x: `-${currentTestimonialIndex * 100}%` }}
//                 transition={{ duration: 0.8, ease: "easeInOut" }}
//                 className="flex w-full"
//               >
//                 {[...teamTestimonials, ...teamTestimonials].map((testimonial, index) => (
//                   <div key={index} className="min-w-full px-4">
//                     <motion.div
//                       initial={{ opacity: 0, y: 20 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ duration: 0.5 }}
//                       className="relative h-full"
//                     >
//                       <div className="pointer-events-none absolute -inset-0.5 rounded-3xl bg-gradient-to-br from-purple-500/25 via-fuchsia-500/10 to-cyan-500/25 opacity-70 blur-2xl" />

//                       <div className="relative h-full bg-gradient-to-br from-white/8 via-white/5 to-white/10 border border-white/15 rounded-3xl px-8 py-10 backdrop-blur-xl shadow-[0_18px_60px_rgba(15,23,42,0.65)]">
                        
//                         <div className="flex gap-1 mb-6">
//                           {[...Array(testimonial.rating)].map((_, i) => (
//                             <Star
//                               key={i}
//                               className="w-5 h-5 text-yellow-400 drop-shadow-[0_0_10px_rgba(250,204,21,0.8)]"
//                               fill="currentColor"
//                             />
//                           ))}
//                         </div>

//                         <p className="text-gray-100 text-lg leading-relaxed mb-8">
//                           <span className="text-purple-300 text-3xl align-top mr-1">"</span>
//                           {testimonial.content}
//                           <span className="text-purple-300 text-3xl align-bottom ml-1">"</span>
//                         </p>

//                         <div className="h-px w-full bg-gradient-to-r from-transparent via-purple-500/40 to-transparent mb-6 mt-auto" />

//                         <div className="flex items-center gap-4">
//                           <img
//                             src={testimonial.avatar}
//                             alt={testimonial.name}
//                             className="w-12 h-12 rounded-2xl object-cover"
//                           />
//                           <div>
//                             <h4 className="font-semibold text-gray-50">{testimonial.name}</h4>
//                             <p className="text-sm text-gray-400">{testimonial.role}</p>
//                           </div>
//                         </div>
//                       </div>
//                     </motion.div>
//                   </div>
//                 ))}
//               </motion.div>

//               {/* Navigation Dots */}
//               <div className="flex justify-center gap-3 mt-10">
//                 {teamTestimonials.map((_, index) => (
//                   <motion.button
//                     key={index}
//                     onClick={() => setCurrentTestimonialIndex(index)}
//                     className={`transition-all duration-300 ${
//                       currentTestimonialIndex === index
//                         ? "bg-purple-500 w-8 h-3"
//                         : "bg-gray-600 w-3 h-3 hover:bg-gray-500"
//                     } rounded-full`}
//                     whileHover={{ scale: 1.1 }}
//                   />
//                 ))}
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* ========== CTA SECTION ========== */}
//         <section className="py-32 px-4 relative overflow-hidden" data-about-cta-section>
//           <div className="absolute inset-0 bg-gradient-to-br from-blue-500/8 via-transparent to-cyan-500/8" />
//           <motion.div
//             animate={{ y: [0, -30, 0] }}
//             transition={{ repeat: Infinity, duration: 8 }}
//             className="absolute top-20 right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl opacity-30"
//           />
          
//           <div className="container mx-auto max-w-4xl relative z-10">
//             <div className="text-center mb-12">
//               <span className="inline-block bg-gradient-to-r from-blue-500/15 to-cyan-500/15 text-cyan-300 px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-cyan-500/30">
//                 LET'S WORK TOGETHER
//               </span>
//               <h2 data-about-cta-h2 className="text-5xl md:text-5xl font-bold mb-6">
//                 Ready to Transform Your <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Organization?</span>
//               </h2>
//               <p className="text-xl text-gray-300 max-w-2xl mx-auto">
//                 Schedule a consultation with our experts and discover how Globo Persona can drive your digital transformation journey.
//               </p>
//             </div>

//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: 0.2 }}
//               className="flex flex-col sm:flex-row gap-4 justify-center"
//             >
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="group bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-black font-semibold px-10 py-4 rounded-xl text-lg flex items-center justify-center gap-2 hover:shadow-xl hover:shadow-blue-500/25 transition-all"
//               >
//                 Start Your Journey
//                 <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//               </motion.button>

//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="group border border-gray-700 hover:border-cyan-500 bg-gray-900/50 backdrop-blur-sm px-10 py-4 rounded-xl text-lg flex items-center justify-center gap-2 hover:bg-gray-800/50 transition-all"
//               >
//                 <MessageSquare className="w-5 h-5" />
//                 Contact Us
//               </motion.button>
//             </motion.div>
//           </div>
//         </section>
//       </main>
//     </>
//   )
// }



// app/about/page.tsx
// "use client";

// import { useState } from "react";
// import { motion } from "framer-motion";
// import { 
//   Target, 
//   Users, 
//   Shield, 
//   TrendingUp,
//   Quote,
//   ChevronRight,
//   Check,
//   Award,
//   Globe,
//   Building2
// } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import Image from "next/image";

// const AboutPage = () => {
//   return (
//     <div className="min-h-screen">
//       {/* Hero Banner */}
//       <HeroBanner />
      
//       {/* Globo Persona Company */}
//       <GloboPersona />
      
//       {/* Achievements */}
//       <Achievements />
      
//       {/* Testimonials */}
//       <Testimonials />
      
//       {/* CTA Section - 3/4 width */}
//       <CTASection />
//     </div>
//   );
// };

// export default AboutPage;

// // Hero Banner Component with Image
// const HeroBanner = () => {
//   return (
//     <section className="bg-[#001F3F] text-white overflow-hidden">
//       <div className="container mx-auto px-4 py-16 md:py-24">
//         <div className="grid md:grid-cols-2 gap-12 items-center">
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//             className="space-y-6"
//           >
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
//               Innovating Business Solutions for Tomorrow
//             </h1>
//             <p className="text-lg md:text-xl text-gray-300">
//               As a premier B2B and B2C company, we bridge the gap between businesses 
//               and consumers with cutting-edge solutions. Our integrated approach 
//               delivers exceptional value across both domains.
//             </p>
//             <div className="flex gap-4 pt-4">
//               <Button 
//                 size="lg" 
//                 className="bg-white text-[#001F3F] hover:bg-gray-100 font-semibold"
//               >
//                 Explore Solutions
//                 <ChevronRight className="ml-2 h-4 w-4" />
//               </Button>
//               <Button 
//                 size="lg" 
//                 variant="outline"
//                 className="border-white text-white hover:bg-white/10"
//               >
//                 Contact Us
//               </Button>
//             </div>
//           </motion.div>
          
//           <motion.div
//             initial={{ opacity: 0, x: 20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="relative"
//           >
//             <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
//               {/* Replace with actual image - using placeholder for now */}
//               <div className="w-full h-full bg-gradient-to-br from-blue-600 to-cyan-500 relative">
//                 {/* Mock business/team image */}
//                 <div className="absolute inset-0 flex items-center justify-center">
//                   <div className="grid grid-cols-2 gap-4 p-8">
//                     <div className="bg-white/20 rounded-lg p-4 backdrop-blur-sm">
//                       <Building2 className="h-12 w-12 text-white mx-auto" />
//                     </div>
//                     <div className="bg-white/20 rounded-lg p-4 backdrop-blur-sm">
//                       <Users className="h-12 w-12 text-white mx-auto" />
//                     </div>
//                     <div className="bg-white/20 rounded-lg p-4 backdrop-blur-sm">
//                       <Globe className="h-12 w-12 text-white mx-auto" />
//                     </div>
//                     <div className="bg-white/20 rounded-lg p-4 backdrop-blur-sm">
//                       <TrendingUp className="h-12 w-12 text-white mx-auto" />
//                     </div>
//                   </div>
//                 </div>
//                 <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-6">
//                   <p className="text-white text-sm">Global Presence • 50+ Countries • 1000+ Clients</p>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// // Globo Persona Company Component - Updated layout
// const GloboPersona = () => {
//   const [activeTab, setActiveTab] = useState("mission");
  
//   const tabs = [
//     {
//       id: "mission",
//       icon: Target,
//       title: "Our Mission",
//       content: "To revolutionize B2B and B2C interactions by creating seamless, efficient, and impactful solutions that drive sustainable growth and unparalleled customer satisfaction across all touchpoints. We aim to bridge the gap between business efficiency and consumer convenience."
//     },
//     {
//       id: "vision",
//       icon: Globe,
//       title: "Our Vision",
//       content: "To become the global benchmark in integrated business solutions, creating a world where businesses thrive through innovation and consumers experience unparalleled value. We envision a future where technology serves both enterprises and individuals harmoniously."
//     },
//     {
//       id: "values",
//       icon: Shield,
//       title: "Our Values",
//       content: "Integrity in every interaction, Innovation as our driving force, Collaboration across boundaries, Customer-centricity in all decisions, Sustainability for future generations, and Excellence as our standard. These values form the foundation of our company culture."
//     },
//     {
//       id: "approach",
//       icon: TrendingUp,
//       title: "Our Approach",
//       content: "Combining cutting-edge technology with deep market insights to deliver tailored solutions. We follow a consultative approach, understanding unique business challenges before implementing solutions that drive measurable results for both B2B and B2C segments."
//     }
//   ];

//   const activeContent = tabs.find(tab => tab.id === activeTab);

//   return (
//     <section className="py-16 md:py-24 bg-white">
//       <div className="container mx-auto px-4">
//         <div className="max-w-7xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//             className="mb-12 text-center"
//           >
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//               About Globo Persona
//             </h2>
//             <p className="text-gray-600 text-lg max-w-3xl mx-auto">
//               Pioneering integrated solutions for modern businesses and their customers
//             </p>
//           </motion.div>
          
//           <div className="grid lg:grid-cols-3 gap-8">
//             {/* Left Side - Vertical Tabs */}
//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.6 }}
//               viewport={{ once: true }}
//               className="lg:col-span-1"
//             >
//               <div className="space-y-4">
//                 {tabs.map((tab) => {
//                   const Icon = tab.icon;
//                   return (
//                     <button
//                       key={tab.id}
//                       onClick={() => setActiveTab(tab.id)}
//                       className={`w-full text-left p-6 rounded-xl transition-all duration-300 flex items-start gap-4 ${
//                         activeTab === tab.id 
//                           ? "bg-[#001F3F] text-white shadow-lg" 
//                           : "bg-gray-50 hover:bg-gray-100 text-gray-700"
//                       }`}
//                     >
//                       <Icon className={`h-6 w-6 flex-shrink-0 mt-1 ${
//                         activeTab === tab.id ? "text-blue-300" : "text-gray-500"
//                       }`} />
//                       <div>
//                         <span className="font-semibold text-lg">{tab.title}</span>
//                         <p className={`text-sm mt-1 ${
//                           activeTab === tab.id ? "text-gray-300" : "text-gray-500"
//                         }`}>
//                           Click to learn more
//                         </p>
//                       </div>
//                     </button>
//                   );
//                 })}
//               </div>
//             </motion.div>
            
//             {/* Right Side - Content with Top Border */}
//             <motion.div
//               key={activeTab}
//               initial={{ opacity: 0, x: 20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.4 }}
//               className="lg:col-span-2"
//             >
//               <div className="border-t-4 border-blue-500 rounded-xl bg-gray-50 p-8 md:p-12 h-md shadow-lg">
//                 {activeContent && (
//                   <>
//                     <div className="flex items-center gap-4 mb-6">
//                       <div className="p-3 bg-blue-100 rounded-lg">
//                         <activeContent.icon className="h-8 w-8 text-blue-600" />
//                       </div>
//                       <h3 className="text-2xl font-bold text-gray-900">
//                         {activeContent.title}
//                       </h3>
//                     </div>
//                     <p className="text-gray-700 text-lg leading-relaxed">
//                       {activeContent.content}
//                     </p>
//                     {/* <div className="mt-8 pt-6 border-t border-gray-200">
//                       <div className="flex items-center gap-2 text-blue-600">
//                         <TrendingUp className="h-5 w-5" />
//                         <span className="font-medium">Currently implementing across 500+ client organizations</span>
//                       </div>
//                     </div> */}
//                   </>
//                 )}
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// // Achievements Component - Single Image with 4 Points
// const Achievements = () => {
//   const points = [
//     "Successfully integrated 500+ B2B partnerships with seamless API connectivity",
//     "Achieved 98% customer satisfaction rate across B2C implementations",
//     "Reduced operational costs by 40% for enterprise clients through automation",
//     "Scaled solutions to serve 1M+ end consumers with 99.9% uptime"
//   ];

//   return (
//     <section className="py-16 md:py-24 bg-gray-50">
//       <div className="container mx-auto px-4">
//         <div className="max-w-7xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//           >
//             <div className="grid md:grid-cols-2 gap-12 items-center">
//               {/* Left Side - Single Image */}
//               <motion.div
//                 initial={{ opacity: 0, x: -20 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.6, delay: 0.2 }}
//                 viewport={{ once: true }}
//                 className="relative"
//               >
//                 <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
//                   {/* Replace with actual image */}
//                   <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 relative">
//                     <div className="absolute inset-0 flex items-center justify-center p-8">
//                       <div className="text-center">
//                         <Award className="h-20 w-20 text-white mb-6 mx-auto" />
//                         <h3 className="text-2xl font-bold text-white mb-2">Industry Recognition</h3>
//                         <p className="text-white/90">2024 Excellence in Innovation Award</p>
//                       </div>
//                     </div>
//                     <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
//                       <p className="text-white text-sm font-medium">
//                         Recognized for outstanding B2B & B2C integration solutions
//                       </p>
//                     </div>
//                   </div>
//                 </div>
                
//                 {/* Decorative elements */}
//                 <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full opacity-20 blur-xl"></div>
//                 <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-400 rounded-full opacity-20 blur-xl"></div>
//               </motion.div>
              
//               {/* Right Side - 4 Points */}
//               <motion.div
//                 initial={{ opacity: 0, x: 20 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.6, delay: 0.3 }}
//                 viewport={{ once: true }}
//               >
//                 <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
//                   Our Key Achievements
//                 </h2>
                
//                 <div className="space-y-6">
//                   {points.map((point, index) => (
//                     <motion.div
//                       key={index}
//                       initial={{ opacity: 0, y: 10 }}
//                       whileInView={{ opacity: 1, y: 0 }}
//                       transition={{ duration: 0.4, delay: index * 0.1 }}
//                       viewport={{ once: true }}
//                       className="flex items-start gap-4"
//                     >
//                       <div className="flex-shrink-0">
//                         <div className="p-2 bg-blue-100 rounded-lg">
//                           <Check className="h-5 w-5 text-blue-600" />
//                         </div>
//                       </div>
//                       <div>
//                         <p className="text-gray-700 text-lg">{point}</p>
//                         {index === 0 && (
//                           <div className="mt-2 flex items-center gap-2">
//                             <div className="flex-1 bg-gray-200 rounded-full h-2">
//                               <div className="bg-blue-600 rounded-full h-2 w-[95%]"></div>
//                             </div>
//                             <span className="text-sm font-medium text-blue-600">95% Success Rate</span>
//                           </div>
//                         )}
//                       </div>
//                     </motion.div>
//                   ))}
//                 </div>
                
//                 <div className="mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
//                   <div className="flex items-center gap-4">
//                     <div className="p-3 bg-green-100 rounded-lg">
//                       <TrendingUp className="h-6 w-6 text-green-600" />
//                     </div>
//                     <div>
//                       <p className="font-semibold text-gray-900">Continuous Growth</p>
//                       <p className="text-gray-600 text-sm">
//                         200% YOY growth in client acquisitions across both B2B and B2C segments
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// // Testimonials Component - 3 Testimonials
// const Testimonials = () => {
//   const testimonials = [
//     {
//       id: 1,
//       quote: "Globo Persona transformed our B2B operations completely. Their integrated platform increased our operational efficiency by 40% and reduced costs significantly. The seamless transition was remarkable.",
//       name: "Sarah Johnson",
//       role: "Chief Operations Officer",
//       company: "TechCorp Solutions",
//       type: "B2B Enterprise Client"
//     },
//     {
//       id: 2,
//       quote: "As a retail chain, we needed both B2B supply chain solutions and B2C customer engagement tools. Globo Persona delivered on both fronts exceptionally well. Our customer satisfaction scores have never been higher.",
//       name: "Michael Chen",
//       role: "Director of Technology",
//       company: "Global Retail Inc.",
//       type: "Hybrid B2B/B2C Client"
//     },
//     {
//       id: 3,
//       quote: "The consumer-facing solutions helped us scale to 1M+ users while maintaining excellent performance. Their B2B tools streamlined our partner management. Truly a comprehensive solution provider.",
//       name: "Emma Rodriguez",
//       role: "Founder & CEO",
//       company: "InnovateLabs",
//       type: "Growth Startup Client"
//     }
//   ];

//   return (
//     <section className="bg-[#001F3F] text-white py-16 md:py-24">
//       <div className="container mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//         >
//           <div className="max-w-4xl mx-auto text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold mb-6">
//               Trusted by Industry Leaders
//             </h2>
//             <p className="text-gray-300 text-lg">
//               Discover why businesses across sectors choose Globo Persona for their 
//               B2B and B2C solution needs
//             </p>
//           </div>
          
//           <div className="grid md:grid-cols-3 gap-8">
//             {testimonials.map((testimonial, index) => (
//               <motion.div
//                 key={testimonial.id}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.2 }}
//                 viewport={{ once: true }}
//               >
//                 <Card className="bg-white/5 border-white/10 h-full hover:bg-white/10 transition-all duration-300">
//                   <CardContent className="p-6 h-full flex flex-col">
//                     <div className="flex-1">
//                       <Quote className="h-10 w-10 text-blue-300 mb-4 opacity-80" />
//                       <p className="text-gray-200 mb-6 leading-relaxed">
//                         "{testimonial.quote}"
//                       </p>
//                     </div>
                    
//                     <div className="border-t border-white/10 pt-4 mt-4">
//                       <div className="flex items-center gap-3">
//                         <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
//                           <span className="font-bold text-white">
//                             {testimonial.name.charAt(0)}
//                           </span>
//                         </div>
//                         <div>
//                           <p className="font-semibold">{testimonial.name}</p>
//                           <p className="text-gray-300 text-sm">{testimonial.role}</p>
//                           <p className="text-blue-300 text-sm font-medium">{testimonial.company}</p>
//                           <span className="inline-block mt-2 px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs">
//                             {testimonial.type}
//                           </span>
//                         </div>
//                       </div>
//                     </div>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// // CTA Section - 3/4 width
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
//                   <Button 
//                     size="lg" 
//                     variant="ghost"
//                     className="text-white hover:bg-white/5"
//                   >
//                     View Case Studies
//                   </Button>
//                 </div>
                
//                 <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-white/20">
//                   <div className="text-center">
//                     <div className="text-2xl font-bold">24/7</div>
//                     <div className="text-sm text-gray-300">Support Available</div>
//                   </div>
//                   <div className="text-center">
//                     <div className="text-2xl font-bold">30-Day</div>
//                     <div className="text-sm text-gray-300">Money Back Guarantee</div>
//                   </div>
//                   <div className="text-center">
//                     <div className="text-2xl font-bold">500+</div>
//                     <div className="text-sm text-gray-300">Integrations</div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };


"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { 
  Target, 
  Users, 
  Shield, 
  TrendingUp,
  Quote,
  ChevronRight,
  Check,
  Award,
  Star,
  Globe,
  Building2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <HeroBanner />
      <GloboPersona />
      <Achievements />
      <Testimonials />
      <CTASection />
    </div>
  );
};

export default AboutPage;

// GSAP Typing Effect Hook
const useTypingEffect = (ref: React.RefObject<HTMLElement>, text: string) => {
  useEffect(() => {
    if (!ref.current || !text) return;
    const chars = text.split("");
    ref.current.textContent = "";
    chars.forEach((char: string, i: number) => {
      const span = document.createElement("span");
      span.textContent = char;
      span.style.opacity = "0";
      ref.current?.appendChild(span);
      gsap.to(span, { opacity: 1, delay: i * 0.05 });
    });
  }, [ref, text]);
};


// Hero Banner Component with Image
const HeroBanner = () => {
  const headingRef = useRef(null);
  const paraRef = useRef(null);

  useTypingEffect(headingRef, "Innovating Business Solutions for Tomorrow");
  useTypingEffect(paraRef, "As a premier B2B and B2C company, we bridge the gap between businesses and consumers with cutting-edge solutions. Our integrated approach delivers exceptional value across both domains.");

  return (
   <section className="bg-[#001F3F] text-white overflow-hidden w-full">
      {/* full width, but content 90% + 50px inner side space */}
      <div className="w-[90%] mx-auto py-16 md:py-24">
        {/* 50% / 50% columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left text – 50px side space */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 pl-[50px]"
          >
            <h1
              ref={headingRef}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            ></h1>
            <p
              ref={paraRef}
              className="text-lg md:text-xl text-gray-300 max-w-xl"
            ></p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                size="lg"
                className="bg-white text-[#001F3F] hover:bg-gray-100 font-semibold"
              >
                Explore Solutions
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                Contact Us
              </Button>
            </div>
          </motion.div>

          {/* Right image – 50px side space + reduced height */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative pr-[50px]"
          >
            <div className="w-full rounded-2xl overflow-hidden shadow-2xl">
              <div className="relative h-200 md:h-56 lg:h-400 pr-[100]">
                <Image
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&h=900&fit=crop"
                  alt="Hero Banner"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
         

        </div>
      </div>
    </section>
  );
};

// Globo Persona Company Component
const GloboPersona = () => {
  const [activeTab, setActiveTab] = useState("mission");
  const headingRef = useRef(null);
  const paraRef = useRef(null);

  useTypingEffect(headingRef, "About Globo Persona");
  useTypingEffect(paraRef, "Pioneering integrated solutions for modern businesses and their customers");

  const tabs = [
    {
      id: "mission",
      icon: Target,
      title: "Our Mission",
      content: "To revolutionize B2B and B2C interactions by creating seamless, efficient, and impactful solutions that drive sustainable growth and unparalleled customer satisfaction across all touchpoints. We aim to bridge the gap between business efficiency and consumer convenience."
    },
    {
      id: "vision",
      icon: Globe,
      title: "Our Vision",
      content: "To become the global benchmark in integrated business solutions, creating a world where businesses thrive through innovation and consumers experience unparalleled value. We envision a future where technology serves both enterprises and individuals harmoniously."
    },
    {
      id: "values",
      icon: Shield,
      title: "Our Values",
      content: "Integrity in every interaction, Innovation as our driving force, Collaboration across boundaries, Customer-centricity in all decisions, Sustainability for future generations, and Excellence as our standard. These values form the foundation of our company culture."
    },
    {
      id: "approach",
      icon: TrendingUp,
      title: "Our Approach",
      content: "Combining cutting-edge technology with deep market insights to deliver tailored solutions. We follow a consultative approach, understanding unique business challenges before implementing solutions that drive measurable results for both B2B and B2C segments."
    }
  ];

  const activeContent = tabs.find(tab => tab.id === activeTab);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 ref={headingRef} className="text-4xl md:text-4xl font-bold text-gray-900 mb-4"></h2>
            <p ref={paraRef} className="text-gray-600 text-lg max-w-3xl mx-auto"></p>
          </motion.div>
          <div className="grid lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <div className="space-y-4">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full text-left p-6 rounded-xl transition-all duration-300 flex items-start gap-4 ${
                        activeTab === tab.id 
                          ? "bg-[#001F3F] text-white shadow-lg" 
                          : "bg-gray-50 hover:bg-gray-100 text-gray-700 shadow-md"
                      }`}
                    >
                      <Icon className={`h-6 w-6 flex-shrink-0 mt-1 ${
                        activeTab === tab.id ? "text-blue-300" : "text-gray-500"
                      }`} />
                      <div>
                        <span className="font-semibold text-lg">{tab.title}</span>
                        <p className={`text-sm mt-1 ${
                          activeTab === tab.id ? "text-gray-300" : "text-gray-500"
                        }`}>
                          Click to learn more
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </motion.div>
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="lg:col-span-2"
            >
              <div className="border-t-4 border-blue-500 rounded-xl bg-gray-50 p-8 md:p-12 shadow-lg mt-20">
                {activeContent && (
                  <>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 bg-blue-100 rounded-lg">
                        <activeContent.icon className="h-8 w-8 text-blue-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">{activeContent.title}</h3>
                    </div>
                    <p className="text-gray-700 text-lg leading-relaxed">{activeContent.content}</p>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Achievements Component
const Achievements = () => {
  const headingRef = useRef(null);
  useTypingEffect(headingRef, "Our Key Achievements");

  const points = [
    "Successfully integrated 500+ B2B partnerships with seamless API connectivity",
    "Achieved 98% customer satisfaction rate across B2C implementations",
    "Reduced operational costs by 40% for enterprise clients through automation",
    "Scaled solutions to serve 1M+ end consumers with 99.9% uptime"
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=1200&fit=crop"
                    alt="Achievements"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h2 ref={headingRef} className="text-3xl md:text-4xl font-bold text-gray-900 mb-8"></h2>
                <div className="space-y-6">
                  {points.map((point, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-4"
                    >
                      <div className="flex-shrink-0">
                        <div className="p-2 bg-blue-100 rounded-lg">
                          <Check className="h-5 w-5 text-blue-600" />
                        </div>
                      </div>
                      <div>
                        <p className="text-gray-700 text-lg">{point}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Testimonials Component
const Testimonials = () => {
  const headingRef = useRef(null);
  useTypingEffect(headingRef, "Trusted by Industry Leaders");

const teamTestimonials = [
    {
      name: "Alex Johnson",
      role: "CEO & Founder",
      content: "Building Globo Persona with passion for technology and commitment to client success.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop"
    },
    {
      name: "Priya Sharma",
      role: "CTO",
      content: "Leading talented engineers who push boundaries every day. Our culture of innovation.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
    },
    {
      name: "Marcus Chen",
      role: "VP, Client Success",
      content: "Every client relationship is sacred. We measure success by the impact we create.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop"
    },
  
  ];

  return (
    //         {/* ========== TEAM TESTIMONIALS ========== */}
        <section className="py-24 px-4 bg-gradient-to-b from-black to-gray-950" data-team-section>
          <div className="container mx-auto max-w-7xl">
            <div className="text-center max-w-3xl mx-auto mb-20">
              {/* <span className="inline-block bg-purple-500/15 text-purple-300 px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-purple-500/30">
                LEADERSHIP VOICES
              </span> */}
              <h2 data-team-h2 className="text-4xl md:text-5xl font-bold mb-6">
                What Our <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Team Says</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {teamTestimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="pointer-events-none absolute -inset-0.5 rounded-3xl bg-gradient-to-br from-purple-500/25 via-fuchsia-500/10 to-cyan-500/25 opacity-70 blur-2xl" />

                  <div className="relative h-full bg-gradient-to-br from-white/8 via-white/5 to-white/10 border border-white/15 rounded-3xl px-8 py-10 backdrop-blur-xl shadow-[0_18px_60px_rgba(15,23,42,0.65)] flex flex-col transition-all duration-300 hover:-translate-y-2 hover:border-purple-400/40">
                    
                    <div className="flex gap-1 mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 text-yellow-400 drop-shadow-[0_0_10px_rgba(250,204,21,0.8)]"
                          fill="currentColor"
                        />
                      ))}
                    </div>

                    <p className="text-gray-100 text-lg leading-relaxed mb-8 flex-1">
                      <span className="text-purple-300 text-3xl align-top mr-1">"</span>
                      {testimonial.content}
                      <span className="text-purple-300 text-3xl align-bottom ml-1">"</span>
                    </p>

                    <div className="h-px w-full bg-gradient-to-r from-transparent via-purple-500/40 to-transparent mb-6 mt-auto" />

                    <div className="flex items-center gap-4">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-2xl object-cover"
                      />
                      <div>
                        <h4 className="font-semibold text-gray-50">{testimonial.name}</h4>
                        <p className="text-sm text-gray-400">{testimonial.role}</p>
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

// CTA Section (Unchanged as per request)
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
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full -translate-y-32 translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/10 rounded-full translate-y-48 -translate-x-48"></div>
            <div className="relative z-10">
              <div className="max-w-3xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-gray-300 text-lg mb-8">
                  Join 1000+ successful businesses already leveraging our integrated 
                  B2B and B2C solutions. Whether you're looking to streamline operations, 
                  enhance customer experiences, or both - we have the expertise to help 
                  you succeed.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Button size="lg" className="bg-white text-[#001F3F] hover:bg-gray-100 font-semibold">
                    Start Free Trial
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    Schedule Demo
                  </Button>
                  <Button size="lg" variant="ghost" className="text-white hover:bg-white/5">
                    View Case Studies
                  </Button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-white/20">
                  <div className="text-center">
                    <div className="text-2xl font-bold">24/7</div>
                    <div className="text-sm text-gray-300">Support Available</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">30-Day</div>
                    <div className="text-sm text-gray-300">Money Back Guarantee</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">500+</div>
                    <div className="text-sm text-gray-300">Integrations</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};



