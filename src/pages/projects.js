import { motion, AnimatePresence } from 'framer-motion';
import { FolderGit2, ExternalLink, X, Sparkles, ArrowLeft } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/Footer';
import { getSortedProjects } from '@/data/Projects';

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedProjectImage, setSelectedProjectImage] = useState(null);

  const projects = getSortedProjects();

  const openModal = (project) => {
    setSelectedProject(project);
    setSelectedImage(0);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setSelectedImage(0);
  };

  const gradientText = {
    background: 'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  };

  return (
    <div className="relative min-h-screen">

      {/* ── Video Background ── */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'blur(30px)' }}
        >
          <source src="/aurora.mp4" type="video/mp4" />
        </video>
        <div
          className="absolute inset-0 bg-black/50"
          style={{ mixBlendMode: 'multiply' }}
        />
      </div>

      {/* ── Header ── */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
      >
        <div className="container mx-auto flex items-center">
          {/* Back to Home — left aligned, no logo */}
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold font-['Nunito'] text-sm text-white border border-purple-500/30 bg-white/[0.08] backdrop-blur-md hover:border-purple-400/50 hover:bg-white/[0.06] transition-all duration-300"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </motion.button>
          </Link>
        </div>
      </motion.header>

      {/* ── Main Content ── */}
      <div className="relative z-10">
        <section
          style={{ width: 'clamp(576px, 100vw, 100%)' }}
          className="min-h-screen md:w-full px-8 pt-32 pb-20"
        >
          <div className="container mx-auto px-6 md:px-6">

            {/* ── Page Header ── */}
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="text-center mb-12 md:mb-16"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-center justify-center gap-3 overflow-visible pb-2"
              >
                <FolderGit2 className="w-8 h-8 md:w-10 md:h-10 text-purple-400 flex-shrink-0" />
                <h1
                  className="text-5xl md:text-7xl font-bold font-['Cormorant_Garamond'] overflow-visible leading-normal"
                  style={gradientText}
                >
                  My Projects
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex items-center justify-center gap-2 mb-4"
              >
                <Sparkles className="w-5 h-5 text-purple-400" />
                <p className="text-sm md:text-lg font-['Nunito'] font-semibold" style={gradientText}>
                  A curated collection of designs and digital experiences
                </p>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-gray-400 text-sm md:text-lg font-['Nunito'] max-w-2xl mx-auto leading-relaxed"
              >
                Every project is crafted with intention — where elegant design meets clean code,
                and every pixel tells a story.
              </motion.p>
            </motion.div>

            {/* ── Projects Grid ── */}
            {projects.length > 0 ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
              >
                {projects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: 0.6 + index * 0.1,
                      duration: 0.4,
                      ease: [0.25, 0.1, 0.25, 1],
                    }}
                    whileHover={{ y: -8, transition: { duration: 0.2 } }}
                    onClick={() => openModal(project)}
                    className="group cursor-pointer rounded-2xl overflow-hidden border border-purple-500/20 bg-white/[0.03] backdrop-blur-md hover:border-purple-400/40 transition-all duration-300"
                    onMouseEnter={e => e.currentTarget.style.boxShadow = '0 8px 40px rgba(168,85,247,0.15)'}
                    onMouseLeave={e => e.currentTarget.style.boxShadow = '0 0 0 rgba(168,85,247,0)'}
                  >
                    {/* Image */}
                    <div className="relative h-48 md:h-56 overflow-hidden bg-purple-950/30">
                      <Image
                        src={project.images[0]}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{ background: 'linear-gradient(135deg, rgba(168,85,247,0.1) 0%, rgba(236,72,153,0.1) 100%)' }}
                      />
                    </div>

                    {/* Content */}
                    <div className="p-4 md:p-5 space-y-3">
                      <span
                        className="inline-block px-3 py-1 rounded-full text-xs font-semibold font-['Nunito']"
                        style={{
                          background: 'linear-gradient(135deg, rgba(168,85,247,0.2), rgba(236,72,153,0.2))',
                          border: '1px solid rgba(168,85,247,0.3)',
                          color: '#d8b4fe',
                        }}
                      >
                        {project.type}
                      </span>

                      <h3 className="text-base md:text-lg font-bold text-white group-hover:text-purple-300 transition-colors leading-tight font-['Cormorant_Garamond']">
                        {project.title}
                      </h3>

                      <p className="text-gray-400 font-['Nunito'] text-sm leading-relaxed line-clamp-2">
                        {project.shortDescription}
                      </p>

                      <button
                        onClick={e => { e.stopPropagation(); openModal(project); }}
                        className="w-full mt-2 px-4 py-2.5 rounded-full text-sm font-semibold font-['Nunito'] flex items-center justify-center gap-2 transition-all duration-300 text-white hover:scale-[1.02]"
                        style={{
                          background: 'linear-gradient(135deg, rgba(168,85,247,0.3), rgba(236,72,153,0.3))',
                          border: '1px solid rgba(168,85,247,0.35)',
                        }}
                      >
                        <ExternalLink className="w-4 h-4" />
                        View Details
                      </button>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-center py-20"
              >
                <FolderGit2 className="w-16 h-16 text-purple-400/30 mx-auto mb-4" />
                <p className="text-gray-400 text-lg font-['Nunito']">
                  No projects available yet. Check back soon!
                </p>
              </motion.div>
            )}

          </div>
        </section>

        {/* ── Footer ── */}
        <Footer />
      </div>

      {/* ── PROJECT MODAL ── */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 bg-black/75 backdrop-blur-sm z-50 flex items-center justify-center p-4 md:p-6"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              onClick={e => e.stopPropagation()}
              className="relative bg-white/10 backdrop-blur-xl rounded-3xl border border-purple-500/30 max-w-5xl w-full max-h-[90vh] overflow-y-auto"
              style={{ boxShadow: '0 0 60px rgba(168,85,247,0.2)' }}
            >
              {/* Close */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 md:top-5 md:right-5 w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-all z-10 hover:scale-110"
                style={{ background: 'rgba(168,85,247,0.2)', border: '1px solid rgba(168,85,247,0.3)' }}
              >
                <X className="w-4 h-4 md:w-5 md:h-5 text-white" />
              </button>

              <div className="grid md:grid-cols-2 gap-6 md:gap-8 p-5 md:p-8">
                {/* Left — Images */}
                <div className="space-y-4">
                  <div
                    className="relative w-full h-56 md:h-72 rounded-2xl overflow-hidden bg-purple-950/30 cursor-pointer"
                    onClick={() => setSelectedProjectImage(selectedProject.images[selectedImage])}
                  >
                    <Image
                      src={selectedProject.images[selectedImage]}
                      alt={selectedProject.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                  {selectedProject.images.length > 1 && (
                    <div className="flex gap-2 flex-wrap">
                      {selectedProject.images.map((img, i) => (
                        <button
                          key={i}
                          onClick={() => setSelectedImage(i)}
                          className="relative h-12 w-16 md:h-14 md:w-20 rounded-lg overflow-hidden border-2 transition-all"
                          style={{ borderColor: selectedImage === i ? '#a855f7' : 'rgba(255,255,255,0.15)' }}
                        >
                          <Image src={img} alt={`Preview ${i + 1}`} fill className="object-cover" />
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Right — Details */}
                <div className="space-y-4 md:space-y-5">
                  <span
                    className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold font-['Nunito']"
                    style={{
                      background: 'linear-gradient(135deg, rgba(168,85,247,0.25), rgba(236,72,153,0.25))',
                      border: '1px solid rgba(168,85,247,0.4)',
                      color: '#d8b4fe',
                    }}
                  >
                    {selectedProject.type}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold text-white font-['Cormorant_Garamond']">
                    {selectedProject.title}
                  </h2>
                  <p className="text-gray-300 font-['Nunito'] leading-relaxed text-sm">
                    {selectedProject.shortDescription}
                  </p>
                  <div className="space-y-3">
                    <h4 className="text-base font-semibold text-white font-['Nunito']">Tech Stack Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.techStack.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 rounded-full text-xs font-semibold font-['Nunito'] text-gray-200"
                          style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(168,85,247,0.25)' }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── PROJECT IMAGE ZOOM MODAL ── */}
      <AnimatePresence>
        {selectedProjectImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProjectImage(null)}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[70] flex items-center justify-center p-4 md:p-6"
          >
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.6, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              onClick={e => e.stopPropagation()}
              className="relative max-w-5xl w-full max-h-[90vh] rounded-3xl overflow-hidden shadow-2xl"
            >
              <div className="relative w-full h-[80vh] md:h-[85vh]">
                <Image
                  src={selectedProjectImage}
                  alt="Project preview"
                  fill
                  className="object-contain"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}