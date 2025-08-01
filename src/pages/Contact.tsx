import { useTheme } from "../utils/contexts/ThemeContext"

export default function Contact() {
    const { theme } = useTheme()
    return (
        <div className={`page ${theme === 'theme2' ? "mt-0" : "mt-40 md:mt-20"}`}>
            <h1>Contact</h1>
        </div>
    )
}