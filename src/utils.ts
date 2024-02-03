import { TroubleTicket, sanitizedTroubleTicket } from "./types";

export function convertValues(
  tt: TroubleTicket
): sanitizedTroubleTicket | null {
  if (!parseFloat(tt.Latitude) || !parseFloat(tt.longitude)) return null;
  return {
    "Trouble ticket": tt["Trouble ticket"],
    "Created Time": new Date(tt["Created Time"]),
    "TT No.": tt["TT No."],
    Priority: tt.Priority,
    Latitude: parseFloat(tt.Latitude),
    longitude: parseFloat(tt.longitude),
    Status: tt.Status,
    "Status Updated": new Date(tt["Status Updated"]),
  };
}
