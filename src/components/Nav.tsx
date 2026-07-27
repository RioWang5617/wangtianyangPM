import { Link, useLocation } from 'react-router-dom';

const LOGO_URL =
  'https://stunt-route-84150395.figma.site/_assets/v11/4bf0c72a919f5c8d7edcc2b6ee96432d6e85fbec.png';

export default function Nav() {
  const location = useLocation();

  const links = [
    { label: '设计作品', href: '/portfolio' },
    { label: '关于我', href: '/about' },
  ];

  return (
    <nav className="fixed top-4 sm:top-6 md:top-8 left-1/2 -translate-x-1/2 z-50 h-[60px] sm:h-[72px] w-[calc(100%-1.5rem)] max-w-[calc(100vw-1.5rem)] sm:w-auto sm:min-w-[600px] lg:min-w-[900px] bg-white/[0.03] backdrop-blur-[40px] flex items-center justify-between px-4 sm:px-8 md:px-10 rounded-full border border-white/10 shadow-2xl before:absolute before:inset-0 before:bg-gradient-to-b before:from-white/[0.04] before:to-transparent before:pointer-events-none before:rounded-full after:absolute after:inset-0 after:bg-[url('https://grainy-gradients.vercel.app/noise.svg')] after:opacity-[0.03] after:pointer-events-none after:rounded-full">
      <Link
        to="/"
        className="relative z-10 flex items-center gap-2 sm:gap-3 cursor-pointer group shrink-0"
      >
        <div className="w-7 h-7 sm:w-8 sm:h-8 bg-white rounded-lg flex items-center justify-center overflow-hidden shrink-0">
          <img
            src={LOGO_URL}
            alt="Logo"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        <span className="text-white text-sm sm:text-base tracking-tight font-medium whitespace-nowrap">
          Next.Pm
        </span>
      </Link>

      <div className="flex gap-4 sm:gap-6 md:gap-8 xl:gap-12 relative z-10 shrink-0">
        {links.map((link) => (
          <Link
            key={link.href}
            to={link.href}
            className={`font-medium transition-all duration-300 tracking-wide hover:translate-y-[-1px] text-[14px] sm:text-[16px] whitespace-nowrap ${
              location.pathname === link.href
                ? 'text-white'
                : 'text-white/50 hover:text-white'
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
