import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, User, MessageCircle, Send, Sparkles, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

export default function ContactModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate sending (replace with actual email logic later)
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    
    // Reset after 2 seconds
    setTimeout(() => {
      setIsSuccess(false);
      setFormData({ name: '', email: '', message: '' });
      onClose();
    }, 2000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-md z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={(e) => e.target === e.currentTarget && onClose()}
          >
            <div className="bg-gradient-to-br from-purple-950/40 to-pink-950/40 backdrop-blur-2xl border border-purple-500/30 rounded-3xl max-w-lg w-full shadow-2xl overflow-hidden">
              
              {/* Decorative gradient blob */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-pink-500/20 rounded-full blur-3xl pointer-events-none" />

              {/* Header with Avatar */}
              <div className="relative p-8 pb-6 border-b border-white/10">
                <button
                  onClick={onClose}
                  className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/5 backdrop-blur-sm flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all z-10"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-4 mb-4">
                  {/* Avatar */}
                  <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-purple-400/50 shadow-lg shadow-purple-500/20 flex-shrink-0">
                    <Image
                      src="/image/image4.png"
                      alt="Aizel"
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-2xl font-bold text-white font-['Cormorant_Garamond']">
                        Let's Create Together
                      </h3>
                      <Sparkles className="w-5 h-5 text-purple-400" />
                    </div>
                    <p className="text-gray-400 text-sm font-['Nunito']">
                      Tell me about your project idea
                    </p>
                  </div>
                </div>

                {/* Quick Info */}
                <div className="flex items-center gap-2 mt-3">
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse shadow-lg shadow-green-400/50" />
                    <span className="text-green-300 text-xs font-semibold font-['Nunito']">Available for projects</span>
                  </div>
                  <div className="px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20">
                    <span className="text-purple-300 text-xs font-semibold font-['Nunito']">Responds in 24h</span>
                  </div>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="p-8 space-y-5 relative">
                
                {/* Success Overlay */}
                <AnimatePresence>
                  {isSuccess && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="absolute inset-0 bg-gradient-to-br from-green-900/90 to-emerald-900/90 backdrop-blur-xl rounded-2xl flex flex-col items-center justify-center z-20"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                      >
                        <CheckCircle2 className="w-20 h-20 text-green-400 mb-4" />
                      </motion.div>
                      <h4 className="text-2xl font-bold text-white font-['Cormorant_Garamond'] mb-2">Message Sent!</h4>
                      <p className="text-green-200 text-sm font-['Nunito']">I'll get back to you soon</p>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Name */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-300 mb-2 font-['Nunito']">
                    <User className="w-4 h-4 text-purple-400" />
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-white/5 border border-purple-500/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:bg-white/[0.07] transition-all font-['Nunito'] disabled:opacity-50"
                    placeholder="e.g. Jane Smith"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-300 mb-2 font-['Nunito']">
                    <Mail className="w-4 h-4 text-purple-400" />
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-white/5 border border-purple-500/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:bg-white/[0.07] transition-all font-['Nunito'] disabled:opacity-50"
                    placeholder="jane@example.com"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-300 mb-2 font-['Nunito']">
                    <MessageCircle className="w-4 h-4 text-purple-400" />
                    Project Details
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    rows={4}
                    className="w-full px-4 py-3 bg-white/5 border border-purple-500/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:bg-white/[0.07] transition-all resize-none font-['Nunito'] disabled:opacity-50"
                    placeholder="Tell me about your project, timeline, and goals..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting || isSuccess}
                  whileHover={!isSubmitting && !isSuccess ? { scale: 1.02 } : {}}
                  whileTap={!isSubmitting && !isSuccess ? { scale: 0.98 } : {}}
                  className="w-full px-6 py-4 text-white rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 font-['Nunito'] disabled:opacity-70 disabled:cursor-not-allowed"
                  style={{
                    background: isSuccess 
                      ? 'linear-gradient(135deg, #10b981, #059669)'
                      : 'linear-gradient(135deg, #a855f7 0%, #9333ea 50%, #ec4899 100%)',
                    boxShadow: '0 8px 32px rgba(168, 85, 247, 0.4)',
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      />
                      Sending...
                    </>
                  ) : isSuccess ? (
                    <>
                      <CheckCircle2 className="w-5 h-5" />
                      Sent Successfully!
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </motion.button>

                {/* Footer note */}
                <p className="text-center text-gray-500 text-xs font-['Nunito'] mt-4">
                  Your information is kept private and secure
                </p>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}