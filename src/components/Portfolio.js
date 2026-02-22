import { motion, AnimatePresence } from 'framer-motion';
import { FolderGit2, Award, Code2, Sparkles, X, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';
import { techStackData, toolsData } from '@/data/TechStack';
import { certificatesData } from '@/data/Certificates';
import { getSortedProjects } from '@/data/Projects';

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('projects');
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [selectedProjectImage, setSelectedProjectImage] = useState(null);

  const tabs = [
    { id: 'projects',      name: 'Projects',     icon: FolderGit2 },
    { id: 'certificates',  name: 'Certificates',  icon: Award      },
    { id: 'techstack',     name: 'Tech Stack',    icon: Code2      },
  ];

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
<section id="portfolio" style={{ width: 'clamp(580px, 100vw, 100%)' }} className="min-h-screen md:w-full flex items-center justify-center px-6 py-20 md:py-32">
      <div className="w-full">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-12 px-6"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold font-['Cormorant_Garamond'] mb-4"
            style={gradientText}
          >
            Portfolio Gallery
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center justify-center gap-2"
          >
            <Sparkles className="w-5 h-5 text-purple-400" />
            <p className="text-sm md:text-lg font-['Nunito'] font-semibold" style={gradientText}>
              A curated collection of designs, creations, and skills I'm proud of
            </p>
          </motion.div>
        </motion.div>

        {/* ── Tabs ── */}
        <div className="container mx-auto px-6 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex justify-center gap-2 md:gap-3 mb-12 md:mb-16 flex-wrap"
          >
            {tabs.map((tab, index) => {
              const isActive = activeTab === tab.id;
              return (
                <motion.button
                  key={tab.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.2 }}
                  onClick={() => setActiveTab(tab.id)}
                  className="relative px-5 py-2.5 md:px-8 md:py-3.5 rounded-full font-semibold text-sm md:text-base font-['Nunito'] flex items-center gap-2 transition-all duration-300 overflow-hidden"
                  style={isActive ? {
                    background: 'linear-gradient(135deg, #a855f7 0%, #9333ea 50%, #ec4899 100%)',
                    boxShadow: '0 8px 32px rgba(168, 85, 247, 0.45)',
                    color: '#fff',
                  } : {
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(168,85,247,0.25)',
                    color: '#9ca3af',
                  }}
                >
                  {isActive && (
                    <motion.span
                      layoutId="tab-glow"
                      className="absolute inset-0 rounded-full pointer-events-none"
                      style={{ boxShadow: 'inset 0 0 20px rgba(255,255,255,0.1)' }}
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <tab.icon className="w-4 h-4 md:w-5 md:h-5 relative z-10" />
                  <span className="relative z-10">{tab.name}</span>
                </motion.button>
              );
            })}
          </motion.div>
        </div>

        {/* ── Tab Content ── */}
        <div className="container mx-auto px-6 md:px-6">
          <AnimatePresence mode="wait">

            {/* ── PROJECTS ── */}
            {activeTab === 'projects' && (
              <motion.div
                key="projects"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.45 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                  {getSortedProjects().slice(0, 6).map((project, index) => (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: false, amount: 0.2 }}
                      whileHover={{ y: -8, transition: { duration: 0.2 } }}
                      transition={{ delay: 0.15 + index * 0.1, duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                      onClick={() => openModal(project)}
                      className="group cursor-pointer rounded-2xl overflow-hidden border border-purple-500/20 bg-white/[0.03] backdrop-blur-md hover:border-purple-400/40 transition-all duration-300"
                      onMouseEnter={e => e.currentTarget.style.boxShadow = '0 8px 40px rgba(168,85,247,0.15)'}
                      onMouseLeave={e => e.currentTarget.style.boxShadow = '0 0 0 rgba(168,85,247,0)'}
                    >
                      <div className="relative h-48 md:h-52 overflow-hidden bg-purple-950/30">
                        <Image
                          src={project.images[0]}
                          alt={project.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          style={{ background: 'linear-gradient(135deg, rgba(168,85,247,0.1) 0%, rgba(236,72,153,0.1) 100%)' }}
                        />
                      </div>

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

                        <h3 className="text-base md:text-lg font-bold text-white group-hover:text-purple-300 transition-colors leading-tight">
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
                </div>

                {getSortedProjects().length > 6 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="mt-10 flex justify-end"
                  >
                    <button
                      className="px-6 py-3 md:px-8 md:py-3.5 rounded-full text-white font-semibold font-['Nunito'] text-sm md:text-base flex items-center gap-2 hover:scale-105 transition-all duration-300"
                      style={{
                        background: 'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)',
                        boxShadow: '0 8px 32px rgba(168,85,247,0.35)',
                      }}
                    >
                      See More
                      <FolderGit2 className="w-4 h-4 md:w-5 md:h-5" />
                    </button>
                  </motion.div>
                )}
              </motion.div>
            )}

            {/* ── CERTIFICATES ── */}
            {activeTab === 'certificates' && (
              <motion.div
                key="certificates"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.45 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                  {certificatesData.slice(0, 6).map((cert, index) => (
                    <motion.div
                      key={cert.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: false, amount: 0.2 }}
                      whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.2 } }}
                      transition={{ delay: 0.15 + index * 0.1, duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                      onClick={() => setSelectedCertificate(cert)}
                      className="group cursor-pointer rounded-2xl overflow-hidden border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300"
                      onMouseEnter={e => e.currentTarget.style.boxShadow = '0 8px 40px rgba(168,85,247,0.15)'}
                      onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
                    >
                      <div className="relative h-48 md:h-56 overflow-hidden bg-purple-950/20">
                        <Image
                          src={cert.image}
                          alt={cert.title}
                          fill
                          className="object-scale-down group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          style={{ background: 'linear-gradient(135deg, rgba(168,85,247,0.08) 0%, rgba(236,72,153,0.08) 100%)' }}
                        />
                      </div>
                      <div className="p-4 bg-white/[0.03] backdrop-blur-md border-t border-purple-500/10">
                        <p className="text-white font-semibold font-['Nunito'] text-sm truncate">{cert.title}</p>
                        <p className="text-gray-500 text-xs font-['Nunito'] mt-0.5">{cert.institution}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {certificatesData.length > 6 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="mt-10 flex justify-end"
                  >
                    <button
                      className="px-6 py-3 md:px-8 md:py-3.5 rounded-full text-white font-semibold font-['Nunito'] text-sm md:text-base flex items-center gap-2 hover:scale-105 transition-all duration-300"
                      style={{
                        background: 'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)',
                        boxShadow: '0 8px 32px rgba(168,85,247,0.35)',
                      }}
                    >
                      See More
                      <Award className="w-4 h-4 md:w-5 md:h-5" />
                    </button>
                  </motion.div>
                )}
              </motion.div>
            )}

            {/* ── TECH STACK ── */}
            {activeTab === 'techstack' && (
              <motion.div
                key="techstack"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.45 }}
              >
                <div className="grid grid-cols-3 md:grid-cols-6 gap-4 md:gap-5">
                  {techStackData.map((tech, index) => (
                    <motion.div
                      key={tech.id}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: false, amount: 0.2 }}
                      whileHover={{ y: -8, scale: 1.08, transition: { duration: 0.15 } }}
                      transition={{ delay: 0.05 + index * 0.05, duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                      className="group flex flex-col items-center justify-center gap-2 md:gap-3 p-3 md:p-4 rounded-2xl border border-purple-500/15 bg-white/[0.03] backdrop-blur-md hover:border-purple-400/35 transition-all duration-300 cursor-default"
                      onMouseEnter={e => e.currentTarget.style.boxShadow = '0 8px 32px rgba(168,85,247,0.15)'}
                      onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
                    >
                      <div
                        className="w-10 h-10 md:w-14 md:h-14 rounded-xl flex items-center justify-center flex-shrink-0 p-1.5 md:p-2"
                        style={{ backgroundColor: `${tech.color}18` }}
                      >
                        <Image
                          src={tech.imageUrl}
                          alt={tech.name}
                          width={48}
                          height={48}
                          className="group-hover:scale-110 transition-transform duration-200"
                        />
                      </div>
                      <span className="text-white text-[10px] md:text-xs font-semibold text-center font-['Nunito'] group-hover:text-purple-300 transition-colors">
                        {tech.name}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Tools & IDE Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="mt-10 md:mt-14"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex items-center gap-3 justify-center mb-6 md:mb-8"
                  >
                    <div className="h-[1px] w-12 md:w-16 rounded-full" style={{ background: 'linear-gradient(90deg, transparent, #a855f7)' }} />
                    <h3
                      className="text-xl md:text-2xl font-bold font-['Cormorant_Garamond']"
                      style={gradientText}
                    >
                      Tools & IDE
                    </h3>
                    <div className="h-[1px] w-12 md:w-16 rounded-full" style={{ background: 'linear-gradient(90deg, #ec4899, transparent)' }} />
                  </motion.div>

                  <div className="grid grid-cols-3 md:grid-cols-6 gap-4 md:gap-5">
                    {toolsData.map((tool, index) => (
                      <motion.div
                        key={tool.id}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: false, amount: 0.2 }}
                        whileHover={{ y: -8, scale: 1.08, transition: { duration: 0.15 } }}
                        transition={{ delay: 0.45 + index * 0.05, duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                        className="group flex flex-col items-center justify-center gap-2 md:gap-3 p-3 md:p-4 rounded-2xl border border-purple-500/15 bg-white/[0.03] backdrop-blur-md hover:border-purple-400/35 transition-all duration-300 cursor-default"
                        onMouseEnter={e => e.currentTarget.style.boxShadow = '0 8px 32px rgba(168,85,247,0.15)'}
                        onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
                      >
                        <div
                          className="w-10 h-10 md:w-14 md:h-14 rounded-xl flex items-center justify-center flex-shrink-0 p-1.5 md:p-2"
                          style={{ backgroundColor: `${tool.color}18` }}
                        >
                          <Image
                            src={tool.imageUrl}
                            alt={tool.name}
                            width={48}
                            height={48}
                            className="group-hover:scale-110 transition-transform duration-200"
                          />
                        </div>
                        <span className="text-white text-[10px] md:text-xs font-semibold text-center font-['Nunito'] group-hover:text-purple-300 transition-colors">
                          {tool.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
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
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 md:top-5 md:right-5 w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-all z-10 hover:scale-110"
                  style={{ background: 'rgba(168,85,247,0.2)', border: '1px solid rgba(168,85,247,0.3)' }}
                >
                  <X className="w-4 h-4 md:w-5 md:h-5 text-white" />
                </button>

                <div className="grid md:grid-cols-2 gap-6 md:gap-8 p-5 md:p-8">
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
                    <h2 className="text-2xl md:text-3xl font-bold text-white">
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

        {/* ── CERTIFICATE MODAL ── */}
        <AnimatePresence>
          {selectedCertificate && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCertificate(null)}
              className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4 md:p-6"
            >
              <motion.div
                initial={{ scale: 0.6, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.6, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                onClick={e => e.stopPropagation()}
                className="relative max-w-5xl w-full max-h-[90vh] rounded-3xl overflow-hidden border-2 bg-white shadow-2xl"
                style={{ borderColor: '#a855f7' }}
              >
                <div className="relative w-full h-[80vh] md:h-[85vh]">
                  <Image
                    src={selectedCertificate.image}
                    alt={selectedCertificate.title}
                    fill
                    className="object-contain"
                  />
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
              className="fixed inset-0 backdrop-blur-sm bg-black/80 z-[70] flex items-center justify-center p-4 md:p-6"
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
    </section>
  );
}