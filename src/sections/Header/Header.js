import "./Header.css";
<div id="container">
  <h1>
    <span class="blink-01">Blinking </span>
    <span class="blink-02">Text</span>
  </h1>
</div>;

const Header = () => {
  return (
    // to do more than one element write them inside div or <>
    <div className="navbar bg-light navbar-expand-md fixed-top" id="nav">
      <div className="container">
        <span className="navbar-brand fw-bold text-dark fs-3">Mounir.dev</span>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainmenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="mainmenu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a href="#hero" className="nav-link fw-bold fs-5">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link fw-bold fs-5">
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="#projects" className="nav-link fw-bold fs-5">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link fw-bold fs-5">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
// props we use it to send from biggest components  to a smallest component
//  for example bghuna nketbo header from app js instead of
