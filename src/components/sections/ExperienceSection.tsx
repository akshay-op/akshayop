
const ExperienceSection = () => {
  const experiences = [
    {
      title: "AI-ML Consultant",
      company: "Hapzea",
      period: "2024 Oct - Present",
      description: "Building intelligent solutions with scalable cloud infrastructure for real-world applications."
    },
    {
      title: "Data Scientist",
      company: "Kinara Capital",
      period: "2023 Nov - 2024 Sep",
      description: "Developed enterprise-grade analytics infrastructure and solved complex funnel optimization challenges to drive revenue growth. Automated complex forecasting workflows with Python, making processes 10x faster."
    },
    {
      title: "Data Scientist Consultant",
      company: "DataInception",
      period: "2023 Aug - 2023 Oct",
      description: "Built and deployed high-performance ML models achieving 98% accuracy on complex sensor data, handling end-to-end development from data preprocessing to production-ready APIs with Docker integration"
    },
    {
      title: "ML Engineer",
      company: "Climate Connect",
      period: "2022 Jun - 2023 Jul",
      description: "Developed high-performance ML model achieving 28% error reduction in renewable energy forecasting. Built a comprehensive data repository that serves as the backbone for ongoing ML research."
    },
    {
      title: "Backend & Growth Intern",
      company: "Supertext.ai",
      period: "2021 Sep - 2022 May",
      description: "Built interactive chatbots for diverse high-profile clients including a global sports brand and a country's official tourism board. Managed end-to-end client relationships from technical development to business development, driving lead generation and maintaining long-term partnerships."
    }
  ];

  return (
    <div className="text-white">
      <h2 className="text-3xl md:text-4xl font-bold mb-8">Experience</h2>
      
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="border-l-2 border-blue-500 pl-6">
            <h3 className="text-xl font-semibold mb-1 text-blue-500">{exp.title}</h3>
            <p className="text-blue-400 mb-2">{exp.company}</p>
            <p className="text-gray-400 text-sm mb-3">{exp.period}</p>
            <p className="text-gray-300 leading-relaxed">{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;
