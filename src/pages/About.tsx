import { useTheme } from "../utils/contexts/ThemeContext";

const About = () => {
  const { theme } = useTheme()
  return (
    <div className={`page ${theme === 'theme2' ? "mt-0" : "mt-40 md:mt-20"} p-5 md:p-10`}>
      <h1 className="text-2xl md:text-4xl font-bold mb-4">About Multi-Theme Switcher App</h1>
      <p className="mb-6 text-lg md:text-xl">
        This application was built as a demonstration of how <span className="font-bold"> React, TypeScript, and TailwindCSS</span> can be combined to create a dynamic and fully themeable experience. It features <span className="font-bold">three completely different UI themes</span> — from a clean minimalist design to a rich dark sidebar layout and a colorful, playful grid.
      </p>
      <p className="text-lg md:text-xl">
        This project was created as part of a <span className="font-bold">frontend engineering interview assignment</span>, showcasing skills in <span className="font-bold">context-based state management, responsive design, API integration, and deployment to production </span>.
      </p>
    </div>
  );
};

export default About;
