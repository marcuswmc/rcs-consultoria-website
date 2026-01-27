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
    <div className="min-h-screen flex flex-col bg-background font-sans w-full">
      <Navbar />
      
      <div className="flex-1 w-full px-4 md:px-12 xl:px-24 py-16 md:py-24">
        <div className="max-w-[1920px] mx-auto grid lg:grid-cols-2 gap-16 lg:gap-32">
          <motion.div
             initial={{ opacity: 0, x: -20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.6 }}
             className="space-y-12"
          >
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-white">Vamos Conversar?</h1>
              <p className="text-lg text-white/50 leading-relaxed">
                Estamos prontos para ajudar sua empresa a crescer. Entre em contato por telefone, email ou preencha o formulário.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { icon: <Phone className="h-5 w-5" />, label: "Telefone / WhatsApp", value: "011 98380-6959" },
                { icon: <Mail className="h-5 w-5" />, label: "Email", value: "rcscontabilidade22@gmail.com" },
                { icon: <MapPin className="h-5 w-5" />, label: "Localização", value: "São Paulo - SP", sub: "Atendimento 100% Online" }
              ].map((item, idx) => (
                <Card key={idx} className="glass border-none shadow-none rounded-2xl overflow-hidden">
                  <CardContent className="p-6 flex items-center gap-6">
                    <div className="h-12 w-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white/40 uppercase tracking-widest mb-1">{item.label}</p>
                      <p className="text-lg font-bold text-white">{item.value}</p>
                      {item.sub && <p className="text-xs text-white/40">{item.sub}</p>}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, x: 20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.6, delay: 0.2 }}
             className="glass rounded-[2.5rem] p-8 md:p-12"
          >
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-white mb-2">Envie uma mensagem</h2>
              <p className="text-white/40">Preencha seus dados abaixo e entraremos em contato.</p>
            </div>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white/60 text-xs font-bold uppercase tracking-widest">Nome Completo</FormLabel>
                      <FormControl>
                        <Input placeholder="Seu nome" className="h-12 rounded-xl bg-white/5 border-white/10 text-white focus:bg-white/10 focus:border-accent transition-all" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white/60 text-xs font-bold uppercase tracking-widest">Email</FormLabel>
                        <FormControl>
                          <Input placeholder="seu@email.com" className="h-12 rounded-xl bg-white/5 border-white/10 text-white focus:bg-white/10 focus:border-accent transition-all" {...field} />
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
                        <FormLabel className="text-white/60 text-xs font-bold uppercase tracking-widest">Telefone / WhatsApp</FormLabel>
                        <FormControl>
                          <Input placeholder="(11) 99999-9999" className="h-12 rounded-xl bg-white/5 border-white/10 text-white focus:bg-white/10 focus:border-accent transition-all" {...field} />
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
                      <FormLabel className="text-white/60 text-xs font-bold uppercase tracking-widest">Como podemos ajudar?</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Descreva brevemente sua necessidade..." 
                          className="min-h-[120px] rounded-xl bg-white/5 border-white/10 text-white focus:bg-white/10 focus:border-accent transition-all resize-none" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full h-14 text-sm font-bold rounded-xl bg-accent hover:bg-accent/90 text-white shadow-2xl shadow-accent/20 transition-all hover:scale-[1.02]">
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
