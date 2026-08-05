import ButtonLangChange from "./ButtonLangChange";
import ButtonThemeToggle from "./ButtonThemeToggle";

function ButtonsContainer({ styles, scrolled }) {
  return (
    <div className={`${styles}`}>
      <ButtonLangChange scrolled={scrolled} />
      <ButtonThemeToggle scrolled={scrolled} />
    </div>
  );
}

export default ButtonsContainer;
