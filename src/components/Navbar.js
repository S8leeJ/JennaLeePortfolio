import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-blue-600">My Portfolio</h1>
      <div className="space-x-4">
        <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
        <Link to="/about" className="text-gray-700 hover:text-blue-600">About</Link>
        <Link to="/projects" className="text-gray-700 hover:text-blue-600">Projects</Link>
      </div>
    </nav>
  );
}
