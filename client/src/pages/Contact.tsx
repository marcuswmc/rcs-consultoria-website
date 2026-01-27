import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

const formSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  email: z.string().email("Email inválido"),
  phone: z.string().min(10, "Telefone inválido"),
  message: z.string().optional(),
});

export default function Contact() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve.",
    });
    form.reset();
  }

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans w-full overflow-x-hidden">
      <Navbar />
      
      <div className="flex-1 w-full px-4 md:px-12 xl:px-24 py-12 md:py-20">
        <div className="max-w-[1920px] mx-auto grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          <motion.div
             initial={{ opacity: 0, x: -20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.5 }}
             className="w-full"
          >
            <h1 className="text-3xl md:text-5xl font-extrabold mb-6 text-primary tracking-tight">Vamos Conversar?</h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed">
              Estamos prontos para impulsionar sua empresa. Entre em contato por telefone, email ou preencha o formulário para um atendimento fast.
            </p>

            <div className="space-y-6 w-full">
              <Card className="border-none shadow-sm bg-white hover:shadow-md transition-shadow w-full">
                <CardContent className="p-6 flex items-center gap-6">
                  <div className="h-10 w-10 bg-primary/5 rounded-full flex items-center justify-center text-primary shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Telefone / WhatsApp</p>
                    <p className="text-lg font-bold text-primary truncate">011 98380-6959</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-sm bg-white hover:shadow-md transition-shadow w-full">
                <CardContent className="p-6 flex items-center gap-6">
                  <div className="h-10 w-10 bg-primary/5 rounded-full flex items-center justify-center text-primary shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Email</p>
                    <p className="text-lg font-bold text-primary truncate">rcscontabilidade22@gmail.com</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-sm bg-white hover:shadow-md transition-shadow w-full">
                <CardContent className="p-6 flex items-center gap-6">
                  <div className="h-10 w-10 bg-primary/5 rounded-full flex items-center justify-center text-primary shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Localização</p>
                    <p className="text-lg font-bold text-primary truncate">São Paulo - SP</p>
                    <p className="text-sm text-muted-foreground truncate">Atendimento 100% Online para todo Brasil</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, x: 20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.5, delay: 0.2 }}
             className="bg-white rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-10 shadow-2xl border border-border/50 w-full"
          >
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-2">Envie uma mensagem</h2>
              <p className="text-muted-foreground">Preencha seus dados abaixo para um retorno rápido.</p>
            </div>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs font-bold uppercase text-muted-foreground">Nome Completo</FormLabel>
                      <FormControl>
                        <Input placeholder="Seu nome" className="h-11 rounded-xl bg-muted/30 border-transparent focus:bg-background transition-all" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs font-bold uppercase text-muted-foreground">Email</FormLabel>
                        <FormControl>
                          <Input placeholder="seu@email.com" className="h-11 rounded-xl bg-muted/30 border-transparent focus:bg-background transition-all" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs font-bold uppercase text-muted-foreground">WhatsApp</FormLabel>
                        <FormControl>
                          <Input placeholder="(11) 99999-9999" className="h-11 rounded-xl bg-muted/30 border-transparent focus:bg-background transition-all" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs font-bold uppercase text-muted-foreground">Como podemos ajudar?</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Descreva sua necessidade..." 
                          className="min-h-[100px] rounded-xl bg-muted/30 border-transparent focus:bg-background resize-none transition-all" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full h-12 text-base font-bold rounded-xl shadow-lg shadow-primary/10 bg-primary hover:bg-primary/90 text-white">
                  Enviar Mensagem
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
