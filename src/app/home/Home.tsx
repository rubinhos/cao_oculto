import "./Home.css";

import { FC } from "react";

import homeLiterals from "./HomeLiterals";

const COMPONENT_ID = "home";

const Home: FC = () => {
  return (
    <section id={COMPONENT_ID} className={`${COMPONENT_ID} slide`}>
      <div className="slide__content">
        <h1 className={`${COMPONENT_ID}__title display-1`}>{homeLiterals.TITLE}</h1>
        <h2 className={`${COMPONENT_ID}__subtitle display-6`}>{homeLiterals.SUBTITLE}</h2>
        <a className={`${COMPONENT_ID}__link`} href="#puzzle" title={homeLiterals.LINK_TITLE}>
          <i className="bi bi-chevron-down"></i>
        </a>
      </div>
    </section>
  );
};

export default Home;
