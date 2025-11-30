import { CheckCircle, Clock } from "lucide-react";
import { useTranslation } from "react-i18next";

export const Timeline = ({ steps = [] }) => {
  const { t } = useTranslation();
  return (
    <div className="space-y-3">
      {steps.map((step, idx) => {
        const isComplete = ["paymentConfirmed", "assigned", "inProgress", "completed"].includes(step.status);
        return (
          <div key={idx} className="flex items-start gap-3">
            <div className="mt-1">
              {isComplete ? (
                <CheckCircle size={18} className="text-emerald-500" />
              ) : (
                <Clock size={18} className="text-amber-500" />
              )}
            </div>
            <div className="flex-1 rounded-xl bg-slate-50 px-3 py-2">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-slate-800">{t(`status.${step.status}`)}</span>
                <span className="text-xs text-slate-500">{step.timestamp}</span>
              </div>
              {step.note && <p className="text-sm text-slate-600">{step.note}</p>}
            </div>
          </div>
        );
      })}
    </div>
  );
};
