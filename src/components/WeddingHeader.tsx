import { Heart } from 'lucide-react';
import { MapPin } from 'lucide-react';

interface WeddingHeaderProps {
  coupleName?: string;
  weddingDate?: string;
  location?: string;
}

const WeddingHeader = ({
  coupleName = "Fran & Belu",
  weddingDate = "16 de Mayo, 2026",
  location = "Salta"
}: WeddingHeaderProps) => {
  return (
    <header className="text-center py-16 animate-fade-in">
      {/* Decorative flourish */}
      <div className="flex items-center justify-center gap-4 mb-8">
        <div className="h-px w-20 bg-gradient-to-r from-transparent to-gold-light" />
        <Heart className="w-4 h-4 text-gold fill-gold/30" />
        <div className="h-px w-20 bg-gradient-to-l from-transparent to-gold-light" />
      </div>
      
      <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground mb-6 font-sans font-medium">
        ¡Nos Casamos!
      </p>
      
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-normal text-foreground mb-8 leading-tight">
        <span className="block italic text-gold">{coupleName.split(' & ')[0]}</span>
        <span className="text-3xl md:text-4xl text-muted-foreground font-serif font-light my-2 block">&</span>
        <span className="block italic text-gold">{coupleName.split(' & ')[1]}</span>
      </h1>
      
      <div className="flex items-center justify-center gap-3 mb-4">
        <div className="h-px w-12 bg-gold-light/50" />
        <span className="text-gold text-lg">❧</span>
        <div className="h-px w-12 bg-gold-light/50" />
      </div>
      
      <p className="text-xl md:text-2xl font-serif text-foreground tracking-wide mb-4 font-light">
        {weddingDate}
      </p>
      
      <div className="flex items-center justify-center gap-2 text-muted-foreground mt-6">
        <MapPin className="w-4 h-4 text-sage" />
        <span className="text-sm font-sans tracking-wide">{location}</span>
      </div>
      
      {/* Bottom flourish */}
      <div className="flex items-center justify-center gap-4 mt-10">
        <div className="h-px w-28 bg-gradient-to-r from-transparent via-gold-light to-transparent" />
      </div>
    </header>
  );
};

export default WeddingHeader;
