import { Attachment } from "@/definitions/Attachment";
import { DiagramBranch } from "@/definitions/DiagramBranch";
import { Point } from "@/definitions/Point";

export class PathBuilder {
  private id: string;
  private points: Point[] = [];
  private branches: PathBuilder[] = [];
  private attachments: any[] = [];

  constructor(id: string) {
    this.id = id;
  }

  public moveTo(x: number, y: number) {
    this.points.push({ x, y });
    return this;
  }

  public lineTo(x: number, y: number) {
    this.points.push({ x, y });
    return this;
  }

  public up(y: number) {
    const p = this.last();
    return this.lineTo(p.x, p.y - y);
  }

  public down(y: number) {
    const p = this.last();
    return this.lineTo(p.x, p.y + y);
  }

  public left(x: number) {
    const p = this.last();
    return this.lineTo(p.x - x, p.y);
  }

  public right(x: number) {
    const p = this.last();
    return this.lineTo(p.x + x, p.y);
  }

  public last() {
    return this.points[this.points.length - 1];
  }

  private getTotalLength(): number {
    let len = 0;
    for (let i = 1; i < this.points.length; i++) {
      const a = this.points[i - 1];
      const b = this.points[i];

      len += Math.hypot(b.x - a.x, b.y - a.y);
    }

    return len;
  }

  private getPointAtPercent(t: number): Point {
    if(this.points.length === 0) {
        return { x: 0, y: 0 };
    }
    const length = this.getTotalLength();
    let target = length * t;
    let acc = 0;

    for (let i = 1; i < this.points.length; i++) {
      const a = this.points[i - 1];
      const b = this.points[i];

      const seg = Math.hypot(b.x - a.x, b.y - a.y);

      if (acc + seg >= target) {
        const ratio = (target - acc) / seg;

        return {
          x: a.x + (b.x - a.x) * ratio,
          y: a.y + (b.y - a.y) * ratio,
        };
      }
      acc += seg;
    }

    return this.points[this.points.length - 1];
  }

  public connect(path: PathBuilder, t: number) {
    const p = path.getPointAtPercent(t);
    if(this.points.length === 0) {
        this.moveTo(p.x, p.y);
    }
    else {
        this.lineTo(p.x, p.y);
    }
    return this;
  }

  public branch(t: number, fn: (b: PathBuilder) => void) {
    const p = this.getPointAtPercent(t);

    const b = new PathBuilder(`${this.id}-b${this.points.length}`);
    b.moveTo(p.x, p.y);

    fn(b);
    this.branches.push(b);
  }

  public addAttachment(shape: Attachment["shape"], t: number, label: Attachment["label"]) {
    this.attachments.push({ shape, pos: t, label });

    return this;
  }

  export(): DiagramBranch {
    return {
      id: this.id,
      points: this.points,
      attachments: this.attachments,
      branches: this.branches.map((b) => b.export()),
    };
  }
}
