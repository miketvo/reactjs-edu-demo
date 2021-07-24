import useOnline from "../hooks/useOnline";

const Nav = ({ links }) => {
  const online = useOnline();

  return (
    <div className="navbar navbar-expand-lg navbar-dark bg-dark position-fixed top-0">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 container-fluid justify-content-center">
        {links.map((link, index) => (
          <li key={index} className="nav-item">
            <a
              className="nav-link"
              href={link.href}
              rel="noreferrer"
              target="_blank"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>

      <div className="container">
        {online ? (
          <div className="alert alert-success mb-0">Online</div>
        ) : (
          <div className="alert alert-danger mb-0">Offline</div>
        )}
      </div>
    </div>
  );
};

export default Nav;
