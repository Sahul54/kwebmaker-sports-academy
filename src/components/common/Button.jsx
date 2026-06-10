export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}) {
  const variants = {
    primary: `
      bg-[#99B81B]
      text-black
      hover:bg-[#8ba813]
      shadow-lg
      hover:shadow-xl
    `,

    secondary: `
      border
      border-white
      text-white
      hover:bg-white
      hover:text-black
    `,
  };

  return (
    <button
      {...props}
      className={`
        inline-flex
        items-center
        justify-center
        cursor-pointer

        px-6
        sm:px-7
        lg:px-8

        py-3
        lg:py-3.5

        rounded-full

        text-sm
        sm:text-base

        font-semibold
        tracking-wide

        transition-all
        duration-300

        hover:-translate-y-1
        active:translate-y-0

        whitespace-nowrap
        

        ${variants[variant]}
        ${className}
      `}
    >
      {children}
    </button>
  );
}