export interface Attachment {
  pos: number; // Removed pointIndex as it's now nested
  shape:
    | "ct"
    | "cb"
    | "transformer"
    | "image"
    | "switch"
    | "merging"
    | "bay"
    | "ied";
  size?: number;
  color?: string;
  label?: string;
  url?: string;
  orientation?: string;
}
