import spotyVideo from "../../../utils/videos/Spotify. - Proyect.mp4"
import netflixVideo from "../../../utils/videos/Netflix - Proyect.mp4"
import todoVideo from "../../../utils/videos/To Do - Proyect.mp4"
import shopVideo from "../../../utils/videos/Shoping Cart - Practice.mp4"
import dataVideo from "../../../utils/videos/Data Table - Practice.mp4"
import userVideo from "../../../utils/videos/New User - Practice.mp4"
import cssIcon from "../../../utils/icons8-css.svg"
import tailwindIcon from "../../../utils/icons8-viento-de-cola-css.svg"
import astroIcon from "../../../utils/icons8-astro.svg"
import fireBaseIcon from "../../../utils/icons8-firebase.svg"
import sassIcon from "../../../utils/icons8-hablar-con-descaro-a.svg"
import tsIcon from "../../../utils/icons8-mecanografiado.svg"
import nodeIcon from "../../../utils/icons8-nodo-js.svg"
import viteIcon from "../../../utils/icons8-rápidamente.svg"
import reactIcon from "../../../utils/icons8-reaccionar.svg"
import reduxIcon from "../../../utils/icons8-redux.svg"
import { languageStore } from "../../store/languageStore"
import { Icons } from "./Icons"
import { useState } from "react"

