module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function Home() {
    const [activeFlowId, setActiveFlowId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const substationData = [
        {
            points: [
                {
                    x: 50,
                    y: 20
                },
                {
                    x: 250,
                    y: 20
                }
            ],
            attachments: []
        },
        {
            id: "feeder-incomer",
            points: [
                {
                    x: 150,
                    y: 20
                },
                {
                    x: 150,
                    y: 180
                }
            ],
            attachments: [
                {
                    pos: 0.2,
                    shape: "switch",
                    color: "darkgreen",
                    size: 20,
                    label: "s1"
                },
                {
                    pos: 0.5,
                    shape: "ct",
                    color: "silver",
                    size: 25,
                    label: "CT1"
                },
                {
                    pos: 0.8,
                    shape: "cb",
                    color: "#c21d11",
                    size: 30,
                    label: "CB1"
                }
            ]
        },
        {
            id: "CT1-Merging1",
            points: [
                {
                    x: 150,
                    y: 100
                },
                {
                    x: 200,
                    y: 100
                },
                {
                    x: 200,
                    y: 80
                },
                {
                    x: 480,
                    y: 80
                }
            ],
            color: "blue",
            lineType: "dashed",
            attachments: [
                {
                    pos: 0.88,
                    shape: "merging",
                    color: "#3261e3",
                    size: 50,
                    label: "Merging"
                }
            ]
        },
        {
            id: "CB1-BAY1",
            points: [
                {
                    x: 150,
                    y: 148
                },
                {
                    x: 480,
                    y: 148
                }
            ],
            lineType: "dashed",
            color: "orange",
            attachments: [
                {
                    pos: 0.9,
                    shape: "bay",
                    color: "orange",
                    size: 50,
                    label: "Bay"
                }
            ]
        },
        {
            points: [
                {
                    x: 20,
                    y: 180
                },
                {
                    x: 280,
                    y: 180
                }
            ],
            attachments: []
        },
        {
            id: "left-transformer-path",
            points: [
                {
                    x: 40,
                    y: 180
                },
                {
                    x: 40,
                    y: 580
                }
            ],
            attachments: [
                {
                    pos: 0.08,
                    shape: "switch",
                    color: "darkgreen",
                    size: 20,
                    label: "s2"
                },
                {
                    pos: 0.2,
                    shape: "ct",
                    color: "silver",
                    size: 25,
                    label: "CT2"
                },
                {
                    pos: 0.3,
                    shape: "cb",
                    color: "#c21d11",
                    size: 30,
                    label: "CB2"
                },
                {
                    pos: 0.5,
                    shape: "transformer",
                    color: "black",
                    size: 20,
                    orientation: "vertical"
                },
                {
                    pos: 0.68,
                    shape: "ct",
                    color: "silver",
                    size: 25,
                    label: "CT3"
                },
                {
                    pos: 0.8,
                    shape: "cb",
                    color: "#c21d11",
                    size: 30,
                    label: "CB3"
                },
                {
                    pos: 0.9,
                    shape: "switch",
                    color: "darkgreen",
                    size: 20,
                    label: "s3"
                }
            ]
        },
        {
            id: "right-transformer-path",
            points: [
                {
                    x: 260,
                    y: 180
                },
                {
                    x: 260,
                    y: 580
                }
            ],
            attachments: [
                {
                    pos: 0.08,
                    shape: "switch",
                    color: "darkgreen",
                    size: 20,
                    label: "s5"
                },
                {
                    pos: 0.2,
                    shape: "ct",
                    color: "silver",
                    size: 25,
                    label: "CT2"
                },
                {
                    pos: 0.3,
                    shape: "cb",
                    color: "#c21d11",
                    size: 30,
                    label: "CB4"
                },
                {
                    pos: 0.5,
                    shape: "transformer",
                    color: "black",
                    size: 20,
                    orientation: "vertical"
                },
                {
                    pos: 0.68,
                    shape: "ct",
                    color: "silver",
                    size: 25,
                    label: "CT3"
                },
                {
                    pos: 0.8,
                    shape: "cb",
                    color: "#c21d11",
                    size: 30,
                    label: "CB5"
                },
                {
                    pos: 0.9,
                    shape: "switch",
                    color: "darkgreen",
                    size: 20,
                    label: "s6"
                }
            ]
        },
        {
            points: [
                {
                    x: 20,
                    y: 580
                },
                {
                    x: 280,
                    y: 580
                }
            ],
            attachments: [
                {
                    pos: 0.5,
                    shape: "cb",
                    color: "#c21d11",
                    size: 30,
                    label: "CB6"
                },
                {
                    pos: 0.25,
                    shape: "switch",
                    color: "darkgreen",
                    size: 20,
                    label: "s7"
                },
                {
                    pos: 0.75,
                    shape: "switch",
                    color: "darkgreen",
                    size: 20,
                    label: "s8"
                }
            ]
        },
        {
            points: [
                {
                    x: 30,
                    y: 580
                },
                {
                    x: 30,
                    y: 700
                }
            ],
            attachments: [
                {
                    pos: 0.2,
                    shape: "switch",
                    color: "darkgreen",
                    size: 20,
                    label: "s9"
                },
                {
                    pos: 0.5,
                    shape: "cb",
                    color: "#c21d11",
                    size: 30,
                    label: "CB7"
                },
                {
                    pos: 0.8,
                    shape: "ct",
                    color: "silver",
                    size: 25,
                    label: "CT6"
                }
            ]
        },
        {
            points: [
                {
                    x: 270,
                    y: 580
                },
                {
                    x: 270,
                    y: 700
                }
            ],
            attachments: [
                {
                    pos: 0.5,
                    shape: "cb",
                    color: "#c21d11",
                    size: 30,
                    label: "CB8"
                },
                {
                    pos: 0.2,
                    shape: "switch",
                    color: "darkgreen",
                    size: 20,
                    label: "s10"
                },
                {
                    pos: 0.8,
                    shape: "ct",
                    color: "silver",
                    size: 25,
                    label: "CT6"
                }
            ]
        },
        {
            id: "cb2-cb3",
            points: [
                {
                    x: 40,
                    y: 300
                },
                {
                    x: 330,
                    y: 300
                },
                {
                    x: 330,
                    y: 500
                },
                {
                    x: 40,
                    y: 500
                }
            ],
            color: "orange",
            lineType: "dashed",
            attachments: []
        },
        {
            id: "cb2-cb3",
            points: [
                {
                    x: 150,
                    y: 580
                },
                {
                    x: 150,
                    y: 500
                }
            ],
            color: "orange",
            lineType: "dashed",
            attachments: []
        },
        {
            points: [
                {
                    x: 480,
                    y: 20
                },
                {
                    x: 480,
                    y: 680
                }
            ],
            attachments: []
        },
        {
            points: [
                {
                    x: 40,
                    y: 240
                },
                {
                    x: 70,
                    y: 240
                }
            ],
            attachments: [
                {
                    pos: 1,
                    shape: "transformer",
                    color: "black",
                    size: 10,
                    orientation: "horizontal"
                }
            ]
        },
        {
            points: [
                {
                    x: 260,
                    y: 240
                },
                {
                    x: 290,
                    y: 240
                }
            ],
            attachments: [
                {
                    pos: 1,
                    shape: "transformer",
                    color: "black",
                    size: 10,
                    orientation: "horizontal"
                }
            ]
        },
        {
            id: "ct2-ct3",
            points: [
                {
                    x: 40,
                    y: 260
                },
                {
                    x: 80,
                    y: 260
                },
                {
                    x: 80,
                    y: 260
                },
                {
                    x: 80,
                    y: 280
                },
                {
                    x: 80,
                    y: 280
                },
                {
                    x: 360,
                    y: 280
                },
                {
                    x: 360,
                    y: 280
                },
                {
                    x: 360,
                    y: 430
                },
                {
                    x: 360,
                    y: 430
                },
                {
                    x: 80,
                    y: 430
                },
                {
                    x: 80,
                    y: 430
                },
                {
                    x: 80,
                    y: 450
                },
                {
                    x: 80,
                    y: 450
                },
                {
                    x: 40,
                    y: 450
                }
            ],
            lineType: "dashed",
            color: "blue"
        },
        {
            id: "ct2-ct3",
            lineType: "dashed",
            color: "blue",
            points: [
                {
                    x: 360,
                    y: 300
                },
                {
                    x: 480,
                    y: 300
                }
            ],
            attachments: [
                {
                    pos: 0.6,
                    shape: "merging",
                    color: "#3261e3",
                    size: 50,
                    label: "Merging"
                }
            ]
        },
        {
            id: "cb2-cb3",
            points: [
                {
                    x: 330,
                    y: 360
                },
                {
                    x: 480,
                    y: 360
                }
            ],
            lineType: "dashed",
            color: "orange",
            attachments: [
                {
                    pos: 0.7,
                    shape: "bay",
                    color: "orange",
                    size: 50,
                    label: "Bay"
                }
            ]
        },
        {
            points: [
                {
                    x: 20,
                    y: 640
                },
                {
                    x: 280,
                    y: 640
                }
            ],
            attachments: []
        },
        {
            points: [
                {
                    x: 280,
                    y: 640
                },
                {
                    x: 480,
                    y: 640
                }
            ],
            attachments: [
                {
                    pos: 0.7,
                    shape: "bay",
                    color: "orange",
                    size: 50,
                    label: "Bay"
                }
            ]
        },
        {
            points: [
                {
                    x: 650,
                    y: 20
                },
                {
                    x: 650,
                    y: 680
                }
            ],
            attachments: []
        },
        {
            points: [
                {
                    x: 480,
                    y: 114
                },
                {
                    x: 650,
                    y: 114
                }
            ],
            attachments: [
                {
                    pos: 0.5,
                    shape: "ied",
                    color: "#31ad11",
                    size: 70,
                    label: "IED-1"
                }
            ]
        },
        {
            points: [
                {
                    x: 480,
                    y: 330
                },
                {
                    x: 650,
                    y: 330
                }
            ],
            attachments: [
                {
                    pos: 0.5,
                    shape: "ied",
                    color: "#31ad11",
                    size: 70,
                    label: "IED-2"
                }
            ]
        },
        {
            points: [
                {
                    x: 480,
                    y: 600
                },
                {
                    x: 650,
                    y: 600
                }
            ],
            attachments: [
                {
                    pos: 0.5,
                    shape: "ied",
                    color: "#31ad11",
                    size: 70,
                    label: "IED-3"
                }
            ]
        },
        {
            points: [
                {
                    x: 650,
                    y: 114
                },
                {
                    x: 750,
                    y: 114
                }
            ],
            attachments: [
                {
                    pos: 1,
                    shape: "image",
                    url: "/pc.png",
                    color: "white",
                    size: 70
                }
            ]
        },
        {
            points: [
                {
                    x: 650,
                    y: 600
                },
                {
                    x: 900,
                    y: 600
                }
            ],
            attachments: [
                {
                    pos: 0.2,
                    shape: "image",
                    url: "/firewall.svg",
                    size: 70
                },
                {
                    pos: 0.5,
                    shape: "image",
                    url: "/loadDispatchCenter.jpg",
                    size: 70
                },
                {
                    pos: 0.8,
                    shape: "image",
                    url: "/firewall.svg",
                    size: 70
                }
            ]
        },
        {
            points: [
                {
                    x: 900,
                    y: 600
                },
                {
                    x: 900,
                    y: 300
                }
            ],
            attachments: [
                {
                    pos: 0.5,
                    shape: "image",
                    color: "white",
                    url: "/pc.png",
                    size: 70
                }
            ]
        },
        {
            points: [
                {
                    x: 900,
                    y: 300
                },
                {
                    x: 990,
                    y: 300
                }
            ],
            attachments: [
                {
                    pos: 0.9,
                    shape: "image",
                    color: "white",
                    url: "/cloud.png",
                    size: 70
                }
            ]
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-screen",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-grow overflow-auto p-4"
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 354,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-80 border-l border-slate-700 p-6 bg-slate-800",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xl font-bold mb-4",
                        children: "Operations"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 366,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setActiveFlowId("feeder-incomer"),
                                className: "w-full p-3 bg-emerald-600 hover:bg-emerald-500 rounded transition",
                                children: "Energize Feeder 1"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 368,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setActiveFlowId("main-transformer"),
                                className: "w-full p-3 bg-blue-600 hover:bg-blue-500 rounded transition",
                                children: "Route via Transformer"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 374,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setActiveFlowId("ct2-ct3"),
                                className: "w-full p-3 bg-blue-600 hover:bg-blue-500 rounded transition",
                                children: "CT2 - CT3 Flow"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 380,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setActiveFlowId("cb2-cb3"),
                                className: "w-full p-3 bg-blue-600 hover:bg-blue-500 rounded transition",
                                children: "CB2 - CB3 Flow"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 386,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setActiveFlowId(null),
                                className: "w-full p-3 bg-rose-600 hover:bg-rose-500 rounded transition",
                                children: "Clear All Animations"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 392,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 367,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 365,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 352,
        columnNumber: 5
    }, this);
}
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ("TURBOPACK compile-time truthy", 1) {
                module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)");
            } else //TURBOPACK unreachable
            ;
        } else //TURBOPACK unreachable
        ;
    }
} //# sourceMappingURL=module.compiled.js.map
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].React; //# sourceMappingURL=react.js.map
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__73ae023d._.js.map