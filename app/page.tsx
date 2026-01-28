"use client"
import { Canvas } from "@/lib/Canvas";
import { Diagram } from "@/components/Diagram";
import { CanvasProperties } from "@/definitions/CanvasProperties";
import { PathBuilder } from "@/lib/PathBuilder";
import { Point } from "@/definitions/Point";
import { useState } from 'react';

export default function Home() {

  const canvas = new Canvas({
    width: 1000,
    height: 800,
    stroke: "gray",
    activeId: "",
  } as CanvasProperties);

  const line1 = canvas.createPath("L1");
  const line2 = canvas.createPath("L2");
  const line3 = canvas.createPath("L3");
  const line4 = canvas.createPath("L4");
  const line5 = canvas.createPath("L5");
  const line6 = canvas.createPath("L6");
  const line7 = canvas.createPath("L7");

  const outsider = canvas.addAttachment("image", 950, 550, {
    url: "/outsider.png",
    size: 60,
  });
  const insider = canvas.addAttachment("image", 750, 300, {
    url: "/insider.png",
    size: 60,
  });

  const laptop = canvas.addAttachment("image", 650, 400, {
    url: "/laptop.png",
    size: 60,
  });

  let p: Point = { x: 0, y: 0 };
  let cb: Point = { x: 0, y: 0 };
  let pc: Point = {x: 0, y: 0};
  let pc2: Point = {x: 0, y: 0};

  line2.moveTo(20, 160).right(300);
  line3.moveTo(20, 580).right(300);
  line1.moveTo(50, 30).right(250);
  line5.moveTo(600, 20).down(710);
  line4.moveTo(440, 20).down(710);

  line1.branch(0.5, (b) => {
    b.down(130).connect(line2, 0.5);
    b.addAttachment("switch", 0.2, { label: "s1", orientation: "vertical" });
    b.addAttachment("cb", 0.5, { label: "CB1" });
    b.addAttachment("switch", 0.8, { label: "s2", orientation: "vertical" });
  });

  line2.branch(0.1, (b) => {
    b.down(300).connect(line3, 0.1);
    b.branch(0.15, (sub) => {
      sub.right(30).addAttachment("transformer", 1, {
        orientation: "horizontal",
        label: "",
      });
    });
    b.addAttachment("ct", 0.25, { label: "CT2" });
    b.addAttachment("cb", 0.4, { label: "CB2" });
    b.addAttachment("cb", 0.8, { label: "CB3" });
    b.addAttachment("switch", 0.06, { label: "s3", orientation: "vertical" });
    b.addAttachment("ct", 0.7, { label: "CT3" });
    b.addAttachment("transformer", 0.55, {
      label: "",
      orientation: "vertical",
      size: 15,
    });
    b.addAttachment("switch", 0.9, { label: "s4", orientation: "vertical" });
    b.branch(0.75, (sub) => {
      sub.right(30).addAttachment("transformer", 1, {
        label: "",
        orientation: "horizontal",
        size: 8,
      });
    });

    p = b.getPointAtPercent(0.25);
    cb = b.getPointAtPercent(0.4);
  });

  line2.branch(0.9, (b) => {
    b.down(300).connect(line3, 0.9);
    b.branch(0.15, (sub) => {
      sub.right(30).addAttachment("transformer", 1, {
        orientation: "horizontal",
        size: 8,
      });
    });
    b.addAttachment("ct", 0.25, { label: "CT2" });
    b.addAttachment("cb", 0.4, { label: "CB4" });
    b.addAttachment("cb", 0.8, { label: "CB5" });
    b.addAttachment("switch", 0.06, { label: "s5", orientation: "vertical" });
    b.addAttachment("ct", 0.7, { label: "CT3" });
    b.addAttachment("transformer", 0.55, {
      label: "",
      orientation: "vertical",
      size: 15,
    });
    b.addAttachment("switch", 0.9, { label: "s6", orientation: "vertical" });
    b.branch(0.75, (sub) => {
      sub.right(30).addAttachment("transformer", 1, {
        orientation: "horizontal",
        size: 8,
      });
    });
  });

  line3.addAttachment("cb", 0.5, { label: "CB6" });
  line3.addAttachment("switch", 0.3, { label: "s7" });
  line3.addAttachment("switch", 0.7, { label: "s8" });

  line3.branch(0.05, (b) => {
    b.down(150);
    b.addAttachment("switch", 0.2, { label: "s9", orientation: "vertical" });
    b.addAttachment("cb", 0.45, { label: "CB7" });
    b.branch(0.6, (sub) => {
      sub.right(30).addAttachment("transformer", 1, {
        orientation: "horizontal",
        size: 7,
      });
    });
    b.addAttachment("ct", 0.75, { label: "CT" });
  });

  line3.branch(0.95, (b) => {
    b.down(150);
    b.addAttachment("switch", 0.2, { label: "s10", orientation: "vertical" });
    b.addAttachment("cb", 0.45, { label: "CB8" });
    b.branch(0.6, (sub) => {
      sub.right(30).addAttachment("transformer", 1, {
        orientation: "horizontal",
        size: 7,
      });
    });
    b.addAttachment("ct", 0.75, { label: "CT" });
  });

  line4.branch(0.1, (b) => {
    b.connect(line5, 0.1).addAttachment("ied", 0.5, { label: "IED-1" });
  });
  line4.branch(0.5, (b) => {
    b.connect(line5, 0.5).addAttachment("ied", 0.5, { label: "IED-2" });
  });
  line4.branch(0.9, (b) => {
    b.connect(line5, 0.9).addAttachment("ied", 0.5, { label: "IED-3" });
  });

  line4.branch(0.05, (b) => {
    b.left(40).addAttachment("merging", 1, {
      label: "Merging",
    });
  });
  line4.branch(0.15, (b) => {
    b.left(40).addAttachment("bay", 1, {
      label: "Bay",
    });
  });
  line4.branch(0.45, (b) => {
    b.left(40).addAttachment("merging", 1, {
      label: "Merging",
    });
  });
  line4.branch(0.55, (b) => {
    b.left(40).addAttachment("bay", 1, {
      label: "Bay",
    });
  });
  line4.branch(0.85, (b) => {
    b.left(40).addAttachment("bay", 1, {
      label: "Bay Control",
      color: "black",
    });
  });
  line4.branch(0.95, (b) => {
    b.left(40).addAttachment("merging", 1, {
      label: "Merging",
    });
  });

  line5.branch(0.2, (b) => {
    b.right(70).addAttachment("image", 1, {
      color: "white",
      url: "/pc.png",
      size: 70,
    });

    pc = b.getPointAtPercent(1)
  });
  line5.branch(0.8, (b) => {
    b.right(250)
      .addAttachment("image", 0.25, {
        color: "white",
        url: "/firewall.png",
        size: 50,
      })
      .addAttachment("image", 0.6, {
        color: "white",
        url: "/loadDispatchCenter.jpg",
        size: 60,
      })
      .addAttachment("image", 0.88, {
        color: "white",
        url: "/firewall.png",
        size: 50,
      });

    b.branch(1, (b) => {
      b.up(300);
      b.addAttachment("image", 0.5, {
        size: 70,
        url: "/pc.png",
      });
      pc2 = b.getPointAtPercent(0.5);
      b.branch(1, (b) => {
        b.right(50).addAttachment("image", 1, {
          size: 60,
          url: "/cloud.png",
        });
      });
    });
  });

  line6
    .moveTo(p.x, p.y)
    .right(30)
    .up(40)
    .down(40)
    .right(240)
    .up(40)
    .down(40)
    .right(10)
    .down(75)
    .right(50)
    .left(50)
    .down(116)
    .left(280);

  line7
    .moveTo(cb.x, cb.y)
    .right(300)
    .down(85)
    .right(50)
    .left(50)
    .down(80)
    .left(300)
    .branch(0.86, (b) => b.connect(line3, 0.5));

    canvas.addLink(insider, pc, "red");
    canvas.addLink(insider, {x: 650, y: 400}, "red");

    canvas.addLink(outsider, pc2, "red");

  return <Diagram canvas={canvas.toJSON()} />;
}
