function SkillCard({ skill, openedCard, onToggle }) {
  const isOpen = skill.id === openedCard;

  return (
    <div
      onClick={() => onToggle(skill.id)}
      className={`border rounded-lg  ${isOpen ? "order-first" : "hover:bg-gray-400"} mr-4 hover:cursor-pointer min-w-[26%]`}
    >
      <div className="flex flex-row gap-5 justify-center m-6">
        <p className="">icon</p>
        <h4 className="">{skill.name}</h4>
      </div>

      {isOpen && (
        <p className="m-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          neque dolore sapiente eius exercitationem rerum necessitatibus quia
          unde consectetur similique omnis provident cum ut ullam esse id,
          veniam quas consequuntur.
        </p>
      )}
      {/* <button
        className="m-4 p-4 border border-blue-800"
        onClick={() => onToggle(skill.id)}
      >
        {isOpen ? "-" : "+"}
      </button> */}
    </div>
  );
}

export default SkillCard;
