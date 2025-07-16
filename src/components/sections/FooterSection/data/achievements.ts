/**
 * @file: achievements.ts
 * @responsibility: achievements data for FooterSection
 * @exports: achievements
 * @imports: LucideIcon from lucide-react
 * @layer: data
 */

import { Calendar, TrendingUp, Trophy, Award } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Achievement {
  number: string;
  label: string;
  subtext: string;
  icon: LucideIcon;
  color: string;
}

export const achievements: Achievement[] = [
  {
    number: "13+",
    label: "Anos de Experiência",
    subtext: "Desde o Google AdWords",
    icon: Calendar,
    color: "from-blue-500 to-blue-600"
  },
  {
    number: "300+",
    label: "Negócios Acelerados",
    subtext: "Cases de Sucesso",
    icon: TrendingUp,
    color: "from-green-500 to-green-600"
  },
  {
    number: "R$ MM",
    label: "Em Verba Gerenciada",
    subtext: "Mensalmente",
    icon: Trophy,
    color: "from-purple-500 to-purple-600"
  },
  {
    number: "Vale do Silício",
    label: "Parceiro Oficial Google",
    subtext: "Acesso Privilegiado",
    icon: Award,
    color: "from-[#D4AF37] to-yellow-500"
  },
];