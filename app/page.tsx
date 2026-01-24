import { Canvas } from "@/lib/Canvas";
import { Diagram } from "@/components/Diagram";
import { CanvasProperties } from "@/definitions/CanvasProperties";

export default function Home() {
  const canvas = new Canvas({
    width: 1000,
    height: 800,
    stroke: "gray",
    activeId: "a",
  } as CanvasProperties);

  const line1 = canvas.createPath("L1");
  const line2 = canvas.createPath("L2");
  const line3 = canvas.createPath("L3");
  const line4 = canvas.createPath("L4");
  const line5 = canvas.createPath("L5");

  line2.moveTo(20, 160).right(260);
  line3.moveTo(20, 580).right(260);

  line1.moveTo(50, 30).right(200);

  line1.branch(0.5, (b) => {
    b.down(130).connect(line2, 0.5);
    b.addAttachment("switch", 0.2, "");
    b.addAttachment("cb", 0.5, "");
    b.addAttachment("switch", 0.8, "");
  });

  line2.branch(0.1, (b) => {
    b.down(300).connect(line3, 0.1);
    b.addAttachment("cb", 0.2, "");
    b.addAttachment("cb", 0.8, "");
  });

  line2.branch(0.9, (b) => {
    b.down(300).connect(line3, 0.9);
    b.addAttachment("cb", 0.2, "");
    b.addAttachment("cb", 0.8, "");
  });

  line3.addAttachment("cb", 0.5, "");
  line3.addAttachment("switch", 0.3, "");
  line3.addAttachment("switch", 0.7, "");

  line3.branch(0.05, (b) => b.down(150));
  line3.branch(0.95, (b) => b.down(150));

  line5.moveTo(550, 20).down(540);

  line4.moveTo(390, 20).down(540);

  line4.branch(0.1, (b) => {
    b.connect(line5, 0.1).addAttachment("ied", 0.5, "");
  });

  line4.branch(0.5, (b) => {
    b.connect(line5, 0.5).addAttachment("ied", 0.5, "");
  });

  line4.branch(0.9, (b) => {
    b.connect(line5, 0.9).addAttachment("ied", 0.5, "");
  });

  return <Diagram canvas={canvas.toJSON()} />;
}
