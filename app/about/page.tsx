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


"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  const [bannerCurrentLine, setBannerCurrentLine] = useState(0);
  const [bannerCurrentWord, setBannerCurrentWord] = useState(0);
  const [showBannerButton, setShowBannerButton] = useState(false);

  const bannerLines = ["About Our Team"];
  const bannerParagraph =
    "Welcome to GloboPersona, your premier destination for comprehensive digital marketing solutions.";
  const bannerWords = bannerParagraph.split(" ");

  // heading animation
  useEffect(() => {
    const lineTimer = setInterval(() => {
      setBannerCurrentLine((prev) => {
        if (prev < bannerLines.length - 1) {
          return prev + 1;
        } else {
          clearInterval(lineTimer);
          return prev;
        }
      });
    }, 1000);

    return () => clearInterval(lineTimer);
  }, []);

  // paragraph + button animation
  useEffect(() => {
    if (bannerCurrentLine === bannerLines.length - 1) {
      const wordTimer = setTimeout(() => {
        const wordInterval = setInterval(() => {
          setBannerCurrentWord((prev) => {
            if (prev < bannerWords.length - 1) {
              return prev + 1;
            } else {
              clearInterval(wordInterval);
              setTimeout(() => setShowBannerButton(true), 500);
              return prev;
            }
          });
        }, 70);

        return () => clearInterval(wordInterval);
      }, 400);

      return () => clearTimeout(wordTimer);
    }
  }, [bannerCurrentLine, bannerWords.length]);
  const services = [
  {
    icon: "🔍",
    title: "SEO",
    points: [
      "Enhanced visibility to reach global audiences.",
      "SEO-centric campaigns to engage ideal customers.",
      "Data-driven optimisation for better performance.",
    ],
  },
  {
    icon: "💻",
    title: "Web Design",
    points: [
      "Customised sites aligned with your brand.",
      "Functional UX focused on smooth navigation.",
      "Reliable performance, speed and security.",
    ],
  },
  {
    icon: "🧰",
    title: "Web Development",
    points: [
      "Lightweight, scalable websites for reach.",
      "Tailored builds for your business needs.",
      "Ongoing technical improvements and support.",
    ],
  },
  {
    icon: "🎯",
    title: "Performance & Social",
    points: [
      "Targeted campaigns to grow your audience.",
      "Creative content for strong brand recall.",
      "Real-time optimisation using clear metrics.",
    ],
  },
];


  return (
    <main className="bg-black text-white">
      {/* ===== BANNER SECTION ===== */}
      <section className="relative py-20 md:py-28 overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#244082]/8 via-transparent to-[#213b52]/5" />

        <div className="container mx-auto px-6 max-w-3xl relative z-10">
          <div className="max-w-2xl mx-auto space-y-8 text-center">
            {/* Heading */}
            <div className="space-y-2">
              <AnimatePresence>
                {bannerLines
                  .slice(0, bannerCurrentLine + 1)
                  .map((line, index) => (
                    <motion.h1
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.6 }}
                      className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight"
                    >
                      {line}
                    </motion.h1>
                  ))}
              </AnimatePresence>
            </div>

            {/* Word-by-word description */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-lg md:text-xl text-slate-300 max-w-xl mx-auto leading-relaxed"
            >
              <p>
                {bannerWords
                  .slice(0, bannerCurrentWord + 1)
                  .map((word, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.15 }}
                      className="inline-block mr-1.5 last:mr-0"
                    >
                      {word}
                    </motion.span>
                  ))}

                {bannerCurrentWord < bannerWords.length - 1 && (
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ repeat: Infinity, duration: 1 }}
                    className="inline-block w-[2px] h-7 bg-white ml-1.5 align-middle"
                  />
                )}
              </p>
            </motion.div>

            {/* Button */}
            <AnimatePresence>
              {showBannerButton && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="pt-6"
                >
                  <Button
                    size="lg"
                    className="bg-[#244082] hover:bg-[#213b52] text-white shadow-lg shadow-[#244082]/30 font-semibold px-8 py-5 h-14 rounded-xl text-base border border-white/20 w-full md:w-auto"
                  >
                    Let&apos;s talk
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ===== ABOUT GLOBO PERSONA GRID SECTION ===== */}
    
      <section className="bg-black text-white py-16 md:py-20">
  <div className="container mx-auto px-4 md:px-8 max-w-6xl">
    <div className="grid md:grid-cols-2 border-t border-l border-[#222]">
      {services.map((item, idx) => (
        <div
          key={item.title}
          className="border-b border-r border-[#222] p-8 md:p-10"
        >
          {/* icon + title */}
          <div className="flex items-center gap-4 mb-6">
            <div className="h-10 w-10 rounded-full border border-[#244082] flex items-center justify-center text-xl">
              <span className="text-[#244082]">{item.icon}</span>
            </div>
            <h3 className="text-xl font-semibold">{item.title}</h3>
          </div>

          {/* description bullets */}
          <ul className="space-y-3 text-sm md:text-base text-slate-300">
            {item.points.map((p) => (
              <li key={p} className="flex gap-3">
                <span className="mt-1 h-1 w-6 bg-[#444]" /> {/* ____ horizontal line */}
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
</section>

    </main>
  );
}
