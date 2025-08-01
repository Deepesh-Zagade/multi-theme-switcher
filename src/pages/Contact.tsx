import { useTheme } from "../utils/contexts/ThemeContext"

export default function Contact() {
    const { theme } = useTheme()
    return (
        <div className={`page ${theme === 'theme2' ? "mt-0" : "mt-40 md:mt-20"} p-5 md:p-10`}>
            <h1 className="text-2xl md:text-4xl font-bold mb-4">Contact</h1>
            <p className="mb-2 text-lg md:text-xl">I would love to hear from you! Whether it's feedback, collaboration, or opportunities.</p>
            <div className="space-y-4">
                <p><span className="font-bold">Email:</span> <a href="mailto:yourname@email.com" className="text-blue-600 underline">zagadedeepesh@gmail.com</a></p>
                <p><span className="font-bold">GitHub:</span> <a href="https://github.com/Deepesh-Zagade" className="text-blue-600 underline">github.com/Deepesh-Zagade</a></p>
                <p><span className="font-bold">LinkedIn:</span> <a href="https://www.linkedin.com/in/deepesh-zagade-3969861a3/" className="text-blue-600 underline">linkedin.com/in/deepesh-zagade</a></p>
            </div>
        </div>
    )
}