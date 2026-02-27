import { motion } from "motion/react";
import { Check, Info } from "lucide-react";

export default function Pricing() {
  return (
    <section className="py-32 relative border-t border-white/[0.05]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
            Estrutura Financeira
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg font-light">
            Transparência total em custos fixos e variáveis.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Fixed Costs */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-3xl p-10 relative overflow-hidden group"
          >
            {/* Top Highlight */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 opacity-50" />
            
            <div className="mb-10">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="font-heading text-2xl font-bold text-white mb-2">Gestão e Automação</h3>
                  <p className="text-text-secondary text-sm">Mensalidade Fixa</p>
                </div>
                <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-text-tertiary">
                  INFRAESTRUTURA
                </div>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center py-4 border-b border-white/[0.05]">
                  <span className="text-text-secondary">Desenvolvimento e Gestão</span>
                  <span className="text-white font-mono font-medium">R$ 3.000,00</span>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-white/[0.05]">
                  <span className="text-text-secondary">Infraestrutura Dedicada (VPS)</span>
                  <span className="text-white font-mono font-medium">R$ 180,00</span>
                </div>
              </div>

              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-5xl font-bold text-white tracking-tight">R$ 3.180</span>
                <span className="text-text-secondary text-lg">/mês</span>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-primary-500/[0.05] border border-primary-500/10 mb-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-primary-500/5 animate-pulse" />
              <div className="flex items-start gap-4 relative z-10">
                <Info className="w-5 h-5 text-primary-500 shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-bold text-primary-400 mb-2 uppercase tracking-wide">Condição Especial</p>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    Mediante alinhamento e concordância em contraproposta, poderá ser concedido um ajuste comercial de <strong className="text-white">R$ 200,00</strong>, resultando no valor mensal consolidado de:
                  </p>
                  <p className="text-2xl font-bold text-white mt-3">R$ 2.980,00</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 text-sm text-text-tertiary mb-4">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>Setup Gratuito (Sem taxa de implementação)</span>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.05] text-sm text-text-secondary leading-relaxed">
              <strong className="text-white block mb-1">Nota sobre o pagamento:</strong>
              Não será cobrada taxa de implementação. No entanto, deverá haver um adiantamento de 50% da primeira mensalidade para segurança do tempo trabalhado.
            </div>
          </motion.div>

          {/* Variable Costs */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-3xl p-10 relative"
          >
            <div className="mb-10">
              <h3 className="font-heading text-2xl font-bold text-white mb-2">Uso Variável</h3>
              <p className="text-text-secondary text-sm">Responsabilidade do Cliente (Pagamento direto das APIs)</p>
            </div>

            <div className="space-y-8">
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-medium text-white">Estimativa Operacional</span>
                  <span className="text-3xl font-bold text-emerald-400">~R$ 2,25</span>
                </div>
                <div className="w-full bg-white/5 rounded-full h-2 mb-3">
                  <div className="bg-gradient-to-r from-emerald-500 to-primary-500 h-2 rounded-full w-3/4" />
                </div>
                <p className="text-xs text-text-tertiary text-right font-mono">Custo por ligação (média 3 min)</p>
              </div>

              <div className="space-y-6">
                <p className="text-sm font-bold text-white uppercase tracking-wide">APIs Utilizadas</p>
                <div className="grid grid-cols-1 gap-3">
                  {[
                    "Telefonia (Twilio)",
                    "Infraestrutura de voz (Vapi)",
                    "Transcrição (STT)",
                    "Síntese de voz (TTS)",
                    "Modelo de linguagem (OpenAI API)"
                  ].map((api, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm text-text-secondary p-3 rounded-lg hover:bg-white/[0.02] transition-colors">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary-500" />
                      {api}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-4 p-5 rounded-xl bg-emerald-500/[0.05] border border-emerald-500/10 mt-8">
                <Check className="w-5 h-5 text-emerald-500 shrink-0" />
                <p className="text-xs text-emerald-200/70 leading-relaxed">
                  <strong>Transparência Total:</strong> Garantindo o controle operacional e visualização total de gastos, facilitando decisões financeiras estratégicas.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
