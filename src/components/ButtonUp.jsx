import { useEffect, useState } from "react";
import { FaCircleArrowUp } from "react-icons/fa6";

function ButtonUp() {
  const [isButtonUpVisible, setIsButtonUpVisible] = useState(false);

  useEffect(() => {
    function toggleButtonUpVisibility() {
      if (window.scrollY > window.innerHeight / 3) setIsButtonUpVisible(true);
      else setIsButtonUpVisible(false);
    }

    window.addEventListener("scroll", toggleButtonUpVisibility);

    return () => window.removeEventListener("scroll", toggleButtonUpVisibility);
  }, []);

  return (
    <>
      {isButtonUpVisible && (
        <a
          href="#home"
          role="button"
          className="fixed right-6 bottom-9 text-button-up dark:text-button-up hover:text-button-up-hover hover:dark:text-button-up-hover  text-4xl cursor-pointer transition-colors duration-300"
          aria-label="Up button"
        >
          <FaCircleArrowUp />
        </a>
      )}
    </>
  );
}

export default ButtonUp;
