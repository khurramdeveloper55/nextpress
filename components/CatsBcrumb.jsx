export default function CatsBcrumb({ posts }) {
  return (
    <div className="rounded-xl bg-neutral-100 mt-6">
      <div className="max-w-3xl mx-auto text-center py-20">
        <ul className="flex justify-center gap-2 mb-4">
          <li>
            <a href="/">Home</a>
          </li>
          <li>/</li>
          <li>{posts[0]?.category?.name}</li>
        </ul>
        <h1 className="font-bold mb-6">{posts[0]?.category?.name}</h1>
        <p className="text-center">{posts[0]?.category?.description}</p>
      </div>
    </div>
  );
}
