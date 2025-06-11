import {
  SiPython, SiJavascript, SiTypescript, SiMysql, SiTensorflow, SiPytorch,
  SiScikitlearn, SiPandas, SiNumpy, SiFastapi, SiDjango, SiFlask, SiPostgresql,
  SiRedis, SiReact, SiVuedotjs, SiTailwindcss, SiNextdotjs, SiDocker, SiGit,
  SiAmazon, SiGooglecloud, SiJupyter,
  SiHtml5,
  SiCss3
} from "react-icons/si";


const TechStackSection = () => {
  const techStack = {
   "Languages": [
      { name: "Python", icon: "/icons/python-logo-only.png" },
      { name: "JavaScript", icon: "/icons/javascript-logo.png" },
      { name: "SQL", icon: "/icons/mysqllogo.png" },
      { name: "Html", icon: "/icons/html-logo.png" },
      { name: "css", icon: "/icons/css-logo.png" }

    ],
    "ML/AI": [
      { name: "TensorFlow", icon: "/icons/tensorflowlogo.png"  },
      { name: "CatBoost", icon:"/icons/catboostlogo.png"  },
      { name: "Scikit-learn", icon: "/icons/scikitlearnlogo.svg"  },
      { name: "Pandas", icon: "/icons/pandaslogo.svg" },
      { name: "NumPy", icon: "/icons/numpy.png" }
    ],
    "API's": [
      { name: "Flask", icon: "/icons/flaskfullicon.png" },
    ],
    "Database": [
      { name: "MongoDB", icon: "/icons/mongodblogo.png" },
      { name: "DynamoDB", icon: "/icons/dynamologo.png" },
      { name: "SQL", icon: "/icons/mysqllogo.png" },
    ],
    "Cloud & Deployment": [
      { name: "AWS", icon: "/icons/awslogo.svg" },
      { name: "Docker", icon: "/icons/dockerlogo.png" },
    ],
    "Version Control": [
      { name: "Git", icon: "/icons/githublogo.svg" },
    ],
    "Dashboarding & Visualizations": [
      { name: "Metabase", icon: "/icons/metabaselogo.svg" },
      { name: "Plotly", icon: "/icons/plotlylogo.png" },
    ],
    "Others": [
      { name: "Excel", icon: "/icons/excellogo.png" },
      { name: "VsCode", icon: "/icons/vscodelogo.svg" },
      { name: "Jupyter", icon: "/icons/Jupyterlogo.svg" },
    ]
  };

  return (
    <div className="text-white">
      <h2 className="text-3xl md:text-4xl font-bold mb-8">Tech Stack</h2>
      
      <div className="space-y-6">
        {Object.entries(techStack).map(([category, technologies]) => (
          <div key={category}>
            <h3 className="text-lg font-semibold mb-3 text-blue-500">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {/* {technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-gray-800 text-gray-300 rounded-lg text-sm hover:bg-gray-700 transition-colors"
                >
                  {tech}
                </span>
              ))} */
              technologies.map(({ name, icon }) => (
                <span
                  key={name}
                  // className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-gray-300 rounded-lg text-sm hover:bg-gray-700 transition-colors"
                  className="flex items-center gap-2 text-white"
                >
               
                  {/* <span className="text-xl">{icon}</span> */}
                  <img src={`${import.meta.env.BASE_URL}${icon}`} alt={name} className="w-5 h-5" />
                  <span className="text-sm">{name}</span>
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
