export default function ProjectCard({ title, image, shortDescription, onClick }) {
  return (
    <div
      className="modern-card overflow-hidden shadow-lg text-white w-80 flex-shrink-0 cursor-pointer hover:scale-105 transition-all duration-300 group"
      onClick={onClick}
    >
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="p-6">
        <h3 className="font-outfit text-2xl font-semibold mb-3 group-hover:text-blue-300 transition-colors">
          {title}
        </h3>
        <p className="text-slate-300 text-sm leading-relaxed">
          {shortDescription}
        </p>
        
        <div className="mt-4 flex items-center text-blue-300 text-sm font-medium">
          <span>View Details</span>
          <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
  );
}
