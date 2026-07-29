import ButtonLangChange from "./ButtonLangChange";
import ButtonThemeToggle from "./ButtonThemeToggle";

function ButtonsContainer({ styles }) {
  return (
    <div className={`${styles}`}>
      <ButtonLangChange />
      <ButtonThemeToggle />
    </div>
  );
}

export default ButtonsContainer;
