const ItemPlaceholder = () => {
  return (
    <div className="flex items-center gap-5 border border-slate-50 p-5 bg-gray animate-pulse">
      <div className="w-24 h-24 bg-white rounded-full" />
      <div className="w-48 h-6 bg-white" />
      <div className="w-32 h-6 bg-white rounded-full" />
    </div>
  );
};

export default ItemPlaceholder;
