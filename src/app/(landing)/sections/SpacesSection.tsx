"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { CalendarCheck } from "lucide-react";
import { SPACES_HIGHLIGHTS } from "./constants";

export default function SpacesSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <p className="text-sm font-bold uppercase tracking-widest text-primary mb-4">
          Reservas y pedidos
        </p>
        <h3 className="text-4xl md:text-5xl font-display font-bold mb-4">
          Espacios que se <span className="text-primary">reservan</span> y se
          cobran fácil
        </h3>
        <p className="text-lg text-on-surface-variant">
          Canchas sintéticas por horas, todos los días, con pedidos asignados a
          cada persona.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-auto lg:h-[480px]">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 0.98 }}
          className="lg:col-span-2 bg-secondary rounded-[2.5rem] p-10 relative overflow-hidden flex flex-col justify-end group cursor-pointer ambient-shadow-secondary"
        >
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1551958219-acbc608c6377?w=800&auto=format&fit=crop&q=60"
              alt="Cancha sintética reservada"
              fill
              className="object-cover"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          </div>
          <div className="absolute top-8 right-8 bg-primary text-white px-4 py-2 rounded-full font-bold text-sm rotate-12 z-10">
            24/7
          </div>
          <div className="relative z-10 max-w-md text-white">
            <h4 className="text-5xl font-display font-bold mb-4">
              Reservas por horas
            </h4>
            <p className="mb-6 opacity-90">
              Bloques de una o varias horas, todos los días. Tus clientes
              reservan, pagan y confirman en minutos.
            </p>
            <button
              type="button"
              className="bg-white text-primary px-6 py-3 rounded-full font-bold text-left"
            >
              Conoce más
            </button>
          </div>
        </motion.div>

        <div className="flex flex-col gap-6">
          {SPACES_HIGHLIGHTS.slice(1).map((item, i) => {
            const Icon = item.icon;
            const bgClass = i === 0 ? "bg-primary-container" : "bg-tertiary";
            const textClass = i === 0 ? "text-white" : "text-white";
            const textVariant = i === 0 ? "text-white/90" : "text-white/80";
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`flex-1 ${bgClass} rounded-[2.5rem] p-8 relative overflow-hidden flex flex-col justify-between transition-colors`}
              >
                <div className="bg-white/20 w-12 h-12 rounded-full flex items-center justify-center relative z-10 text-white">
                  {i === 0 ? (
                    <CalendarCheck size={24} />
                  ) : (
                    <Icon size={24} />
                  )}
                </div>
                <div className="relative z-10">
                  <h5
                    className={`text-2xl font-display font-bold mb-2 text-left ${textClass}`}
                  >
                    {item.title}
                  </h5>
                  <p className={`text-sm text-left ${textVariant}`}>
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
