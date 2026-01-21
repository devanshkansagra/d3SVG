export interface Attachment {
  pos: number; // Removed pointIndex as it's now nested
  shape: "circle" | "rect" | "transformer" | "image";
  size?: number;
  color?: string;
  label?: string;
  url?: string;
  orientation?: string;
}