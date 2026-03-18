import { Sparkles } from 'lucide-react';
import dressSketch from '@/assets/dress_code.png';

const DressCode = () => {
  return (
    <div className="py-10 text-center animate-fade-in">
      <div className="flex items-center justify-center gap-3 mb-6">
        <Sparkles className="w-5 h-5 text-gold" />
        <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground font-sans font-medium">
          Código de Vestimenta
        </p>
      </div>
      
      <div className="relative max-w-md mx-auto">
        {/* Watercolor background effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-peach/20 via-transparent to-blush/20 rounded-2xl blur-md" />
        
        <div className="relative bg-card/40 backdrop-blur-sm rounded-2xl p-8 border border-gold-light/20 shadow-sm">
          <h1 className="text-2xl text-gold font-display italic">Elegante</h1>
          
          {/* Dress and Suit illustrations */}
          <div className="flex items-center justify-center gap-8 mb-6">
            <div className="flex flex-col items-center gap-2">
              <img src={dressSketch} alt="Vestido formal" className="w-24 h-28 object-contain opacity-70" />
            </div>
            
          </div>
          
         
        </div>
      </div>
    </div>
  );
};

export default DressCode;
