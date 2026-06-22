import { cn } from "../utils";

export function HeroSlide({ slide }: { slide: any }) {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center pt-20 pb-16 px-6 md:px-12 lg:px-24">
      {/* Background layer */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${slide.images.bg})` }}
      />
      {/* Optional gradient to ensure text remains readable */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-obsidian/90 via-obsidian/60 to-transparent pointer-events-none" />
      
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center gap-12 lg:gap-24">
        {/* Content Side (Left) */}
        <div className="flex-1 flex flex-col gap-6 md:pr-12 md:pt-12">
          <h2 className="text-cyan font-display font-bold tracking-[0.2em] text-sm md:text-base uppercase bg-cyan/10 text-cyan py-1.5 px-4 rounded-full w-max border border-cyan/20">
            {slide.secondaryTitle}
          </h2>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-extrabold tracking-normal leading-[1.1] flex flex-col">
            {slide.primaryTitle.split('\n').map((line: string, i: number) => (
              <span key={i} className="whitespace-nowrap">{line}</span>
            ))}
          </h1>
          
          <div className="mt-8 flex flex-col gap-4">
            <div className="flex items-center gap-4 text-gray-300">
              <div className="w-8 h-px bg-cyan text-cyan"></div>
              <p className="text-lg font-light tracking-wide">{slide.body.Address}</p>
            </div>
            <div className="flex items-center gap-4 text-gray-300">
              <div className="w-8 h-px bg-cyan text-cyan"></div>
              <p className="text-lg font-light tracking-wide">{slide.body.Phone}</p>
            </div>
            <div className="flex items-center gap-4 text-gray-300">
              <div className="w-8 h-px bg-cyan text-cyan"></div>
              <p className="text-lg font-light tracking-wide">{slide.body.Email}</p>
            </div>
          </div>
        </div>

        {/* Image Side (Right) - Extracted / Modern look */}
        <div className="flex-1 w-full flex justify-center md:justify-center relative h-[50vh] md:h-[80vh] items-start pt-8 md:pt-0 mt-8 md:translate-y-[1.5cm]">
          {/* Set width to 2/3, use a mask to fade out the bottom (pants), scale image up to zoom */}
          <div className="w-[80%] md:w-[75%] aspect-[3/4] md:aspect-[4/5] relative flex items-start justify-center overflow-hidden [mask-image:linear-gradient(to_bottom,black_85%,transparent_100%)] rounded-t-full">
            <img 
              src={slide.images.hero} 
              alt="Hero Portrait" 
              className="w-full h-full object-cover object-[center_top] scale-[1.3] md:scale-[1.4] translate-x-[0.8cm] relative z-10 transition-transform duration-700 hover:scale-[1.45] origin-[50%_30%]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

