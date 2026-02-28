'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Zap, 
  MessageSquare, 
  Lightbulb, 
  Settings, 
  ArrowUpRight,
  Layers
} from 'lucide-react';

/**
 * GtmCoreTile (GTMStack Edition)
 * 
 * A comprehensive 600x600 dashboard tile reflecting the GTMStack.pro aesthetic.
 * Optimized for exact pixel-perfect rendering within a 600px square container.
 */

export default function GtmCoreTile() {
  return (
    <div className="relative w-[600px] h-[600px] bg-[#040715] overflow-hidden flex flex-col font-sans select-none rounded-3xl border border-[#1E2745] shadow-2xl shadow-blue-900/20">
      
      {/* BACKGROUND DECORATION */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(56, 189, 248, 0.15) 1px, transparent 0)',
          backgroundSize: '32px 32px'
        }}
      />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#00F0FF]/5 to-transparent pointer-events-none opacity-40" />
      
      {/* === 1. HEADER (Fixed 72px - 12%) === */}
      <header className="relative z-30 h-[72px] shrink-0 w-full flex items-center justify-between px-6 border-b border-[#1E2745] bg-[#040715]/90 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-[#00F0FF]/10 border border-[#00F0FF]/20 shadow-[0_0_15px_rgba(0,240,255,0.15)]">
            <Layers className="w-5 h-5 text-[#00F0FF]" />
          </div>
          <div>
            <h3 className="text-white font-bold text-sm tracking-wide">GTM STACK</h3>
            <p className="text-[#64748B] text-[10px] font-medium uppercase tracking-wider">System Architecture</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
           <span className="flex items-center gap-2 px-3 py-1 bg-[#00F0FF]/10 border border-[#00F0FF]/30 rounded-full">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00F0FF] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00F0FF]"></span>
              </span>
              <span className="text-[#00F0FF] text-xs font-bold tracking-wide">LIVE</span>
           </span>
           <Settings className="text-[#64748B] w-5 h-5 cursor-pointer hover:text-white transition-colors" />
        </div>
      </header>

      {/* === 2. KPI CARDS (Fixed 96px - 16%) === */}
      <div className="relative z-20 w-full px-6 py-4 grid grid-cols-3 gap-3 shrink-0">
        {/* Card 1: ROI */}
        <motion.div 
          className="bg-[#0F1528] border border-[#1E2745] rounded-xl p-3 flex flex-col justify-between hover:border-[#FFD700]/50 transition-colors group h-[72px]"
          initial={{ opacity: 0, y: -10 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.2 }}
        >
          <span className="text-[#64748B] text-[10px] uppercase font-bold tracking-wider mb-1 group-hover:text-[#FFD700] transition-colors">Avg ROI</span>
          <div className="flex items-end justify-between">
            <span className="text-[#FFD700] font-black text-xl tracking-tight">150%</span>
            <TrendingUp className="w-4 h-4 text-[#FFD700] mb-1" />
          </div>
        </motion.div>

        {/* Card 2: Efficiency */}
        <motion.div 
          className="bg-[#0F1528] border border-[#1E2745] rounded-xl p-3 flex flex-col justify-between hover:border-[#FF5E00]/50 transition-colors group h-[72px]"
          initial={{ opacity: 0, y: -10 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.3 }}
        >
          <span className="text-[#64748B] text-[10px] uppercase font-bold tracking-wider mb-1 group-hover:text-[#FF5E00] transition-colors">Efficiency</span>
          <div className="flex items-end justify-between">
            <span className="text-[#FF5E00] font-black text-xl tracking-tight">40%</span>
            <Zap className="w-4 h-4 text-[#FF5E00] mb-1" />
          </div>
        </motion.div>

        {/* Card 3: Growth */}
        <motion.div 
          className="bg-[#0F1528] border border-[#1E2745] rounded-xl p-3 flex flex-col justify-between hover:border-[#00F0FF]/50 transition-colors group h-[72px]"
          initial={{ opacity: 0, y: -10 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.4 }}
        >
          <span className="text-[#64748B] text-[10px] uppercase font-bold tracking-wider mb-1 group-hover:text-[#00F0FF] transition-colors">Growth</span>
          <div className="flex items-end justify-between">
            <span className="text-[#00F0FF] font-black text-xl tracking-tight">3.5x</span>
            <div className="flex -space-x-1 mb-1">
               <ArrowUpRight className="w-4 h-4 text-[#00F0FF]" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* === 3. VISUALIZATION ENGINE (Flex 1 - ~312px) === */}
      <div className="relative flex-1 w-full flex items-center justify-center overflow-visible z-10">
        
        {/* Vector Network Lines - Aligned to match satellite offsets (130px X / 90px Y) */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
           <svg className="w-full h-full opacity-30">
              {/* 
                 Center is 50% 50%.
                 Container width 600. Center 300.
                 Offset X +/- 130 -> 170 (28.3%) and 430 (71.6%)
                 Offset Y +/- 90  -> Center Y +/- 90. 
                 Since height is dynamic (~312px), we use pixel offsets from center in SVG if possible, 
                 or approximations. Here we approximate to 25%/75% X and 20%/80% Y relative to this container 
              */}
              <motion.line 
                x1="50%" y1="50%" x2="28%" y2="25%" 
                stroke="#00F0FF" strokeWidth="1" strokeDasharray="4 4" 
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} 
                transition={{ duration: 1.5, delay: 0.5 }} 
              />
              <motion.line 
                x1="50%" y1="50%" x2="72%" y2="25%" 
                stroke="#FF5E00" strokeWidth="1" strokeDasharray="4 4" 
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} 
                transition={{ duration: 1.5, delay: 0.5 }} 
              />
              <motion.line 
                x1="50%" y1="50%" x2="28%" y2="75%" 
                stroke="#FFD700" strokeWidth="1" strokeDasharray="4 4" 
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} 
                transition={{ duration: 1.5, delay: 0.5 }} 
              />
              <motion.line 
                x1="50%" y1="50%" x2="72%" y2="75%" 
                stroke="#00F0FF" strokeWidth="1" strokeDasharray="4 4" 
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} 
                transition={{ duration: 1.5, delay: 0.5 }} 
              />
           </svg>
        </div>

        {/* Central Hub (160x160) */}
        <motion.div
          className="relative z-20 w-40 h-40 rounded-full flex flex-col items-center justify-center text-center border-4 backdrop-blur-md"
          style={{ 
            backgroundColor: 'rgba(15, 21, 40, 0.85)',
            borderColor: 'rgba(0, 240, 255, 0.3)',
            boxShadow: '0 0 60px rgba(0, 240, 255, 0.15)'
          }}
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, type: "spring", stiffness: 200, damping: 25 }}
        >
           {/* Pulse Ring */}
           <motion.div 
             className="absolute -inset-2 rounded-full border border-[#00F0FF]/30"
             animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0, 0.3] }}
             transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
           />
           
           <p className="text-[#00F0FF] text-[10px] font-black uppercase tracking-widest mb-1">REVENUE OPS</p>
           <motion.div 
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
           >
             <span className="text-white text-3xl font-black tracking-tighter">SCALE</span>
             <span className="text-[#FF5E00] text-[10px] font-bold tracking-widest uppercase mt-1">Ready</span>
           </motion.div>
        </motion.div>

        {/* Satellites - Positioned from Center */}
        {/* Top Left */}
        <SatelliteNode 
            icon={<MessageSquare className="w-5 h-5 text-[#00F0FF]" />}
            color="#00F0FF" label="Design"
            xOffset={-130} yOffset={-80} delay={0.8}
        />
        {/* Top Right */}
        <SatelliteNode 
            icon={<Settings className="w-5 h-5 text-[#FF5E00]" />}
            color="#FF5E00" label="Audit"
            xOffset={130} yOffset={-80} delay={0.9}
        />
        {/* Bottom Left */}
        <SatelliteNode 
            icon={<Lightbulb className="w-5 h-5 text-[#FFD700]" />}
            color="#FFD700" label="Enablement"
            xOffset={-130} yOffset={80} delay={1.0}
        />
        {/* Bottom Right */}
        <SatelliteNode 
            icon={<TrendingUp className="w-5 h-5 text-[#00F0FF]" />}
            color="#00F0FF" label="Growth"
            xOffset={130} yOffset={80} delay={1.1}
        />
      </div>

      {/* === 4. FOOTER (Fixed 120px - 20%) === */}
      <div className="relative z-20 h-[120px] shrink-0 border-t border-[#1E2745] bg-[#020410]/50 backdrop-blur-sm p-5 flex flex-col justify-end">
        <div className="flex justify-between items-center mb-1">
            <span className="text-[#64748B] text-[10px] font-bold tracking-widest uppercase flex items-center gap-2">
                Transformation Journey
            </span>
            <div className="flex gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF]"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF5E00]"></span>
            </div>
        </div>
        
        {/* Graph Container */}
        <div className="relative w-full h-[50px]">
            <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 50">
                <defs>
                    <linearGradient id="footerGrad" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#00F0FF" stopOpacity="0.2"/>
                        <stop offset="100%" stopColor="#FF5E00" stopOpacity="0.2"/>
                    </linearGradient>
                    <linearGradient id="strokeGrad" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#00F0FF" />
                        <stop offset="100%" stopColor="#FF5E00" />
                    </linearGradient>
                </defs>
                <motion.path 
                    d="M0,45 Q50,45 100,45" 
                    fill="none" stroke="#1E2745" strokeWidth="1" strokeDasharray="4 2"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                />
                <motion.path 
                    d="M0,45 C30,45 40,30 60,20 S80,5 100,2" 
                    fill="none" stroke="url(#strokeGrad)" strokeWidth="3" strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2.5, delay: 0.8, ease: "easeInOut" }}
                />
                 <motion.path 
                    d="M0,45 C30,45 40,30 60,20 S80,5 100,2 V50 H0 Z" 
                    fill="url(#footerGrad)" 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5, delay: 1.5 }}
                />
            </svg>
        </div>
        
        {/* Labels */}
        <div className="flex justify-between mt-2 px-1">
            <span className="text-[#64748B]/50 text-[9px] font-bold">START</span>
            <span className="text-[#64748B]/50 text-[9px] font-bold">AUDIT</span>
            <span className="text-[#64748B]/50 text-[9px] font-bold">BUILD</span>
            <span className="text-[#FF5E00] text-[9px] font-bold">SCALE</span>
        </div>
      </div>
    </div>
  );
}

