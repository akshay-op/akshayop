
import { useState } from 'react';
import { Linkedin, Github, Mail, Phone } from 'lucide-react';
import AboutSection from './sections/AboutSection';
import ProjectsSection from './sections/ProjectsSection';
import ExperienceSection from './sections/ExperienceSection';
import TechStackSection from './sections/TechStackSection';
import ResumeSection from './sections/ResumeSection';
import ContactSection from './sections/ContactSection';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('');

  const navigationItems = [
    { id: 'about', label: 'About me' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'techstack', label: 'Tech stack' },
    { id: 'resume', label: 'Resume' },
    { id: 'contact', label: 'Contact' },
  ];

  const renderSection = () => {
    switch (activeSection) {
      case 'about':
        return <AboutSection />;
      case 'projects':
        return <ProjectsSection />;
      case 'experience':
        return <ExperienceSection />;
      case 'techstack':
        return <TechStackSection />;
      case 'resume':
        return <ResumeSection />;
      case 'contact':
        return <ContactSection />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex">
      {/* Left Sidebar */}
      <div className={`${activeSection ? 'w-full md:w-1/2 lg:w-2/5' : 'w-full'} p-8 md:p-12 flex flex-col transition-all duration-300`}>
        <div className="mb-8">
          <p className="text-gray-300 text-sm mb-2">I'm</p>
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">AKSHAY OP</h1>
          <p className="text-gray-300 text-lg mb-6">Data Scientist | AI-ML Engineer | Python Developer</p>
          <p className="text-gray-400 text-sm leading-relaxed mb-8">
            I think deeply, build intelligently, and write Python that reads like poetry.<br />
            Always curious. Always shipping.
          </p>
        </div>

        {/* Contact Links */}
        <div className="space-y-4 mb-12">
          <div className="flex items-center text-gray-300 text-sm">
            <Linkedin className="w-4 h-4 mr-3" />
            <span>akshay-o-p</span>
          </div>
          <div className="flex items-center text-gray-300 text-sm">
            <Github className="w-4 h-4 mr-3" />
            <span>akshay-op</span>
          </div>
          <div className="flex items-center text-gray-300 text-sm">
            <Mail className="w-4 h-4 mr-3" />
            <span>akshayop277@gmail.com</span>
          </div>
          <div className="flex items-center text-gray-300 text-sm">
            <Phone className="w-4 h-4 mr-3" />
            <span>+91 9496 104 438</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="space-y-2">
          {navigationItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`block text-left py-2 px-0 transition-colors duration-200 ${
                activeSection === item.id
                  ? 'text-blue-400 border-l-2 border-blue-400 pl-4'
                  : 'text-gray-400 hover:text-blue-300 pl-4'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Right Content Area - Only show when a section is active */}
      {activeSection && (
        <div className="hidden md:block w-1/2 lg:w-3/5 border-l border-gray-700">
          <div className="p-8 md:p-12 h-full overflow-y-auto">
            {renderSection()}
          </div>
        </div>
      )}

      {/* Mobile Content - Only show when a section is active */}
      {activeSection && (
        <div className="md:hidden fixed inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 z-50 overflow-y-auto pt-20">
          <button
            onClick={() => setActiveSection('')}
            className="absolute top-4 right-4 text-white text-2xl"
          >
            ×
          </button>
          <div className="p-8">
            {renderSection()}
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
