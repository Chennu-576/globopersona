
// components/BannerSection.tsx
// "use client";

// import { motion } from "framer-motion";

// const BannerSection = () => {
//   return (
//     <section className="min-h-screen bg-black relative overflow-hidden">
//       <div className="container mx-auto px-4 h-full">
//         <div className="grid grid-cols-1 lg:grid-cols-2 h-screen items-center">
//           {/* Left side - Content */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-white py-20 lg:py-0"
//           >
//             {/* Heading */}
//             <motion.h1
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.3, duration: 0.8 }}
//               className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
//             >
//               Globopersona
//             </motion.h1>

//             {/* Paragraph - Word to word as requested */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.5, duration: 0.8 }}
//               className="text-lg md:text-xl text-white/90 leading-relaxed max-w-xl"
//             >
//               <p className="mb-4">
//                 Welcome to Globopersona, where global personas are created, managed, and transformed. Our platform offers innovative solutions for building and managing your digital identity across the globe.
//               </p>
//               <p className="mb-4">
//                 We provide tools and services that help you establish a consistent and powerful presence worldwide. Our approach combines technology with human-centric design to deliver exceptional results.
//               </p>
//               <p>
//                 Join thousands of users who trust Globopersona for their global persona management needs. Experience the future of digital identity with us today.
//               </p>
//             </motion.div>

//             {/* Simple CTA */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.7, duration: 0.8 }}
//               className="mt-10"
//             >
//               <button className="bg-white text-black px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors">
//                 Explore Globopersona
//               </button>
//             </motion.div>
//           </motion.div>

//           {/* Right side - Completely Blank as requested */}
//           <div className="hidden lg:block h-full">
//             {/* Absolutely nothing here - completely blank */}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BannerSection;


// "use client";

// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Button } from "@/components/ui/button"; // Assuming you have shadcn button

// const BannerSection = () => {
//   const [currentLine, setCurrentLine] = useState(0);
//   const [currentWord, setCurrentWord] = useState(0);
//   const [showButtons, setShowButtons] = useState(false);

//   // Heading lines (each line will appear one by one)
//   const headingLines = [
//     "Welcome to Globo Persona",
//   ];

//   // Paragraph text (word by word animation)
//   const paragraphText = "We deliver exceptional digital experiences that connect brands with their audience through innovative design and technology. Let's build something amazing together.";

//   const words = paragraphText.split(" ");

//   // Animate heading lines one by one
//   useEffect(() => {
//     const lineTimer = setInterval(() => {
//       setCurrentLine((prev) => {
//         if (prev < headingLines.length - 1) {
//           return prev + 1;
//         } else {
//           clearInterval(lineTimer);
//           return prev;
//         }
//       });
//     }, 600); // Delay between lines

//     return () => clearInterval(lineTimer);
//   }, []);

//   // Animate words one by one after lines are done
//   useEffect(() => {
//     if (currentLine === headingLines.length - 1) {
//       const wordTimer = setTimeout(() => {
//         const wordInterval = setInterval(() => {
//           setCurrentWord((prev) => {
//             if (prev < words.length - 1) {
//               return prev + 1;
//             } else {
//               clearInterval(wordInterval);
//               setTimeout(() => setShowButtons(true), 300); // Show buttons after text
//               return prev;
//             }
//           });
//         }, 150); // Speed of word animation

//         return () => clearInterval(wordInterval);
//       }, 500);

//       return () => clearTimeout(wordTimer);
//     }
//   }, [currentLine]);

//   return (
//     <section className="relative min-h-screen bg-black text-white overflow-hidden">
//       {/* Background Elements */}
//       <div className="absolute inset-0">
//         {/* Subtle grid pattern */}
//         <div 
//           className="absolute inset-0 opacity-[0.03]" 
//           style={{
//             backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px),
//                              linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
//             backgroundSize: '50px 50px',
//           }}
//         />
        
//         {/* Floating gradient orbs */}
//         <motion.div
//           animate={{
//             x: [0, 100, 0],
//             y: [0, 50, 0],
//           }}
//           transition={{
//             duration: 20,
//             repeat: Infinity,
//             ease: "linear"
//           }}
//           className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-full blur-3xl"
//         />
//         <motion.div
//           animate={{
//             x: [0, -100, 0],
//             y: [0, -50, 0],
//           }}
//           transition={{
//             duration: 25,
//             repeat: Infinity,
//             ease: "linear"
//           }}
//           className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-gray-900/20 to-blue-900/20 rounded-full blur-3xl"
//         />
//       </div>

//       {/* Main Content */}
//       <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8 min-h-screen flex flex-col justify-center">
//         <div className="max-w-5xl mx-auto space-y-8 md:space-y-12">
//           {/* Heading */}
//           <div className="space-y-4 md:space-y-6">
//             <AnimatePresence>
//               {headingLines.slice(0, currentLine + 1).map((line, index) => (
//                 <motion.h1
//                   key={index}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{
//                     duration: 0.8,
//                     delay: index * 0.3,
//                     ease: "easeOut"
//                   }}
//                   className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight"
//                 >
//                   {line}
//                 </motion.h1>
//               ))}
//             </AnimatePresence>
//           </div>

//           {/* Paragraph */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.5 }}
//             className="text-lg md:text-xl lg:text-1xl text-gray-300 max-w-3xl"
//           >
//             <p>
//               {words.slice(0, currentWord + 1).map((word, index) => (
//                 <motion.span
//                   key={index}
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ duration: 0.1 }}
//                   className="inline-block mr-2"
//                 >
//                   {word}
//                 </motion.span>
//               ))}
              
//               {/* Blinking cursor */}
//               {currentWord < words.length - 1 && (
//                 <motion.span
//                   animate={{ opacity: [1, 0, 1] }}
//                   transition={{ repeat: Infinity, duration: 1 }}
//                   className="inline-block w-[2px] h-6 bg-white ml-1"
//                 />
//               )}
//             </p>
//           </motion.div>

//           {/* Buttons */}
//           <AnimatePresence>
//             {showButtons && (
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5 }}
//                 className="flex flex-wrap gap-4 pt-8"
//               >
//                 <Button
//                   size="lg"
//                   className="bg-white text-black hover:bg-gray-200 text-lg px-8 py-6 rounded-full"
//                   asChild
//                 >
//                   <motion.a
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                   >
//                     Get Started Free
//                   </motion.a>
//                 </Button>
                
//                 <Button
//                   size="lg"
//                   variant="outline"
//                   className="border-white text-white hover:bg-white/10 text-lg px-8 py-6 rounded-full"
//                   asChild
//                 >
//                   <motion.a
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                   >
//                     View Demo
//                   </motion.a>
//                 </Button>
//               </motion.div>
//             )}
//           </AnimatePresence>

//           {/* Scroll indicator */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: showButtons ? 1 : 0 }}
//             className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
//           >
//             <motion.div
//               animate={{ y: [0, 10, 0] }}
//               transition={{ repeat: Infinity, duration: 2 }}
//               className="flex flex-col items-center gap-2"
//             >
//               <span className="text-sm text-gray-400">Scroll to explore</span>
//               <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
//                 <div className="w-1 h-3 bg-white/50 rounded-full mt-2" />
//               </div>
//             </motion.div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BannerSection;


// "use client";

// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import { 
//   Search, 
//   Layout, 
//   Palette, 
//   Code, 
//   TrendingUp, 
//   Users,
//   Target,
//   BarChart,
//   Zap,
//   Globe,
//   Shield,
//   Cpu,
//   ChevronRight,
// } from "lucide-react";

// export default function HomePage() {
//   // ========== BANNER SECTION STATES ==========
//   const [bannerCurrentLine, setBannerCurrentLine] = useState(0);
//   const [bannerCurrentWord, setBannerCurrentWord] = useState(0);
//   const [showBannerButtons, setShowBannerButtons] = useState(false);

//   // Banner content
//   const bannerLines = [
//     "Welcome to Globo Persona",
//   ];

//   const bannerParagraph = "We deliver exceptional digital experiences that connect brands with their audience through innovative design and technology. Let's build something amazing together.";
//   const bannerWords = bannerParagraph.split(" ");

//   // ========== FEATURES SECTION STATES ==========
//   const [activeTab, setActiveTab] = useState(1);
//   const [featureCurrentWords, setFeatureCurrentWords] = useState([0, 0, 0, 0]);
//   const [isAnimating, setIsAnimating] = useState(false);

