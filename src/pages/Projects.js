import { useRef, useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import projects from './projectsData';
import { FaChevronLeft, FaChevronRight, FaTimes, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

export default function Projects() {
  const scrollRef = useRef(null);
  const [selected, setSelected] = useState(null);

  const scroll = (dir) => {
    scrollRef.current.scrollBy({
      left: dir === 'left' ? -300 : 300,
      behavior: 'smooth',
    });
  };

  return (
    <div className="min-h-screen py-16 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="font-outfit text-6xl md:text-7xl font-bold mb-6 text-blue-300">
            My Projects
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            A collection of my work showcasing front-end development, UI/UX design, 
            and innovative technology solutions.
          </p>
        </div>

        {/* Projects Carousel */}
        <div className="relative">
          <button
            onClick={() => scroll('left')}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 modern-card p-3 hover:bg-white/10 transition-all duration-300 group"
            aria-label="Scroll left"
          >
            <FaChevronLeft className="text-xl text-slate-300 group-hover:text-blue-300 transition-colors" />
          </button>
          
          <button
            onClick={() => scroll('right')}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 modern-card p-3 hover:bg-white/10 transition-all duration-300 group"
            aria-label="Scroll right"
          >
            <FaChevronRight className="text-xl text-slate-300 group-hover:text-blue-300 transition-colors" />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto px-6 py-4 scrollbar-hide scroll-smooth"
          >
            {projects.map((proj, index) => (
              <ProjectCard
                key={index}
                title={proj.title}
                shortDescription={proj.shortDescription}
                image={proj.image}
                onClick={() => setSelected(proj)}
              />
            ))}
          </div>
        </div>

        {/* Project Modal */}
        {selected && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
            <div className="modern-card max-w-4xl w-full max-h-[90vh] overflow-y-auto relative">
              <button
                onClick={() => setSelected(null)}
                className="absolute top-6 right-6 z-10 modern-card p-3 hover:bg-white/10 transition-all duration-300 group"
                aria-label="Close modal"
              >
                <FaTimes className="text-xl text-slate-300 group-hover:text-blue-300 transition-colors" />
              </button>

              {/* Project Media */}
              <div className="w-full">
                {selected.videoUrl ? (
                  <div className="w-full flex justify-center p-6">
                    <div className="w-full max-w-2xl aspect-video rounded-xl overflow-hidden shadow-2xl">
                      <video
                        src={selected.videoUrl}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="w-full p-6">
                    <img
                      src={selected.image}
                      alt={selected.title}
                      className="w-full max-h-96 object-cover rounded-xl shadow-2xl"
                    />
                  </div>
                )}
              </div>

              {/* Project Details */}
              <div className="p-8 space-y-6">
                <div>
                  <h3 className="font-outfit text-4xl font-bold mb-4">{selected.title}</h3>
                  <p className="text-slate-300 leading-relaxed text-lg">{selected.longDescription}</p>
                </div>

                {selected.tech && (
                  <div>
                    <h4 className="font-outfit text-2xl font-semibold mb-4">Technologies Used</h4>
                    <div className="flex flex-wrap gap-3">
                      {selected.tech.map((t, i) => (
                        <span
                          key={i}
                          className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium border border-blue-500/30"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex flex-wrap gap-4 pt-4">
                  {selected.github && (
                    <a
                      href={selected.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary flex items-center gap-3 group"
                    >
                      <FaGithub className="group-hover:scale-110 transition-transform" />
                      <span>View Code</span>
                    </a>
                  )}
                  {selected.demo && (
                    <a
                      href={selected.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary flex items-center gap-3 group"
                    >
                      <FaExternalLinkAlt className="group-hover:scale-110 transition-transform" />
                      <span>Demo</span>
                    </a>
                  )}
                  {selected.port && (
                    <a
                      href={selected.port}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary flex items-center gap-3 group"
                    >
                      <FaExternalLinkAlt className="group-hover:scale-110 transition-transform" />
                      <span>Additional Materials</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
