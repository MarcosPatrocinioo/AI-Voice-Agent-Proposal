import { motion } from "motion/react";
import { Shield, Lock, Server, Scale, Globe, FileCheck } from "lucide-react";

export default function SecurityScalability() {
  return (
    <section className="py-32 relative border-t border-white/[0.05]">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          
          {/* Security Section */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-primary-500/10 text-primary-500">
                <Shield className="w-6 h-6" />
              </div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-white">
                Proteção de Dados
              </h2>
            </div>
            
            <p className="text-text-secondary mb-10 leading-relaxed font-light">
              Compliance total com LGPD e diretrizes de segurança da informação.
            </p>

            <div className="grid gap-4">
              <SecurityCard 
                icon={Lock}
                title="Criptografia"
                description="Dados sensíveis criptografados em repouso e em trânsito (TLS 1.3)."
              />
              <SecurityCard 
                icon={Server}
                title="Isolamento"
                description="Ambiente VPS dedicado, sem compartilhamento de recursos."
              />
              <SecurityCard 
                icon={FileCheck}
                title="Governança"
                description="Logs de auditoria e retenção de dados configurável."
              />
            </div>
          </div>

          {/* Scalability Section */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-secondary-500/10 text-secondary-500">
                <Scale className="w-6 h-6" />
              </div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-white">
                Escalabilidade
              </h2>
            </div>
            
            <p className="text-text-secondary mb-10 leading-relaxed font-light">
              Infraestrutura elástica preparada para crescimento exponencial.
            </p>

            <div className="glass-card rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary-500/10 rounded-full blur-[50px] pointer-events-none" />
              
              <div className="space-y-8 relative z-10">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                    <Globe className="w-5 h-5 text-secondary-500" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Expansão Global</h3>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      Capacidade de realizar milhares de chamadas simultâneas sem degradação de performance.
                    </p>
                  </div>
                </div>

                <div className="h-px bg-white/5" />

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-2xl font-bold text-white mb-1">99.9%</div>
                    <div className="text-xs text-text-tertiary uppercase tracking-wider">Uptime SLA</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white mb-1">∞</div>
                    <div className="text-xs text-text-tertiary uppercase tracking-wider">Concorrência</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function SecurityCard({ icon: Icon, title, description }: { icon: any, title: string, description: string }) {
  return (
    <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/[0.02] transition-colors border border-transparent hover:border-white/[0.05]">
      <Icon className="w-5 h-5 text-text-tertiary mt-1" />
      <div>
        <h3 className="text-white font-medium mb-1">{title}</h3>
        <p className="text-sm text-text-secondary leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
