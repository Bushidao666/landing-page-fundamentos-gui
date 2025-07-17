import { Target, TrendingUp, Award, Star } from "lucide-react";
import { Testimonial, Benefit } from "./types";

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "MK",
    title: "Aluno Zero a 100k",
    quote: "Sem dúvidas melhor curso de Google Ads do Brasil",
    description: "Já fiz alguns e não tem nem comparação. Outro nível",
    image: "/images/IMG_0899.jpg",
    highlight: true
  },
  {
    id: 2,
    name: "Nicolas",
    title: "Aluno Zero a 100k", 
    quote: "Material e conteúdo muito rico que você só encontra em cursos bem mais caros",
    description: "Opa Guilherme, ja zerei todos os módulos, terminei hoje inclusive o de traqueamento, já tinha feito diversos cursos e mentorias, e posso dizer com 100% de certeza que essa foi a melhor custo benefício de todas.",
    image: "/images/IMG_1074.jpg",
    highlight: false
  },
  {
    id: 3,
    name: "Tharsis",
    title: "Aluno Zero a 100k",
    quote: "O primeiro módulo já é fenomenal, entender como funciona algoritmo, como o google trabalha é top demais",
    description: "Perfeito, sem problemas, muito obrigado Guilherme, sobre o curso do Google eu estou indo devagar, mas cara, é de explodir a cabeça.",
    image: "/images/IMG_0327.jpg",
    highlight: false
  },
  {
    id: 4,
    name: "Danilo",
    title: "Aluno Zero a 100k",
    quote: "Cara o curso é top d+ eu já tô conseguindo obter resultados. Somente com a teoria.",
    description: "Achei muito bom o aprendizado. Eu consegui ajustar o aprendizado de umas campanhas aqui e começaram a cair vendas.",
    image: "/images/IMG_1328.jpg",
    highlight: true
  },
  {
    id: 5,
    name: "Allan",
    title: "Aluno Zero a 100k",
    quote: "Já vi diversos cursos, e esse seu é de longe o melhor",
    description: "Estou finalizando a introdução do curso e, cara, o conteúdo está bom demaaaaais! Toda a didática, mostrando no início na introdução, fazendo entender a fundo as lógicas do Google ads.",
    image: "/images/IMG_0434.jpg",
    highlight: false
  },
  {
    id: 6,
    name: "Biel",
    title: "Aluno Zero a 100k",
    quote: "Você é o google em pessoa",
    description: "A forma como tu explicou como a pmax funciona quais os conceitos como que ela trabalha. Foi um divisor de águas. Pra quem já é intermediário no google é uma explosão na mente. E pra quem é iniciante já ajuda muito na questão.",
    image: "/images/IMG_1874.jpg",
    highlight: false
  },
  {
    id: 7,
    name: "Lucas",
    title: "Aluno Zero a 100k",
    quote: "O Curso te ensina TUDO de estratégia e planejamento empresarial",
    description: "Cara, so pra te passar um feedback do curso do 0 ao 100k - O Curso te ensina TUDO de estratégia e planejamento empresarial, mais que uma facul, e o quanto isso acaba refletindo nas campanhas do Google, fazendo tudo bem feito, como você explicou ali é IMPOSSÍVEL não ter resultado.",
    image: "/images/IMG_9512.jpg",
    highlight: true
  },
];

export const benefits: Benefit[] = [
  {
    text: "Clareza Mental: Finalmente entenderam como e por que o Google Ads funciona",
    icon: Target
  },
  {
    text: "Resultados Práticos: Começaram a ver melhorias nas campanhas ainda durante o curso",
    icon: TrendingUp
  },
  {
    text: "Confiança: Pararam de operar no \"achismo\" e passaram a tomar decisões baseadas em fundamentos sólidos",
    icon: Award
  },
  {
    text: "Custo-Benefício: Reconheceram que receberam conteúdo de nível premium por uma fração do preço",
    icon: Star
  },
];