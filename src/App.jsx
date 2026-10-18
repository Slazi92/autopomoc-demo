import React from 'react';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Calculator from './components/Calculator';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans">
      <Navbar />
      
      <section className="pt-36 pb-20 px-4 text-center max-w-4xl mx-auto">
        <h1 className="text-5xl font-black mb-6">
          Szybka Pomoc Drogowa <span className="text-amber-500">24/7</span>
        </h1>
        <p className="text-slate-400 mb-8 text-lg">Dojazd w 20 minut na terenie całego regionu.</p>
        <a href="tel:+48123456789" className="bg-amber-500 text-slate-950 font-bold px-8 py-4 rounded-xl inline-block">
          Zadzwoń: +48 123 456 789
        </a>
      </section>

      <Services />
      <Calculator />
    </div>
  );
}