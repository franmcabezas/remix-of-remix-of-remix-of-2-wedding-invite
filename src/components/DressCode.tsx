import dressCodeCouple from '@/assets/dress-code-couple.png';

const DressCode = () => {
  return (
    <div className="py-10 text-center animate-fade-in">
      <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground font-sans font-medium mb-6">
        Código de Vestimenta
      </p>
      
      <div className="relative max-w-md mx-auto">
        {/* Watercolor background effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-peach/20 via-transparent to-blush/20 rounded-2xl blur-md" />
        
        <div className="relative bg-card/40 backdrop-blur-sm rounded-2xl p-8 border border-gold-light/20 shadow-sm">
          <h3 className="font-display text-3xl text-foreground mb-6 italic">Elegante</h3>
          
          {/* Couple illustration */}
          <div className="flex justify-center mb-6">
            <img 
              src={dressCodeCouple} 
              alt="Pareja elegante - hombre con smoking y mujer con vestido largo" 
              className="h-40 md:h-48 object-contain"
            />
          </div>
          
          <div className="space-y-3 text-muted-foreground">
            <p className="text-sm font-sans leading-relaxed">
              Por favor, evitar prendas de color <span className="font-medium text-foreground">blanco</span>
            </p>
            <p className="text-sm font-sans leading-relaxed">
              y trajes completamente <span className="font-medium text-foreground">azules</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DressCode;
