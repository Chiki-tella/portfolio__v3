import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export function HUDElements() {
  const [time, setTime] = useState(new Date());
  const [stats] = useState({
    cpu: Math.floor(Math.random() * 30 + 20),
    memory: Math.floor(Math.random() * 40 + 30),
    network: Math.floor(Math.random() * 50 + 40),
  });

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* Top Left Corner HUD */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
        className="absolute top-24 left-4 md:left-8 z-20 hidden md:block"
      >
        <div className="bg-black/40 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-3 space-y-2">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-xs text-cyan-400 font-mono">SYSTEM ONLINE</span>
          </div>
          <div className="text-xs text-gray-400 font-mono">
            {time.toLocaleTimeString('en-US', { hour12: false })}
          </div>
        </div>
      </motion.div>

      {/* Top Right Corner HUD */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6 }}
        className="absolute top-24 right-4 md:right-8 z-20 hidden md:block"
      >
        <div className="bg-black/40 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-3 space-y-2 min-w-[150px]">
          <div className="flex justify-between items-center">
            <span className="text-xs text-gray-400 font-mono">CPU</span>
            <span className="text-xs text-cyan-400 font-mono">{stats.cpu}%</span>
          </div>
          <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${stats.cpu}%` }}
              transition={{ delay: 0.8, duration: 1 }}
              className="h-full bg-gradient-to-r from-cyan-500 to-blue-500"
            />
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xs text-gray-400 font-mono">RAM</span>
            <span className="text-xs text-cyan-400 font-mono">{stats.memory}%</span>
          </div>
          <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${stats.memory}%` }}
              transition={{ delay: 0.9, duration: 1 }}
              className="h-full bg-gradient-to-r from-cyan-500 to-blue-500"
            />
          </div>
        </div>
      </motion.div>

      {/* Corner Brackets - Top Left */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="absolute top-20 left-0 w-32 h-32 pointer-events-none"
      >
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <path
            d="M 30 0 L 0 0 L 0 30"
            stroke="url(#gradient)"
            strokeWidth="2"
            fill="none"
            className="animate-pulse"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="1" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      {/* Corner Brackets - Top Right */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="absolute top-20 right-0 w-32 h-32 pointer-events-none"
      >
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <path
            d="M 70 0 L 100 0 L 100 30"
            stroke="#06b6d4"
            strokeWidth="2"
            fill="none"
            opacity="0.8"
            className="animate-pulse"
          />
        </svg>
      </motion.div>

      {/* Bottom Corner Brackets - Left */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="absolute bottom-20 left-0 w-32 h-32 pointer-events-none hidden md:block"
      >
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <path
            d="M 0 70 L 0 100 L 30 100"
            stroke="#06b6d4"
            strokeWidth="2"
            fill="none"
            opacity="0.8"
            className="animate-pulse"
          />
        </svg>
      </motion.div>

      {/* Bottom Corner Brackets - Right */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="absolute bottom-20 right-0 w-32 h-32 pointer-events-none hidden md:block"
      >
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <path
            d="M 100 70 L 100 100 L 70 100"
            stroke="#06b6d4"
            strokeWidth="2"
            fill="none"
            opacity="0.8"
            className="animate-pulse"
          />
        </svg>
      </motion.div>

      {/* Scanlines Effect */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, #06b6d4 2px, #06b6d4 4px)',
          }}
        />
      </div>
    </>
  );
}
