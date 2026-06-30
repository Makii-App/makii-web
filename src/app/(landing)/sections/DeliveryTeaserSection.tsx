"use client";

import { motion } from "motion/react";
import { DELIVERY_TEASER_ICON } from "./constants";

export default function DeliveryTeaserSection() {
  const Icon = DELIVERY_TEASER_ICON;
  return (
    <>
      <section className="ripped-paper-bottom bg-inverse-surface pt-32 pb-32 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-bold uppercase tracking-widest text-secondary mb-4">
              Próximamente
            </p>
            <h2 className="text-5xl font-display font-bold text-secondary mb-6">
              Domicilios, más adelante
            </h2>
            <p className="text-lg text-inverse-on-surface/70 max-w-2xl mx-auto">
              Pronto tu restaurante podrá gestionar sus propias entregas a
              domicilio directamente desde Makii, sin depender de plataformas
              externas.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="max-w-3xl mx-auto bg-white/5 border border-white/10 p-12 rounded-[3rem] text-center flex flex-col items-center backdrop-blur-sm"
          >
            <div className="w-20 h-20 bg-secondary/20 rounded-full flex items-center justify-center mb-8 text-secondary">
              <Icon className="w-10 h-10" strokeWidth={1.5} />
            </div>
            <h4 className="text-2xl font-display font-bold mb-4">
              Gestión de domicilios nativa
            </h4>
            <p className="opacity-70 leading-relaxed max-w-xl">
              Estamos construyendo el módulo de domicilios como una extensión
              natural del sistema de comandas y caja. Si te interesa ser de los
              primeros en probarlo, escríbenos.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
