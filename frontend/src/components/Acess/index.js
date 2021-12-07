import React from "react";
import style from "./style.module.scss";

const Acess = (props) => {
  return (
    <section className={style.section}>
      <div>{props.children}</div>
    </section>
  );
};
export default Acess;
