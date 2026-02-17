"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Serviços", href: "/servicos" },
    { label: "Contato", href: "/contato" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur-md">
      <div className="w-full px-4 md:px-12 xl:px-24 flex h-16 md:h-20 items-center justify-between">
        <div className="max-w-[1920px] mx-auto w-full flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl md:text-2xl tracking-tighter text-primary group">
            <span className="group-hover:text-accent transition-colors">RCS Consultoria</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 xl:gap-10">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-semibold transition-all hover:text-accent uppercase tracking-wider",
                  pathname === item.href ? "text-accent" : "text-muted-foreground",
                )}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/contato">
              <Button className="font-bold bg-primary hover:bg-primary/90 text-white px-6 h-10 rounded-lg shadow-md">
                Atendimento Fast
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-primary"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden border-t bg-white p-6 animate-in slide-in-from-top-5 h-[calc(100vh-4rem)]">
          <div className="flex flex-col gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-lg font-bold transition-colors hover:text-accent",
                  pathname === item.href ? "text-accent" : "text-primary",
                )}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/contato">
              <Button className="w-full font-bold h-12 text-lg rounded-xl" onClick={() => setIsOpen(false)}>
                Atendimento Fast
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
