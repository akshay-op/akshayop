
import { useState } from 'react';
import { Linkedin, Github, Mail, Phone } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';
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
    // <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex">
    <div className="min-h-screen flex items-center justify-center overflow-hidden bg-[linear-gradient(to_bottom,_#000000_0%,_#000000_80%,_#0a0a33_100%)]">
      {/* Left Sidebar */}
      <div className={`${activeSection ? 'w-full md:w-1/2 lg:w-2/5' : 'w-full'} p-8 md:p-12 flex flex-col transition-all duration-300`}>
        <div className="mb-8">
          <p className="text-gray-300 text-sm mb-2">I'm</p>
          <div className="flex items-center gap-4 mb-4">
            <h1 className="text-white text-4xl md:text-5xl font-bold">AKSHAY OP</h1>
            <Avatar className="w-16 h-16">
              <AvatarImage src="/profile/profilepic.png" alt="Akshay OP" />
              <AvatarFallback className="bg-blue-500 text-white text-xl font-semibold">AO</AvatarFallback>
            </Avatar>
          </div>
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

        {/* Navigation - Horizontal Stack */}
        <nav className="flex flex-wrap gap-4">
          {navigationItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`py-2 px-4 transition-colors duration-200 rounded-lg ${
                activeSection === item.id
                  ? 'text-blue-400 bg-blue-400/10'
                  : 'text-gray-400 hover:text-blue-300 hover:bg-gray-800/50'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>

      {/* White Divider Line with gaps */}
      {activeSection && (
        <div className="hidden md:flex flex-col justify-center h-screen">
          <div className="h-16"></div>
          <div className="w-px bg-white flex-1"></div>
          <div className="h-16"></div>
        </div>
      )}

      {/* Right Content Area - Only show when a section is active */}
      {activeSection && (
        <div className="hidden md:block flex-1">
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
