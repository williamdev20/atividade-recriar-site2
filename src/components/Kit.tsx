export default function Kit() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "100dvh",
        paddingTop: "10%",
        overflow: "hidden"
      }}
      className="d-flex flex-column justify-content-center align-items-center"
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: "absolute",
          top: 0, left: 0,
          width: "100%", height: "100%",
          objectFit: "cover",
          zIndex: 0
        }}
      >
        <source src="https://media-www.sqspcdn.com/images/components/blueprint-ai/blueprint-ai.mp4" type="video/mp4" />
      </video>

      <div className="postion-absolute container text-center d-flex flex-column gap-5 align-items-center" style={{ zIndex: 2 }}>
          <h2 className="text-light w-50">Use o Kit de Design com IA para criar um site personalizado em minutos</h2>
        <button type="button" className="btn btn-transparent border btn-lg text-light" style={{ borderRadius: 0, padding: 26, width: 230 }}>COMECE AGORA</button>
      </div>
    </section>
  )
}