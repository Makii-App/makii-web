"use client";

import { motion } from "motion/react";
import { FUTURE_FEATURES } from "./constants";

export default function FutureSection() {
  return (
    <>
      <div className="ripped-paper-top h-10 bg-background" />
      <section className="bg-inverse-surface py-32 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display font-bold text-secondary mb-6">
              El Futuro de la Entrega
            </h2>
            <p className="text-lg text-inverse-on-surface/70 max-w-2xl mx-auto">
              Estamos pionereando nuevas formas de llevar tu comida más rápido,
              más caliente y más seguro que nunca.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {FUTURE_FEATURES.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                whileHover={{ y: -5 }}
                className="bg-white/5 border border-white/10 p-10 rounded-[3rem] text-center flex flex-col items-center backdrop-blur-sm"
              >
                <div className="w-20 h-20 bg-secondary/20 rounded-full flex items-center justify-center mb-8 text-secondary">
                  {feature.icon}
                </div>
                <h4 className="text-2xl font-display font-bold mb-4">
                  {feature.title}
                </h4>
                <p className="opacity-70 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
