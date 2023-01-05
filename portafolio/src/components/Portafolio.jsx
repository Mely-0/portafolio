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
        <h1>Melany Martinez</h1>
        <p>Programador de software , 17 años.</p>
      </section>
      <section className='foto'></section>
    </div>
    <section className='picture'></section>

    <div className='sobremi' id='sobremi'>

      <h5 className='aboutme'>
        Sobre mi 
        <hr />
        Actualmente soy estudiante de inglés, soy una persona alegre, disciplinada, respetuosa con mis compañeros de trabajo y dispuesta a aprender y fortalecer mis conocimientos.</h5>
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
                    <h3>Lista de Tareas</h3>
                </div>
            </div>
            <div className="face face2">
                <div className="content">
                <a href="https://helpful-jalebi-9aae0a.netlify.app"> Ver</a>
                </div>
            </div>
        </div>
        <div className="card">
            <div className="face face1">
                <div className="content">
                    <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/code_128.png?raw=true"/>
                    <h3>Api perros</h3>
                </div>
            </div>
            <div className="face face2">
                <div className="content">
                        <a href="https://funny-ganache-3db3ff.netlify.app">Ver</a>
                </div>
            </div>
        </div>
        <div className="card">
            <div className="face face1">
                <div className="content">
                    <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/launch_128.png?raw=true"/>
                    <h3>Hoja de vida </h3>
                </div>
            </div>
            <div className="face face2">
                <div className="content">
                  <a href="https://starlit-salamander-1ae194.netlify.app">ver</a>
                </div>
            </div>
        </div>
    </div>
    </div>
    <div className='contactos-pro' id='contactos-pro'>
    <div className='contactos'>
        <a href="https://github.com/Mely-0" className='img-1'>
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
