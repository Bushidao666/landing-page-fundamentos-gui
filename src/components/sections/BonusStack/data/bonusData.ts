/**
 * @file: bonusData.ts
 * @responsibility: GPTs data structure and bonus information
 * @exports: gptsData, bonusMetrics
 * @imports: lucide-react icons
 * @layer: data
 */

import { Brain, BarChart3, Calculator, Target, Percent, TrendingUp, Calendar, LucideIcon } from "lucide-react";

export interface GPTData {
  id: number;
  name: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  color: string;
}

export interface BonusMetrics {
  totalValue: number;
  communityValue: number;
  passportValue: number;
  gptsValue: number;
  finalPrice: number;
}

export const gptsData: GPTData[] = [
  {
    id: 1,
    name: "O Criador de Anúncios",
    subtitle: "Método M.E.T.A.",
    description: "Cansado de escrever anúncios que não convertem? Este assistente é seu copywriter pessoal. Você fornece as informações do seu produto e ele **cria múltiplas versões de anúncios para o Google e Facebook Ads**, seguindo o meu método M.E.T.A. (Mercado, Emoção, Tática, Ação), prontos para você copiar, colar e testar.",
    icon: Brain,
    color: "from-purple-500 to-pink-600"
  },
  {
    id: 2,
    name: "O Analista de Google Ads",
    subtitle: "Seu Consultor Pessoal",
    description: "Sente que está perdido nos relatórios do Google Ads? Em vez de passar horas tentando decifrar os dados, você simplesmente fornece as métricas principais para este assistente, e ele te entrega uma **análise clara e um plano de ação priorizado**, mostrando exatamente onde estão os problemas (CPA alto, ROAS baixo) e o que você precisa otimizar primeiro.",
    icon: BarChart3,
    color: "from-blue-500 to-cyan-600"
  },
  {
    id: 3,
    name: "A Calculadora de Validação de Precificação",
    subtitle: "Fim do Achismo",
    description: "A dúvida \"será que meu preço está certo?\" acaba aqui. Este assistente te ajuda a **analisar se a sua precificação atual é lucrativa**, considerando custos, margem desejada e o impacto no seu ROAS Mínimo. Ele te dá a confiança para ajustar seus preços com base em dados, não em \"achismo\".",
    icon: Calculator,
    color: "from-green-500 to-emerald-600"
  },
  {
    id: 4,
    name: "O Analisador de Métricas e GAPs de Funil",
    subtitle: "Encontre os Vazamentos",
    description: "Onde exatamente você está perdendo dinheiro no seu site? Este assistente analisa as taxas de conversão da sua jornada de compra (da visita ao checkout) e **aponta com precisão os \"gargalos\" e \"vazamentos\"**, te dizendo onde focar seus esforços de CRO para ter o maior impacto nas vendas.",
    icon: Target,
    color: "from-orange-500 to-red-600"
  },
  {
    id: 5,
    name: "A Calculadora Estratégica de Frete Grátis",
    subtitle: "Lucro sem Pegadinha",
    description: "Oferecer frete grátis pode dobrar suas vendas ou quebrar seu negócio. Este assistente faz a matemática para você. Ele calcula o **impacto do frete grátis na sua margem** e te ajuda a definir as regras certas (como um valor mínimo de pedido) para que essa estratégia coloque dinheiro no seu bolso, não tire.",
    icon: Percent,
    color: "from-yellow-500 to-orange-500"
  },
  {
    id: 6,
    name: "A Calculadora Estratégica de ROAS Piso para Escala",
    subtitle: "Escale com Segurança",
    description: "Quer escalar seu investimento sem queimar o lucro? Este assistente é crucial. Ele calcula o **ROAS \"piso\" (mínimo aceitável) para diferentes cenários de escala**, te dando um guia claro de até onde você pode ir com seus lances e orçamento antes de comprometer a saúde financeira da sua operação.",
    icon: TrendingUp,
    color: "from-indigo-500 to-purple-600"
  },
  {
    id: 7,
    name: "O Planejador Estratégico de Promoções",
    subtitle: "Promoções que Lucram",
    description: "Planejar uma promoção de Dia das Mães ou Black Friday te deixa sobrecarregado? Este assistente **cria um plano de ação estratégico para suas campanhas promocionais**, sugerindo tipos de oferta, canais de divulgação e cronograma, para você nunca mais fazer uma promoção de última hora que só queima sua margem.",
    icon: Calendar,
    color: "from-pink-500 to-rose-600"
  },
];

export const bonusMetrics: BonusMetrics = {
  totalValue: 1041,
  communityValue: 497,
  passportValue: 97,
  gptsValue: 297,
  finalPrice: 47
};

export const communityBenefits = [
  {
    title: "Você Tira Dúvidas Direto Comigo e com a Comunidade:",
    description: "Tem um problema na sua campanha? Uma dúvida estratégica? Joga lá. Eu e centenas de outros donos de e-commerce e gestores de tráfego vamos te ajudar. É o seu suporte de elite."
  },
  {
    title: "Acesso a Vagas de Trabalho (\"LinkeGUI\"):",
    description: "Tenha acesso a oportunidades de trabalho na minha aceleradora, a Pushing Ads, e em negócios de parceiros."
  },
  {
    title: "Fique na Vanguarda do Mercado:",
    description: "Receba análises e notícias do que REALMENTE importa no mercado digital brasileiro, sem o ruído dos \"gurus\"."
  },
  {
    title: "Receba Materiais Novos Toda Semana:",
    description: "Eu uso a comunidade para liberar minhas melhores planilhas, checklists e prompts de IA antes de todo mundo. Você terá acesso em primeira mão."
  }
]; 