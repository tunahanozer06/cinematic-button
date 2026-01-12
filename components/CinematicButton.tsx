
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface CinematicButtonProps {
  label: string;
}

const CinematicButton: React.FC<CinematicButtonProps> = ({ label }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative cursor-pointer tap-highlight-transparent"
      style={{ width: '280px', height: '76px' }}
    >
      {/* AMBIENT OCCLUSION / DEPTH (The heavy presence of the object) */}
      <motion.div 
        className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-[95%] h-16 bg-black blur-[50px] pointer-events-none"
        animate={{ 
          opacity: isHovered ? 0.8 : 0.5,
          scale: isHovered ? 1.05 : 1
        }}
        transition={{ duration: 3, ease: [0.4, 0, 0.2, 1] }}
      />

      {/* THE OBJECT: SMOKED OBSIDIAN CAPSULE */}
      <motion.div 
        className="absolute inset-0 rounded-[38px] bg-[#000000] overflow-hidden"
        animate={{ 
          y: isHovered ? -2 : 0,
        }}
        transition={{ duration: 4, ease: [0.4, 0, 0.2, 1] }}
      >
        {/* MATERIAL GRADIENT (Merging into the left-side darkness) */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-[#080808] to-[#121212]" />

        {/* INTERNAL VAPOR LAYERS (Ethereal and ghost-like) */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Deep Ghost Vapor */}
          <motion.div
            className="absolute top-[-50%] right-[-20%] w-[300px] h-[200px] bg-white rounded-full opacity-[0.05] blur-[60px]"
            animate={{
              x: [0, 15, 0],
              y: [0, -10, 0],
              opacity: [0.03, 0.06, 0.03],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          {/* Secondary Shifting Mist */}
          <motion.div
            className="absolute bottom-[-40%] right-[0%] w-[200px] h-[140px] bg-white rounded-full opacity-[0.03] blur-[45px]"
            animate={{
              x: [-10, 10, -10],
              y: [0, 8, 0],
              opacity: [0.02, 0.05, 0.02],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />

          {/* DUST PARTICLES (Deep within the glass) */}
          <div className="absolute inset-0">
             {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-[1px] h-[1px] bg-white/10 rounded-full blur-[0.6px]"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${50 + Math.random() * 50}%`,
                  }}
                  animate={{
                    x: [0, 15, 0],
                    y: [0, -12, 0],
                    opacity: [0, 0.08, 0]
                  }}
                  transition={{
                    duration: 12 + Math.random() * 5,
                    repeat: Infinity,
                    ease: "linear",
                    delay: Math.random() * 8
                  }}
                />
             ))}
          </div>
        </div>

        {/* ORGANIC LIGHT CATCH (Right-side surface only) */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-l from-white/[0.04] via-transparent to-transparent pointer-events-none"
          animate={{
            opacity: isHovered ? 0.8 : 0.4
          }}
          transition={{ duration: 3 }}
        />

        {/* SPECULAR REFLECTION (A soft sliver on the curvature) */}
        <motion.div
          className="absolute top-[12%] right-[15%] w-[20%] h-[1px] bg-white/5 blur-[3px] rounded-full pointer-events-none"
          animate={{
            opacity: [0.3, 0.6, 0.3],
            x: [0, 2, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* ETCHED TEXT (Embedded deep within the material) */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.span 
            className="text-white/40 text-[15px] font-medium tracking-[0.1em]"
            style={{
              fontFamily: "'Inter', sans-serif",
              filter: 'blur(0.8px)', // Deep diffusion
            }}
            animate={{
              opacity: isHovered ? 0.65 : 0.35,
              textShadow: isHovered 
                ? '0 0 12px rgba(255, 255, 255, 0.15)' 
                : '0 0 6px rgba(255, 255, 255, 0.05)'
            }}
            transition={{ duration: 5, ease: "easeInOut" }}
          >
            {label}
          </motion.span>
        </div>
      </motion.div>

      {/* SUBTLE SURFACE DIFFUSION (Final layer of depth) */}
      <div 
        className="absolute inset-0 rounded-[38px] pointer-events-none"
        style={{
          boxShadow: 'inset -1px 0 20px rgba(255, 255, 255, 0.01)',
        }}
      />
    </motion.div>
  );
};

export default CinematicButton;
