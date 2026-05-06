import video from "../assets/video.mp4";

export default function Avaliation() {
  return (
    <section className="d-flex flex-column justify-content-center align-items-center pt-5" style={{ backgroundColor: "#1c1c1c", minHeight: "100dvh" }}>
      <div className="container text-center d-flex flex-column gap-5 align-items-center">
        <div>
          <h2 className="text-light">Faça a avaliação gratuita de um site</h2>
          <p className="text-light">Não é necessário cartão de crédito. Cancele a qualquer momento.</p>
        </div>

        <button type="button" className="btn btn-light btn-lg" style={{ borderRadius: 0, padding: 26, width: 230 }}>COMECE AGORA</button>

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