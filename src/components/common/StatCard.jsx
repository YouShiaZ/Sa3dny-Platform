import { Card } from "./Card";
import { Badge } from "./Badge";

export const StatCard = ({ title, value, helper, icon: Icon, tone = "user" }) => (
  <Card className="flex items-start gap-4">
    {Icon && (
      <div className="rounded-xl bg-white p-3 shadow-inner">
        <Icon className={tone === "admin" ? "text-admin-primary" : tone === "support" ? "text-support-primary" : "text-user-primary"} size={22} />
      </div>
    )}
    <div className="flex flex-1 flex-col gap-2">
      <span className="text-sm font-semibold text-slate-500">{title}</span>
      <span className="text-2xl font-bold text-slate-900">{value}</span>
      {helper && <Badge tone={tone}>{helper}</Badge>}
    </div>
  </Card>
);
