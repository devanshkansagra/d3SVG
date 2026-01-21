import { DiagramBranch } from "./DiagramBranch";
export interface Props {
  data: DiagramBranch[];
  width: number;
  height: number;
  stroke?: string;
  strokeWidth?: number;
  activeId?: string | null; // For the "Operation Click" feature
}