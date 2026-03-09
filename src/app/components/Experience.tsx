import { motion } from 'motion/react';
import { Briefcase, Award, Trophy, Rocket } from 'lucide-react';

export function Experience() {
  const experiences = [
    {
      icon: Briefcase,
      year: '2023 - Present',
      title: 'Senior Software Developer',
      organization: 'Tech Innovations Inc.',
      description: 'Leading development of AI-powered applications and microservices architecture. Mentoring junior developers and establishing best practices.',
      achievements: ['Improved system performance by 40%', 'Led team of 5 developers', 'Implemented CI/CD pipeline'],
      color: 'from-cyan-500 to-blue-600',
    },
    {
      icon: Rocket,
      year: '2022 - 2023',
      title: 'Full Stack Developer',
      organization: 'MineLynx Technologies Co.',
      description: 'Developed responsive web applications using React and Node.js. Collaborated with cross-functional teams to deliver high-quality products.',
      achievements: ['Built 10+ production applications', 'Reduced load time by 50%', 'Integrated third-party APIs'],
      color: 'from-blue-500 to-purple-600',
    },
    {
      icon: Trophy,
      year: '2021',
      title: 'National Robotics Competition',
      organization: 'RoboTech Championship',
      description: 'Won 1st place in autonomous robot navigation category. Designed and programmed an intelligent robot with computer vision capabilities.',
      achievements: ['1st Place Winner', 'Computer Vision Implementation', 'Autonomous Navigation'],
      color: 'from-purple-500 to-pink-600',
    },
    {
      icon: Award,
      year: '2021',
      title: 'STEM Innovation Camp',
      organization: 'Tech Academy',
      description: 'Participated in intensive 8-week program focused on AI, machine learning, and software engineering principles.',
      achievements: ['Built ML prediction model', 'Collaborated with 50+ students', 'Presented final project'],
      color: 'from-cyan-500 to-teal-600',
    },
    {
      icon: Briefcase,
      year: '2020 - 2021',
      title: 'Software Development Intern',
      organization: 'StartUp Labs',
      description: 'Assisted in developing mobile applications and RESTful APIs. Gained hands-on experience with agile development methodologies.',
      achievements: ['Contributed to 3 major projects', 'Fixed 100+ bugs', 'Improved code quality'],
      color: 'from-blue-500 to-cyan-600',
    },
    {
      icon: Award,
      year: '2020',
      title: 'Hackathon Winner',
      organization: 'CodeFest 2020',
      description: 'Won Best Innovation Award for developing a real-time collaborative coding platform in 24 hours.',
      achievements: ['Best Innovation Award', '24-hour development sprint', 'Team collaboration'],
      color: 'from-purple-500 to-blue-600',
    },
  ];

  return (
    <section id="experience" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-900 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(0,0,0,0))]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 font-medium mb-2 block">My Journey</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Experience & <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Achievements</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500/50 via-blue-500/50 to-purple-500/50 transform -translate-x-1/2"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title + exp.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative grid lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 0 ? '' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Left/Right Content */}
                <div className={index % 2 === 0 ? 'lg:text-right lg:pr-12' : 'lg:col-start-2 lg:pl-12'}>
                  <div className="inline-block lg:block">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-md border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-500/40 transition-all duration-300 group"
                    >
                      {/* Header */}
                      <div className={`flex items-start gap-4 mb-4 ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                        <div className={`w-14 h-14 bg-gradient-to-br ${exp.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                          <exp.icon className="w-7 h-7 text-white" />
                        </div>
                        <div className={index % 2 === 0 ? 'lg:text-right' : ''}>
                          <div className="text-sm font-medium text-cyan-400 mb-1">{exp.year}</div>
                          <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                          <p className="text-sm text-gray-400">{exp.organization}</p>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-400 mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <div className="space-y-2">
                        {exp.achievements.map((achievement) => (
                          <div
                            key={achievement}
                            className={`flex items-center gap-2 text-sm ${
                              index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                            }`}
                          >
                            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full flex-shrink-0"></div>
                            <span className="text-gray-300">{achievement}</span>
                          </div>
                        ))}
                      </div>

                      {/* Glowing Border on Hover */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                        <div className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-10 rounded-2xl blur-xl`}></div>
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Center Icon */}
                <div className="hidden lg:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                    className={`w-16 h-16 bg-gradient-to-br ${exp.color} rounded-full flex items-center justify-center border-4 border-black shadow-lg`}
                  >
                    <exp.icon className="w-7 h-7 text-white" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
