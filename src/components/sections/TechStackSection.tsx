
const TechStackSection = () => {
  const techStack = {
    "Languages": ["Python", "JavaScript", "TypeScript", "SQL"],
    "ML/AI": ["TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy"],
    "Backend": ["FastAPI", "Django", "Flask", "PostgreSQL", "Redis"],
    "Frontend": ["React", "Vue.js", "Tailwind CSS", "Next.js"],
    "Tools": ["Docker", "Git", "AWS", "Google Cloud", "Jupyter"]
  };

  return (
    <div className="text-white">
      <h2 className="text-3xl md:text-4xl font-bold mb-8">Tech Stack</h2>
      
      <div className="space-y-6">
        {Object.entries(techStack).map(([category, technologies]) => (
          <div key={category}>
            <h3 className="text-lg font-semibold mb-3 text-blue-300">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-gray-800 text-gray-300 rounded-lg text-sm hover:bg-gray-700 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStackSection;
