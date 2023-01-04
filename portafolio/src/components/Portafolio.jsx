import React from 'react'
import '../components/portafolio.css'
import image from '../components/img/html2.png'
import image2 from '../components/img/css2.png'
import image3 from '../components/img/js2.png'
import Caroulsel from './caroulsel'
import { FaGithub } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
export const Portafolio = () => {
  return (
    <div className='portafolio'>
    <div className='navegacion'>
      <nav className='nav'>
        <ul>
          <li>portafolio</li>
          <li>sobremi</li>
          <li>habilidades</li>
          <li>proyectos</li>
          <li>contactos</li>
        </ul>
      </nav>
    </div>
    <div className='contenedor1'>
      <section className='texto'>
        <h1>Franco Muñoz</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, cupiditate.</p>
      </section>
      <section className='foto'></section>
    </div>
    <section className='picture'></section>

    <div className='sobremi'>
      <h2>HELLO PEOPLE</h2>
      <h4 className='aboutme'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, nobis. Accusantium hic expedita dolorem eos, voluptates illo modi ducimus adipisci labore aperiam, cum consectetur fugit blanditiis porro accusamus ipsa sequi!</h4>
      <div className='habilidades'>
{<Caroulsel/>}
      </div>
    </div>
    <div className='container-pro'>
      <article className='tituloProyecto'>
      <h3>Proyectos</h3>
      </article>
    <div className="container">
        <div className="card">
            <div className="face face1">
                <div className="content">
                    <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/design_128.png?raw=true"/>
                    <h3>Design</h3>
                </div>
            </div>
            <div className="face face2">
                <div className="content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>
                        <a href="#">Read More</a>
                </div>
            </div>
        </div>
        <div className="card">
            <div className="face face1">
                <div className="content">
                    <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/code_128.png?raw=true"/>
                    <h3>Code</h3>
                </div>
            </div>
            <div className="face face2">
                <div className="content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>
                        <a href="#">Read More</a>
                </div>
            </div>
        </div>
        <div className="card">
            <div className="face face1">
                <div className="content">
                    <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/launch_128.png?raw=true"/>
                    <h3>Launch</h3>
                </div>
            </div>
            <div className="face face2">
                <div className="content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>
                        <a href="#">Read More</a>
                </div>
            </div>
        </div>
    </div>
    </div>
    <div className='contactos-pro'>
    <article className='TituloContacto'>
      <h3>contactanos</h3>
      </article>
    <div className='contactos'>
      <article className='img-1'>
      <FaGithub className='ico-1'/>
      </article>
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
