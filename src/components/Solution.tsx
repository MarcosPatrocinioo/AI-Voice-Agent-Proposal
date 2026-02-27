import { motion } from "motion/react";
import { MessageSquare, Target, CalendarCheck, Power } from "lucide-react";

const features = [
  {
    icon: MessageSquare,
    title: "Conversa natural e contextual",
    description: "Interação fluida e contextual, indistinguível de um humano em muitos casos.",
    color: "text-primary-500"
  },
  {
    icon: Target,
    title: "Qualificação objetiva",
    description: "Orientada à conversão, identificando interesse e potencial do lead.",
    color: "text-secondary-500"
  },
  {
    icon: CalendarCheck,
    title: "Direcionamento estruturado",
    description: "Encaminhamento automático para agendamento ou próxima etapa comercial.",
    color: "text-emerald-400"
  },
  {
    icon: Power,
    title: "Encerramento inteligente",
    description: "Controle de custo e performance com finalização precisa da chamada.",
    color: "text-amber-400"
  }
];

export default function Solution() {
  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
            Visão Geral da <span className="text-gradient">Solução</span>
          </h2>
          <p className="text-text-secondary text-lg font-light leading-relaxed">
            Modelo operacional híbrido (Conversacional Estratégico) projetado para eficiência, previsibilidade e escala.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="glass-card glass-card-hover rounded-2xl p-8 group relative overflow-hidden"
            >
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className={`w-12 h-12 rounded-xl bg-white/[0.03] border border-white/[0.05] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ${feature.color}`}>
                  <feature.icon className="w-6 h-6" />
                </div>
                
                <h3 className="font-heading text-lg font-semibold text-white mb-3 group-hover:text-primary-500 transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-text-secondary leading-relaxed text-sm group-hover:text-text-primary transition-colors">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
