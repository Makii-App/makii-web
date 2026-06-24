"use client";

import { motion } from "motion/react";
import AppMockupTables from "@/components/ui/AppMockupTables";
import AppMockupMenu from "@/components/ui/AppMockupMenu";
import StoreBadge from "./StoreBadge";

export default function AppDownloadSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="bg-secondary/90 rounded-[3rem] p-12 md:p-20 relative overflow-hidden flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 z-10 text-on-secondary text-left">
          <h2 className="text-5xl font-display font-bold mb-6">
            Descarga la App.
            <br />
            Rápido y fácil.
          </h2>
          <p className="text-lg opacity-90 mb-10 max-w-sm">
            Rastrea tu pedido en tiempo real, desbloquea recompensas exclusivas
            y vuelve a ordenar tus favoritos con un solo toque.
          </p>
          <div className="flex flex-wrap gap-4">
            <StoreBadge
              ariaLabel="Descargar en la App Store"
              topText="Descargar en la"
              bottomText="App Store"
              icon={
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
              }
            />
            <StoreBadge
              ariaLabel="Descargar en Google Play"
              topText="Disponible en"
              bottomText="Google Play"
              icon={
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill="#4285F4"
                    d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92z"
                  />
                  <path
                    fill="#EA4335"
                    d="M17.727 8.272L5.063.891a1 1 0 0 0-.454.114l8.545 8.545 4.573-1.278z"
                  />
                  <path
                    fill="#FBBC04"
                    d="M17.727 15.728l-4.573-1.278-8.545 8.545a1 1 0 0 0 .454.114l12.664-7.381z"
                  />
                  <path
                    fill="#34A853"
                    d="M21.373 10.727l-3.646-2.455-4.573 1.278 4.573 1.278 3.646-2.091a1.001 1.001 0 0 0 0-1.01z"
                  />
                </svg>
              }
            />
          </div>
        </div>

        <div className="md:w-1/2 relative flex justify-center mt-12 md:mt-0">
          <div className="relative flex justify-center gap-4">
            <motion.div
              initial={{ rotate: -15, y: 100 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-56 h-[480px] bg-surface-container rounded-[2.5rem] border-4 border-surface-container-highest shadow-2xl overflow-hidden"
            >
              <AppMockupTables />
            </motion.div>
            <motion.div
              initial={{ rotate: 5, y: 100 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="w-56 h-[480px] bg-surface-container rounded-[2.5rem] border-4 border-surface-container-highest shadow-2xl overflow-hidden -rotate-6 translate-y-4"
            >
              <AppMockupMenu />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
