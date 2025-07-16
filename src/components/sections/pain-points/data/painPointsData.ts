/**
 * @file: painPointsData.ts
 * @responsibility: pain points static data
 * @exports: painPointsData, statisticsData
 * @imports: lucide-react icons
 * @layer: data
 */

import { AlertTriangle, TrendingDown, HelpCircle, Zap } from "lucide-react";

export interface PainPoint {
  icon: typeof AlertTriangle;
  title: string;
  description: string;
  impact: string;
  severity: 'crítico' | 'extremo' | 'alto' | 'devastador';
}

export interface StatisticItem {
  value: number;
  suffix: string;
  description: string;
  color: 'red' | 'gold' | 'orange';
}

export const painPointsData: PainPoint[] = [
  {
    icon: AlertTriangle,
    title: "AQUELE PÂNICO AO ABRIR O PAINEL:",
    description: "Você entra no Google Ads e uma onda de ansiedade te consome. Tantas siglas, gráficos e botões... e a sensação paralisante de que qualquer clique errado pode queimar o orçamento do dia em minutos.",
    impact: "Paralisia por Análise",
    severity: "crítico"
  },
  {
    icon: TrendingDown,
    title: "A DOR DE VER O DINHEIRO VIRAR FUMAÇA:",
    description: "Você investe seu suado dinheiro, vê os cliques chegando, mas o faturamento não mexe. No fim do mês, a conta é amarga: o Google ficou com uma boa parte, e o lucro real que sobrou mal paga o esforço.",
    impact: "Sangramento Financeiro",
    severity: "extremo"
  },
  {
    icon: HelpCircle,
    title: "AS DÚVIDAS QUE TE ASSOMBRAM DE NOITE:",
    description: '"Meu ROAS de 3x é bom ou ruim?", "Qual o CPA ideal pro meu nicho?", "Por que só atraio curioso?", "Devo usar PMax ou essa joça vai torrar minha verba sem controle?".',
    impact: "Insônia Estratégica",
    severity: "alto"
  },
  {
    icon: Zap,
    title: "A FRUSTRAÇÃO DE JÁ TER TENTADO DE TUDO:",
    description: 'Você segue dicas de "gurus", copia campanhas, aperta os botões que te falaram... e o resultado é sempre o mesmo: decepção, dinheiro perdido e a crença de que "Google Ads é muito caro e complicado pra mim".',
    impact: "Ciclo de Fracasso",
    severity: "devastador"
  },
];

export const statisticsData: StatisticItem[] = [
  {
    value: 87,
    suffix: '%',
    description: 'perdem dinheiro nos primeiros 3 meses',
    color: 'red'
  },
  {
    value: 2300000,
    suffix: '',
    description: 'desperdiçados este mês no Brasil',
    color: 'gold'
  },
  {
    value: 156,
    suffix: 'h',
    description: 'perdidas tentando "descobrir sozinho"',
    color: 'orange'
  }
];