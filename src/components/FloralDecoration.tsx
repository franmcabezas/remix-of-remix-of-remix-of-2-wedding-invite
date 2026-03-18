const FloralDecoration = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Subtle watercolor paper texture - soft organic blotches */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 15% 20%, hsl(25 60% 88% / 0.5) 0%, transparent 50%),
            radial-gradient(ellipse 60% 80% at 85% 75%, hsl(22 55% 85% / 0.4) 0%, transparent 45%),
            radial-gradient(ellipse 50% 40% at 70% 15%, hsl(30 50% 90% / 0.35) 0%, transparent 40%),
            radial-gradient(ellipse 40% 50% at 25% 80%, hsl(28 45% 87% / 0.3) 0%, transparent 35%)
          `
        }}
      />
      
      {/* Very subtle paper grain texture */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
};

export default FloralDecoration;
