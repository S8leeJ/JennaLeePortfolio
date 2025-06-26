import { FaEnvelope, FaLinkedin, FaFileDownload } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="flex items-center justify-center h-[calc(100vh-4rem)]">
      <div className="text-center">
        <h1 className="text-9xl font-bold font-sans mb-5">
          <span className="text-white ">Jenna</span>{' '}
          <span className="text-purple-300">Lee</span>
        </h1>
        <p className="text-2xl text-gray-300 mb-8">
          Hi! I am a Computer Science student at UT Austin.
        </p>

        <div className="flex justify-center gap-6 flex-wrap">
          <a
            href="mailto:jenna.snow.lee@gmail.com"
            className="flex items-center gap-2 border-2 px-4 py-2 rounded hover:bg-white/10 transition"
          >
            <FaEnvelope />
            <span>jenna.snow.lee@gmail.com</span>
          </a>

          <a
            href="https://www.linkedin.com/in/jenna-lee-303993292/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border-2 px-4 py-2 rounded hover:bg-white/10 transition"
          >
            <FaLinkedin />
            <span>LinkedIn</span>
          </a>

        </div>
      </div>
    </div>
  );
}
