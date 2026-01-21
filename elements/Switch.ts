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
    const size = 20;

    group
      .append("rect")
      .attr("x", coord.x - size / 2)
      .attr("y", coord.y - size / 2)
      .attr("width", size)
      .attr("height", size)
      .attr("fill", "#c21d11");
  }
}
