//  // app/page.tsx
// 'use client'

// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
// import { Badge } from "@/components/ui/badge"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { motion } from "framer-motion"
// import { 
//   ArrowRight, 
//   Rocket, 
//   Users, 
//   Target, 
//   Shield, 
 
//   Globe, 
//   Code, 
//   BarChart, 
//   Cloud, 
//   Lock, 
//   Smartphone,
//   Palette,

//   Database,
//   Brain,
//   Sparkles,
//   CheckCircle,
//   Star,
//   TrendingUp,
//   MessageCircle,
//   ChevronRight,
//   Play,
//   Terminal,
//   Eye,
//   Command,
  
//   ShieldCheck,
 
//   Network,
//   Bot,
//   Zap, 
//   Activity, 
//   Cpu, 
//   Cog,
//   Code2,
//   Figma,
//   Layers,
//   Workflow,
//   BrainCircuit,
//   CloudLightning,
//   Fingerprint,
//   Server,
//   DatabaseBackup,
//   Binary,
//   CircuitBoard,
//   GlobeLock,
  
// } from "lucide-react"
// import { useState } from "react"

// export default function HomePage() {
//   const [hoveredService, setHoveredService] = useState<number | null>(null)
//   const [hoveredFeature, setHoveredFeature] = useState<number | null>(null)
//   const [activeTab, setActiveTab] = useState("ai")

//   // Banner/Hero Section Animation
//   const bannerVariants = {
//     hidden: { opacity: 0, y: 40 },
//     visible: { 
//       opacity: 1, 
//       y: 0,
//       transition: { 
//         duration: 1.2, 
//         ease: [0.25, 0.46, 0.45, 0.94],
//         staggerChildren: 0.2
//       }
//     }
//   }

//   const floatAnimation = {
//     y: [0, -15, 0],
//     transition: {
//       duration: 3,
//       repeat: Infinity,
//       ease: "easeInOut"
//     }
//   }

//   // Services Data (9 services)
//   const services = [
//     { 
//       id: 1, 
//       icon: <BrainCircuit className="h-10 w-10" />, 
//       title: "AI Development", 
//       description: "Custom AI models and machine learning solutions",
//       gradient: "from-[#1AA8A0] via-[#244082] to-[#213b52]",
//       features: ["LLM Integration", "Computer Vision", "Predictive Analytics"]
//     },
//     { 
//       id: 2, 
//       icon: <Code2 className="h-10 w-10" />, 
//       title: "Web3 Solutions", 
//       description: "Blockchain and decentralized applications",
//       gradient: "from-[#244082] via-[#1AA8A0] to-[#213b52]",
//       features: ["Smart Contracts", "DApps", "NFT Platforms"]
//     },
//     { 
//       id: 3, 
//       icon: <Figma className="h-10 w-10" />, 
//       title: "No-Code Platform", 
//       description: "Drag-and-drop interface for rapid development",
//       gradient: "from-[#213b52] via-[#244082] to-[#1AA8A0]",
//       features: ["Visual Builder", "Templates", "Instant Deployment"]
//     },
//     { 
//       id: 4, 
//       icon: <CloudLightning className="h-10 w-10" />, 
//       title: "Cloud Infrastructure", 
//       description: "Scalable cloud architecture and DevOps",
//       gradient: "from-[#1AA8A0] to-[#213b52]",
//       features: ["Microservices", "Kubernetes", "Serverless"]
//     },
//     { 
//       id: 5, 
//       icon: <Terminal className="h-10 w-10" />, 
//       title: "API Development", 
//       description: "Robust API design and integration",
//       gradient: "from-[#244082] to-[#1AA8A0]",
//       features: ["REST & GraphQL", "WebSocket", "Real-time APIs"]
//     },
//     { 
//       id: 6, 
//       icon: <Layers className="h-10 w-10" />, 
//       title: "Full-Stack Apps", 
//       description: "End-to-end application development",
//       gradient: "from-[#213b52] to-[#244082]",
//       features: ["React/Next.js", "Node.js", "Modern Databases"]
//     },
//     { 
//       id: 7, 
//       icon: <Workflow className="h-10 w-10" />, 
//       title: "Automation", 
//       description: "Workflow automation and integration",
//       gradient: "from-[#1AA8A0] via-[#213b52] to-[#244082]",
//       features: ["RPA", "AI Automation", "Custom Scripts"]
//     },
//     { 
//       id: 8, 
//       icon: <Eye className="h-10 w-10" />, 
//       title: "AR/VR Experiences", 
//       description: "Immersive reality solutions",
//       gradient: "from-[#244082] via-[#213b52] to-[#1AA8A0]",
//       features: ["3D Modeling", "Unity", "WebXR"]
//     },
//     { 
//       id: 9, 
//       icon: <DatabaseBackup className="h-10 w-10" />, 
//       title: "Data Engineering", 
//       description: "Data pipelines and warehousing",
//       gradient: "from-[#213b52] via-[#1AA8A0] to-[#244082]",
//       features: ["ETL Pipelines", "Data Lakes", "Analytics"]
//     }
//   ]

//   // Features Data (12 features) - Dora style
//   const features = [
//     { 
//       id: 1, 
//       icon: <Zap className="h-8 w-8" />, 
//       title: "Instant Generation", 
//       description: "Generate code, designs, and content in seconds",
//       highlight: "Real-time AI"
//     },
//     { 
//       id: 2, 
//       icon: <Cpu className="h-8 w-8" />, 
//       title: "Multi-Model AI", 
//       description: "Access to cutting-edge AI models",
//       highlight: "GPT-4 & Beyond"
//     },
//     { 
//       id: 3, 
//       icon: <Activity className="h-8 w-8" />, 
//       title: "Live Preview", 
//       description: "See changes in real-time as you build",
//       highlight: "No Refresh Needed"
//     },
//     { 
//       id: 4, 
//       icon: <ShieldCheck className="h-8 w-8" />, 
//       title: "Enterprise Security", 
//       description: "SOC 2 compliant with end-to-end encryption",
//       highlight: "Bank-Level"
//     },
//     { 
//       id: 5, 
//       icon: <Network className="h-8 w-8" />, 
//       title: "Collaborative", 
//       description: "Real-time collaboration with your team",
//       highlight: "Multiplayer"
//     },
//     { 
//       id: 6, 
//       icon: <Bot className="h-8 w-8" />, 
//       title: "AI Assistant", 
//       description: "Context-aware AI that helps as you build",
//       highlight: "24/7 Support"
//     },
//     { 
//       id: 7, 
//       icon: <CircuitBoard className="h-8 w-8" />, 
//       title: "Custom Components", 
//       description: "Create and reuse custom components",
//       highlight: "DRY Principles"
//     },
//     { 
//       id: 8, 
//       icon: <GlobeLock className="h-8 w-8" />, 
//       title: "Global Deployment", 
//       description: "Deploy to any cloud with one click",
//       highlight: "60+ Regions"
//     },
//     { 
//       id: 9, 
//       icon: <Fingerprint className="h-8 w-8" />, 
//       title: "Version Control", 
//       description: "Built-in Git with visual diff",
//       highlight: "Auto Commit"
//     },
//     { 
//       id: 10, 
//       icon: <Server className="h-8 w-8" />, 
//       title: "Serverless Backend", 
//       description: "Automatic backend generation",
//       highlight: "Zero Config"
//     },
//     { 
//       id: 11, 
//       icon: <Binary className="h-8 w-8" />, 
//       title: "Code Export", 
//       description: "Export clean, production-ready code",
//       highlight: "Any Framework"
//     },
//     { 
//       id: 12, 
//       icon: <Cog className="h-8 w-8" />, 
//       title: "Automated Testing", 
//       description: "AI-generated tests for your code",
//       highlight: "95% Coverage"
//     }
//   ]

