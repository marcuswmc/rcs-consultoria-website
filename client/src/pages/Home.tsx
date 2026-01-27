import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Zap, Rocket, Shield, Clock, ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function Home() {
  const features = [
    {
      icon: <Zap className="h-6 w-6 text-accent" />,
      title: "Entrega Fast",
      description: "Processos otimizados para resultados em tempo recorde. Sem burocracia."
    },
    {
      icon: <Rocket className="h-6 w-6 text-accent" />,
      title: "Soluções Ágeis",
      description: "Planejamento tributário direto ao ponto, focado na sua economia imediata."
    },
    {
      icon: <Shield className="h-6 w-6 text-accent" />,
      title: "Zero Burocracia",
      description: "Foque no seu negócio. Nós resolvemos toda a complexidade contábil por você."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans w-full">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 md:pt-32 md:pb-48 overflow-hidden w-full border-b bg-white">
        <div className="w-full px-4 md:px-12 xl:px-24 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-[1920px] mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm font-semibold text-primary">
                <Rocket className="h-4 w-4" />
                Contabilidade Fast & Digital
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-primary leading-[1.05]">
                Sua Contabilidade <br />
                <span className="text-accent">Sem Burocracia.</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-[700px] leading-relaxed">
                Gestão contábil e planejamento tributário em São Paulo com foco em agilidade. Abertura de empresas com rapidez e entregas garantidas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Link href="/contato">
                  <Button size="lg" className="font-bold h-14 px-10 text-lg bg-primary hover:bg-primary/90 text-white shadow-xl shadow-primary/10">
                    Começar Agora
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/servicos">
                  <Button variant="outline" size="lg" className="h-14 px-10 text-lg border-2">
                    Nossas Soluções
                  </Button>
                </Link>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative hidden lg:block h-[600px]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-[2.5rem] -rotate-2" />
              <div className="relative h-full w-full bg-primary rounded-[2.5rem] shadow-2xl overflow-hidden flex items-center justify-center border-8 border-white">
                <div className="absolute inset-0 opacity-40 bg-[url('/abstract-blue.png')] bg-cover bg-center" />
                <div className="relative z-10 text-white p-12 space-y-8">
                  <div className="h-20 w-20 bg-accent rounded-2xl flex items-center justify-center shadow-2xl">
                    <Zap className="h-10 w-10 text-white" />
                  </div>
                  <h2 className="text-4xl font-bold">Performance Garantida.</h2>
                  <ul className="space-y-4">
                    {["Abertura Express", "Plantão 100% Online", "Planejamento Tributário Ágil"].map((item) => (
                      <li key={item} className="flex items-center gap-3 text-xl font-medium">
                        <CheckCircle className="text-accent h-6 w-6 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Speed & Results Section */}
      <section className="py-24 bg-background w-full">
        <div className="w-full px-4 md:px-12 xl:px-24">
          <div className="max-w-[1920px] mx-auto">
            <div className="text-center mb-20 space-y-4">
              <h2 className="text-3xl md:text-5xl font-extrabold text-primary">Soluções Rápidas, Resultados Reais</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Eliminamos a papelada e a demora. Sua empresa pronta para o mercado com velocidade.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-10">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full border-none shadow-xl bg-white hover:scale-105 transition-transform duration-300">
                    <CardContent className="pt-10 pb-10 px-8 text-center space-y-4">
                      <div className="mx-auto mb-6 inline-flex p-5 rounded-3xl bg-accent/10 text-accent">
                        {feature.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-primary">{feature.title}</h3>
                      <p className="text-lg text-muted-foreground leading-relaxed">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Full Width Callout */}
      <section className="py-24 bg-primary text-white w-full overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('/abstract-blue.png')] bg-cover opacity-10" />
        <div className="w-full px-4 md:px-12 xl:px-24 relative z-10">
          <div className="max-w-[1920px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 text-center lg:text-left">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-6xl font-bold leading-tight">Chega de atrasos e burocracia. <br /> <span className="text-accent">Sua empresa merece agilidade.</span></h2>
              <p className="text-xl text-primary-foreground/70 max-w-2xl">Atendimento Fast em São Paulo para quem não tem tempo a perder.</p>
            </div>
            <Link href="/contato">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-extrabold px-12 h-16 text-xl rounded-2xl shadow-2xl transition-all hover:translate-x-2">
                Solicitar Contato Imediato
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
