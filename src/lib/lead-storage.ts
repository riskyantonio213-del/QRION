/**
 * Client-side persistence for the Live Preview lead gate.
 *
 * A visitor who has already submitted their details (name, WhatsApp, school)
 * is remembered in localStorage so the gate never blocks them again — on any
 * page of the site, in the same browser.
 */

export type StoredLead = {
  name: string;
  whatsapp: string;
  institution: string;
  submittedAt: string;
};

const STORAGE_KEY = "qrion_live_preview_lead_v1";

/** Fired in the same tab whenever a lead is stored (localStorage's own
 * "storage" event only fires in other tabs). */
export const LEAD_CHANGED_EVENT = "qrion-live-preview-lead-changed";

export function readStoredLead(): StoredLead | null {
  if (typeof window === "undefined") return null;

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;

    const parsed: unknown = JSON.parse(raw);
    if (
      typeof parsed === "object" &&
      parsed !== null &&
      typeof (parsed as StoredLead).name === "string" &&
      typeof (parsed as StoredLead).whatsapp === "string" &&
      typeof (parsed as StoredLead).institution === "string"
    ) {
      return parsed as StoredLead;
    }
    return null;
  } catch {
    return null;
  }
}

export function hasStoredLead(): boolean {
  return readStoredLead() !== null;
}

export function storeLead(lead: StoredLead): void {
  if (typeof window === "undefined") return;

  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(lead));
  } catch {
    // Storage full or blocked — the gate simply shows up again next visit.
  }

  window.dispatchEvent(new Event(LEAD_CHANGED_EVENT));
}

/** Subscribe to lead changes (current tab + other tabs). */
export function subscribeToLeadChanges(callback: () => void): () => void {
  const onStorage = (event: StorageEvent) => {
    if (event.key === null || event.key === STORAGE_KEY) callback();
  };

  window.addEventListener("storage", onStorage);
  window.addEventListener(LEAD_CHANGED_EVENT, callback);

  return () => {
    window.removeEventListener("storage", onStorage);
    window.removeEventListener(LEAD_CHANGED_EVENT, callback);
  };
}