//   // Features content - SIMPLIFIED: Only title and description
//   const features = [
//     {
//       id: 0,
//       title: "Connect your infrastructure globally",
//       description: "Deploy a global network that connects your users to your applications with ultra-low latency and optimal routing.",
//     },
//     {
//       id: 1,
//       title: "Protect and accelerate websites",
//       description: "Place a global cloud network in front of websites, apps, and APIs to insulate users from Internet-borne threats and accelerate performance.",
//     },
//     {
//       id: 2,
//       title: "Build modern applications",
//       description: "Deploy serverless functions and edge computing to build fast, scalable applications that run closer to your users.",
//     },
//     {
//       id: 3,
//       title: "Scale effortlessly",
//       description: "Auto-scaling infrastructure that grows with your business without performance degradation or manual intervention.",
//     },
//   ];
//   const [servicesCurrentWords, setServicesCurrentWords] = useState(Array(9).fill(0));
//   const [isServiceAnimating, setIsServiceAnimating] = useState(Array(9).fill(false));

//   // Services data
//    const [serviceWords, setServiceWords] = useState([0,0,0,0,0,0,0,0,0]);
//   const services = [
//     {
//       id: 0,
//       title: "SEO",
//       icon: Search,
//       description: "Enhanced Visibility: Utilise SEO to reach global audiences, elevating brand and growth prospects.",
//       points: [
//         "Enhanced Visibility: Utilise SEO to reach global audiences, elevating brand and growth prospects.",
//         "Precision Targeting: Craft SEO-centric campaigns to engage ideal customers and maximise ROI.",
//         "Data-Driven Optimisation: Employ SEO analytics for strategy enhancement and better performance."
//       ]
//     },
//     {
//       id: 1,
//       title: "Web Design",
//       icon: Layout,
//       description: "Customised Websites: Create online realms aligning with brand essence and business objectives.",
//       points: [
//         "Customised Websites: Create online realms aligning with brand essence and business objectives.",
//         "Functional Features: Boost user experience focusing on usability and smooth navigation.",
//         "Reliable Performance: Ensure uptime, security, and speed for optimal website functions."
//       ]
//     },
//     {
//       id: 2,
//       title: "Creative",
//       icon: Palette,
//       description: "Strong Brand Presence: Build a cohesive, memorable identity resonating with target audience.",
//       points: [
//         "Strong Brand Presence: Build a cohesive, memorable identity resonating with target audience.",
//         "Engaging Visuals: Capture audience interest with top-notch photography, video, and promos.",
//         "Seamless User Interactions: Design user interfaces enhancing customer satisfaction and conversions."
//       ]
//     },
//     {
//       id: 3,
//       title: "Web Development",
//       icon: Code,
//       description: "Global Accessibility: Build lightweight websites to reach diverse audiences, boosting your brand.",
//       points: [
//         "Global Accessibility: Build lightweight websites to reach diverse audiences, boosting your brand."
//       ]
//     },
//     {
//       id: 4,
//       title: "PPC",
//       icon: TrendingUp,
//       description: "Global Engagement: Launch PPC campaigns for instant global reach, enhancing brand visibility.",
//       points: [
//         "Global Engagement: Launch PPC campaigns for instant global reach, enhancing brand visibility."
//       ]
//     },
//     {
//       id: 5,
//       title: "Social Media",
//       icon: Users,
//       description: "Audience Expansion: Engage and grow your audience through social media's interactive nature.",
//       points: [
//         "Audience Expansion: Engage and grow your audience through social media's interactive nature."
//       ]
//     },
//     {
//       id: 6,
//       title: "Precision Marketing",
//       icon: Target,
//       description: "Target specific demographics with data-driven marketing strategies for maximum impact.",
//       points: [
//         "Target specific demographics with data-driven marketing strategies for maximum impact."
//       ]
//     },
//     {
//       id: 7,
//       title: "Analytics",
//       icon: BarChart,
//       description: "Track performance and optimize strategies with comprehensive analytics and reporting.",
//       points: [
//         "Track performance and optimize strategies with comprehensive analytics and reporting."
//       ]
//     },
//     {
//       id: 8,
//       title: "Performance",
//       icon: Zap,
//       description: "Ensure optimal speed and reliability for your digital platforms and applications.",
//       points: [
//         "Ensure optimal speed and reliability for your digital platforms and applications."
//       ]
//     }
//   ];

//   const [hasScrolled, setHasScrolled] = useState(false);

//    const icons = [
//     { id: 1, icon: Search, title: "SEO" },
//     { id: 2, icon: Layout, title: "Web Design" },
//     { id: 3, icon: Palette, title: "Creative" },
//     { id: 4, icon: Code, title: "Development" },
//     { id: 5, icon: TrendingUp, title: "PPC" },
//     { id: 6, icon: Users, title: "Social Media" },
//     { id: 7, icon: Shield, title: "Security" },
//     { id: 8, icon: Globe, title: "Global" },
//     { id: 9, icon: Zap, title: "Performance" },
//     { id: 10, icon: Cpu, title: "Technology" },
//     { id: 11, icon: Target, title: "Marketing" },
//     { id: 12, icon: BarChart, title: "Analytics" },
//   ];
//   const [openIndex, setOpenIndex] = useState<number | null>(null);
//   const faqs = [
//     {
//       id: 1,
//       number: "01",
//       date: "July 8, 2025",
//       question: "What are the key factors for successful SEO?",
//       answer: "Successful SEO requires a combination of quality content, technical optimization, backlink building, and user experience. Focus on keyword research, mobile optimization, page speed, and creating valuable content that answers user queries."
//     },
//     {
//       id: 2,
//       number: "02",
//       date: "May 21, 2024",
//       question: "Which graphic design software is best for beginners?",
//       answer: "For beginners, we recommend starting with Figma (free tier available) or Canva for easy drag-and-drop designs. For more advanced work, Adobe Creative Cloud offers professional tools like Photoshop, Illustrator, and InDesign."
//     },
//     {
//       id: 3,
//       number: "03",
//       date: "May 15, 2024",
//       question: "What are the best keyword research tools available?",
//       answer: "Top keyword research tools include SEMrush, Ahrefs, Moz, and Google Keyword Planner. Each offers unique features for finding relevant keywords, analyzing competition, and tracking search volume trends."
//     },
//     {
//       id: 4,
//       number: "04",
//       date: "May 9, 2024",
//       question: "How important is link building for SEO?",
//       answer: "Link building remains one of Google's top ranking factors. Quality backlinks from authoritative websites signal trust and authority to search engines. Focus on earning links through guest posting, content creation, and digital PR."
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
//   }, [bannerCurrentLine]);

//   // ========== FEATURE ANIMATIONS ==========
//   useEffect(() => {
//     // Reset words for the new active tab
//     setFeatureCurrentWords(prev => {
//       const newWords = [...prev];
//       newWords[activeTab] = 0;
//       return newWords;
//     });
    
//     setIsAnimating(true);
    
//     // Animate words for the active tab
//     const words = features[activeTab].description.split(" ");
//     let currentWord = 0;
    
//     const wordInterval = setInterval(() => {
//       if (currentWord < words.length - 1) {
//         currentWord++;
//         setFeatureCurrentWords(prev => {
//           const newWords = [...prev];
//           newWords[activeTab] = currentWord;
//           return newWords;
//         });
//       } else {
//         clearInterval(wordInterval);
//         setIsAnimating(false);
//       }
//     }, 60);
    
//     return () => clearInterval(wordInterval);
//   }, [activeTab]);

//   // Tab names for navigation (just the action words)
//   const tabNames = ["Connect", "Protect", "Build", "Scale"];

//    // ========== SERVICES ANIMATIONS ==========
//   useEffect(() => {
//     const timers = services.map((service, index) => {
//       return setTimeout(() => {
//         setIsServiceAnimating(prev => {
//           const newArr = [...prev];
//           newArr[index] = true;
//           return newArr;
//         });

//         const words = service.description.split(" ");
//         let currentWord = 0;
        
//         const wordInterval = setInterval(() => {
//           if (currentWord < words.length - 1) {
//             currentWord++;
//             setServicesCurrentWords(prev => {
//               const newWords = [...prev];
//               newWords[index] = currentWord;
//               return newWords;
//             });
//           } else {
//             clearInterval(wordInterval);
//             setTimeout(() => {
//               setIsServiceAnimating(prev => {
//                 const newArr = [...prev];
//                 newArr[index] = false;
//                 return newArr;
//               });
//             }, 1000);
//           }
//         }, 80);

//         return () => clearInterval(wordInterval);
//       }, index * 300);
//     });

