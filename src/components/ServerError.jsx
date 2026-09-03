import { useTranslation } from "react-i18next";
import { VscErrorCompact } from "react-icons/vsc";

function ServerError({ handleClose }) {
  const { t } = useTranslation();

  return (
    <div className="absolute bg-white w-[80%] min-h-[20%] ml-[10%]  flex flex-col justify-center items-center gap-2 z-5000 text-black border-2 border-black/50 rounded-lg">
      <div className="mt-4 flex items-center justify-center gap-4">
        <VscErrorCompact className="text-2xl text-red-700" />
        <h3 className="uppercase text-lg">error</h3>
      </div>

      <div className="m-3 text-center">
        <p className="">{t("contact.error")}</p>
        <p className="mt-2">{t("contact.tryAgain")}</p>
      </div>

      <button
        className="border rounded-xl bg-sky-700 hover:bg-sky-600 border-black/30 text-white justify-self-end w-[80%] h-8 mt-4 mb-4 hover:cursor-pointer hover:border-error transition-colors duration-300"
        onClick={handleClose}
      >
        OK
      </button>
    </div>
  );
}

export default ServerError;
