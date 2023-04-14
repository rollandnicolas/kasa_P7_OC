import { useEffect, useState } from "react";
import "../styles/about.css";
import arrow from "../utils/arrow.png";

const Collapse = ({ title, description }) => {
  const [open, isOPen] = useState(false);
  const [rotate, setRotate] = useState("180deg");
  const openCollapse = (e) => {
    e.preventDefault();
    isOPen(!open);
  };
  useEffect(() => {
    const element = document.querySelector(`.${title}`);
    if (open) {
      setRotate("0deg");
      element.style.transform = `rotate(${rotate})`;
    } else {
      setRotate("180deg");
      element.style.transform = `rotate(${rotate})`;
    }
  }, [open, isOPen, rotate, title]);
  return (
    <article>
      <div onClick={openCollapse}>
        <h2>{title}</h2>
        <img src={arrow} alt="deploy" className={title} />
      </div>
      {open && (
        <div>
          <p className="collapseText">{description}</p>
        </div>
      )}
    </article>
  );
};

export default Collapse;