//     return () => timers.forEach(timer => clearTimeout(timer));
//   }, []);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 400) {
//         setHasScrolled(true);
//       } else {
//         setHasScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <main className="min-h-screen">
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
//           <div className="max-w-5xl mx-auto space-y-8 md:space-y-12">
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
//                     className="bg-white text-black hover:bg-gray-200 text-lg px-8 py-6 rounded-full"
//                   >
//                     <motion.span whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                       Get Started Free
//                     </motion.span>
//                   </Button>
                  
//                   <Button
//                     size="lg"
//                     variant="outline"
//                     className="border-white text-white hover:bg-white/10 text-lg px-8 py-6 rounded-full"
//                   >
//                     <motion.span whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                       View Demo
//                     </motion.span>
//                   </Button>
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </div>
//         </div>
//       </section>

//       {/* ========== FEATURES SECTION ========== */}
//       <section className="py-20 bg-white">
//         <div className="container mx-auto px-4 md:px-6 lg:px-8">
//           {/* Tabs navigation - SIMPLIFIED: Just text tabs */}
//           <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12">
//             {tabNames.map((tabName, index) => (
//               <motion.button
//                 key={index}
//                 onClick={() => setActiveTab(index)}
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className={`px-6 py-3 text-lg font-semibold rounded-lg transition-all ${
//                   activeTab === index
//                     ? "bg-[#244082] text-white"
//                     : "text-gray-600 hover:bg-gray-100"
//                 }`}
//               >
//                 {tabName}
//               </motion.button>
//             ))}
//           </div>

//           {/* Tab content - SIMPLIFIED: Only title and description */}
//           <div className="max-w-4xl mx-auto">
//             <AnimatePresence mode="wait">
//               {features.map((feature) => {
//                 if (feature.id !== activeTab) return null;
                
//                 const descriptionWords = feature.description.split(" ");
//                 const currentWordIndex = featureCurrentWords[feature.id];
                
//                 return (
//                   <motion.div
//                     key={feature.id}
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: -20 }}
//                     transition={{ duration: 0.3 }}
//                     className="space-y-8"
//                   >
//                     {/* Single title only - no duplicate */}
//                     <div className="text-center space-y-4">
//                       <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
//                         {feature.title}
//                       </h3>
                      
//                       {/* Word-by-word description animation */}
//                       <div className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto min-h-[120px]">
//                         <p>
//                           {descriptionWords.slice(0, currentWordIndex + 1).map((word, index) => (
//                             <motion.span
//                               key={index}
//                               initial={{ opacity: 0 }}
//                               animate={{ opacity: 1 }}
//                               transition={{ duration: 0.08 }}
//                               className="inline-block mr-1"
//                             >
//                               {word}
//                             </motion.span>
//                           ))}
                          
//                           {/* Blinking cursor during animation */}
//                           {isAnimating && currentWordIndex < descriptionWords.length - 1 && (
//                             <motion.span
//                               animate={{ opacity: [1, 0, 1] }}
//                               transition={{ repeat: Infinity, duration: 0.8 }}
//                               className="inline-block w-[2px] h-5 bg-[#244082] ml-1 align-middle"
//                             />
//                           )}
//                         </p>
//                       </div>
//                     </div>        
//                   </motion.div>
//                 );
//               })}
//             </AnimatePresence>
//           </div>
//         </div>
//       </section>

//         {/* ========== SERVICES SECTION (UPDATED GRID LAYOUT) ========== */}
//       <section className="py-12 sm:py-16 md:py-20" style={{ backgroundColor: '#213b52' }}>
//         <div className="container mx-auto px-4 sm:px-6 md:px-8">
//           <div className="text-center mb-8 sm:mb-12 md:mb-16">
//             <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3">Our Services</h2>
//             <div className="w-20 h-1 bg-[#fdc134] mx-auto rounded-full"></div>
//             <p className="text-white/80 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mt-4">
//               Comprehensive digital solutions tailored to your business needs
//             </p>
//           </div>

//           {/* EXACT 9 CARDS WITH VERTICAL WHITE LINE */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
//             {services.map((service, index) => {
//               const descriptionWords = service.description.split(" ");
//               const currentWords = serviceWords[index];
              
//               return (
//                 <div 
//                   key={service.id}
//                   className="bg-white/5 rounded-xl overflow-hidden flex"
//                 >
//                   {/* LEFT SIDE - Icon & Title */}
//                   <div className="w-1/3 p-4 flex flex-col items-center justify-center border-r border-white/20">
//                     <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-3" 
//                       style={{ backgroundColor: 'rgba(253, 193, 52, 0.1)' }}>
//                       <div className="w-6 h-6 rounded-full" style={{ backgroundColor: '#fdc134' }}></div>
//                     </div>
//                     <h3 className="text-white font-bold text-lg text-center">{service.title}</h3>
//                   </div>

//                   {/* RIGHT SIDE - Description & Points */}
//                   <div className="w-2/3 p-4">
//                     {/* Description with word animation */}
//                     <div className="text-white/80 text-sm mb-3 min-h-[40px]">
//                       <p>
//                         {descriptionWords.slice(0, currentWords + 1).map((word, idx) => (
//                           <span key={idx} className="inline-block mr-1">{word}</span>
//                         ))}
//                         {currentWords < descriptionWords.length - 1 && (
//                           <span className="inline-block w-[1px] h-4 bg-[#fdc134] ml-1 animate-pulse"></span>
//                         )}
//                       </p>
//                     </div>

//                     {/* Points */}
//                     <div className="space-y-1">
//                       {service.points.map((point, idx) => (
//                         <div key={idx} className="text-white/60 text-xs">
//                           • {point}
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>

//       </section>

//        <section 
//       className={`min-h-screen transition-colors duration-500 ${
//         hasScrolled ? 'bg-[#fdc134]' : 'bg-black'
//       }`}
//     >
//       <div className="container mx-auto px-4 py-16 sm:py-20">
//         {/* Section Title - ALWAYS WHITE TEXT */}
//         <div className="text-center mb-10 sm:mb-16">
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
//           >
//             Our Features
//           </motion.h2>
          
//           {/* Paragraph below title - ALWAYS WHITE TEXT */}
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2 }}
//             className="text-white/80 text-lg sm:text-xl max-w-2xl mx-auto px-4"
//           >
//             Discover our comprehensive suite of digital solutions designed to elevate your business
//           </motion.p>
//         </div>

//         {/* 12 Cards Grid - 3 COLUMNS, 4 ROWS */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
//           {icons.map((item) => {
//             const Icon = item.icon;
//             return (
//               <motion.div
//                 key={item.id}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: item.id * 0.05 }}
//                 className="flex items-center p-4 sm:p-5 bg-white/5 rounded-xl hover:bg-white/10 transition-colors"
//               >
//                 {/* Icon - Changes color based on scroll */}
//                 <div className="mr-3 sm:mr-4 flex-shrink-0">
//                   <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center ${
//                     hasScrolled ? 'bg-white/20' : 'bg-white/10'
//                   }`}>
//                     <Icon 
//                       size={20}
//                       className={`sm:w-6 sm:h-6 ${hasScrolled ? 'text-[#244082]' : 'text-[#fdc134]'}`}
//                     />
//                   </div>
//                 </div>

//                 {/* Title - ALWAYS WHITE TEXT */}
//                 <span className="text-white font-semibold text-base sm:text-lg">
//                   {item.title}
//                 </span>
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </section>

//     <section className="py-16 sm:py-20 md:py-24 bg-white">
//       <div className="container mx-auto px-4 sm:px-6 md:px-8">
//         <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
//           {/* LEFT SIDE - Heading */}
//           <div className="lg:w-1/3">
//             <div className="sticky top-24">
//               <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//                 FAQS & INFORMATION
//               </h2>
//               <div className="w-16 h-1 bg-[#fdc134] rounded-full mb-6"></div>
//               <p className="text-gray-600 text-lg mb-6">
//                 Find answers to common questions about our services and industry practices
//               </p>
//               <button className="px-6 py-3 bg-[#244082] text-white font-semibold rounded-lg hover:bg-[#1d3669] transition">
//                 View all FAQs
//               </button>
//             </div>
//           </div>

//           {/* RIGHT SIDE - 4 FAQ Items */}
//           <div className="lg:w-2/3">
//             {faqs.map((faq, index) => (
//               <div 
//                 key={faq.id}
//                 className={`border-b border-gray-200 py-6 sm:py-8 ${index === 0 ? 'border-t' : ''}`}
//               >
//                 <div 
//                   className="flex items-start cursor-pointer group"
//                   onClick={() => setOpenIndex(openIndex === faq.id ? null : faq.id)}
//                 >
//                   {/* Number */}
//                   <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-[#244082] text-white font-bold text-lg sm:text-xl rounded-lg mr-4 flex-shrink-0">
//                     {faq.number}
//                   </div>

