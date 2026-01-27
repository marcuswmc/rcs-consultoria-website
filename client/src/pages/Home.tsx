import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, TrendingUp, ShieldCheck, Clock, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function Home() {
  const features = [
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "100% Online",
      description: "Resolva tudo sem sair de casa. Atendimento ágil e digital."
    },
    {
      icon: <CheckCircle2 className="h-6 w-6 text-primary" />,
      title: "Sem Mensalidade",
      description: "Pague apenas pelo que usar. Transparência total nos custos."
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-primary" />,
      title: "Sem Fidelidade",
      description: "Cancele quando quiser, sem taxas abusivas ou letras miúdas."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 md:pt-32 md:pb-48 overflow-hidden">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-sm font-medium text-primary-foreground/80">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Assessoria Contábil em São Paulo
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1]">
                Gestão Contábil <span className="text-primary">Simples</span> e <span className="text-primary">Estratégica</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-[600px]">
                Abertura de empresas, planejamento tributário e consultoria empresarial sem burocracia. 100% Digital e focada no seu crescimento.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/contato">
                  <Button size="lg" className="font-bold h-12 px-8 text-base shadow-lg shadow-primary/20">
                    Fale com um Especialista
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/servicos">
                  <Button variant="outline" size="lg" className="h-12 px-8 text-base bg-white/50 backdrop-blur-sm">
                    Conheça nossos Serviços
                  </Button>
                </Link>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-[2rem] blur-3xl opacity-50" />
              <img 
                src="/hero-accounting.png" 
                alt="Modern Accounting Office" 
                className="relative rounded-[2rem] shadow-2xl border border-white/20 object-cover w-full h-[600px]"
              />
              
              {/* Floating Cards for Visual Interest */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-border/50 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                    <TrendingUp className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Crescimento Anual</p>
                    <p className="font-bold text-lg text-foreground">+24%</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-none shadow-none bg-muted/30 hover:bg-muted/50 transition-colors">
                  <CardContent className="pt-6">
                    <div className="mb-4 inline-flex p-3 rounded-xl bg-primary/10 text-primary">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-20 bg-foreground text-background overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/10 -skew-x-12 transform origin-bottom" />
        <div className="container px-4 md:px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Pronto para organizar sua empresa?</h2>
            <p className="text-primary-foreground/80 max-w-xl">
              Deixe a burocracia com a gente e foque no que realmente importa: o crescimento do seu negócio.
            </p>
          </div>
          <Link href="/contato">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold px-8 h-14 text-lg">
              Solicitar Proposta Grátis
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
