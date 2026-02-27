import { motion } from "motion/react";
import { Server, Cpu, Globe, Database, Mic, Volume2, Activity, Layers } from "lucide-react";

export default function Architecture() {
  return (
    <section className="py-20 lg:py-32 relative border-t border-white/[0.05]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          <div className="lg:w-1/2">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
              Arquitetura Tecnológica
            </h2>
            <p className="text-text-secondary mb-10 text-lg font-light leading-relaxed">
              A solução opera sobre arquitetura modular baseada em microsserviços e orquestração conversacional em tempo real.
            </p>
            
            <ul className="space-y-4">
              {[
                "Infraestrutura dedicada em nuvem (VPS isolada)",
                "Camada de orquestração de chamadas com controle de concorrência",
                "Integração com provedor global de telefonia (Twilio)",
                "Motor de processamento de linguagem natural (OpenAI API – LLM)",
                "Transcrição em tempo real (Speech-to-Text)",
                "Síntese de voz neural (Text-to-Speech)",
                "Camada de integração via API com CRM, agendas e sistemas externos",
                "Monitoramento e controle de performance"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-text-primary group">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2.5 shrink-0 group-hover:scale-150 transition-transform duration-300" />
                  <span className="text-sm text-text-secondary group-hover:text-white transition-colors">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="relative">
              {/* Glow behind cards */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/10 to-secondary-500/10 blur-[100px] rounded-full opacity-50" />
              
              <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-4">
                <TechCard icon={Server} title="VPS Isolada" subtitle="Infraestrutura Dedicada" delay={0} />
                <TechCard icon={Layers} title="Orquestração" subtitle="Controle de Concorrência" delay={0.1} />
                <TechCard icon={Globe} title="Twilio" subtitle="Telefonia Global" delay={0.2} />
                <TechCard icon={Cpu} title="OpenAI LLM" subtitle="Processamento Natural" delay={0.3} />
                <TechCard icon={Mic} title="Speech-to-Text" subtitle="Transcrição Real-time" delay={0.4} />
                <TechCard icon={Volume2} title="Text-to-Speech" subtitle="Síntese Neural" delay={0.5} />
                <TechCard icon={Database} title="Integração" subtitle="CRM e APIs Externas" delay={0.6} />
                <TechCard icon={Activity} title="Monitoramento" subtitle="Controle de Performance" delay={0.7} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TechCard({ icon: Icon, title, subtitle, delay }: { icon: any, title: string, subtitle: string, delay: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.4 }}
      className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.05] flex items-center gap-4 hover:bg-white/[0.05] hover:border-primary-500/30 transition-all duration-300 group cursor-default"
    >
      <div className="p-2.5 rounded-lg bg-white/[0.03] text-text-tertiary group-hover:text-primary-500 group-hover:bg-primary-500/10 transition-colors">
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <div className="font-semibold text-white text-sm group-hover:text-primary-100 transition-colors">{title}</div>
        <div className="text-[10px] text-text-tertiary uppercase tracking-wider font-medium group-hover:text-text-secondary transition-colors">{subtitle}</div>
      </div>
    </motion.div>
  );
}
