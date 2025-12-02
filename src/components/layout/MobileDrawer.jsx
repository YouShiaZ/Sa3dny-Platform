import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

export const MobileDrawer = ({ open, isRTL, onClose, header, items = [], children }) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted || !open) return null;

  const panel = (
    <AnimatePresence>
      {open && (
        <>
          <div className="fixed inset-0 z-[9998] bg-black/40" onClick={onClose} />
          <motion.div
            initial={{ x: isRTL ? 240 : -240, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: isRTL ? 240 : -240, opacity: 0 }}
            transition={{ type: "spring", stiffness: 320, damping: 30 }}
            className={`fixed top-0 bottom-0 ${isRTL ? "right-0" : "left-0"} z-[9999] h-full w-72 max-w-full overflow-y-auto bg-white shadow-xl`}
          >
            <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3">
              <div className="flex items-center gap-2">{header}</div>
              <button onClick={onClose} aria-label="Close menu" className="rounded-lg p-1 hover:bg-slate-100">
                ×
              </button>
            </div>
            <div className="flex flex-col gap-2 px-4 py-4 text-sm font-semibold text-slate-700">
              {items.map((item) =>
                item.to ? (
                  <Link key={item.to} to={item.to} className="rounded-lg px-3 py-2 hover:bg-slate-100" onClick={onClose}>
                    {item.label}
                  </Link>
                ) : (
                  <button
                    key={item.label}
                    className="rounded-lg px-3 py-2 text-left hover:bg-slate-100"
                    onClick={() => {
                      item.onClick?.();
                      onClose();
                    }}
                  >
                    {item.label}
                  </button>
                )
              )}
              {children}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );

  return createPortal(panel, document.body);
};