//   // FAQ Data (4 questions)
//   const faqs = [
//     {
//       question: "How does your AI technology work?",
//       answer: "Our AI uses multiple state-of-the-art models trained on millions of code samples and design patterns. It understands context, predicts requirements, and generates optimized solutions in real-time."
//     },
//     {
//       question: "Can I export code to my own repository?",
//       answer: "Yes! All generated code can be exported as clean, production-ready code in multiple frameworks (React, Vue, Next.js, etc.) and pushed directly to your GitHub, GitLab, or Bitbucket."
//     },
//     {
//       question: "Is there a free tier available?",
//       answer: "Absolutely! We offer a generous free tier that includes most core features. You can upgrade to premium plans for advanced AI models, team collaboration, and enterprise features."
//     },
//     {
//       question: "How do you handle data privacy and security?",
//       answer: "All data is encrypted in transit and at rest. We're SOC 2 compliant and offer on-premise deployment options. You own all intellectual property generated through our platform."
//     }
//   ]

//   return (
//     <div className="min-h-screen bg-black text-white overflow-hidden">
//       {/* Animated Background Effects - Dora Style */}
//       <div className="fixed inset-0 -z-10 overflow-hidden">
//         {/* Main gradient background */}
//         <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0a0f1c] to-[#121826]" />
        
//         {/* Animated grid */}
//         <div className="absolute inset-0 opacity-20">
//           <div 
//             className="absolute inset-0"
//             style={{
//               backgroundImage: `linear-gradient(to right, #1AA8A0 1px, transparent 1px),
//                                 linear-gradient(to bottom, #1AA8A0 1px, transparent 1px)`,
//               backgroundSize: '50px 50px',
//               maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 70%)'
//             }}
//           />
//         </div>

//         {/* Floating particles */}
//         {[...Array(20)].map((_, i) => (
//           <motion.div
//             key={i}
//             animate={{
//               x: [Math.random() * 100, Math.random() * 100],
//               y: [Math.random() * 100, Math.random() * 100],
//             }}
//             transition={{
//               duration: Math.random() * 10 + 10,
//               repeat: Infinity,
//               repeatType: "reverse",
//               ease: "linear"
//             }}
//             className="absolute w-1 h-1 bg-[#1AA8A0] rounded-full opacity-30"
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//             }}
//           />
//         ))}

        
//       </div>

//       {/* Banner/Hero Section - Dora Inspired */}
//       <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden pt-20">
//         <div className="relative container mx-auto max-w-7xl py-20">
//           <motion.div
//             initial="hidden"
//             animate="visible"
//             // variants={bannerVariants}
//             className="text-center space-y-8"
//           >
//             {/* Animated Terminal Badge */}
//             <motion.div
//               initial={{ scale: 0, rotate: -180 }}
//               animate={{ scale: 1, rotate: 0 }}
//               transition={{ type: "spring", stiffness: 200, damping: 20 }}
//               className="inline-block"
//             >
//               <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#1AA8A0]/20 to-[#244082]/20 border border-[#1AA8A0]/30 backdrop-blur-sm">
//                 <Terminal className="h-4 w-4 text-[#1AA8A0]" />
//                 <span className="text-sm font-medium bg-gradient-to-r from-[#1AA8A0] to-[#244082] bg-clip-text text-transparent">
//                   v2.0 AI PLATFORM LAUNCHED
//                 </span>
//                 <motion.div
//                   animate={{ opacity: [1, 0.3, 1] }}
//                   transition={{ duration: 1.5, repeat: Infinity }}
//                   className="w-2 h-2 rounded-full bg-[#1AA8A0]"
//                 />
//               </div>
//             </motion.div>

//             {/* Main Heading with Typewriter Effect */}
//             <div className="space-y-4">
//               <motion.h1
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8, delay: 0.2 }}
//                 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight"
//               >
//                 <span className="block">Build Apps with</span>
//                 <motion.span
//                   animate={{ 
//                     backgroundPosition: ['0% 0%', '100% 100%'] 
//                   }}
//                   transition={{ 
//                     duration: 3, 
//                     repeat: Infinity,
//                     repeatType: "reverse" 
//                   }}
//                   className="block bg-gradient-to-r from-[#1AA8A0] via-[#244082] to-[#1AA8A0] bg-clip-text text-transparent bg-[length:200%_auto]"
//                 >
//                   AI-Powered Magic
//                 </motion.span>
//               </motion.h1>

//               <motion.p
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8, delay: 0.4 }}
//                 className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
//               >
//                 Describe what you want in plain English. Watch as our AI instantly generates production-ready apps, components, and APIs.
//               </motion.p>
//             </div>

//             {/* AI Prompt Input - Dora Style */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.6 }}
//               className="max-w-2xl mx-auto"
//             >
//               <div className="relative group">
//                 <div className="absolute -inset-0.5 bg-gradient-to-r from-[#1AA8A0] to-[#244082] rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300" />
//                 <div className="relative bg-black/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6">
//                   <div className="flex items-start gap-3">
//                     <div className="flex-shrink-0">
//                       <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#244082] to-[#1AA8A0] flex items-center justify-center">
//                         <Command className="h-5 w-5 text-white" />
//                       </div>
//                     </div>
//                     <div className="flex-1">
//                       <div className="text-sm text-gray-400 mb-2">AI Prompt</div>
//                       <div className="text-lg text-gray-300">
//                         Create a dashboard with charts, user management, and dark mode
//                       </div>
//                       <div className="flex items-center justify-between mt-4">
//                         <div className="text-sm text-gray-500">
//                           Press <kbd className="px-2 py-1 bg-gray-900 rounded text-xs">⌘ K</kbd> to open AI commands
//                         </div>
//                         <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                           <Button className="bg-gradient-to-r from-[#244082] to-[#1AA8A0] hover:shadow-lg hover:shadow-[#1AA8A0]/30">
//                             Generate Now
//                             <ArrowRight className="ml-2 h-4 w-4" />
//                           </Button>
//                         </motion.div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>

//             {/* Platform Tabs - Dora Style */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 1, delay: 0.8 }}
//               className="pt-12"
//             >
//               <Tabs value={activeTab} onValueChange={setActiveTab} className="max-w-3xl mx-auto">
//                 <TabsList className="grid grid-cols-3 bg-gray-900/50 backdrop-blur-sm border border-gray-800 p-1 rounded-xl">
//                   <TabsTrigger 
//                     value="ai" 
//                     className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#244082] data-[state=active]:to-[#1AA8A0] rounded-lg"
//                   >
//                     <Brain className="h-4 w-4 mr-2" />
//                     AI Builder
//                   </TabsTrigger>
//                   <TabsTrigger 
//                     value="code" 
//                     className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#244082] data-[state=active]:to-[#1AA8A0] rounded-lg"
//                   >
//                     <Code className="h-4 w-4 mr-2" />
//                     Code Editor
//                   </TabsTrigger>
//                   <TabsTrigger 
//                     value="deploy" 
//                     className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#244082] data-[state=active]:to-[#1AA8A0] rounded-lg"
//                   >
//                     <Rocket className="h-4 w-4 mr-2" />
//                     Deploy
//                   </TabsTrigger>
//                 </TabsList>
//                 <TabsContent value="ai" className="mt-8">
//                   <div className="text-gray-400">
//                     Describe your app idea and watch AI generate the complete solution in real-time
//                   </div>
//                 </TabsContent>
//               </Tabs>

