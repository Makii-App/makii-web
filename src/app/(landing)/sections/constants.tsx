import type { ReactNode } from "react";
import {
  UtensilsCrossed,
  Pizza,
  Salad,
  Flame,
  Navigation2,
  Bot,
} from "lucide-react";

export interface Category {
  name: string;
  icon: ReactNode;
  color: string;
  img: string;
}

export interface FutureFeature {
  title: string;
  icon: ReactNode;
  desc: string;
}

export const CATEGORIES: Category[] = [
  {
    name: "Hamburguesas",
    icon: <UtensilsCrossed className="w-8 h-8" />,
    color: "bg-primary",
    img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&auto=format&fit=crop&q=60",
  },
  {
    name: "Pizza",
    icon: <Pizza className="w-8 h-8" />,
    color: "bg-tertiary",
    img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&auto=format&fit=crop&q=60",
  },
  {
    name: "Ensaladas",
    icon: <Salad className="w-8 h-8" />,
    color: "bg-secondary",
    img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&auto=format&fit=crop&q=60",
  },
  {
    name: "Asados",
    icon: <Flame className="w-8 h-8" />,
    color: "bg-primary-container",
    img: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&auto=format&fit=crop&q=60",
  },
];

export const FUTURE_FEATURES: FutureFeature[] = [
  {
    title: "Entrega Aérea",
    icon: <Navigation2 className="w-10 h-10" />,
    desc: "Programas piloto próximamente. Tu comida cae del cielo a tu zona segura en menos de 10 minutos.",
  },
  {
    title: "Cocinas Automatizadas",
    icon: <Bot className="w-10 h-10" />,
    desc: "Procesos de preparación con IA aseguran consistencia perfecta y tiempos de espera drásticamente reducidos.",
  },
];
