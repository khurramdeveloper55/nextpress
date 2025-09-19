export default function PostCard() {
  return (
    <div
      className="border rounded-lg w-full flex justify-between items-center p-4 
             hover:shadow-md hover:bg-gray-50 transition-all duration-200 group"
    >
      {/* Left side */}
      <div className="flex gap-4 items-center">
        <div className="w-14 h-14 bg-gray-100 border rounded-md flex justify-center items-center text-xl font-semibold text-gray-700">
          A
        </div>
        <div>
          <h3 className="font-semibold text-lg group-hover:text-blue-600 transition-colors">
            Ai Will Change The World
          </h3>
          <span className="text-sm text-gray-500">Draft • 9 Sept</span>
        </div>
      </div>

      {/* Right side */}
      <div className="text-right flex flex-col items-end gap-2">
        <div className="flex gap-3 items-center">
          {/* Hidden by default, show on hover */}
          <div className="hidden group-hover:flex gap-2">
            <button className="text-sm text-blue-600 hover:underline">
              Edit
            </button>
            <button className="text-sm text-green-600 hover:underline">
              Publish
            </button>
            <button className="text-sm text-red-600 hover:underline">
              Delete
            </button>
          </div>
          <span className="text-gray-700 font-medium">Name Profile</span>
        </div>
        <div className="text-sm text-gray-500">
          <span className="mr-3">0 comments</span>
          <span>0 analytics</span>
        </div>
      </div>
    </div>
  );
}
