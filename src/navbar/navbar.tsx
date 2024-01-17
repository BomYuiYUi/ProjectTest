import './navbar.css'

function NarBar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-white py-1">
    <div className="container">
        <a className="navbar-brand order-lg-0" href="">
        <img src="https://cdn.discordapp.com/attachments/393372952357371914/1073905263368736769/Yuiyui.png" alt="" width="75" height="75"/>
        </a>
        <div className="d-flex ms-auto order-lg-2">
          {/* <a className="nav-link f text-dark"><i className="bi bi-cart"></i></a>
          <a className="nav-link f text-dark"><i className="bi bi-person"></i></a> */}
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
          <div className="collapse navbar-collapse order-lg-1" id="navbarNavDropdown">
            <ul className="navbar-nav mx-auto text-center">
              <li className="nav-item px-2 py-1">
                <a className="nav-link text-dark">HOME</a>
              </li>
              <li className="nav-item px-2 py-1 border-0">
                <a className="nav-link text-dark">EX</a>
              </li>
            </ul>
          </div>
        </div>
    </nav>
    </>
  )
}

export default NarBar