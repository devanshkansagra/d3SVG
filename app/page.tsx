"use client";
import React, { useState } from "react";
import { Diagram } from "@/components/Diagram";
import { DiagramBranch } from "@/definitions/DiagramBranch";

export default function Home() {
  const [activeFlowId, setActiveFlowId] = useState<string | null>(null);

  const substationData: DiagramBranch[] = [
    {
      points: [
        { x: 50, y: 20 },
        { x: 250, y: 20 },
      ],
      attachments: [],
    },
    {
      id: "feeder-incomer",
      points: [
        { x: 150, y: 20 },
        { x: 150, y: 180 },
      ],
      attachments: [
        { pos: 0.2, shape: "rect", color: "darkgreen", size: 20, label: "s1" },
        { pos: 0.5, shape: "circle", color: "silver", size: 25, label: "CT1" },
        { pos: 0.8, shape: "rect", color: "#c21d11", size: 30, label: "CB1" },
      ],
    },
    {
      id: "CT1-Merging1",
      points: [
        { x: 150, y: 100 },
        { x: 200, y: 100 },
        { x: 200, y: 80 },
        { x: 480, y: 80 },
      ],
      color: "blue",
      lineType: "dashed",
      attachments: [
        {
          pos: 0.88,
          shape: "rect",
          color: "#3261e3",
          size: 50,
          label: "Merging",
        },
      ],
    },
    {
      id: "CB1-BAY1",
      points: [
        { x: 150, y: 148 },
        { x: 480, y: 148 },
      ],
      lineType: "dashed",
      color: "orange",
      attachments: [
        { pos: 0.9, shape: "rect", color: "orange", size: 50, label: "Bay" },
      ],
    },
    {
      points: [
        { x: 20, y: 180 },
        { x: 280, y: 180 },
      ],
      attachments: [],
    },
    {
      id: "left-transformer-path",
      points: [
        { x: 40, y: 180 },
        { x: 40, y: 580 },
      ],
      attachments: [
        { pos: 0.08, shape: "rect", color: "darkgreen", size: 20, label: "s2" },
        { pos: 0.2, shape: "circle", color: "silver", size: 25, label: "CT2" },
        { pos: 0.3, shape: "rect", color: "#c21d11", size: 30, label: "CB2" },
        {
          pos: 0.5,
          shape: "transformer",
          color: "black",
          size: 20,
          orientation: "vertical",
        },
        { pos: 0.68, shape: "circle", color: "silver", size: 25, label: "CT3" },
        { pos: 0.8, shape: "rect", color: "#c21d11", size: 30, label: "CB3" },
        { pos: 0.9, shape: "rect", color: "darkgreen", size: 20, label: "s3" },
      ],
    },
    {
      id: "right-transformer-path",
      points: [
        { x: 260, y: 180 },
        { x: 260, y: 580 },
      ],
      attachments: [
        { pos: 0.08, shape: "rect", color: "darkgreen", size: 20, label: "s5" },
        { pos: 0.2, shape: "circle", color: "silver", size: 25, label: "CT2" },
        { pos: 0.3, shape: "rect", color: "#c21d11", size: 30, label: "CB4" },
        {
          pos: 0.5,
          shape: "transformer",
          color: "black",
          size: 20,
          orientation: "vertical",
        },
        { pos: 0.68, shape: "circle", color: "silver", size: 25, label: "CT3" },
        { pos: 0.8, shape: "rect", color: "#c21d11", size: 30, label: "CB5" },
        { pos: 0.9, shape: "rect", color: "darkgreen", size: 20, label: "s6" },
      ],
    },
    {
      points: [
        { x: 20, y: 580 },
        { x: 280, y: 580 },
      ],
      attachments: [
        { pos: 0.5, shape: "rect", color: "#c21d11", size: 30, label: "CB6" },
        { pos: 0.25, shape: "rect", color: "darkgreen", size: 20, label: "s7" },
        { pos: 0.75, shape: "rect", color: "darkgreen", size: 20, label: "s8" },
      ],
    },
    {
      points: [
        { x: 30, y: 580 },
        { x: 30, y: 700 },
      ],
      attachments: [
        { pos: 0.2, shape: "rect", color: "darkgreen", size: 20, label: "s9" },
        { pos: 0.5, shape: "rect", color: "#c21d11", size: 30, label: "CB7" },
        { pos: 0.8, shape: "circle", color: "silver", size: 25, label: "CT6" },
      ],
    },
    {
      points: [
        { x: 270, y: 580 },
        { x: 270, y: 700 },
      ],
      attachments: [
        { pos: 0.5, shape: "rect", color: "#c21d11", size: 30, label: "CB8" },
        { pos: 0.2, shape: "rect", color: "darkgreen", size: 20, label: "s10" },
        { pos: 0.8, shape: "circle", color: "silver", size: 25, label: "CT6" },
      ],
    },
    {
      id: "cb2-cb3",
      points: [
        { x: 40, y: 300 },
        { x: 330, y: 300 },
        { x: 330, y: 500 },
        { x: 40, y: 500 },
      ],
      color: "orange",
      lineType: "dashed",
      attachments: [],
    },
    {
      id: "cb2-cb3",
      points: [
        { x: 150, y: 580 },
        { x: 150, y: 500 },
      ],
      color: "orange",
      lineType: "dashed",
      attachments: [],
    },
    {
      points: [
        { x: 480, y: 20 },
        { x: 480, y: 680 },
      ],
      attachments: [],
    },
    {
      points: [
        { x: 40, y: 240 },
        { x: 70, y: 240 },
      ],
      attachments: [
        {
          pos: 1,
          shape: "transformer",
          color: "black",
          size: 10,
          orientation: "horizontal",
        },
      ],
    },
    {
      points: [
        { x: 260, y: 240 },
        { x: 290, y: 240 },
      ],
      attachments: [
        {
          pos: 1,
          shape: "transformer",
          color: "black",
          size: 10,
          orientation: "horizontal",
        },
      ],
    },
    {
      id: "ct2-ct3",
      points: [
        { x: 40, y: 260 },
        { x: 80, y: 260 },
        { x: 80, y: 260 },
        { x: 80, y: 280 },
        { x: 80, y: 280 },
        { x: 360, y: 280 },
        { x: 360, y: 280 },
        { x: 360, y: 430 },
        { x: 360, y: 430 },
        { x: 80, y: 430 },
        { x: 80, y: 430 },
        { x: 80, y: 450 },
        { x: 80, y: 450 },
        { x: 40, y: 450 },
      ],
      lineType: "dashed",
      color: "blue",
    },
    {
      id: "ct2-ct3",
      lineType: "dashed",
      color: "blue",
      points: [
        { x: 360, y: 300 }, // Start exactly where the T-junction should be
        { x: 480, y: 300 }, // Move to the Merging Unit
      ],
      attachments: [
        {
          pos: 0.6,
          shape: "rect",
          color: "#3261e3",
          size: 50,
          label: "Merging",
        },
      ],
    },
    {
      id: "cb2-cb3",
      points: [
        { x: 330, y: 360 },
        { x: 480, y: 360 },
      ],
      lineType: "dashed",
      color: "orange",
      attachments: [
        { pos: 0.7, shape: "rect", color: "orange", size: 50, label: "Bay" },
      ],
    },
    {
      points: [
        { x: 20, y: 640 },
        { x: 280, y: 640 },
      ],
      attachments: [],
    },
    {
      points: [
        { x: 280, y: 640 },
        { x: 480, y: 640 },
      ],
      attachments: [
        { pos: 0.7, shape: "rect", color: "orange", size: 50, label: "Bay" },
      ],
    },
    {
      points: [
        { x: 650, y: 20 },
        { x: 650, y: 680 },
      ],
      attachments: [],
    },
    {
      points: [
        { x: 480, y: 114 },
        { x: 650, y: 114 },
      ],
      attachments: [
        { pos: 0.5, shape: "rect", color: "#31ad11", size: 70, label: "IED-1" },
      ],
    },
    {
      points: [
        { x: 480, y: 330 },
        { x: 650, y: 330 },
      ],
      attachments: [
        { pos: 0.5, shape: "rect", color: "#31ad11", size: 70, label: "IED-2" },
      ],
    },
    {
      points: [
        { x: 480, y: 600 },
        { x: 650, y: 600 },
      ],
      attachments: [
        { pos: 0.5, shape: "rect", color: "#31ad11", size: 70, label: "IED-3" },
      ],
    },
    {
      points: [
        { x: 650, y: 114 },
        { x: 750, y: 114 },
      ],
      attachments: [
        { pos: 1, shape: "image", url: "/pc.png", color: "white", size: 70 },
      ],
    },
    {
      points: [
        { x: 650, y: 600 },
        { x: 900, y: 600 },
      ],
      attachments: [
        { pos: 0.2, shape: "image", url: "/firewall.svg", size: 70 },
        { pos: 0.5, shape: "image", url: "/loadDispatchCenter.jpg", size: 70 },
        { pos: 0.8, shape: "image", url: "/firewall.svg", size: 70 },
      ],
    },
    {
      points: [
        { x: 900, y: 600 },
        { x: 900, y: 300 },
      ],
      attachments: [
        { pos: 0.5, shape: "image", color: "white", url: "/pc.png", size: 70 },
      ],
    },
    {
      points: [
        { x: 900, y: 300 },
        { x: 990, y: 300 },
      ],
      attachments: [
        {
          pos: 0.9,
          shape: "image",
          color: "white",
          url: "/cloud.png",
          size: 70,
        },
      ],
    },
  ];

  return (
    <div className="flex h-screen">
      {/* LEFT SIDE: DIAGRAM */}
      <div className="flex-grow overflow-auto p-4">
        <Diagram
          data={substationData}
          width={1500}
          height={1000}
          activeId={activeFlowId}
          stroke="gray"
        />
      </div>

      {/* RIGHT SIDE: OPERATIONS */}
      <div className="w-80 border-l border-slate-700 p-6 bg-slate-800">
        <h2 className="text-xl font-bold mb-4">Operations</h2>
        <div className="space-y-3">
          <button
            onClick={() => setActiveFlowId("feeder-incomer")}
            className="w-full p-3 bg-emerald-600 hover:bg-emerald-500 rounded transition"
          >
            Energize Feeder 1
          </button>
          <button
            onClick={() => setActiveFlowId("main-transformer")}
            className="w-full p-3 bg-blue-600 hover:bg-blue-500 rounded transition"
          >
            Route via Transformer
          </button>
          <button
            onClick={() => setActiveFlowId("ct2-ct3")}
            className="w-full p-3 bg-blue-600 hover:bg-blue-500 rounded transition"
          >
            CT2 - CT3 Flow
          </button>
          <button
            onClick={() => setActiveFlowId("cb2-cb3")}
            className="w-full p-3 bg-blue-600 hover:bg-blue-500 rounded transition"
          >
            CB2 - CB3 Flow
          </button>
          <button
            onClick={() => setActiveFlowId(null)}
            className="w-full p-3 bg-rose-600 hover:bg-rose-500 rounded transition"
          >
            Clear All Animations
          </button>
        </div>
      </div>
    </div>
  );
}
