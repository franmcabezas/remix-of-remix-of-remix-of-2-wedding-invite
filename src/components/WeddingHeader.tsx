import { Heart } from 'lucide-react';
import florArriba from '/home/franmcabezas/remix-of-remix-of-remix-of-2-wedding-invite/src/assets/flor_arriba.png';
import florAbajo from '/home/franmcabezas/remix-of-remix-of-remix-of-2-wedding-invite/src/assets/flor_abajo.png';

interface WeddingHeaderProps {
  coupleName?: string;
  weddingDate?: string;
  location?: string;
}

const WeddingHeader = ({
  coupleName = "Belu & Fran",
  weddingDate = "16 de Mayo, 2026",
  location = "Salta"
}: WeddingHeaderProps) => {
  return (
    <header 
      className="text-center py-16 animate-fade-in relative overflow-hidden rounded-2xl"
    >
      {/* 🌸 Flor arriba derecha */}
      <img
        src={florArriba}
        alt=""
        className="absolute top-3 -right-0 w-[13rem] lg:w-64 opacity-80 pointer-events-none select-none"
      />

      {/* 🌸 Flor abajo izquierda */}
      <img
        src={florAbajo}
        alt=""
        className="absolute bottom-0 left-0 w-[13rem]  lg:w-64 opacity-80 pointer-events-none select-none"
      />
    
      {/* Decorative flourish */}
      <div className="flex items-center justify-center gap-4 mt-9 mb-8 relative z-10">
        <div className="h-px w-20 bg-gradient-to-r from-transparent to-gold-light" />
        <Heart className="w-4 h-4 text-gold fill-gold/30"/>
        <div className="h-px w-20 bg-gradient-to-l from-transparent to-gold-light" />
      </div>
      
      <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground mb-3 font-sans font-medium relative z-10">
        ¡Nos Casamos!
      </p>
      
      <h1 className="text-6xl md:text-6xl lg:text-7xl font-names text-foreground mb-1 leading-tight relative z-10">
        <span className="block italic text-gold">{coupleName.split(' & ')[0]}</span>
        <span className="text-3xl md:text-4xl text-muted-foreground font-serif font-light -mb-3 -my-3 block">&</span>
        <span className="block italic text-gold">{coupleName.split(' & ')[1]}</span>
      </h1>
      
      <div className="flex items-center justify-center gap-3 mb-3 relative z-10">
        <div className="h-px w-12 bg-gold-light" />
        <Heart className="w-4 h-4 text-gold fill-gold/20" />
        <div className="h-px w-12 bg-gold-light" />
      </div>
      
      <p className="text-xs font-names italic tracking-wide mb-3 z-10">
        {weddingDate}
      </p>
      
      <div className="flex items-center justify-center gap-2 text-muted-foreground -mt-2 relative z-10">
        <span className="text-sm font-sans tracking-wide">{location}</span>
      </div>
      
    {/* Espacio extra al final */}
    <div className="h-8 md:h-12 lg:h-16" />
    {/* Espacio extra al final */}
<div className="h-8 md:h-12 lg:h-16" />
    </header>
  );
};

export default WeddingHeader;