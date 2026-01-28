const FloralDecoration = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Top left floral cluster */}
      <div className="absolute -top-20 -left-20 animate-float" style={{ animationDelay: '0s' }}>
        <div className="floral-cluster">
          <div className="flower flower-gold flower-lg" />
          <div className="flower flower-peach flower-md" style={{ top: '60px', left: '80px' }} />
          <div className="flower flower-blush flower-sm" style={{ top: '20px', left: '120px' }} />
          <div className="leaf leaf-1" />
          <div className="leaf leaf-2" />
          <div className="leaf leaf-3" />
        </div>
      </div>

      {/* Top right floral cluster */}
      <div className="absolute -top-16 -right-16 animate-float" style={{ animationDelay: '1.5s' }}>
        <div className="floral-cluster">
          <div className="flower flower-peach flower-lg" />
          <div className="flower flower-gold flower-md" style={{ top: '70px', left: '-60px' }} />
          <div className="flower flower-blush flower-sm" style={{ top: '30px', left: '-100px' }} />
          <div className="leaf leaf-1" style={{ transform: 'scaleX(-1) rotate(-30deg)' }} />
          <div className="leaf leaf-2" style={{ transform: 'scaleX(-1) rotate(20deg)', left: '-80px' }} />
        </div>
      </div>

      {/* Bottom left floral cluster */}
      <div className="absolute -bottom-24 -left-24 animate-float" style={{ animationDelay: '2s' }}>
        <div className="floral-cluster">
          <div className="flower flower-blush flower-lg" />
          <div className="flower flower-gold flower-md" style={{ top: '-50px', left: '70px' }} />
          <div className="flower flower-peach flower-sm" style={{ top: '-80px', left: '30px' }} />
          <div className="leaf leaf-4" />
          <div className="leaf leaf-5" />
        </div>
      </div>

      {/* Bottom right floral cluster */}
      <div className="absolute -bottom-20 -right-20 animate-float" style={{ animationDelay: '3s' }}>
        <div className="floral-cluster">
          <div className="flower flower-gold flower-lg" />
          <div className="flower flower-blush flower-md" style={{ top: '-60px', left: '-70px' }} />
          <div className="flower flower-peach flower-sm" style={{ top: '-30px', left: '-110px' }} />
          <div className="leaf leaf-4" style={{ transform: 'scaleX(-1) rotate(30deg)', left: '-60px' }} />
          <div className="leaf leaf-5" style={{ transform: 'scaleX(-1)', left: '-90px' }} />
        </div>
      </div>

      {/* Scattered petals - top */}
      <div className="absolute top-32 left-8 petal petal-gold animate-float" style={{ animationDelay: '0.5s' }} />
      <div className="absolute top-48 right-12 petal petal-peach animate-float" style={{ animationDelay: '2.5s' }} />
      <div className="absolute top-24 left-1/3 petal petal-blush animate-float" style={{ animationDelay: '1s' }} />

      {/* Scattered petals - bottom */}
      <div className="absolute bottom-40 left-12 petal petal-peach animate-float" style={{ animationDelay: '1.5s' }} />
      <div className="absolute bottom-32 right-8 petal petal-gold animate-float" style={{ animationDelay: '3.5s' }} />
      <div className="absolute bottom-48 right-1/3 petal petal-blush animate-float" style={{ animationDelay: '2s' }} />
    </div>
  );
};

export default FloralDecoration;
