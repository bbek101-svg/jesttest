function Button({ Sign, onClick }) {
  return (
    <div className="flex p-4">
      <button
        className="flex justify-center items-center py-4 px-8 rounded-lg cursor-pointer bg-[#00FF87] text-black"
        onClick={onClick}
      >
        {Sign}
      </button>
    </div>
  );
}

export default Button;
