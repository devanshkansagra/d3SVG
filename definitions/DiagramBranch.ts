import { Point } from "./Point";
import { Attachment } from "./Attachment";
import { LineType } from "./LineType";
export interface DiagramBranch {
  id?: string;
  points: Point[];
  attachments?: Attachment[];
  isAnimated?: boolean; // New property to trigger specific animations
  lineType?: LineType;
  color?: string;
}
