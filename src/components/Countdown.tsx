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
    { value: timeLeft.minutes, label: 'Minutos' },
    { value: timeLeft.seconds, label: 'Segundos' },
  ];

  return (
    <div className="text-center py-8 animate-fade-in">
      <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6 font-sans">
        Cuenta regresiva
      </p>
      
      <div className="flex justify-center gap-4 md:gap-6">
        {timeUnits.map((unit, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="bg-card/80 backdrop-blur-sm border border-gold-light/30 rounded-lg w-16 h-16 md:w-20 md:h-20 flex items-center justify-center">
              <span className="text-2xl md:text-3xl font-serif text-foreground">
                {String(unit.value).padStart(2, '0')}
              </span>
            </div>
            <span className="text-xs text-muted-foreground mt-2 uppercase tracking-wider">
              {unit.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Countdown;
