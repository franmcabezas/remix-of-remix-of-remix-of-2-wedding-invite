import { Heart } from 'lucide-react';
import { MapPin } from 'lucide-react';

interface WeddingHeaderProps {
  coupleName?: string;
  weddingDate?: string;
  location?: string;
}
const WeddingHeader = ({
  coupleName = "Fran & Belu",
  weddingDate = "16 de Mayo, 2025",
  location = "Jockey Club, Salta, Argentina"
}: WeddingHeaderProps) => {
  return <header className="text-center py-12 animate-fade-in">
      <div className="flex items-center justify-center gap-3 mb-6">
        <div className="h-px w-16 bg-gold-light" />
        <Heart className="w-5 h-5 text-gold fill-gold/20" />
        <div className="h-px w-16 bg-gold-light" />
      </div>
      
      <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4 font-sans">¡NOS CASAMOS!</p>
      
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-light text-foreground mb-6 italic">
        {coupleName}
      </h1>
      
      <p className="text-lg font-serif text-gold tracking-wide mb-4">
        {weddingDate}
      </p>
      
      <div className="flex items-center justify-center gap-2 text-muted-foreground">
        <MapPin className="w-4 h-4" />
        <span className="text-sm font-sans">{location}</span>
      </div>
      
      <div className="flex items-center justify-center gap-3 mt-8">
        <div className="h-px w-24 bg-gold-light" />
        <span className="text-gold text-xl">✦</span>
        <div className="h-px w-24 bg-gold-light" />
      </div>
    </header>;
};
export default WeddingHeader;