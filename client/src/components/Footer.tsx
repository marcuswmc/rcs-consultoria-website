import { Link } from "wouter";
import { Mail, Phone, MapPin, Instagram, Linkedin, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card border-t py-12 px-4 md:px-6">
      <div className="container mx-auto grid gap-8 md:grid-cols-4">
        <div className="space-y-4">
          <Link href="/">
            <a className="flex items-center gap-2 font-bold text-xl tracking-tighter">
              <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-extrabold">
                R
              </div>
              <span>RCS Consultoria</span>
            </a>
          </Link>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Sua parceira estratégica para crescimento financeiro e gestão tributária eficiente em São Paulo.
          </p>
        </div>

        <div>
          <h3 className="font-bold mb-4">Links Rápidos</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link href="/"><a className="hover:text-primary transition-colors">Home</a></Link></li>
            <li><Link href="/servicos"><a className="hover:text-primary transition-colors">Serviços</a></Link></li>
            <li><Link href="/contato"><a className="hover:text-primary transition-colors">Contato</a></Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-4">Serviços</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Abertura de Empresas</li>
            <li>Gestão Tributária</li>
            <li>Assessoria Contábil</li>
            <li>Consultoria Empresarial</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-4">Contato</h3>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-primary" />
              <span>011 98380-6959</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-primary" />
              <span>rcscontabilidade22@gmail.com</span>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              <span>São Paulo - SP</span>
            </li>
          </ul>
          <div className="flex gap-4 mt-6">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Instagram className="h-5 w-5" /></a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin className="h-5 w-5" /></a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Facebook className="h-5 w-5" /></a>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-12 pt-8 border-t text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} RCS Consultoria. Todos os direitos reservados.
      </div>
    </footer>
  );
}
