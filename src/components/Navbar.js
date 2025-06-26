import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="px-6 py-5 flex justify-between items-center text-2xl">
      <h1 className="text-2xl font-bold text-yellow-100">Jenna's Portfolio</h1>
      <div className="space-x-11">
        <Link to="/" className="text-white-400 hover:text-purple-400">Home</Link>
        <Link to="/about" className="text-white-400 hover:text-purple-400">About</Link>
        <Link to="/projects" className="text-white-400 hover:text-purple-400">Projects</Link>
      </div>
    </nav>
  );
}
