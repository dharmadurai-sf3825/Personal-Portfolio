import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  Linkedin, 
  Github, 
  MapPin, 
  Send, 
  CheckCircle2, 
  MessageSquare,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Senior / Lead Front-End Developer Role Opportunity',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const generateMailto = () => {
    const body = encodeURIComponent(`Hi Dharmadurai,\n\n${formData.message}\n\nBest regards,\n${formData.name}\n${formData.email}`);
    const subject = encodeURIComponent(formData.subject);
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 bg-slate-950 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-medium mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>LET'S CONNECT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Get In Touch with Dharmadurai
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base">
            Open to Senior Front-End Developer & Team Lead opportunities, technical discussions, and consulting on enterprise Angular architectures.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Direct Contact Cards (Left) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-slate-900/90 p-6 rounded-2xl border border-slate-800 shadow-xl">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <span>Contact Details</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                {/* Email */}
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-center gap-3.5 p-3 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-cyan-500/40 text-slate-200 hover:text-cyan-300 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[10px] font-mono text-slate-500 block uppercase">Primary Email</span>
                    <span className="font-semibold text-slate-200 group-hover:text-cyan-300 truncate block">
                      {PERSONAL_INFO.email}
                    </span>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
                  className="flex items-center gap-3.5 p-3 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-cyan-500/40 text-slate-200 hover:text-cyan-300 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-500 block uppercase">Direct Phone</span>
                    <span className="font-semibold text-slate-200 group-hover:text-cyan-300">
                      {PERSONAL_INFO.phone}
                    </span>
                  </div>
                </a>

                {/* LinkedIn */}
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-3 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-blue-500/40 text-slate-200 hover:text-cyan-300 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-600/10 border border-blue-600/20 flex items-center justify-center text-blue-400 shrink-0">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-500 block uppercase">LinkedIn Profile</span>
                    <span className="font-semibold text-slate-200 group-hover:text-cyan-300">
                      dharmadurai-d-6815141b5
                    </span>
                  </div>
                </a>

                {/* GitHub */}
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-3 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-purple-500/40 text-slate-200 hover:text-cyan-300 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 shrink-0">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-500 block uppercase">GitHub Profile</span>
                    <span className="font-semibold text-slate-200 group-hover:text-cyan-300">
                      dharmadurai-sf3825
                    </span>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-3.5 p-3 rounded-xl bg-slate-950/80 border border-slate-800">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-500 block uppercase">Current Location</span>
                    <span className="font-semibold text-slate-200">
                      {PERSONAL_INFO.location}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Form (Right) */}
          <div className="lg:col-span-7 bg-slate-900/90 p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-xl">
            <h3 className="text-lg font-bold text-white mb-2">Send a Message</h3>
            <p className="text-xs text-slate-400 mb-6">
              Fill out the form below to initiate an email directly to Dharmadurai.
            </p>

            {submitted ? (
              <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-2xl p-6 text-center animate-fadeIn">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto mb-3" />
                <h4 className="text-lg font-bold text-white mb-2">Message Prepared!</h4>
                <p className="text-xs text-slate-300 mb-4 max-w-md mx-auto">
                  Click the button below to send this directly via your email client to <strong className="text-cyan-300">{PERSONAL_INFO.email}</strong>.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={generateMailto}
                    className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold text-xs shadow-md cursor-pointer w-full sm:w-auto"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Open Email Client</span>
                  </button>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-4 py-3 text-xs text-slate-400 hover:text-white cursor-pointer"
                  >
                    Edit Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-mono text-slate-300 block mb-1.5 font-semibold">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Sarah Jenkins (Engineering Director)"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-slate-200 focus:border-cyan-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono text-slate-300 block mb-1.5 font-semibold">Your Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. sarah@company.com"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-slate-200 focus:border-cyan-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-mono text-slate-300 block mb-1.5 font-semibold">Subject</label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-slate-200 focus:border-cyan-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono text-slate-300 block mb-1.5 font-semibold">Message *</label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe the opportunity, team scope, or technical topic..."
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-slate-200 focus:border-cyan-500 focus:outline-none leading-relaxed"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-xs shadow-lg shadow-cyan-500/20 cursor-pointer transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message to Dharmadurai</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
