import React from 'react'
import '../components/portafolio.css'
import Caroulsel from './caroulsel'
import { FaGithub } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
export const Portafolio = () => {

  return (
    
    <div className='portafolio'>
      <nav id="navbar-example2" class="navbar bg-body-tertiary">
  <ul class="nav nav-pills">
    <li class="nav-item">
      <a class="nav-link" href="#contenedor1">Portafolio</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#sobremi">Sobremi</a>
    </li>
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Menu</a>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#habilidades">Habilidades</a></li>
        <li><a class="dropdown-item" href="#container-pro">Proyectos</a></li>
        <li><hr class="dropdown-divider"/></li>
        <li><a class="dropdown-item" href="#contactos-pro">Contactos</a></li>
      </ul>
    </li>
  </ul>
</nav>
    <div className='contenedor1' id='contenedor1'>
      <section className='texto'>
        <h1>Franco Muñoz</h1>
        <p>Programador de software , 18 años.</p>
      </section>
      <section className='foto'></section>
    </div>
    <section className='picture'></section>

    <div className='sobremi' id='sobremi'>

      <h5 className='aboutme'>
        Sobre mi 
        <hr />
        Soy una persona organizada y proactiva, me gusta los
      desafíos más difíciles y participar en nuevos proyectos,
además de aportar todos los conocimientos que he
adquirido en mi formación académica. Tengo capacidad
para trabajar en equipo e impulsar valores que marquen
a las personas como el del compañerismo y la amistad.
Me considero un profesional dinámico y con grandes
capacidades de adaptación a nuevas funciones. Como
estudiante en curso, tengo muchas ganas de ejercer mi
profesión y aprender constantemente cosas nuevas.</h5>
      <div className='habilidades' id='habilidades'>
{<Caroulsel/>}
      </div>
    </div>
    <div className='container-pro' id='container-pro'>
      <article className='tituloProyecto'>
      <h3>Proyectos</h3>
      </article>
    <div className="container">
        <div className="card">
            <div className="face face1">
                <div className="content">
                    <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/design_128.png?raw=true"/>
                    <h3>Lista de tareas</h3>
                </div>
            </div>
            <div className="face face2">
                <div className="content">
                <a href=" https://incandescent-frangipane-448ff1.netlify.app/"> Ver</a>
                </div>
            </div>
        </div>
        <div className="card">
            <div className="face face1">
                <div className="content">
                    <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/code_128.png?raw=true"/>
                    <h3>Hoja de vida</h3>
                </div>
            </div>
            <div className="face face2">
                <div className="content">
                        <a href="https://lighthearted-cajeta-25981f.netlify.app/">ver</a>
                </div>
            </div>
        </div>
        <div className="card">
            <div className="face face1">
                <div className="content">
                    <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/launch_128.png?raw=true"/>
                    <h3>Proyecto con chakra ui</h3>
                </div>
            </div>
            <div className="face face2">
                <div className="content">
                  <a href=" https://comfy-elf-152548.netlify.app/">ver</a>
                </div>
            </div>
        </div>
    </div>
    </div>
    <div className='contactos-pro' id='contactos-pro'>
    <div className='contactos'>
        <a href="https://github.com/PROYECTO-X2022-02" className='img-1'>
      <article >
      <FaGithub className='ico-1'/>
      </article>
      </a>
      <article className='img-2'>
        <FaFacebookSquare className='ico-2'/>
      </article>
      <article className='img-3'>
        <HiMail className='ico-3'/>
      </article>
    </div>
    </div>
  </div>
  )
}
