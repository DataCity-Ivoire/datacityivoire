import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";
import ContactDialog from "@/components/contact/ContactDialog";

interface ContactDialogValue {
  open: () => void;
  close: () => void;
}

const ContactDialogContext = createContext<ContactDialogValue | null>(null);

export const useContactDialog = () => {
  const ctx = useContext(ContactDialogContext);
  if (!ctx) throw new Error("useContactDialog doit être utilisé dans <ContactDialogProvider>");
  return ctx;
};

export const ContactDialogProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  const value = useMemo(() => ({ open, close }), [open, close]);

  return (
    <ContactDialogContext.Provider value={value}>
      {children}
      <ContactDialog open={isOpen} onOpenChange={setIsOpen} />
    </ContactDialogContext.Provider>
  );
};

export default ContactDialogProvider;
