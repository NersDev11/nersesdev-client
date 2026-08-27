import Modal from "./Modal";
import tryzub from "../assets/tryzub.png";

function SpecialMessage({ showSpecialMessage, setShowSpecialMessage }) {
  return (
    <Modal
      isOpen={showSpecialMessage}
      onClose={() => null}
      // styles={"min-w-[90svw] min-h-[90svh] rounded-lg bg-white"}
      styles={"min-w-[90svw] h-[95svh] rounded-lg bg-white"}
    >
      <div className="h-[95svh] flex flex-col font-special">
        {/* <img src="" alt="" /> */}
        <div className="h-1/2 w-full bg-sky-600 flex justify-center items-center">
          <p className="text-5xl text-gray-50 overflow-hidden font-bold">
            Слава Україні!
          </p>
        </div>
        <div className="h-1/2 w-full bg-yellow-300 relative">
          <button
            className="mb-10 h-20 w-[35%] md:w-[30%]  lg:w-[25%] xl:w-[22%]  2xl:w-[18%] border-4 border-blue-800 bg-blue-400 hover:bg-blue-300 transition-colors duration-300 text-2xl text-gray-50 sm:p-2 hover:cursor-pointer rounded-2xl absolute top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/2 [@media(max-height:400px)]:top-1/2 overflow-hidden"
            onClick={() => setShowSpecialMessage(false)}
          >
            Героям Слава!
          </button>
        </div>
        <img
          src={tryzub}
          alt="Coat of Arms of Ukraine"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-50 2xl:w-55 [@media(max-height:550px)]:w-30 [@media(max-height:400px)]:hidden"
        />
      </div>
    </Modal>
  );
}

export default SpecialMessage;
