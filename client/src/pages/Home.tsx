import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Zap, Rocket, Shield, Clock, ArrowRight, CheckCircle, TrendingUp, BarChart3, PieChart } from "lucide-react";
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
    <div className="min-h-screen flex flex-col bg-background font-sans w-full overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 w-full border-b bg-white overflow-hidden">
        {/* Visible Gradient Overlay */}
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-primary/15 to-transparent pointer-events-none" />
        
        <div className="w-full px-4 md:px-12 xl:px-24 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-[1920px] mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-5"
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-[10px] font-bold text-primary uppercase tracking-widest">
                <div className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                Contabilidade Rápida & Digital
              </div>
              <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-primary leading-tight">
                Sua Contabilidade <br />
                <span className="text-accent">Sem Burocracia.</span>
              </h1>
              <p className="text-base md:text-lg text-muted-foreground max-w-[550px] leading-relaxed">
                Gestão contábil e planejamento tributário em São Paulo com foco em agilidade. Abertura de empresas com rapidez e entregas garantidas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link href="/contato">
                  <Button size="lg" className="font-bold h-11 px-7 text-sm bg-primary hover:bg-primary/90 text-white shadow-lg">
                    Começar Agora
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/servicos">
                  <Button variant="outline" size="lg" className="h-11 px-7 text-sm border-2 font-bold">
                    Nossas Soluções
                  </Button>
                </Link>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative hidden lg:block h-[450px]"
            >
              {/* Evident Decorative Blur Element */}
              <div className="absolute -top-10 -right-10 w-80 h-80 bg-accent/30 rounded-full blur-[100px] animate-pulse" />
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-primary/20 rounded-full blur-[80px]" />
              
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-[2.5rem] -rotate-1" />
              <div className="relative h-full w-full bg-primary rounded-[2.5rem] shadow-2xl overflow-hidden flex items-center justify-center border-4 border-white">
                <div className="absolute inset-0 opacity-40 bg-[url('/abstract-blue.png')] bg-cover bg-center" />
                
                {/* Floating Analytics Card */}
                <motion.div 
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-10 right-10 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-2xl border border-white/40 z-20"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 bg-accent/10 rounded-lg flex items-center justify-center text-accent">
                      <TrendingUp className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-[9px] font-black text-muted-foreground uppercase tracking-widest">Performance</p>
                      <p className="text-base font-black text-primary">+12.5%</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-1/2 -left-6 -translate-y-1/2 bg-white p-4 rounded-3xl shadow-2xl z-20 border-4 border-primary/10"
                >
                  <PieChart className="h-8 w-8 text-accent" />
                </motion.div>

                <div className="relative z-10 text-white p-10 space-y-5">
                  <div className="h-14 w-14 bg-accent rounded-2xl flex items-center justify-center shadow-xl">
                    <Zap className="h-7 w-7 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold leading-tight">Performance Garantida.</h2>
                  <ul className="space-y-2">
                    {["Abertura Express", "Plantão 100% Online", "Planejamento Tributário Ágil"].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-base font-medium">
                        <CheckCircle className="text-accent h-4 w-4 shrink-0" />
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
      <section className="py-16 bg-background w-full overflow-hidden">
        <div className="w-full px-4 md:px-12 xl:px-24">
          <div className="max-w-[1920px] mx-auto">
            <div className="text-center mb-12 space-y-2">
              <h2 className="text-2xl md:text-3xl font-extrabold text-primary tracking-tight">Soluções Rápidas, Resultados Reais</h2>
              <p className="text-base text-muted-foreground max-w-xl mx-auto">Eliminamos a papelada e a demora. Sua empresa pronta para o mercado com velocidade.</p>
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
                  <Card className="h-full border-none shadow-lg bg-white hover:shadow-xl transition-all duration-300 rounded-2xl">
                    <CardContent className="pt-8 pb-8 px-6 text-center space-y-2">
                      <div className="mx-auto mb-3 inline-flex p-3.5 rounded-2xl bg-accent/10 text-accent">
                        {feature.icon}
                      </div>
                      <h3 className="text-lg font-bold text-primary tracking-tight">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Full Width Callout */}
      <section className="py-16 bg-primary text-white w-full overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('/abstract-blue.png')] bg-cover opacity-10" />
        <div className="w-full px-4 md:px-12 xl:px-24 relative z-10">
          <div className="max-w-[1920px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
            <div className="space-y-2">
              <h2 className="text-2xl md:text-4xl font-bold leading-tight">Chega de atrasos. <br /> <span className="text-accent">Sua empresa merece agilidade.</span></h2>
              <p className="text-base text-primary-foreground/70 max-w-lg">Atendimento Fast em São Paulo para quem não tem tempo a perder.</p>
            </div>
            <Link href="/contato">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-bold px-8 h-12 text-base rounded-xl shadow-xl transition-all hover:translate-x-1">
                Contato Imediato
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
