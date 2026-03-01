import { motion } from 'framer-motion';
import { Sparkles, FileText, Briefcase, FolderGit2, Award, Calendar } from 'lucide-react';
import { useState } from 'react';
import GlareHover from '@/components/ui/GlareHover';

export default function About() {
  const [tiltStyle, setTiltStyle] = useState({});

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

  const projects = [
    { id: 1, title: 'Portfolio Website', type: 'Web Design' },
    { id: 2, title: 'Brand Identity Design', type: 'UI/UX' },
  ];

  const certificates = [
    { id: 1, title: 'UI/UX Design Certificate' },
    { id: 2, title: 'Frontend Development' },
  ];

  const stats = [
    {
      number: projects.length.toString(),
      label: 'Total Projects',
      description: 'Creative works delivered',
      icon: FolderGit2,
    },
    {
      number: certificates.length.toString(),
      label: 'Certificates',
      description: 'Professional certifications earned',
      icon: Award,
    },
    {
      number: '2',
      label: 'Years Experience',
      description: 'Crafting digital experiences',
      icon: Calendar,
    },
  ];

  const handleViewCV = () => {
    window.open('/pdf/Roselda Apares CV.pdf', '_blank');
  };

  const handleViewProjects = () => {
    const el = document.getElementById('portfolio');
    if (el) {
      const offset = el.getBoundingClientRect().top + window.pageYOffset - -80;
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="min-h-screen w-max md:w-full flex items-center justify-center px-8 py-20 md:py-30">

      <div className="w-full">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-12 md:mb-16 px-6"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold font-['Cormorant_Garamond'] mb-4"
            style={{
              background: 'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            About Me
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center justify-center gap-2"
          >
            <Sparkles className="w-5 h-5 text-purple-400" />
            <p
              className="text-lg font-['Nunito'] font-semibold"
              style={{
                background: 'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Passionate about crafting beautiful digital experiences
            </p>
          </motion.div>
        </motion.div>

        {/* ── Main Content Grid ── */}
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center px-6 md:px-6 mb-12 md:mb-20">

          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 w-full max-w-sm mx-auto md:mx-0 md:max-w-none"
          >
            <div className="space-y-2">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ delay: 0.3 }}
                className="text-xl text-gray-400 font-['Nunito'] font-normal"
              >
                Hello, I'm
              </motion.p>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ delay: 0.4 }}
                className="text-4xl md:text-5xl font-bold text-white font-['Cormorant_Garamond'] leading-tight"
              >
                Roselda Apares
              </motion.h3>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ delay: 0.5 }}
              className="text-gray-400 text-lg font-['Nunito'] leading-relaxed"
            >
              I'm a passionate UI/UX Designer and Frontend Developer who loves turning ideas into
              elegant, intuitive digital experiences. I believe great design is more than aesthetics —
              it's about creating interfaces that feel effortless, meaningful, and truly connect with
              the people who use them. Every pixel, every interaction is crafted with intention and care.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ delay: 0.6 }}
              className="flex gap-4 pt-2 flex-wrap"
            >
              <button
                onClick={handleViewCV}
                className="px-6 py-3 text-white rounded-full font-semibold flex items-center gap-2 hover:shadow-2xl hover:scale-105 transition-all duration-300 font-['Nunito']"
                style={{
                  background: 'linear-gradient(135deg, #a855f7 0%, #9333ea 50%, #ec4899 100%)',
                  boxShadow: '0 8px 32px rgba(168, 85, 247, 0.35)',
                }}
              >
                <FileText className="w-5 h-5" />
                View CV
              </button>
              <button
                onClick={handleViewProjects}
                className="px-6 py-3 bg-white/[0.03] backdrop-blur-md text-white rounded-full font-semibold flex items-center gap-2 hover:scale-105 transition-all duration-300 font-['Nunito'] border border-purple-500/30 hover:border-purple-400/50 hover:bg-white/[0.06]"
              >
                <Briefcase className="w-5 h-5" />
                My Projects
              </button>
            </motion.div>
          </motion.div>

         {/* Right Side — Avatar Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex items-center justify-center ml-28"
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
                <div className="relative w-full h-full">
                  {/* Background Image */}
                  <div className="absolute inset-0 z-0">
                    <img
                      src="/image/Image4.png"
                      alt="Aizel"
                      className="object-cover w-full h-full"
                      style={{ objectPosition: 'center 85%', objectFit: 'cover' }}
                    />
                  </div>
                  {/* Bottom Section */}
                  <div className="absolute bottom-0 left-0 right-0 h-1/5 bg-gradient-to-t from-purple-500/30 via-pink-500/20 to-transparent backdrop-blur-md p-4 flex items-center justify-between z-10">
                    <div className="flex items-center gap-3">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white/60 flex-shrink-0 shadow-lg">
                        <img
                          src="/image/Image4.png"
                          alt="Aizel"
                          className="object-cover w-full h-full"
                          style={{ objectPosition: 'center 85%', objectFit: 'cover' }}
                        />
                      </div>
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
                          const offset = el.getBoundingClientRect().top + window.pageYOffset - -35;
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

        {/* ── Stats Cards ── */}
        <div className="container mx-auto px-6 md:px-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.3 }}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.13 }}
                className="relative rounded-2xl p-6 border border-purple-500/20 bg-white/[0.03] backdrop-blur-md overflow-hidden group cursor-default"
                style={{ boxShadow: '0 0 40px rgba(168, 85, 247, 0.04)' }}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                  style={{ boxShadow: 'inset 0 0 40px rgba(168, 85, 247, 0.08)' }}
                />
                <div
                  className="absolute top-0 left-0 right-0 h-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: 'linear-gradient(90deg, transparent, #a855f7, #ec4899, transparent)' }}
                />
                <div className="flex items-center gap-3 mb-3 relative z-10">
                  <stat.icon className="w-6 h-6 text-purple-400 group-hover:text-pink-400 transition-colors duration-300" />
                  <h4
                    className="text-4xl font-bold font-['Cormorant_Garamond']"
                    style={{
                      background: 'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    {stat.number}
                  </h4>
                </div>
                <p className="text-white text-base font-semibold font-['Nunito'] mb-1 relative z-10">
                  {stat.label}
                </p>
                <p className="text-gray-500 text-sm font-['Nunito'] relative z-10">
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}