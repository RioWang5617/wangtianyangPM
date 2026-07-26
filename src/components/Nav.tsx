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
    <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50 h-[72px] min-w-[320px] md:min-w-[600px] lg:min-w-[900px] bg-white/[0.03] backdrop-blur-[40px] flex items-center justify-between px-10 rounded-[48px] border border-white/10 shadow-2xl before:absolute before:inset-0 before:bg-gradient-to-b before:from-white/[0.04] before:to-transparent before:pointer-events-none before:rounded-[48px] after:absolute after:inset-0 after:bg-[url('https://grainy-gradients.vercel.app/noise.svg')] after:opacity-[0.03] after:pointer-events-none after:rounded-[48px]">
      <Link
        to="/"
        className="relative z-10 flex items-center gap-3 cursor-pointer group"
      >
        <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center overflow-hidden">
          <img
            src={LOGO_URL}
            alt="Logo"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        <span className="text-white text-base tracking-tight font-medium">
          Next.Pm
        </span>
      </Link>

      <div className="hidden lg:flex gap-8 xl:gap-12 relative z-10">
        {links.map((link) => (
          <Link
            key={link.href}
            to={link.href}
            className={`font-medium transition-all duration-300 tracking-wide hover:translate-y-[-1px] text-[16px] ${
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
