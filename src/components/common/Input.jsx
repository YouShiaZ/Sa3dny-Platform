import clsx from "classnames";

export const Input = ({
  label,
  icon: Icon,
  type = "text",
  className,
  ...props
}) => (
  <label className="flex flex-col gap-1 text-sm text-slate-700">
    {label && <span className="font-semibold text-slate-900">{label}</span>}
    <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 shadow-inner focus-within:border-user-primary/70">
      {Icon && <Icon className="text-slate-400" size={16} />}
      <input
        type={type}
        className={clsx(
          "w-full bg-transparent text-slate-900 outline-none placeholder:text-slate-400",
          className
        )}
        {...props}
      />
    </div>
  </label>
);

export const TextArea = ({ label, rows = 4, className, ...props }) => (
  <label className="flex flex-col gap-1 text-sm text-slate-700">
    {label && <span className="font-semibold text-slate-900">{label}</span>}
    <textarea
      rows={rows}
      className={clsx(
        "rounded-xl border border-slate-200 bg-white px-3 py-2 shadow-inner outline-none placeholder:text-slate-400 focus:border-user-primary/70",
        className
      )}
      {...props}
    />
  </label>
);

export const Select = ({ label, options = [], className, ...props }) => (
  <label className="flex flex-col gap-1 text-sm text-slate-700">
    {label && <span className="font-semibold text-slate-900">{label}</span>}
    <select
      className={clsx(
        "rounded-xl border border-slate-200 bg-white px-3 py-2 shadow-inner outline-none focus:border-user-primary/70",
        className
      )}
      {...props}
    >
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  </label>
);
