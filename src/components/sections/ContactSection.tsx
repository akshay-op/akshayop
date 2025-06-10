
import { Linkedin, Github, Mail, Phone, MapPin } from 'lucide-react';

const ContactSection = () => {
  return (
    <div className="text-white">
      <h2 className="text-3xl md:text-4xl font-bold mb-8">Contact</h2>
      
      <div className="space-y-8">
        <p className="text-gray-300 leading-relaxed">
          Let's connect! I'm always interested in discussing new opportunities, 
          collaborations, or just having a chat about technology and innovation.
        </p>
        
        <div className="space-y-6">
          <div className="flex items-center text-gray-300">
            <Mail className="w-5 h-5 mr-4 text-blue-400" />
            <div>
              <p className="font-medium">Email</p>
              <a href="mailto:akshayop277@gmail.com" className="text-blue-400 hover:text-blue-300">
                akshayop277@gmail.com
              </a>
            </div>
          </div>
          
          <div className="flex items-center text-gray-300">
            <Phone className="w-5 h-5 mr-4 text-blue-400" />
            <div>
              <p className="font-medium">Phone</p>
              <a href="tel:+919496104438" className="text-blue-400 hover:text-blue-300">
                +91 9496 104 438
              </a>
            </div>
          </div>
          
          <div className="flex items-center text-gray-300">
            <Linkedin className="w-5 h-5 mr-4 text-blue-400" />
            <div>
              <p className="font-medium">LinkedIn</p>
              <a href="#" className="text-blue-400 hover:text-blue-300">
                akshay-o-p
              </a>
            </div>
          </div>
          
          <div className="flex items-center text-gray-300">
            <Github className="w-5 h-5 mr-4 text-blue-400" />
            <div>
              <p className="font-medium">GitHub</p>
              <a href="#" className="text-blue-400 hover:text-blue-300">
                akshay-op
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 p-6 bg-gray-800/50 rounded-lg">
          <h3 className="text-lg font-semibold mb-4 text-blue-300">Let's Build Something Amazing</h3>
          <p className="text-gray-300 leading-relaxed">
            Whether you have a project in mind, want to discuss opportunities, 
            or just want to connect with a fellow tech enthusiast, I'd love to hear from you!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
