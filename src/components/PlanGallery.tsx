import { useRef } from 'react';

export function PlanGallery({ slide }: { slide: any }) {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="min-h-screen flex flex-col justify-center px-8 md:px-12 py-24 bg-obsidian relative overflow-hidden">
      {/* Structural subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col gap-12 items-center justify-center h-full">
        {slide.plans && slide.plans.length >= 3 && (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 w-full items-center">
            {/* Left Column: Plan 1 & Plan 3 */}
            <div className="col-span-1 md:col-span-5 flex flex-col gap-12">
              {[slide.plans[0], slide.plans[2]].map((plan: any, index: number) => (
                <div key={index} className="flex flex-col gap-6 group">
                  <h3 className="text-xl md:text-2xl font-display font-bold text-center text-white tracking-wide group-hover:text-cyan transition-colors duration-300">
                    {plan.title}
                  </h3>
                  <div className="relative w-full rounded-2xl overflow-hidden border border-white/10 shadow-[0_15px_40px_rgba(0,0,0,0.6)] group-hover:shadow-[0_20px_50px_rgba(0,240,255,0.4)] transition-all duration-500 group-hover:-translate-y-2 flex items-start justify-center bg-transparent">
                    <img 
                      src={plan.image} 
                      alt={plan.title} 
                      className="w-full h-auto object-contain rounded-2xl transition-transform duration-700 opacity-90 group-hover:opacity-100"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column: Plan 2 */}
            <div className="col-span-1 md:col-span-7 flex flex-col gap-6 group h-full justify-center">
              <h3 className="text-xl md:text-2xl font-display font-bold text-center text-white tracking-wide group-hover:text-cyan transition-colors duration-300">
                {slide.plans[1].title}
              </h3>
              <div className="relative w-full rounded-2xl overflow-hidden border border-white/10 shadow-[0_15px_40px_rgba(0,0,0,0.6)] group-hover:shadow-[0_20px_50px_rgba(0,240,255,0.4)] transition-all duration-500 group-hover:-translate-y-2 flex items-start justify-center bg-transparent">
                <img 
                  src={slide.plans[1].image} 
                  alt={slide.plans[1].title} 
                  className="w-full h-auto object-contain scale-[1.05] rounded-2xl transition-transform duration-700 opacity-90 group-hover:opacity-100"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
