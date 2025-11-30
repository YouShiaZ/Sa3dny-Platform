export const UserBackground = () => (
  <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
    <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-user-primary/25 blur-3xl" />
    <div className="absolute right-10 top-10 h-80 w-80 rounded-full bg-user-secondary/20 blur-3xl" />
    <svg className="absolute inset-0 h-full w-full opacity-60" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="wave" x1="0%" x2="100%" y1="0%" y2="0%">
          <stop offset="0%" stopColor="#00A3A3" stopOpacity="0.35" />
          <stop offset="50%" stopColor="#10B981" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#F0FDFD" stopOpacity="0.2" />
        </linearGradient>
      </defs>
      <path
        d="M0 120 Q 200 200 400 120 T 800 120 V 400 H0 Z"
        fill="url(#wave)"
      >
        <animate attributeName="d" dur="12s" repeatCount="indefinite"
          values="
            M0 120 Q 200 200 400 120 T 800 120 V 400 H0 Z;
            M0 100 Q 200 160 400 100 T 800 140 V 400 H0 Z;
            M0 120 Q 200 200 400 120 T 800 120 V 400 H0 Z
          "
        />
      </path>
    </svg>
  </div>
);

export const AdminBackground = () => (
  <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden bg-admin-gradient animate-gradient" />
);

export const SupportBackground = () => (
  <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
    <div className="absolute inset-0 bg-support-gradient opacity-60" />
    {[...Array(12)].map((_, idx) => (
      <div
        key={idx}
        className="absolute h-2 w-2 rounded-full bg-support-secondary/70 blur-[1px]"
        style={{
          top: `${Math.random() * 90}%`,
          left: `${Math.random() * 90}%`,
          animation: `float ${6 + idx}s ease-in-out infinite`,
          animationDelay: `${idx * 0.4}s`,
        }}
      />
    ))}
    <style>{`@keyframes float {0%{transform:translateY(0)}50%{transform:translateY(-12px)}100%{transform:translateY(0)}}`}</style>
  </div>
);
