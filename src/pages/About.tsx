import { useTheme } from "../utils/contexts/ThemeContext";

const About = () => {
  const { theme } = useTheme()
  return (
    <div className={`page ${theme === 'theme2' ? "mt-0" : "mt-40 md:mt-20"}`}>
      <h1>About Us</h1>
    </div>
  );
};

export default About;
