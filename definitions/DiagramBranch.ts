import { Point } from "./Point";
import { Attachment } from "./Attachment";
import { LineType } from "./LineType";
export interface DiagramBranch {
  id?: string;
  points?: Point[];
  attachments?: Attachment[];
  isAnimated?: boolean;
  lineType?: LineType;
  color?: string;
  branches?: unknown;
}
