import clsx from "classnames";

const statusStyles = {
  submitted: "bg-slate-100 text-slate-700",
  awaitingPayment: "bg-amber-100 text-amber-800",
  paymentConfirmed: "bg-emerald-100 text-emerald-800",
  assigned: "bg-blue-100 text-blue-800",
  inProgress: "bg-indigo-100 text-indigo-800",
  completed: "bg-emerald-200 text-emerald-900",
  cancelled: "bg-red-100 text-red-700",
};

export const Badge = ({ children, tone = "user", status, className }) => {
  const colorByTone = {
    user: "bg-user-primary/10 text-user-primary",
    admin: "bg-admin-primary/10 text-admin-primary",
    support: "bg-support-primary/10 text-support-primary",
  };
  const base = status ? statusStyles[status] : colorByTone[tone];
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold",
        base,
        className
      )}
    >
      {children}
    </span>
  );
};
