import { motion } from "motion/react";
import { Bot, ChevronRight, Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm text-primary-500 text-xs font-medium mb-8 hover:bg-white/[0.05] transition-colors cursor-default"
            >
              <Bot className="w-3.5 h-3.5" />
              <span className="tracking-wide uppercase">Proposta Comercial</span>
              <div className="w-px h-3 bg-white/10 mx-1" />
              <span className="text-text-tertiary">Confidencial</span>
            </motion.div>

            <h1 className="font-heading text-5xl lg:text-7xl font-bold text-white mb-8 leading-[1.1] tracking-tight">
              Voice Agent <br />
              <span className="text-gradient bg-300% animate-shimmer">Outbound</span>
            </h1>

            <p className="text-lg text-text-secondary mb-10 leading-relaxed max-w-lg font-light">
              Solução de automação conversacional baseada em inteligência artificial para realizar ligações autônomas, interagir em tempo real e qualificar leads.
            </p>
          </motion.div>

          {/* Visual Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, rotateY: 10 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="relative perspective-1000"
          >
            {/* Main Card */}
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-navy-900/50 backdrop-blur-sm aspect-[4/3] group">
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent opacity-50" />
              
              <img 
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1632&auto=format&fit=crop" 
                alt="Professional using phone" 
                className="w-full h-full object-cover opacity-40 mix-blend-luminosity group-hover:opacity-50 transition-opacity duration-700"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/50 to-transparent" />
              
              {/* Floating UI Element: Waveform */}
              <div className="absolute bottom-8 left-8 right-8 p-6 glass-card rounded-xl">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary-500/20 flex items-center justify-center text-primary-500 font-bold border border-primary-500/20">
                    AI
                  </div>
                  <div>
                    <div className="text-sm text-white font-medium">Assistente Virtual</div>
                    <div className="text-xs text-primary-500 flex items-center gap-1.5">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-500 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary-500"></span>
                      </span>
                      Em chamada agora...
                    </div>
                  </div>
                </div>
                
                {/* Animated Waveform */}
                <div className="flex items-center justify-center gap-1 h-12">
                  {[...Array(30)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-1 bg-gradient-to-t from-primary-500 to-secondary-500 rounded-full"
                      animate={{
                        height: [12, Math.random() * 32 + 12, 12],
                        opacity: [0.3, 1, 0.3]
                      }}
                      transition={{
                        duration: 1.2,
                        repeat: Infinity,
                        delay: i * 0.04,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary-500/20 rounded-full blur-[80px] pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary-500/20 rounded-full blur-[80px] pointer-events-none" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
