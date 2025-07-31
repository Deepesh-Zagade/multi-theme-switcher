import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

type ThemeProviderProps = {
  children: ReactNode;
};

type ThemeContext = {
  theme: string | undefined;
  onChangeTheme: (e: string) => void;
};

const ThemeContext = createContext<ThemeContext | null>(null);

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<string | undefined>(undefined);

  const onChangeTheme = (e: string) => {
    console.log(e);
    localStorage.setItem("theme", e);
    setTheme(e);
  };

  useEffect(() => {
    const preLoadTheme = localStorage.getItem("theme");
    if (preLoadTheme) {
      setTheme(preLoadTheme);
    }else{
        setTheme('theme1');
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, onChangeTheme }}>
      <div className={`${theme}`} >{children}</div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("theme must be used inside provider");
  return context;
};
