"use client";

import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Play, Timer } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-12">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="md:w-1/2"
      >
        <h2 className="text-6xl md:text-7xl font-display font-extrabold leading-[0.95] mb-6">
          Comida Fresca,
          <br />
          Entrega <span className="text-primary">Rápida</span>
        </h2>
        <p className="text-lg text-on-surface-variant max-w-md mb-8">
          Disfruta de los sabores vibrantes de la alta cocina, llevados a tu
          puerta con una velocidad increíble. Antójate, pide y disfruta.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/restaurants"
            className="bg-primary text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 ambient-shadow-primary hover:translate-y-[-2px] transition-all"
          >
            Explorar Menú <ArrowRight size={20} />
          </Link>
          <button
            type="button"
            className="bg-surface-container px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-surface-container/80 transition-all"
          >
            <Play size={20} fill="currentColor" /> Ver Cómo Funciona
          </button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="md:w-1/2 relative"
      >
        <div className="relative w-full aspect-square max-w-[500px] mx-auto">
          <div className="absolute inset-0 bg-primary-container/10 rounded-full animate-pulse" />
          <div className="absolute inset-0 border-2 border-dashed border-primary-container/20 rounded-full animate-[spin_20s_linear_infinite]" />
          <Image
            src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800"
            alt="Ensalada Deliciosa"
            fill
            className="object-cover rounded-full p-4 z-10"
            unoptimized
          />

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="absolute bottom-10 left-0 bg-white p-4 rounded-2xl shadow-2xl flex items-center gap-4 z-20"
          >
            <div className="bg-primary/10 p-3 rounded-xl text-primary">
              <Timer size={24} />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">
                Entrega
              </p>
              <p className="text-xl font-display font-bold text-primary">
                15-20 Min
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
