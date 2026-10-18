import React, { useState } from 'react';

export default function Calculator() {
  const [vehicleType, setVehicleType] = useState('osobowe');
  const [distance, setDistance] = useState(20);

  const rates = {
    osobowe: { base: 150, km: 5 },
    dostawcze: { base: 220, km: 7 },
    motocykl: { base: 120, km: 4 },
    naprawa: { base: 150, km: 0 },
  };

  const currentRate = rates[vehicleType];
  const totalPrice = currentRate.base + (distance * currentRate.km);

  return (
    <section id="kalkulator" className="py-20 bg-slate-900/50 border-y border-slate-800">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-black text-white mb-2">Szacunkowy Kalkulator Wyceny</h2>
          <p className="text-slate-400">Przelicz wstępny koszt holowania przed wykonaniem telefonu</p>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-6 rounded-3xl shadow-2xl">
          <div className="mb-6">
            <label className="block text-sm font-medium text-slate-300 mb-3">Wybierz rodzaj usługi:</label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { id: 'osobowe', name: 'Auto Osobowe' },
                { id: 'dostawcze', name: 'Bus / Dostawczy' },
                { id: 'motocykl', name: 'Motocykl / Quad' },
                { id: 'naprawa', name: 'Naprawa na drodze' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setVehicleType(item.id)}
                  className={`p-3 rounded-xl border text-xs sm:text-sm font-bold transition-all ${
                    vehicleType === item.id
                      ? 'bg-amber-500 border-amber-500 text-slate-950'
                      : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {vehicleType !== 'naprawa' && (
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-medium text-slate-300">Szacowany dystans:</label>
                <span className="text-amber-400 font-bold text-lg">{distance} km</span>
              </div>
              <input 
                type="range" 
                min="5" 
                max="150" 
                value={distance} 
                onChange={(e) => setDistance(Number(e.target.value))}
                className="w-full accent-amber-500 bg-slate-950 cursor-pointer h-2 rounded-lg"
              />
            </div>
          )}

          <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-xs text-slate-400 block">Szacowana kwota netto:</span>
              <span className="text-3xl font-black text-white">{totalPrice} zł</span>
            </div>
            <a 
              href="tel:+48123456789" 
              className="w-full sm:w-auto text-center bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-6 py-3 rounded-xl transition-all"
            >
              Zamów Lawetę
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}