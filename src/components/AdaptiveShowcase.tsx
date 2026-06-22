import { cn } from "../utils";

export function AdaptiveShowcase({ slide }: { slide: any }) {
  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center py-24 px-6 md:px-12 lg:px-24">
      {/* Background layer */}
      {slide.images.bg && (
        <div 
          className="absolute inset-0 z-0 opacity-20 bg-center bg-no-repeat bg-contain"
          style={{ backgroundImage: `url(${slide.images.bg})` }}
        />
      )}

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center gap-16">
        <div className="text-center max-w-3xl">
          <h2 className="text-pink font-display font-medium tracking-widest text-sm uppercase mb-4">
            {slide.secondaryTitle}
          </h2>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight">
            {slide.primaryTitle}
          </h1>
        </div>

        {/* Content Row */}
        <div className="w-full flex flex-col lg:flex-row gap-8 items-stretch justify-center">
          {Array.isArray(slide.body) ? (
            slide.body.map((item: string, idx: number) => (
              <div 
                key={idx} 
                className="flex-1 bg-slate rounded-2xl p-8 border border-white/5 shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(255,51,102,0.15)] flex flex-col justify-between"
              >
                <p className="text-gray-300 text-lg leading-relaxed font-medium">
                  {item}
                </p>
                <div className="mt-8 text-pink font-display font-bold text-xl">0{idx + 1}</div>
              </div>
            ))
          ) : null}
          
          {/* Images specifically for certifications or generic */}
          {slide.images.cert1 && slide.images.cert2 && (
             <div className="w-full flex flex-col md:flex-row gap-8 justify-center">
                <div className="flex-1 w-full aspect-[4/3] rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 flex items-center justify-center">
                  <img src={slide.images.cert1} alt="Cert 1" className="w-full h-full object-cover rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.4)] hover:shadow-[0_0_20px_rgba(0,240,255,0.15)] border border-white/5" />
                </div>
                <div className="flex-1 w-full aspect-[4/3] rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 flex items-center justify-center bg-transparent">
                  <img src={slide.images.cert2} alt="Cert 2" className="w-full h-full object-cover scale-[1.15] rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.4)] hover:shadow-[0_0_20px_rgba(0,240,255,0.15)] border border-white/5" />
                </div>
             </div>
          )}
        </div>
      </div>
    </div>
  );
}
