import { Attachment } from "@/definitions/Attachment";
import { Element } from "@/definitions/Element";
import { Point } from "@/definitions/Point";
import * as d3 from "d3";

export class Transformer implements Element {
  render(
    group: d3.Selection<SVGGElement, unknown, null, undefined>,
    attachment: Attachment,
    coord: Point,
  ): void {
    const angle = attachment.orientation === "horizontal" ? 90 : 0;
    const size = attachment.size ?? 10;
    const offset = size * 0.7;

    const g = group
      .append("g")
      .attr("transform", `translate(${coord.x}, ${coord.y}) rotate(${angle})`);

    // Top Circle
    g.append("circle")
      .attr("cy", -offset)
      .attr("r", size)
      .attr("fill", "none") // Set to none to make the background line visible
      .attr("stroke", attachment.color ?? "gray")
      .attr("stroke-width", 2);

    // Bottom Circle
    g.append("circle")
      .attr("cy", offset)
      .attr("r", size)
      .attr("fill", "none") // Set to none to make the background line visible
      .attr("stroke", attachment.color ?? "gray")
      .attr("stroke-width", 2);

    if (attachment.label) {
      group
        .append("text")
        .attr("x", coord.x)
        .attr("y", coord.y - (size + 5))
        .attr("text-anchor", "middle")
        .attr("fill", attachment.color || "black")
        .style("font-size", "10px")
        .text(attachment.label);
    }
  }
}
