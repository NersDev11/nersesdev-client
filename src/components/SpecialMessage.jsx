import Modal from "./Modal";

function SpecialMessage({ showSpecialMessage, setShowSpecialMessage }) {
  return (
    <Modal
      isOpen={showSpecialMessage}
      onClose={() => null}
      styles={"w-[90svw] h-[90svh] rounded-lg bg-white"}
    >
      <div className="h-[90svh] flex flex-col justify-end items-center">
        {/* <img src="" alt="" /> */}
        <button
          className="mb-10 border-2 h-20 w-[35%] md:w-[30%]  lg:w-[20%]  2xl:w-[15%] border-black p-2 hover:cursor-pointer rounded-2xl"
          onClick={() => setShowSpecialMessage(false)}
        >
          Героям Слава!
        </button>
      </div>
    </Modal>
  );
}

export default SpecialMessage;
