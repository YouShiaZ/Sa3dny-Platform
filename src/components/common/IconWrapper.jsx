export const IconWrapper = ({ icon: Icon, tone = "user" }) => {
  const toneClass =
    tone === "admin"
      ? "bg-admin-primary/10 text-admin-primary"
      : tone === "support"
        ? "bg-support-primary/10 text-support-primary"
        : "bg-user-primary/10 text-user-primary";

  return (
    <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${toneClass}`}>
      {Icon && <Icon size={18} />}
    </div>
  );
};
