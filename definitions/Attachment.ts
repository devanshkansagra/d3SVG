export interface Attachment {
  pos: number;
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

export type AttachmentShape = {
  
};
