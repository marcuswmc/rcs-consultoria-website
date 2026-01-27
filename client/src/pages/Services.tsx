import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Building2, Calculator, Briefcase, BarChart3, FileSpreadsheet, Scale, Zap, CheckCircle } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Abertura Express",
      description: "Sua empresa aberta em tempo recorde. Resolvemos toda a burocracia legal com velocidade máxima.",
      details: ["CNPJ em dias", "Alvarás Rápidos", "Contratos Ágeis", "Assessoria Completa"]
    },
    {
      icon: <Calculator className="h-8 w-8" />,
      title: "Gestão Tributária Fast",
      description: "Planejamento focado em redução imediata de custos fiscais e conformidade total.",
      details: ["Redução de Impostos", "Recuperação Ágil", "Planejamento Estratégico", "Compliance Digital"]
    },
    {
      icon: <Briefcase className="h-8 w-8" />,
      title: "Consultoria Premium",
      description: "Diagnóstico direto ao ponto para melhorar a saúde financeira do seu negócio hoje.",
      details: ["Análise de Resultados", "Fluxo de Caixa Ágil", "Gestão de Custos", "Estratégia de Expansão"]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans w-full">
      <Navbar />
      
      <div className="bg-primary/40 backdrop-blur-3xl text-white py-20 md:py-24 relative overflow-hidden w-full border-b border-white/5">
        <div className="w-full px-4 md:px-12 xl:px-24 relative z-10 text-center">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5 }}
             className="max-w-[1920px] mx-auto space-y-4"
          >
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tighter uppercase">Soluções <span className="text-accent">Fast</span></h1>
            <p className="text-base md:text-lg text-white/50 max-w-2xl mx-auto leading-relaxed">
              Eliminamos as barreiras entre você e o crescimento da sua empresa com entregas rápidas e assertivas.
            </p>
          </motion.div>
        </div>
      </div>

      <section className="py-20 w-full">
        <div className="w-full px-4 md:px-12 xl:px-24">
          <div className="max-w-[1920px] mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full glass-card hover:bg-white/[0.08] transition-all duration-500 border-none p-6 rounded-[2rem]">
                  <CardHeader className="space-y-4">
                    <div className="inline-flex p-4 rounded-2xl bg-accent/10 text-accent w-fit">
                      {service.icon}
                    </div>
                    <div>
                      <CardTitle className="text-2xl font-bold text-white mb-2">{service.title}</CardTitle>
                      <CardDescription className="text-sm text-white/50 leading-relaxed">{service.description}</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <ul className="space-y-3">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center text-sm font-medium text-white/40">
                          <CheckCircle className="h-4 w-4 text-accent mr-3 shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="mt-24 glass rounded-[3rem] p-12 md:p-16 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-accent/5 opacity-20 rotate-12 translate-x-1/2" />
            <div className="relative z-10 max-w-3xl mx-auto space-y-6">
              <h2 className="text-2xl md:text-4xl font-bold">Precisa de uma solução imediata?</h2>
              <p className="text-base text-white/50">
                Nossa equipe está pronta para o atendimento fast. Sem filas, sem espera, apenas resultados.
              </p>
              <Link href="/contato">
                <Button size="lg" className="bg-white text-black hover:bg-white/90 font-bold px-10 h-12 text-sm rounded-full transition-transform hover:scale-105 shadow-2xl shadow-white/5">
                  Iniciar Consultoria Agora
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
