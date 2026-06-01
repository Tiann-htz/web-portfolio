import { motion } from 'framer-motion';
import { Mail, User, MessageSquare, Send, Linkedin, Instagram, Github, Facebook, Check, Loader2, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { sendEmail } from '@/lib/emailjs';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSendingEmail, setIsSendingEmail] = useState(false);
  const [emailSuccess, setEmailSuccess] = useState(false);
  const [emailError, setEmailError] = useState('');

  const gradientText = {
    background: 'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  };

  const socialLinks = [
    {
      icon: Linkedin,
      title: "Let's Connect",
      subtitle: 'on LinkedIn',
      link: 'https://linkedin.com',
      color: '#0077B5',
    },
    {
      icon: Instagram,
      title: 'Instagram',
      subtitle: '@Aizel',
      link: 'https://instagram.com',
      color: '#E4405F',
    },
    {
      icon: Github,
      title: 'GitHub',
      subtitle: 'aizelaparis',
      link: 'https://github.com/aizelaparis',
      color: '#ffffff',
    },
    {
      icon: Facebook,
      title: 'Facebook',
      subtitle: 'Aizel Aparis',
      link: 'https://facebook.com/zhel.ai1121',
      color: '#1877F2',
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setEmailError('Please fill in all fields.');
      setTimeout(() => setEmailError(''), 3000);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setEmailError('Please enter a valid email address.');
      setTimeout(() => setEmailError(''), 3000);
      return;
    }

    setIsSendingEmail(true);
    setEmailError('');

    try {
      await sendEmail(formData.name, formData.email, formData.message);
      setEmailSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setEmailSuccess(false), 3000);
    } catch (error) {
      console.error('Error sending email:', error);
      setEmailError('Failed to send message. Please try again.');
      setTimeout(() => setEmailError(''), 3000);
    } finally {
      setIsSendingEmail(false);
    }
  };

  return (
    <section
      id="contact"
      style={{ width: 'clamp(576px, 100vw, 100%)' }}
      className="min-h-screen md:w-full flex items-center justify-center px-8 py-20 md:py-28"
    >
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
            style={gradientText}
          >
            Get in Touch
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
              Have a project in mind? I'd love to hear from you.
            </p>
          </motion.div>
        </motion.div>

        {/* ── Two Column Layout ── */}
        <div className="container mx-auto px-6 md:px-6">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-8xl mx-auto">

            {/* LEFT — Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="rounded-3xl p-5 md:p-8 border border-purple-500/20 bg-white/[0.03] backdrop-blur-md">

                {/* Card header */}
                <div className="flex items-center gap-3 mb-4 md:mb-2">
                  <div
                    className="w-10 h-10 md:w-11 md:h-11 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(168,85,247,0.15)', border: '1px solid rgba(168,85,247,0.3)' }}
                  >
                    <Mail className="w-4 h-4 md:w-5 md:h-5 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white font-['Nunito']">Send a Message</h3>
                    <p className="text-gray-300 font-['Nunito'] text-xs md:text-sm">
                      Fill in the form and I'll get back to you as soon as possible.
                    </p>
                  </div>
                </div>

                {/* Error */}
                {emailError && (
                  <div className="mb-4 p-3 md:p-4 rounded-xl text-sm md:text-base font-['Nunito'] text-red-300 border border-red-500/20 bg-red-500/10">
                    {emailError}
                  </div>
                )}

                {/* Form */}
                <form onSubmit={handleSubmit} className="mt-4 md:mt-5 space-y-4">

                  {/* Name & Email — stacked on mobile, side by side on desktop */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label className="block text-white text-sm md:text-base font-semibold font-['Nunito']">
                        Your Name
                      </label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 text-gray-400" />
                        <input
                          type="text"
                          placeholder="e.g. Jane Doe"
                          value={formData.name}
                          onChange={e => setFormData({ ...formData, name: e.target.value })}
                          disabled={isSendingEmail}
                          className="w-full pl-11 pr-4 py-3 md:py-3.5 rounded-xl text-white text-sm md:text-base placeholder-gray-500 font-['Nunito'] bg-white/[0.05] border border-white/10 focus:border-purple-500/50 focus:outline-none transition-all"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="block text-white text-sm md:text-base font-semibold font-['Nunito']">
                        Your Email
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 text-gray-400" />
                        <input
                          type="email"
                          placeholder="e.g. jane@email.com"
                          value={formData.email}
                          onChange={e => setFormData({ ...formData, email: e.target.value })}
                          disabled={isSendingEmail}
                          className="w-full pl-11 pr-4 py-3 md:py-3.5 rounded-xl text-white text-sm md:text-base placeholder-gray-500 font-['Nunito'] bg-white/[0.05] border border-white/10 focus:border-purple-500/50 focus:outline-none transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="block text-white text-sm md:text-base font-semibold font-['Nunito']">
                      Your Message
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-4 top-4 w-4 h-4 md:w-5 md:h-5 text-gray-400" />
                      <textarea
                        placeholder="Tell me about your project or idea..."
                        value={formData.message}
                        onChange={e => setFormData({ ...formData, message: e.target.value })}
                        disabled={isSendingEmail}
                        rows={4}
                        className="w-full pl-11 pr-4 py-3 md:py-3.5 rounded-xl text-white text-sm md:text-base placeholder-gray-500 font-['Nunito'] bg-white/[0.05] border border-white/10 focus:border-purple-500/50 focus:outline-none transition-all resize-none"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="flex justify-center">
                    <motion.button
                      type="submit"
                      disabled={isSendingEmail || emailSuccess}
                      whileHover={!isSendingEmail && !emailSuccess ? { scale: 1.02 } : {}}
                      whileTap={!isSendingEmail && !emailSuccess ? { scale: 0.98 } : {}}
                      className={`
                        w-full md:w-auto md:px-52 py-3 md:py-3.5 rounded-xl font-semibold text-sm md:text-base font-['Nunito']
                        flex items-center justify-center gap-2 transition-all duration-300
                        ${emailSuccess
                          ? 'bg-green-600/80 text-white cursor-default'
                          : isSendingEmail
                            ? 'bg-white/10 text-gray-400 cursor-not-allowed border border-white/10'
                            : 'bg-white/[0.06] text-white border border-purple-500/35 hover:bg-purple-500/20 hover:border-purple-400/55'
                        }
                      `}
                    >
                      {isSendingEmail ? (
                        <><Loader2 className="w-4 h-4 md:w-5 md:h-5 animate-spin" /> Sending...</>
                      ) : emailSuccess ? (
                        <><Check className="w-4 h-4 md:w-5 md:h-5" /> Message Sent!</>
                      ) : (
                        <><Send className="w-4 h-4 md:w-5 md:h-5" /> Send Message</>
                      )}
                    </motion.button>
                  </div>
                </form>
              </div>
            </motion.div>

            {/* RIGHT — Info + Social Links */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col gap-5 md:gap-6"
            >
              {/* Info card */}
              <div className="rounded-3xl p-6 md:p-10 border border-purple-500/20 bg-white/[0.03] backdrop-blur-md">
                <h3 className="text-xl md:text-2xl font-bold text-white font-['Nunito'] mb-3 md:mb-4">
                  Let's Create Together
                </h3>
                <p className="text-gray-300 font-['Nunito'] text-sm md:text-base leading-relaxed mb-5 md:mb-7">
                  Whether it's a new website, a UI/UX project, a brand redesign,
                  or just a conversation — I'm always open to discussing fresh ideas
                  and meaningful collaborations.
                </p>

                {/* Direct email display */}
                <div className="flex items-center gap-3 md:gap-4 p-4 md:p-5 rounded-2xl border border-purple-500/15 bg-white/[0.03]">
                  <div
                    className="w-10 h-10 md:w-11 md:h-11 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(168,85,247,0.12)', border: '1px solid rgba(168,85,247,0.25)' }}
                  >
                    <Mail className="w-4 h-4 md:w-5 md:h-5 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs md:text-sm font-['Nunito'] mb-0.5">Email me directly</p>
                    <p className="text-white text-sm md:text-base font-bold font-['Nunito']">
                      roseldaapares.com
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links card */}
              <div className="rounded-3xl p-6 md:p-10 border border-purple-500/20 bg-white/[0.03] backdrop-blur-md">
                <h4 className="text-xl md:text-2xl font-bold text-white font-['Nunito'] mb-4 md:mb-6">
                  Connect With Me
                </h4>
                <div className="grid grid-cols-2 gap-3 md:gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      whileHover={{ y: -4, transition: { duration: 0.15 } }}
                      viewport={{ once: false, amount: 0.3 }}
                      transition={{ delay: 0.5 + index * 0.08 }}
                      className="flex items-center gap-2 md:gap-3 p-3 md:p-4 rounded-2xl border border-white/[0.08] bg-white/[0.03] hover:border-purple-500/35 hover:bg-white/[0.07] transition-all duration-300 group"
                    >
                      <div
                        className="w-9 h-9 md:w-11 md:h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: `${social.color}18` }}
                      >
                        <social.icon className="w-4 h-4 md:w-5 md:h-5" style={{ color: social.color }} />
                      </div>
                      <div className="min-w-0">
                        <p className="text-white text-xs md:text-sm font-bold font-['Nunito'] group-hover:text-purple-300 transition-colors truncate">
                          {social.title}
                        </p>
                        <p className="text-gray-400 text-[10px] md:text-xs font-['Nunito'] truncate mt-0.5">
                          {social.subtitle}
                        </p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}