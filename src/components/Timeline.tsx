import { Church, Wine, MapPin } from 'lucide-react';

interface TimelineEvent {
  time: string;
  title: string;
  location: string;
  icon: React.ReactNode;
}

const Timeline = () => {
  const events: TimelineEvent[] = [
    {
      time: '17:00 hs',
      title: 'Ceremonia Religiosa',
      location: 'Parroquia Nuestra Señora de la Candelaria, Salta',
      icon: <Church className="w-5 h-5" />,
    },
    {
      time: '19:00 hs',
      title: 'Recepción',
      location: 'Jockey Club, Salta, Argentina',
      icon: <Wine className="w-5 h-5" />,
    },
  ];

  return (
    <div className="py-10 animate-fade-in">
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
                <div className="flex items-start gap-2 text-muted-foreground text-sm">
                  <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5 text-sage" />
                  <span className="font-sans">{event.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
