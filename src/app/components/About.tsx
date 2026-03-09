import { motion } from 'motion/react';
import { Code2, Lightbulb, Rocket, Target } from 'lucide-react';

interface AboutProps {
  aboutImage: string;
}

export function About({ aboutImage }: AboutProps) {
  const highlights = [
    {
      icon: Code2,
      title: 'Software Development',
      description: 'Building scalable applications with modern technologies',
    },
    {
      icon: Lightbulb,
      title: 'Problem Solving',
      description: 'Creating innovative solutions to complex challenges',
    },
    {
      icon: Rocket,
      title: 'Technology Innovation',
      description: 'Exploring cutting-edge tech and AI advancements',
    },
    {
      icon: Target,
      title: 'Systems Engineering',
      description: 'Designing robust systems and architectures',
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-900 to-black">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 font-medium mb-2 block">Get To Know Me</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative">
              {/* Glowing Border */}
              <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl opacity-30 blur-xl"></div>
              
              {/* Image Container with Glassmorphism */}
              <div className="relative bg-white/5 backdrop-blur-md border border-cyan-500/20 rounded-2xl p-4 overflow-hidden">
                <img
                  src={aboutImage}
                  alt="Developer Workspace"
                  className="w-full h-auto rounded-xl object-cover"
                />
                
                {/* Circuit Pattern Overlay */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-20">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <circle cx="50" cy="50" r="3" fill="#06b6d4" />
                    <line x1="50" y1="50" x2="80" y2="20" stroke="#06b6d4" strokeWidth="1" />
                    <circle cx="80" cy="20" r="2" fill="#06b6d4" />
                    <line x1="50" y1="50" x2="20" y2="80" stroke="#06b6d4" strokeWidth="1" />
                    <circle cx="20" cy="80" r="2" fill="#06b6d4" />
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 order-1 lg:order-2"
          >
            <h3 className="text-3xl font-bold text-white" style={{ color: 'rgb(255, 255, 255)' }}>
              Crafting Digital Experiences Through{' '}
              <span className="text-cyan-400" style={{ color: 'rgb(34, 211, 238)' }}>Innovation</span>
            </h3>

            <p className="text-gray-400 leading-relaxed" style={{ color: 'rgb(156, 163, 175)' }}>
              I'm a passionate software developer with a deep fascination for technology and innovation. My journey in
              software development began with a curiosity about how things work, which evolved into a commitment to
              building intelligent systems that make a difference.
            </p>

            <p className="text-gray-400 leading-relaxed" style={{ color: 'rgb(156, 163, 175)' }}>
              With expertise spanning full-stack development, artificial intelligence, and systems engineering, I thrive
              on solving complex problems and turning visionary ideas into reality. My work is driven by a constant
              pursuit of excellence and a desire to push the boundaries of what's possible with technology.
            </p>

            <p className="text-gray-400 leading-relaxed" style={{ color: 'rgb(156, 163, 175)' }}>
              When I'm not coding, you'll find me exploring the latest advancements in AI, contributing to open-source
              projects, or experimenting with emerging technologies like robotics and IoT.
            </p>

            {/* Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-4 pt-6">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-4 hover:border-cyan-500/40 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-white font-semibold mb-1" style={{ color: 'rgb(255, 255, 255)' }}>{item.title}</h4>
                  <p className="text-sm text-gray-400" style={{ color: 'rgb(156, 163, 175)' }}>{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
