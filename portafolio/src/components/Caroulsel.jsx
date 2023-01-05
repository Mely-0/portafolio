import image3 from '../components/img/js2.png'
import image from '../components/img/html2.png'
import image2 from '../components/img/css2.png'
import image6 from '../components/img/node-js.png'
import image5 from '../components/img/php.png'
import image4 from '../components/img/react2.png'
import image7 from '../components/img/python.png'

function Carousel () {
  return(
      <div id="carouselExampleIndicators" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>

  </div>
  <div id='cont-habi' class="carousel-inner">
    <div id='habi1' class="carousel-item active" >
      <p>JAVA SCRIPT</p>
      <img src={image3} class="d-block w-100" alt="..." id='js'/>
    </div>
    {/* <div id='habi2' class="carousel-item">
      <p>PHP</p>
      <img src={image5} class="d-block w-100" alt="..." id='css'/>
    </div> */}
    <div id='habi3' class="carousel-item">
      <p>HTML</p>
      <img src={image} class="d-block w-100" alt="..." id='html'/>
    </div>

    <div id='habi4' class="carousel-item">
      <p>REACT</p>
      <img src={image4} class="d-block w-100" alt="..." id='html'/>
      </div>
      <div id='habi5' class="carousel-item">
      <p>NODE JS</p>
      <img src={image6} class="d-block w-100" alt="..." id='html'/>
    </div> 
    <div id='habi6' class="carousel-item">
      <p>CSS</p>
      <img src={image2} class="d-block w-100" alt="..." id='html'/>
    </div>
    <div id='habi7' class="carousel-item">
      <p>PYTHON</p>
      <img src={image7} class="d-block w-100" alt="..." id='html'/>
    </div>
  </div>
  <button class="carousel-control-prev text-light" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true" id='click'></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true" id='click'></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

  )
}

export default Carousel