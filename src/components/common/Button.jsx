import clsx from "classnames";

const palette = {
  user: {
    primary: "bg-user-primary hover:bg-user-primary/90 text-white",
    secondary: "bg-user-secondary/90 hover:bg-user-secondary text-white",
    ghost: "bg-white/60 text-user-primary hover:bg-white shadow-soft",
    danger: "bg-red-500 hover:bg-red-600 text-white",
  },
  admin: {
    primary: "bg-admin-primary hover:bg-admin-primary/90 text-white",
    secondary: "bg-admin-secondary/90 hover:bg-admin-secondary text-white",
    ghost: "bg-white text-admin-primary hover:bg-white shadow-soft",
    danger: "bg-red-500 hover:bg-red-600 text-white",
  },
  support: {
    primary: "bg-support-primary hover:bg-support-primary/90 text-white",
    secondary: "bg-support-secondary/90 hover:bg-support-secondary text-white",
    ghost: "bg-white text-support-primary hover:bg-white shadow-soft",
    danger: "bg-red-500 hover:bg-red-600 text-white",
  },
};

export const Button = ({
  children,
  variant = "primary",
  tone = "user",
  className,
  icon: Icon,
  as: Component = "button",
  ...props
}) => {
  return (
    <Component
      className={clsx(
        "inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2",
        palette[tone]?.[variant] || palette.user.primary,
        variant !== "ghost" ? "shadow-soft" : "shadow-none",
        className
      )}
      {...props}
    >
      {Icon && <Icon size={16} />}
      {children}
    </Component>
  );
};