export const Projects = ({ id = "projects" }) => {
  const [portfolio, setPortfolio] = useState(true)
  const pTrue = portfolio ? 'bg-black/30' : '';
  const pFalse = portfolio ? '' : 'bg-black/30';

  const { language } = languageStore((state: string) => state)
  const langMode = language === "es" ? true : false;

  return (
    <div className="flex w-screen bg-zinc-800 text-white flex-col h-full items-center pt-10 " id={id}>
      <div className="rounded-full bg-gray-500 bg-opacity-20 items-center p-[2px] justify-between w-fit flex m-auto">
        <button className={`p-1 px-2 font-semibold text-amber-100 rounded-full cursor-pointer z-20 ${pTrue} transition-all duration-700`} onClick={() => setPortfolio(true)}>
          {langMode ?
            (<>
              Proyectos
            </>) :
            (<>
              Projects
            </>)
          }
        </button>
        <button className={`p-1 px-2 font-semibold  text-cyan-100 rounded-full ml-2 cursor-pointer z-20 ${pFalse} transition-all duration-700`} onClick={() => setPortfolio(false)}>
          {langMode ?
            (<>
              Practicas
            </>) :
            (<>
              Practice
            </>)
          }
        </button>
      </div>

      <div className={`${portfolio ? 'transition-left-enter' : 'transition-right-enter'} inline-flex justify-center`}>
        {portfolio ? (

          <div className="inline-flex bg-zinc-700/30 px-5 rounded-xl my-10 gap-10 flex-wrap max-w-[85%] items-center pb-5 justify-evenly">
            <div className="w-[30rem]  mt-5 bg-black/30 rounded-lg shadow-md p-1 flex flex-col items-center hover:scale-105 hover:shadow-2xl hover:shadow-orange-400/50 max-phone:w-fit"
              onMouseEnter={() => video1?.play()}
              onMouseLeave={() => video1?.pause()}
            >
              <video src={spotyVideo} className="w-full h-auto rounded-md mb-4 max-phone:w-[85%]" muted id="video1" loop></video>
              <div className="text-center text-amber-50 font-medium">
                <p>
                  {langMode ?
                    (<>
                      Este es un clon básico de Spotify. El objetivo principal es la <span className="underline text-orange-200">modificación de la etiqueta 'audio' desde cualquier parte de la web. </span>Además, me concentro en un diseño simple, con transiciones suaves y la armonía entre los elementos con colores básicos.
                    </>) :
                    (<>
                      This is a basic clone of Spotify Web. Here, the main objective is the <span className="underline text-orange-200">modification of the 'audio' tag from any part of the web. </span>Also, I concentrate on a simple design with soft transitions and the harmony between the elements with basic colours.
                    </>)
                  }
                </p>
              </div>
              <div className="flex flex-wrap justify-center mt-4 text-black items-center w-full gap-5 mb-2 border-t ">
                <div className="flex flex-row gap-5 pt-3 items-center max-phone:gap-2">
                  <Icons icon={reactIcon} name={'React'} />
                  <Icons icon={tsIcon} name={'TS'} />
                  <Icons icon={tailwindIcon} name={'Tailwind'} />
                  <Icons icon={astroIcon} name={'Astro'} />
                  <Icons icon={nodeIcon} name={'NodeJs'} />

                  <a className="text-amber-50 font-semibold rounded-lg bg-white/10 p-1 hover:scale-105 hover:bg-white/20 hover:text-amber-400 h-8 cursor-pointer warp" href="https://github.com/faca1328/Spoty-proyect-4" target="_blank" >
                    {langMode ?
                      (<>
                        Ir al codigo
                      </>) :
                      (<>
                        Get Code
                      </>)
                    }
                  </a>
                </div>
              </div>
            </div>

            <div className="w-[30rem]  mt-5 bg-black/30 rounded-lg shadow-md p-1 flex flex-col items-center hover:scale-105 hover:shadow-2xl hover:shadow-orange-400/50 max-phone:w-fit"
              onMouseEnter={() => video2?.play()}
              onMouseLeave={() => video2?.pause()}
            >
              <video src={netflixVideo} className="w-full h-auto rounded-md mb-4 max-phone:w-[85%]" muted id="video2" loop></video>
              <div className="text-center text-amber-50 font-medium">
                <p>
                  {langMode ?
                    (<>
                      Este es un clon de la web de Netflix. En este proyecto me concentro principalmente en la combinación de todos los elementos que ofrece el sitio web original de Netflix, <span className="underline text-orange-200">como el registro de usuario, el inicio de sesión, el reproductor de películas y las solicitudes a una API</span>, entre otros.
                    </>) :
                    (<>
                      This is a clone of the Netflix Web. Here, I concentrate mostly on the combination of all the elements that the original website of Netflix offers, <span className="underline text-orange-200">such as user registration, log-in, the movie player, and requests to an API, </span>among others.
                    </>)
                  }
                </p>
              </div>
              <div className="flex flex-wrap justify-center mt-4 text-black items-center w-full gap-5 mb-2 border-t ">
                <div className="flex flex-row gap-5 pt-3 items-center max-phone:gap-2">
                  <Icons icon={reactIcon} name={'React'} />
                  <Icons icon={tsIcon} name={'TS'} />
                  <Icons icon={tailwindIcon} name={'Tailwind'} />
                  <Icons icon={fireBaseIcon} name={'FireBase'} />
                  <Icons icon={viteIcon} name={'Vite'} />

                  <a className="text-amber-50 font-semibold rounded-lg bg-white/10 p-1 hover:scale-105 hover:bg-white/20 hover:text-amber-400 h-8 cursor-pointer" target="_blank" href="https://github.com/faca1328/Ntf-clon-proyect3">
                    {langMode ?
                      (<>
                        Ir al codigo
                      </>) :
                      (<>
                        Get Code
                      </>)
                    }
                  </a>
                </div>
              </div>
            </div>

            <div className="w-[30rem]  mt-5 bg-black/30 rounded-lg shadow-md p-1 flex flex-col items-center hover:scale-105 hover:shadow-2xl hover:shadow-orange-400/50 max-phone:w-fit"
              onMouseEnter={() => video3?.play()}
              onMouseLeave={() => video3?.pause()}
            >
              <video src={todoVideo} className="w-full h-auto rounded-md mb-4 max-phone:w-[85%]" muted id="video3" loop></video>
              <div className="text-center text-amber-50 font-medium">
                <p>
                  {langMode ?
                    (<>
                      En esta lista de tareas pendientes, integro un estilo CSS y animaciones básico de forma precisa con todo el conocimiento adquirido en mis prácticas de React, JS y TS como <span className="underline text-orange-200">el uso de constantes, .filter, .map, arrays y gestión de objetos.</span>
                    </>) :
                    (<>
                      In this to-do list, I integrate a basic but correct CSS style and animations with all the knowledge that I've acquired from my practices in React, JS, and TS like the <span className="underline text-orange-200">use of constants, .filter, .map and arrays and object management.</span>
                    </>)
                  }
                </p>
              </div>
              <div className="flex flex-wrap justify-center mt-4 text-black items-center w-full gap-5 mb-2 border-t ">
                <div className="flex flex-row gap-5 pt-3 items-center max-phone:gap-2">
                  <Icons icon={reactIcon} name={'React'} />
                  <Icons icon={viteIcon} name={'Vite'} />
                  <Icons icon={cssIcon} name={'CSS'} />
                  <Icons icon={tsIcon} name={'TS'} />

                  <a className="text-amber-50 font-semibold rounded-lg bg-white/10 p-1 hover:scale-105 hover:bg-white/20 hover:text-amber-400 h-8 cursor-pointer" target="_blank" href="https://github.com/faca1328/To-Do-List-ReactTS" >
                    {langMode ?
                      (<>
                        Ir al codigo
                      </>) :
                      (<>
                        Get Code
                      </>)
                    }
                  </a>
                </div>
              </div>
            </div>

          </div>
        ) :
          (

            <div className="inline-flex bg-zinc-700/30 px-5 rounded-xl my-10 gap-10 flex-wrap max-w-[85%] items-center pb-5 justify-evenly">
              <div className="w-[30rem]  mt-5 bg-black/30 rounded-lg shadow-md p-1 flex flex-col items-center hover:scale-105 hover:shadow-2xl hover:shadow-cyan-400/50 max-phone:w-fit"
                onMouseEnter={() => video4?.play()}
                onMouseLeave={() => video4?.pause()}
              >
                <video src={shopVideo} className="w-full h-auto rounded-md mb-4 max-phone:w-[85%]" muted id="video4" loop></video>
                <div className="text-center text-cyan-50 font-medium ">
                  <p>
                    {langMode ?
                      (<>
                        En esta práctica de un Carrito de Compras, utilizando el diseño del sitio web de Amazon, aprendí a usar <span className="underline text-cyan-200">'React Router Dom', el uso de un 'Proveedor de contexto' para conservar información en todas las páginas, y practiqué mis estilos CSS y el hook useEffect.</span>
                      </>) :
                      (<>
                        In this cart practice, using the design of the Amazon website, I learned to use <span className="underline text-cyan-200">'React Router Dom', the use of a 'Context Provider' to persist information along all the pages, and practice my CSS styles and the useEffect hook.</span>
                      </>)
                    }
                  </p>
                </div>
                <div className="flex flex-wrap justify-center mt-4 text-black items-center w-full gap-5 mb-2 border-t ">
                  <div className="flex flex-row gap-5 pt-3 items-center max-phone:gap-2">
                    <Icons icon={reactIcon} name={'React'} />
                    <Icons icon={sassIcon} name={'Sass'} />
                    <Icons icon={viteIcon} name={'Vite'} />
                    <Icons icon={nodeIcon} name={'NodeJs'} />

                    <a className="text-cyan-50 font-semibold rounded-lg bg-white/10 p-1 hover:scale-105 hover:bg-white/20 hover:text-cyan-400 h-8 cursor-pointer" target="_blank" href="https://github.com/faca1328/Nuevo-Proyecto-React-Cart">
                      {langMode ?
                        (<>
                          Ir al codigo
                        </>) :
                        (<>
                          Get Code
                        </>)
                      }
                    </a>
                  </div>
                </div>
              </div>

              <div className="w-[30rem]  mt-5 bg-black/30 rounded-lg shadow-md p-1 flex flex-col items-center hover:scale-105 hover:shadow-2xl hover:shadow-cyan-400/50 max-phone:w-fit"
                onMouseEnter={() => video5?.play()}
                onMouseLeave={() => video5?.pause()}
              >
                <video src={dataVideo} className="w-full h-auto rounded-md mb-4 max-phone:w-[85%]" muted id="video5" loop></video>
                <div className="text-center text-cyan-50 font-medium">
                  <p>
                  {langMode ?
                        (<>
                          En esta tabla de datos, me concentro en aprender el uso de dos de las habilidades más importantes para mí en los próximos proyectos: <span className="underline text-cyan-200">el uso de Redux Toolkit y las bibliotecas.</span> Aquí los datos se pueden filtrar y ordenar de diversas formas.
                        </>) :
                        (<>
                         In this data table, I concentrate on learning the use of two of the most important skills for me in the projects to come: <span className="underline text-cyan-200">the use of the Redux Toolkit and libraries.</span> The data can be filtered and ordered in a variety of ways here.
                        </>)
                      }
                  </p>
                </div>
                <div className="flex flex-wrap justify-center mt-4 text-black items-center w-full gap-5 mb-2 border-t ">
                  <div className="flex flex-row gap-5 pt-3 items-center max-phone:gap-2">
                    <Icons icon={reactIcon} name={'React'} />
                    <Icons icon={viteIcon} name={'Vite'} />
                    <Icons icon={tsIcon} name={'TS'} />
                    <Icons icon={tailwindIcon} name={'Tailwind'} />
                    <Icons icon={reduxIcon} name={'Redux'} />

                    <a className="text-cyan-50 font-semibold rounded-lg bg-white/10 p-1 hover:scale-105 hover:bg-white/20 hover:text-cyan-400 h-8 cursor-pointer" target="_blank" href="https://github.com/faca1328/dataTable-Proyect-2">
                      {langMode ?
                        (<>
                          Ir al codigo
                        </>) :
                        (<>
                          Get Code
                        </>)
                      }
                    </a>
                  </div>
                </div>
              </div>

              <div className="w-[30rem]  mt-5 bg-black/30 rounded-lg shadow-md p-1 flex flex-col items-center hover:scale-105 hover:shadow-2xl hover:shadow-cyan-400/50 max-phone:w-fit"
                onMouseEnter={() => video6?.play()}
                onMouseLeave={() => video6?.pause()}
              >
                <video src={userVideo} className="w-full h-auto rounded-md mb-4 max-phone:w-[85%]" muted id="video6" loop></video>
                <div className="text-center text-cyan-50 font-medium">
                  <p>
                  {langMode ?
                        (<>
                          Esta es una de mis primeras prácticas, donde me concentro en <span className="underline text-cyan-200">integrar todos mis conocimientos de Js con React y Ts,</span> con las famosas funciones CRUD para listar nuevos usuarios. Además, aprendí a crear hooks personalizados.
                        </>) :
                        (<>
                          This is one of my first practices, where I concentrate heavily on <span className="underline text-cyan-200">integrating all my knowledge of Js in React and Ts,</span> all together with the famous CRUD functions for listing new users. Additionally, I learned how to create a custom hooks.
                        </>)
                      }
                  </p>
                </div>
                <div className="flex flex-wrap justify-center mt-4 text-black items-center w-full gap-5 mb-2 border-t ">
                  <div className="flex flex-row gap-5 pt-3 items-center max-phone:gap-2">
                    <Icons icon={reactIcon} name={'React'} />
                    <Icons icon={tsIcon} name={'TS'} />
                    <Icons icon={reduxIcon} name={'Redux'} />
                    <Icons icon={viteIcon} name={'Vite'} />

                    <a className="text-cyan-50 font-semibold rounded-lg bg-white/10 p-1 hover:scale-105 hover:bg-white/20 hover:text-cyan-400 h-8 cursor-pointer" target="_blank" href="https://github.com/faca1328/Crud-Redux-practica4">
                      {langMode ?
                        (<>
                          Ir al codigo
                        </>) :
                        (<>
                          Get Code
                        </>)
                      }
                    </a>
                  </div>
                </div>
              </div>

            </div>
          )}
      </div>
    </div>
  )
}
