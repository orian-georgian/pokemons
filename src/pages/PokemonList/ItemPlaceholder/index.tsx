const ItemPlaceholder = () => {
  return (
    <div className="flex items-center gap-5 border border-gray-300 p-5 animate-pulse">
      <div className="w-24 h-24 bg-gray-400 rounded-full" />
      <div className="w-48 h-8 bg-gray-400" />
      <div className="w-32 h-8 bg-gray-400 rounded-full" />
    </div>
  );
};

export default ItemPlaceholder;
