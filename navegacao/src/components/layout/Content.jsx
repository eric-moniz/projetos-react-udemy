import "./Content.css";
import React from "react";
import { Routes, Route } from "react-router-dom";

import About from "../../views/examples/About";
import Param from "../../views/examples/Param";
import Home from "../../views/examples/Home";
import NotFound from "../../views/examples/NotFound";

const Content = props => {
  return (
    <main className="Content">
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/param/:id" element={<Param />} />
        <Route exact path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
};

export default Content;

// eslint-disable-next-line no-lone-blocks
{
  /* 'exact path="/"' o exact define a rota especifica, se não toda rota acaba parando no path=/ */
}
