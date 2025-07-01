import { FaEnvelope, FaLinkedin, FaGithub, FaArrowDown, FaUser } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-12rem)] flex flex-col justify-center items-center text-center animate-fade-in-up">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="font-outfit text-7xl md:text-8xl lg:text-9xl font-bold mb-6 leading-tight">
            <span className="text-white">Jenna</span>
            <span className="title-text"> Lee</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 font-light mb-4">
            Computer Science Student at UT Austin
          </p>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Passionate about creating intuitive digital experiences through code and design. 
            Specializing in front-end development, UI/UX, and innovative technology solutions.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a
            href="/contact"
            className="btn-primary flex items-center gap-3 group"
          >
            <FaEnvelope className="group-hover:scale-110 transition-transform" />
            <span>Get In Touch</span>
          </a>
          
          <a
            href="/about"
            className="btn-primary flex items-center gap-3 group"
          >
            <span>Learn More</span>
            <FaUser className="group-hover:translate-y-1 transition-transform" />
          </a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6">
          <a
            href="https://www.linkedin.com/in/jenna-lee-303993292/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 modern-card hover:bg-white/10 transition-all duration-300 group"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="text-xl text-slate-300 group-hover:text-blue-300 transition-colors" />
          </a>
          
          <a
            href="https://github.com/jenna-lee"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 modern-card hover:bg-white/10 transition-all duration-300 group"
            aria-label="GitHub"
          >
            <FaGithub className="text-xl text-slate-300 group-hover:text-blue-300 transition-colors" />
          </a>
          
          <a
            href="mailto:jenna.snow.lee@gmail.com"
            className="p-3 modern-card hover:bg-white/10 transition-all duration-300 group"
            aria-label="Email"
          >
            <FaEnvelope className="text-xl text-slate-300 group-hover:text-blue-300 transition-colors" />
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <FaArrowDown className="text-slate-400 text-xl" />
      </div>
    </div>
  );
}
