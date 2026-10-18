import React from 'react';

export default function Services() {
  const services = [
    { title: 'Holowanie Aut Osobowych', desc: 'Bezpieczny transport po kolizji lub awarii.', icon: '🚗' },
    { title: 'Auta Dostawcze i Busy', desc: 'Sprzęt dostosowany do większych pojazdów.', icon: '🚐' },
    { title: 'Awaryjne Odpalanie', desc: 'Rozładowany akumulator? Odpalimy na miejscu.', icon: '⚡' },
  ];

  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-black text-white mb-2">Nasze Usługi</h2>
        <p className="text-slate-400">Pomoc drogowa dostępna 24/7</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((item, index) => (
          <div key={index} className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
            <div className="text-3xl mb-3">{item.icon}</div>
            <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
            <p className="text-slate-400 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}