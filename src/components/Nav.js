const Nav = ({ links }) => (
  <ul>
    {links.map((link) => (
      <li>
        <a href={link.href} rel="noreferrer" target="_blank">
          {link.name}
        </a>
      </li>
    ))}
  </ul>
);

export default Nav;
