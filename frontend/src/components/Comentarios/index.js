import React from "react";
import style from "./style.module.scss";

const Comentarios = (props) => {
  return (
    <section className={style.section}>
      <div className={style.comentarios}>{props.children}</div>
    </section>
  );
};
export default Comentarios;
