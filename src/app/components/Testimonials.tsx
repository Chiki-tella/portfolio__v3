import { motion, AnimatePresence } from 'motion/react';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const testimonials = [
    {
      name: 'Ganwa Anne Laure',
      role: 'Collaborator',
      image: 'https://ui-avatars.com/api/?name=Ganwa+Anne+Laure&background=06b6d4&color=fff&size=200',
      rating: 5,
      text: 'Working with Christella has been an absolute pleasure. Her attention to detail and innovative approach to problem-solving consistently delivers exceptional results. She brings creativity and technical excellence to every project.',
      company: 'Tech Innovations',
    },
    {
      name: 'Mpuhwe Divine Nikita',
      role: 'Frontend Developer',
      image: 'https://ui-avatars.com/api/?name=Mpuhwe+Divine&background=2563eb&color=fff&size=200',
      rating: 5,
      text: 'Christella\'s expertise in full-stack development is remarkable. She has an incredible ability to transform complex requirements into elegant, user-friendly solutions. Her code quality and architectural decisions are top-notch.',
      company: 'Digital Solutions',
    },
    {
      name: 'Irakoze Mukama Zion',
      role: 'Backend Developer',
      image: 'https://ui-avatars.com/api/?name=Irakoze+Mukama&background=8b5cf6&color=fff&size=200',
      rating: 5,
      text: 'I\'ve had the privilege of collaborating with Christella on multiple projects. Her technical skills are matched only by her professionalism and dedication. She consistently goes above and beyond to ensure project success.',
      company: 'Cloud Systems',
    },
    {
      name: 'Izere Joshua',
      role: 'CEO of Nox',
      image: 'https://ui-avatars.com/api/?name=Izere+Joshua&background=ec4899&color=fff&size=200',
      rating: 5,
      text: 'Christella is a rare talent who combines technical prowess with excellent communication skills. She delivered our project ahead of schedule and exceeded all expectations. I highly recommend her for any development work.',
      company: 'Nox Technologies',
    },
    {
      name: 'Irakoze Murasira Berard',
      role: 'Cybersecurity Expert',
      image: 'https://ui-avatars.com/api/?name=Irakoze+Berard&background=10b981&color=fff&size=200',
      rating: 5,
      text: 'Security-conscious and detail-oriented, Christella builds applications with best practices in mind. Her understanding of secure coding principles and modern development practices makes her an invaluable team member.',
      company: 'SecureNet Solutions',
    },
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(() => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [isPaused, testimonials.length]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      rotateY: direction > 0 ? 45 : -45,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      rotateY: direction < 0 ? 45 : -45,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => {
      const next = prev + newDirection;
      if (next < 0) return testimonials.length - 1;
      if (next >= testimonials.length) return 0;
      return next;
    });
  };

  return (
    <section id="testimonials" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-900 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(0,0,0,0))]"></div>
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 font-medium mb-2 block">What People Say</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Client <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Testimonials</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Trusted by developers, designers, and business leaders worldwide
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div 
          className="relative max-w-5xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Main Card */}
          <div className="relative h-[500px] md:h-[400px] perspective-1000">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: 'spring', stiffness: 300, damping: 30 },
                  opacity: { duration: 0.3 },
                  scale: { duration: 0.3 },
                  rotateY: { duration: 0.4 },
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);
                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
                className="absolute w-full"
              >
                <div className="relative bg-gradient-to-br from-white/10 to-white/[0.02] backdrop-blur-xl border border-cyan-500/30 rounded-3xl p-8 md:p-12 overflow-hidden group hover:border-cyan-500/50 transition-all duration-300">
                  {/* Glowing effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Quote icon */}
                  <motion.div
                    animate={{ rotate: [0, 5, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute top-8 right-8 w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-full flex items-center justify-center"
                  >
                    <Quote className="w-10 h-10 text-cyan-400" />
                  </motion.div>

                  <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center md:items-start">
                    {/* Avatar */}
                    <motion.div
                      whileHover={{ scale: 1.05, rotate: 5 }}
                      className="relative flex-shrink-0"
                    >
                      <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full blur-lg opacity-50"></div>
                      <img
                        src={testimonials[currentIndex].image}
                        alt={testimonials[currentIndex].name}
                        className="relative w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-cyan-500/30 object-cover"
                      />
                      {/* Status indicator */}
                      <div className="absolute bottom-2 right-2 w-4 h-4 bg-green-500 rounded-full border-2 border-black"></div>
                    </motion.div>

                    {/* Content */}
                    <div className="flex-1 text-center md:text-left">
                      {/* Stars */}
                      <div className="flex gap-1 mb-4 justify-center md:justify-start">
                        {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                          >
                            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                          </motion.div>
                        ))}
                      </div>

                      {/* Testimonial text */}
                      <p className="text-gray-300 text-lg leading-relaxed mb-6" style={{ color: 'rgb(209, 213, 219)' }}>
                        "{testimonials[currentIndex].text}"
                      </p>

                      {/* Author info */}
                      <div>
                        <h4 className="text-xl font-bold text-white mb-1" style={{ color: 'rgb(255, 255, 255)' }}>
                          {testimonials[currentIndex].name}
                        </h4>
                        <p className="text-cyan-400 font-medium mb-1" style={{ color: 'rgb(34, 211, 238)' }}>
                          {testimonials[currentIndex].role}
                        </p>
                        <p className="text-sm text-gray-400" style={{ color: 'rgb(156, 163, 175)' }}>
                          {testimonials[currentIndex].company}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-cyan-500/10 to-transparent rounded-tl-3xl"></div>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-br-3xl"></div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => paginate(-1)}
              className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 backdrop-blur-sm border border-cyan-500/30 rounded-full flex items-center justify-center hover:border-cyan-500/50 transition-all group"
            >
              <ChevronLeft className="w-6 h-6 text-cyan-400 group-hover:text-cyan-300" />
            </motion.button>

            {/* Dots indicator */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'w-8 bg-gradient-to-r from-cyan-500 to-blue-600'
                      : 'w-2 bg-gray-600 hover:bg-gray-500'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => paginate(1)}
              className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 backdrop-blur-sm border border-cyan-500/30 rounded-full flex items-center justify-center hover:border-cyan-500/50 transition-all group"
            >
              <ChevronRight className="w-6 h-6 text-cyan-400 group-hover:text-cyan-300" />
            </motion.button>
          </div>

          {/* Auto-play indicator */}
          {!isPaused && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center mt-4"
            >
              <p className="text-xs text-gray-500">
                Auto-rotating • Hover to pause
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
