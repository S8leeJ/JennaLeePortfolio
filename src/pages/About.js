import profileImg from '../Images/profile.png'; // adjust path as needed
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

import Timeline from '../components/Timeline.js';
import { FaEnvelope, FaLinkedin, FaFileDownload } from 'react-icons/fa';

export default function About() {
  return (
    <div className="min-h-screen px-6 py-16 text-white flex flex-col justify-center">
      <h1 className="text-8xl font-bold mb-12 font-sans text-purple-300">About Me</h1>
      <div className="flex flex-col md:flex-row items-center gap-10 max-w-4xl w-full">

        <div className="max-w-5xl backdrop-blur-md bg-white/10 p-6 rounded-xl">
          <h2 className="text-3xl font-semibold mb-4">Hi, I’m Jenna Lee 👋</h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            I'm a Computer Science student at UT Austin who merges design and code to build intuitive, user-focused digital experiences. I’m passionate about UI/UX, front-end development, and using technology to support education, sustainability, and social impact.
          </p>
          <a
            href="/Jenna_Lee_Resume.pdf" 
            download
            className="flex items-center gap-2 px-4 py-4 rounded text-yellow-200 hover:bg-white/10 transition"
          >
            <FaFileDownload />
            <span>Resume coming soon!</span>
          </a>
        </div>
      </div>
      <Timeline />
    </div>
  );
}
