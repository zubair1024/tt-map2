export interface TroubleTicket {
  "Trouble ticket": string;
  "Created Time": string;
  "TT No.": string;
  Priority: string;
  Latitude: string;
  longitude: string;
  Status: string;
  "Status Updated": string;
}

export interface sanitizedTroubleTicket {
  "Trouble ticket": string;
  "Created Time": Date;
  "TT No.": string;
  Priority: string;
  Latitude: number;
  longitude: number;
  Status: string;
  "Status Updated": Date;
}
