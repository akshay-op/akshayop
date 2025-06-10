
const ExperienceSection = () => {
  const experiences = [
    {
      title: "Senior Data Scientist",
      company: "TechCorp Inc.",
      period: "2022 - Present",
      description: "Leading AI/ML initiatives and building scalable data pipelines for enterprise clients."
    },
    {
      title: "ML Engineer",
      company: "DataVision Labs",
      period: "2020 - 2022",
      description: "Developed and deployed machine learning models for real-time prediction systems."
    },
    {
      title: "Python Developer",
      company: "StartupXYZ",
      period: "2019 - 2020",
      description: "Built backend systems and APIs for data-driven applications."
    }
  ];

  return (
    <div className="text-white">
      <h2 className="text-3xl md:text-4xl font-bold mb-8">Experience</h2>
      
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="border-l-2 border-purple-400 pl-6">
            <h3 className="text-xl font-semibold mb-1 text-purple-300">{exp.title}</h3>
            <p className="text-blue-300 mb-2">{exp.company}</p>
            <p className="text-gray-400 text-sm mb-3">{exp.period}</p>
            <p className="text-gray-300 leading-relaxed">{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;
