/**
 * @file: trustIndicatorsData.ts
 * @responsibility: Trust indicators data for Solution Section
 * @exports: trustIndicators
 * @imports: Shield, Clock, CheckCircle, Award (from lucide-react)
 * @layer: data
 */

import { Shield, Clock, CheckCircle, Award } from "lucide-react";

export const trustIndicators = [
  { icon: Shield, text: "Pagamento 100% Seguro" },
  { icon: Clock, text: "Acesso Imediato e Vitalício" },
  { icon: CheckCircle, text: "Garantia Blindada 7 Dias" },
  { icon: Award, text: "Resultados Comprovados" }
];