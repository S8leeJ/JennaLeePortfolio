import { FaEnvelope, FaLinkedin, FaGithub, FaArrowDown, FaUser } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-12rem)] flex flex-col justify-center items-center text-center animate-fade-in-up">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-9xl font-bold mb-6">
            <span className="text-white">Jenna</span>
            <span className="title-text"> Lee</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 font-light mb-4">
            Computer Science Student at UT Austin
          </p>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Hey, I'm Jenna, it is nice to meet you! I love combining technical expertise with creative problem-solving to deliver exceptional user experiences.
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
            href="https://github.com/S8leeJ"
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


    </div>
  );
}
