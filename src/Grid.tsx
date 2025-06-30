export default function Grid({ items }: { items: any[] }) {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-3 gap-4">
      {items.map((item) => (
        <div
          key={item.id}
          className="overflow-hidden m-auto bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"
        >
          {item}
        </div>
      ))}
    </div>
  );
}
