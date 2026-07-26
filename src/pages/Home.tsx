import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MuxVideo from '@mux/mux-video-react';

const LOGO_URL =
  'https://stunt-route-84150395.figma.site/_assets/v11/4bf0c72a919f5c8d7edcc2b6ee96432d6e85fbec.png';

function AnimatedBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-[#070612]">
      <MuxVideo
        playbackId="s8pMcOvMQXc4GD6AX4e1o01xFogFxipmuKltNfSYza0200"
        autoPlay="muted"
        loop
        muted
        playsInline
        className="absolute left-0 top-0 h-full w-full object-cover origin-left will-change-transform opacity-60"
        style={{ transform: 'translateX(200px) scale(1.2)' }}
      />
      <div className="pointer-events-none absolute bottom-0 left-0 z-10 h-64 w-full bg-gradient-to-t from-[#070612] via-[#070612]/40 to-transparent" />
      <div className="absolute inset-0 bg-black/20 z-[1]" />

      <div className="absolute inset-0 z-[2] opacity-30 mix-blend-screen pointer-events-none">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 opacity-[0.12] mix-blend-overlay pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        </div>
      </div>
    </div>
  );
}

function PillButton() {
  return (
    <Link
      to="/portfolio"
      className="transition-all group relative grid h-20 w-80 cursor-pointer grid-cols-3 rounded-full p-1 z-50 overflow-hidden border-none bg-transparent no-underline"
    >
      <div className="absolute inset-0 rounded-full overflow-hidden flex items-center justify-between pointer-events-none">
        <div className="bg-gradient-to-b w-0 h-72 from-neutral-700 to-neutral-200 transition-all duration-500 group-hover:w-80 rounded-full" />
      </div>

      {/* Left knob (dark) */}
      <div className="relative h-full overflow-hidden rounded-l-full bg-neutral-900 px-2 pt-2 pb-4 shadow-[inset_0px_-2px_10px_rgba(255,255,255,0.1)]">
        <div className="absolute -top-4 -left-10 h-24 w-8 rotate-45 rounded-full bg-white blur-lg transition-transform duration-500 group-hover:translate-x-32" />
        <div className="h-full w-full translate-x-2 rounded-l-full bg-neutral-400 blur-md">
          <div className="h-8 w-full rounded-l-full bg-neutral-50" />
        </div>
      </div>

      {/* Right panel with text */}
      <div className="relative col-span-2 flex h-full justify-end overflow-hidden rounded-r-full border-[2px] border-neutral-600 bg-neutral-800 shadow-[inset_0px_-5px_5px_rgba(0,0,0,0.5)] no-underline">
        <div className="h-16 w-64 rounded-r-full bg-neutral-800 shadow-[inset_-4px_-4px_0px_rgba(255,255,255,0.2)] blur-sm" />
        <div className="absolute top-2 bottom-6 left-0 my-auto w-10/12 rounded-r-full bg-gradient-to-b from-white opacity-20" />
        <div className="absolute top-0 bottom-0 left-0 my-auto w-8 h-4 bg-neutral-700 rounded-r-full" />
        <div className="absolute top-0 bottom-0 left-0 my-auto w-6 h-2 bg-neutral-700 rounded-r-full" />
        <div className="absolute top-0 left-0 flex h-full w-full items-center justify-center text-xl font-semibold text-white opacity-90 transition-all duration-500 group-hover:opacity-100 group-hover:scale-105">
          探索作品集
        </div>
      </div>
    </Link>
  );
}

const footerTags = ['APP', '小程序', '后台', '官网', '活动页', 'AIGC'];

export default function Home() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const id = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(id);
  }, []);

  const reveal = (delay: number) => ({
    style: {
      opacity: mounted ? 1 : 0,
      filter: mounted ? 'blur(0px)' : 'blur(12px)',
      transform: mounted ? 'translateY(0)' : 'translateY(24px)',
      transition: 'opacity 1s ease, filter 1s ease, transform 1s cubic-bezier(0.22,1,0.36,1)',
      transitionDelay: `${delay}ms`,
    },
  });

  return (
    <div className="relative min-h-screen w-full bg-[#070612] text-[#f5f5f7] overflow-hidden selection:bg-purple-500/30">
      <AnimatedBackground />

      <main className="relative z-10 w-full h-screen flex flex-col items-center justify-center text-center px-[16px]">
        <div className="max-w-7xl mx-auto" {...reveal(100)}>
          <h1
            className="text-[clamp(48px,5.6vw,160px)] font-bold tracking-tighter mb-8 md:mb-12 text-white leading-[1] md:leading-[0.9] select-none flex flex-wrap items-center justify-center gap-[0.1em] font-[MiSans]"
            {...reveal(200)}
          >
            <span className="font-[MiSans]" {...reveal(250)}>
              用设计
            </span>
            <span className="text-[#b9b9b9] inline-block font-[MiSans]" {...reveal(450)}>
              塑造未来
            </span>
          </h1>

          <p
            className="text-lg sm:text-2xl md:text-3xl text-[#86868b] max-w-5xl mx-auto mb-12 md:mb-20 font-light tracking-tight leading-relaxed flex flex-col items-center gap-2 px-[16px] py-[24px]"
            {...reveal(650)}
          >
            <span className="font-bold text-[28px] text-white">关注体验、细节与产品价值</span>
            <span className="opacity-40 text-[28px]">将模糊的想法变成可落地的需求</span>
          </p>

          <div
            className="flex flex-col sm:flex-row gap-6 md:gap-8 justify-center items-center py-6"
            {...reveal(850)}
          >
            <PillButton />
          </div>
        </div>
      </main>

      <footer
        className="fixed bottom-0 left-0 right-0 z-50 px-6 md:px-12 lg:px-24 xl:px-[200px] pb-6 sm:pb-12 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 sm:gap-0 pointer-events-none"
        {...reveal(1100)}
      >
        <div className="flex flex-wrap items-center gap-3 sm:gap-6 pointer-events-auto">
          {footerTags.map((tag, i) => (
            <div key={tag} className="flex items-center gap-3 sm:gap-6">
              <span className="text-[12px] sm:text-[14px] md:text-[16px] font-medium text-white/30 tracking-[0.2em] cursor-default transition-colors duration-300 uppercase">
                {tag}
              </span>
              {i < footerTags.length - 1 && (
                <div className="w-[1px] h-3 bg-white/10 rotate-[25deg] hidden sm:block" />
              )}
            </div>
          ))}
        </div>

        <div className="flex flex-col items-start sm:items-end gap-1 pointer-events-auto">
          <span className="text-[11px] text-white/20 tracking-[0.1em] uppercase">
            Built with Vision
          </span>
          <span className="text-[11px] text-white/10 tracking-[0.1em]">
            © 2026 DESIGN STUDIO
          </span>
        </div>
      </footer>
    </div>
  );
}
