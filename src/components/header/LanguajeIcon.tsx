import { languageStore} from "../../store/languageStore"




export const LanguajeIcon = () => {

  const {language, setLanguage} = languageStore()
  const languageModeES = language === 'es' ? 'bg-black/20 dark:bg-white/20' : '';
  const languageModeEN = language === 'en' ? 'bg-black/20 dark:bg-white/20' : '';


  

  return (
    <div className="rounded-full bg-gray-500 bg-opacity-20 items-center p-[2px] justify-between w-fit flex m-auto dark:bg-white dark:bg-opacity-10 max-md:ml-2 max-phone:ml-5">
        <button className={`p-1 px-2 font-semibold dark:text-amber-100 rounded-full ${languageModeES}`} onClick={()=> setLanguage('es')}>
            es
        </button>
        <button className={`p-1 px-2 font-semibold  dark:text-cyan-100 rounded-full ${languageModeEN}`} onClick={()=> setLanguage('en')} >
            en
        </button>
    </div>
  )
}
