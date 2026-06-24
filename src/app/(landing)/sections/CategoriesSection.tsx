"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { CATEGORIES } from "./constants";

export default function CategoriesSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <h3 className="text-4xl font-display font-bold text-center mb-12">
        Categorías
      </h3>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {CATEGORIES.map((cat, i) => (
          <motion.div
            key={cat.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -10 }}
            className="group flex flex-col items-center gap-4 cursor-pointer"
          >
            <div
              className={`w-40 h-40 rounded-full ${cat.color} flex items-center justify-center p-2 transition-transform duration-300 group-hover:rotate-6 shadow-xl`}
            >
              <div className="bg-white/20 w-full h-full rounded-full flex items-center justify-center text-white backdrop-blur-sm">
                {cat.img ? (
                  <Image
                    src={cat.img}
                    alt={cat.name}
                    width={160}
                    height={160}
                    className="w-full h-full object-cover rounded-full"
                    unoptimized
                  />
                ) : (
                  <span className="scale-[2.5]">{cat.icon}</span>
                )}
              </div>
            </div>
            <span className="text-xl font-display font-bold">{cat.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
