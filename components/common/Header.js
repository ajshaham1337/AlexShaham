import Link from "next/link";
import { routes } from "/data/routes";

function Header() {
  return (
    <div className="navbar-bot-padding">
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark fixed-top">
        <div className="container-fluid width-adjuster">
          <div className="navbar-brand fs-4 mb-1">Alexander Shaham</div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto">
              {routes.map(({ name, link }, i) => (
                <li className="nav-item" key={i}>
                  <Link href={link} className="nav-link fs-5">
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
