import { Users, Settings, Clock, CreditCard, Mail, HelpCircle } from "lucide-react";
import type { ComponentType } from "react";

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
  icon: ComponentType;
  keywords: string[];
}

export const faqCategories = [
  { id: "all", label: "Todas", count: 0 },
  { id: "course", label: "Sobre o Curso", count: 0 },
  { id: "payment", label: "Pagamento", count: 0 },
  { id: "access", label: "Acesso", count: 0 },
  { id: "support", label: "Suporte", count: 0 },
];

export const faqData: FAQItem[] = [
  {
    id: "faq-experiencia",
    question: "Já anuncio há um tempo, isso serve pra mim?",
    answer: "Com certeza. Este curso é sobre os fundamentos estratégicos que muitos anunciantes experientes pulam. Se você sente que seus resultados são inconsistentes ou não entende 100% o porquê de suas campanhas performarem bem (ou mal), esta base vai solidificar seu conhecimento e te dar mais controle.",
    category: "course",
    icon: Users,
    keywords: ["experiente", "anunciante", "tempo", "serve", "avançado"]
  },
  {
    id: "faq-campanha-zero",
    question: "Vou aprender a criar uma campanha do zero, passo a passo?",
    answer: "Sim! O Módulo 3 é totalmente focado em como criar e estruturar suas primeiras campanhas do jeito certo, escolhendo o tipo de campanha ideal e configurando os públicos.",
    category: "course",
    icon: Settings,
    keywords: ["criar", "campanha", "zero", "passo", "iniciante", "começar"]
  },
  {
    id: "faq-tempo-acesso",
    question: "O acesso é por quanto tempo?",
    answer: "O acesso ao curso e à Comunidade do Zero ao 100K é VITALÍCIO. Você paga uma vez e tem acesso para sempre, incluindo todas as futuras atualizações do curso Fundamentos.",
    category: "access",
    icon: Clock,
    keywords: ["acesso", "tempo", "vitalício", "prazo", "duração", "sempre"]
  },
  {
    id: "faq-ferramentas-gpt",
    question: "Preciso de alguma ferramenta paga para usar os bônus GPTs?",
    answer: "Os assistentes GPTs são criados na plataforma da OpenAI. Para usá-los em todo seu potencial, é recomendado ter uma assinatura do ChatGPT Plus.",
    category: "course",
    icon: CreditCard,
    keywords: ["ferramenta", "paga", "gpt", "chatgpt", "openai", "bônus"]
  },
  {
    id: "faq-pos-pagamento",
    question: "O que acontece depois que eu pagar?",
    answer: "Imediatamente após a confirmação do pagamento, você receberá um e-mail com seu login e senha para acessar a nossa área de membros, onde todo o curso e os bônus já estarão te esperando.",
    category: "payment",
    icon: Mail,
    keywords: ["pagar", "pagamento", "depois", "email", "login", "senha", "acesso"]
  },
  {
    id: "faq-garantia",
    question: "Como funciona a garantia de 7 dias?",
    answer: "Você tem 7 dias corridos após a compra para solicitar o reembolso integral. Basta enviar um e-mail para nosso suporte que processamos a devolução sem questionamentos.",
    category: "payment",
    icon: HelpCircle,
    keywords: ["garantia", "reembolso", "devolução", "dias", "dinheiro", "volta"]
  }
];

// Atualizar contadores de categoria
faqCategories.forEach(category => {
  if (category.id === "all") {
    category.count = faqData.length;
  } else {
    category.count = faqData.filter(faq => faq.category === category.id).length;
  }
});