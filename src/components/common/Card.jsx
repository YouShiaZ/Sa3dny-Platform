import clsx from "classnames";

export const Card = ({ children, className, padded = true }) => (
  <div
    className={clsx(
      "rounded-2xl border border-white/70 bg-white/80 shadow-card backdrop-blur-sm",
      padded && "p-4",
      className
    )}
  >
    {children}
  </div>
);
