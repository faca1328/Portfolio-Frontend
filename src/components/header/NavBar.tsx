import { DarkModeIcon } from "./DarkModeIcon"
import { LanguajeIcon } from "./LanguajeIcon"
import { themeStore } from "../../store/themeStore"
import { languageStore } from "../../store/languageStore"

export const NavBar = () => {
    const { language } = languageStore()
    const langMode = language === "es" ? true : false;

    const { theme } = themeStore()
    const themeMode = theme === 'light' ? 'logo-gradient-light' : 'logo-gradient-dark';



    return (
        <nav className="flex p-4 w-screen items-center justify-between navbar-dark navbar-light select-none max-phone:flex-col">

            <div className="flex ml-2 items-center max-sm:ml-1 max-phone:mb-2">

                <span className={`ml-2 text-4xl font-bold ${themeMode} cursor-default max-sm:ml-0`}> fM </span>

                <div className="ml-10 flex max-sm:ml-0 ">
                    <div className={`navbar-items ${themeMode} duration-200 font-bold rounded-full`}>
                        <a href="#projects" className="ml-10">
                            {langMode ? 'Proyectos' : 'Projects'}
                        </a>
                    </div>
                    <div className={`navbar-items ${themeMode} duration-200 font-bold rounded-full`}>
                        <a href="#contact" className="ml-10 ">
                            {langMode ? 'Contacto' : 'Contact'}
                        </a>
                    </div>
                </div>
            </div>



            <div className="mr-20 flex w-[25%] justify-between max-sm:mr-2 max-sm:w-fit max-phone:m-auto " >
                <DarkModeIcon />
                <LanguajeIcon />
            </div>

        </nav>
    )
}