//               {/* Stats Counter */}
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ duration: 1, delay: 1 }}
//                 className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16"
//               >
//                 {[
//                   { value: "10M+", label: "Lines Generated", icon: <Code className="h-5 w-5" /> },
//                   { value: "50K+", label: "Apps Built", icon: <Rocket className="h-5 w-5" /> },
//                   { value: "99.9%", label: "Uptime", icon: <Shield className="h-5 w-5" /> },
//                   { value: "24/7", label: "AI Support", icon: <Brain className="h-5 w-5" /> },
//                 ].map((stat, index) => (
//                   <motion.div
//                     key={index}
//                     initial={{ scale: 0 }}
//                     animate={{ scale: 1 }}
//                     transition={{ delay: 1.1 + index * 0.1, type: "spring" }}
//                     whileHover={{ y: -5 }}
//                     className="text-center group"
//                   >
//                     <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[#244082]/20 to-[#1AA8A0]/20 mb-4 group-hover:from-[#244082]/30 group-hover:to-[#1AA8A0]/30 transition-all">
//                       <div className="text-[#1AA8A0]">{stat.icon}</div>
//                     </div>
//                     <div className="text-3xl font-bold bg-gradient-to-r from-[#1AA8A0] to-[#244082] bg-clip-text text-transparent">
//                       {stat.value}
//                     </div>
//                     <div className="text-gray-400 mt-2 text-sm">{stat.label}</div>
//                   </motion.div>
//                 ))}
//               </motion.div>
//             </motion.div>
//           </motion.div>
//         </div>

//         {/* Floating AI Elements */}
//         {/* <motion.div
//           animate={floatAnimation}
//           className="absolute top-1/3 left-1/6 w-4 h-4 rounded-full bg-[#1AA8A0] shadow-lg shadow-[#1AA8A0]/50"
//         />
//         <motion.div
//           animate={{
//             ...floatAnimation,
//             transition: { ...floatAnimation.transition, delay: 0.3 }
//           }}
//           className="absolute top-1/2 right-1/5 w-3 h-3 rounded-full bg-[#244082] shadow-lg shadow-[#244082]/50"
//         /> */}
//         {/* <motion.div
//           animate={{
//             ...floatAnimation,
//             transition: { ...floatAnimation.transition, delay: 0.6 }
//           }}
//           className="absolute bottom-1/4 left-1/5 w-2 h-2 rounded-full bg-[#213b52] shadow-lg shadow-[#213b52]/50"
//         /> */}
        
//       </section>

//       {/* Services Section (9 Services) - Dark Dora Style */}
//       <section className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
//         {/* Background Pattern */}
//         <div className="absolute inset-0 opacity-5">
//           <div className="absolute inset-0" style={{
//             backgroundImage: `radial-gradient(circle at 25px 25px, #1AA8A0 2px, transparent 2px)`,
//             backgroundSize: '50px 50px'
//           }} />
//         </div>

//         <div className="container mx-auto max-w-7xl relative">
//           {/* Section Header */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.3 }}
//             className="text-center mb-20"
//           >
//             <motion.div
//               initial={{ width: 0 }}
//               whileInView={{ width: "100px" }}
//               viewport={{ once: true }}
//               transition={{ duration: 1 }}
//               className="h-1 bg-gradient-to-r from-[#244082] to-[#1AA8A0] mx-auto mb-6"
//             />
//             <Badge className="mb-4 px-4 py-2 bg-gradient-to-r from-[#244082]/20 to-[#1AA8A0]/20 text-[#1AA8A0] border border-[#1AA8A0]/30 backdrop-blur-sm">
//               <Sparkles className="mr-2 h-3 w-3" />
//               AI-Powered Services
//             </Badge>
//             <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
//               <span className="block">Everything You Need to</span>
//               <span className="block bg-gradient-to-r from-[#1AA8A0] via-[#244082] to-[#213b52] bg-clip-text text-transparent">
//                 Build & Scale
//               </span>
//             </h2>
//             <p className="text-gray-400 max-w-2xl mx-auto text-lg">
//               From AI development to deployment, we provide the complete toolkit for modern applications
//             </p>
//           </motion.div>

//           {/* Services Grid */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {services.map((service, index) => (
//               <motion.div
//                 key={service.id}
//                 initial={{ opacity: 0, y: 30, rotateX: 15 }}
//                 whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
//                 viewport={{ once: true, amount: 0.3 }}
//                 transition={{ 
//                   duration: 0.6, 
//                   delay: index * 0.1,
//                   ease: "backOut"
//                 }}
//                 whileHover={{ 
//                   y: -10,
//                   transition: { duration: 0.3 }
//                 }}
//                 onMouseEnter={() => setHoveredService(service.id)}
//                 onMouseLeave={() => setHoveredService(null)}
//                 className="relative group"
//               >
//                 {/* Glow effect on hover */}
//                 <div className={`absolute -inset-0.5 bg-gradient-to-r ${service.gradient} rounded-3xl blur opacity-0 group-hover:opacity-30 transition duration-500`} />
                
//                 <Card className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-3xl overflow-hidden h-full">
//                   {/* Animated gradient border */}
//                   <motion.div
//                     animate={{ 
//                       backgroundPosition: ['0% 0%', '100% 100%'] 
//                     }}
//                     transition={{ 
//                       duration: 3, 
//                       repeat: Infinity,
//                       repeatType: "reverse" 
//                     }}
//                     className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient} bg-[length:200%_auto]`}
//                   />
                  
//                   <CardHeader className="pb-6">
//                     <div className="flex items-start justify-between mb-4">
//                       <motion.div
//                         animate={{ 
//                           rotate: hoveredService === service.id ? [0, 10, -10, 0] : 0,
//                           scale: hoveredService === service.id ? 1.1 : 1
//                         }}
//                         transition={{ duration: 0.5 }}
//                         className={`p-3 rounded-2xl bg-gradient-to-br ${service.gradient} bg-opacity-20`}
//                       >
//                         <div className="text-white">{service.icon}</div>
//                       </motion.div>
//                       <motion.div
//                         initial={{ opacity: 0, scale: 0.8 }}
//                         animate={{ 
//                           opacity: hoveredService === service.id ? 1 : 0.5,
//                           scale: hoveredService === service.id ? 1 : 0.8
//                         }}
//                         className="text-xs font-medium px-3 py-1 rounded-full bg-gray-800 text-gray-400"
//                       >
//                         AI-POWERED
//                       </motion.div>
//                     </div>
//                     <CardTitle className="text-xl font-bold text-white mb-2">
//                       {service.title}
//                     </CardTitle>
//                     <CardDescription className="text-gray-400">
//                       {service.description}
//                     </CardDescription>
//                   </CardHeader>
                  
