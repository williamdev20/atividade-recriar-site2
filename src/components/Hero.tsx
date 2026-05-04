import video from "../assets/video.mp4";

export default function Hero() {
  return (
    <section
      style={{
        backgroundImage: "url('https://media-www.sqspcdn.com/images/pages/flagship/blogs/hero/hero-background-mobile-500w.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
        minHeight: "130dvh",
        paddingTop: "10%"
      }}
      className="d-flex flex-column justify-content-center align-items-center"
    >
      <div className="container text-center d-flex flex-column gap-5 align-items-center">
        <div>
          <p className="text-light">Plataforma de blogs</p>
          <h1 className="text-light">Crie um blog de destaque</h1>
        </div>

        <button type="button" className="btn btn-light btn-lg" style={{ borderRadius: 0, padding: 26, width: 230 }}>COMECE AGORA</button>

        <div className="justify-content-center align-items-center d-flex flex-row gap-3 bg-dark rounded-pill">
          <button type="button" className="btn btn-transparent btn-lg text-light" style={{ borderRadius: 0, padding: 22 }}>Templates</button>
          <button type="button" className="btn btn-transparent btn-lg text-light" style={{ borderRadius: 0, padding: 22 }}>Recursos</button>
          <button type="button" className="btn btn-transparent btn-lg text-light" style={{ borderRadius: 0, padding: 22 }}>Marketing</button>
          <button type="button" className="btn btn-transparent btn-lg text-light" style={{ borderRadius: 0, padding: 22 }}>Monetização</button>
        </div>

        <video
          autoPlay
          muted
          loop
          playsInline
          controls
          style={{
            minWidth: "80%",
            maxWidth: "100%",
            maxHeight: "60%",
            borderRadius: 8,
            objectFit: "cover",
            display: "block",
            margin: "0 auto",
            marginBottom: 100
          }}
        >
          <source src={video} type="video/mp4" />
        </video>
      </div>
    </section>
  )
}