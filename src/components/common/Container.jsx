export default function Container({
  children,
  className = "",
  size = "default",
}) {
  const sizes = {
    sm: "max-w-5xl",
    default: "max-w-7xl",
    wide: "max-w-[1440px]",
    full: "max-w-full",
  };

  return (
    <div
      className={`
        w-full
        mx-auto
        px-5
        sm:px-8
        lg:px-12
        xl:px-16
        ${sizes[size]}
        ${className}
      `}
    >
      {children}
    </div>
  );
}