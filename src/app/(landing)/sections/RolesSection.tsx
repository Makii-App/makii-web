"use client";

import { motion } from "motion/react";
import { ROLES } from "./constants";

export default function RolesSection() {
  return (
    <section className="bg-inverse-surface py-32 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <p className="text-sm font-bold uppercase tracking-widest text-secondary mb-4">
            Perfiles
          </p>
          <h2 className="text-5xl font-display font-bold text-secondary mb-6">
            Cada rol con su vista
          </h2>
          <p className="text-lg text-inverse-on-surface/70 max-w-2xl mx-auto">
            Tu equipo accede a exactamente lo que necesita: cobrar, preparar,
            atender o administrar.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {ROLES.map((role, i) => {
            const Icon = role.icon;
            return (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ y: -5 }}
                className="bg-white/5 border border-white/10 p-8 rounded-[2rem] text-center flex flex-col items-center backdrop-blur-sm"
              >
                <div className="w-20 h-20 bg-secondary/20 rounded-full flex items-center justify-center mb-6 text-secondary">
                  <Icon className="w-10 h-10" strokeWidth={1.5} />
                </div>
                <h4 className="text-xl font-display font-bold mb-3">
                  {role.title}
                </h4>
                <p className="text-sm opacity-70 leading-relaxed">
                  {role.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
