import { Attachment } from "@/definitions/Attachment";
import { Element } from "@/definitions/Element";
import { Point } from "@/definitions/Point";
import * as d3 from 'd3'

export class Circle implements Element {
  public render(
    group: d3.Selection<SVGGElement, unknown, null, undefined>,
    attachment: Attachment,
    coord: Point,
  ): void {
    const size = 25;

    group
      .append("circle")
      .attr("cx", coord.x)
      .attr("cy", coord.y)
      .attr("r", size / 2)
      .attr("fill", "gray");
  }
}
