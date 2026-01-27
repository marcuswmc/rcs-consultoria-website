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
    <nav className="sticky top-0 z-50 w-full glass-nav">
      <div className="w-full px-4 md:px-12 xl:px-24 flex h-16 items-center justify-between">
        <div className="max-w-[1920px] mx-auto w-full flex items-center justify-between">
          <Link href="/">
            <a className="flex items-center gap-2 font-extrabold text-lg tracking-tighter text-white">
              <div className="h-8 w-8 bg-accent rounded-lg flex items-center justify-center text-white shadow-lg shadow-accent/20">
                <Rocket className="h-5 w-5" />
              </div>
              <span className="hidden sm:inline">RCS Consultoria</span>
            </a>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <a
                  className={cn(
                    "text-xs font-bold transition-all hover:text-accent uppercase tracking-widest",
                    location === item.href
                      ? "text-accent"
                      : "text-white/60"
                  )}
                >
                  {item.label}
                </a>
              </Link>
            ))}
            <Link href="/contato">
              <Button size="sm" className="font-bold bg-white text-black hover:bg-white/90 px-6 h-10 rounded-full transition-transform hover:scale-105">
                Atendimento Fast
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden border-t border-white/5 bg-background/95 backdrop-blur-2xl p-8 animate-in slide-in-from-top-5 h-screen">
          <div className="flex flex-col gap-8">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <a
                  className={cn(
                    "text-xl font-bold transition-colors hover:text-accent",
                    location === item.href
                      ? "text-accent"
                      : "text-white"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              </Link>
            ))}
            <Link href="/contato">
              <Button className="w-full font-bold h-14 text-lg rounded-2xl" onClick={() => setIsOpen(false)}>
                Atendimento Fast
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
