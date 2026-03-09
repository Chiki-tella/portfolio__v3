import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export function TerminalEffect() {
  const [lines, setLines] = useState<string[]>([]);

  const terminalCommands = [
    '> Initializing developer profile...',
    '> Loading expertise modules...',
    '> Connected to innovation network',
    '> System status: OPTIMAL',
    '> Ready for collaboration',
  ];

  useEffect(() => {
    terminalCommands.forEach((command, index) => {
      setTimeout(() => {
        setLines((prev) => [...prev, command]);
      }, index * 800 + 1000);
    });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5 }}
      className="absolute bottom-8 left-4 md:left-8 z-20 max-w-md hidden lg:block"
    >
      <div className="bg-black/60 backdrop-blur-md border border-cyan-500/30 rounded-lg p-4 font-mono">
        <div className="flex items-center gap-2 mb-3 pb-2 border-b border-cyan-500/20">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <span className="text-xs text-gray-400 ml-2">TERMINAL v2.0</span>
        </div>
        <div className="space-y-1">
          {lines.map((line, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-xs text-cyan-400"
            >
              {line}
            </motion.div>
          ))}
          {lines.length > 0 && (
            <motion.div
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="text-xs text-cyan-400"
            >
              ▋
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