//                   <CardContent>
//                     <div className="space-y-3 mb-6">
//                       {service.features.map((feature, idx) => (
//                         <motion.div
//                           key={idx}
//                           initial={{ opacity: 0, x: -10 }}
//                           animate={{ 
//                             opacity: hoveredService === service.id ? 1 : 0.7,
//                             x: 0
//                           }}
//                           transition={{ delay: idx * 0.1 }}
//                           className="flex items-center gap-2 text-sm"
//                         >
//                           <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#1AA8A0] to-[#244082]" />
//                           <span className="text-gray-300">{feature}</span>
//                         </motion.div>
//                       ))}
//                     </div>
                    
//                     <motion.div
//                       animate={{ 
//                         x: hoveredService === service.id ? 5 : 0
//                       }}
//                       className="inline-flex items-center text-sm font-medium text-[#1AA8A0] group/btn"
//                     >
//                       Explore Service
//                       <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
//                     </motion.div>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Features Section (12 Features) - Dark Futuristic */}
//       <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900/30 relative overflow-hidden">
//         {/* Circuit board background */}
//         <div className="absolute inset-0 opacity-10">
//           <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
//             <defs>
//               <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
//                 <path d="M0 50 L100 50 M50 0 L50 100" stroke="#1AA8A0" strokeWidth="0.5" fill="none"/>
//                 <circle cx="50" cy="50" r="2" fill="#244082"/>
//               </pattern>
//             </defs>
//             <rect width="100%" height="100%" fill="url(#circuit)"/>
//           </svg>
//         </div>

//         <div className="container mx-auto max-w-7xl relative">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.3 }}
//             className="text-center mb-20"
//           >
//             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#244082]/20 to-[#1AA8A0]/20 border border-[#244082]/30 mb-6">
//               <Zap className="h-4 w-4 text-[#1AA8A0]" />
//               <span className="text-sm font-medium text-white">Platform Features</span>
//             </div>
//             <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
//               <span className="block">Why Builders Choose</span>
//               <span className="block bg-gradient-to-r from-[#1AA8A0] to-[#244082] bg-clip-text text-transparent">
//                 Our Platform
//               </span>
//             </h2>
//             <p className="text-gray-400 max-w-2xl mx-auto">
//               Experience the future of development with our cutting-edge features
//             </p>
//           </motion.div>

//           {/* Features Grid */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//             {features.map((feature, index) => (
//               <motion.div
//                 key={feature.id}
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 viewport={{ once: true, amount: 0.3 }}
//                 transition={{ 
//                   duration: 0.5, 
//                   delay: index * 0.05,
//                   type: "spring",
//                   stiffness: 100
//                 }}
//                 whileHover={{ 
//                   scale: 1.05,
//                   transition: { duration: 0.2 }
//                 }}
//                 onMouseEnter={() => setHoveredFeature(feature.id)}
//                 onMouseLeave={() => setHoveredFeature(null)}
//                 className="relative"
//               >
//                 {/* Hover glow */}
//                 <motion.div
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: hoveredFeature === feature.id ? 0.2 : 0 }}
//                   className="absolute inset-0 bg-gradient-to-br from-[#1AA8A0] to-[#244082] rounded-2xl blur-xl"
//                 />
                
//                 <div className="relative p-6 rounded-2xl border border-gray-800 bg-gray-900/30 backdrop-blur-sm h-full group">
//                   {/* Icon with gradient */}
//                   <motion.div
//                     animate={{ 
//                       rotate: hoveredFeature === feature.id ? 360 : 0,
//                       scale: hoveredFeature === feature.id ? 1.1 : 1
//                     }}
//                     transition={{ duration: 0.5 }}
//                     className="inline-flex p-3 rounded-xl bg-gradient-to-br from-[#244082]/20 to-[#1AA8A0]/20 mb-4 group-hover:from-[#244082]/30 group-hover:to-[#1AA8A0]/30"
//                   >
//                     <div className="text-[#1AA8A0]">{feature.icon}</div>
//                   </motion.div>
                  
//                   <h3 className="text-lg font-semibold text-white mb-2">
//                     {feature.title}
//                   </h3>
//                   <p className="text-gray-400 text-sm mb-4">
//                     {feature.description}
//                   </p>
                  
//                   {/* Highlight badge */}
//                   <motion.div
//                     initial={{ opacity: 0, y: 10 }}
//                     animate={{ 
//                       opacity: hoveredFeature === feature.id ? 1 : 0.8,
//                       y: 0
//                     }}
//                     className="inline-block"
//                   >
//                     <Badge variant="secondary" className="bg-gradient-to-r from-[#244082]/20 to-[#1AA8A0]/20 text-[#1AA8A0] border-0">
//                       {feature.highlight}
//                     </Badge>
//                   </motion.div>
                  
//                   {/* Animated underline */}
//                   <motion.div
//                     initial={{ scaleX: 0 }}
//                     animate={{ scaleX: hoveredFeature === feature.id ? 1 : 0 }}
//                     transition={{ duration: 0.3 }}
//                     className="h-0.5 bg-gradient-to-r from-[#244082] to-[#1AA8A0] mt-4 origin-left"
//                   />
//                 </div>
//               </motion.div>
//             ))}
//           </div>

//           {/* Demo Preview */}
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//             className="mt-32"
//           >
//             <div className="relative rounded-3xl overflow-hidden border border-gray-800 bg-gradient-to-br from-gray-900 to-black">
//               {/* Code preview header */}
//               <div className="border-b border-gray-800 bg-gray-900/50 p-4 flex items-center gap-2">
//                 <div className="flex gap-2">
//                   <div className="w-3 h-3 rounded-full bg-red-500" />
//                   <div className="w-3 h-3 rounded-full bg-yellow-500" />
//                   <div className="w-3 h-3 rounded-full bg-green-500" />
//                 </div>
//                 <div className="flex-1 text-center text-sm text-gray-400">
//                   app/dashboard/page.tsx • AI Generated
//                 </div>
//                 <Badge className="bg-gradient-to-r from-[#244082] to-[#1AA8A0]">
//                   Live Preview
//                 </Badge>
//               </div>
              
