export default function CatCard() {
  return (
    <div
      className="border rounded-lg w-full flex justify-between items-center p-4 
             hover:shadow-md hover:bg-gray-50 transition-all duration-200 group"
    >
      {/* Left side */}
      <div className="flex gap-4 items-center">
        <div
          className="w-14 h-14 bg-blue-100 text-blue-600 font-bold border rounded-md 
                    flex justify-center items-center text-xl"
        >
          A
        </div>
        <div>
          <h3 className="font-semibold text-lg group-hover:text-blue-600 transition-colors">
            AI
          </h3>
          <span className="text-sm text-gray-500">Information About AI</span>
        </div>
      </div>

      {/* Right side */}
      <div className="flex flex-col items-end gap-2 text-right">
        <div className="flex gap-3 items-center">
          {/* Action buttons (show on hover) */}
          <div className="hidden group-hover:flex gap-3">
            <button className="text-sm text-blue-600 hover:underline">
              Edit
            </button>
            <button className="text-sm text-red-600 hover:underline">
              Delete
            </button>
          </div>
          <span className="text-gray-700 font-medium">5 Posts</span>
        </div>
        <div className="text-sm text-gray-500">9 Sep 2025</div>
      </div>
    </div>
  );
}
