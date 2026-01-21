"use client";
import { useRef, useEffect } from "react";
import * as d3 from "d3";
import { buildPath } from "@/lib/buildPath";
import { Props } from "@/definitions/Props";
import { Attachment } from "@/definitions/Attachment";

export function Diagram({
  data,
  width,
  height,
  stroke = "white",
  strokeWidth = 2,
  activeId,
}: Props) {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const pathGroup = svg.append("g").attr("class", "paths-layer");
    const attachmentGroup = svg.append("g").attr("class", "attachments-layer");

    data.forEach((branch) => {
      const d = buildPath(branch.points);
      const isActive = activeId === branch.id;

      // Determine dash array based on lineType
      let dashArray = "none";
      if (branch.lineType === "dashed") {
        dashArray = "5,5";
      } else if (branch.lineType === "dotted") {
        dashArray = "2,2";
      }

      const pathColor = branch?.color || stroke;

      // 1. Draw Main Path
      const pathNode = pathGroup
        .append("path")
        .attr("d", d)
        .attr("fill", "none")
        .attr("stroke", pathColor)
        .attr("stroke-width", strokeWidth)
        .attr("stroke-dasharray", dashArray) // Apply the dash array here
        .node() as SVGPathElement;

      // 2. Add Flow Animation if active
      if (isActive || branch.isAnimated) {
        pathGroup
          .append("path")
          .attr("d", d)
          .attr("fill", "none")
          .attr("stroke", "#00ffcc")
          .attr("stroke-width", strokeWidth)
          .attr("stroke-dasharray", "8,8")
          .style("pointer-events", "none")
          .call((path) => {
            (function repeat() {
              path
                .attr("stroke-dashoffset", 16)
                .transition()
                .duration(600)
                .ease(d3.easeLinear)
                .attr("stroke-dashoffset", 0)
                .on("end", repeat);
            })();
          });
      }

      if (!pathNode) return;
      const length = pathNode.getTotalLength();

      // 3. Draw Attachments for this specific branch
      branch.attachments?.forEach((attr: Attachment) => {
        const coords = pathNode.getPointAtLength(attr.pos * length);
        const size = attr.size || 10;
        const offset = size * 0.7;

        if (attr.shape === "circle") {
          attachmentGroup
            .append("circle")
            .attr("cx", coords.x)
            .attr("cy", coords.y)
            .attr("r", size / 2)
            .attr("fill", attr.color || "gray");
        } else if (attr.shape === "rect") {
          attachmentGroup
            .append("rect")
            .attr("x", coords.x - size / 2)
            .attr("y", coords.y - size / 2)
            .attr("width", size)
            .attr("height", size)
            .attr("fill", attr.color || "gray");
        } else if (attr.shape === "transformer") {
          let angle = attr.orientation === "horizontal" ? 90 : 0;
          const g = attachmentGroup
            .append("g")
            .attr(
              "transform",
              `translate(${coords.x}, ${coords.y}) rotate(${angle})`,
            );

          g.append("circle")
            .attr("cy", -offset)
            .attr("r", size)
            .attr("fill", "white")
            .attr("stroke", attr.color || "black")
            .attr("stroke-width", 2);
          g.append("circle")
            .attr("cy", offset)
            .attr("r", size)
            .attr("fill", "white")
            .attr("stroke", attr.color || "black")
            .attr("stroke-width", 2);
        } else if (attr.shape === "image" && attr.url) {
          attachmentGroup
            .append("image")
            .attr("href", attr.url)
            .attr("x", coords.x - size / 2)
            .attr("y", coords.y - size / 2)
            .attr("width", size)
            .attr("height", size);
        }

        if (attr.label) {
          attachmentGroup
            .append("text")
            .attr("x", coords.x)
            .attr("y", coords.y)
            .attr("text-anchor", "middle")
            .attr("dominant-baseline", "middle")
            .attr("fill", "white")
            .style("font-size", "10px")
            .text(attr.label);
        }
      });
    });
  }, [data, activeId, stroke, strokeWidth]);

  return <svg ref={svgRef} width={width} height={height} />;
}
