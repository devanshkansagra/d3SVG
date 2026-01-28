import { Attachment } from "@/definitions/Attachment";
import { Element } from "@/definitions/Element";
import { Point } from "@/definitions/Point";
import * as d3 from "d3";

export class Image implements Element {
  public render(
    group: d3.Selection<SVGGElement, unknown, null, undefined>,
    attachment: Attachment,
    coord: Point,
  ): void {
    const size = attachment.size || 30; // Increased default size for visibility

    // 1. Create a group to keep coordinates consistent
    const g = group.append("g");

    // 2. Add a background mask (White Rectangle)
    // This "breaks" the line visually so the icon sits ON it
    g.append("rect")
      .attr("x", coord.x - size / 2)
      .attr("y", coord.y - size / 2)
      .attr("width", size)
      .attr("height", size)
      .attr("fill", "white");

    // 3. Add the actual Image
    g.append("image")
      .attr("href", attachment.url || "")
      .attr("x", coord.x - size / 2)
      .attr("y", coord.y - size / 2)
      .attr("width", size)
      .attr("height", size);

    // 4. Handle the Label
    if (attachment.label) {
      g.append("text")
        .attr("x", coord.x)
        .attr("y", coord.y - (size / 2 + 5))
        .attr("text-anchor", "middle")
        .attr("fill", attachment.color || "black") // Set to black for visibility on white background
        .style("font-size", "10px")
        .text(attachment.label);
    }
  }
}