//                   {/* Content */}
//                   <div className="flex-1">
//                     <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
//                       <span className="text-gray-500 text-sm font-medium mb-1 sm:mb-0">
//                         {faq.date}
//                       </span>
//                       <div className={`transform transition-transform ${openIndex === faq.id ? 'rotate-90' : ''}`}>
//                         <ChevronRight className="text-[#244082] w-5 h-5" />
//                       </div>
//                     </div>
                    
//                     <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 group-hover:text-[#244082] transition">
//                       {faq.question}
//                     </h3>

//                     {/* Answer - Hidden by default, shows on click */}
//                     {openIndex === faq.id && (
//                       <div className="mt-3 pl-0 sm:pl-14">
//                         <p className="text-gray-600">
//                           {faq.answer}
//                         </p>
//                         <button className="mt-3 text-[#244082] font-semibold flex items-center hover:text-[#1d3669] transition">
//                           Read detailed answer
//                           <ChevronRight className="ml-1 w-4 h-4" />
//                         </button>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//     <section className="py-16 bg-black text-white text-center">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
//         <p className="text-gray-300 mb-6">Transform your digital presence today</p>
//         <div className="space-x-4">
//           <button className="px-6 py-3 bg-[#fdc134] text-black font-semibold rounded">
//             Contact Us
//           </button>
//           <button className="px-6 py-3 border border-white text-white font-semibold rounded">
//             Learn More
//           </button>
//         </div>
//       </div>
//     </section>
//     </main>


//   );
// }

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



'use client'

import { motion } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'
import { 
  ArrowRight, 
  Sparkles, 
  Shield, 
  Zap, 
  Code, 
  Cloud, 
  Database, 
  Cpu, 
  Settings, 
  Building2, 
  CreditCard, 
  Heart, 
  Car, 
  ShoppingBag, 
  Factory, 
  Users, 
  Globe, 
  Award, 
  TrendingUp,
  MessageSquare,
  Calendar,
  CheckCircle,
  ChevronRight,
  Star,
  Target,
  BarChart3
} from 'lucide-react'

// GSAP imports
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger)

// Typing animation function
const animateTextTyping = (element: HTMLElement | null, duration: number = 1) => {
  if (!element) return
  
  const text = element.textContent || ''
  element.textContent = ''
  
  let index = 0
  const interval = (duration * 1000) / text.length
  
  const type = () => {
    if (index < text.length) {
      element.textContent += text[index]
      index++
      setTimeout(type, interval)
    }
  }
  
  type()
}

