import { motion } from 'motion/react';
import { ExternalLink, Github, Sparkles } from 'lucide-react';

interface ProjectsProps {
  projectImages: string[];
}

export function Projects({ projectImages }: ProjectsProps) {
  const projects = [
    {
      title: 'AI-Powered Analytics Dashboard',
      description: 'A comprehensive analytics platform with machine learning insights, real-time data visualization, and predictive analytics.',
      image: projectImages[0],
      technologies: ['React', 'TensorFlow', 'Node.js', 'MongoDB'],
      category: 'Web Application',
      featured: true,
    },
    {
      title: 'Smart IoT Home System',
      description: 'Intelligent home automation system with voice control, energy optimization, and mobile app integration.',
      image: projectImages[1],
      technologies: ['React Native', 'Arduino', 'Firebase', 'MQTT'],
      category: 'IoT',
      featured: true,
    },
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.',
      image: projectImages[2],
      technologies: ['Next.js', 'PostgreSQL', 'Stripe', 'AWS'],
      category: 'Web Application',
      featured: false,
    },
    {
      title: 'Real-Time Chat Application',
      description: 'Scalable messaging platform with end-to-end encryption, file sharing, and video calling features.',
      image: projectImages[0],
      technologies: ['WebSocket', 'Redis', 'React', 'Express'],
      category: 'Web Application',
      featured: false,
    },
    {
      title: 'Computer Vision System',
      description: 'Object detection and tracking system for surveillance and security applications using deep learning.',
      image: projectImages[1],
      technologies: ['Python', 'OpenCV', 'YOLO', 'Flask'],
      category: 'AI/ML',
      featured: true,
    },
    {
      title: 'Task Management Tool',
      description: 'Collaborative project management platform with Kanban boards, time tracking, and team analytics.',
      image: projectImages[2],
      technologies: ['React', 'GraphQL', 'Node.js', 'MongoDB'],
      category: 'Web Application',
      featured: false,
    },
  ];

  return (
    <section id="projects" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-900 to-black">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0ea5e920_1px,transparent_1px),linear-gradient(to_bottom,#0ea5e920_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>

      {/* Glowing Orb */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 font-medium mb-2 block">My Work</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              {/* Card */}
              <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-md border border-cyan-500/20 rounded-2xl overflow-hidden hover:border-cyan-500/40 transition-all duration-300 relative">
                {/* Scan Line Effect */}
                <motion.div
                  className="absolute inset-0 h-1 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent opacity-0 group-hover:opacity-100"
                  animate={{ y: ['0%', '100%'] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                />
                
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  
                  {/* Hexagonal overlay pattern */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 0 L15 5 L15 15 L10 20 L5 15 L5 5 Z' fill='none' stroke='%2306b6d4' stroke-width='0.5'/%3E%3C/svg%3E")`,
                    }}
                  ></div>
                  
                  {/* Featured Badge */}
                  {project.featured && (
                    <motion.div 
                      initial={{ x: -100 }}
                      whileInView={{ x: 0 }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                      className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center gap-1"
                    >
                      <Sparkles className="w-3 h-3 text-white" />
                      <span className="text-xs text-white font-medium">Featured</span>
                    </motion.div>
                  )}

                  {/* Category */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-black/50 backdrop-blur-sm border border-cyan-500/30 rounded-full">
                    <span className="text-xs text-cyan-400 font-medium">{project.category}</span>
                  </div>

                  {/* Action Buttons */}
                  <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.button 
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 bg-cyan-500/20 backdrop-blur-sm border border-cyan-500/40 rounded-lg flex items-center justify-center hover:bg-cyan-500/30 transition-all relative group/btn"
                    >
                      <ExternalLink className="w-5 h-5 text-cyan-400" />
                      <div className="absolute inset-0 bg-cyan-500/20 rounded-lg blur opacity-0 group-hover/btn:opacity-100 transition-opacity"></div>
                    </motion.button>
                    <motion.button 
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 bg-cyan-500/20 backdrop-blur-sm border border-cyan-500/40 rounded-lg flex items-center justify-center hover:bg-cyan-500/30 transition-all relative group/btn"
                    >
                      <Github className="w-5 h-5 text-cyan-400" />
                      <div className="absolute inset-0 bg-cyan-500/20 rounded-lg blur opacity-0 group-hover/btn:opacity-100 transition-opacity"></div>
                    </motion.button>
                  </div>
                  
                  {/* Corner Indicators */}
                  <div className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-cyan-400/50"></div>
                  <div className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-cyan-400/50"></div>
                </div>

                {/* Content */}
                <div className="p-6 relative">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors flex items-center gap-2">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-400 mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + techIndex * 0.05 }}
                        className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-xs text-cyan-400 hover:bg-cyan-500/20 hover:border-cyan-500/40 transition-all cursor-default"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 rounded-2xl blur-xl"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="px-8 py-4 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 backdrop-blur-sm border border-cyan-500/30 text-cyan-400 rounded-lg font-medium hover:border-cyan-500/50 hover:bg-cyan-500/20 transition-all duration-300 group">
            View All Projects
            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}