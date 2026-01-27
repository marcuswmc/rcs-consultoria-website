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
    <div className="min-h-screen flex flex-col bg-background font-sans">
      <Navbar />
      
      <div className="flex-1 container px-4 md:px-6 py-12 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
          <motion.div
             initial={{ opacity: 0, x: -20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-extrabold mb-6">Vamos Conversar?</h1>
            <p className="text-xl text-muted-foreground mb-12">
              Estamos prontos para ajudar sua empresa a crescer. Entre em contato por telefone, email ou preencha o formulário.
            </p>

            <div className="space-y-8">
              <Card className="border-none shadow-md bg-white">
                <CardContent className="p-6 flex items-center gap-6">
                  <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Telefone / WhatsApp</p>
                    <p className="text-lg font-bold">011 98380-6959</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md bg-white">
                <CardContent className="p-6 flex items-center gap-6">
                  <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Email</p>
                    <p className="text-lg font-bold">rcscontabilidade22@gmail.com</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md bg-white">
                <CardContent className="p-6 flex items-center gap-6">
                  <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Localização</p>
                    <p className="text-lg font-bold">São Paulo - SP</p>
                    <p className="text-sm text-muted-foreground">Atendimento 100% Online para todo Brasil</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, x: 20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.5, delay: 0.2 }}
             className="bg-card rounded-[2rem] p-8 md:p-10 shadow-2xl border border-border/50"
          >
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-2">Envie uma mensagem</h2>
              <p className="text-muted-foreground">Preencha seus dados abaixo e entraremos em contato.</p>
            </div>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nome Completo</FormLabel>
                      <FormControl>
                        <Input placeholder="Seu nome" className="h-12 rounded-xl bg-muted/50 border-transparent focus:bg-background" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="seu@email.com" className="h-12 rounded-xl bg-muted/50 border-transparent focus:bg-background" {...field} />
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
                      <FormLabel>Telefone / WhatsApp</FormLabel>
                      <FormControl>
                        <Input placeholder="(11) 99999-9999" className="h-12 rounded-xl bg-muted/50 border-transparent focus:bg-background" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Como podemos ajudar?</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Descreva brevemente sua necessidade..." 
                          className="min-h-[120px] rounded-xl bg-muted/50 border-transparent focus:bg-background resize-none" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full h-12 text-base font-bold rounded-xl shadow-lg shadow-primary/20">
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
