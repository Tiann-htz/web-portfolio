import { motion } from 'framer-motion';
import { Github, Mail, Facebook, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github,   href: 'https://github.com',   label: 'GitHub'   }, // ← Change to Aizel's GitHub
    { icon: Mail,     href: 'mailto:aizel@example.com', label: 'Email' }, // ← Change to Aizel's email
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook'  }, // ← Change to Aizel's Facebook
  ];

  return (
    <footer className="relative z-10 border-t border-white/[0.08] backdrop-blur-xl bg-black/20">
      <div className="container mx-auto px-6 py-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          {/* Left — Logo + tagline */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <span
              className="text-2xl font-bold font-['Playfair_Display']"
              style={{
                background: 'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              &lt;Aizel/&gt;
            </span>
            <p className="text-gray-500 text-sm font-['Nunito']">
              UI/UX Designer & Frontend Developer
            </p>
          </div>

          {/* Center — To God be the Glory */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-2 text-gray-300 font-semibold font-['Nunito'] text-sm"
          >
            <Heart
              className="w-4 h-4 text-pink-400 fill-pink-400"
            />
            To God be the Glory
            <Heart
              className="w-4 h-4 text-pink-400 fill-pink-400"
            />
          </motion.p>

          {/* Right — Social icons + copyright */}
          <div className="flex flex-col items-center md:items-end gap-3">
            {/* Social icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={{ y: -3, scale: 1.1 }}
                  transition={{ duration: 0.15 }}
                  className="w-9 h-9 rounded-full flex items-center justify-center border border-purple-500/20 bg-white/[0.03] hover:border-purple-400/40 hover:bg-purple-500/10 transition-all duration-300"
                >
                  <social.icon className="w-4 h-4 text-gray-400 hover:text-purple-300 transition-colors" />
                </motion.a>
              ))}
            </div>

            {/* Copyright */}
            <p className="text-gray-500 text-xs font-['Nunito']">
              © {currentYear} Aizel. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}