'use client';

import { Clock, User } from "lucide-react";

export default function AppMockupReservations() {
  return (
    <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden flex flex-col">
      <div className="bg-primary-container text-white p-4 pb-6">
        <p className="text-xs opacity-80">Makii</p>
        <p className="text-lg font-display font-bold">Reservas</p>
      </div>
      <div className="flex-grow p-3 flex flex-col gap-3 bg-surface-container-low">
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-on-surface-variant mb-2">
            Cancha 1 · Hoy
          </p>
          <div className="bg-white p-3 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-primary" />
                <span className="text-sm font-bold">6:00 PM - 8:00 PM</span>
              </div>
              <span className="text-[10px] text-primary font-semibold bg-primary/10 px-2 py-0.5 rounded-full">
                Confirmada
              </span>
            </div>
            <div className="flex items-center gap-1">
              <User size={12} className="text-on-surface-variant" />
              <span className="text-[10px] text-on-surface-variant">
                Carlos Ramírez
              </span>
            </div>
          </div>
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-on-surface-variant mb-2">
            Cancha 2 · Mañana
          </p>
          <div className="bg-white p-3 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-tertiary" />
                <span className="text-sm font-bold">7:00 PM - 9:00 PM</span>
              </div>
              <span className="text-[10px] text-tertiary font-semibold bg-tertiary/10 px-2 py-0.5 rounded-full">
                Pendiente
              </span>
            </div>
            <div className="flex items-center gap-1">
              <User size={12} className="text-on-surface-variant" />
              <span className="text-[10px] text-on-surface-variant">
                Andrea Pérez
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
