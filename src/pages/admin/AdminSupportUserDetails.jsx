import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Card } from "../../components/common/Card";
import { Button } from "../../components/common/Button";

const supportUsers = {
  "sup-1": { name: "Omar Selim", phone: "+20 111 888 9900", email: "omar@sa3dny.com", shift: "morning", notes: "Escalations" },
  "sup-2": { name: "Nadine Adel", phone: "+20 101 220 2200", email: "nadine@sa3dny.com", shift: "evening", notes: "Instapay verification" },
};

export const AdminSupportUserDetails = () => {
  const { id } = useParams();
  const { t } = useTranslation();
  const user = supportUsers[id] || Object.values(supportUsers)[0];

  return (
    <Card className="space-y-3">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">{user.name}</h1>
          <p className="text-sm text-slate-600">{user.email}</p>
        </div>
        <Button as={Link} to={`/admin/support-users/${id}/edit`} tone="admin">
          {t("actions.edit")}
        </Button>
      </div>
      <div className="text-sm text-slate-700">{user.phone}</div>
      <div className="text-sm text-slate-700">{t("forms.time")}: {t(`shifts.${user.shift}`)}</div>
      <div className="rounded-xl bg-slate-50 px-3 py-2 text-sm text-slate-600">
        {t(`supportUsers.${id}.notes`, { defaultValue: user.notes })}
      </div>
    </Card>
  );
};
