import { CanvasProperties } from "@/definitions/CanvasProperties";
import { PathBuilder } from "./PathBuilder";
import { DiagramBranch } from "@/definitions/DiagramBranch";
import { Attachment } from "@/definitions/Attachment";
import { Point } from "@/definitions/Point";

export class Canvas {
  private properties: CanvasProperties;
  private paths: PathBuilder[] = [];

  private attachments: { attr: Attachment; coord: Point }[] = [];

  public links: { from: Point; to: Point; color?: string }[] = [];

  constructor(properties: CanvasProperties) {
    this.properties = properties;
  }

  createPath(id: string) {
    const pb = new PathBuilder(id);
    this.paths.push(pb);

    return pb;
  }

  getProperties() {
    return this.properties;
  }

  getPaths() {
    return this.paths;
  }

  public addAttachment(
    shape: Attachment["shape"],
    x: number,
    y: number,
    extra: Partial<Omit<Attachment, "shape" | "pos">>,
  ) {
    const attachment = { shape, pos: 0, ...extra };
    const coord = { x, y };
    this.attachments.push({ attr: attachment, coord });

    return coord;
  }

  public addLink(from: Point, to: Point, color: string = "red") {
    this.links.push({ from, to, color });
  }

  private flattenPaths(): PathBuilder[] {
    const result: PathBuilder[] = [];

    const collect = (p: PathBuilder) => {
      result.push(p);
      p["branches"]?.forEach((b: PathBuilder) => collect(b));
    };

    this.paths.forEach((p) => collect(p));

    return result;
  }

  public exportDiagram(): DiagramBranch[] {
    return this.flattenPaths().map((p) => p.export());
  }

  clear() {
    this.paths = [];
  }

  toJSON() {
    return {
      props: this.properties,
      paths: this.exportDiagram(),
      attachments: this.attachments,
      links: this.links, // Add this line
    };
  } 
}
