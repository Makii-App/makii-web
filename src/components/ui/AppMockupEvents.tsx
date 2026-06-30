'use client';

import { PartyPopper, Ticket } from "lucide-react";

export default function AppMockupEvents() {
  return (
    <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden flex flex-col">
      <div className="bg-primary-container text-white p-4 pb-6">
        <p className="text-xs opacity-80">Makii</p>
        <p className="text-lg font-display font-bold">Eventos</p>
      </div>
      <div className="flex-grow p-3 flex flex-col gap-3 bg-surface-container-low">
        <div className="bg-white p-3 rounded-xl shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-secondary-container rounded-xl flex items-center justify-center flex-shrink-0">
              <PartyPopper size={20} className="text-on-secondary-container" />
            </div>
            <div className="flex-grow">
              <p className="text-sm font-bold text-on-surface">Bingo Familiar</p>
              <p className="text-[10px] text-on-surface-variant">
                Sábado 20:00
              </p>
            </div>
            <span className="text-[10px] text-primary font-semibold bg-primary/10 px-2 py-0.5 rounded-full">
              Activo
            </span>
          </div>
        </div>
        <div className="bg-white p-3 rounded-xl shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-surface-container rounded-xl flex items-center justify-center flex-shrink-0">
              <Ticket size={20} className="text-on-surface-variant" />
            </div>
            <div className="flex-grow">
              <p className="text-sm font-bold text-on-surface">Noche de Karaoke</p>
              <p className="text-[10px] text-on-surface-variant">
                Viernes 21:00
              </p>
            </div>
            <span className="text-[10px] text-tertiary font-semibold bg-tertiary/10 px-2 py-0.5 rounded-full">
              Borrador
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
