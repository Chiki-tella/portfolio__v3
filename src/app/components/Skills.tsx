import { motion } from 'motion/react';
import { 
  Code2, 
  Database, 
  Globe, 
  Cpu, 
  Brain, 
  Blocks,
  Smartphone,
  Cloud
} from 'lucide-react';

export function Skills() {
  const skillCategories = [
    {
      icon: Code2,
      title: 'Languages',
      skills: [
        { name: 'JavaScript', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Python', level: 88 },
        { name: 'C / C++', level: 82 },
      ],
    },
    {
      icon: Globe,
      title: 'Web Development',
      skills: [
        { name: 'React', level: 95 },
        { name: 'Node.js', level: 90 },
        { name: 'Next.js', level: 87 },
        { name: 'Tailwind CSS', level: 93 },
      ],
    },
    {
      icon: Database,
      title: 'Databases',
      skills: [
        { name: 'MongoDB', level: 88 },
        { name: 'PostgreSQL', level: 85 },
        { name: 'Redis', level: 80 },
        { name: 'Firebase', level: 83 },
      ],
    },
    {
      icon: Brain,
      title: 'AI & ML',
      skills: [
        { name: 'TensorFlow', level: 82 },
        { name: 'PyTorch', level: 80 },
        { name: 'Scikit-learn', level: 85 },
        { name: 'OpenAI API', level: 88 },
      ],
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      skills: [
        { name: 'AWS', level: 85 },
        { name: 'Docker', level: 87 },
        { name: 'Kubernetes', level: 78 },
        { name: 'CI/CD', level: 82 },
      ],
    },
    {
      icon: Smartphone,
      title: 'Mobile & IoT',
      skills: [
        { name: 'React Native', level: 85 },
        { name: 'Flutter', level: 75 },
        { name: 'Arduino', level: 80 },
        { name: 'Raspberry Pi', level: 83 },
      ],
    },
    {
      icon: Blocks,
      title: 'Tools & Others',
      skills: [
        { name: 'Git', level: 92 },
        { name: 'VS Code', level: 95 },
        { name: 'Figma', level: 85 },
        { name: 'Linux', level: 87 },
      ],
    },
    {
      icon: Cpu,
      title: 'Systems',
      skills: [
        { name: 'Microservices', level: 85 },
        { name: 'REST APIs', level: 93 },
        { name: 'GraphQL', level: 82 },
        { name: 'WebSockets', level: 80 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-900 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(6,182,212,0.15),rgba(0,0,0,0))]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 font-medium mb-2 block">What I Do</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Skills & <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Technologies</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-md border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-500/40 transition-all duration-300 group relative overflow-hidden"
            >
              {/* Animated Background on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Glowing Corner Effect */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-cyan-500/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6 relative z-10">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 relative">
                  <category.icon className="w-6 h-6 text-white" />
                  {/* Rotating ring around icon */}
                  <motion.div
                    className="absolute -inset-1 border-2 border-cyan-400/30 rounded-lg"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                  />
                </div>
                <h3 className="text-lg font-semibold text-white">{category.title}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4 relative z-10">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-300">{skill.name}</span>
                      <span className="text-xs text-cyan-400 font-medium font-mono">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden relative">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05, duration: 0.8 }}
                        className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full relative"
                      >
                        <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
                        {/* Moving shine effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                          animate={{ x: ['-100%', '200%'] }}
                          transition={{ duration: 2, repeat: Infinity, ease: 'linear', delay: skillIndex * 0.2 }}
                        />
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Corner Brackets */}
              <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-cyan-500/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-cyan-500/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 max-w-3xl mx-auto">
            Continuously learning and adapting to emerging technologies. Focused on building scalable,
            efficient, and innovative solutions that make a real-world impact.
          </p>
        </motion.div>
      </div>
    </section>
  );
}