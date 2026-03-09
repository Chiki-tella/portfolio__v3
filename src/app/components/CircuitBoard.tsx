import { motion } from 'motion/react';

export function CircuitBoard() {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
      <svg className="w-full h-full" viewBox="0 0 1000 1000">
        {/* Horizontal Lines */}
        <motion.line
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          x1="0"
          y1="200"
          x2="400"
          y2="200"
          stroke="#06b6d4"
          strokeWidth="2"
        />
        <motion.circle cx="400" cy="200" r="6" fill="#06b6d4">
          <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
        </motion.circle>

        <motion.line
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 0.7 }}
          x1="600"
          y1="300"
          x2="1000"
          y2="300"
          stroke="#06b6d4"
          strokeWidth="2"
        />
        <motion.circle cx="600" cy="300" r="6" fill="#06b6d4">
          <animate attributeName="opacity" values="0.5;1;0.5" dur="2.5s" repeatCount="indefinite" />
        </motion.circle>

        {/* Vertical Lines */}
        <motion.line
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 0.6 }}
          x1="300"
          y1="0"
          x2="300"
          y2="400"
          stroke="#06b6d4"
          strokeWidth="2"
        />
        <motion.circle cx="300" cy="400" r="6" fill="#06b6d4">
          <animate attributeName="opacity" values="0.5;1;0.5" dur="1.8s" repeatCount="indefinite" />
        </motion.circle>

        <motion.line
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 0.8 }}
          x1="800"
          y1="500"
          x2="800"
          y2="1000"
          stroke="#06b6d4"
          strokeWidth="2"
        />
        <motion.circle cx="800" cy="500" r="6" fill="#06b6d4">
          <animate attributeName="opacity" values="0.5;1;0.5" dur="2.2s" repeatCount="indefinite" />
        </motion.circle>

        {/* Diagonal Lines */}
        <motion.line
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 0.9 }}
          x1="100"
          y1="600"
          x2="500"
          y2="800"
          stroke="#06b6d4"
          strokeWidth="2"
        />
        <motion.circle cx="100" cy="600" r="6" fill="#06b6d4">
          <animate attributeName="opacity" values="0.5;1;0.5" dur="1.5s" repeatCount="indefinite" />
        </motion.circle>

        {/* Circuit Nodes */}
        <motion.circle
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.5 }}
          cx="700"
          cy="700"
          r="8"
          fill="none"
          stroke="#06b6d4"
          strokeWidth="2"
        >
          <animate attributeName="r" values="8;12;8" dur="2s" repeatCount="indefinite" />
        </motion.circle>

        <motion.circle
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.6 }}
          cx="200"
          cy="400"
          r="8"
          fill="none"
          stroke="#3b82f6"
          strokeWidth="2"
        >
          <animate attributeName="r" values="8;12;8" dur="2.3s" repeatCount="indefinite" />
        </motion.circle>

        {/* Data Flow Particles */}
        <motion.circle cx="0" cy="200" r="4" fill="#06b6d4">
          <animate attributeName="cx" values="0;400" dur="3s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0;1;0" dur="3s" repeatCount="indefinite" />
        </motion.circle>

        <motion.circle cx="600" cy="300" r="4" fill="#3b82f6">
          <animate attributeName="cx" values="600;1000" dur="3.5s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0;1;0" dur="3.5s" repeatCount="indefinite" />
        </motion.circle>

        <motion.circle cx="300" cy="0" r="4" fill="#06b6d4">
          <animate attributeName="cy" values="0;400" dur="4s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0;1;0" dur="4s" repeatCount="indefinite" />
        </motion.circle>
      </svg>
    </div>
  );
}
