import image from '../components/img/html2.png'
import image2 from '../components/img/css2.png'
function Carousel () {
  return (
    <div id="carouselExampleIndicators" class="carousel slide">
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div id="cont-habi" class="carousel-inner">
        <div id="habi1" class="carousel-item active">
          <p>CSS</p>
          <img src={image2} class="d-block w-100" alt="..." id="css" />
        </div>
        <div id="habi2" class="carousel-item">
          <p>HTML</p>
          <img src={image} class="d-block w-100" alt="..." id="html" />
        </div>
      </div>
      <button
        class="carousel-control-prev text-light"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span
          class="carousel-control-prev-icon"
          aria-hidden="true"
          id="click"
        ></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span
          class="carousel-control-next-icon"
          aria-hidden="true"
          id="click2"
        ></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel