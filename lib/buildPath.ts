import { Point } from "@/definitions/Point";
export function buildPath(points: Point[]) {
  return points
    .map((p, i) => (i === 0 ? `M ${p.x} ${p.y}` : `L ${p.x} ${p.y}`))
    .join(" ");
}