import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Github, Mail, Facebook, Eye, Palette } from 'lucide-react';
import GlareHover from '@/components/ui/GlareHover';
import ContactModal from '@/components/ContactModal';
import About from '@/components/About';
import Portfolio from '@/components/Portfolio';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

// Header Component
function Header() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'portfolio', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = -10;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h1
            className="text-3xl font-bold font-['Playfair_Display']"
            style={{
              background: 'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            &lt;Aizel/&gt;
          </h1>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.nav
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="hidden md:block bg-white/5 backdrop-blur-xl px-14 py-4 rounded-full border border-white/5"
        >
          <div className="flex gap-8 items-center">
            {navItems.map((item, index) => {
              const isActive = activeSection === item.name.toLowerCase();
              return (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                  className={`relative font-['Nunito'] font-semibold text-lg transition-all duration-300 ${
                    isActive ? 'text-white' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <motion.span
                      layoutId="activeSection"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full"
                      style={{ background: 'linear-gradient(90deg, #a855f7, #ec4899)' }}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </motion.a>
              );
            })}
          </div>
        </motion.nav>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-all duration-300"
          aria-label="Toggle menu"
        >
          <motion.span
            animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.25 }}
            className="block w-5 h-0.5 rounded-full"
            style={{ background: 'linear-gradient(90deg, #a855f7, #ec4899)' }}
          />
          <motion.span
            animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.25 }}
            className="block w-5 h-0.5 rounded-full"
            style={{ background: 'linear-gradient(90deg, #a855f7, #ec4899)' }}
          />
          <motion.span
            animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.25 }}
            className="block w-5 h-0.5 rounded-full"
            style={{ background: 'linear-gradient(90deg, #a855f7, #ec4899)' }}
          />
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.97 }}
            transition={{ duration: 0.25 }}
            className="md:hidden mt-3 mx-2 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/10 overflow-hidden"
          >
            {navItems.map((item, index) => {
              const isActive = activeSection === item.name.toLowerCase();
              return (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => { handleNavClick(e, item.href); setMenuOpen(false); }}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.06 }}
                  className={`flex items-center justify-between px-6 py-4 font-['Nunito'] font-semibold text-base border-b border-white/[0.06] last:border-b-0 transition-all duration-200 ${
                    isActive
                      ? 'text-white bg-white/[0.06]'
                      : 'text-gray-300 hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ background: 'linear-gradient(135deg, #a855f7, #ec4899)' }}
                    />
                  )}
                </motion.a>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

/// Animated Roles Component with Fade Down Effect
function AnimatedRoles({ roles }) {
  const [currentRole, setCurrentRole] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [roles.length]);

  if (!mounted) {
    return (
      <div className="h-20 overflow-visible flex items-center">
        <h2
          className="text-5xl md:text-6xl font-bold font-['Cormorant_Garamond'] leading-tight"
          style={{
            background: 'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          {roles[0]}
        </h2>
      </div>
    );
  }

  return (
    <div className="h-20 overflow-visible flex items-center">
      <motion.h2
        key={currentRole}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        className="text-5xl md:text-6xl font-bold font-['Cormorant_Garamond'] leading-tight"
        style={{
          background: 'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        {roles[currentRole]}
      </motion.h2>
    </div>
  );
}

// Hero Section Component
function HeroSection() {
  const router = useRouter();
  const [tiltStyle, setTiltStyle] = useState({});
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  
  const roles = ['UI/UX Designer', 'Frontend Developer'];
  const tools = [
    { name: 'Figma', color: '#F24E1E' },
    { name: 'HTML', color: '#E34F26' },
    { name: 'CSS', color: '#1572B6' },
    { name: 'JavaScript', color: '#F7DF1E' },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Mail, href: 'mailto:aizel@example.com', label: 'Email' },
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
  ];

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;

    setTiltStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`,
      transition: 'transform 0.1s ease-out',
    });
  };

  const handleMouseLeave = () => {
    setTiltStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
      transition: 'transform 0.3s ease-out',
    });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-8 pt-20">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center px-6 md:px-6">
        
        {/* Left Side - Content */}
        <div className="space-y-6 w-full max-w-sm mx-auto md:mx-0 md:max-w-none">
          {/* Icon + Slogan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-2"
          >
            <Sparkles className="w-5 h-5 text-purple-500" />
            <span 
              className="text-lg font-['Nunito'] font-semibold"
              style={{
                background: 'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Designing with Heart & Precision
            </span>
          </motion.div>

          {/* Main Title - Redesigned */}
          <div className="space-y-4">
            {/* "Hi, I'm" - Small normal text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-xl md:text-2xl text-gray-300 font-['Nunito'] font-normal"
            >
              Hi, I'm
            </motion.p>
            
            {/* "Aizel" - Large text with original Playfair font, no gradient */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-6xl md:text-7xl font-bold text-white font-['Playfair_Display'] leading-tight"
            >
              Aizel
            </motion.h1>
            
            {/* Animated Roles - Gradient + Special font */}
            <AnimatedRoles roles={roles} />
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="text-gray-400 text-lg font-['Nunito'] leading-relaxed"
          >
Crafting beautiful, thoughtful experiences where elegant design meets clean code bringing ideas to life with care and creativity.          </motion.p>

          {/* Tools/Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
            className="space-y-3"
          >
            <div className="flex gap-4 flex-wrap">
              {tools.map((tool, index) => (
                <motion.span
                  key={tool.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.6 + index * 0.1 }}
                  className="bg-white/[0.03] backdrop-blur-md px-4 py-2 rounded-full text-white font-['Nunito'] text-sm font-semibold hover:scale-105 transition-all duration-300 border border-white/[0.08] shadow-lg shadow-purple-500/10"
                >
                  {tool.name}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2 }}
            className="flex gap-4 pt-4"
          >
           <button
              onClick={() => router.push('/projects')}
              className="px-4 py-2.5 md:px-6 md:py-3 text-white rounded-full font-semibold flex items-center gap-2 hover:shadow-2xl hover:scale-105 transition-all duration-300 font-['Nunito'] text-sm md:text-base whitespace-nowrap"
              style={{
                background: 'linear-gradient(135deg, #a855f7 0%, #9333ea 50%, #ec4899 100%)',
                boxShadow: '0 8px 32px rgba(168, 85, 247, 0.4)',
              }}
            >
              <Eye className="w-4 h-4 md:w-5 md:h-5" />
              View My Work
            </button>
            <button 
              onClick={() => setIsContactModalOpen(true)}
              className="bg-white/[0.03] backdrop-blur-md px-4 py-2.5 md:px-6 md:py-3 text-white rounded-full font-semibold flex items-center gap-2 hover:scale-105 transition-all duration-300 font-['Nunito'] border border-purple-500/30 text-sm md:text-base whitespace-nowrap"
            >
              <Palette className="w-4 h-4 md:w-5 md:h-5" />
              Let's Create Something
            </button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2 }}
            className="flex gap-4 pt-4"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.3 + index * 0.1 }}
                className="bg-white/[0.03] backdrop-blur-md w-12 h-12 flex items-center justify-center rounded-full hover:scale-110 transition-all duration-300 group border border-purple-500/20"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors" />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Right Side - Avatar Card with GlareHover */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ 
            opacity: 1, 
            x: 80,
          }}
          transition={{ 
            opacity: { duration: 0.8, delay: 0.5 },
            x: { duration: 0.8, delay: 0.5, ease: 'easeOut' },
          }}
          className="relative flex items-center justify-center"
        >
          <GlareHover
  width="350px"
  height="420px"
  background="rgba(255, 255, 255, 0.95)"
  borderRadius="24px"
  borderColor="rgba(168, 85, 247, 0.4)"
  glareColor="#ffffff"
  glareOpacity={0.7}
            glareAngle={-30}
            glareSize={400}
            transitionDuration={3500}
            playOnce={false}
            style={tiltStyle}
          >
            <div
              className="relative w-full h-full rounded-3xl overflow-hidden"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              {/* Card Content with Image as Background */}
              <div className="relative w-full h-full">
                {/* Background Image - Full Card */}
                <div className="absolute inset-0 z-0">
                  <img
  src="/image/image4.png"
  alt="Aizel"
  className="object-cover w-full h-full"
  style={{ objectPosition: 'center 85%', objectFit: 'cover' }}
/>
                </div>

                {/* Bottom Section - Blur Container with Purple Tint */}
                <div className="absolute bottom-0 left-0 right-0 h-1/5 bg-gradient-to-t from-purple-500/30 via-pink-500/20 to-transparent backdrop-blur-md p-4 flex items-center justify-between z-10">
                <div className="flex items-center gap-3">
                    {/* Small Circle Avatar */}
                    <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white/60 flex-shrink-0 shadow-lg">
                      <img
  src="/image/image4.png"
  alt="Aizel"
  className="object-cover w-full h-full"
  style={{ objectPosition: 'center 85%', objectFit: 'cover' }}
/>
                    </div>
                    {/* User Info */}
                    <div>
                      <p className="text-white font-semibold text-sm font-['Nunito'] drop-shadow-lg">@Aizel.designs</p>
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 rounded-full bg-green-400 shadow-lg shadow-green-400/50 animate-pulse"></div>
                        <span className="text-white text-xs font-['Nunito'] drop-shadow-md">Available</span>
                      </div>
                    </div>
                  </div>

                 {/* View Portfolio Button */}
                  <button
                    onClick={() => {
                      const el = document.getElementById('portfolio');
                      if (el) {
                        const offset = el.getBoundingClientRect().top + window.pageYOffset - -20;
                        window.scrollTo({ top: offset, behavior: 'smooth' });
                      }
                    }}
                    className="px-4 py-2 rounded-lg text-sm font-semibold transition-all font-['Nunito'] drop-shadow-lg hover:scale-105 text-white"
                    style={{
                      background: 'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)',
                      boxShadow: '0 4px 16px rgba(168, 85, 247, 0.3)',
                    }}
                  >
                    View Portfolio
                  </button>
                </div>
              </div>
            </div>
          </GlareHover>
        </motion.div>
      </div>

      {/* Contact Modal */}
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </section>
  );
}

// Main Index Page
export default function Home() {
  return (
    <div className="relative">
      {/* Video Background */}
      <div className="fixed inset-0 z-0 overflow-hidden">
       <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute inset-0 w-full h-full object-cover"
    style={{
      filter: 'blur(30px)',
    }}
  >
    <source src="/aurora.mp4" type="video/mp4" />
  </video>
  
  {/* Optional: Dark overlay to make text more readable */}
  <div 
    className="absolute inset-0 bg-black/50"
    style={{
      mixBlendMode: 'multiply',
    }}
  />
</div>
      
      {/* Main Content */}
      <div className="relative z-10">
        <Header />
        <HeroSection />
        <About />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}