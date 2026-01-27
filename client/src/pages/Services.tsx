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
      icon: <Zap className="h-9 w-9" />,
      title: "Abertura Express",
      description: "Sua empresa aberta em tempo recorde. Resolvemos toda a burocracia legal com velocidade máxima.",
      details: ["CNPJ em dias", "Alvarás Rápidos", "Contratos Ágeis", "Assessoria Completa"]
    },
    {
      icon: <Calculator className="h-9 w-9" />,
      title: "Gestão Tributária Fast",
      description: "Planejamento focado em redução imediata de custos fiscais e conformidade total.",
      details: ["Redução de Impostos", "Recuperação Ágil", "Planejamento Estratégico", "Compliance Digital"]
    },
    {
      icon: <Briefcase className="h-9 w-9" />,
      title: "Consultoria Premium",
      description: "Diagnóstico direto ao ponto para melhorar a saúde financeira do seu negócio hoje.",
      details: ["Análise de Resultados", "Fluxo de Caixa Ágil", "Gestão de Custos", "Estratégia de Expansão"]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans w-full overflow-x-hidden">
      <Navbar />
      
      <div className="bg-primary text-white py-16 md:py-24 relative overflow-hidden w-full">
        <div className="absolute inset-0 bg-[url('/abstract-blue.png')] bg-cover opacity-10" />
        <div className="w-full px-4 md:px-12 xl:px-24 relative z-10 text-center">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5 }}
             className="max-w-[1920px] mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5 tracking-tighter">Soluções <span className="text-accent">Fast</span></h1>
            <p className="text-base md:text-lg text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed">
              Eliminamos as barreiras entre você e o crescimento da sua empresa com entregas rápidas e assertivas.
            </p>
          </motion.div>
        </div>
      </div>

      <section className="py-16 w-full overflow-hidden">
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
                <Card className="h-full hover:shadow-2xl transition-all duration-300 border-none bg-white p-5 rounded-[2rem]">
                  <CardHeader className="space-y-4">
                    <div className="inline-flex p-4 rounded-2xl bg-accent/10 text-accent w-fit">
                      {service.icon}
                    </div>
                    <div>
                      <CardTitle className="text-2xl font-bold text-primary mb-2 tracking-tight">{service.title}</CardTitle>
                      <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <ul className="space-y-3">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center text-base font-medium text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-accent mr-2.5 shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="mt-24 text-center bg-primary rounded-[2.5rem] p-10 md:p-16 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-accent/10 opacity-20 rotate-12 translate-x-1/2" />
            <div className="relative z-10 max-w-3xl mx-auto space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Precisa de uma solução imediata?</h2>
              <p className="text-lg text-primary-foreground/70">
                Nossa equipe está pronta para o atendimento fast. Sem filas, sem espera, apenas resultados.
              </p>
              <Link href="/contato">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-extrabold px-10 h-14 text-lg rounded-xl shadow-2xl">
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
