(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function Home() {
    _s();
    const [activeFlowId, setActiveFlowId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-screen",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-grow overflow-auto p-4"
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 354,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-80 border-l border-slate-700 p-6 bg-slate-800",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xl font-bold mb-4",
                        children: "Operations"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 366,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setActiveFlowId("feeder-incomer"),
                                className: "w-full p-3 bg-emerald-600 hover:bg-emerald-500 rounded transition",
                                children: "Energize Feeder 1"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 368,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setActiveFlowId("main-transformer"),
                                className: "w-full p-3 bg-blue-600 hover:bg-blue-500 rounded transition",
                                children: "Route via Transformer"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 374,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setActiveFlowId("ct2-ct3"),
                                className: "w-full p-3 bg-blue-600 hover:bg-blue-500 rounded transition",
                                children: "CT2 - CT3 Flow"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 380,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setActiveFlowId("cb2-cb3"),
                                className: "w-full p-3 bg-blue-600 hover:bg-blue-500 rounded transition",
                                children: "CB2 - CB3 Flow"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 386,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
_s(Home, "WX/pmNdn7G6GCZYzoE+cJaFUWws=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
]);

//# sourceMappingURL=_a1b13bc1._.js.map