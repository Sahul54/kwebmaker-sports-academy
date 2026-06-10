export default function VerticalLines() {
  return (
    <div className="fixed inset-0 z-0 hidden lg:flex justify-evenly pointer-events-none">
      {[1, 2, 3,].map((item) => (
        <div
          key={item}
          className="w-px h-full bg-black/5"
        />
      ))}
    </div>
  );
}