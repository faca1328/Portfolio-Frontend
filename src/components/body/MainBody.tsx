import { Projects } from "./Projects"
import cssIcon from "../../../utils/icons8-css.svg"
import tailwindIcon from "../../../utils/icons8-viento-de-cola-css.svg"
import astroIcon from "../../../utils/icons8-astro.svg"
import fireBaseIcon from "../../../utils/icons8-firebase.svg"
import sassIcon from "../../../utils/icons8-hablar-con-descaro-a.svg"
import mySqlIcon from "../../../utils/icons8-logo-de-mysql.svg"
import tsIcon from "../../../utils/icons8-mecanografiado.svg"
import nodeIcon from "../../../utils/icons8-nodo-js.svg"
import viteIcon from "../../../utils/icons8-rápidamente.svg"
import reactIcon from "../../../utils/icons8-reaccionar.svg"
import bgImg from "../../../utils/bgimg.jfif"
import reduxImg from "../../../utils/icons8-redux.svg"
import arrowImg from "../../../utils/icons8-arriba-círculo-48.png"
import { Icons } from "./Icons"
import { useEffect, useState } from "react"
import { languageStore } from "../../store/languageStore"


export const MainBody = () => {
  const { language } = languageStore((state: string) => state)
  const langMode = language === "es" ? true : false;

  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const screenHeight = window.innerHeight;
      const fiftyPercent = screenHeight * 0.5;

      if (scrolled > fiftyPercent) {
        setShowArrow(true);
      } else {
        setShowArrow(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };


  return (
    <>
      <div className="flex w-screen relative h-[35rem] min-h-fit">
        <div className="bg-white/80 flex-1 dark:bg-zinc-700 relative max-phone:h-full">
          <div className="w-[50%] h-full absolute top-[20%] ml-16 max-md:w-[85%] max-sm:top-[10%] max-phone:top-4 max-phone:-left-6 max-phone:text-center">
            <h1 className="   dark:text-orange-100/80 text-4xl max-phone:text-2xl ">
              {langMode ?
                (<>
                  Hola! mi nombre es <br /><span className="font-serif text-5xl font-semibold dark:text-orange-400/70 max-phone:text-4xl">Facundo Martinez</span><br /> y soy <span className="logo-gradient-dark font-medium text-[2.5rem]">Front-End</span> Web Developer
                </>)
                :
                (<>
                  Hi , my name is <br /><span className="font-serif text-5xl font-semibold dark:text-orange-400/70 max-phone:text-2xl">Facundo Martinez</span><br /> and I am a  <span className="logo-gradient-dark font-medium text-[2.5rem] max-phone:text-2xl ">Front-End</span> Web Developer
                </>)
              }
            </h1>
            <p className="dark:text-orange-100/80 text-xl mt-6">
              {langMode ?
                (<>
                  Mi principal objetivo es crecer y desarrollarme en un campo que ofrezca continuos desafíos y aprendizaje constante. <br/><span className="dark:text-orange-300/75 underline">
                    Soy una persona creativa, apasionada por el desarrollo web, a la que le encanta crear y resolver problemas.
                  </span> <br/>Además, soy confiable y trabajador, y busco mostrar mis ideas y capacidades de manera eficiente y útil.
                </>) :
                (<>
                  My main objective is to grow and develop in a field that offers continuous challenges and constant learning. <span className="dark:text-orange-300/75 underline">
                    I am a creative person passionate about web development who loves to create new things and solve problems.
                  </span> Additionally, I am trustworthy and hardworking, and I aim to show my ideas and capabilities in an efficient and useful manner.
                </>)
              }
            </p>
          </div>
        </div>

        <div className=" rounded-l-[30%] absolute w-[40%] z-50 right-0 h-full items-center font-serif max-md:hidden">
          <div className="h-full w-full bg-cover bg-no-repeat rounded-l-[30%] " style={{ backgroundImage: `url(${bgImg})` }}>
            <div className="w-[75%] h-full absolute top-[21%] ml-16 text-center items-center">
              <div >
                <h1 className=" text-4xl py-1 font-bold bg-cyan-100/30 rounded-xl">
                {langMode ?
                (<>
                  Mis tecnologías con más experiencia:
                </>) :
                (<>                  
                  My main skills are:
                </>)}
                </h1>
                <div className="flex justify-between w-[75%] mx-auto mt-5 bg-black/40 p-1 rounded-xl">
                  <Icons icon={reactIcon} name={'React'} />
                  <Icons icon={viteIcon} name={'Vite'} />
                  <Icons icon={tsIcon} name={'TS'} />
                  <Icons icon={tailwindIcon} name={'Tailwind'} />
                  <Icons icon={reduxImg} name={'Redux Toolkit'} />
                </div>
              </div>
              <div className="mt-10 items-center ">
                <p className="text-2xl mt-14 py-1 font-bold bg-cyan-100/30 rounded-xl">
                {langMode ?
                (<>
                  También soy competente con:
                </>) :
                (<>                  
                  Additionally, I am proficient with:
                </>)}
                </p>
                <div className="flex items-center mt-5 justify-between bg-black/40 p-1 rounded-xl">
                  <Icons icon={cssIcon} name={'CSS'} />
                  <Icons icon={sassIcon} name={'Sass'} />

                  <Icons icon={fireBaseIcon} name={'FireBase'} />
                  <Icons icon={mySqlIcon} name={'MySql'} />

                  <Icons icon={astroIcon} name={'Astro'} />
                  <Icons icon={nodeIcon} name={'NodeJs'} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Projects id="projects"/>

      {showArrow && (
        <div className={`fixed right-0 bottom-0 z-50 m-5 transition-all duration-300 animate-bounce-arrow`}>
          <button onClick={scrollToTop}>
            <img src={arrowImg} alt="Arrow" />
          </button>
        </div>
      )}

    </>
  )
}
