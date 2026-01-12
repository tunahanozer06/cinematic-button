
import React from 'react';
import CinematicObject from './components/CinematicObject';

const App: React.FC = () => {
  return (
    <div className="relative w-full h-screen bg-[#000000] flex items-center justify-center overflow-hidden select-none cursor-default">
      {/* Central Depth Glow - creates soft separation for the object from the void */}
      <div className="absolute w-[800px] h-[800px] rounded-full bg-white/[0.015] blur-[160px] pointer-events-none" />

      {/* The Suspended Object */}
      <div className="relative z-10">
        <CinematicObject label="Get Started" />
      </div>
    </div>
  );
};

export default App;
