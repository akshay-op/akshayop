
const ProjectsSection = () => {
  const projects = [
    {
      title: "AI-Powered Climate Analytics Platform",
      description: "Built an end-to-end machine learning platform for climate data analysis using Python, TensorFlow, and React.",
      tech: ["Python", "TensorFlow", "React", "PostgreSQL"]
    },
    {
      title: "Smart Building IoT Dashboard",
      description: "Developed a real-time monitoring system for smart buildings with predictive maintenance capabilities.",
      tech: ["Python", "FastAPI", "Vue.js", "InfluxDB"]
    },
    {
      title: "Financial Risk Assessment Tool",
      description: "Created a comprehensive risk assessment platform for financial institutions using advanced ML algorithms.",
      tech: ["Python", "Scikit-learn", "Django", "Redis"]
    }
  ];

  return (
    <div className="text-white">
      <h2 className="text-3xl md:text-4xl font-bold mb-8">Projects</h2>
      
      <div className="space-y-8">
        {projects.map((project, index) => (
          <div key={index} className="border-l-2 border-blue-400 pl-6">
            <h3 className="text-xl font-semibold mb-3 text-blue-300">{project.title}</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-3 py-1 bg-blue-900/30 text-blue-300 rounded-full text-sm"
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

export default ProjectsSection;
