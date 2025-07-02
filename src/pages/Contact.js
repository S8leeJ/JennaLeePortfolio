import { useState } from 'react';
import emailjs from 'emailjs-com';
import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      'service_qgiozzk',
      'template_kzacr96',
      e.target,
      'JnkQDrcKguCsvclUy'
    ).then(
      (result) => {
        alert('Message sent!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      },
      (error) => {
        alert('Failed to send message. Please try again.');
      }
    );
  };

  return (
    <div className="min-h-screen py-16 text-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="font-outfit text-6xl md:text-7xl font-bold mb-6 text-blue-300">
            Get In Touch
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            I'm always open to discussing new opportunities, interesting projects, 
            or just having a chat about technology and design.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2 modern-card p-8 animate-fade-in-up">
            <h2 className="font-outfit text-3xl font-semibold mb-8">Send me a message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-3 text-slate-300">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="input-field"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-3 text-slate-300">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="input-field"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-3 text-slate-300">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="input-field"
                  placeholder="What's this about?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-3 text-slate-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="input-field resize-none"
                  placeholder="Tell me about your project or just say hello!"
                />
              </div>
              
              <button
                type="submit"
                className="btn-primary w-full flex items-center justify-center gap-3 group"
              >
                <FaEnvelope className="group-hover:scale-110 transition-transform" />
                <span>Send Message</span>
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="modern-card p-8">
              <h3 className="font-outfit text-2xl font-semibold mb-6">Let's Connect</h3>
              <p className="text-slate-300 leading-relaxed mb-8">
                Feel free to reach out through any of these channels. I typically respond within 24 hours during weekdays.
              </p>
              
              <div className="space-y-4">
                <a
                  href="mailto:jenna.snow.lee@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-lg hover:bg-white/5 transition-colors group"
                >
                  <FaEnvelope className="text-blue-400 text-xl group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-slate-400 text-sm">jenna.snow.lee@gmail.com</p>
                  </div>
                </a>
                
                <a
                  href="https://linkedin.com/in/jenna-lee-303993292/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg hover:bg-white/5 transition-colors group"
                >
                  <FaLinkedin className="text-blue-400 text-xl group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="font-medium">LinkedIn</p>
                    <p className="text-slate-400 text-sm">Connect professionally</p>
                  </div>
                </a>
                
                <a
                  href="https://github.com/jenna-lee"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg hover:bg-white/5 transition-colors group"
                >
                  <FaGithub className="text-blue-400 text-xl group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="font-medium">GitHub</p>
                    <p className="text-slate-400 text-sm">View my projects</p>
                  </div>
                </a>
              </div>
            </div>
            
            <div className="modern-card p-8">
              <h3 className="font-outfit text-2xl font-semibold mb-6">Quick Info</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <FaMapMarkerAlt className="text-blue-400 text-xl" />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-slate-400 text-sm">Austin, Texas</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <FaClock className="text-blue-400 text-xl" />
                  <div>
                    <p className="font-medium">Response Time</p>
                    <p className="text-slate-400 text-sm">Within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 