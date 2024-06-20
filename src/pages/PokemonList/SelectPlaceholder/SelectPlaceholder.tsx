const SelectPlaceholder = () => {
  return (
    <div className="relative w-full max-w-lg px-4 py-2 text-lg text-slate-400 bg-white rounded-lg border-1 border-gray-200 shadow-md animate-pulse">
      Select an option
      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
        <svg
          className="w-5 h-5 text-gray-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default SelectPlaceholder;
