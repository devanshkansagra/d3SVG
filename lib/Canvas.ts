import { CanvasProperties } from "@/definitions/CanvasProperties";
import { PathBuilder } from "./PathBuilder";
import { DiagramBranch } from "@/definitions/DiagramBranch";

export class Canvas {
  private properties: CanvasProperties;
  private paths: PathBuilder[] = [];

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
    };
  }
}
