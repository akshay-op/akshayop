
const ResumeSection = () => {
  return (
    <div className="text-white">
      <h2 className="text-3xl md:text-4xl font-bold mb-8">Resume</h2>
      
      <div className="space-y-8">
        <p className="text-gray-300 leading-relaxed">
          Download my complete resume to learn more about my experience, education, and achievements.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
            onClick={() => {
            const link = document.createElement('a');
            link.href = '/akshay_op_.pdf';
            link.download = 'akshay_op.pdf';
            link.click();
          }}>
            Download PDF
          </button>
          <button className="px-6 py-3 border border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white rounded-lg transition-colors"
            onClick={() => window.open('https://drive.google.com/file/d/1dusJ3T_AOddao9cmlETsK-kauSZ2VXSJ/view?usp=sharing', '_blank')}>
            View Online
          </button>
        </div>
        
        <div className="mt-8 p-6 bg-gray-800/50 rounded-lg">
          <h3 className="text-lg font-semibold mb-4 text-blue-300">Quick Summary</h3>
          <ul className="space-y-2 text-gray-300">
            <li>• 3+ years of experience in Data Science and AI/ML</li>
            <li>• multiple end-to-end ML projects across various industries</li>
            <li>• Co-founder of Confio tech community</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ResumeSection;
