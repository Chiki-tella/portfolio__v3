import { motion } from 'motion/react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

export function Blog() {
  const blogPosts = [
    {
      title: 'Building Scalable Microservices with Node.js',
      excerpt: 'Learn how to architect and deploy production-ready microservices that can handle millions of requests per day.',
      date: 'March 5, 2026',
      readTime: '8 min read',
      category: 'Software Engineering',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800',
    },
    {
      title: 'The Future of AI in Software Development',
      excerpt: 'Exploring how artificial intelligence is transforming the way we write, test, and deploy code in modern applications.',
      date: 'March 1, 2026',
      readTime: '6 min read',
      category: 'AI & Technology',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800',
    },
    {
      title: 'Mastering React Performance Optimization',
      excerpt: 'Advanced techniques and best practices for building lightning-fast React applications that scale.',
      date: 'February 28, 2026',
      readTime: '10 min read',
      category: 'Web Development',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800',
    },
    {
      title: 'IoT and Edge Computing: A Complete Guide',
      excerpt: 'Understanding the intersection of IoT devices and edge computing for building next-generation smart systems.',
      date: 'February 25, 2026',
      readTime: '12 min read',
      category: 'IoT & Robotics',
      image: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=800',
    },
    {
      title: 'TypeScript Best Practices for Large Applications',
      excerpt: 'Essential patterns and practices for maintaining type safety and code quality in enterprise TypeScript projects.',
      date: 'February 20, 2026',
      readTime: '7 min read',
      category: 'Programming',
      image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800',
    },
    {
      title: 'Building Real-Time Applications with WebSockets',
      excerpt: 'A comprehensive tutorial on implementing real-time features in modern web applications using WebSocket technology.',
      date: 'February 15, 2026',
      readTime: '9 min read',
      category: 'Web Development',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
    },
  ];

  return (
    <section id="blog" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-900 to-black">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0ea5e915_1px,transparent_1px),linear-gradient(to_bottom,#0ea5e915_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>

      {/* Glowing Orb */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 font-medium mb-2 block">Latest Articles</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Blog & <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Insights</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Thoughts on technology, software engineering, and innovation
          </p>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-md border border-cyan-500/20 rounded-2xl overflow-hidden hover:border-cyan-500/40 transition-all duration-300 h-full flex flex-col">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full">
                    <span className="text-xs text-white font-medium">{post.category}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  {/* Meta Info */}
                  <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-sm text-gray-400 mb-4 line-clamp-3 flex-1">
                    {post.excerpt}
                  </p>

                  {/* Read More Link */}
                  <div className="flex items-center gap-2 text-cyan-400 font-medium text-sm group-hover:gap-3 transition-all">
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-600/5 rounded-2xl blur-xl"></div>
                </div>
              </div>
            </motion.article>
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
            View All Articles
            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
