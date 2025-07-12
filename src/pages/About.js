import { useState } from 'react';
import profileImg from '../Images/profile.png'; // adjust path as needed
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import resume from '../Images/JennaLeeResume.pdf';

import Timeline from '../components/Timeline.js';
import { FaEnvelope, FaLinkedin, FaFileDownload, FaGithub, FaTimes, FaHistory, FaFileAlt } from 'react-icons/fa';

export default function About() {
  const [showExperienceModal, setShowExperienceModal] = useState(false);

  return (
    <div className="min-h-screen py-16 text-white">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="font-outfit text-6xl md:text-7xl font-bold mb-6 text-blue-300">
            About Me
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            A passionate Computer Science student merging design and code to build intuitive,
            user-focused digital experiences.
          </p>
        </div>

        {/* About Me Section - Full Width */}
        <div className="animate-fade-in-up">
          <div className="modern-card p-8">
            <div className="flex items-center gap-6 mb-8">
              {/* <img 
                src={profileImg} 
                alt="Jenna Lee" 
                className="w-24 h-24 rounded-full object-cover border-4 border-cyan-500/20"
              /> */}
              <div>
                <h2 className="font-outfit text-3xl font-semibold mb-2">Jenna Lee</h2>
                <p className="text-blue-300 font-medium">Computer Science Student</p>
                <p className="text-slate-400 text-sm">The University of Texas at Austin</p>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-slate-300 leading-relaxed">
                I'm passionate about UI/UX, front-end development, and using technology to support
                education, sustainability, and social impact. My approach combines technical expertise
                with creative problem-solving to deliver exceptional user experiences.
              </p>

              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium">
                  React
                </span>
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium">
                  JavaScript
                </span>
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium">
                  Java
                </span>
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium">
                  Express.js
                </span>
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium">
                  C#
                </span>
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium">
                  C++
                </span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium">
                  R
                </span>
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium">
                  Python
                </span>
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium">
                  UI/UX Design
                </span>
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium">
                  Front-end Development
                </span>
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium">
                  Back-end Development
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <button
                  onClick={() => setShowExperienceModal(true)}
                  className="btn-primary flex items-center gap-3 group"
                >
                  <FaHistory className="group-hover:scale-110 transition-transform" />
                  <span>View Experience</span>
                </button>

                <a
                  href={resume}
                  download
                  className="btn-secondary flex items-center gap-3 group"
                >
                  <FaFileDownload className="group-hover:scale-110 transition-transform" />
                  <span>Download Resume</span>
                </a>

                <a
                  href="/contact"
                  className="btn-secondary flex items-center gap-3 group"
                >
                  <FaEnvelope className="group-hover:scale-110 transition-transform" />
                  <span>Get In Touch</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Experience Modal */}
      {showExperienceModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="modern-card max-w-4xl w-full max-h-[90vh] overflow-y-auto relative">
            <button
              onClick={() => setShowExperienceModal(false)}
              className="absolute top-6 right-6 z-10 modern-card p-3 hover:bg-white/10 transition-all duration-300 group"
              aria-label="Close modal"
            >
              <FaTimes className="text-xl text-slate-300 group-hover:text-blue-300 transition-colors" />
            </button>

            <div className="p-8">
              {/* Modal Header */}
              <div className="text-center mb-12">
                <h2 className="font-outfit text-5xl font-bold mb-4 text-blue-300">
                  Experience
                </h2>
                <p className="text-slate-300 text-lg">
                  My academic journey and professional experience
                </p>
              </div>

              {/* Experience Timeline */}

              <Timeline />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
