import gitIcon from "../../../utils/icons8-github.svg"
import { languageStore } from "../../store/languageStore"

export const Footer = () => {
    const { language } = languageStore((state: string) => state)
    const langMode = language === "es" ? true : false;

    return (
        <div className="bg-gradient-to-t from-zinc-900 to-zinc-900/90 min-h-[5rem] flex flex-1 flex-wrap w-screen">
            <div className="flex-row flex m-auto w-full h-full justify-evenly footer-text-gradient text-lg font-bold items-center max-md:flex-col max-md:gap-1 max-sm:mt-[5px]">
                <p>
                    {langMode ?
                        (<>
                            Gracias por su tiempo !
                        </>) :
                        (<>
                            Thanks for your time !
                        </>)}

                </p>
                <div className="flex flex-row gap-8 items-center max-sm:flex-col max-sm:gap-1 max-sm:mb-[5px]">
                    <span> 
                        {langMode ?
                            (<>
                                Mis datos:
                            </>) :
                            (<>
                                Here you can contact me:
                            </>)}
                    </span>
                    <ul className="flex flex-row gap-8 items-center">
                        <li>
                            <a href="https://github.com/faca1328" target="_blank" >
                                <img src={gitIcon} alt="Git Hub" className="hover:scale-105 hover:shadow-sm hover:shadow-cyan-300 rounded-full" />
                            </a>
                        </li>

                        <li>
                            <p className="font-semibold max-phone:whitespace-normal max-phone:flex-wrap-reverse"> facundoivanmartinez@hotmail.com </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
