export default function Templates() {
  return (
    <section className="d-flex flex-column justify-content-center align-items-center  p-5">
      <div className="container text-center d-flex flex-column gap-5 align-items-center">
        <div className="d-flex flex-row justify-content-between align-items-center w-100 p-5">
          <h2>Comece com um template de blog</h2>
          <button type="button" className="btn btn-light btn-lg border border-dark" style={{ borderRadius: 0, padding: 26, width: 240 }}>CRIE O SEU COM IA</button>
        </div>
      </div>

      <div id="carouselExampleIndicators" className="carousel slide ">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://www.uemg.br/images/cursos/moda.jpg" className="d-block w-40" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src="https://www.uemg.br/images/cursos/moda.jpg" className="d-block w-40" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src="https://www.uemg.br/images/cursos/moda.jpg" className="d-block w-40" alt="..."/>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

    </section>
  )
}