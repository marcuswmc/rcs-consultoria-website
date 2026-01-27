import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X, Rocket } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Serviços", href: "/servicos" },
    { label: "Contato", href: "/contato" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur-md">
      <div className="w-full px-4 md:px-12 xl:px-24 flex h-20 items-center justify-between">
        <div className="max-w-[1920px] mx-auto w-full flex items-center justify-between">
          <Link href="/">
            <a className="flex items-center gap-3 font-extrabold text-2xl tracking-tighter text-primary">
              <div className="h-10 w-10 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg">
                <Rocket className="h-6 w-6" />
              </div>
              <span className="hidden sm:inline">RCS Consultoria</span>
            </a>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <a
                  className={cn(
                    "text-base font-bold transition-all hover:text-accent uppercase tracking-wider",
                    location === item.href
                      ? "text-accent border-b-2 border-accent pb-1"
                      : "text-muted-foreground"
                  )}
                >
                  {item.label}
                </a>
              </Link>
            ))}
            <Link href="/contato">
              <Button className="font-extrabold bg-primary hover:bg-primary/90 text-white px-8 h-12 rounded-xl shadow-lg shadow-primary/10">
                Atendimento Fast
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-primary"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden border-t bg-white p-8 animate-in slide-in-from-top-5 h-screen">
          <div className="flex flex-col gap-8">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <a
                  className={cn(
                    "text-2xl font-bold transition-colors hover:text-accent",
                    location === item.href
                      ? "text-accent"
                      : "text-primary"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              </Link>
            ))}
            <Link href="/contato">
              <Button className="w-full font-extrabold h-16 text-xl rounded-2xl" onClick={() => setIsOpen(false)}>
                Atendimento Fast
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
