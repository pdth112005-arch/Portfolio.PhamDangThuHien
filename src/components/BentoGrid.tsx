import { cn } from "../utils";

export function BentoGrid({ slide }: { slide: any }) {
  // S6 vs S9 have different structures. We will adapt based on the slide id or content structure.

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center py-24 px-6 md:px-12 lg:px-24">
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col gap-16">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-cyan font-display font-medium tracking-widest text-sm uppercase mb-4">
            {slide.secondaryTitle}
          </h2>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight">
            {slide.primaryTitle}
          </h1>
        </div>

        {slide.id === 's6' ? (
          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-12 auto-rows-[auto] gap-6">
              {/* S6 Layout */}
              <div className="md:col-span-8 flex flex-col gap-6">
                <div className="bg-slate rounded-2xl p-8 md:p-12 border border-white/5 shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(0,240,255,0.15)] flex flex-col justify-center flex-1">
                  <div className="space-y-6">
                     {Array.isArray(slide.body) && slide.body.map((item: string, idx: number) => (
                        <p key={idx} className="text-gray-300 text-lg">{item}</p>
                     ))}
                  </div>
                </div>
                
                <div className="bg-slate rounded-2xl p-6 border border-white/5 shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(0,240,255,0.15)] flex flex-col sm:flex-row justify-center items-center text-center sm:text-left gap-4">
                  <img src={slide.images.icon} alt="Icon" className="w-10 h-10 opacity-80" />
                  <div>
                    <p className="text-cyan font-display font-bold text-2xl mb-1">{slide.keyHighlights?.[0]}</p>
                    <p className="text-xs text-gray-400">Reach</p>
                  </div>
                </div>
              </div>
              
              <div className="md:col-span-4 flex flex-col gap-6 justify-center">
                <div className="bg-slate rounded-[2.5rem] relative overflow-hidden border-[8px] md:border-[12px] border-obsidian shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(0,240,255,0.4)] hover:border-cyan/20 w-3/4 md:w-full max-w-[260px] mx-auto aspect-[9/17]">
                   {/* Phone Notch */}
                   <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-5 bg-obsidian rounded-b-xl z-20 flex justify-center items-end pb-1">
                     <div className="w-8 h-1 bg-gray-600 rounded-full"></div>
                   </div>
                   <img src={slide.images.main} alt="Campaign" className="absolute inset-0 w-full h-full object-cover opacity-90 hover:opacity-100 transition-all duration-500" />
                   <div className="absolute inset-0 bg-gradient-to-t from-obsidian/90 via-obsidian/20 to-transparent p-6 flex flex-col justify-end z-10 pointer-events-none">
                      <p className="text-pink font-display font-bold text-xl drop-shadow-md">{slide.keyHighlights?.[1]}</p>
                   </div>
                </div>
              </div>
            </div>

            {/* Product Images row */}
            {slide.products && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {slide.products.map((productUrl: string, idx: number) => (
                  <div key={idx} className="flex-1 bg-slate rounded-2xl relative overflow-hidden border border-white/5 shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(0,240,255,0.15)] group aspect-square">
                     <img src={productUrl} alt={`Product ${idx+1}`} className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105" />
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-12 auto-rows-[300px] md:auto-rows-[400px] gap-6">
            {/* S9 Layout */}
            <div className="md:col-span-7 bg-slate rounded-2xl p-8 md:p-12 border border-white/5 shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(0,240,255,0.15)] flex flex-col gap-8 overflow-y-auto hidden-scrollbar">
               {Object.entries(slide.body).map(([key, items]) => (
                <div key={key}>
                  <h3 className="text-pink font-display font-bold text-xl mb-4">{key}</h3>
                  <ul className="space-y-3">
                    {(items as string[]).map((item, idx) => (
                      <li key={idx} className="flex gap-4 items-start text-gray-300">
                        <span className="text-cyan mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
               ))}
            </div>

            <div className="md:col-span-5 flex flex-col gap-6 h-full">
               <div className="flex-1 relative bg-slate rounded-2xl overflow-hidden border border-white/5 shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(0,240,255,0.15)] group">
                  <img src={slide.images.project} alt="Viettel Case" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80" />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/40 to-transparent p-6 flex flex-col justify-end">
                    <p className="font-display font-bold text-xl">Strategic Project</p>
                  </div>
               </div>
               
               <div className="flex-none min-h-[170px] md:min-h-[210px] bg-slate rounded-2xl p-6 border border-white/5 shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(0,240,255,0.15)] flex flex-col items-center justify-center">
                  <p className="text-sm tracking-widest text-gray-400 uppercase mb-4 text-center">Software Stack</p>
                  {slide.images.logos ? (
                    <div className="grid grid-cols-3 gap-y-3 gap-x-4 justify-items-center w-fit mx-auto h-full content-center">
                      {slide.images.logos.map((logo: string, idx: number) => (
                        <div key={idx} className="w-10 h-10 md:w-12 md:h-12 relative flex items-center justify-center transition-all duration-300 hover:scale-110 drop-shadow-[0_10px_15px_rgba(0,0,0,0.5)] bg-white/90 rounded-2xl p-1.5 md:p-2 overflow-hidden shadow-inner">
                          <img src={logo} alt={`software ${idx}`} className="w-full h-full object-contain mix-blend-multiply" />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <>
                      <img src={slide.images.software} alt="Software grid" className="w-full max-h-[80px] object-contain drop-shadow-md" />
                      <p className="text-xs text-center text-gray-500 mt-2">{slide.software}</p>
                    </>
                  )}
               </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
