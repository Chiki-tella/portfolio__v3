import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Clock, ArrowRight, ChevronDown, ChevronUp, X } from 'lucide-react';
import { useState } from 'react';

export function Blog() {
  const [expandedPosts, setExpandedPosts] = useState<Set<number>>(new Set());
  const [selectedPost, setSelectedPost] = useState<number | null>(null);

  const togglePost = (index: number) => {
    setExpandedPosts(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  const openFullArticle = (index: number) => {
    setSelectedPost(index);
    document.body.style.overflow = 'hidden';
  };

  const closeFullArticle = () => {
    setSelectedPost(null);
    document.body.style.overflow = 'unset';
  };

  const blogPosts = [
    {
      title: 'Building Scalable Microservices with Node.js',
      excerpt: 'Learn how to architect and deploy production-ready microservices that can handle millions of requests per day.',
      fullContent: `Microservices architecture has revolutionized how we build and deploy modern applications. In this comprehensive guide, we'll explore the principles and practices of building scalable microservices using Node.js.

## Why Microservices?

Microservices offer several advantages over monolithic architectures:
- Independent deployment and scaling
- Technology flexibility
- Fault isolation
- Easier maintenance and updates

## Architecture Principles

When designing microservices, follow these key principles:

1. **Single Responsibility**: Each service should do one thing well
2. **Loose Coupling**: Services should be independent
3. **High Cohesion**: Related functionality should be grouped together
4. **API Gateway Pattern**: Use a gateway to route requests

## Implementation with Node.js

Node.js is an excellent choice for microservices due to its:
- Non-blocking I/O model
- Rich ecosystem (npm)
- Easy horizontal scaling
- Great performance for I/O-bound operations

## Best Practices

- Use Docker for containerization
- Implement health checks and monitoring
- Use message queues for async communication
- Implement circuit breakers for resilience
- Use API versioning from the start

## Conclusion

Building microservices requires careful planning and adherence to best practices. With Node.js, you have a powerful platform to create scalable, maintainable services.`,
      date: 'March 5, 2026',
      readTime: '8 min read',
      category: 'Software Engineering',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800',
    },
    {
      title: 'The Future of AI in Software Development',
      excerpt: 'Exploring how artificial intelligence is transforming the way we write, test, and deploy code in modern applications.',
      fullContent: `Artificial Intelligence is no longer just a buzzword—it's actively reshaping how we approach software development. From code generation to automated testing, AI is becoming an indispensable tool in the developer's toolkit.

## AI-Powered Code Generation

Modern AI tools can:
- Generate boilerplate code instantly
- Suggest context-aware completions
- Refactor code intelligently
- Translate between programming languages

## Automated Testing and QA

AI is revolutionizing quality assurance:
- Automated test case generation
- Intelligent bug detection
- Performance optimization suggestions
- Security vulnerability scanning

## The Developer's Role

Rather than replacing developers, AI augments their capabilities:
- Focus on architecture and design
- Solve complex business problems
- Review and refine AI-generated code
- Make strategic technical decisions

## Challenges and Considerations

- Code quality and maintainability
- Understanding AI-generated code
- Security and privacy concerns
- Ethical implications

## Looking Ahead

The future of software development will be a collaboration between human creativity and AI efficiency. Developers who embrace these tools will be better positioned to build innovative solutions.`,
      date: 'March 1, 2026',
      readTime: '6 min read',
      category: 'AI & Technology',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800',
    },
    {
      title: 'Mastering React Performance Optimization',
      excerpt: 'Advanced techniques and best practices for building lightning-fast React applications that scale.',
      fullContent: `Performance is crucial for user experience. In this guide, we'll dive deep into React performance optimization techniques that will make your applications blazingly fast.

## Understanding React Rendering

Before optimizing, understand how React works:
- Virtual DOM reconciliation
- Component lifecycle
- Re-render triggers
- Batching updates

## Key Optimization Techniques

### 1. Memoization
Use React.memo, useMemo, and useCallback to prevent unnecessary re-renders.

### 2. Code Splitting
Implement lazy loading with React.lazy and Suspense to reduce initial bundle size.

### 3. Virtualization
For long lists, use libraries like react-window or react-virtualized.

### 4. State Management
- Keep state as local as possible
- Use context wisely
- Consider state management libraries for complex apps

## Measuring Performance

Tools for performance analysis:
- React DevTools Profiler
- Chrome DevTools Performance tab
- Lighthouse audits
- Web Vitals metrics

## Common Pitfalls

- Inline function definitions in JSX
- Creating objects in render
- Not using keys properly in lists
- Over-optimization

## Conclusion

Performance optimization is an ongoing process. Profile first, optimize second, and always measure the impact of your changes.`,
      date: 'February 28, 2026',
      readTime: '10 min read',
      category: 'Web Development',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800',
    },
    {
      title: 'IoT and Edge Computing: A Complete Guide',
      excerpt: 'Understanding the intersection of IoT devices and edge computing for building next-generation smart systems.',
      fullContent: `The convergence of IoT and edge computing is creating unprecedented opportunities for building intelligent, responsive systems. This guide explores how these technologies work together.

## What is Edge Computing?

Edge computing brings computation and data storage closer to the devices where it's needed:
- Reduced latency
- Lower bandwidth usage
- Improved privacy and security
- Offline capability

## IoT Architecture

Modern IoT systems consist of:
- Sensors and actuators
- Edge devices and gateways
- Cloud infrastructure
- Analytics and AI layers

## Use Cases

### Smart Homes
- Automated climate control
- Security systems
- Energy management

### Industrial IoT
- Predictive maintenance
- Quality control
- Supply chain optimization

### Smart Cities
- Traffic management
- Waste management
- Public safety

## Technical Challenges

- Device management at scale
- Security and authentication
- Data synchronization
- Power consumption

## Development Tools

- MQTT for messaging
- Docker for containerization
- Kubernetes for orchestration
- TensorFlow Lite for edge AI

## Future Trends

The future of IoT and edge computing includes 5G integration, AI at the edge, and increased standardization across platforms.`,
      date: 'February 25, 2026',
      readTime: '12 min read',
      category: 'IoT & Robotics',
      image: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=800',
    },
    {
      title: 'TypeScript Best Practices for Large Applications',
      excerpt: 'Essential patterns and practices for maintaining type safety and code quality in enterprise TypeScript projects.',
      fullContent: `TypeScript has become the de facto standard for large-scale JavaScript applications. This guide covers best practices for leveraging TypeScript's full potential in enterprise projects.

## Type System Fundamentals

Master these core concepts:
- Interfaces vs Types
- Generics and constraints
- Union and intersection types
- Type guards and narrowing

## Project Structure

Organize your TypeScript project:
- Strict tsconfig settings
- Path aliases for imports
- Separate types directory
- Consistent naming conventions

## Advanced Patterns

### Utility Types
Leverage built-in utility types like Partial, Pick, Omit, and Record.

### Discriminated Unions
Use discriminated unions for type-safe state management.

### Branded Types
Create nominal types for better type safety.

## Error Handling

- Use custom error types
- Implement Result types
- Avoid any and unknown abuse
- Proper async error handling

## Testing

- Type-safe test utilities
- Mock types properly
- Test type definitions
- Use type assertions wisely

## Performance Considerations

- Incremental compilation
- Project references
- Build optimization
- Type checking in CI/CD

## Conclusion

TypeScript's type system is powerful when used correctly. Follow these practices to build maintainable, scalable applications.`,
      date: 'February 20, 2026',
      readTime: '7 min read',
      category: 'Programming',
      image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800',
    },
    {
      title: 'Building Real-Time Applications with WebSockets',
      excerpt: 'A comprehensive tutorial on implementing real-time features in modern web applications using WebSocket technology.',
      fullContent: `Real-time communication is essential for modern web applications. WebSockets provide a full-duplex communication channel that's perfect for building interactive, real-time features.

## Understanding WebSockets

WebSockets differ from HTTP:
- Persistent connection
- Bidirectional communication
- Lower latency
- Reduced overhead

## When to Use WebSockets

Ideal use cases:
- Chat applications
- Live notifications
- Collaborative editing
- Real-time dashboards
- Gaming applications

## Implementation

### Server-Side
Popular libraries:
- Socket.io (Node.js)
- ws (lightweight)
- uWebSockets (high performance)

### Client-Side
Browser WebSocket API or Socket.io client for enhanced features.

## Best Practices

### Connection Management
- Implement reconnection logic
- Handle connection errors gracefully
- Use heartbeat/ping-pong

### Security
- Use WSS (WebSocket Secure)
- Implement authentication
- Validate all messages
- Rate limiting

### Scalability
- Use Redis for pub/sub
- Implement sticky sessions
- Consider message queues
- Horizontal scaling strategies

## Alternatives

When WebSockets might not be the best choice:
- Server-Sent Events (SSE) for one-way communication
- Long polling for broader compatibility
- HTTP/2 Server Push

## Conclusion

WebSockets are powerful for real-time features. Choose the right tool for your use case and implement proper error handling and security measures.`,
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
                  <div className="flex items-center gap-4 text-xs text-gray-400 mb-3" style={{ color: 'rgb(156, 163, 175)' }}>
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
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors line-clamp-2" style={{ color: 'rgb(255, 255, 255)' }}>
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className={`text-sm text-gray-400 mb-4 flex-1 ${expandedPosts.has(index) ? '' : 'line-clamp-3'}`} style={{ color: 'rgb(156, 163, 175)' }}>
                    {post.excerpt}
                  </p>

                  {/* Read More Toggle */}
                  <button
                    onClick={() => togglePost(index)}
                    className="flex items-center gap-1 text-xs text-cyan-400 hover:text-cyan-300 transition-colors mb-3 font-medium"
                    style={{ color: 'rgb(34, 211, 238)' }}
                  >
                    {expandedPosts.has(index) ? (
                      <>
                        <span>Show Less</span>
                        <ChevronUp className="w-3 h-3" />
                      </>
                    ) : (
                      <>
                        <span>Read More</span>
                        <ChevronDown className="w-3 h-3" />
                      </>
                    )}
                  </button>

                  {/* Read More Link */}
                  <button
                    onClick={() => openFullArticle(index)}
                    className="flex items-center gap-2 text-cyan-400 font-medium text-sm group-hover:gap-3 transition-all"
                    style={{ color: 'rgb(34, 211, 238)' }}
                  >
                    <span>View Full Article</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
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

      {/* Full Article Modal */}
      <AnimatePresence>
        {selectedPost !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={closeFullArticle}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl max-h-[90vh] bg-gradient-to-br from-slate-900 to-black border border-cyan-500/30 rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeFullArticle}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-cyan-500/20 backdrop-blur-sm border border-cyan-500/40 rounded-lg flex items-center justify-center hover:bg-cyan-500/30 transition-all group"
              >
                <X className="w-5 h-5 text-cyan-400 group-hover:rotate-90 transition-transform duration-300" />
              </button>

              {/* Scrollable Content */}
              <div className="overflow-y-auto max-h-[90vh] custom-scrollbar">
                {/* Header Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={blogPosts[selectedPost].image}
                    alt={blogPosts[selectedPost].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full">
                    <span className="text-xs text-white font-medium">{blogPosts[selectedPost].category}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  {/* Meta Info */}
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-4" style={{ color: 'rgb(156, 163, 175)' }}>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{blogPosts[selectedPost].date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{blogPosts[selectedPost].readTime}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" style={{ color: 'rgb(255, 255, 255)' }}>
                    {blogPosts[selectedPost].title}
                  </h2>

                  {/* Full Content */}
                  <div className="prose prose-invert prose-cyan max-w-none">
                    {blogPosts[selectedPost].fullContent?.split('\n\n').map((paragraph, idx) => {
                      // Handle headings
                      if (paragraph.startsWith('## ')) {
                        return (
                          <h2 key={idx} className="text-2xl font-bold text-cyan-400 mt-8 mb-4" style={{ color: 'rgb(34, 211, 238)' }}>
                            {paragraph.replace('## ', '')}
                          </h2>
                        );
                      }
                      if (paragraph.startsWith('### ')) {
                        return (
                          <h3 key={idx} className="text-xl font-bold text-white mt-6 mb-3" style={{ color: 'rgb(255, 255, 255)' }}>
                            {paragraph.replace('### ', '')}
                          </h3>
                        );
                      }
                      // Handle list items
                      if (paragraph.startsWith('- ')) {
                        const items = paragraph.split('\n');
                        return (
                          <ul key={idx} className="list-disc list-inside space-y-2 mb-4 text-gray-300" style={{ color: 'rgb(209, 213, 219)' }}>
                            {items.map((item, itemIdx) => (
                              <li key={itemIdx}>{item.replace('- ', '')}</li>
                            ))}
                          </ul>
                        );
                      }
                      // Regular paragraphs
                      return (
                        <p key={idx} className="text-gray-300 leading-relaxed mb-4" style={{ color: 'rgb(209, 213, 219)' }}>
                          {paragraph}
                        </p>
                      );
                    })}
                  </div>

                  {/* Footer Actions */}
                  <div className="mt-8 pt-6 border-t border-cyan-500/20 flex gap-4">
                    <button className="flex-1 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-cyan-500/50 transition-all">
                      Share Article
                    </button>
                    <button className="flex-1 px-6 py-3 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 rounded-lg font-medium hover:bg-cyan-500/20 transition-all">
                      Save for Later
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
