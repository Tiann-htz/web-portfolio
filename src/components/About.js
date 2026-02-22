import { motion } from 'framer-motion';
import { Sparkles, FileText, Briefcase, FolderGit2, Award, Calendar } from 'lucide-react';

export default function About() {
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
      const offset = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="min-h-screen w-max md:w-full flex items-center justify-center px-8 py-20 md:py-32">

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

          {/* Right Side — quote card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex items-center justify-center"
          >
            <motion.div
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="relative rounded-3xl p-8 max-w-sm w-full border border-purple-500/20 bg-white/[0.03] backdrop-blur-md overflow-hidden group cursor-default"
              style={{ boxShadow: '0 0 60px rgba(168, 85, 247, 0.08)' }}
            >
              <div
                className="absolute -top-10 -right-10 w-48 h-48 rounded-full opacity-20 blur-3xl pointer-events-none"
                style={{ background: 'radial-gradient(circle, #a855f7, #ec4899)' }}
              />
              <p
                className="text-3xl font-bold font-['Cormorant_Garamond'] leading-snug mb-6 relative z-10"
                style={{
                  background: 'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                "Design is not just what it looks like — it's how it makes you feel."
              </p>
              <div className="flex items-center gap-3 relative z-10">
                <div
                  className="w-10 h-[2px] rounded-full"
                  style={{ background: 'linear-gradient(90deg, #a855f7, #ec4899)' }}
                />
                <span className="text-gray-400 text-sm font-['Nunito'] font-semibold tracking-wide uppercase">
                  Aizel's Design Philosophy
                </span>
              </div>
              <div className="flex flex-wrap gap-2 mt-6 relative z-10">
                {['Figma', 'UI/UX', 'HTML', 'CSS', 'JavaScript', 'Prototyping'].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full text-xs font-semibold font-['Nunito'] bg-white/[0.04] border border-purple-500/20 text-gray-300 hover:border-purple-400/40 hover:text-white transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* ── Stats Cards ── */}
        <div className="container mx-auto px-6 md:px-6">
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