function SatelliteNode({ 
  icon, color, label, xOffset, yOffset, delay 
}: { 
  icon: React.ReactNode, color: string, label: string, xOffset: number, yOffset: number, delay: number 
}) {
  const randomSeed = Math.abs(xOffset + yOffset); 
  const floatDuration = 4 + (randomSeed % 3); 
  
  return (
    <motion.div 
      className="absolute flex flex-col items-center group cursor-pointer z-30"
      // Centered origin: left-1/2 top-1/2, then translate by offset
      style={{ 
        left: '50%', 
        top: '50%', 
        x: xOffset, 
        y: yOffset 
      }}
      initial={{ opacity: 0, scale: 0, x: xOffset, y: yOffset }}
      animate={{ opacity: 1, scale: 1, x: xOffset, y: yOffset }}
      transition={{ delay, type: "spring", stiffness: 100, damping: 20 }}
    >
      <motion.div 
        className="w-11 h-11 -ml-[22px] -mt-[22px] rounded-xl bg-[#0F1528] border border-[#1E2745] flex items-center justify-center transition-all shadow-lg relative"
        style={{  boxShadow: `0 0 0 1px ${color}20` }}
        whileHover={{ scale: 1.15, backgroundColor: '#141c36', borderColor: color }}
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: floatDuration, repeat: Infinity, ease: "easeInOut", delay: (randomSeed % 2) }}
      >
        <div className="absolute inset-0 opacity-20 blur-md rounded-xl" style={{ backgroundColor: color }}></div>
        <div className="relative z-10">{icon}</div>
      </motion.div>
      <motion.span 
        className="mt-2 text-[10px] font-bold text-white bg-[#020410] px-2 py-1 rounded border border-[#1E2745] -translate-x-1/2" // added translate to center label relative to point
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: delay + 0.3 }}
      >
        {label}
      </motion.span>
    </motion.div>
  );
}
