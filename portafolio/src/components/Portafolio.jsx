import React from 'react'
import '../components/portafolio.css'
import Caroulsel from './caroulsel'
import { FaGithub } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
export const Portafolio = () => {

  return (
    <div className="portafolio">
      <nav id="navbar-example2" class="navbar bg-body-tertiary">
        <ul class="nav nav-pills">
          <li class="nav-item">
            <a class="nav-link" href="#contenedor1">
              Portafolio
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#sobremi">
              Sobremi
            </a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              href="#"
              role="button"
              aria-expanded="false"
            >
              Menu
            </a>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="#habilidades">
                  Habilidades
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#container-pro">
                  Proyectos
                </a>
              </li>
              <li>
                <hr class="dropdown-divider" />
              </li>
              <li>
                <a class="dropdown-item" href="#contactos-pro">
                  Contactos
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <div className="contenedor1" id="contenedor1">
        <section className="texto">
          <h1>Lorainne Navarro</h1>
          <p>Programador de software , 18 años.</p>
        </section>
        <section className="foto"></section>
      </div>
      <section className="picture"></section>

      <div className="sobremi" id="sobremi">
        <h5 className="aboutme">
          Sobre mi
          <hr />
          Mi nombre es Lorainne tengo 18 años, actualmente estudio sistemas e
          ingles, soy una persona alegre a la cual le gusta aprender cosas
          nuevas cada dia y no darce por vencida.
        </h5>
        <div className="habilidades" id="habilidades">
          {<Caroulsel />}
        </div>
      </div>
      <div className="container-pro" id="container-pro">
        <article className="tituloProyecto">
          <h3>Proyectos</h3>
        </article>
        <div className="container">
          <div className="card">
            <div className="face face1">
              <div className="content">
                <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/design_128.png?raw=true" />
                <h3>Galeria hezagonal</h3>
              </div>
            </div>
            <div className="face face2">
              <div className="content">
                <a href="https://galeriahexagonal.netlify.app/">Ver</a>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="face face1">
              <div className="content">
                <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/code_128.png?raw=true" />
                <h3>Lista de tareas</h3>
              </div>
            </div>
            <div className="face face2">
              <div className="content">
                <a href="https://tacklist.netlify.app/">Ver</a>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="face face1">
              <div className="content">
                <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/launch_128.png?raw=true" />
                <h3>Login</h3>
              </div>
            </div>
            <div className="face face2">
              <div className="content">
                <a href="https://singular-puppy-59d056.netlify.app/">Ver</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contactos-pro" id="contactos-pro">
        <div className="contactos">
          <a href="https://github.com/Lorainnenava" className="img-1">
            <article>
              <FaGithub className="ico-1" />
            </article>
          </a>
          <a href="https://es-la.facebook.com/" className="img-2">
            <article>
              <FaFacebookSquare className="ico-2" />
            </article>
          </a>
          <a
            href="https://www.google.com/intl/es-419/gmail/about/"
            className="img-3"
          >
            <article>
              <HiMail className="ico-3" />
            </article>
          </a>
        </div>
      </div>
    </div>
  );
}
