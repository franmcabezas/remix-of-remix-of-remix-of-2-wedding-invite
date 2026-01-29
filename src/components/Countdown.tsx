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
            <div className="relative w-16 h-20 md:w-20 md:h-24">
              {/* wash acuarela */}
              <div className="absolute -inset-2 rounded-[24px] bg-gradient-to-br from-peach/50 via-gold-light/30 to-transparent blur-md" />
              {/* "papel" */}
              <div className="absolute inset-0 rounded-2xl bg-card/60 backdrop-blur border border-card/40 shadow-sm" />
              {/* borde orgánico suave */}
              <div className="absolute inset-0 rounded-2xl ring-1 ring-peach/30" />
              <div className="relative h-full flex flex-col items-center justify-center">
                <span className="text-3xl md:text-4xl font-serif text-foreground leading-none">
                  {String(unit.value).padStart(2, '0')}
                </span>
                <span className="mt-2 text-[10px] md:text-xs tracking-[0.18em] text-muted-foreground">
                  {unit.label}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Countdown;
