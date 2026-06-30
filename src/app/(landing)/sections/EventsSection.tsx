"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Ticket } from "lucide-react";
import { EVENTS_HIGHLIGHTS } from "./constants";

export default function EventsSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <p className="text-sm font-bold uppercase tracking-widest text-primary mb-4">
          Eventos
        </p>
        <h3 className="text-4xl md:text-5xl font-display font-bold mb-4">
          Boletas, accesos y <span className="text-primary">reportes</span>
        </h3>
        <p className="text-lg text-on-surface-variant">
          Organiza un bingo familiar o cualquier evento y deja que Makii se
          encargue del resto.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-auto lg:h-[480px]">
        <div className="flex flex-col gap-6 lg:order-1 order-2">
          {EVENTS_HIGHLIGHTS.slice(1).map((item, i) => {
            const Icon = item.icon;
            const bgClass = i === 0 ? "bg-inverse-surface" : "bg-primary";
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`flex-1 ${bgClass} rounded-[2.5rem] p-8 relative overflow-hidden flex flex-col justify-between transition-colors`}
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center relative z-10 bg-white/20 text-white">
                  {i === 0 ? <Ticket size={24} /> : <Icon size={24} />}
                </div>
                <div className="relative z-10">
                  <h5 className="text-2xl font-display font-bold mb-2 text-left text-white">
                    {item.title}
                  </h5>
                  <p className="text-sm text-left text-white/90">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 0.98 }}
          className="lg:col-span-2 lg:order-2 order-1 bg-primary rounded-[2.5rem] p-10 relative overflow-hidden flex flex-col justify-end group cursor-pointer ambient-shadow-primary"
        >
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&auto=format&fit=crop&q=60"
              alt="Evento bingo familiar"
              fill
              className="object-cover"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          </div>
          <div className="absolute top-8 right-8 bg-secondary text-on-secondary px-4 py-2 rounded-full font-bold text-sm rotate-12 z-10">
            Próximamente
          </div>
          <div className="relative z-10 max-w-md text-white">
            <h4 className="text-5xl font-display font-bold mb-4">
              Eventos que se gestionan solos
            </h4>
            <p className="mb-6 opacity-90">
              Vende boletas, registra asistentes y obtén reportes al cerrar el
              evento. Sin planillas, sin filas.
            </p>
            <button
              type="button"
              className="bg-white text-primary px-6 py-3 rounded-full font-bold text-left"
            >
              Ver cómo funciona
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