//               {/* Code content */}
//               <div className="p-8 font-mono text-sm">
//                 <div className="space-y-4">
//                   {[
//                     { text: "export default function Dashboard() {", color: "text-blue-400" },
//                     { text: "  return (", color: "text-gray-400" },
//                     { text: "    <div className=\"min-h-screen bg-gray-900\">", color: "text-gray-400" },
//                     { text: "      {/* AI Generated Header */}", color: "text-gray-600" },
//                     { text: "      <Header />", color: "text-green-400" },
//                     { text: "      {/* Real-time Analytics */}", color: "text-gray-600" },
//                     { text: "      <AnalyticsDashboard />", color: "text-green-400" },
//                     { text: "      {/* User Management */}", color: "text-gray-600" },
//                     { text: "      <UserTable />", color: "text-green-400" },
//                     { text: "    </div>", color: "text-gray-400" },
//                     { text: "  );", color: "text-gray-400" },
//                     { text: "}", color: "text-blue-400" },
//                   ].map((line, idx) => (
//                     <motion.div
//                       key={idx}
//                       initial={{ opacity: 0, x: -20 }}
//                       whileInView={{ opacity: 1, x: 0 }}
//                       transition={{ delay: idx * 0.1 }}
//                       className="flex items-start"
//                     >
//                       <div className="text-gray-600 w-8 flex-shrink-0">{idx + 1}</div>
//                       <div className={line.color}>{line.text}</div>
//                     </motion.div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* FAQ Section (4 Questions) - Dark Theme */}
//       <section className="py-32 px-4 sm:px-6 lg:px-8 relative">
//         <div className="container mx-auto max-w-4xl">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center mb-16"
//           >
//             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#213b52]/20 to-[#244082]/20 border border-[#213b52]/30 mb-6">
//               <MessageCircle className="h-4 w-4 text-[#244082]" />
//               <span className="text-sm font-medium text-white">FAQ</span>
//             </div>
//             <h2 className="text-3xl sm:text-4xl font-bold mb-6">
//               <span className="block">Questions About</span>
//               <span className="block bg-gradient-to-r from-[#244082] to-[#1AA8A0] bg-clip-text text-transparent">
//                 AI Development?
//               </span>
//             </h2>
//             <p className="text-gray-400 max-w-2xl mx-auto">
//               Get answers to common questions about our AI-powered platform
//             </p>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             transition={{ staggerChildren: 0.1 }}
//           >
//             <Accordion type="single" collapsible className="space-y-4">
//               {faqs.map((faq, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ delay: index * 0.1 }}
//                 >
//                   <AccordionItem 
//                     value={`item-${index}`}
//                     className="border border-gray-800 rounded-2xl px-6 bg-gray-900/30 backdrop-blur-sm hover:border-[#1AA8A0]/30 transition-colors"
//                   >
//                     <AccordionTrigger className="text-lg font-semibold text-white hover:text-[#1AA8A0] py-6 text-left">
//                       <div className="flex items-center gap-3">
//                         <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#244082]/20 to-[#1AA8A0]/20 flex items-center justify-center">
//                           <span className="text-sm font-bold bg-gradient-to-r from-[#1AA8A0] to-[#244082] bg-clip-text text-transparent">
//                             {index + 1}
//                           </span>
//                         </div>
//                         {faq.question}
//                       </div>
//                     </AccordionTrigger>
//                     <AccordionContent className="text-gray-400 pb-6 pl-11">
//                       {faq.answer}
//                     </AccordionContent>
//                   </AccordionItem>
//                 </motion.div>
//               ))}
//             </Accordion>
//           </motion.div>

//           {/* Additional CTA */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             className="text-center mt-16"
//           >
//             <div className="inline-flex items-center gap-3 text-gray-400 mb-8">
//               <div className="h-px w-12 bg-gradient-to-r from-transparent to-gray-700" />
//               Still have questions?
//               <div className="h-px w-12 bg-gradient-to-l from-transparent to-gray-700" />
//             </div>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                 <Button size="lg" className="bg-gradient-to-r from-[#244082] to-[#1AA8A0] hover:shadow-lg hover:shadow-[#1AA8A0]/30 px-8">
//                   <MessageCircle className="mr-2 h-5 w-5" />
//                   Chat with AI Assistant
//                 </Button>
//               </motion.div>
//               <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                 <Button size="lg" variant="outline" className="border-gray-700 text-white hover:bg-gray-800 px-8">
//                   <Users className="mr-2 h-5 w-5" />
//                   Join Community
//                 </Button>
//               </motion.div>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Final CTA Section - Dark Glowing */}
//       <section className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
//         {/* Animated gradient background */}
//         <div className="absolute inset-0">
//           <motion.div
//             animate={{ 
//               backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] 
//             }}
//             transition={{ 
//               duration: 15, 
//               repeat: Infinity,
//               ease: "linear" 
//             }}
//             className="absolute inset-0 bg-gradient-to-r from-[#244082]/10 via-[#1AA8A0]/10 to-[#213b52]/10 bg-[size:400%_100%]"
//           />
//         </div>

//         {/* Grid overlay */}
//         <div className="absolute inset-0 opacity-10">
//           <div className="absolute inset-0" style={{
//             backgroundImage: `linear-gradient(#1AA8A0 1px, transparent 1px),
//                               linear-gradient(90deg, #1AA8A0 1px, transparent 1px)`,
//             backgroundSize: '100px 100px',
//           }} />
//         </div>

//         <div className="container mx-auto max-w-6xl relative">
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center"
//           >
//             {/* Glowing badge */}
//             <motion.div
//               animate={{ 
//                 boxShadow: [
//                   '0 0 20px rgba(26, 168, 160, 0.3)',
//                   '0 0 40px rgba(26, 168, 160, 0.5)',
//                   '0 0 20px rgba(26, 168, 160, 0.3)'
//                 ]
//               }}
//               transition={{ duration: 2, repeat: Infinity }}
//               className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#244082] to-[#1AA8A0] mb-8"
//             >
//               <Rocket className="h-5 w-5 text-white" />
//               <span className="font-semibold text-white">Ready to Build the Future?</span>
//             </motion.div>

//             <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8">
//               <span className="block">Start Building with</span>
//               <motion.span
//                 animate={{ 
//                   backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] 
//                 }}
//                 transition={{ 
//                   duration: 5, 
//                   repeat: Infinity,
//                   ease: "linear" 
//                 }}
//                 className="block bg-gradient-to-r from-[#1AA8A0] via-[#244082] to-[#1AA8A0] bg-clip-text text-transparent bg-[size:200%_auto]"
//               >
//                 AI Today
//               </motion.span>
//             </h2>

//             <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
//               Join 50,000+ developers and teams building faster, smarter, and better with our AI platform.
//               No credit card required to start.
//             </p>

//             {/* Main CTA */}
//             <motion.div
//               initial={{ opacity: 0, scale: 0.9 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ delay: 0.2 }}
//               className="flex flex-col sm:flex-row gap-6 justify-center mb-12"
//             >
//               <motion.div 
//                 whileHover={{ scale: 1.05 }} 
//                 whileTap={{ scale: 0.95 }}
//                 className="relative"
//               >
//                 <div className="absolute -inset-1 bg-gradient-to-r from-[#1AA8A0] to-[#244082] rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500" />
//                 <Button 
//                   size="lg" 
//                   className="relative bg-gradient-to-r from-[#244082] to-[#1AA8A0] hover:shadow-2xl hover:shadow-[#1AA8A0]/40 px-12 text-lg font-semibold"
//                 >
//                   <Sparkles className="mr-3 h-6 w-6" />
//                   Start Free Trial
//                 </Button>
//               </motion.div>
              
//               <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                 <Button 
//                   size="lg" 
//                   variant="outline" 
//                   className="border-2 border-gray-700 text-white hover:bg-gray-800/50 hover:border-gray-600 px-12 text-lg font-semibold backdrop-blur-sm"
//                 >
//                   <Play className="mr-3 h-6 w-6" />
//                   Watch Demo
//                 </Button>
//               </motion.div>
//             </motion.div>

//             {/* Trust indicators */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               viewport={{ once: true }}
//               transition={{ delay: 0.4 }}
//               className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto"
//             >
//               {[
//                 { text: "No credit card required", icon: <ShieldCheck className="h-5 w-5" /> },
//                 { text: "Free forever tier", icon: <Star className="h-5 w-5" /> },
//                 { text: "24/7 AI support", icon: <Brain className="h-5 w-5" /> },
//                 { text: "30-day money back", icon: <CheckCircle className="h-5 w-5" /> },
//               ].map((item, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.5 + index * 0.1 }}
//                   className="flex items-center gap-3 justify-center text-gray-400"
//                 >
//                   <div className="text-[#1AA8A0]">{item.icon}</div>
//                   <span className="text-sm">{item.text}</span>
//                 </motion.div>
//               ))}
//             </motion.div>
//           </motion.div>
//         </div>

