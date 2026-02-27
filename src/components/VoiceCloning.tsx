import { motion } from "motion/react";
import { Mic2, AlertTriangle, CheckCircle2 } from "lucide-react";

export default function VoiceCloning() {
  return (
    <section className="py-32 relative border-t border-white/[0.05]">
      <div className="container mx-auto px-6 relative z-10">
        <div className="glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden">
          {/* Subtle gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-secondary-500/5 to-transparent pointer-events-none" />
          
          <div className="flex flex-col md:flex-row gap-16 items-start relative z-10">
            <div className="md:w-1/2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-500/10 border border-secondary-500/20 text-secondary-500 text-xs font-medium mb-6">
                <Mic2 className="w-3.5 h-3.5" />
                OPÇÃO AVANÇADA
              </div>
              
              <h2 className="font-heading text-3xl font-bold text-white mb-6">
                Clonagem de Voz
              </h2>
              
              <p className="text-text-secondary mb-10 leading-relaxed text-lg font-light">
                Existe a possibilidade de implementação de clonagem de voz personalizada, permitindo que o sistema utilize uma voz exclusiva da marca ou de um representante específico.
              </p>

              <div className="space-y-6">
                <h3 className="text-white font-semibold text-sm uppercase tracking-wider">Vantagens</h3>
                <ul className="space-y-4">
                  {["Fortalecimento de identidade da marca", "Maior proximidade com o público", "Diferenciação estratégica"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-text-secondary group">
                      <CheckCircle2 className="w-5 h-5 text-secondary-500 group-hover:scale-110 transition-transform" />
                      <span className="group-hover:text-white transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="md:w-1/2 w-full">
              <div className="rounded-2xl p-8 border border-amber-500/20 bg-amber-500/[0.02] relative overflow-hidden">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-2.5 rounded-lg bg-amber-500/10 text-amber-500">
                    <AlertTriangle className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Ponto de Atenção Técnico</h3>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      A recomendação é avaliar a aplicação conforme estratégia e experiência desejada.
                    </p>
                  </div>
                </div>

                <ul className="space-y-4 text-sm text-text-secondary">
                  <li className="flex gap-4 items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                    <span>A clonagem de voz adiciona processamento adicional, podendo gerar aumento de latência (em milissegundos por resposta).</span>
                  </li>
                  <li className="flex gap-4 items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                    <span>Em fluxos altamente dinâmicos, pode haver leve impacto na naturalidade da troca.</span>
                  </li>
                  <li className="flex gap-4 items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                    <span>Custos adicionais serão apresentados separadamente.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
