export default function Input({
  value,
  onChange,
}: {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="mb-4 w-full">
      <label
        htmlFor="email"
        className="block text-sm font-medium text-gray-800 mb-1"
      >
        Email
      </label>
      <input
        type="email"
        placeholder="Digite seu email"
        value={value}
        onChange={onChange}
        className="w-full px-2 py-2 border-3 border-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-200"
      />
      {/* <p className="mt-1 text-sm text-red-600">Error</p> */}
    </div>
  );
}
