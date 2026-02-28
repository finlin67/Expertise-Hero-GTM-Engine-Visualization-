import React from 'react';
import GtmCoreTile from './components/GtmCoreTile';

export default function App() {
  return (
    <div className="bg-[#020410] min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Ambience - Deep Navy & Accents */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: 'radial-gradient(circle at 20% 20%, rgba(0, 240, 255, 0.08) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255, 94, 0, 0.08) 0%, transparent 50%)',
        }}
      />
      {/* Grid Overlay */}
      <div 
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
              backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)',
              backgroundSize: '40px 40px'
          }}
      ></div>

      {/* Main Container */}
      <div className="relative z-10 p-10">
        <div className="relative group">
            {/* Glow effect behind the tile - Cyan & Orange split */}
            <div className="absolute -inset-1 bg-gradient-to-br from-[#00F0FF]/20 to-[#FF5E00]/20 rounded-[40px] blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-1000"></div>
            
            {/* The Tile Component */}
            <GtmCoreTile />
        </div>
        
        {/* Presentation Label */}
        <div className="mt-12 text-center flex flex-col gap-2">
            <h1 className="text-white text-2xl font-black tracking-tight">GTM<span className="text-[#00F0FF]">Stack</span></h1>
            <p className="text-[#64748B] text-xs font-medium tracking-widest uppercase">Revenue Operations Architecture</p>
        </div>
      </div>
    </div>
  );
}
