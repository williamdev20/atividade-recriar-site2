export default function Resources() {
  return (
    <section className="p-5 pt-10 align-items-center justify-content-center" style={{ minHeight: "100vh", backgroundColor: "#1a1a1a" }}>
      <div className="d-flex flex-row justify-content-between align-items-center">
        <h2 className="text-light" style={{ width: "25%" }}>Recursos para chegar ao público certo</h2>

        <div style={{ width: "40%" }}>
          <p className="text-light">Com as abrangentes ferramentas e análises de marketing, você apresenta seu conteúdo ao público certo e identifica o que está funcionando.</p>
          <button type="button" className="btn btn-transparent border border-white btn-lg text-light" style={{ borderRadius: 0, padding: 26, width: 230 }}>COMECE AGORA</button>
        </div>
      </div>

      <div className="d-flex flex-row justify-content-between align-items-center w-100">
        <div className="d-flex flex-row w-100 gap-4" style={{ width: "47%" }}>
          <div className="position-relative mt-5">
            <img className="d-block w-100 rounded" src="https://media-www.sqspcdn.com/images/pages/flagship/blogs/marketing/metrics-desktop-2500w.webp" alt="" />
            <div className="position-absolute" style={{ top: 24, left: 24 }}>
              <h3 className="text-light">Crie, publique e gerencie conteúdo</h3>
              <p className="text-light w-75">Use o CMS e o painel central integrados para publicar e gerenciar os artigos do blog. Agende as publicações, veja análises de dados e gerencie os colaboradores.</p>
            </div>
          </div>

          <div className="position-relative mt-5">
            <img className="d-block w-100 rounded" src="https://media-www.sqspcdn.com/images/pages/flagship/blogs/marketing/marketing-desktop-2500w.webp" alt="" />
            <div className="position-absolute" style={{ top: 24, left: 24 }}>
              <h3 className="text-light">Fácil categorização e marcação das publicações</h3>
              <p className="text-light w-75">Organize seus artigos para direcionar os visitantes para os tópicos de interesse; ou destaque alguns artigos para facilitar a descoberta deles.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}