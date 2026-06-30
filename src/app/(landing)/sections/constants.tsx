import type { ReactNode } from "react";
import {
  UtensilsCrossed,
  Pizza,
  Salad,
  Flame,
  Receipt,
  Users,
  CalendarCheck,
  Ticket,
  UserCog,
  Wallet,
  ChefHat,
  ClipboardList,
  Goal,
  PartyPopper,
  BarChart3,
  Navigation2,
  Bot,
  Truck,
  type LucideIcon,
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

export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
}

export interface Role {
  title: string;
  description: string;
  icon: LucideIcon;
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

export const FEATURES: Feature[] = [
  {
    title: "Comandas y Caja",
    description:
      "Toma pedidos, envíalos a cocina y controla el cierre de caja en un solo flujo.",
    icon: Receipt,
    color: "bg-primary",
  },
  {
    title: "Roles del Equipo",
    description:
      "Cada integrante accede a su vista: administrador, cajero, cocina y mesero.",
    icon: Users,
    color: "bg-secondary",
  },
  {
    title: "Reservas de Espacios",
    description:
      "Administra canchas sintéticas por horas y asigna pedidos a personas, no a mesas.",
    icon: CalendarCheck,
    color: "bg-tertiary",
  },
  {
    title: "Eventos y Boletas",
    description:
      "Vende boletas, gestiona accesos y obtén reportes de eventos tipo bingo familiar.",
    icon: Ticket,
    color: "bg-primary-container",
  },
];

export const ROLES: Role[] = [
  {
    title: "Administrador",
    description:
      "Configura el negocio, administra usuarios y consulta reportes globales.",
    icon: UserCog,
  },
  {
    title: "Cajero",
    description:
      "Recibe pagos, administra propinas y realiza el cuadre de caja diario.",
    icon: Wallet,
  },
  {
    title: "Cocina",
    description:
      "Recibe las comandas en tiempo real y marca los pedidos como preparados.",
    icon: ChefHat,
  },
  {
    title: "Mesero",
    description:
      "Toma pedidos, asigna comandas a mesas o personas y cobra desde la mesa.",
    icon: ClipboardList,
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

export const SPACES_HIGHLIGHTS = [
  {
    icon: Goal,
    title: "Reservas por horas",
    description:
      "Canchas sintéticas y otros espacios reservables en bloques de una o varias horas, todos los días.",
  },
  {
    icon: ClipboardList,
    title: "Pedidos por persona",
    description:
      "Cada pedido se asigna a una persona, no a una mesa, ideal para grupos en espacios deportivos.",
  },
  {
    icon: BarChart3,
    title: "Ocupación en vivo",
    description:
      "Visualiza la disponibilidad de tus espacios en tiempo real y maximiza el uso del negocio.",
  },
];

export const EVENTS_HIGHLIGHTS = [
  {
    icon: Ticket,
    title: "Venta de boletas",
    description:
      "Crea eventos, vende boletas digitales y lleva el control de ingresos desde un solo lugar.",
  },
  {
    icon: Users,
    title: "Control de accesos",
    description:
      "Valida entradas escaneando boletas y registra el ingreso de cada asistente.",
  },
  {
    icon: BarChart3,
    title: "Reportes básicos",
    description:
      "Métricas claras: boletas vendidas, asistentes y recaudación por evento.",
  },
];

export const DELIVERY_TEASER_ICON = Truck;
