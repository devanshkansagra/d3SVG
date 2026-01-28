import { Attachment } from "@/definitions/Attachment";
import { Element } from "@/definitions/Element";
import { Point } from "@/definitions/Point";
import * as d3 from "d3";

export class MergingControl implements Element {
  public render(
    group: d3.Selection<SVGGElement, unknown, null, undefined>,
    attachment: Attachment,
    coord: Point,
  ): void {
    const size = 50;

    group
      .append("rect")
      .attr("x", coord.x - size / 2)
      .attr("y", coord.y - size / 2)
      .attr("width", size)
      .attr("height", size)
      .attr("fill", "#3261e3");

    if (attachment.label) {
      group
        .append("text")
        .attr("x", coord.x)
        .attr("y", coord.y) // Position label 5px above the circle
        .attr("text-anchor", "middle")
        .attr("fill", attachment.color || "white")
        .style("font-size", "10px")
        .text(attachment.label);
    }
  }
}
