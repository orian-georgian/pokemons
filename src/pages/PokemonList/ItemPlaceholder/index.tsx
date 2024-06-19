const ItemPlaceholder = () => {
  return (
    <div className="flex items-center gap-10 border border-gray-300 px-10 py-2 animate-pulse">
      <div className="w-20 h-20 bg-gray-400 rounded-full" />
      <div className="w-48 h-8 bg-gray-400" />
      <div className="w-32 h-8 bg-gray-400 rounded-full ml-auto" />
    </div>
  );
};

export default ItemPlaceholder;
