import { User } from 'lucide-react';

interface GuestListProps {
  familyName: string;
  guests: string[];
  maxGuests: number;
}

const GuestList = ({ familyName, guests, maxGuests }: GuestListProps) => {
  return (
    <div className="text-center mb-10 animate-slide-up animate-delay-100">
      <h2 className="text-3xl md:text-4xl font-serif font-light text-foreground mb-2">
        Familia {familyName}
      </h2>
      
      <p className="text-muted-foreground text-sm uppercase tracking-widest mb-8">
        {maxGuests} {maxGuests === 1 ? 'lugar reservado' : 'lugares reservados'}
      </p>
      
      <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-gold-light/30 max-w-md mx-auto">
        <p className="text-sm text-muted-foreground uppercase tracking-wider mb-4">
          Invitados
        </p>
        <ul className="space-y-3">
          {guests.map((guest, index) => (
            <li 
              key={index}
              className="flex items-center justify-center gap-3 text-lg font-serif text-foreground"
            >
              <User className="w-4 h-4 text-gold" />
              <span>{guest}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default GuestList;
