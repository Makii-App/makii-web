"use client";

import { motion } from "motion/react";
import { FEATURES } from "./constants";

export default function FeaturesSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <p className="text-sm font-bold uppercase tracking-widest text-primary mb-4">
          Todo en un solo sistema
        </p>
        <h3 className="text-4xl md:text-5xl font-display font-bold mb-4">
          Un sistema para tu{" "}
          <span className="text-primary">restaurante</span>
        </h3>
        <p className="text-lg text-on-surface-variant">
          Comandas, pedidos, caja, roles, reservas y eventos conectados en una
          sola plataforma.
        </p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {FEATURES.map((feature, i) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="group flex flex-col items-center gap-4 cursor-pointer"
            >
              <div
                className={`w-40 h-40 rounded-full ${feature.color} flex items-center justify-center p-2 transition-transform duration-300 group-hover:rotate-6 shadow-xl`}
              >
                <div className="bg-white/20 w-full h-full rounded-full flex items-center justify-center text-white backdrop-blur-sm">
                  <Icon className="w-16 h-16" strokeWidth={1.5} />
                </div>
              </div>
              <h4 className="text-xl font-display font-bold text-center">
                {feature.title}
              </h4>
              <p className="text-sm text-on-surface-variant text-center max-w-[14rem]">
                {feature.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
