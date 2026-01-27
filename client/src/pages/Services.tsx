import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Building2, Calculator, Briefcase, BarChart3, FileSpreadsheet, Scale } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Building2 className="h-10 w-10" />,
      title: "Abertura e Legalização",
      description: "Processo completo de abertura, alteração contratual e encerramento de empresas. Cuidamos de toda a documentação legal.",
      details: ["CNPJ e Inscrição Estadual", "Alvará de Funcionamento", "Contrato Social", "Regularização Cadastral"]
    },
    {
      icon: <Calculator className="h-10 w-10" />,
      title: "Gestão Tributária",
      description: "Planejamento tributário estratégico para reduzir legalmente sua carga fiscal e garantir conformidade com o fisco.",
      details: ["Apuração de impostos", "Recuperação de créditos", "Planejamento Simples/Lucro Presumido", "Declarações Acessórias"]
    },
    {
      icon: <FileSpreadsheet className="h-10 w-10" />,
      title: "Assessoria Contábil",
      description: "Escrituração contábil completa, balanços, balancetes e relatórios gerenciais para tomada de decisão.",
      details: ["Balanço Patrimonial", "DRE", "Livros Contábeis", "Análise de Performance"]
    },
    {
      icon: <BarChart3 className="h-10 w-10" />,
      title: "Consultoria Empresarial",
      description: "Diagnóstico financeiro e operacional do seu negócio com foco em melhoria de resultados e expansão.",
      details: ["Análise Financeira", "Gestão de Fluxo de Caixa", "Precificação", "Viabilidade de Negócios"]
    },
    {
      icon: <Scale className="h-10 w-10" />,
      title: "Departamento Pessoal",
      description: "Gestão completa de folha de pagamento, admissões, rescisões e cumprimento das obrigações trabalhistas.",
      details: ["Folha de Pagamento", "eSocial", "Férias e 13º", "Rescisões"]
    },
    {
      icon: <Briefcase className="h-10 w-10" />,
      title: "BPO Financeiro",
      description: "Terceirização da gestão financeira da sua empresa. Controle de contas a pagar, receber e conciliação bancária.",
      details: ["Contas a Pagar/Receber", "Conciliação Bancária", "Emissão de Notas Fiscais", "Relatórios Financeiros"]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      <Navbar />
      
      <div className="bg-foreground text-background py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/growth-graphic.png')] bg-cover bg-center opacity-10 mix-blend-overlay" />
        <div className="container px-4 md:px-6 relative z-10 text-center">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Nossas Soluções</h1>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              Serviços especializados para cada etapa da vida da sua empresa.
            </p>
          </motion.div>
        </div>
      </div>

      <section className="py-20 -mt-10">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-all hover:-translate-y-1 border-muted/60">
                  <CardHeader>
                    <div className="mb-4 inline-flex p-3 rounded-2xl bg-primary/10 text-primary w-fit">
                      {service.icon}
                    </div>
                    <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                    <CardDescription className="text-base">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center text-sm text-muted-foreground">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary mr-2" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 text-center bg-muted/30 rounded-3xl p-12 border border-border/50">
            <h2 className="text-3xl font-bold mb-4">Não encontrou o que precisa?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Entre em contato conosco para uma consultoria personalizada. Desenvolvemos soluções sob medida para o seu modelo de negócio.
            </p>
            <Link href="/contato">
              <Button size="lg" className="font-bold">Fale com um Consultor</Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
