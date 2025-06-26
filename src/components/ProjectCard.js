export default function ProjectCard({ title, image, shortDescription, onClick }) {
  console.log(shortDescription);
    return (
    <div
      className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden shadow-lg text-white w-72 flex-shrink-0 cursor-pointer hover:scale-105 transition-transform"
      onClick={onClick}
    >
      <img src={image} alt={title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-white-300 text-sm">{shortDescription}</p>
      </div>
    </div>
  );
}
