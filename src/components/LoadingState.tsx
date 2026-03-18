import { Heart } from 'lucide-react';

const LoadingState = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center animate-pulse">
        <Heart className="w-12 h-12 text-gold mx-auto mb-4" />
        <p className="text-muted-foreground font-serif text-lg">
          Cargando invitación...
        </p>
      </div>
    </div>
  );
};

export default LoadingState;