//         {/* Floating code snippets */}
//         <motion.div
//           animate={{ y: [0, -20, 0] }}
//           transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//           className="absolute top-20 left-10 text-xs font-mono text-gray-600 bg-gray-900/50 backdrop-blur-sm px-3 py-2 rounded-lg border border-gray-800"
//         >
//           {"<AIComponent />"}
//         </motion.div>
//         <motion.div
//           animate={{ y: [0, 20, 0] }}
//           transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
//           className="absolute bottom-20 right-10 text-xs font-mono text-gray-600 bg-gray-900/50 backdrop-blur-sm px-3 py-2 rounded-lg border border-gray-800"
//         >
//           {"npm create ai-app"}
//         </motion.div>
//       </section>
//     </div>
//   )
// }


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



"use client";

import { motion, Variants, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Rocket,
  Users,
  LineChart,
  Smartphone,
  Globe2,
  Brush,
  Workflow,
  Bot,
  MailCheck,
  ShieldCheck,
} from "lucide-react";

const darkBlue = "#244082,";
const accent = "#38bdf8";

// Variants (TS-safe)
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const stagger: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15, delayChildren: 0.05 },
  },
};

const aboutTabs = [
  {
    key: "satisfaction",
    label: "Customer Satisfaction",
    title: "Highly ranked for customer satisfaction",
    body: "Our commitment to customer satisfaction is at the core of everything we do. Engagements are built around clear outcomes, transparency, and long‑term support.",
  },
  {
    key: "cost",
    label: "Cost‑Effective",
    title: "World‑class yet cost‑effective",
    body: "Excellence without the enterprise price tag. Solutions are designed to be lean, efficient, and focused on maximising your return on investment.",
  },
  {
    key: "complete",
    label: "All‑in‑One",
    title: "Complete solutions under one roof",
    body: "From strategy to design, development, automation, and email, Globo Persona brings every essential capability into a single, integrated partner.[web:2][web:43]",
  },
  {
    key: "culture",
    label: "Culture & Craft",
    title: "Culture, craft, and technical excellence",
    body: "Every journey begins with understanding your needs, crafting experiences that resonate with your audience, and leveraging modern technology to drive results.[web:2]",
  },
];

const featureItems = [
  "Targeted Audience Reach",
  "Cost Efficiency",
  "Trackable Performance",
  "Interactive Engagement",
  "Multi‑Platform Presence",
  "Marketing Automation",
  "Flexibility & Adaptability",
  "Global Outreach",
  "Enhanced User Experience",
  "Social Influence",
  "Data Security & Compliance",
  "Content Strategy",
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      {/* BACKGROUND */}
      <motion.div
        initial="hidden"
        animate="show"
        variants={fadeIn}
        className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -top-40 left-[-8rem] h-96 w-96 rounded-full bg-[rgba(23,64,129,0.6)] blur-3xl" />
        <div className="absolute right-[-6rem] top-24 h-80 w-80 rounded-full bg-[rgba(56,189,248,0.3)] blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.06),transparent_55%)]" />
      </motion.div>

      <div className="mx-auto flex max-w-6xl flex-col gap-20 px-4 py-10 md:px-6 md:py-16">
        {/* 1. HERO / BANNER – polished simple split */}
        <section className="relative grid gap-10 md:grid-cols-[1.4fr,1fr] md:items-center">
          {/* left content */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="space-y-7"
          >
            <motion.p
              variants={fadeUp}
              className="text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-300/80"
            >
              Digital growth partner
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl"
            >
              We Don&apos;t Run <span className="text-[#fdc134]">Ads.</span>
              <br />
              We Build <span className="text-[#244082]">Growth Engines.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="max-w-xl text-sm leading-relaxed text-slate-200/85"
            >
              Globo Persona crafts unique digital experiences that help your
              business grow, stand out, and convert the right audiences across
              the web.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex flex-wrap items-center gap-4"
            >
              {/* primary button with angled hover overlay */}
              <button
                className="relative overflow-hidden rounded-full bg-[#244082] px-7 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[rgba(36,64,130,0.5)] transition-transform duration-200 hover:-translate-y-0.5"
              >
                <span className="relative z-10">Connect With Us</span>
                <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-tr from-[#fdc134] via-[#244082] to-white opacity-80 transition-transform duration-300 ease-out hover:translate-x-0" />
              </button>

              {/* secondary outline button */}
              <button
                className="rounded-full border border-slate-500 bg-transparent px-7 py-2.5 text-sm font-semibold text-slate-100 transition-colors duration-200 hover:border-[#244082] hover:bg-white/10"
              >
                View our work
              </button>
            </motion.div>
          </motion.div>

         {/* right side globe – similar to reference */}
<motion.div
  variants={fadeIn}
  initial="hidden"
  animate="show"
  className="relative flex items-center justify-center"
>
  <motion.div
    className="relative h-64 w-64 md:h-80 md:w-80 rounded-full overflow-hidden"
    animate={{ rotate: 360 }}
    transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
  >
    {/* outer glow + rim */}
    <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,#1e293b_0%,#020617_55%,#020617_100%)]" />
    <div className="absolute inset-[1px] rounded-full border border-[rgba(56,189,248,0.7)] shadow-[0_0_70px_rgba(56,189,248,0.9)]" />

    {/* dotted world silhouette */}
    <div className="absolute inset-6 rounded-full overflow-hidden">
      {/* blue dot field */}
      <div className="h-full w-full bg-[radial-gradient(circle,#1d4ed8_1px,transparent_1px)] [background-size:4px_4px] opacity-90" />
      {/* dark land mask at bottom half */}
      <div className="absolute bottom-0 left-1/2 h-[70%] w-[140%] -translate-x-1/2 rounded-t-[999px] bg-gradient-to-t from-[#020617] via-[#020617] to-transparent" />
    </div>

    {/* subtle latitude/longitude glow */}
    <div className="pointer-events-none absolute inset-x-6 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-[rgba(148,163,184,0.7)] to-transparent" />
    <div className="pointer-events-none absolute inset-y-6 left-1/2 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[rgba(148,163,184,0.7)] to-transparent" />
  </motion.div>
</motion.div>
 </section>

        {/* 2. ABOUT – tabbed 4‑title interaction (unique layout) */}
        <AboutSection />

        {/* 3. SERVICES – parallax‑style horizontal stacked cards */}
        {/* 3. SERVICES – stacked cards */}
        <ServicesParallaxSection />


        {/* 4. FEATURES – 12 small titles in a dense grid */}
        <FeaturesSection />

        {/* 5. FAQ – interaction like accordions */}
        <FAQSection />

        {/* 6. CTA – strong final panel */}
        <CTASection />
      </div>

      <style jsx global>{`
        :root {
          --brand-blue: ${darkBlue};
          --accent: ${accent};
        }
      `}</style>
    </main>
  );
}

/* -------------------- ABOUT SECTION -------------------- */


function AboutSection() {
  const [active, setActive] = React.useState<string>("satisfaction");
  const current = aboutTabs.find((t) => t.key === active)!;

  // simple icons per tab
  const tabIcons: Record<string, React.ReactNode> = {
    satisfaction: <Users className="h-3.5 w-3.5" />,
    cost: <LineChart className="h-3.5 w-3.5" />,
    complete: <Globe2 className="h-3.5 w-3.5" />,
    culture: <Brush className="h-3.5 w-3.5" />,
  };

  return (
    <section className="space-y-6">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.35 }}
        className="space-y-3"
      >
        <motion.p
          variants={fadeUp}
          className="text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-300/80"
        >
          About Globo Persona
        </motion.p>
        <motion.h2
          variants={fadeUp}
          className="text-2xl font-semibold tracking-tight text-white md:text-3xl"
        >
          World‑class digital marketing, made accessible.
        </motion.h2>
        <motion.p
          variants={fadeUp}
          className="max-w-3xl text-sm leading-relaxed text-slate-200/85"
        >
          Welcome to GloboPersona, your premier destination for comprehensive
          digital marketing solutions. Every engagement is grounded in
          understanding your needs, your audience, and the outcomes that matter
          most.[web:2]
        </motion.p>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-[0.9fr,1.3fr] md:items-stretch">
        {/* LEFT: tabs list with icons */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="flex h-full flex-col gap-2 rounded-3xl border border-slate-800 bg-slate-900/80 p-3 text-[11px]"
        >
          {aboutTabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActive(tab.key)}
              className={`flex items-center justify-between rounded-2xl px-3 py-3 text-left transition ${
                active === tab.key
                  ? "bg-[#244082] text-slate-50 shadow-sm"
                  : "bg-slate-900/40 text-slate-300 hover:bg-slate-900"
              }`}
            >
              <span className="flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-900/60 text-[rgba(248,250,252,0.9)]">
                  {tabIcons[tab.key]}
                </span>
                {tab.label}
              </span>
              <span className="text-[10px] text-slate-400">
                {active === tab.key ? "●" : "○"}
              </span>
            </button>
          ))}
        </motion.div>

        {/* RIGHT: detail card with white bg + blue text */}
{/* RIGHT: detail card – dark bg, highlighted title */}
<motion.div
  key={current.key}
  initial={{ opacity: 0, y: 18 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: false, amount: 0.4 }}
  transition={{ duration: 0.4 }}
  className="flex h-full flex-col justify-center rounded-3xl border border-slate-800 bg-slate-900/90 p-6 shadow-[0_18px_45px_rgba(0,0,0,0.6)]"
