import { Attachment } from "@/definitions/Attachment";
import { Element } from "@/definitions/Element";
import { Point } from "@/definitions/Point";
import * as d3 from "d3";

export class Circle implements Element {
  public render(
    group: d3.Selection<SVGGElement, unknown, null, undefined>,
    attachment: Attachment,
    coord: Point,
  ): void {
    const size = attachment.size || 10;

    group
      .append("circle")
      .attr("cx", coord.x)
      .attr("cy", coord.y)
      .attr("r", size / 2)
      .attr("fill", attachment.color || "gray");

    if (attachment.label) {
      group
        .append("text")
        .attr("x", coord.x)
        .attr("y", coord.y - (size / 2 + 5)) // Position label 5px above the circle
        .attr("text-anchor", "middle")
        .attr("fill", attachment.color || "white")
        .style("font-size", "10px")
        .text(attachment.label);
    }
  }
}
