
import React, { useEffect, useState } from 'react';
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-6 px-6 md:px-8",
        scrolled ? "bg-background/90 backdrop-blur-sm border-b border-white/5" : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        <div 
          className="text-2xl font-bold cursor-pointer transition-colors hover:text-primary"
          onClick={() => scrollTo('hero')}
        >
          Ishank Gera
        </div>
        
        <nav className="hidden md:flex space-x-10 text-base font-medium">
          {['about', 'education', 'experience', 'skills', 'projects', 'achievements', 'contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className="transition-colors hover:text-primary capitalize"
            >
              {item}
            </button>
          ))}
        </nav>
        
        <div className="md:hidden">
          {/* Mobile menu button would go here */}
        </div>
      </div>
    </header>
  );
};

export default Navbar;