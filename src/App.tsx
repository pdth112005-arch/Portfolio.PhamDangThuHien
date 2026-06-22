import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import contentData from './data/contentData.json';
import { cn } from './utils';
import { HeroSlide } from './components/HeroSlide';
import { SplitDashboard } from './components/SplitDashboard';
import { AdaptiveShowcase } from './components/AdaptiveShowcase';
import { BentoGrid } from './components/BentoGrid';
import { PlanGallery } from './components/PlanGallery';

import { MediaGallery } from './components/MediaGallery';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeSegment, setActiveSegment] = useState(0);

  useGSAP(() => {
    const panels = gsap.utils.toArray('.slide-panel') as HTMLElement[];

    panels.forEach((panel, i) => {
      ScrollTrigger.create({
        trigger: panel,
        start: 'top center',
        end: 'bottom center',
        onToggle: (self) => {
          if (self.isActive) {
            setActiveSegment(i);
          }
        },
      });

      // Simple entry animation for each slide
      gsap.fromTo(panel, 
        { autoAlpha: 0, y: 50 },
        {
          autoAlpha: 1, 
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: panel,
            start: 'top 80%',
          }
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, { scope: containerRef });

  const renderSlide = (slide: any) => {
    switch (slide.type) {
      case 'Hero':
        return <HeroSlide slide={slide} />;
      case 'SplitDashboard':
        return <SplitDashboard slide={slide} />;
      case 'AdaptiveShowcase':
        return <AdaptiveShowcase slide={slide} />;
      case 'BentoGrid':
        return <BentoGrid slide={slide} />;
      case 'PlanGallery':
        return <PlanGallery slide={slide} />;
      case 'MediaGallery':
        return <MediaGallery slide={slide} />;
      default:
        return null;
    }
  };

  return (
    <div ref={containerRef} className="bg-obsidian text-white relative">
      {/* Header Glassmorphism */}
      <header className="fixed top-0 left-0 right-0 z-50 h-20 bg-obsidian/65 backdrop-blur-md border-b border-white/10 flex items-center px-8 md:px-12">
        <div className="font-display font-bold text-xl tracking-wider uppercase">
          PHẠM ĐẶNG THU HIỀN <span className="text-cyan">-</span> PORTFOLIO
        </div>
      </header>

      {/* Scrollspy Navigation Dots */}
      <div className="fixed right-6 md:right-10 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4">
        {contentData.slides.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              const panels = document.querySelectorAll('.slide-panel');
              if (panels[i]) {
                panels[i].scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="w-8 h-8 flex items-center justify-center group focus:outline-none"
            aria-label={`Go to slide ${i + 1}`}
          >
            <div className={cn(
              "w-2 h-2 rounded-full transition-all duration-300",
              activeSegment === i 
                ? "bg-cyan scale-150 shadow-[0_0_10px_rgba(0,240,255,0.8)]" 
                : "bg-white/20 group-hover:bg-white/50 group-hover:scale-125"
            )} />
          </button>
        ))}
      </div>

      {/* Main Content */}
      <main className="w-full flex flex-col">
        {contentData.slides.map((slide, index) => (
          <section key={slide.id} className="slide-panel w-full relative">
            {renderSlide(slide)}
          </section>
        ))}
      </main>
    </div>
  );
}
