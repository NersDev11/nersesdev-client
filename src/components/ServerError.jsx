function ServerError({ handleClose }) {
  return (
    <div className="absolute w-[70%] min-h-[20%] ml-[15%]  flex flex-col justify-center items-center gap-2 z-5000 bg-white text-black border-4 border-error rounded-lg">
      <span className="mt-4">An error occcured while sending message ((</span>
      <span>Please try again!</span>
      <button
        className="border-2 border-black justify-self-end w-[40%] mt-10 mb-4 hover:cursor-pointer hover:border-error transition-colors duration-300"
        onClick={handleClose}
      >
        OK
      </button>
    </div>
  );
}

export default ServerError;
