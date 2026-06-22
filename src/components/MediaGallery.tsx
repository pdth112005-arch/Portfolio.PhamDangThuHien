import { useRef } from 'react';

export function MediaGallery({ slide }: { slide: any }) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Helper arrays for the layout
  const squares = slide.images?.square || [];
  const laptops = slide.images?.laptop || [];

  return (
    <div ref={containerRef} className="min-h-screen flex flex-col justify-center px-8 md:px-12 py-24 bg-obsidian relative overflow-hidden">
      {/* Structural subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col gap-12">
        {/* Header Section */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-display font-black tracking-tight text-white uppercase drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
            {slide.primaryTitle}
          </h2>
          {slide.secondaryTitle && (
             <h3 className="text-xl md:text-2xl text-cyan font-sans tracking-wide">
               {slide.secondaryTitle}
             </h3>
          )}
        </div>

        {/* 7 Square Images Grid */}
        {squares.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {squares.map((src: string, index: number) => {
              // Create a masonry-ish layout with some custom spanning or just a neat grid.
              // For 7 images, we might want to make the 7th image span 2 columns or keep it standard.
              // Let us just use a regular grid. The 7th item can span full width on mobile or 2 cols on desktop to fill out.
              const isLastOdd = index === 6;
              return (
                <div 
                  key={index} 
                  className={`relative overflow-hidden bg-slate rounded-2xl border border-white/10 shadow-[0_10px_30px_rgba(0,240,255,0.3)] group-hover:shadow-[0_15px_40px_rgba(0,240,255,0.6)] transition-shadow duration-500 group aspect-square ${isLastOdd ? 'col-span-2 md:col-span-2' : ''}`}
                >
                  <img 
                    src={src} 
                    alt={`Square ${index + 1}`} 
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105" 
                  />
                  {/* Subtle overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </div>
              );
            })}
          </div>
        )}

        {/* 4 Laptop Mockups Grid */}
        {laptops.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 pt-8">
            {laptops.map((src: string, index: number) => (
              <div key={index} className="flex flex-col items-center group">
                {/* Laptop Mockup Box */}
                <div className="relative w-full max-w-2xl aspect-[16/10] bg-slate rounded-t-3xl border-[8px] md:border-[12px] border-obsidian shadow-[0_0_30px_rgba(0,240,255,0.4)] overflow-hidden transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_0_50px_rgba(0,240,255,0.8)] group-hover:border-cyan/20">
                  <img 
                    src={src} 
                    alt={`Laptop Screen ${index + 1}`} 
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-duration-700 group-hover:scale-105"
                  />
                  {/* Glare effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none opacity-50" />
                </div>
                {/* Laptop Base */}
                <div className="w-[110%] max-w-[2.5rem] md:max-w-none md:w-[110%] h-3 md:h-4 bg-gray-800 rounded-b-xl shadow-[0_0_30px_rgba(0,240,255,0.5)] group-hover:shadow-[0_0_60px_rgba(0,240,255,0.8)] transition-all duration-500 relative -mt-1 z-10" style={{ maxWidth: 'calc(100% + 2rem)' }}>
                   <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/4 h-1 md:h-1.5 bg-gray-600 rounded-b-md" />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
