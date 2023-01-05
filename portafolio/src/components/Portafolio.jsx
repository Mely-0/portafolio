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
          <h1>Miguel Salazar</h1>
          <p>Programador de software , 23 años.</p>
        </section>
        <section className="foto"></section>
      </div>
      <section className="picture"></section>

      <div className="sobremi" id="sobremi">
        <h5 className="aboutme">
          Sobre mi
          <hr />
          Persona responsable, dispuesto a cualquier reto que se presente y a
          nuevas actitudes que aprender. Ambicioso con lo que deseo alcanzar,
          luchando por cada uno de mis sueños, no a lo baldragas y soy alguien
          lleno de muchos talentos, bienquisto trabajador y esforzado. Siempre
          actuando con humildad y el deseo de ayudar a quien de mi requiera. Me
          gusta cuantiosamente el cine como un séptimo arte magistral y la
          música de manera ínfula.
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
                <h3>Pagina Anime</h3>
              </div>
            </div>
            <div className="face face2">
              <div className="content">
                <a href="https://comfy-praline-cc6350.netlify.app/">Ver</a>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="face face1">
              <div className="content">
                <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/code_128.png?raw=true" />
                <h3>Pokemon</h3>
              </div>
            </div>
            <div className="face face2">
              <div className="content">
                <a href="https://astounding-moxie-aed4c9.netlify.app/">Ver</a>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="face face1">
              <div className="content">
                <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/launch_128.png?raw=true" />
                <h3>Juego Serpiente</h3>
              </div>
            </div>
            <div className="face face2">
              <div className="content">
                <a href="https://sprightly-manatee-c0427d.netlify.app/">Ver</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contactos-pro" id="contactos-pro">
        <div className="contactos">
          <a href="https://github.com/miguel1015" className="img-1">
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