export default function HomePage() {
  const mainRef = useRef<HTMLDivElement>(null)

  const [stats] = useState([
    { value: 500, label: 'Happy Clients', suffix: '+', color: 'text-blue-500', icon: <Users /> },
    { value: 25, label: 'Countries Served', suffix: '+', color: 'text-green-500', icon: <Globe /> },
    { value: 98, label: 'Client Retention', suffix: '%', color: 'text-yellow-500', icon: <Award /> },
    { value: 47, label: 'Avg. ROI Increase', suffix: '%', color: 'text-cyan-500', icon: <TrendingUp /> },
  ])

  // GSAP Animations with Typing Effect
  useEffect(() => {
    // Hero heading typing animation
    const heroH1 = document.querySelector('[data-hero-h1]') as HTMLElement | null
    if (heroH1) {
      gsap.set(heroH1, { opacity: 0 })
      gsap.to(heroH1, {
        opacity: 1,
        duration: 0.3,
        delay: 0.2,
        onStart: () => {
          animateTextTyping(heroH1, 1.5)
        }
      })
    }

    // Services heading typing animation on scroll
    const servicesTrigger = document.querySelector('[data-services-section]')
    if (servicesTrigger) {
      const servicesH2 = document.querySelector('[data-services-h2]') as HTMLElement | null
      const servicesP = document.querySelector('[data-services-p]') as HTMLElement | null
      
      if (servicesH2) {
        gsap.set(servicesH2, { opacity: 0 })
      }
      
      gsap.to(servicesH2, {
        scrollTrigger: {
          trigger: servicesTrigger,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
          onEnter: () => {
            animateTextTyping(servicesH2, 1.2)
          }
        },
        opacity: 1,
        duration: 0.3
      })

      if (servicesP) {
        gsap.from(servicesP, {
          scrollTrigger: {
            trigger: servicesTrigger,
            start: 'top 75%',
          },
          opacity: 0,
          y: 20,
          duration: 0.6,
          delay: 1.3
        })
      }
    }

    // Industries heading typing animation on scroll
    const industriesTrigger = document.querySelector('[data-industries-section]')
    if (industriesTrigger) {
      const industriesH2 = document.querySelector('[data-industries-h2]') as HTMLElement | null
      const industriesP = document.querySelector('[data-industries-p]') as HTMLElement | null
      
      if (industriesH2) {
        gsap.set(industriesH2, { opacity: 0 })
      }
      
      gsap.to(industriesH2, {
        scrollTrigger: {
          trigger: industriesTrigger,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
          onEnter: () => {
            animateTextTyping(industriesH2, 1.2)
          }
        },
        opacity: 1,
        duration: 0.3
      })

      if (industriesP) {
        gsap.from(industriesP, {
          scrollTrigger: {
            trigger: industriesTrigger,
            start: 'top 75%',
          },
          opacity: 0,
          y: 20,
          duration: 0.6,
          delay: 1.3
        })
      }
    }

    // Testimonials heading typing animation on scroll
    const testimonialsTrigger = document.querySelector('[data-testimonials-section]')
    if (testimonialsTrigger) {
      const testimonialsH2 = document.querySelector('[data-testimonials-h2]') as HTMLElement | null
      const testimonialsP = document.querySelector('[data-testimonials-p]') as HTMLElement | null
      
      if (testimonialsH2) {
        gsap.set(testimonialsH2, { opacity: 0 })
      }
      
      gsap.to(testimonialsH2, {
        scrollTrigger: {
          trigger: testimonialsTrigger,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
          onEnter: () => {
            animateTextTyping(testimonialsH2, 1.2)
          }
        },
        opacity: 1,
        duration: 0.3
      })

      if (testimonialsP) {
        gsap.from(testimonialsP, {
          scrollTrigger: {
            trigger: testimonialsTrigger,
            start: 'top 75%',
          },
          opacity: 0,
          y: 20,
          duration: 0.6,
          delay: 1.3
        })
      }
    }

    // CTA heading typing animation on scroll
    const ctaTrigger = document.querySelector('[data-cta-section]')
    if (ctaTrigger) {
      const ctaH2 = document.querySelector('[data-cta-h2]') as HTMLElement | null
      const ctaP = document.querySelector('[data-cta-p]') as HTMLElement | null
      
      if (ctaH2) {
        gsap.set(ctaH2, { opacity: 0 })
      }
      
      gsap.to(ctaH2, {
        scrollTrigger: {
          trigger: ctaTrigger,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
          onEnter: () => {
            animateTextTyping(ctaH2, 1.2)
          }
        },
        opacity: 1,
        duration: 0.3
      })

      if (ctaP) {
        gsap.from(ctaP, {
          scrollTrigger: {
            trigger: ctaTrigger,
            start: 'top 75%',
          },
          opacity: 0,
          y: 20,
          duration: 0.6,
          delay: 1.3
        })
      }
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  const services = [
    {
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
      title: "Custom Software Development",
      description: "Tailor-made applications built with cutting-edge frameworks and best practices.",
      features: ["Web & Mobile Apps", "Enterprise Solutions", "API Development"],
    },
    {
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
      title: "Cloud & DevOps",
      description: "Scalable cloud infrastructure with automated CI/CD pipelines and monitoring.",
      features: ["AWS / Azure / GCP", "Kubernetes", "24/7 Monitoring"],
    },
    {
      image: "https://images.unsplash.com/photo-1563986768609-f4ee4b97e88d?auto=format&fit=crop&w=800&q=80",
      title: "Cybersecurity",
      description: "End‑to‑end security solutions to protect your applications, data and infrastructure.",
      features: ["Penetration Testing", "SOC Implementation", "Compliance Ready"],
    },
    {
      image: "https://images.unsplash.com/photo-1516534775068-bb6348260c8d?auto=format&fit=crop&w=800&q=80",
      title: "Data Analytics & AI",
      description: "Turn raw data into predictive, real‑time business intelligence with AI.",
      features: ["Predictive Analytics", "Machine Learning Models", "BI Dashboards"],
    },
    {
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
      title: "IT Consulting",
      description: "Strategic technology advisory to modernize and scale your digital backbone.",
      features: ["Digital Roadmaps", "Architecture Review", "Tech Stack Audit"],
    },
    {
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
      title: "Managed Services",
      description: "Proactive monitoring and support to keep your systems always‑on.",
      features: ["24/7 Monitoring", "Incident Response", "Regular Updates"],
    }
  ]

  const industries = [
    { icon: <Building2 />, name: "Enterprise", count: 150, color: "bg-blue-500" },
    { icon: <CreditCard />, name: "Finance & Banking", count: 89, color: "bg-green-500" },
    { icon: <Heart />, name: "Healthcare", count: 67, color: "bg-red-500" },
    { icon: <Car />, name: "Automotive", count: 42, color: "bg-orange-500" },
    { icon: <ShoppingBag />, name: "Retail & E-commerce", count: 134, color: "bg-purple-500" },
    { icon: <Factory />, name: "Manufacturing", count: 76, color: "bg-cyan-500" },
  ]

  const testimonials = [
    {
      name: "Michael Rodriguez",
      role: "CTO at TechCorp",
      content: "Their data-driven approach transformed our analytics pipeline. Efficiency increased by 65%.",
      rating: 5,
    },
    {
      name: "Sarah Chen",
      role: "Director at HealthPlus",
      content: "The cybersecurity implementation was seamless. Our compliance audit passed with flying colors.",
      rating: 5,
    },
    {
      name: "David Park",
      role: "VP Operations at RetailPro",
      content: "Cloud migration completed 2 weeks ahead of schedule with zero downtime. Outstanding work.",
      rating: 5,
    }
  ]

  return (
    <>
      <main ref={mainRef} className="min-h-screen bg-gradient-to-b from-gray-950 to-black text-white">
        
        {/* ========== HERO SECTION ========== */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 px-4">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-500/5" />
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 6 }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          />
          <motion.div 
            animate={{ y: [0, 20, 0] }}
            transition={{ repeat: Infinity, duration: 7, delay: 0.5 }}
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
          />
          
          <div className="container mx-auto max-w-7xl relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              
              {/* Left Content */}
              <div>
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 rounded-full px-4 py-2 mb-8"
                >
                  <Sparkles className="w-4 h-4" />
                  <span className="text-sm font-medium">Trusted by 500+ Global Companies</span>
                </motion.div>

                <h1 data-hero-h1 className="text-5xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  <span className="block text-white">Welcome to</span>
                  <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent">
                    Globo Persona
                  </span>
                </h1>

                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed"
                >
                  We engineer <span className="text-cyan-400 font-semibold">data-driven solutions</span> that scale exponentially. 
                  From concept to deployment, we deliver excellence with cutting-edge technology.
                </motion.p>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex flex-col sm:flex-row gap-4 mb-12"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group bg-gradient-to-r from-blue-500 to-cyan-500 text-black font-semibold px-8 py-4 rounded-xl text-lg flex items-center justify-center gap-2 hover:shadow-xl hover:shadow-blue-500/25 transition-all"
                  >
                    Start Free Consultation
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group border border-gray-700 hover:border-cyan-500 bg-gray-900/50 backdrop-blur-sm px-8 py-4 rounded-xl text-lg flex items-center justify-center gap-2 hover:bg-gray-800/50 transition-all"
                  >
                    <Zap className="w-5 h-5" />
                    View Case Studies
                  </motion.button>
                </motion.div>

                {/* Trust Indicators */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex flex-wrap items-center gap-8"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex -space-x-3">
                      {[1,2,3,4].map((i) => (
                        <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-cyan-500 border-2 border-gray-900" />
                      ))}
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Rated 4.9/5 by</p>
                      <p className="font-semibold">200+ Industry Leaders</p>
                    </div>
                  </div>
                  
                  <div className="hidden md:flex items-center gap-4">
                    <div className="flex gap-1">
                      {[1,2,3,4,5].map((i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                      ))}
                    </div>
                    <span className="text-gray-300">On Clutch</span>
                  </div>
                </motion.div>
              </div>

              {/* Right Visual */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative"
              >
                <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-2">
                  {/* Dashboard Mockup */}
                  <div className="bg-gray-900 rounded-xl p-6">
                    <div className="flex justify-between items-center mb-6">
                      <div>
                        <h3 className="font-semibold text-lg">Analytics Dashboard</h3>
                        <p className="text-gray-400 text-sm">Real-time performance metrics</p>
                      </div>
                      <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                        Live
                      </span>
                    </div>
                    
                    {/* Chart */}
                    <div className="h-48 bg-gradient-to-br from-blue-900/30 to-cyan-900/30 rounded-lg mb-6 relative overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                            +47%
                          </div>
                          <div className="text-cyan-400 font-medium">Revenue Growth</div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Stats Grid */}
                    <div className="grid grid-cols-3 gap-4">
                      {[
                        { label: 'Active Users', value: '12.5K', change: '+24%' },
                        { label: 'Monthly Revenue', value: '$2.1M', change: '+47%' },
                        { label: 'System Uptime', value: '99.9%', change: '+0.5%' }
                      ].map((stat, i) => (
                        <div key={i} className="bg-gray-800/50 rounded-lg p-4">
                          <div className="text-2xl font-bold">{stat.value}</div>
                          <div className="text-gray-400 text-sm">{stat.label}</div>
                          <div className="text-green-400 text-sm font-medium mt-1">{stat.change}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Floating Elements */}
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 3 }}
                    className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-black px-4 py-2 rounded-lg font-bold shadow-xl"
                  >
                    ⚡ Real-time
                  </motion.div>
                  
                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 3, delay: 1 }}
                    className="absolute -bottom-4 -left-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg font-bold shadow-xl"
                  >
                    🔒 Secure
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
          >
            <div className="text-gray-500 text-sm flex flex-col items-center">
              <span>Scroll to explore</span>
              <div className="w-6 h-10 border-2 border-gray-700 rounded-full mt-2 flex justify-center">
                <div className="w-1 h-3 bg-cyan-500 rounded-full mt-2" />
              </div>
            </div>
          </motion.div>
        </section>

        {/* ========== SERVICES SECTION ========== */}
        <section className="py-24 px-4">
          <div className="container mx-auto max-w-7xl">
            {/* Section Header */}
            <div data-services-section className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block bg-cyan-500/10 text-cyan-400 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                OUR EXPERTISE
              </span>
              <h2 data-services-h2 className="text-4xl md:text-5xl font-bold mb-6">
                Comprehensive <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Digital Solutions</span>
              </h2>
              <p data-services-p className="text-xl text-gray-400">
                We deliver end-to-end technology services that drive innovation and growth
              </p>
            </div>

            {/* Services Grid – 3D Image Flip Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="service-card-3d"
                >
                  <div className="service-card-inner shadow-2xl shadow-cyan-500/10 border border-cyan-500/10 bg-gray-900/40">
                    
                    {/* Front – Image + title */}
                    <div
                      className="service-card-front"
                      style={{ backgroundImage: `url(${service.image})` }}
                    >
                      <div className="service-card-front-overlay">
                        <div className="service-title-front">
                          {service.title}
                        </div>
                      </div>
                    </div>

                    {/* Back – Details */}
                    <div className="service-card-back">
                      <h3 className="service-back-title">
                        {service.title}
                      </h3>
                      <p className="service-back-desc">
                        {service.description}
                      </p>
                      <ul className="service-back-features">
                        {service.features.map((feature, i) => (
                          <li key={i}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mt-16"
            >
              <button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-black font-semibold px-10 py-4 rounded-xl text-lg transition-all hover:shadow-xl hover:shadow-cyan-500/25">
                View All Services
              </button>
            </motion.div>
          </div>
        </section>

        {/* ========== INDUSTRIES SECTION ========== */}
        <section className="py-24 px-4 bg-gradient-to-b from-gray-900/50 to-black">
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              
              {/* Left Content */}
              <div data-industries-section>
                <span className="inline-block bg-blue-500/10 text-blue-400 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  INDUSTRY EXPERTISE
                </span>
                <h2 data-industries-h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Serving <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Diverse</span> Industries
                </h2>
                <p data-industries-p className="text-xl text-gray-400 mb-8">
                  We understand the unique challenges of each sector and deliver tailored solutions that drive results.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mr-4">
                      <Target className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Industry-Specific Solutions</h4>
                      <p className="text-gray-400">Customized approaches for each vertical</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center mr-4">
                      <Shield className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Compliance Ready</h4>
                      <p className="text-gray-400">Meeting industry regulations and standards</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mr-4">
                      <BarChart3 className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Performance Optimized</h4>
                      <p className="text-gray-400">Maximum efficiency and scalability</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {industries.map((industry, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -10 }}
                  >
                    <div className="group bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-blue-500/50 rounded-xl p-6 text-center transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10">
                      <div className={`w-16 h-16 rounded-2xl ${industry.color.replace('bg-', 'bg-')}/10 group-hover:bg-opacity-20 flex items-center justify-center mx-auto mb-4 transition-all`}>
                        <div className={`${industry.color.replace('bg-', 'text-')} text-2xl`}>
                          {industry.icon}
                        </div>
                      </div>
                      
                      <h3 className="text-lg font-semibold mb-2">{industry.name}</h3>
                      
                      <div className="text-3xl font-bold mb-2">{industry.count}+</div>
                      
                      <p className="text-sm text-gray-400 mb-4">Projects Delivered</p>
                      
                      {/* Progress Bar */}
                      <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${Math.min(100, (industry.count / 150) * 100)}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.5 }}
                          className={`h-full ${industry.color} rounded-full`}
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ========== STATS SECTION ========== */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center group"
                >
                  <div className="w-20 h-20 rounded-2xl bg-gray-900/50 border border-gray-800 group-hover:border-cyan-500/50 flex items-center justify-center mx-auto mb-6 transition-all duration-300">
                    <div className={`${stat.color} text-3xl`}>
                      {stat.icon}
                    </div>
                  </div>
                  
                  <div className="text-5xl font-bold mb-2">
                    {stat.value}
                    <span className={stat.color}>{stat.suffix}</span>
                  </div>
                  
                  <p className="text-gray-400 text-lg">{stat.label}</p>
                  
                  <div className="w-0 group-hover:w-16 h-0.5 bg-gradient-to-r from-transparent via-cyan-500 to-transparent mx-auto mt-4 transition-all duration-500" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ========== TESTIMONIALS SECTION ========== */}
        <section className="py-24 px-4 bg-gradient-to-b from-black to-gray-950">
  <div className="container mx-auto max-w-7xl">
    <div
      data-testimonials-section
      className="text-center max-w-3xl mx-auto mb-16"
    >
      <span className="inline-block bg-purple-500/10 text-purple-400 px-4 py-2 rounded-full text-sm font-semibold mb-4">
        CLIENT SUCCESS
      </span>
      <h2
        data-testimonials-h2
        className="text-4xl md:text-5xl font-bold mb-6"
      >
        Trusted by{" "}
        <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Industry Leaders
        </span>
      </h2>
      <p data-testimonials-p className="text-xl text-gray-400">
        See what our clients say about working with us
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-8">
      {testimonials.map((testimonial, index) => (
        <motion.div
    key={index}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    animate={{ y: [0, -8, 0] }}
    transition={{
      // entrance delay
      delay: index * 0.12,
      // total duration for float loop
      duration: 4,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    }}
    className="relative"
  >

          {/* Subtle glow behind card */}
          <div className="pointer-events-none absolute -inset-0.5 rounded-3xl bg-gradient-to-br from-purple-500/25 via-fuchsia-500/10 to-cyan-500/25 opacity-70 blur-2xl" />

          {/* Floating Card */}
          <div className="relative h-full bg-gradient-to-br from-white/8 via-white/5 to-white/10 border border-white/15 rounded-3xl px-6 py-7 backdrop-blur-xl shadow-[0_22px_80px_rgba(15,23,42,0.9)] flex flex-col transition-all duration-300 hover:-translate-y-3 hover:shadow-[0_26px_100px_rgba(168,85,247,0.65)] hover:border-purple-400/50">
            {/* Rating row */}
            <div className="flex items-center justify-between mb-5">
              <div className="flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 md:w-5 md:h-5 text-yellow-400 drop-shadow-[0_0_10px_rgba(250,204,21,0.8)]"
                    fill="currentColor"
                  />
                ))}
              </div>
              <span className="text-[11px] uppercase tracking-wide px-2.5 py-1 rounded-full bg-emerald-400/10 text-emerald-200 border border-emerald-400/30">
                Top Rated
              </span>
            </div>

            {/* Quote */}
            <p className="text-gray-100 text-sm md:text-base lg:text-lg leading-relaxed mb-6">
              <span className="text-purple-300 text-2xl align-top mr-1">“</span>
              {testimonial.content}
              <span className="text-purple-300 text-2xl align-bottom ml-1">”</span>
            </p>

            {/* Bottom – author */}
            <div className="mt-auto flex items-center gap-4">
              <div className="relative">
                <div className="w-11 h-11 md:w-12 md:h-12 rounded-2xl bg-gradient-to-br from-purple-400 via-pink-500 to-blue-500 shadow-[0_0_20px_rgba(147,51,234,0.7)]" />
                <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-gray-900 border border-emerald-400 flex items-center justify-center text-[10px] text-emerald-400">
                  ★
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-sm md:text-base text-gray-50">
                  {testimonial.name}
                </h4>
                <p className="text-xs md:text-sm text-gray-400">
                  {testimonial.role}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>


        {/* ========== CTA SECTION ========== */}
        <section className="py-24 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-500/5" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-96 bg-cyan-500/10 rounded-full blur-3xl" />
          
          <div className="container mx-auto max-w-4xl relative z-10">
            <div data-cta-section className="text-center mb-12">
              <span className="inline-block bg-gradient-to-r from-blue-500/10 to-cyan-500/10 text-cyan-400 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                GET STARTED
              </span>
              <h2 data-cta-h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Transform</span> Your Business?
              </h2>
              <p data-cta-p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Schedule a free consultation with our experts and discover how we can drive your digital success.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 md:p-12 shadow-2xl">
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="space-y-3">
                    <div className="flex items-center text-gray-400">
                      <MessageSquare className="w-5 h-5 mr-2" />
                      <span>Quick Response</span>
                    </div>
                    <div className="font-semibold">Within 2 Hours</div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center text-gray-400">
                      <Calendar className="w-5 h-5 mr-2" />
                      <span>Flexible Scheduling</span>
                    </div>
                    <div className="font-semibold">Online or On-site</div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center text-gray-400">
                      <div className="w-5 h-5 rounded-full bg-cyan-500 mr-2" />
                      <span>No Commitment</span>
                    </div>
                    <div className="font-semibold">Free First Consultation</div>
                  </div>
                </div>

                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="bg-gray-900 border border-gray-700 hover:border-cyan-500 focus:border-cyan-500 rounded-lg px-4 py-3 focus:outline-none transition-colors text-white placeholder-gray-500"
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="bg-gray-900 border border-gray-700 hover:border-cyan-500 focus:border-cyan-500 rounded-lg px-4 py-3 focus:outline-none transition-colors text-white placeholder-gray-500"
                    />
                    <input
                      type="text"
                      placeholder="Company Name"
                      className="bg-gray-900 border border-gray-700 hover:border-cyan-500 focus:border-cyan-500 rounded-lg px-4 py-3 focus:outline-none transition-colors text-white placeholder-gray-500"
                    />
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="bg-gray-900 border border-gray-700 hover:border-cyan-500 focus:border-cyan-500 rounded-lg px-4 py-3 focus:outline-none transition-colors text-white placeholder-gray-500"
                    />
                  </div>
                  
                  <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
                    <label className="text-gray-400 text-sm mb-2 block">
                      What services are you interested in?
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {['Software Development', 'Cloud Services', 'Cybersecurity', 'Data Analytics', 'IT Consulting'].map((service) => (
                        <button
                          key={service}
                          type="button"
                          className="px-4 py-2 rounded-full border border-gray-700 text-gray-400 hover:border-cyan-500 hover:text-cyan-400 transition-all text-sm"
                        >
                          {service}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 items-center justify-between pt-6">
                    <div className="text-gray-400 text-sm">
                      By submitting, you agree to our Privacy Policy
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-black font-semibold px-10 py-4 rounded-xl text-lg flex items-center gap-2 hover:shadow-xl hover:shadow-cyan-500/25 transition-all"
                    >
                      Schedule Free Consultation
                      <ArrowRight className="w-5 h-5" />
                    </motion.button>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Local styles only for this page */}
      <style jsx global>{`
        .service-card-3d {
          perspective: 1200px;
          height: 340px;
        }
        .service-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
          transition: transform 0.6s cubic-bezier(0.22, 0.61, 0.36, 1);
        }
        .service-card-3d:hover .service-card-inner {
          transform: rotateY(180deg);
        }
        .service-card-front,
        .service-card-back {
          position: absolute;
          inset: 0;
          backface-visibility: hidden;
          border-radius: 1.5rem;
          overflow: hidden;
        }
        .service-card-front {
          background-size: cover;
          background-position: center;
          display: flex;
          align-items: flex-end;
          padding: 1.5rem;
        }
        .service-card-front-overlay {
          width: 100%;
          border-radius: 1.25rem;
          background: linear-gradient(
            to top,
            rgba(15, 23, 42, 0.9),
            rgba(15, 23, 42, 0)
          );
          padding: 1rem 1.25rem;
        }
        .service-title-front {
          color: #e5e7eb;
          font-size: 1.1rem;
          font-weight: 700;
        }
        .service-card-back {
          transform: rotateY(180deg);
          background: radial-gradient(
              circle at top,
              rgba(56, 189, 248, 0.18),
              transparent
            ),
            rgba(15, 23, 42, 0.96);
          border: 1px solid rgba(148, 163, 184, 0.4);
          padding: 1.75rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .service-back-title {
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 0.75rem;
          color: #e5e7eb;
        }
        .service-back-desc {
          font-size: 0.95rem;
          color: #cbd5e1;
          margin-bottom: 1rem;
        }
        .service-back-features {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .service-back-features li {
          font-size: 0.9rem;
          color: #94a3b8;
          display: flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.25rem 0;
        }
      `}</style>
    </>
  )
}



// app/page.tsx - FULL 3D EXPERIENCE (FIXED TYPESCRIPT)
// 'use client'

// import { useState, useEffect, useRef } from 'react'
// import { motion, useScroll, useTransform } from 'framer-motion'
// import { Canvas, useFrame, useThree } from '@react-three/fiber'
// import { OrbitControls, Float, Stars, Text3D, Center, Environment } from '@react-three/drei'
// import * as THREE from 'three'

// // ========== 3D FLOATING ICONS ==========
// function FloatingIcons() {
//   const meshRef = useRef<THREE.Group>(null)
  
//   useFrame((state) => {
//     if (meshRef.current) {
//       meshRef.current.rotation.y = state.clock.elapsedTime * 0.2
//       meshRef.current.children.forEach((child, i) => {
//         child.position.y = Math.sin(state.clock.elapsedTime * 0.5 + i) * 0.3
//       })
//     }
//   })

//   const shapes = [
//     { geometry: new THREE.BoxGeometry(0.8, 0.8, 0.8), color: '#00D1FF', position: [2, 0, 0] as [number, number, number] },
//     { geometry: new THREE.IcosahedronGeometry(0.6, 0), color: '#7B61FF', position: [0, 0, 2] as [number, number, number] },
//     { geometry: new THREE.OctahedronGeometry(0.7, 0), color: '#FF4D94', position: [-2, 0, 0] as [number, number, number] },
//     { geometry: new THREE.TorusKnotGeometry(0.5, 0.2, 100, 16), color: '#00E676', position: [0, 0, -2] as [number, number, number] },
//   ]

//   return (
//     <group ref={meshRef}>
//       {shapes.map((shape, i) => (
//         <Float key={i} speed={2} rotationIntensity={1} floatIntensity={2}>
//           <mesh geometry={shape.geometry} position={shape.position}>
//             <meshStandardMaterial
//               color={shape.color}
//               metalness={0.9}
//               roughness={0.1}
//               emissive={shape.color}
//               emissiveIntensity={0.3}
//             />
//           </mesh>
//         </Float>
//       ))}
//     </group>
//   )
// }

// // ========== 3D PARTICLES ==========
// function ParticleField() {
//   const { mouse } = useThree()
//   const particlesRef = useRef<THREE.Points>(null)
//   const count = 1000

//   const positions = new Float32Array(count * 3)
//   const colors = new Float32Array(count * 3)

//   for (let i = 0; i < count; i++) {
//     positions[i * 3] = (Math.random() - 0.5) * 20
//     positions[i * 3 + 1] = (Math.random() - 0.5) * 20
//     positions[i * 3 + 2] = (Math.random() - 0.5) * 20

//     colors[i * 3] = Math.random() * 0.5 + 0.5
//     colors[i * 3 + 1] = Math.random() * 0.5 + 0.5
//     colors[i * 3 + 2] = 1
//   }

//   useFrame((state) => {
//     if (particlesRef.current) {
//       particlesRef.current.rotation.x = state.clock.elapsedTime * 0.05
//       particlesRef.current.rotation.y = state.clock.elapsedTime * 0.05
      
//       particlesRef.current.position.x += (mouse.x * 1 - particlesRef.current.position.x) * 0.01
//       particlesRef.current.position.y += (mouse.y * 1 - particlesRef.current.position.y) * 0.01
//     }
//   })

//   return (
//     <points ref={particlesRef}>
//       <bufferGeometry>
//         <bufferAttribute
//           attach="attributes-position"
//           count={count}
//           array={positions}
//           itemSize={3}
//         />
//         <bufferAttribute
//           attach="attributes-color"
//           count={count}
//           array={colors}
//           itemSize={3}
//         />
//       </bufferGeometry>
//       <pointsMaterial
//         size={0.05}
//         vertexColors
//         transparent
//         opacity={0.6}
//         sizeAttenuation
//       />
//     </points>
//   )
// }

// // ========== 3D SCENE ==========
// function ThreeDScene() {
//   return (
//     <Canvas shadows camera={{ position: [0, 0, 8], fov: 50 }}>
//       <ambientLight intensity={0.5} />
//       <pointLight position={[10, 10, 10]} intensity={1} color="#00D1FF" />
//       <pointLight position={[-10, -10, -10]} intensity={0.5} color="#7B61FF" />
      
//       <FloatingIcons />
//       <ParticleField />
//       <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />
      
//       <Environment preset="city" />
//       <OrbitControls 
//         enableZoom={false}
//         enablePan={false}
//         autoRotate
//         autoRotateSpeed={0.5}
//         maxPolarAngle={Math.PI / 2}
//         minPolarAngle={Math.PI / 2}
//       />
//     </Canvas>
//   )
// }

// // ========== ANIMATED CARD (FIXED) ==========
// interface HolographicCardProps {
//   children: React.ReactNode;
//   delay?: number;
// }

// const HolographicCard: React.FC<HolographicCardProps> = ({ children, delay = 0 }) => {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
//   const cardRef = useRef<HTMLDivElement>(null)

//   const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
//     if (!cardRef.current) return
//     const { left, top, width, height } = cardRef.current.getBoundingClientRect()
//     const x = ((e.clientX - left) / width - 0.5) * 2
//     const y = ((e.clientY - top) / height - 0.5) * -2
//     setMousePosition({ x, y })
//   }

//   return (
//     <motion.div
//       ref={cardRef}
//       initial={{ opacity: 0, y: 50 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       whileHover={{ scale: 1.02 }}
//       transition={{ duration: 0.6, delay }}
//       onMouseMove={handleMouseMove}
//       onMouseLeave={() => setMousePosition({ x: 0, y: 0 })}
//       className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-xl p-8"
//       style={{
//         transform: `perspective(1000px) rotateY(${mousePosition.x * 5}deg) rotateX(${mousePosition.y * 5}deg)`,
//         boxShadow: `
//           0 0 40px rgba(0, 209, 255, 0.1),
//           inset 0 1px 0 rgba(255, 255, 255, 0.1)
//         `,
//       }}
//     >
//       {/* Holographic Effect */}
//       <div 
//         className="absolute inset-0 opacity-30"
//         style={{
//           background: `radial-gradient(circle at ${50 + mousePosition.x * 25}% ${50 + mousePosition.y * 25}%, rgba(0, 209, 255, 0.3) 0%, transparent 50%)`,
//         }}
//       />
      
//       {/* Animated Border */}
//       <div className="absolute inset-0 rounded-3xl p-[1px]">
//         <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent animate-gradient-x" />
//       </div>

//       {children}
//     </motion.div>
//   )
// }

// // ========== MAIN PAGE ==========
// interface ServiceItem {
//   icon: string;
//   title: string;
//   description: string;
//   color: string;
// }

// interface StatItem {
//   value: number;
//   target: number;
//   label: string;
//   suffix: string;
//   color: string;
// }

// export default function HomePage() {
//   const containerRef = useRef<HTMLDivElement>(null)
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"]
//   })
  
//   const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

//   // Animated stats
//   const [stats, setStats] = useState<StatItem[]>([
//     { value: 0, target: 250, label: "Projects Delivered", suffix: "+", color: "#00D1FF" },
//     { value: 0, target: 98, label: "Client Satisfaction", suffix: "%", color: "#7B61FF" },
//     { value: 0, target: 47, label: "Growth Impact", suffix: "%", color: "#FF4D94" },
//     { value: 0, target: 24, label: "Countries", suffix: "+", color: "#00E676" },
//   ])

//   useEffect(() => {
//     const intervals = stats.map((stat, index) => {
//       return setInterval(() => {
//         setStats(prev => prev.map((s, i) => 
//           i === index && s.value < s.target 
//             ? { ...s, value: s.value + Math.ceil(s.target / 100) }
//             : s
//         ))
//       }, 30)
//     })
    
//     return () => intervals.forEach(clearInterval)
//   }, [stats])

//   // Services
//   const services: ServiceItem[] = [
//     { icon: "🤖", title: "AI Solutions", description: "Intelligent automation and machine learning", color: "from-purple-500 to-pink-500" },
//     { icon: "☁️", title: "Cloud Native", description: "Scalable cloud infrastructure", color: "from-cyan-500 to-blue-500" },
//     { icon: "🛡️", title: "Cybersecurity", description: "Enterprise-grade protection", color: "from-green-500 to-emerald-500" },
//     { icon: "🔗", title: "Web3", description: "Blockchain and decentralization", color: "from-orange-500 to-red-500" },
//     { icon: "📊", title: "Data Analytics", description: "Actionable business insights", color: "from-indigo-500 to-purple-500" },
//     { icon: "🚀", title: "Innovation", description: "Future-proof digital transformation", color: "from-pink-500 to-rose-500" },
//   ]

//   return (
//     <div ref={containerRef} className="relative min-h-screen overflow-hidden">
      
//       {/* 3D Background Canvas */}
//       <div className="fixed inset-0 z-0 opacity-30">
//         <ThreeDScene />
//       </div>

//       {/* Gradient Overlay */}
//       <motion.div 
//         className="fixed inset-0 z-0"
//         style={{ y: backgroundY }}
//       >
//         <div className="absolute inset-0 bg-gradient-to-b from-gray-950/80 via-black/80 to-gray-900/80" />
//         <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-transparent" />
//       </motion.div>

//       {/* Content */}
//       <div className="relative z-10">
        
//         {/* HERO SECTION */}
//         <section className="min-h-screen flex items-center justify-center px-4 pt-20">
//           <div className="container mx-auto max-w-7xl">
//             <div className="grid lg:grid-cols-2 gap-16 items-center">
              
//               {/* Left Content */}
//               <motion.div
//                 initial={{ opacity: 0, x: -50 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 1 }}
//                 className="relative"
//               >
//                 <motion.div
//                   animate={{ rotate: 360 }}
//                   transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
//                   className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-white/10 rounded-full px-6 py-3 mb-8 backdrop-blur-sm"
//                 >
//                   <span className="text-sm font-medium">🚀 Next-Gen 3D Experiences</span>
//                   <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
//                 </motion.div>

//                 <h1 className="text-6xl md:text-7xl lg:text-8xl font-black mb-8 leading-none">
//                   <span className="block text-white">IMMERSIVE</span>
//                   <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
//                     3D DIGITAL
//                   </span>
//                   <span className="block text-white">SOLUTIONS</span>
//                 </h1>

//                 <motion.p
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.2 }}
//                   className="text-2xl text-gray-300 mb-12 max-w-2xl leading-relaxed"
//                 >
//                   We create breathtaking digital experiences with cutting-edge 3D technology and interactive design.
//                 </motion.p>

//                 <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.3 }}
//                   className="flex flex-col sm:flex-row gap-6 mb-16"
//                 >
//                   <motion.button
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                     className="group relative bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-bold px-10 py-5 rounded-2xl text-xl flex items-center justify-center gap-3 overflow-hidden"
//                   >
//                     <span className="relative z-10">Launch Project</span>
//                     <span className="relative z-10 group-hover:translate-x-2 transition-transform">→</span>
//                     <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                   </motion.button>
                  
//                   <motion.button
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                     className="group border-2 border-white/20 hover:border-cyan-500/50 bg-black/30 backdrop-blur-sm px-10 py-5 rounded-2xl text-xl flex items-center justify-center gap-3 hover:bg-black/50 transition-all"
//                   >
//                     <span>Explore Demo</span>
//                     <span className="group-hover:text-cyan-400 transition-colors">👁️</span>
//                   </motion.button>
//                 </motion.div>

//                 {/* Animated Stats */}
//                 <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//                   {stats.map((stat, index) => (
//                     <div key={index} className="text-center">
//                       <div className="text-4xl font-bold mb-2" style={{ color: stat.color }}>
//                         {stat.value}
//                         <span className="text-2xl">{stat.suffix}</span>
//                       </div>
//                       <div className="text-gray-400 text-sm">{stat.label}</div>
//                     </div>
//                   ))}
//                 </div>
//               </motion.div>

//               {/* Right 3D Card */}
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.8, delay: 0.2 }}
//                 className="relative"
//               >
//                 <HolographicCard delay={0.3}>
//                   <div className="relative z-10 text-center p-8">
//                     <div className="w-24 h-24 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-3xl flex items-center justify-center mx-auto mb-8">
//                       <span className="text-4xl">🎯</span>
//                     </div>
//                     <h3 className="text-3xl font-bold mb-4">3D Interactive</h3>
//                     <p className="text-gray-400 mb-8">
//                       Move your mouse over this card to see 3D tilt effects
//                     </p>
                    
//                     {/* Interactive Elements */}
//                     <div className="grid grid-cols-3 gap-4">
//                       {['🌐', '⚡', '🎨'].map((emoji, i) => (
//                         <motion.div
//                           key={i}
//                           whileHover={{ scale: 1.1, rotate: 5 }}
//                           className="w-16 h-16 bg-gradient-to-br from-gray-800 to-black rounded-2xl border border-white/10 flex items-center justify-center text-2xl mx-auto"
//                         >
//                           {emoji}
//                         </motion.div>
//                       ))}
//                     </div>
//                   </div>
//                 </HolographicCard>
//               </motion.div>
//             </div>
//           </div>
//         </section>

//         {/* SERVICES SECTION */}
//         <section className="py-32 px-4">
//           <div className="container mx-auto max-w-7xl">
//             <motion.div
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className="text-center max-w-3xl mx-auto mb-20"
//             >
//               <span className="inline-block bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-white/10 px-6 py-3 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm">
//                 OUR 3D SERVICES
//               </span>
//               <h2 className="text-5xl md:text-6xl font-black mb-8">
//                 <span className="text-white">Cutting-Edge </span>
//                 <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
//                   Technology
//                 </span>
//               </h2>
//               <p className="text-2xl text-gray-400">
//                 Experience the future of digital innovation
//               </p>
//             </motion.div>

//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {services.map((service, index) => (
//                 <HolographicCard key={index} delay={index * 0.1}>
//                   <div className="text-center">
//                     <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white text-2xl mb-6 mx-auto`}>
//                       {service.icon}
//                     </div>
                    
//                     <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
//                     <p className="text-gray-400 mb-6">{service.description}</p>
                    
//                     <motion.button
//                       whileHover={{ scale: 1.05 }}
//                       className="group flex items-center justify-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors mx-auto"
//                     >
//                       <span>Learn More</span>
//                       <span className="group-hover:translate-x-2 transition-transform">→</span>
//                     </motion.button>
//                   </div>
//                 </HolographicCard>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* CTA SECTION */}
//         <section className="py-32 px-4">
//           <div className="container mx-auto max-w-4xl">
//             <HolographicCard>
//               <div className="text-center p-12">
//                 <h2 className="text-4xl md:text-5xl font-black mb-8">
//                   <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
//                     Ready for 3D?
//                   </span>
//                 </h2>
//                 <p className="text-2xl text-gray-400 mb-12 max-w-2xl mx-auto">
//                   Let's create an immersive digital experience together.
//                 </p>
                
//                 <motion.button
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-black font-bold px-12 py-6 rounded-2xl text-2xl transition-all group"
//                 >
//                   <span className="flex items-center justify-center gap-3">
//                     Start 3D Journey
//                     <span className="group-hover:translate-x-2 transition-transform">🚀</span>
//                   </span>
//                 </motion.button>
//               </div>
//             </HolographicCard>
//           </div>
//         </section>
//       </div>
//     </div>
//   )
// }



