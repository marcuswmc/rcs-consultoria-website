import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Zap, Rocket, Shield, ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import DarkVeil from "@/components/DarkVeil";

export default function Home() {
  const features = [
    {
      icon: <Zap className="h-5 w-5 text-accent" />,
      title: "Entrega Fast",
      description: "Processos otimizados para resultados em tempo recorde. Sem burocracia."
    },
    {
      icon: <Rocket className="h-5 w-5 text-accent" />,
      title: "Soluções Ágeis",
      description: "Planejamento tributário direto ao ponto, focado na sua economia imediata."
    },
    {
      icon: <Shield className="h-5 w-5 text-accent" />,
      title: "Zero Burocracia",
      description: "Foque no seu negócio. Nós resolvemos toda a complexidade contábil por você."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans w-full">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 md:pt-32 md:pb-48 overflow-hidden w-full">
        <DarkVeil speed={0.4} warpAmount={0.2} noiseIntensity={0.03} />
        
        <div className="w-full px-4 md:px-12 xl:px-24 relative z-10">
          <div className="max-w-[1920px] mx-auto text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-bold text-accent uppercase tracking-widest">
                <Rocket className="h-3 w-3" />
                Contabilidade Fast & Digital
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-white leading-tight">
                Sua Contabilidade <br />
                <span className="text-accent">Sem Burocracia.</span>
              </h1>
              <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
                Gestão contábil e planejamento tributário em São Paulo com foco em agilidade. Abertura de empresas com rapidez e entregas garantidas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center">
                <Link href="/contato">
                  <Button size="lg" className="font-bold h-12 px-8 text-sm bg-white text-black hover:bg-white/90 rounded-full transition-all hover:scale-105 shadow-xl shadow-white/5">
                    Começar Agora
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/servicos">
                  <Button variant="outline" size="lg" className="h-12 px-8 text-sm border-white/10 bg-white/5 backdrop-blur-md rounded-full text-white hover:bg-white/10">
                    Nossas Soluções
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Speed & Results Section */}
      <section className="py-24 bg-background w-full">
        <div className="w-full px-4 md:px-12 xl:px-24">
          <div className="max-w-[1920px] mx-auto">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-2xl md:text-4xl font-extrabold text-white">Soluções Rápidas, Resultados Reais</h2>
              <p className="text-base text-white/40 max-w-2xl mx-auto">Eliminamos a papelada e a demora. Sua empresa pronta para o mercado com velocidade.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full glass border-none hover:bg-white/[0.08] transition-all duration-500 rounded-3xl">
                    <CardContent className="pt-10 pb-10 px-8 text-center space-y-4">
                      <div className="mx-auto mb-4 inline-flex p-4 rounded-2xl bg-accent/10 text-accent">
                        {feature.icon}
                      </div>
                      <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                      <p className="text-sm text-white/50 leading-relaxed">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Callout */}
      <section className="py-24 w-full px-4">
        <div className="max-w-[1920px] mx-auto">
          <div className="glass rounded-[3rem] p-12 md:p-20 text-center space-y-8 overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-accent/20 to-transparent opacity-50" />
            <div className="relative z-10 space-y-6">
              <h2 className="text-3xl md:text-5xl font-bold leading-tight max-w-4xl mx-auto">Chega de atrasos. <br /> <span className="text-accent">Sua empresa merece agilidade.</span></h2>
              <p className="text-base md:text-lg text-white/60 max-w-2xl mx-auto">Atendimento Fast em São Paulo para quem não tem tempo a perder.</p>
              <Link href="/contato">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-bold px-10 h-14 text-sm rounded-full shadow-2xl shadow-accent/20 transition-all hover:translate-y-[-2px]">
                  Solicitar Contato Imediato
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
