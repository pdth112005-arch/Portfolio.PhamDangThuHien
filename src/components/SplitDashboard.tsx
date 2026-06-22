import { cn } from "../utils";

export function SplitDashboard({ slide }: { slide: any }) {
  const isLeft = slide.align === 'left'; // Image left, text right
  
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center py-24 px-6 md:px-12 lg:px-24">
      <div className={cn(
        "relative w-full max-w-7xl mx-auto flex flex-col items-center gap-12 lg:gap-20",
        isLeft ? "md:flex-row" : "md:flex-row-reverse"
      )}>
        
        {/* Image Side */}
        <div className="flex-1 w-full flex justify-center">
          {slide.images.side1 && slide.images.side2 ? (
            <div className="w-full flex flex-col gap-6 lg:gap-8 justify-center items-center">
              <img 
                src={slide.images.side1} 
                alt="Dashboard 1" 
                className="w-full h-auto rounded-xl shadow-[0_15px_40px_rgba(0,0,0,0.6)] border border-white/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(0,240,255,0.2)]"
              />
              <img 
                src={slide.images.side2} 
                alt="Dashboard 2" 
                className="w-full h-auto rounded-xl shadow-[0_15px_40px_rgba(0,0,0,0.6)] border border-white/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(0,240,255,0.2)]"
              />
            </div>
          ) : (
            <div className="relative w-full aspect-square md:aspect-[4/5] rounded-2xl overflow-hidden bg-slate border border-white/5 shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(0,240,255,0.15)] group">
              <img 
                src={slide.images.side} 
                alt="Dashboard Visual" 
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
              />
            </div>
          )}
        </div>

        {/* Text Side */}
        <div className="flex-1 flex flex-col gap-6">
          <h2 className="text-cyan font-display font-medium tracking-widest text-sm uppercase">
            {slide.secondaryTitle}
          </h2>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight">
            {slide.primaryTitle}
          </h1>
          
          <div className="mt-6 flex flex-col gap-4">
            {Array.isArray(slide.body) ? (
              slide.body.map((para: string, idx: number) => (
                <p key={idx} className="text-gray-300 text-base md:text-lg leading-relaxed">
                  {para}
                </p>
              ))
            ) : Object.entries(slide.body).map(([key, value]) => (
              <div key={key} className="flex gap-4">
                <span className="text-pink font-semibold min-w-24">{key}</span>
                <span className="text-gray-300">{value as string}</span>
              </div>
            ))}
          </div>

          {slide.keyHighlights && slide.keyHighlights.length > 0 && (
            <div className="mt-8 flex flex-col gap-4 border-l-2 border-cyan/30 pl-6 py-2 bg-gradient-to-r from-cyan/5 to-transparent">
              {slide.keyHighlights.map((highlight: string, idx: number) => (
                <div key={idx} className="flex items-center gap-4">
                  {slide.images.icon && idx === 0 && (
                    <img src={slide.images.icon} alt="Icon" className="w-8 h-8 object-contain" />
                  )}
                  <span className="text-xl font-display font-semibold text-cyan text-shadow-glow">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
