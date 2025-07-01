export default function Container({
  children,
  padding,
}: {
  children: React.ReactNode;
  padding?: boolean;
}) {
  return (
    <main className="min-h-screen flex justify-center items-center">
      <section
        className={`mobile-screen flex flex-col border-gray-700 border-solid border-4 shadow-md rounded-lg ${
          padding ? "p-2" : ""
        }`}
      >
        {children}
      </section>
    </main>
  );
}
