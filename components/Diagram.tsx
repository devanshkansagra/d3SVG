"use client";
import { useRef, useEffect } from "react";
import * as d3 from "d3";
import { buildPath } from "@/lib/buildPath";
import { Point } from "@/definitions/Point";
import { DiagramBranch } from "@/definitions/DiagramBranch";
import { Attachment } from "@/definitions/Attachment";
import { Registry } from "@/lib/Registry";

// 1. Updated Interface to include the standalone attachments array
interface SerializedCanvas {
  props: {
    width: number;
    height: number;
    stroke?: string;
    strokeWidth?: number;
    activeId?: string;
  };
  paths: DiagramBranch[];
  // Matches the 'attachments' key in your Canvas.toJSON()
  attachments?: { attr: Attachment; coord: Point }[];
  links: { from: Point; to: Point; color?: string }[];
}

export function Diagram({ canvas }: { canvas: SerializedCanvas }) {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const { width, height, stroke, strokeWidth, activeId } = canvas.props;

  useEffect(() => {
    if (!svgRef.current) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    // Setup Layers
    const pathGroup = svg.append("g").attr("class", "paths-layer");
    const attachmentGroup = svg.append("g").attr("class", "attachments-layer");

    // --- LOOP 1: RENDER PATHS AND IN-LINE ATTACHMENTS ---
    canvas.paths.forEach((branch: DiagramBranch) => {
      const d = buildPath(branch.points as Point[]);
      const isActive = activeId === branch.id;
      const pathColor = branch?.color || stroke || "#000";

      let dashArray = "none";
      if (branch.lineType === "dashed") dashArray = "5,5";
      else if (branch.lineType === "dotted") dashArray = "2,2";

      const pathNode = pathGroup
        .append("path")
        .attr("d", d)
        .attr("fill", "none")
        .attr("stroke", pathColor)
        .attr("stroke-width", strokeWidth || 2)
        .attr("stroke-dasharray", dashArray)
        .node() as SVGPathElement;

      if (isActive || branch.isAnimated) {
        pathGroup
          .append("path")
          .attr("d", d)
          .attr("fill", "none")
          .attr("stroke", "red")
          .attr("stroke-width", (strokeWidth || 2) + 1)
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

      branch.attachments?.forEach((attr: Attachment) => {
        const coords = pathNode.getPointAtLength(
          (attr.pos as number) * length,
        ) as Point;
        const renderer = Registry[attr.shape];
        if (renderer) {
          renderer.render(attachmentGroup.append("g"), attr, coords);
        }
      });
    });

    // --- LOOP 2: RENDER STANDALONE ATTACHMENTS ---
    // This renders the icons you added directly via canvas.addAttachment()
    canvas.attachments?.forEach(({ attr, coord }) => {
      const renderer = Registry[attr.shape];
      if (renderer) {
        // We use the fixed 'coord' directly instead of calculating along a path
        renderer.render(attachmentGroup.append("g"), attr, coord);
      }
    });

    const defs = svg.append("defs");

    defs
      .append("marker")
      .attr("id", "arrowhead")
      .attr("viewBox", "0 -5 10 10")
      .attr("refX", 5)
      .attr("refY", 0)
      .attr("markerWidth", 6)
      .attr("markerHeight", 6)
      .attr("orient", "auto")
      .append("path")
      .attr("d", "M0,-5L10,0L0,5")
      .attr("fill", "red");

    canvas.links?.forEach((link) => {
      attachmentGroup
        .append("line")
        .attr("x1", link.from.x)
        .attr("y1", link.from.y)
        .attr("x2", link.to.x)
        .attr("y2", link.to.y)
        .attr("stroke", link.color || "red")
        .attr("stroke-width", 2)
        .attr("marker-end", "url(#arrowhead)")
        .attr("marker-start", "url(#arrowhead)"); // Double-headed
    });
  }, [canvas, activeId, stroke, strokeWidth]);

  return (
    <svg
      ref={svgRef}
      width={width}
      height={height}
      style={{ border: "1px solid #ddd" }}
    />
  );
}
