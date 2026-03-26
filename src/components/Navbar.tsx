import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Shield, Radio, BadgeCheck } from 'lucide-react';

const BOOKING_LINK =
  'https://app.squareup.com/appointments/book/r9fqa859ot208j/LVJNFC13SX6J0/start';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    { name: 'Home Base', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Results Division', path: '/results' }
  ];

  const logoUrl = `${import.meta.env.BASE_URL}logo.png`;

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-[10000]"
    >
      <style>{`
        @keyframes blueSweep {
          0% { transform: translateX(-120%); opacity: 0; }
          20% { opacity: .35; }
          100% { transform: translateX(220%); opacity: 0; }
        }

        @keyframes beaconPulse {
          0%, 100% { box-shadow: 0 0 0 rgba(59,130,246,0); }
          50% { box-shadow: 0 0 24px rgba(59,130,246,.35); }
        }

        .nav-shell {
          position: relative;
          overflow: hidden;
          background:
            linear-gradient(135deg, rgba(2,6,23,.92) 0%, rgba(15,23,42,.88) 35%, rgba(2,6,23,.95) 100%);
          border: 1px solid rgba(96,165,250,.14);
          box-shadow:
            0 10px 40px rgba(0,0,0,.35),
            inset 0 1px 0 rgba(255,255,255,.04);
        }

        .nav-shell::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            linear-gradient(120deg, rgba(59,130,246,.16), transparent 35%),
            repeating-linear-gradient(
              120deg,
              transparent 0 14px,
              rgba(255,255,255,.025) 14px 28px
            );
          pointer-events: none;
        }

        .nav-shell::after {
          content: "";
          position: absolute;
          top: 0;
          left: -20%;
          width: 35%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(147,197,253,.18), transparent);
          transform: skewX(-20deg);
          animation: blueSweep 5.2s linear infinite;
          pointer-events: none;
        }

        .dispatch-glow {
          animation: beaconPulse 2.8s ease-in-out infinite;
        }

        .unit-text {
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        .sub-unit-text {
          letter-spacing: 0.22em;
          text-transform: uppercase;
        }

        .nav-metal {
          background: linear-gradient(180deg, #ffffff 0%, #dbeafe 35%, #93c5fd 70%, #ffffff 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          text-shadow: 0 2px 18px rgba(59,130,246,.14);
        }
      `}</style>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-3">
        <div
          className={[
            'nav-shell flex items-center justify-between rounded-2xl transition-all duration-300',
            isScrolled
              ? 'backdrop-blur-xl py-2 px-3 shadow-2xl'
              : 'py-3 px-3'
          ].join(' ')}
        >
          {/* Brand */}
          <Link to="/" className="flex items-center gap-3 group relative z-10">
            <div className="relative">
              <img
                src={logoUrl}
                alt="Five-0 Auto Detail logo"
                className="h-10 w-10 rounded-md object-cover border border-blue-300/20 shadow-[0_0_18px_rgba(59,130,246,.18)]"
                loading="eager"
                fetchpriority="high"
              />
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-blue-500 text-white shadow-[0_0_12px_rgba(59,130,246,.45)]">
                <Shield className="h-2.5 w-2.5" />
              </span>
            </div>

            <div className="leading-none">
              <div className="flex items-center gap-2">
                <div className="text-xl md:text-2xl font-black nav-metal unit-text">
                  Five-0 Auto Detail
                </div>
                <BadgeCheck className="hidden sm:block h-4 w-4 text-blue-300" />
              </div>
              <div className="text-[10px] md:text-[11px] text-blue-200/75 mt-[4px] sub-unit-text group-hover:text-blue-100 transition-colors">
                Mobile Detailing • Oklahoma Unit
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-3 relative z-10">
            <div className="flex items-center gap-1 rounded-xl p-1 border border-blue-400/10 bg-black/20 backdrop-blur-sm">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    aria-current={isActive ? 'page' : undefined}
                    className={[
                      'relative px-4 py-2 rounded-lg text-sm font-bold tracking-[0.12em] uppercase transition-colors duration-200',
                      isActive ? 'text-white' : 'text-blue-100/70 hover:text-white'
                    ].join(' ')}
                  >
                    <span className="relative z-10">{item.name}</span>
                    {isActive && (
                      <motion.span
                        layoutId="activePill"
                        className="absolute inset-0 rounded-lg border border-blue-300/20 bg-blue-500/15 shadow-[0_0_20px_rgba(59,130,246,.18)]"
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            <a
              href={BOOKING_LINK}
              target="_blank"
              rel="noreferrer"
              className="ml-1 relative inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm font-black text-white tracking-[0.14em] uppercase transition-transform duration-200 hover:scale-[1.03] dispatch-glow overflow-hidden"
            >
              <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-700 via-blue-500 to-cyan-400 opacity-95" />
              <span className="absolute inset-0 rounded-xl border border-blue-200/20" />
              <span className="relative flex items-center gap-2">
                <Radio className="h-4 w-4" />
                Dispatch Now
              </span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden relative z-10 rounded-lg p-2 border border-blue-400/10 bg-black/20 hover:bg-white/10 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -10 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="md:hidden mt-2 pb-3"
            >
              <div className="relative overflow-hidden rounded-2xl bg-slate-950/95 backdrop-blur-xl border border-blue-400/12 shadow-2xl p-2">
                <div className="relative z-10">
                  {navItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="block py-3 px-3 rounded-xl text-blue-100/80 hover:text-white hover:bg-white/5 font-bold uppercase tracking-[0.12em]"
                    >
                      {item.name}
                    </Link>
                  ))}

                  <a
                    href={BOOKING_LINK}
                    target="_blank"
                    rel="noreferrer"
                    className="block mt-2 text-center rounded-xl py-3 font-black text-white uppercase tracking-[0.14em] relative overflow-hidden"
                  >
                    <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-700 via-blue-500 to-cyan-400" />
                    <span className="absolute inset-0 rounded-xl border border-blue-200/20" />
                    <span className="relative inline-flex items-center gap-2">
                      <Radio className="h-4 w-4" />
                      Dispatch Now
                    </span>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;