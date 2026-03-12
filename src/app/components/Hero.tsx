import { motion } from 'motion/react';
import { ArrowRight, Download } from 'lucide-react';
import { TypingAnimation } from './TypingAnimation';
import { MatrixRain } from './MatrixRain';
import { FloatingParticles } from './FloatingParticles';
import { HUDElements } from './HUDElements';
import { TerminalEffect } from './TerminalEffect';
import { CircuitBoard } from './CircuitBoard';
import { InteractiveGlobe } from './InteractiveGlobe';

interface HeroProps {
  heroImage: string;
}

export function Hero({ heroImage }: HeroProps) {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Matrix Rain Background */}
      <MatrixRain />
      
      {/* Animated Grid Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-900 to-black">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0ea5e933_1px,transparent_1px),linear-gradient(to_bottom,#0ea5e933_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      </div>

      {/* Circuit Board */}
      <CircuitBoard />

      {/* Floating Particles */}
      <FloatingParticles />

      {/* HUD Elements */}
      <HUDElements />

      {/* Terminal Effect */}
      <TerminalEffect />

      {/* Glowing Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px] animate-pulse delay-1000"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block"
            >
              <span className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-medium backdrop-blur-sm">
                <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                Welcome to my digital space
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold"
            >
              <span className="text-white">Hello, I'm </span>
              <span className="block mt-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                <TypingAnimation text="Christella Munezero" delay={800} speed={120} />
              </span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8 }}
              className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-300"
            >
              A Software Developer Building{' '}
              <span className="text-cyan-400">Intelligent Digital Solutions</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2 }}
              className="text-lg text-gray-400 leading-relaxed max-w-2xl"
            >
              I design and build modern applications, intelligent systems, and digital experiences that combine
              technology, creativity, and innovation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.2 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <a 
                href="#projects"
                className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-medium flex items-center gap-2 hover:shadow-xl hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10">View Projects</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
              </a>
              <a
                href="/Munezero_Christella_CV_2.pdf"
                download="Munezero_Christella_CV.pdf"
                className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-cyan-500/30 text-cyan-400 rounded-lg font-medium flex items-center gap-2 hover:bg-white/10 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 relative group overflow-hidden"
              >
                <div className="absolute inset-0 bg-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Download className="w-5 h-5 relative z-10" />
                <span className="relative z-10">Download CV</span>
              </a>
            </motion.div>

            {/* Stats with Enhanced Design */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.4 }}
              className="grid grid-cols-3 gap-6 pt-8"
            >
              {[
                { value: '20+', label: 'Projects', delay: 2.5 },
                { value: '1+', label: 'Years Exp', delay: 2.6 },
                { value: '5+', label: 'Happy Clients', delay: 2.7 },
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: stat.delay }}
                  className="text-center lg:text-left relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>
                  <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-cyan-500/20 rounded-lg p-3 group-hover:border-cyan-500/40 transition-all">
                    <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - Interactive 3D Globe */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] lg:h-[600px]"
          >
            <div className="relative h-full">
              {/* Glowing Frame - Static (no pulsing) */}
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl opacity-10 blur-2xl"></div>
              
              {/* Rotating Ring Effect */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-8 border-2 border-cyan-500/20 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-12 border-2 border-blue-500/10 rounded-full"
              />
              
              {/* 3D Globe Container */}
              <div className="relative h-full bg-gradient-to-br from-cyan-500/10 to-blue-600/10 backdrop-blur-sm border border-cyan-500/30 rounded-2xl overflow-hidden">
                <InteractiveGlobe />
                
                {/* Holographic Corner Markers */}
                <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-cyan-400 z-10"></div>
                <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-cyan-400 z-10"></div>
                <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-cyan-400 z-10"></div>
                <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-cyan-400 z-10"></div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg opacity-30 blur-xl"
              ></motion.div>
              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-purple-400 to-blue-500 rounded-lg opacity-30 blur-xl"
              ></motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-cyan-500/50 rounded-full flex justify-center p-2"
        >
          <div className="w-1 h-3 bg-cyan-500 rounded-full"></div>
        </motion.div>
      </motion.div>
    </section>
  );
}