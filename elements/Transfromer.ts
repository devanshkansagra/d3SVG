import { Attachment } from "@/definitions/Attachment";
import { Element } from "@/definitions/Element";
import { Point } from "@/definitions/Point";
import * as d3 from "d3";

export class Transfromer implements Element {
  render(
    group: d3.Selection<SVGGElement, unknown, null, undefined>,
    attachment: Attachment,
    coord: Point,
  ): void {
    const angle = attachment.orientation === "horizontal" ? 90 : 0;
    const size = attachment.size ?? 10;
    const offset = size * 0.7;

    // ✅ USE the <g>
    const g = group
      .append("g")
      .attr("transform", `translate(${coord.x}, ${coord.y}) rotate(${angle})`);

    g.append("circle")
      .attr("cy", -offset)
      .attr("r", size)
      .attr("fill", "white")
      .attr("stroke", attachment.color ?? "black")
      .attr("stroke-width", 2);

    g.append("circle")
      .attr("cy", offset)
      .attr("r", size) // ✅ missing before
      .attr("fill", "white")
      .attr("stroke", attachment.color ?? "black")
      .attr("stroke-width", 2);
  }
}
