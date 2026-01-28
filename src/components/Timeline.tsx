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
    <div className="py-8 animate-fade-in">
      <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-8 font-sans text-center">
        Cronología del día
      </p>
      
      <div className="relative max-w-md mx-auto">
        {/* Vertical line */}
        <div className="absolute left-8 top-0 bottom-0 w-px bg-gold-light/50" />
        
        <div className="space-y-8">
          {events.map((event, index) => (
            <div key={index} className="relative flex items-start gap-6 pl-4">
              {/* Icon circle */}
              <div className="relative z-10 flex-shrink-0 w-8 h-8 bg-gold rounded-full flex items-center justify-center text-primary-foreground">
                {event.icon}
              </div>
              
              {/* Content */}
              <div className="flex-1 bg-card/50 backdrop-blur-sm rounded-lg p-4 border border-gold-light/30">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-gold font-serif text-lg">{event.time}</span>
                </div>
                <h3 className="font-serif text-xl text-foreground mb-2">{event.title}</h3>
                <div className="flex items-start gap-1 text-muted-foreground text-sm">
                  <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span>{event.location}</span>
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
