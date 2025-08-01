export default function Shimmer() {
  return (
    <div className="p-2 md:p-3 m-2 md:m-3">
      <div className="h-30 md:h-40 w-30 md:w-40 bg-gray-300 rounded-lg animate-pulse" />
      <div className="w-20 md:w-30 h-4 mt-2 bg-gray-300 rounded animate-pulse" />
      <div className="w-30 md:w-40 h-3 mt-1 bg-gray-300 rounded animate-pulse" />
    </div>
  );
}
