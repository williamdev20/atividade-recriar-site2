export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-transparent fixed-top px-3">
      <div className="container-fluid">
        <div className="d-flex w-33" style={{ flex: 1 }}>
          <a className="navbar-brand d-flex align-items-center gap-2 text-light" href="#">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT-zMjkHewdsdz0ReL8OdkSOSjd4L1IXk02A&s" alt="Logo" width="30" height="24" />
            SQUARESPACE
          </a>
        </div>

        <ul className="navbar-nav d-flex flex-row gap-4 justify-content-center" style={{ flex: 1 }}>
          <li className="nav-item">
            <a className="nav-link text-light" href="#">PRODUTOS</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-light" href="#">SOLUÇÕES</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-light" href="#">RECURSOS</a>
          </li>
        </ul>

        <div className="d-flex gap-2 justify-content-end" style={{ flex: 1 }}>
          <button type="button" className="btn btn-transparent text-light">FAZER LOGIN</button>
          <button type="button" className="btn btn-light py-4" style={{ borderRadius: 0, width: 180 }}>COMECE AGORA</button>
        </div>
      </div>
    </nav>
  )
}