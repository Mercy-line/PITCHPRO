export interface PitchPrepState {
  docs: string;
  audience: string;
  loading: boolean;
  result: string | null;
}

export type AudienceType = 
  | 'Investors (VCs, Angel Investors)'
  | 'Non-Technical Executives'
  | 'Technical Visitors / Engineers'
  | 'General Public / Customers';
