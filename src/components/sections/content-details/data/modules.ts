/**
 * @file: modules.ts
 * @responsibility: module data and content
 * @exports: modules
 * @imports: Module, Brain, Target, Settings, Edit3
 * @layer: data
 */

import { Brain, Target, Settings, Edit3 } from "lucide-react";
import type { Module } from "../types";

export const modules: Module[] = [
  {
    id: 1,
    icon: Brain,
    title: "Entendendo o Jogo",
    subtitle: "A Lógica Por Trás do Resultado",
    description: "Neste módulo, você vai **decifrar a \"mente\" do Google**. Vai entender por que às vezes ele parece seu inimigo e como transformá-lo em seu maior aliado. Vamos cobrir a **Lógica do Algoritmo e dos Lances**, para você parar de pagar caro no leilão, e o **Aprendizado de Campanha**, para controlar a ansiedade inicial. Você finalmente vai entender a **Jornada de Compra** do seu cliente e como o **Funil de Marketing** se aplica DENTRO do Google Ads.",
    highlights: ["Lógica do Algoritmo e dos Lances", "Aprendizado de Campanha", "Jornada de Compra", "Funil de Marketing no Google Ads"],
    lessons: [
      "Como o Google 'pensa' e toma decisões",
      "Estratégias de lances que economizam dinheiro", 
      "Controlando a fase de aprendizado",
      "Mapeando a jornada do seu cliente"
    ],
    color: "from-blue-500 to-purple-600",
    bgColor: "from-blue-500/10 to-purple-600/5"
  },
  {
    id: 2,
    icon: Target,
    title: "Planejamento Estratégico",
    subtitle: "A Base do Seu Lucro Futuro",
    description: "Aqui é onde você para de agir por impulso e começa a planejar como um profissional. Vou te entregar o passo a passo para fazer um **Planejamento de Métricas** que realmente importa, **definir metas** que sejam ambiciosas mas realistas, e o mais importante: vou te dar a planilha e o método para **calcular seu ROAS Mínimo**. É o número que te diz se você está pagando pra trabalhar ou colocando dinheiro no bolso. Chega de achismo sobre \"quanto investir\" ou se \"Google é melhor que Face\".",
    highlights: ["Planejamento de Métricas", "Definição de Metas", "Cálculo do ROAS Mínimo", "Planilhas Estratégicas"],
    lessons: [
      "Criando um plano de métricas eficaz",
      "Definindo metas realistas e ambiciosas",
      "Calculando seu ROAS mínimo",
      "Quando investir e quando parar"
    ],
    color: "from-[#D4AF37] to-yellow-500",
    bgColor: "from-[#D4AF37]/10 to-yellow-500/5"
  },
  {
    id: 3,
    icon: Settings,
    title: "Estrutura de Campanhas",
    subtitle: "O Jeito Certo de Começar",
    description: "Medo de criar a primeira campanha? Esse módulo resolve. Vou te mostrar **por qual tipo de campanha começar** no e-commerce para ter resultados mais rápidos e com mais controle. Você vai aprender os **Critérios Essenciais para Criar Campanhas** que já nascem otimizadas e as **Melhores Práticas de Públicos**, para garantir que seu anúncio apareça para quem tem potencial de comprar, não para curiosos.",
    highlights: ["Tipos de Campanha Ideais", "Critérios Essenciais", "Melhores Práticas de Públicos", "Campanhas Otimizadas"],
    lessons: [
      "Qual tipo de campanha começar primeiro",
      "Critérios para campanhas que convertem",
      "Segmentação de públicos qualificados",
      "Evitando público curioso"
    ],
    color: "from-green-500 to-emerald-600",
    bgColor: "from-green-500/10 to-emerald-600/5"
  },
  {
    id: 4,
    icon: Edit3,
    title: "Criação de Anúncios",
    subtitle: "A Arte de Gerar o Clique Certo",
    description: "De nada adianta uma boa estrutura se o seu anúncio for ruim. Aqui, você aprende as **melhores práticas para criar anúncios que se destacam**, que geram o clique qualificado e que falam a língua do seu cliente, incluindo táticas específicas para **anúncios de Remarketing**. Também vamos passar pelas **Especificações e pela Central de Transparência** para você nunca mais ter um anúncio reprovado por besteira.",
    highlights: ["Anúncios que Se Destacam", "Clique Qualificado", "Táticas de Remarketing", "Aprovação Garantida"],
    lessons: [
      "Criando anúncios que convertem",
      "Gerando cliques qualificados",
      "Estratégias de remarketing avançadas",
      "Evitando reprovações desnecessárias"
    ],
    color: "from-orange-500 to-red-500",
    bgColor: "from-orange-500/10 to-red-500/5"
  },
];