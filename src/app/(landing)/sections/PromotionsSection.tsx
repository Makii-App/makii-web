"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Truck } from "lucide-react";

export default function PromotionsSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-auto lg:h-[450px]">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 0.98 }}
          className="lg:col-span-2 bg-secondary rounded-[2.5rem] p-10 relative overflow-hidden flex flex-col justify-end group cursor-pointer ambient-shadow-secondary"
        >
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&auto=format&fit=crop&q=60"
              alt=""
              fill
              className="object-cover"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          </div>
          <div className="absolute top-8 right-8 bg-primary text-white px-4 py-2 rounded-full font-bold text-sm rotate-12 z-10">
            -20% OFF
          </div>
          <div className="relative z-10 max-w-md text-white">
            <h4 className="text-5xl font-display font-bold mb-4">
              Banquete Familiar
            </h4>
            <p className="mb-6 opacity-90">
              Perfecto para compartir. Obtén descuentos increíbles en combos
              diseñados para 4 o más personas.
            </p>
            <button
              type="button"
              className="bg-white text-primary px-6 py-3 rounded-full font-bold text-left"
            >
              Reclamar Oferta
            </button>
          </div>
        </motion.div>

        <div className="flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 bg-surface-container rounded-[2.5rem] p-8 relative overflow-hidden flex flex-col justify-between hover:bg-surface-container/60 transition-colors"
          >
            <div className="absolute inset-0">
              <Image
                src="https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?w=600&auto=format&fit=crop&q=60"
                alt=""
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20" />
            </div>
            <div className="bg-primary-container text-white w-12 h-12 rounded-full flex items-center justify-center relative z-10">
              <Truck size={24} />
            </div>
            <div className="relative z-10">
              <h5 className="text-2xl font-display font-bold mb-2 text-left text-white">
                Envío Gratis
              </h5>
              <p className="text-sm text-white/80 text-left">
                En todos los pedidos superiores a $25. Válido hasta este
                domingo.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex-1 bg-tertiary rounded-[2.5rem] p-8 text-white relative overflow-hidden group text-left"
          >
            <div className="absolute inset-0">
              <Image
                src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600&auto=format&fit=crop&q=60"
                alt=""
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30" />
            </div>
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-110 transition-transform" />
            <h5 className="text-2xl font-display font-bold mb-2 relative z-10">
              Especial de Almuerzo
            </h5>
            <p className="text-sm opacity-80 mb-6 relative z-10">
              Ofertas diarias de 11AM a 2PM.
            </p>
            <button
              type="button"
              className="bg-white/20 backdrop-blur-md text-white border border-white/30 px-6 py-2 rounded-full font-bold text-sm relative z-10"
            >
              Ver Menú
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