>
  <h3 className="inline-flex items-center gap-2 rounded-full bg-[rgba(36,64,130,0.25)] px-5 py-2 text-sm font-semibold text-slate-50">
    <span className="h-1.5 w-1.5 rounded-full bg-[#fdc134]" />
    {current.title}
  </h3>
  <p className="mt-3 text-12px] leading-relaxed text-slate-200/90">
    {current.body}
  </p>
</motion.div>


      </div>
    </section>
  );
}



const gpServices = [
  {
    title: "App Development",
    subtitle: "Engaging mobile experiences",
    body:
      "Custom mobile apps that improve customer engagement, streamline processes, and create a direct line to your audience across devices.[web:2]",
    img: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Web Development",
    subtitle: "High‑performance websites",
    body:
      "Responsive, visually appealing, SEO‑friendly websites that convert visitors into loyal customers.[web:2]",
    img: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Graphic Design & Branding",
    subtitle: "Memorable brand identity",
    body:
      "Logos, brand systems, and creative assets that keep your business instantly recognisable in any channel.[web:2]",
    img: "https://images.pexels.com/photos/1939485/pexels-photo-1939485.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Digital Marketing",
    subtitle: "Full‑funnel growth",
    body:
      "Integrated SEO, content, social, and paid programmes to grow traffic and revenue.[web:2][web:43]",
    img: "https://images.pexels.com/photos/1559651/pexels-photo-1559651.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Account‑Based Marketing",
    subtitle: "Win key accounts",
    body:
      "ABM strategies focused on high‑value B2B accounts with aligned sales and marketing.[web:2]",
    img: "https://images.pexels.com/photos/1181468/pexels-photo-1181468.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Automations",
    subtitle: "Always‑on workflows",
    body:
      "Custom automation solutions that remove repetitive work, reduce errors, and maximise productivity.[web:2][web:47]",
    img: "https://images.pexels.com/photos/1181438/pexels-photo-1181438.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Custom Chatbots",
    subtitle: "Instant support 24/7",
    body:
      "Chatbots tailored to your business that answer questions, qualify leads, and collect insights.[web:2][web:43]",
    img: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Custom Mini Softwares",
    subtitle: "Bespoke micro‑solutions",
    body:
      "Plugins, widgets, and lightweight apps that extend your website or existing stack.[web:2]",
    img: "https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Email Marketing",
    subtitle: "Nurture & retain",
    body:
      "Targeted email campaigns and automation journeys that nurture leads and drive retention.[web:2][web:46]",
    img: "https://images.pexels.com/photos/261949/pexels-photo-261949.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

function ServicesParallaxSection() {
  const sectionRef = React.useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  return (
    <section className="space-y-8">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-300/80">
            Our services
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
            9 services, stacked as you scroll.
          </h2>
        </div>
        <p className="max-w-md text-[11px] text-slate-300/90">
          Cards stay in place while the next one scrolls over it, creating a
          layered vertical story of Globo Persona&apos;s capabilities.[web:1][web:2]
        </p>
      </div>

      <div ref={sectionRef} className="relative h-[900vh]">
        {gpServices.map((service, index) => (
          <StickyServiceCard
            key={service.title}
            index={index}
            total={gpServices.length}
            service={service}
            progress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  );
}

type StickyServiceCardProps = {
  index: number;
  total: number;
  service: (typeof gpServices)[number];
  progress: any;
};

function StickyServiceCard({
  index,
  total,
  service,
  progress,
}: StickyServiceCardProps) {
  const step = 1 / total;
  const start = index * step;
  const end = start + step;

  const targetScale = 0.9 + (index / total) * 0.08;
  const scale = useTransform(progress, [start, end], [1, targetScale]);
  const translateY = useTransform(
    progress,
    [start, end],
    [index * 16, index * -8]
  );

  return (
    <motion.div
      style={{ scale, y: translateY }}
      className="sticky top-16 mx-auto flex max-w-4xl justify-center"
    >
      <article className="grid h-[420px] w-full grid-cols-1 overflow-hidden rounded-3xl border border-slate-200 bg-white text-slate-900 shadow-xl md:h-[420px] md:grid-cols-[1.3fr,1fr]">
        <div className="col-span-1 h-3 w-full rounded-t-3xl bg-[#244082] md:col-span-2" />

        <div className="flex flex-col justify-between px-6 pb-6 pt-4">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#244082]">
              {service.subtitle}
            </p>
            <h3 className="mt-1 text-lg font-semibold text-[#213b52]">
              {service.title}
            </h3>
            <p className="mt-2 text-[11px] leading-relaxed text-slate-700">
              {service.body}
            </p>
          </div>
          <span className="mt-3 text-[11px] font-semibold text-[#244082]">
            Learn more →
          </span>
        </div>

        <div className="relative hidden overflow-hidden rounded-l-3xl rounded-tr-3xl bg-slate-100 md:block">
          <motion.div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${service.img})` }}
            initial={{ scale: 1.15 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          />
        </div>
      </article>
    </motion.div>
  );
}

/* -------------------- FEATURES -------------------- */

function FeaturesSection() {
  const [reverse, setReverse] = React.useState(false);

  // every 60s direction flip
  React.useEffect(() => {
    const id = setInterval(() => setReverse((r) => !r), 60000);
    return () => clearInterval(id);
  }, []);

  const featureCards = [
    "Targeted Audience Reach",
    "Cost Efficiency",
    "Trackable Performance",
    "Interactive Engagement",
    "Multi‑Platform Presence",
    "Marketing Automation",
    "Flexibility & Adaptability",
    "Global Outreach",
    "Enhanced User Experience",
    "Social Influence",
    "Data Security & Compliance",
    "Content Strategy",
  ];

  const topRow = featureCards.slice(0, 6);
  const bottomRow = featureCards.slice(6, 12);
  const allTop = topRow.concat(topRow);
  const allBottom = bottomRow.concat(bottomRow);

  const xFrom = reverse ? "-50%" : "0%";
  const xTo = reverse ? "0%" : "-50%";

  return (
    <section className="py-14">
      <div className="grid gap-10 md:grid-cols-2 md:items-start">
        {/* LEFT 50% – text block */}
        <div className="space-y-4">
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-300/80">
            Real‑world impact
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
            Client success stories built on strong features.
          </h2>
          <p className="max-w-md text-sm leading-relaxed text-slate-200/85">
            See how organisations like yours transform operations and customer
            experiences using Globo Persona&apos;s capabilities—from automation
            and analytics to omni‑channel engagement.[web:2]
          </p>

          <button className="inline-flex items-center gap-2 rounded-full border border-slate-500 bg-transparent px-5 py-2 text-[11px] font-semibold text-slate-100 transition-colors duration-200 hover:border-[#244082] hover:bg-white/5">
            Explore client stories
            <span className="text-xs">↗</span>
          </button>
        </div>

        {/* RIGHT 50% – scrolling feature cards */}
        <div className="space-y-4">
          {/* Top row */}
          <div className="relative overflow-hidden rounded-2xl bg-[#020617] p-2">
            <motion.div
              className="flex w-max gap-4"
              animate={{ x: [xFrom, xTo] }}
              transition={{ duration: 30, ease: "linear", repeat: Infinity }}
            >
              {allTop.map((item, i) => (
                <div
                  key={`top-${i}`}
                  className="flex h-24 min-w-[220px] md:h-28 md:min-w-[260px] items-center rounded-2xl bg-[#244082] px-4 text-left text-slate-50 shadow-[0_18px_40px_rgba(0,0,0,0.7)]"
                >
                  <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
                    <span className="h-2 w-2 rounded-full bg-white" />
                  </div>
                  <p className="text-sm font-semibold leading-snug">
                    {item}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Bottom row */}
          <div className="relative overflow-hidden rounded-2xl bg-[#020617] p-2">
            <motion.div
              className="flex w-max gap-4"
              animate={{ x: [xFrom, xTo] }}
              transition={{ duration: 30, ease: "linear", repeat: Infinity }}
            >
              {allBottom.map((item, i) => (
                <div
                  key={`bottom-${i}`}
                  className="flex h-24 min-w-[220px] md:h-28 md:min-w-[260px] items-center rounded-2xl bg-[#244082] px-4 text-left text-slate-50 shadow-[0_18px_40px_rgba(0,0,0,0.7)]"
                >
                  <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
                    <span className="h-2 w-2 rounded-full bg-white" />
                  </div>
                  <p className="text-sm font-semibold leading-snug">
                    {item}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}



/* -------------------- FAQ -------------------- */

const faqItems = [
  {
    q: "What services does Globo Persona offer?",
    a: "Globo Persona offers app development, web development, marketing automation, custom chatbot development, email campaign management, and additional digital services to enhance your presence and drive growth.[web:2][web:43]",
  },
  {
    q: "How do your app development services help?",
    a: "Custom mobile apps improve engagement, streamline processes, and provide a platform for direct communication with your audience across devices.[web:2][web:43]",
  },
  {
    q: "What makes your web development stand out?",
    a: "Websites are responsive, visually appealing, and highly functional, with UX, SEO optimisation, and integrations designed to support business goals.[web:2][web:45]",
  },
  {
    q: "How do you implement marketing automation?",
    a: "Advanced software automates email campaigns, social media posting, and lead generation, enabling efficient, personalised communication at scale.[web:2][web:47]",
  },
  {
    q: "Can you build custom chatbots?",
    a: "Yes. Chatbots are tailored to your business needs, offering instant responses, handling routine tasks, and gathering valuable customer insights.[web:2][web:43]",
  },
];

function FAQSection() {
  return (
    <section className="space-y-6">
      <div>
        <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-300/80">
          Frequently asked questions
        </p>
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
          Clear answers before we get started.
        </h2>
      </div>

      <div className="space-y-3">
        {faqItems.map((item) => (
          <details
            key={item.q}
            className="group rounded-2xl border border-slate-800 bg-slate-900/80 p-4"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold">
              {item.q}
              <span className="text-xs text-slate-400 group-open:hidden">
                +
              </span>
              <span className="hidden text-xs text-slate-400 group-open:block">
                −
              </span>
            </summary>
            <p className="mt-2 text-[11px] leading-relaxed text-slate-300/90">
              {item.a}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}

/* -------------------- CTA -------------------- */

function CTASection() {
  const tags = [
    "Digital Marketing",
    "Business Automation",
    "AI Development",
    "Performance Marketing",
    "Account‑Based Marketing",
    "Custom Chatbots",
    "Web Development",
    "App Development",
    "Email Marketing",
  ];

  return (
    <section className="py-10">
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[40px] border border-[#1c2f63] bg-[#244082] p-10 shadow-[0_40px_120px_rgba(0,0,0,0.8)]">
        {/* soft background lights */}
        <div className="pointer-events-none absolute inset-0 opacity-70 mix-blend-screen">
          <div className="absolute -left-10 top-0 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,#ffffff,transparent_60%)] blur-3xl" />
          <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,#fdc134,transparent_60%)] blur-3xl" />
        </div>

        <div className="relative z-10 flex flex-col items-center gap-6 text-center text-white">
          <div className="space-y-2">
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-white/80">
              Automate your growth
            </p>
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              Transform your business with{" "}
              <span className="text-[#fdc134]">cutting‑edge solutions</span>.
            </h2>
            <p className="text-[11px] text-white/85">
              Book a call today and start automating your marketing, sales, and
              customer journeys with Globo Persona.
            </p>
          </div>

          {/* horizontal scrolling tags */}
          <div className="relative w-full overflow-hidden">
            <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-[#244082] via-[#244082] to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-[#244082] via-[#244082] to-transparent" />

            <div className="flex w-max animate-[scrollTags_20s_linear_infinite] gap-3">
              {tags.concat(tags).map((tag, i) => (
                <div
                  key={i}
                  className="rounded-full border border-white/20 bg-black/35 px-4 py-1 text-[11px] text-slate-50 shadow-[0_8px_20px_rgba(0,0,0,0.6)]"
                >
                  {tag}
                </div>
              ))}
            </div>
          </div>

          {/* primary CTA button */}
          <button className="mt-2 rounded-full bg-white px-8 py-2.5 text-sm font-semibold text-[#244082] shadow-[0_18px_45px_rgba(0,0,0,0.6)] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-slate-100">
            Book a free call
          </button>
        </div>
      </div>

    

      <style jsx>{`
        @keyframes scrollTags {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}


/* to use React in this file */
import * as React from "react";

