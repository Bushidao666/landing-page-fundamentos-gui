/**
 * @file: trustIndicatorsData.ts
 * @responsibility: Trust indicators data for Solution Section
 * @exports: trustIndicators
 * @imports: Shield, Clock, CheckCircle, Award (from lucide-react)
 * @layer: data
 */

import { Shield, Clock, CheckCircle, Award } from "lucide-react";

export const trustIndicators = [
  { icon: Shield, text: "100% Seguro" },
  { icon: Clock, text: "Acesso Vitalício" },
  { icon: CheckCircle, text: "Garantia 7 Dias" },
  { icon: Award, text: "Resultados Comprovados" }
];