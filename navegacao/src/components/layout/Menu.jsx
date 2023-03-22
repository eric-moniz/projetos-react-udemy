import "./Menu.css";

import React from "react";
import { Link } from "react-router-dom";

const Menu = props => {
  return (
    <aside className="Menu">
      <nav>
        <ul>
          <li>
            <Link to="/">Início</Link>
          </li>
          <li>
            <Link to="/param/Olá">Param #01</Link>
          </li>
          <li>
            <Link to="/param/Mundo">Param #02</Link>
          </li>
          <li>
            <Link to="/about">Sobre</Link>
          </li>
          <li>
            <Link to="/naoExiste">Não Existe</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Menu;
