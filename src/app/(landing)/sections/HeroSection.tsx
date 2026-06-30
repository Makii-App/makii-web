"use client";

import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Play, Users } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 pt-24 pb-12 md:pt-32 md:py-20 flex flex-col md:flex-row items-center gap-12 md:gap-12">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="w-full md:w-1/2 text-center md:text-left"
      >
        <h2 className="text-5xl sm:text-6xl md:text-7xl font-display font-extrabold leading-[0.95] mb-6">
          Controla tu
          <br />
          <span className="text-primary">restaurante</span>
        </h2>
        <p className="text-lg text-on-surface-variant max-w-md mx-auto md:mx-0 mb-8">
          Comandas, pedidos, caja, roles y reservas en un solo sistema. Makii
          es el socio operativo de tu restaurante.
        </p>
        <div className="flex flex-wrap justify-center md:justify-start gap-4">
          <Link
            href="/contact"
            className="bg-primary text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 ambient-shadow-primary hover:translate-y-[-2px] transition-all"
          >
            Solicitar Demo <ArrowRight size={20} />
          </Link>
          <button
            type="button"
            className="bg-white border-2 border-primary-container/20 text-on-surface px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-primary-container/10 transition-all"
          >
            <Play size={20} fill="currentColor" /> Ver Cómo Funciona
          </button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="w-full md:w-1/2 relative"
      >
        <div className="relative w-full aspect-square max-w-[420px] mx-auto">
          <div className="absolute inset-0 bg-primary-container/10 rounded-full animate-pulse" />
          <div className="absolute inset-0 border-2 border-dashed border-primary-container/20 rounded-full animate-[spin_20s_linear_infinite]" />
          <Image
            src="https://images.unsplash.com/photo-1556745753-b2904692b3cd?auto=format&fit=crop&q=80&w=800"
            alt="Equipo de restaurante usando Makii"
            fill
            className="object-cover rounded-full p-4 z-10"
            unoptimized
          />

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="absolute -bottom-4 left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 bg-white p-3 md:p-4 rounded-2xl shadow-2xl flex items-center gap-3 md:gap-4 z-20 whitespace-nowrap"
          >
            <div className="bg-primary/10 p-2 md:p-3 rounded-xl text-primary">
              <Users size={20} className="md:w-6 md:h-6" />
            </div>
            <div>
              <p className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-on-surface-variant">
                Roles activos
              </p>
              <p className="text-base md:text-xl font-display font-bold text-primary">
                4 conectados
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
