import { useState, useEffect } from 'react';

interface CountdownProps {
  targetDate: Date;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Countdown = ({ targetDate }: CountdownProps) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timeUnits = [
    { value: timeLeft.days, label: 'Días' },
    { value: timeLeft.hours, label: 'Horas' },
    { value: timeLeft.minutes, label: 'Min' },
    { value: timeLeft.seconds, label: 'Seg' },
  ];

  return (
    <div className="text-center py-10 animate-fade-in">
      <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground mb-8 font-sans font-medium">
        Cuenta Regresiva
      </p>
      
      <div className="flex justify-center gap-3 md:gap-5">
        {timeUnits.map((unit, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="relative">
              {/* Watercolor-style background */}
              <div className="absolute inset-0 bg-gradient-to-br from-peach/30 via-blush/20 to-transparent rounded-2xl blur-sm" />
              <div className="relative bg-card/60 backdrop-blur-sm border border-gold-light/20 rounded-2xl w-16 h-20 md:w-20 md:h-24 flex flex-col items-center justify-center shadow-sm">
                <span className="text-3xl md:text-4xl font-display text-foreground leading-none">
                  {String(unit.value).padStart(2, '0')}
                </span>
              </div>
            </div>
            <span className="text-[10px] text-muted-foreground mt-3 uppercase tracking-[0.2em] font-sans">
              {unit.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Countdown;
