/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Hero from "./components/Hero";
import Solution from "./components/Solution";
import Architecture from "./components/Architecture";
import VoiceCloning from "./components/VoiceCloning";
import Pricing from "./components/Pricing";
import SecurityScalability from "./components/SecurityScalability";
import { motion } from "motion/react";
import Logo from "./components/Logo";

export default function App() {
  return (
    <div className="min-h-screen bg-navy-950 text-text-primary font-sans relative overflow-x-hidden">
      {/* Global Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Noise Texture */}
        <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay" />
        
        {/* Technical Grid */}
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        
        {/* Animated Blobs - Reduced opacity for black theme */}
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-primary-500/5 rounded-full blur-[120px] animate-blob mix-blend-screen" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-secondary-500/5 rounded-full blur-[120px] animate-blob animation-delay-2000 mix-blend-screen" />
        <div className="absolute top-[40%] left-[30%] w-[40vw] h-[40vw] bg-blue-600/5 rounded-full blur-[150px] animate-blob animation-delay-4000 mix-blend-screen" />

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full"
              initial={{
                x: Math.random() * 100 + "vw",
                y: Math.random() * 100 + "vh",
                opacity: Math.random() * 0.5 + 0.1,
              }}
              animate={{
                y: [null, Math.random() * -100 + "vh"],
                opacity: [null, 0, null],
              }}
              transition={{
                duration: Math.random() * 20 + 10,
                repeat: Infinity,
                ease: "linear",
                delay: Math.random() * 10,
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Hero />
        <Solution />
        <Architecture />
        <VoiceCloning />
        <Pricing />
        <SecurityScalability />

        <footer className="py-16 border-t border-white/5 bg-navy-950/50 backdrop-blur-sm">
          <div className="container mx-auto px-6 flex flex-col items-center justify-center text-center">
            <Logo className="w-40 mb-6" />
            <p className="text-text-secondary text-sm font-medium mb-2 tracking-wide uppercase">Trayger</p>
            <p className="text-text-tertiary text-sm max-w-md mx-auto mb-8">Automações de Inteligência Artificial para negócios.</p>
            
            <div className="flex flex-col sm:flex-row items-center gap-6 mb-12">
              <a 
                href="https://www.instagram.com/trayger.automacao/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-primary-500 transition-colors text-sm flex items-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                @trayger.automacao
              </a>
              <a 
                href="mailto:patrocinio.works@gmail.com" 
                className="text-text-secondary hover:text-primary-500 transition-colors text-sm flex items-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                patrocinio.works@gmail.com
              </a>
            </div>

            <p className="text-text-tertiary/50 text-xs">© {new Date().getFullYear()} Trayger. Todos os direitos reservados.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

