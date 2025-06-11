
import { FiLink } from "react-icons/fi";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Financial Statement Parser",
      description: "Built an end-to-end platform to analyze financial data from uploaded PDFs. The application uses a multimodalLLM (meta-llama4) to  extract structured financial data such as income statements, balance sheets reports directly from scanned or image-based documents.",
      tech: ["Python", "Flask","MultimodalLLM", "meta-llama", "Aws EC2","Vercel","React"],
      image: "/projects/pdfanalyzer.png",
      link : "https://github.com/akshay-op/financial_data_extract"
    },
    {
      title: "Inside the User Journey",
      description: "A deep dive into user browsing habits uncovering clear daily routines, platform preferences, and time-based engagement patterns. From quick morning check-ins to focused afternoon sessions and relaxed evening browsing, the analysis offers meaningful insights that can drive personalized content and smarter user experiences.",
      tech: ["Python", "JupyterLab", "Clustering", "Plotly"],
      image: "/projects/behaviouranalysis.png",
      link : "https://github.com/akshay-op/browsing-behaviour-analysis"
    },

  ];

  return (
    <div className="text-white">
      <h2 className="text-3xl md:text-4xl font-bold mb-8">Projects</h2>
      
      <div className="space-y-8">
        {projects.map((project, index) => (
  <div
    key={index}
    className="flex flex-col md:flex-row items-start md:items-center gap-6 border-l-2 border-blue-400 pl-6"
  >
    {/* Text Content on the Left */}
    <div className="flex-1">
      <h3 className="text-xl font-semibold mb-3 text-blue-300 flex items-center justify-between gap-2">
        {project.title}
        {project.link && (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-400 hover:text-white"
    >
      <FiLink size={18} />
    </a>
  )}
      </h3>
      <p className="text-gray-300 mb-4 leading-relaxed">
        {project.description}
      </p>
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

    {/* Image on the Right */}
    {project.image && (
      <div className="w-full md:w-1/3 h-60 md:h-full">
        <img
          src={`${import.meta.env.BASE_URL}${project.image}`}
          alt={project.title}
          className="w-full h-full object-cover rounded-lg shadow-lg"
        />
      </div>
    )}
  </div>
))}

      </div>
    </div>
  );
};

export default ProjectsSection;
