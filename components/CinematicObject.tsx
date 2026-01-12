
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface CinematicObjectProps {
  label: string;
}

const CinematicObject: React.FC<CinematicObjectProps> = ({ label }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative tap-highlight-transparent"
      style={{ width: '320px', height: '84px' }}
      animate={{ 
        y: isHovered ? -4 : 0,
      }}
      transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* AMBIENT UNDER-GLOW (Separation) */}
      <motion.div 
        className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-[120%] h-32 bg-white/[0.03] blur-[60px] pointer-events-none rounded-full"
        animate={{ 
          opacity: isHovered ? 1 : 0.4,
          scale: isHovered ? 1.1 : 1
        }}
        transition={{ duration: 3 }}
      />

      {/* THE OBJECT BODY */}
      <div className="absolute inset-0 rounded-[42px] bg-[#000000] overflow-hidden">
        {/* Base Gradient Surface */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-[#0a0a0a] to-[#1a1a1a]" />

        {/* INTERNAL VAPOR SWIRL (High contrast on right side) */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Primary Swirl */}
          <motion.div
            className="absolute -right-10 -top-20 w-[240px] h-[200px] rounded-full bg-gradient-to-bl from-white/20 via-white/5 to-transparent blur-[35px]"
            animate={{
              rotate: [0, 5, 0],
              scale: [1, 1.1, 1],
              x: [0, 8, 0]
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Bright Focal Vapor Point */}
          <motion.div
            className="absolute right-4 top-4 w-[80px] h-[60px] bg-white/10 blur-[20px] rounded-full"
            animate={{
              opacity: [0.4, 0.7, 0.4],
              scale: [0.9, 1.1, 0.9]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Particle System (Inside and Near Surface) */}
          <div className="absolute inset-0">
             {[...Array(14)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-[1.5px] h-[1.5px] bg-white rounded-full"
                  style={{
                    top: `${Math.random() * 80 + 10}%`,
                    left: `${Math.random() * 80 + 10}%`,
                    filter: 'blur(0.5px)',
                    opacity: 0.15
                  }}
                  animate={{
                    y: [0, -8, 0],
                    x: [0, Math.random() * 4 - 2, 0],
                    opacity: [0.05, 0.25, 0.05]
                  }}
                  transition={{
                    duration: 6 + Math.random() * 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: Math.random() * 5
                  }}
                />
             ))}
          </div>
        </div>

        {/* SHARP EDGE HIGHLIGHT (Right Curve) */}
        <div className="absolute inset-0 rounded-[42px] border-r-[1.5px] border-white/20 pointer-events-none" 
             style={{ maskImage: 'linear-gradient(to top, transparent, black, transparent)' }} />

        {/* TOP SPECULAR CATCH */}
        <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent blur-[0.5px]" />

        {/* TEXT CORE (Glowing Phosphor) */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.span 
            className="text-white text-[19px] font-medium tracking-tight"
            style={{
              fontFamily: "'Inter', sans-serif",
            }}
            animate={{
              opacity: isHovered ? 1 : 0.85,
              textShadow: isHovered 
                ? '0 0 20px rgba(255, 255, 255, 0.6), 0 0 40px rgba(255, 255, 255, 0.2)' 
                : '0 0 15px rgba(255, 255, 255, 0.4)'
            }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            {label}
          </motion.span>
        </div>
      </div>

      {/* EXTERNAL MICRO PARTICLES (Escaped dust) */}
      <div className="absolute -inset-10 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={`ext-${i}`}
              className="absolute w-[1.5px] h-[1.5px] bg-white/30 rounded-full blur-[0.5px]"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -15, 0],
                opacity: [0, 0.2, 0]
              }}
              transition={{
                duration: 10 + Math.random() * 10,
                repeat: Infinity,
                delay: Math.random() * 10
              }}
            />
          ))}
      </div>
    </motion.div>
  );
};

export default CinematicObject;
