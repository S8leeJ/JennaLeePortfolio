import { useRef, useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import projects from './projectsData';

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
    <div className="min-h-screen px-6 py-16 text-white relative overflow-hidden">
      <h2 className="text-8xl font-bold font-sans mb-12 text-purple-300">My Projects</h2>

      <button
        onClick={() => scroll('left')}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 p-2 rounded-full"
      >
        ←
      </button>
      <button
        onClick={() => scroll('right')}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 p-2 rounded-full"
      >
        →
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

      {selected && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center px-4">
          <div className="bg-white/10 backdrop-blur-md rounded-xl text-white max-w-2xl w-full relative overflow-hidden">
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 text-xl bg-black/20 hover:bg-white/30 rounded-full px-3"
            >
              ✕
            </button>

            {selected.videoUrl ? (
              <div className="w-full flex justify-center mt-4">
                <div className="w-[600px] h-[340px] rounded-xl overflow-hidden shadow-lg">
                  <video
                    src={selected.videoUrl}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                  ></video>
                </div>
              </div>
            )
              : (
                <img
                  src={selected.image}
                  alt={selected.title}
                  className="w-full h-64 object-cover"
                />
              )}

            <div className="p-6 space-y-4">
              <h3 className="text-3xl font-bold">{selected.title}</h3>
              <p className="text-gray-300">{selected.longDescription}</p>

              {selected.tech && (
                <div>
                  <h4 className="font-semibold mt-4">Tech Used:</h4>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {selected.tech.map((t, i) => (
                      <span
                        key={i}
                        className="bg-white/20 px-3 py-1 rounded-full text-sm"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex gap-4 mt-4">
                {selected.github && (
                  <a
                    href={selected.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-yellow-400"
                  >
                    Project link
                  </a>
                )}
                {selected.demo && (
                  <a
                    href={selected.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-yellow-400"
                  >
                    Project Proposal
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
