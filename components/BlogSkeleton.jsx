export default function BlogSkeleton({ count = 4 }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="animate-pulse flex flex-col space-y-3 bg-white rounded-xl shadow-sm overflow-hidden"
        >
          {/* Image placeholder */}
          <div className="h-40 w-full bg-gray-200 rounded-t-xl" />

          <div className="p-4 space-y-3">
            {/* Title */}
            <div className="h-5 bg-gray-200 rounded w-3/4" />

            {/* Subtitle */}
            <div className="h-4 bg-gray-200 rounded w-1/2" />

            {/* Small text lines */}
            <div className="space-y-2">
              <div className="h-3 bg-gray-200 rounded w-full" />
              <div className="h-3 bg-gray-200 rounded w-5/6" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
