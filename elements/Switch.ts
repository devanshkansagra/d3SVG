import { Attachment } from "@/definitions/Attachment";
import { Element } from "@/definitions/Element";
import { Point } from "@/definitions/Point";
import * as d3 from "d3";

export class Switch implements Element {
  public render(
    group: d3.Selection<SVGGElement, unknown, null, undefined>,
    attachment: Attachment,
    coord: Point,
  ): void {
    const length = 20;
    const isVertical = attachment.orientation === "vertical";
    const closed = false;

    const g = group
      .append("g")
      .attr(
        "transform",
        `translate(${coord.x}, ${coord.y}) rotate(${isVertical ? 90 : 0})`,
      );

    // CUT OUT WIRE ONLY WHEN OPEN
    if (!closed) {
      g.append("rect")
        .attr("x", -length / 2 - 2)
        .attr("y", -3)
        .attr("width", length + 4)
        .attr("height", 6)
        .attr("fill", "white"); // or background color
    }

    // Contacts
    g.append("circle")
      .attr("cx", -length / 2)
      .attr("cy", 0)
      .attr("r", 3)
      .attr("fill", "black");

    g.append("circle")
      .attr("cx", length / 2)
      .attr("cy", 0)
      .attr("r", 3)
      .attr("fill", "black");

    // Arm
    g.append("line")
      .attr("x1", -length / 2)
      .attr("y1", 0)
      .attr("x2", length / 2)
      .attr("y2", closed ? 0 : -15)
      .attr("stroke", "black")
      .attr("stroke-width", 2);
  }
}
