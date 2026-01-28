import { Attachment } from "@/definitions/Attachment";
import { Element } from "@/definitions/Element";
import { Point } from "@/definitions/Point";
import * as d3 from "d3";

export class Switch implements Element {
  public render(
    group: d3.Selection<SVGGElement, unknown, null, undefined>,
    attachment: Attachment,
    coord: Point
  ): void {
    const length = 20;
    const isVertical = attachment.orientation === "vertical";
    const closed = false;

    const g = group.append("g")
      .attr(
        "transform",
        `translate(${coord.x}, ${coord.y}) rotate(${isVertical ? 90 : 0})`
      );

    // Left contact
    g.append("circle")
      .attr("cx", -length / 2)
      .attr("cy", 0)
      .attr("r", 3)
      .attr("fill", "black");

    // Right contact
    g.append("circle")
      .attr("cx", length / 2)
      .attr("cy", 0)
      .attr("r", 3)
      .attr("fill", "black");

    // Switch arm
    g.append("line")
      .attr("x1", -length / 2)
      .attr("y1", 0)
      .attr("x2", length / 2)
      .attr("y2", closed ? 0 : -15)
      .attr("stroke", "black")
      .attr("stroke-width", 2);

    // Label
    if (attachment.label) {
      // g.append("text")
      //   .attr("x", coord.x - length / 2)
      //   .attr("y", coord.y)
      //   .attr("text-anchor", "middle")
      //   .attr("fill", "black")
      //   .style("font-size", "10px")
      //   .text(attachment.label);
    }
  }
}
