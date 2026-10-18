import React from 'react';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Logo po lewej stronie */}
        <div className="flex items-center gap-3">
          <div className="bg-amber-500 text-slate-950 font-black p-2 rounded-xl text-xl tracking-wider">
            SOS
          </div>
          <div>
            <span className="text-xl font-bold tracking-tight text-white">AUTO<span className="text-amber-500">POMOC</span></span>
            <span className="block text-xs text-slate-400">24/7 Holowanie i Transport</span>
          </div>
        </div>
        
        {/* Przycisk telefonu po prawej */}
        <div className="flex items-center gap-4">
          <a 
            href="tel:+48123456789" 
            className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-4 sm:px-6 py-3 rounded-xl transition-all shadow-lg shadow-amber-500/20 flex items-center gap-2 text-sm sm:text-base"
          >
            <span>+48 123 456 789</span>
          </a>
        </div>

      </div>
    </header>
  );
}