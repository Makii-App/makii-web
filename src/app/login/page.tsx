'use client';

import { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import Link from "next/link";
import { Utensils, Loader2 } from "lucide-react";
import { useLoginMutation } from "@/hooks/useAuth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginMutation = useLoginMutation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    loginMutation.mutate({ email, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-surface-container/20">
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 min-h-screen lg:min-h-[850px] shadow-2xl bg-white overflow-hidden transition-all duration-500">

        {/* Left Side: Login Form */}
        <div className="flex flex-col justify-center px-8 py-20 lg:px-[12%] bg-white relative z-10 text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="w-full max-w-md mx-auto"
          >
            <div className="mb-12">
              <Link href="/" className="inline-block mb-8">
                <h1 className="text-4xl font-display font-extrabold text-primary tracking-tighter">Makii</h1>
              </Link>
              <h2 className="text-3xl font-display font-bold text-on-surface mb-2">Bienvenido de nuevo</h2>
              <p className="text-on-surface-variant">Inicia sesión para pedir tus platos favoritos.</p>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-on-surface mb-2" htmlFor="email">Correo Electrónico</label>
                <input
                  className="w-full bg-surface-container border-transparent focus:border-primary focus:ring-1 focus:ring-primary rounded-xl px-4 py-4 text-on-surface placeholder-outline-variant transition-all outline-none"
                  id="email"
                  name="email"
                  placeholder="tu@ejemplo.com"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-on-surface mb-2" htmlFor="password">Contraseña</label>
                <input
                  className="w-full bg-surface-container border-transparent focus:border-primary focus:ring-1 focus:ring-primary rounded-xl px-4 py-4 text-on-surface placeholder-outline-variant transition-all outline-none"
                  id="password"
                  name="password"
                  placeholder="••••••••"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input className="h-5 w-5 rounded border-surface-container text-primary focus:ring-primary cursor-pointer" id="terms" name="terms" type="checkbox" />
                  <label className="ml-3 text-sm text-on-surface-variant cursor-pointer" htmlFor="terms">Acepto los términos</label>
                </div>
                <Link href="/forgot-password" className="text-sm text-primary hover:text-primary-container font-bold transition-colors">¿Olvidaste tu contraseña?</Link>
              </div>

              {loginMutation.isError && (
                <motion.p
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-sm text-red-600 bg-red-50 rounded-lg px-4 py-3"
                >
                  {loginMutation.error instanceof Error
                    ? loginMutation.error.message
                    : "Error al iniciar sesión"}
                </motion.p>
              )}

              <button
                className="w-full bg-primary text-white font-bold py-4 rounded-full hover:bg-primary-container transition-all shadow-emerald-ambient active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                type="submit"
                disabled={loginMutation.isPending}
              >
                {loginMutation.isPending ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Iniciando sesión...
                  </>
                ) : (
                  "Iniciar Sesión"
                )}
              </button>
            </form>

            <p className="mt-10 text-center text-on-surface-variant text-sm">
              ¿No tienes una cuenta? <Link href="/contact" className="text-primary font-bold hover:underline">Regístrate</Link>
            </p>
          </motion.div>
        </div>

        {/* Right Side: Imagery */}
        <div className="hidden lg:block relative bg-surface-container shadow-inner">
          <div className="absolute inset-0 z-10 bg-gradient-to-tr from-primary/10 to-transparent" />
          <Image
            src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=1200"
            fill
            priority
            className="object-cover"
            alt="Amigos comiendo pizza"
          />

          <div className="absolute bottom-12 left-12 z-20 bg-white/90 backdrop-blur-md p-8 rounded-3xl shadow-xl max-w-[320px] border border-white/50 text-left">
            <div className="flex items-center gap-4 mb-3">
              <div className="bg-primary/10 p-3 rounded-full text-primary">
                <Utensils size={20} />
              </div>
              <h4 className="font-bold text-on-surface uppercase text-xs tracking-widest">Ingredientes Frescos</h4>
            </div>
            <p className="text-sm text-on-surface-variant leading-relaxed italic">&ldquo;La mejor pizza que he probado en mucho tiempo, la rapidez es increíble.&rdquo;</p>
          </div>
        </div>
      </div>
    </div>
  );
}
