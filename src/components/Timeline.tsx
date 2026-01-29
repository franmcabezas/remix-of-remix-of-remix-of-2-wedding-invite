import { Church, Wine, MapPin } from 'lucide-react';
import { useState, useCallback } from 'react';

interface Particle {
  id: number;
  left: number;
  delay: number;
  duration: number;
  color: string;
  type: 'petal' | 'confetti';
}

interface TimelineEvent {
  time: string;
  title: string;
  location: string;
  mapUrl: string;
  icon: React.ReactNode;
  effectType: 'petals' | 'confetti';
}

const Timeline = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  const triggerEffect = useCallback((type: 'petals' | 'confetti') => {
    const colors = type === 'petals' 
      ? ['#E8C4A0', '#F5D6BA', '#FFDAB9', '#FFE4C4', '#FFD699']
      : ['#D4A574', '#E8C4A0', '#C9A86C', '#9CAF88', '#F5D6BA', '#FFD700'];
    
    const pieces: Particle[] = Array.from({ length: 40 }, (_, i) => ({
      id: Date.now() + i,
      left: Math.random() * 100,
      delay: Math.random() * 1.5,
      duration: 2 + Math.random() * 2,
      color: colors[Math.floor(Math.random() * colors.length)],
      type: type === 'petals' ? 'petal' : 'confetti',
    }));
    
    setParticles(pieces);
    setTimeout(() => setParticles([]), 4500);
  }, []);

  const handleLocationClick = (event: TimelineEvent) => {
    triggerEffect(event.effectType);
    window.open(event.mapUrl, '_blank');
  };

  const events: TimelineEvent[] = [
    {
      time: '17:00 hs',
      title: 'Ceremonia Religiosa',
      location: 'Vicaria María Inmaculada, Grand Bourg',
      mapUrl: 'https://www.google.com/maps/place/Parroquia+Maria+Immaculada/@-24.7761866,-65.520049,12236m/data=!3m1!1e3!4m10!1m2!2m1!1sIglesia+Maria+Inmaculada+salta!3m6!1s0x941bc23ba6294641:0x5e9a027dfdb4c0d8!8m2!3d-24.7761866!4d-65.4438313!15sCh5JZ2xlc2lhIE1hcmlhIElubWFjdWxhZGEgc2FsdGFaICIeaWdsZXNpYSBtYXJpYSBpbm1hY3VsYWRhIHNhbHRhkgEGcGFyaXNomgEjQ2haRFNVaE5NRzluUzBWSlEwRm5TVU14ZG5ZdFNGWkJFQUXgAQD6AQQIABAk!16s%2Fg%2F11hck9flxb?entry=ttu',
      icon: <Church className="w-5 h-5" />,
      effectType: 'petals',
    },
    {
      time: '19:00 hs',
      title: 'Recepción',
      location: 'Jockey Club',
      mapUrl: 'https://www.google.com/maps/place/Country+Jockey+Club/@-24.8333232,-65.4372244,183m/data=!3m1!1e3!4m14!1m7!3m6!1s0x941bc2c7025f0fb3:0x92343d5ab72a9462!2sJockey+Club+Salta!8m2!3d-24.8329658!4d-65.4356631!16s%2Fg%2F1tf6n8xr!3m5!1s0x941bc3578727a6d5:0x16fc44e9ba93e7bb!8m2!3d-24.8332118!4d-65.4360885!16s%2Fg%2F11l4r4q11f?entry=ttu',
      icon: <Wine className="w-5 h-5" />,
      effectType: 'confetti',
    },
  ];

  return (
    <div className="py-10 animate-fade-in relative">
      {/* Particle effects */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className={`fixed z-50 pointer-events-none animate-confetti ${
            particle.type === 'petal' ? 'w-3 h-4 rounded-[50%_50%_50%_50%/60%_60%_40%_40%]' : 'w-2 h-2 rounded-sm'
          }`}
          style={{
            left: `${particle.left}%`,
            top: '-20px',
            backgroundColor: particle.color,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
            transform: particle.type === 'petal' ? `rotate(${Math.random() * 360}deg)` : undefined,
          }}
        />
      ))}

      <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground mb-10 font-sans text-center font-medium">
        Cronología del día
      </p>
      
      <div className="relative max-w-md mx-auto">
        {/* Vertical line with gradient */}
        <div className="absolute left-8 top-4 bottom-4 w-px bg-gradient-to-b from-gold-light/20 via-gold-light/50 to-gold-light/20" />
        
        <div className="space-y-8">
          {events.map((event, index) => (
            <div key={index} className="relative flex items-start gap-6 pl-4">
              {/* Icon circle with watercolor effect */}
              <div className="relative z-10 flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-br from-peach/50 to-blush/50 rounded-full blur-sm scale-150" />
                <div className="relative w-8 h-8 bg-gradient-to-br from-gold to-gold-light rounded-full flex items-center justify-center text-primary-foreground shadow-sm">
                  {event.icon}
                </div>
              </div>
              
              {/* Content */}
              <div className="flex-1 bg-card/40 backdrop-blur-sm rounded-xl p-5 border border-gold-light/20 shadow-sm">
                <span className="text-gold font-display text-lg italic">{event.time}</span>
                <h3 className="font-display text-xl text-foreground mb-2 mt-1">{event.title}</h3>
                <button
                  onClick={() => handleLocationClick(event)}
                  className="flex items-start gap-2 text-muted-foreground text-sm hover:text-gold transition-colors cursor-pointer text-left group"
                >
                  <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5 text-sage group-hover:text-gold transition-colors" />
                  <span className="font-sans underline-offset-2 group-hover:underline">{event.location}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
