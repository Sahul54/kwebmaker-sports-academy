export default function SectionTitle({
  title,
  subtitle,
}) {
  return (
    <div className="text-center mb-[5vw]">
      <p className="text-lime-400 uppercase tracking-wider">
        {subtitle}
      </p>

      <h2 className="text-[3vw] font-bold mt-[1vw]">
        {title}
      </h2>
    </div>
  );
}