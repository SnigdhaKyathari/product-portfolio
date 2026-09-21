(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/content.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function Home() {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            // Populate rail navigation
            const rail = document.getElementById('rail');
            if (!rail) return;
            const sections = [
                'intro',
                'projects',
                'experience',
                'education',
                'skills'
            ];
            const labels = [
                'Intro',
                '01 Projects',
                '02 Experience',
                '03 Education',
                '04 Skills'
            ];
            rail.innerHTML = sections.map({
                "Home.useEffect": (id, i)=>`<a href="#${id}" class="rail-link" data-section="${id}">
            <span class="tick"></span>${labels[i]}
          </a>`
            }["Home.useEffect"]).join('');
            // Scroll spy
            const handleScroll = {
                "Home.useEffect.handleScroll": ()=>{
                    const scrollMargin = window.innerHeight * 0.12 + 78;
                    let currentSection = sections[0];
                    for (const id of sections){
                        const el = document.getElementById(id);
                        if (el && el.getBoundingClientRect().top <= scrollMargin) {
                            currentSection = id;
                        }
                    }
                    document.querySelectorAll('.rail-link').forEach({
                        "Home.useEffect.handleScroll": (link)=>{
                            link.classList.toggle('active', link.getAttribute('data-section') === currentSection);
                        }
                    }["Home.useEffect.handleScroll"]);
                }
            }["Home.useEffect.handleScroll"];
            window.addEventListener('scroll', handleScroll, {
                passive: true
            });
            handleScroll();
            return ({
                "Home.useEffect": ()=>window.removeEventListener('scroll', handleScroll)
            })["Home.useEffect"];
        }
    }["Home.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "intro",
                className: "hero reveal in",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hero-top",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                className: "photo",
                                src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PROFILE"].photo,
                                alt: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PROFILE"].name,
                                loading: "eager"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 53,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    flex: 1,
                                    minWidth: '260px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PROFILE"].name
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 55,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "kicker",
                                        dangerouslySetInnerHTML: {
                                            __html: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PROFILE"].kicker
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 56,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "avail",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "pulse"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 58,
                                                columnNumber: 15
                                            }, this),
                                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PROFILE"].availability
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 57,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 54,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PROFILE"].lede.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "lede",
                                dangerouslySetInnerHTML: {
                                    __html: p
                                }
                            }, i, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 65,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "chips",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PROFILE"].chips.map((chip, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "chip",
                                dangerouslySetInnerHTML: {
                                    __html: chip
                                }
                            }, i, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 70,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "introlinks",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                className: "tl primary",
                                href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PROFILE"].linkedin,
                                target: "_blank",
                                rel: "noopener",
                                children: "Let's connect on LinkedIn →        "
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 74,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                className: "tl",
                                href: `mailto:${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PROFILE"].email}`,
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PROFILE"].email
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 77,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                className: "tl",
                                href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PROFILE"].substack,
                                target: "_blank",
                                rel: "noopener",
                                children: "I write on Substack ↗"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 80,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 73,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "projects",
                style: {
                    paddingBottom: '72px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "sechead",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "num",
                                children: "01"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 89,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: "Projects"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 90,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 88,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "cards",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PROJECTS"].map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: `/work/${p.slug}`,
                                className: "card reveal",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "shot",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: p.cover,
                                            alt: p.name,
                                            loading: "lazy"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 96,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 95,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "body",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "tagrow",
                                                children: p.tags.map((tag, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `tag ${i > 0 ? 'muted' : ''}`,
                                                                children: tag
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 102,
                                                                columnNumber: 23
                                                            }, this),
                                                            i < p.tags.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "tag sep",
                                                                children: "/"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 103,
                                                                columnNumber: 49
                                                            }, this)
                                                        ]
                                                    }, i, true, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 101,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 99,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                children: p.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 107,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                dangerouslySetInnerHTML: {
                                                    __html: p.glimpse
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 108,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "cardfoot",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "cta",
                                                        children: "Read case study →"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 110,
                                                        columnNumber: 19
                                                    }, this),
                                                    p.live && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "cta ghost",
                                                        children: [
                                                            p.liveLabel || 'Visit site',
                                                            " ↗"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 111,
                                                        columnNumber: 30
                                                    }, this),
                                                    p.video && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "cta ghost",
                                                        children: "Demo video"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 112,
                                                        columnNumber: 31
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 109,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 98,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, p.slug, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 94,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 92,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 87,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "experience",
                style: {
                    paddingBottom: '72px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "sechead",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "num",
                                children: "02"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 123,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: "Experience"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 124,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 122,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "xp",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EXPERIENCE"].map((job, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "job reveal",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jobL",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "logo",
                                                style: {
                                                    background: job.bg
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: job.logo,
                                                    alt: job.co
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 131,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 130,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "co",
                                                children: job.co
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 133,
                                                columnNumber: 17
                                            }, this),
                                            job.unit && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "unit",
                                                children: job.unit
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 134,
                                                columnNumber: 30
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "rl",
                                                children: job.role
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 135,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "wh",
                                                children: [
                                                    job.when,
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 138,
                                                        columnNumber: 19
                                                    }, this),
                                                    job.loc
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 136,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 129,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jobR",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "story",
                                                dangerouslySetInnerHTML: {
                                                    __html: job.story
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 143,
                                                columnNumber: 17
                                            }, this),
                                            job.win && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "win",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "big",
                                                        children: job.win.big
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 146,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "txt",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "lab",
                                                                children: job.win.lab
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 148,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                dangerouslySetInnerHTML: {
                                                                    __html: job.win.p
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 149,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 147,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 145,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                children: job.bullets.map((bullet, j)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        dangerouslySetInnerHTML: {
                                                            __html: bullet
                                                        }
                                                    }, j, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 155,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 153,
                                                columnNumber: 17
                                            }, this),
                                            job.photo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
                                                className: "jobphoto",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: job.photo.src,
                                                        alt: "",
                                                        loading: "lazy"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 160,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("figcaption", {
                                                        children: job.photo.cap
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 161,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 159,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 142,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, i, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 128,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 126,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "sechead",
                        style: {
                            marginTop: '44px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "num",
                                children: "02b"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 170,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: "Awards"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 171,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 169,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "awards",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AWARDS"].map((award, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `award reveal ${award.photo ? 'withphoto' : ''}`,
                                children: [
                                    award.photo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "aw-ph",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: award.photo,
                                            alt: "",
                                            loading: "lazy",
                                            style: {
                                                objectPosition: award.pos || 'center'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 178,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 177,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "aw-body",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "wh",
                                                children: award.w
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 182,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                children: award.t
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 183,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                dangerouslySetInnerHTML: {
                                                    __html: award.d
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 184,
                                                columnNumber: 17
                                            }, this),
                                            award.link && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                className: "lk",
                                                href: award.link,
                                                target: "_blank",
                                                rel: "noopener",
                                                children: [
                                                    award.linkLabel,
                                                    " ↗"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 186,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 181,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, i, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 175,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 173,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 121,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "education",
                style: {
                    paddingBottom: '72px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "sechead",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "num",
                                children: "03"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 199,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: "Education"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 200,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 198,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "edu reveal",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EDUCATION"].map((ed, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "ed",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "logo",
                                        style: {
                                            background: ed.bg
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: ed.logo,
                                            alt: ed.s
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 206,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 205,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "t",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                children: ed.s
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 209,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: ed.d
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 210,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 208,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "eduright",
                                        children: [
                                            ed.loc && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "eduloc",
                                                children: ed.loc
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 213,
                                                columnNumber: 28
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "when",
                                                children: ed.w
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 214,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 212,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, i, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 204,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 202,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 197,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "skills",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "sechead",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "num",
                                children: "04"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 224,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: "Skills"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 225,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 223,
                        columnNumber: 9
                    }, this),
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SKILLS"].map((skillGroup, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "skillgroup reveal",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    children: skillGroup[0]
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 229,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "pills",
                                    children: (Array.isArray(skillGroup[1]) ? skillGroup[1] : []).map((skill, j)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "pill",
                                            children: skill
                                        }, j, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 232,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 230,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, i, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 228,
                            columnNumber: 11
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 222,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
}
_s(Home, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/content.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// content.ts — all portfolio copy and data in one place.
// Edit this file to change the site. Nothing else needs touching for a copy change.
// HTML entities (&#163;, &#8594;, &#8322;) and inline <strong>/<em> tags are intentional:
// render these strings with dangerouslySetInnerHTML.
__turbopack_context__.s([
    "AWARDS",
    ()=>AWARDS,
    "EDUCATION",
    ()=>EDUCATION,
    "EXPERIENCE",
    ()=>EXPERIENCE,
    "PROFILE",
    ()=>PROFILE,
    "PROJECTS",
    ()=>PROJECTS,
    "SKILLS",
    ()=>SKILLS
]);
const PROFILE = {
    name: "Snigdha Kyathari",
    kicker: "product manager &#183; 0 to 1 builder &#183; z&#252;rich",
    availability: "Open to Product Manager roles in Switzerland",
    lede: [
        "I build and own products end to end, from understanding the problem and shaping the solution to working with stakeholders and making data-driven decisions. With a background in software engineering and an MBA, I enjoy connecting technology, customer needs, and business impact.",
        "Based in Z&#252;rich with full work authorisation, I'm looking to apply my experience in a Product Manager role."
    ],
    chips: [
        "<b>Imperial MBA</b> 2026",
        "Exchange &#183; <b>Univ. of St.Gallen</b>",
        "<b>6 yrs</b> at Amazon",
        "Z&#252;rich &#183; <b>Swiss B permit</b>"
    ],
    photo: "/headshot.jpg",
    email: "snigdha.kyathari@gmail.com",
    linkedin: "https://www.linkedin.com/in/snigdha-kyathari",
    substack: "https://snigdhakyathari.substack.com/"
};
const PROJECTS = [
    {
        slug: "flowstate",
        name: "FlowState",
        tags: [
            "Health-tech",
            "0 to 1",
            "Co-founder"
        ],
        cover: "projects/flowstate-cover.jpg",
        glimpse: "100+ discovery interviews turned into a validated MVP for perimenopause support. I built and shipped the website end to end (UI, backend, database) and onboarded the first 24 beta users.",
        live: "https://flowstatewomen.lovable.app/",
        sub: "A perimenopause support venture I co-founded during my MBA, and the first product I owned from the first interview to the first beta user.",
        facts: [
            [
                "Role",
                "Co-founder and founding PM"
            ],
            [
                "Duration",
                "Jan to Jun 2026"
            ],
            [
                "Team",
                "5 (Imperial, RCA)"
            ],
            [
                "Stage",
                "MVP shipped, beta running"
            ]
        ],
        blocks: [
            {
                h: "Context",
                p: [
                    "Perimenopause is the multi-year transition into menopause, and it is not a niche. Roughly <strong>8.5 million women in the UK</strong> are in it at any moment, about one in four. <strong>77%</strong> find at least one symptom very difficult to manage, <strong>84%</strong> say it affects them at work, and <strong>60,000+</strong> women leave the UK workforce solely because of peri and menopause symptoms.",
                    "We started FlowState as an MBA venture. I took the product: discovery, scoping, and the build."
                ]
            },
            {
                h: "The problem we actually found",
                p: [
                    "Our first assumption was that women lacked products. That was wrong. The shelves are full. What they lacked was any way to know whether something was working.",
                    "The same loop came back in interview after interview. Google the symptoms, see a GP, get dismissed or handed an HRT leaflet, buy something from Holland &amp; Barrett or Amazon, receive no feedback of any kind, churn, still searching. Every step cost money and returned no information."
                ],
                pull: "The market was not short of products. It was short of feedback."
            },
            {
                h: "Evidence",
                p: [
                    "I ran and synthesised <strong>100+ discovery interviews</strong> into an end to end customer journey and a set of symptom clusters. Clustering mattered more than it sounds. It turned an unmanageable list of a dozen symptoms into four or five groups a product could be built around, and it gave us a way to segment without asking women to self diagnose."
                ]
            },
            {
                h: "Decisions and tradeoffs",
                decisions: [
                    {
                        h: "Launch one symptom cluster, not a catalogue",
                        p: "We shipped only the Sleep and Cooling box. Sleep disruption is near universal in perimenopause, the most acutely distressing, and acute discomfort translates most directly into willingness to pay.",
                        t: "<b>Tradeoff:</b> a much smaller addressable slice at launch, and we turned away early interest from women whose primary cluster was mood or bloating."
                    },
                    {
                        h: "Sell the check-in, not the products",
                        p: "The box is the delivery mechanism. The weekly symptom check-in is the product. It is the only part that closes the feedback loop the journey map exposed, and the only part a competitor cannot replicate by sourcing the same supplements.",
                        t: "<b>Tradeoff:</b> a harder pitch than a subscription box, and it puts retention on our ability to make tracking feel worth the two minutes."
                    },
                    {
                        h: "Build the MVP myself with AI-assisted coding",
                        p: "Rather than wait on budget or an engineer, I built the UI, backend and database myself. Six years of shipping at Amazon meant the constraint was time, not capability.",
                        t: "<b>Tradeoff:</b> I own the maintenance, and some of it will need rewriting if the beta works."
                    },
                    {
                        h: "Deliberately under-build the infrastructure",
                        p: "I used product analytics to right-size for a low traffic beta instead of provisioning for scale we did not have. The instinct from Amazon was to build for peak. The right call here was the opposite.",
                        t: "<b>Tradeoff:</b> a real migration cost if adoption spikes, accepted knowingly."
                    }
                ]
            },
            {
                h: "What shipped",
                p: [
                    "A website with an onboarding quiz, ordering and a weekly check-in flow. The Sleep and Cooling box, sourced and assembled: magnesium glycinate, cooling pillow mist, herbal tea, silk eye mask, gel patches, lavender roll-on, sleep journal and nutrition guide. A monthly group call with a nutritionist. Three tiers at &#163;35, &#163;49 and &#163;79 a month on a hybrid subscription and single box model, so first time buyers are not forced into a commitment before the product has earned it."
                ]
            },
            {
                h: "Where it got to",
                p: [
                    "<strong>24 beta users onboarded</strong> and <strong>18 waitlist sign-ups</strong> ahead of the beta. Success criteria were set in advance: at least 70% of beta users using the products weekly, at least one self-reported symptom improvement, five detailed testimonials, and a referral or subscription purchase."
                ],
                facts2: [
                    [
                        "24",
                        "beta users onboarded"
                    ],
                    [
                        "18",
                        "beta waitlist sign-ups"
                    ],
                    [
                        "100+",
                        "discovery interviews"
                    ],
                    [
                        "&#163;47",
                        "expected AOV"
                    ]
                ]
            },
            {
                h: "What I would do differently",
                p: [
                    "I would have tested willingness to pay before sourcing a single physical product. We validated the problem thoroughly and the price point barely at all. The three tiers came from unit economics and competitor benchmarks, not from anyone agreeing to pay them.",
                    "I would also have shipped the check-in as a standalone before the box. It is the defensible half, it needs no fulfilment, and we could have learned whether women will log symptoms weekly months earlier and for almost nothing."
                ]
            }
        ]
    },
    {
        slug: "reframe",
        name: "Reframe",
        tags: [
            "Media and public discourse",
            "BBC-sponsored",
            "Pilot"
        ],
        cover: "projects/reframe-cover.jpg",
        glimpse: "A BBC-sponsored project on improving public discourse. We killed our first solution after 75+ interviews and rebuilt around what people were actually doing, which was withdrawing. A two-week pilot with 112 students followed.",
        video: {
            src: "video/reframe-demo.mp4",
            poster: "video/reframe-demo-poster.jpg"
        },
        sub: "A BBC-sponsored project on public discourse, and the clearest example I have of killing my own team's solution when the evidence did not support it.",
        facts: [
            [
                "My role",
                "Problem identification, solutioning, product specs"
            ],
            [
                "Sponsor",
                "BBC"
            ],
            [
                "Research",
                "75+ interviews"
            ],
            [
                "Pilot",
                "112 students, 5 topics, 2 weeks"
            ]
        ],
        blocks: [
            {
                h: "What I owned",
                p: [
                    "I led problem identification and solutioning, and defined the product specs for Reframe. That meant owning the reframe from the BBC's broad brief to a specific, testable problem, driving the decision to kill our first solution, and writing the specification for what replaced it: the read-gate, the For / Against / Neutral structure, the AI summariser and the verification layer."
                ]
            },
            {
                h: "The brief and what we did with it",
                p: [
                    "The BBC asked: how might we improve public discourse so different views can be aired civilly, in a way that supports democracy and a healthy society? That is too broad to act on, so our first job was to narrow it.",
                    "We reframed it around a measurable collapse. <strong>BBC and ITV news reach among UK 16 to 24 year olds fell from 61% to 43% in three years</strong>, and <strong>40% of 18 to 24 year olds now actively avoid the news</strong>."
                ],
                fig: {
                    src: "projects/reframe-team.jpg",
                    cap: "The team at the BBC London office visit, New Broadcasting House."
                }
            },
            {
                h: "What 75+ interviews actually said",
                p: [
                    "We expected polarisation, people getting louder and further apart. That is not what we found.",
                    "People were leaving. \"Nuance in conversations is often punished.\" \"People still want serious discussions, they just don't know where they can have them.\" \"People have not become more polarised, they have withdrawn.\" The mechanism was not the volume of the extremes. It was the silence of everyone else."
                ],
                pull: "The middle's silence is the mechanism, not the polarisers' loudness. That single finding invalidated our first solution.",
                fig: {
                    src: "projects/rf-s1.jpg",
                    cap: "Customer discovery. 75+ interviews, and the quotes that redirected the project.",
                    wide: true
                }
            },
            {
                h: "Killing Undertone",
                p: [
                    "Our first solution was <strong>Undertone</strong>, an AI browser extension that added fact-checks, emotional tone detection and perspective cues on top of existing social media. We built it on the Claude API with a RAG retrieval pipeline, and it demoed well.",
                    "It was also wrong. Undertone treated polarisation as a consumption problem, as if people were seeing the wrong things. The interviews said people had stopped showing up at all. A browser extension improves the feed of someone who is still scrolling. It does nothing for someone who left. We killed it."
                ],
                figs: [
                    {
                        src: "projects/rf-s2.jpg",
                        cap: "Undertone. The solution we built, demoed, and then dropped."
                    },
                    {
                        src: "projects/rf-s3.jpg",
                        cap: "Reframe. The architecture-level answer that replaced it."
                    }
                ]
            },
            {
                h: "Decisions and tradeoffs",
                decisions: [
                    {
                        h: "Build a bounded space, not a better feed",
                        p: "Reframe is a discussion platform anchored to articles. You must meaningfully engage with the source before commenting, threads are organised into For, Against and Neutral so people debate positions rather than each other, and an AI summariser surfaces the strongest argument on each side so newcomers arrive informed.",
                        t: "<b>Accepted:</b> it will never reach X or TikTok scale, and it will not move committed polarisers. Both were stated as deliberate non-goals."
                    },
                    {
                        h: "Make the BBC the structure, not the sponsor",
                        p: "Our read of the BBC flipped mid-project. We started treating them as a client with a problem and ended treating their governance as the product. A publicly funded independent trust can guarantee no engagement monetisation and no ragebait incentive, which no ad-funded platform can credibly promise.",
                        t: "<b>Consequence:</b> the platform must allow users to criticise the BBC itself, or the guarantee is worthless. A genuinely uncomfortable ask of the funder."
                    },
                    {
                        h: "Publish the accessibility risk rather than bury it",
                        p: "A read-gate disadvantages users with dyslexia or ADHD, visual impairments, or slow connections. We named it as an unintended consequence with mitigations (audio alternatives, adjustable gates, an accessibility audit) instead of leaving it for someone else to find.",
                        t: "<b>Tradeoff:</b> it weakens a pitch to name your own failure modes on a slide. It also makes the rest of the pitch believable."
                    }
                ]
            },
            {
                h: "Pilot results",
                p: [
                    "We ran the platform with <strong>112 students across 5 debate topics</strong> and measured it against targets set in advance. These are the results at <strong>two weeks post-launch</strong>. <strong>68% completed a full debate cycle</strong> and <strong>58% said they would return</strong>.",
                    "Feature adoption was the standout. <strong>52% of daily active users</strong> used the AI summarise and change-my-mind features every day against a 15% target, which says people wanted to understand the other side before picking one. The read-gate was the opposite story."
                ],
                results: [
                    [
                        "Feature adoption (AI summarise, change my mind)",
                        "target above 15% DAU",
                        "52% DAU",
                        "hit"
                    ],
                    [
                        "Read-Before-Reply gate engagement",
                        "target above 35%",
                        "22%",
                        "miss"
                    ],
                    [
                        "Structural delay experience",
                        "target 7/10",
                        "6.4/10",
                        "miss"
                    ],
                    [
                        "BBC brand trust uplift",
                        "target +20% over 6 months",
                        "+8% at week 2",
                        "hit"
                    ]
                ],
                p2: [
                    "The tension is legible in one quote: <em>\"I get the point, but I just want to reply while I still remember what I think.\"</em> The core prototype worked. The hard behavioural block did not. We redesigned the gate as a lighter-touch nudge rather than defending the original design, and re-tested against the same 35% target.",
                    "One qualitative finding mattered more than any of the numbers. Sentiment analysis showed pilot discussions were measurably softer than a baseline sample of X and Reddit comments on the same topics, with more hedged \"I see your point, but\" language and less hostility. Structure changed how people disagreed, not just whether they showed up."
                ],
                fig: {
                    src: "projects/rf-s4.jpg",
                    cap: "Two weeks post-launch. Results against pre-set targets, including the two we missed.",
                    wide: true
                }
            },
            {
                h: "What I would do differently",
                p: [
                    "We lost a week with the wrong thing at the centre of the map. Starting from 'our startup' rather than 'the problem' produced a completely different stakeholder picture and pointed us at Undertone. Problem-centred from day one would have saved the detour.",
                    "I would also bring legal and governance expertise in at the start rather than the end. The independent trust structure turned out to be the product's actual differentiator, and we reached it late, by argument rather than by expertise."
                ]
            }
        ]
    },
    {
        slug: "finbuddy",
        name: "FinBuddy",
        tags: [
            "EdTech",
            "AI agents",
            "First prize"
        ],
        cover: "projects/finbuddy-cover.jpg",
        glimpse: "An AI finance learning platform for neurodivergent 14 to 18 year olds in UK schools. Built an AI prototype and pitched in five hours, winning the first prize at Reply's Agentic Business Challenge against 50+ teams",
        video: {
            src: "video/finbuddy-demo.mp4",
            poster: "video/finbuddy-demo-poster.jpg"
        },
        sub: "An AI finance learning platform for students with special educational needs, where the hardest design constraint was not the model, it was the duty of care.",
        facts: [
            [
                "My role",
                "Technical lead: product design, specs, agent architecture"
            ],
            [
                "Result",
                "First prize, 50+ teams"
            ],
            [
                "Users",
                "SEN students, 14 to 18"
            ],
            [
                "Stack",
                "Claude API, DynamoDB, AWS EC2"
            ]
        ],
        blocks: [
            {
                h: "What I owned",
                p: [
                    "I was the technical lead. I designed the product and wrote the technical specification, including the architecture for the AI agent: the three-stage gather, analyse and adapt loop, the concept-confidence model, the data model that separates numerical errors from conceptual ones, and the stack choices behind it."
                ]
            },
            {
                h: "Context",
                p: [
                    "Financial literacy products cluster at two ends: personal finance aimed at adults, and corporate finance aimed at professionals. Almost nothing is built for younger learners, and nothing at all is built for neurodivergent ones. Students with dyslexia or dyscalculia face a standard numerical curriculum that behaves like an obstacle course rather than a syllabus.",
                    "The first version was built and pitched in five hours at Reply's Agentic Business Challenge, where it took first prize against more than 50 teams. We then developed it properly: agent architecture, two product surfaces, an ethics model and a financial case."
                ],
                fig: {
                    src: "projects/finbuddy-fig2.jpg",
                    cap: "The gap. Existing products are older-target or general-audience. Nothing sits where FinBuddy does."
                }
            },
            {
                h: "How the product works",
                p: [
                    "Three agent stages, each doing one job. <strong>Gathering</strong> collects behavioural signals such as time on a lesson, skips and pauses, attempts per quiz and self-reported confidence, plus performance data and teacher input on which topics to prioritise. <strong>Analysis</strong> separates numerical errors from conceptual ones, which is the distinction that matters for a dyscalculic learner. <strong>Adaptive training</strong> generates practice from the identified weak topics and runs a concept confidence model, repeating refreshers with mnemonics and gamification until confidence holds."
                ],
                fig: {
                    src: "projects/finbuddy-fig3.jpg",
                    cap: "The three-stage agent loop: gather, analyse, adapt."
                },
                figs: [
                    {
                        src: "projects/finbuddy-student.jpg",
                        cap: "Student view. Modules, progress and recent activity."
                    },
                    {
                        src: "projects/finbuddy-teacher.jpg",
                        cap: "Teacher view. Cohort progress, confidence and students needing attention."
                    }
                ]
            },
            {
                h: "Decisions and tradeoffs",
                decisions: [
                    {
                        h: "Separate error types before personalising anything",
                        p: "A wrong answer can mean the student misread the number or misunderstood the concept. Treating those the same produces a system that drills arithmetic at a learner who understood the idea perfectly, which is precisely the experience that has already failed these students once.",
                        t: "<b>Cost:</b> a slower, more instrumented analysis stage and a much heavier data model than a generic quiz engine needs."
                    },
                    {
                        h: "Collect behaviour, refuse biometrics",
                        p: "The temptation in adaptive learning is webcam attention tracking and continuous behavioural monitoring. We ruled it out. No biometric data, no live monitoring, no automated scoring, no behavioural grading. Engagement data only with consent, encrypted, anonymised and user-editable.",
                        t: "<b>Tradeoff:</b> a weaker signal than competitors who will collect it, accepted because over-surveillance of vulnerable learners reinforces the stigma the product exists to remove."
                    },
                    {
                        h: "Make every adaptation explainable",
                        p: "A 'Why did I see this?' control on every adaptation, educator visibility into the AI's logic, and the ability for learners to override or opt out. An opaque system that reorganises your learning without explanation is disempowering for exactly the students least able to push back.",
                        t: "<b>Cost:</b> every personalisation decision has to carry a human-readable rationale, which constrains what the model is allowed to do."
                    },
                    {
                        h: "Build the teacher dashboard as a first-class surface",
                        p: "SEN teachers are the buyer, the daily operator and the human-in-the-loop override. The dashboard shows cohort progress, per-student weak topics and who needs attention, not as an admin afterthought but as the product's second face.",
                        t: "<b>Tradeoff:</b> two full product surfaces to design and maintain at MVP, which is a lot for a four-person team."
                    }
                ]
            },
            {
                h: "Deliberation on the ethics",
                p: [
                    "We wrote the risk register before the roadmap and argued it out as a team rather than appending it at the end. Four risks, each with a rationale and a mitigation we were prepared to pay for. Data misuse, because neurodivergent learners are especially vulnerable to overcollection. Algorithmic bias, because an ADHD learner and a dyslexic learner need close to opposite things and a single model will quietly favour one. Opaque personalisation, because a system that reorganises your learning without explanation disempowers the people least able to challenge it. Autonomy erosion through over-surveillance, because tracking reduces trust and reinforces stigma.",
                    "For a product aimed at minors with disabilities and sold to public institutions, this is not a compliance appendix. It is the thing that determines whether a school can buy it at all."
                ],
                fig: {
                    src: "projects/finbuddy-fig8.jpg",
                    cap: "The risk register. Each risk paired with its rationale and a mitigation with a real cost attached."
                }
            },
            {
                h: "The financial case",
                p: [
                    "We modelled the business as a per-school annual subscription priced by SEN student count, then built the P&amp;L out to 2030: roughly <strong>&#163;3.0M revenue</strong>, <strong>&#163;426K EBIT</strong> and <strong>&#163;380K profit after tax</strong> at 1,600 UK schools and around 16,000 SEN students on the platform.",
                    "We also mapped the funding path rather than assuming it, identifying Innovate UK's Inclusive Innovation Award at &#163;62,500 alongside Emerge Education, Brighteye Ventures and Bethnal Green Ventures as grant and early-stage routes, with cheque sizes and follow-on potential for each.",
                    "The scale-up plan was deliberately unaggressive: 10 schools and around 300 students in year one at a heavy discount or free, 100 schools by year two, 700+ and pathway integration with local authorities by year five. Careful onboarding, avoiding overextension."
                ],
                figs: [
                    {
                        src: "projects/finbuddy-fig6.jpg",
                        cap: "Year 1 to Year 8 impact plan, tied to school counts rather than revenue."
                    },
                    {
                        src: "projects/finbuddy-fig7.jpg",
                        cap: "Success defined in learning terms, not engagement terms."
                    }
                ]
            },
            {
                h: "What I would do differently",
                p: [
                    "We designed with SEN specialists in the plan but validated with too few actual students. The product's central claim, that separating error types changes outcomes for dyscalculic learners, is a testable hypothesis we argued rather than tested.",
                    "I would also have picked one neurodivergent profile for the MVP instead of serving dyslexia and dyscalculia at once. We wrote about the risk of the model adapting poorly across profiles and then built for both anyway."
                ]
            }
        ]
    },
    {
        slug: "scrf",
        name: "Specialty Crops Resilience Fund",
        tags: [
            "Climate finance",
            "First prize",
            "New domain"
        ],
        cover: "projects/scrf-cover.jpg",
        glimpse: "A blended finance vehicle that turns specialty crop inventory into climate capital, so smallholders stop selling at distress prices. Climate finance was a brand new field for me. Six months later, my team won the Innovative Financing Mechanisms prize at the Climate Investment Challenge 2026.",
        live: "https://www.imperial.ac.uk/business-school/news/climate-investment-challenge-2026-next-generation-solutions-take-centre-stage/",
        liveLabel: "Read the Imperial announcement",
        sub: "A blended finance mechanism for smallholder farmers, in a field I had never worked in before. Six months later it won its category at the Climate Investment Challenge 2026.",
        facts: [
            [
                "Award",
                "Innovative Financing Mechanisms"
            ],
            [
                "My workstreams",
                "MRV framework, market sizing"
            ],
            [
                "Pilot",
                "&#163;5M, Bihar makhana"
            ],
            [
                "Field",
                "Climate finance, new to me"
            ]
        ],
        blocks: [
            {
                h: "Starting from zero",
                p: [
                    "I had never worked in climate finance. I came from payments, tax and fulfilment engineering at Amazon, and blended finance structures, tranching, MRV and carbon accounting were all new vocabulary in January.",
                    "This is the project I am proudest of for that reason. Six months later the structure had been reviewed and endorsed by senior ex-HSBC bankers and by Prof. Lucie Tepl&#225; of INSEAD, and it won its category at a competition drawing entries from more than 30 institutions across five continents, judged by Morgan Stanley, General Atlantic and Imperial's Centre for Climate Finance and Investment."
                ],
                pull: "The transferable skill was not climate finance. It was being able to structure an ambiguous problem in a field I knew nothing about, fast enough to be useful to people who did."
            },
            {
                h: "The problem",
                p: [
                    "A makhana farmer in Bihar sells at the farm gate for around <strong>&#163;0.66/kg</strong>. The same crop retails domestically at &#163;5 to &#163;8/kg and exports at &#163;15 to &#163;40/kg. That is an arbitrage of 8 to 60 times, and almost none of it reaches the person who grew it.",
                    "The reason is holding power. Farmers sell at harvest because they have no post-harvest financing, no land title to borrow against, and no route to a premium buyer. Banks will not lend against crop inventory. Moneylenders charge 60 to 100% a year, and even regulated microfinance charges 24 to 36%, which erases a smallholder's margin outright."
                ],
                html: `<div class="cmp">
         <div class="ch">Traditional agricultural finance (NABARD, KCC, microfinance)</div>
         <div class="ch b">Specialty Crops Resilience Fund</div>
         <div class="cc"><h5>Collateral gap</h5><p>Land titles or fixed assets required. The crop itself is not recognised as an asset.</p></div>
         <div class="cc"><h5>Collateral recognition</h5><p>Warehouse receipt financing makes crop inventory legible as collateral.</p></div>
         <div class="cc"><h5>Debt-trap risk</h5><p>Informal rates of 60 to 100%, and penalties on default push farmers into a permanent debt cycle.</p></div>
         <div class="cc"><h5>Financial resilience</h5><p>Crop-backed liquidity and convertible revenue rights replace the debt cycle with ownership.</p></div>
         <div class="cc"><h5>Climate value gap</h5><p>Sustainable practice generates no direct financial reward. Preserving a wetland pays the same as draining it.</p></div>
         <div class="cc"><h5>Incentivised climate action</h5><p>Verified KPIs convert sustainability performance into revenue share and cheaper debt.</p></div>
         <div class="cc"><h5>Market access gap</h5><p>No direct buyer linkage. Price uncertainty and exploitation by middlemen.</p></div>
         <div class="cc"><h5>Direct buyer linkage</h5><p>Advance purchase agreements guarantee offtake and eliminate the distress sale.</p></div>
       </div>`
            },
            {
                h: "Why it is a climate problem",
                p: [
                    "The crops in question are climate assets. Makhana is a water-resilient aquatic crop grown in flood-prone wetlands that store 30 to 60 tCO&#8322;e per hectare. Saffron and turmeric are drought-tolerant perennials. None compete with food production.",
                    "When margins compress, those systems get replaced. Kashmir's saffron acreage has shrunk by over 50% since the 1990s as growers switch to high-input annual vegetables. Bihar's wetlands get drained for cattle and paddy. The financial failure and the carbon loss are the same event."
                ],
                fig: {
                    src: "projects/sc-s2.jpg",
                    cap: "The three pilot crops and their sequestration profiles: makhana, turmeric, Kashmiri saffron.",
                    wide: true
                }
            },
            {
                h: "The mechanism",
                p: [
                    "An investment-grade brand signs an <strong>Advance Purchase Agreement</strong> twelve months ahead at a fixed price, which converts uncertain spot revenue into contractual cash flow. The fund lends against those receivables rather than against the farmer, so the credit question becomes the brand's rating, not a smallholder's absent financial history. When the brand settles, payment flows directly into escrow, bypassing the exporter, and a waterfall repays tranches automatically.",
                    "The elegant part is the <strong>Convertible Revenue Right</strong>. Rather than the fund extracting a permanent fee, its revenue share transfers irrevocably to the cooperative as verified climate KPIs are met, moving the cooperative from 70% to 90 or 100% permanently. The same verification simultaneously steps a sustainability-linked loan from 7% to 5%. Climate performance becomes ownership, not a rebate."
                ],
                figs: [
                    {
                        src: "projects/sc-s3.jpg",
                        cap: "The mechanism end to end: APA, tranched fund, sustainability-linked loan, escrow, waterfall with CRR."
                    },
                    {
                        src: "projects/sc-s4.jpg",
                        cap: "Following &#163;1 through it. A 60-day capital cycle."
                    }
                ],
                html: `<table class="stepdown">
        <thead><tr><th>Stage</th><th>Fund revenue share</th><th>Cooperative retains</th><th>Net to co-op per kg</th><th>Tranche B rate</th></tr></thead>
        <tbody>
          <tr><td>Baseline (Y0)</td><td>30%</td><td>70%</td><td>&#163;10.50</td><td>7%</td></tr>
          <tr><td>Water KPI met</td><td>25%</td><td>75%</td><td>&#163;11.25</td><td>6%</td></tr>
          <tr><td>Carbon KPI met</td><td>20%</td><td>80%</td><td>&#163;12.00</td><td>5%</td></tr>
          <tr><td>3 consecutive years</td><td><b>10%, then exits</b></td><td><b>90 to 100%</b></td><td><b>&#163;15.00</b></td><td>5% locked</td></tr>
        </tbody></table>`
            },
            {
                h: "What I owned",
                p: [
                    "Two workstreams, both of which I had to learn from scratch.",
                    "<strong>Climate impact measurement and verification.</strong> I developed the three-level Monitoring, Reporting and Verification framework that underpins the fund's credibility with investors. This is the load-bearing piece: every climate-linked mechanism in the structure, the rate step-downs and the revenue-right transfers alike, triggers off verified KPIs. Without a framework an independent third party can actually audit, those step-downs are a promise rather than a trigger and the whole differentiator collapses.",
                    "<strong>Market sizing and social impact analysis.</strong> I built the TAM, SAM and SOM model quantifying the addressable market, the financing gap and the potential impact: 50,000 farming households and a &#163;60M liquidity gap at the top, narrowing to 3,500 households and &#163;8.9M as a realistic Bihar pilot. This is what turned an interesting mechanism into something a judge could size.",
                    "I did much of this while on a Global Experience Week in Kenya with my MBA cohort, which is its own lesson in what you can deliver when the schedule refuses to cooperate."
                ],
                fig: {
                    src: "projects/sc-s5.jpg",
                    cap: "The market sizing I built: 50,000 farming households and a &#163;60M liquidity gap at the top, narrowing to a 3,500-household Bihar pilot.",
                    wide: true
                }
            },
            {
                h: "Result",
                p: [
                    "We presented at The Royal Institution in London on 11 June 2026 and were awarded <strong>Best Innovative Financing Mechanism</strong>. The challenge was sponsored by General Atlantic, Hitachi, Morgan Stanley and Imperial's Centre for Climate Finance and Investment, with eight finalist teams drawn from over 30 institutions across five continents.",
                    "On demand validation we were honest about being early: eight targeted outreaches produced three substantive responses, two ongoing dialogues and one scheduled discovery call."
                ],
                fig: {
                    src: "projects/sc-s6.jpg",
                    cap: "Traction and validation as we presented it, including the path to a Bihar pilot.",
                    wide: true
                }
            },
            {
                h: "What I would do differently",
                p: [
                    "The structure is stronger than the demand evidence. Eight outreaches is a thin base for a mechanism that only works if investment-grade brands sign twelve-month advance purchase agreements, and that is the single assumption the whole vehicle rests on. I would have spent some of the weeks we put into tranche modelling on getting two brands to say yes in writing.",
                    "On my own workstream, I would have pressure-tested the MRV cost earlier. Everything climate-linked in the design assumes third-party verification is affordable at smallholder scale, and I modelled the framework more rigorously than I modelled its price."
                ]
            }
        ]
    },
    {
        slug: "tate",
        name: "Tate Modern Visitor Challenge",
        tags: [
            "Design thinking",
            "Service design",
            "Tate Modern"
        ],
        cover: "projects/tate-cover.jpg",
        glimpse: "Why do Londoners who live minutes from Tate Modern almost never go in? 100+ data points from interviews, on-site observation and cultural probes, narrowed to three insights and a prototyped concept for repeat family visits.",
        sub: "A design thinking project on the Visitor Attraction Challenge. The interesting part was not the solution, it was how long we had to stay with the problem before the real one appeared.",
        facts: [
            [
                "My role",
                "Insights, personas, journey maps"
            ],
            [
                "Challenge",
                "Visitor Attraction Challenge"
            ],
            [
                "Research",
                "100+ data points, 8 interviews"
            ],
            [
                "Output",
                "3 concepts, 1 prototyped"
            ]
        ],
        blocks: [
            {
                h: "What I owned",
                p: [
                    "I contributed at every stage of this one, and the part I mainly worked on was the turn from raw research into something designable: drafting the insight statements, building the personas, and mapping the customer journeys that the concepts were then generated against."
                ]
            },
            {
                h: "How we chose the problem",
                p: [
                    "We explored 19 possible visitor attractions before settling on Tate Modern. Two things made it the strongest candidate. It is one of the most visited museums in the world, so the failure is not obscurity. And Tate has publicly acknowledged difficulty bringing local audiences back since COVID.",
                    "That gave us a sharp design challenge: <strong>how might we make Tate Modern a place Londoners choose to visit regularly, not just once?</strong>"
                ]
            },
            {
                h: "Research",
                p: [
                    "We deliberately recruited across the engagement spectrum rather than surveying the average visitor: moderate users who had visited one to five times in three years, extreme high engagement paid members visiting several times a year, and extreme low engagement people who had never been or went once long ago.",
                    "Five methods, because interviews alone would have told us what people believe rather than what they do. Seven local interviews plus one Tate staff member. On-site observation. Desk research across statistics, press and Reddit. Visiting as ordinary visitors ourselves. And a cultural probe asking participants to track their own behaviour and emotions over time."
                ],
                fig: {
                    src: "projects/tate-fig1.jpg",
                    cap: "Who we researched and how, across the full engagement spectrum."
                }
            },
            {
                h: "From 100+ data points to three insights",
                p: [
                    "This was the hardest part of the project, and in hindsight the most important. We had over a hundred data points on a Miro research wall: quotes, observations, emotions, stories. Turning that into three actionable insight statements took several rounds of argument, and the insights we landed on were meaningfully different from the patterns we thought we were seeing after the first few interviews.",
                    "Three patterns held. Locals use Tate as a social backdrop rather than an art destination. Visits are driven by external triggers such as rain, visiting friends or school holidays, not by intent. And families need activities, not just space."
                ],
                pull: "If we had moved to ideation early, we would have built concepts for the wrong problem.",
                personas: [
                    [
                        "Emily Thompson",
                        "25, spontaneous wanderer",
                        "\"I like being around culture, but I don't always want to feel like I am doing a 'museum visit'.\""
                    ],
                    [
                        "Julia Collins",
                        "38, time-pressed cultural parent",
                        "\"If museums made it easier and more fun for kids, we'd go there all the time.\""
                    ],
                    [
                        "David Carter",
                        "29, casual cultural explorer",
                        "\"I like Tate but after a few visits, it feels redundant and I no longer want to visit.\""
                    ]
                ],
                fig: {
                    src: "projects/tate-fig2.jpg",
                    cap: "The three insight statements, each with what is going on, why, and the tension it creates."
                }
            },
            {
                h: "Ideation and narrowing",
                p: [
                    "We ran silent brainstorming first to avoid groupthink, then De Bono lateral provocations, then a random object prompt (a coffee cup, which produced a whole cluster of ideas about ritual, warmth and low commitment). That produced more than thirty concept cards.",
                    "Narrowing used dot voting, then forced connections to combine related ideas into three coherent concepts, then an impact versus effort matrix. Plotting everything visually before deciding gave the team a defensible basis for selection instead of voting by instinct, which matters more than it sounds when five people each have a favourite."
                ],
                figs: [
                    {
                        src: "projects/tate-fig4.jpg",
                        cap: "Impact versus effort. Family Discovery Loop came out as the priority concept."
                    },
                    {
                        src: "projects/tate-fig3.jpg",
                        cap: "Three personas, three different insights, three non-overlapping concepts."
                    }
                ]
            },
            {
                h: "The concept we prototyped",
                p: [
                    "<strong>Family Discovery Loop</strong>: a family-focused route through Tate built from guided missions, hands-on activities and a clearly marked family entry point. High impact, low to medium effort, and the best strategic fit against Julia's insight.",
                    "The before and after is specific. Before: planning is exhausting, the family wanders without a route, kids lose interest after fifteen minutes of looking at art, and they would not return. After: a clearly signposted family area, a map that shows exactly where to go, a 'find three shapes' challenge the kids actually participate in, and a reason to come back next month for a different mission."
                ],
                figs: [
                    {
                        src: "projects/tate-fig5.jpg",
                        cap: "Julia's journey, before and after the Family Discovery Loop."
                    },
                    {
                        src: "projects/tate-fig7.jpg",
                        cap: "Low-fidelity prototype: hand-drawn mission cards and paper sketches."
                    }
                ]
            },
            {
                h: "Assumption mapping",
                p: [
                    "Before testing anything we mapped every assumption on a certainty versus criticality grid, which is the habit from this project I have kept. The four we put in the test-first quadrant were all uncertain and all critical: that parents value structured mission-based engagement, that parents have enough time for a weekend activity with their kids, that completing a route creates enough perceived value to justify ongoing content design and maintenance, and that parents will repeat the visit for new challenges.",
                    "Naming those four explicitly meant the testing plan wrote itself, and it stopped us testing the things we already knew."
                ],
                fig: {
                    src: "projects/tate-fig6.jpg",
                    cap: "Assumption map. Uncertain and critical goes in the top right, and gets tested first."
                }
            },
            {
                h: "What I would do differently",
                p: [
                    "Recruitment. Several of our interviewees were connected to each other through existing networks, which almost certainly narrowed the range of perspectives we heard. I would actively seek out people with no prior connection to us.",
                    "One staff interview was not enough. Three or four across gallery attendants, education, marketing and membership would have grounded our feasibility assumptions in institutional reality rather than inference.",
                    "And we described the prototype to people rather than testing it. Family Discovery Loop was explained to adult participants, never run with an actual parent and young children in the gallery. That is the test that would have told us something we did not already believe."
                ]
            }
        ]
    }
];
const EXPERIENCE = [
    {
        co: "Operations Nation",
        unit: "MBA consulting project",
        role: "Product Strategy Consultant",
        when: "Jun 2026 to Jul 2026",
        loc: "London, UK",
        logo: "logos/opsnation.jpg",
        bg: "#4400EE",
        story: "Operations Nation is a bootstrapped community of 800+ operations leaders. I worked as an MBA consultant, directly with the co-founder. My job was to find where the growth was hiding and turn that into a plan they could execute.",
        win: {
            big: "30% / 73%",
            lab: "Where the growth was hiding",
            p: "Onboarding drop-off and 90-day inactivity. Naming those two numbers is what turned a vague engagement problem into a prioritised roadmap."
        },
        bullets: [
            "Identified barriers to engagement, uncovering 30% onboarding drop-off and 73% 90-day inactivity, and translated member interviews and usage data into a prioritised product roadmap with clear measures for activation and retention.",
            "Defined go-to-market and product specification for a new employer-paid marketplace, including user stories, P0 and P1 prioritisation and a pricing model, with build gated on validated employer demand.",
            "Delivered a phased implementation roadmap presented directly to the co-founder."
        ]
    },
    {
        co: "Amazon",
        unit: "Fulfilment Services",
        role: "Software Development Engineer",
        when: "Feb 2024 to Apr 2025",
        loc: "Bangalore, India",
        logo: "logos/amazon.jpg",
        bg: "#FF6600",
        story: "At Fulfillment Services, I worked on the systems that orchestrate inventory movement across fulfilment centres. The whole journey, from a request to move an item, the handshake with transportation services to receiving at the other end, and putting the item back on a shelf.",
        photo: {
            src: "photos/amazon-fc.jpg",
            cap: "On the floor at an Amazon fulfilment centre."
        },
        win: {
            big: "100%",
            lab: "Prime Day 2024 uptime",
            p: "Owned resilience strategy for fulfilment and coordinated 15 developers through peak. Zero support escalations at 20M requests per hour."
        },
        bullets: [
            "Owned resilience strategy for fulfilment, coordinating a team of 15 developers in scaling initiatives that achieved 100% uptime and zero support escalations during Prime Day 2024 at 20M/hour peak traffic.",
            "Mitigated a high-latency bottleneck in the container receive process. Led the system redesign to an asynchronous model with deferred error handling, prioritising throughput over real-time accuracy, and reduced latency by 20%."
        ]
    },
    {
        co: "Amazon",
        unit: "Tax Services",
        role: "Software Development Engineer",
        when: "Dec 2021 to Jan 2024",
        loc: "Hyderabad, India",
        logo: "logos/amazon.jpg",
        bg: "#FF6600",
        story: "I worked on the systems that generated aggregated invoices for 5M+ Amazon sellers worldwide.",
        photo: {
            src: "photos/amazon-office.jpg",
            cap: "At the Spheres, Amazon Seattle."
        },
        win: {
            big: "200+",
            lab: "Engineers validated the demand",
            p: "Spotted that an internal developer tool had cross-organisational value, validated it with 200+ engineers at the Amazon Developer Conference, and turned that into a committed three-year product roadmap."
        },
        bullets: [
            "Identified cross-organisational utility of an internal developer tool, validated demand with 200+ engineers at the Amazon Developer Conference, built the business case for extension and secured commitment to a three-year product roadmap.",
            "Defined product strategy to unlock invoice platform extensibility and reduce infrastructure costs, driving two infrastructure migrations that cut operational costs by 66% and 80% with zero support escalations.",
            "Discovered a systemic data validation error affecting 120K North America sellers through Amazon QuickSight analysis, led reprocessing with the tax analytics team and automated the remediation, restoring regulatory compliance. Earned a Bias for Action award."
        ]
    },
    {
        co: "Amazon",
        unit: "Payments",
        role: "Software Development Engineer",
        when: "Jun 2019 to Nov 2021",
        loc: "Hyderabad, India",
        logo: "logos/amazon.jpg",
        bg: "#FF6600",
        story: "I worked on High frequency financial services like Digital Gold, Credit card bill payments and Amazon Pay dashboard. I owned multiple components in Digital Gold and took it from launch through its first year to 100K+ monthly active users, and it is still growing in India.",
        win: {
            big: "100K+ MAU",
            lab: "The 0 to 1 that changed my direction",
            p: "Digital Gold in its first year. Later I averted its shutdown by delivering KYC verification under a hard compliance deadline, aligning legal, engineering and operations with no prior playbook."
        },
        bullets: [
            "Owned end-to-end launch strategy for Digital Gold across gold vault, consent, payment flows and post-order experience, and delivered a phased rollout with UX, QA and backend teams.",
            "Averted shutdown of Digital Gold by leading end-to-end delivery of KYC verification under a hard compliance deadline with no prior playbook.",
            "Drove Amazon Pay Search from insight to launch, observing high-friction navigation patterns in the Amazon Pay dashboard, prototyping, and securing leadership prioritisation for roadmap inclusion.",
            "Launched a payment reminders feature that improved retention. Identified the opportunity from user metrics, led product strategy and development, and validated impact through A/B testing, generating 50+ visits per second."
        ]
    }
];
const AWARDS = [
    {
        t: "First Prize, Climate Investment Challenge 2026",
        w: "Jun 2026",
        d: "Best Innovative Financing Mechanism for the Specialty Crops Resilience Fund against entries from over 30 institutions across five continents. Presented at The Royal Institution, London, on 11 June 2026.",
        link: "https://www.imperial.ac.uk/business-school/news/climate-investment-challenge-2026-next-generation-solutions-take-centre-stage/",
        linkLabel: "Imperial announcement",
        photo: "photos/cic.jpg",
        pos: "center 40%"
    },
    {
        t: "First Prize, Reply's Agentic Business Challenge",
        w: "Nov 2025",
        d: "First among 50+ teams at Reply Student Clash for building the FinBuddy prototype and pitch in five hours.",
        link: "https://lnkd.in/p/e7u57mu3",
        linkLabel: "See the post",
        photo: "photos/reply.jpg",
        pos: "center 30%"
    },
    {
        t: "Fort&#233; Fellowship",
        w: "2025",
        d: "50% MBA scholarship awarded by the Fort&#233; Foundation, which supports women into business leadership.",
        photo: "photos/forte.jpg",
        pos: "center 22%"
    }
];
const EDUCATION = [
    {
        s: "Imperial College Business School",
        d: "Master of Business Administration",
        loc: "London, UK",
        w: "Sep 2025 to Aug 2026",
        f: "Fort&#233; Fellow, 50% scholarship",
        logo: "logos/imperial.jpg",
        bg: "#0000CC"
    },
    {
        s: "University of St.Gallen (HSG)",
        d: "MBA exchange semester",
        loc: "St.Gallen, Switzerland",
        w: "2026",
        f: "St.Gallen, Switzerland",
        logo: "logos/hsg.jpg",
        bg: "#00802B"
    },
    {
        s: "IIT Bhubaneswar",
        d: "B.Tech (Honours), Computer Science and Engineering",
        loc: "Bhubaneswar, India",
        w: "Jul 2015 to May 2019",
        f: "CGPA 8.77 / 10",
        logo: "logos/iitbbs.jpg",
        bg: "#1E3A5F"
    }
];
const SKILLS = [
    [
        "Product",
        [
            "Product roadmap",
            "Go-to-market strategy",
            "User research",
            "Design thinking",
            "Competitive analysis",
            "Prioritisation (RICE, MoSCoW)",
            "PRDs and specs",
            "User story mapping",
            "Journey mapping",
            "Jobs-to-be-Done",
            "North Star metrics",
            "Agile / Scrum",
            "Figma"
        ]
    ],
    [
        "AI",
        [
            "Claude Code",
            "AI Prototyping",
            "AI agents",
            "Agent orchestration",
            "LLMs",
            "MCP",
            "RAG",
            "AI evals",
            "Prompt Engineering",
            "Vibe coding",
            "Human-in-the-loop design"
        ]
    ],
    [
        "Analytics",
        [
            "SQL",
            "Tableau",
            "Amazon QuickSight",
            "Financial modelling",
            "Market sizing (TAM/SAM/SOM)",
            "Dashboarding",
            "Funnel optimisation",
            "Cohort analysis",
            "Retention and churn analysis",
            "A/B experimentation",
            "Hypothesis testing"
        ]
    ],
    [
        "Engineering",
        [
            "System design",
            "Distributed systems",
            "Microservices",
            "APIs",
            "Asynchronous processing",
            "AWS services",
            "Data pipelines",
            "CI/CD",
            "Integration testing",
            "On-call and incident response",
            "Java",
            "Java Spring",
            "Python",
            "Git"
        ]
    ]
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_17csi5m._.js.map