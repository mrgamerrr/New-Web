var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.ASSUME_ES5 = !1;
$jscomp.ASSUME_NO_NATIVE_MAP = !1;
$jscomp.ASSUME_NO_NATIVE_SET = !1;
$jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) { a != Array.prototype && a != Object.prototype && (a[b] = c.value) };
$jscomp.getGlobal = function(a) { return "undefined" != typeof window && window === a ? a : "undefined" != typeof global && null != global ? global : a };
$jscomp.global = $jscomp.getGlobal(this);
$jscomp.polyfill = function(a, b, c, f) {
    if (b) {
        c = $jscomp.global;
        a = a.split(".");
        for (f = 0; f < a.length - 1; f++) {
            var e = a[f];
            e in c || (c[e] = {});
            c = c[e]
        }
        a = a[a.length - 1];
        f = c[a];
        b = b(f);
        b != f && null != b && $jscomp.defineProperty(c, a, { configurable: !0, writable: !0, value: b })
    }
};
$jscomp.polyfill("Number.isFinite", function(a) { return a ? a : function(a) { return "number" !== typeof a ? !1 : !isNaN(a) && Infinity !== a && -Infinity !== a } }, "es6", "es3");
$jscomp.polyfill("Number.isInteger", function(a) { return a ? a : function(a) { return Number.isFinite(a) ? a === Math.floor(a) : !1 } }, "es6", "es3");
var snhb = snhb || {};
snhb.options = snhb.options || {};
snhb.queue = snhb.queue || [];
snhb.modules = {};
snhb.initTime = (new Date).getTime();
var pbjs = pbjs || {};
pbjs.que = pbjs.que || [];
var googletag = googletag || {};
googletag.cmd = googletag.cmd || [];
adsbygoogle = window.adsbygoogle || [];
var __cmp;
googletag.cmd.push(function() { googletag.pubads().setTargeting("_snhb", "true") });
snhb.info = { publisherName: "w3schools.com", version: { major: "20190110", minor: "20190124" } };
snhb.localSettings = {
    auction: { pbjsVersion: "1.15.0-pre", currency: "EUR", timeout: 1500, priceGranularity: "high", detectTabletsAsMobileTraffic: !1 },
    bidderAliases: { appnexus: "districtmAnxAst" },
    bidderAdjustments: { districtmAnxAst: { c: "USD", s: .15 } },
    adUnits: [{
        name: "sidebar_sticky",
        platform: "desktop",
        path: "/22152718/sws-hb//w3schools.com//sidebar_sticky",
        sizes: [
            [120, 600],
            [160, 600],
            [300, 600],
            [300, 250]
        ],
        additionalDFPSizes: [],
        sizeMapping: [{
            query: { minWidth: 993, maxWidth: 1134 },
            sizes: [
                [120, 600]
            ],
            additionalDFPSizes: []
        }, {
            query: {
                minWidth: 1135,
                maxWidth: 1674
            },
            sizes: [
                [160, 600]
            ],
            additionalDFPSizes: []
        }, {
            query: { minWidth: 1675 },
            sizes: [
                [160, 600],
                [300, 600],
                [300, 250]
            ],
            additionalDFPSizes: []
        }],
        bidderPool: [{ sizes: [], bidder: "appnexus", params: { placementId: "12987174" } }, { sizes: [], bidder: "connectadrealtime", params: { networkId: "10047", siteId: "1011567" } }, { sizes: [], bidder: "districtmAnxAst", params: { placementId: "13163920" } }, {
            sizes: [
                [120, 600]
            ],
            bidder: "ix",
            params: { id: "1", siteId: "259558", size: [120, 600] }
        }, {
            sizes: [
                [160, 600]
            ],
            bidder: "ix",
            params: {
                id: "1",
                siteId: "259558",
                size: [160, 600]
            }
        }, {
            sizes: [
                [300, 600]
            ],
            bidder: "ix",
            params: { id: "1", siteId: "259558", size: [300, 600] }
        }, {
            sizes: [
                [300, 250]
            ],
            bidder: "ix",
            params: { id: "1", siteId: "259558", size: [300, 250] }
        }, { sizes: [], bidder: "openx", params: { unit: "539882512", delDomain: "snigel-d.openx.net" } }, { sizes: [], bidder: "pubmatic", params: { publisherId: "1743386", adSlot: "sws-hb_w3schools_right_sidebar_2@160x600" } }, { sizes: [], bidder: "rubicon", params: { siteId: "181004", zoneId: "883812", accountId: "14598" } }, {
            sizes: [
                [120, 600]
            ],
            bidder: "onedisplay",
            params: {
                placement: "6577374",
                network: "4459.1",
                server: "adserver-eu.adtech.advertising.com"
            }
        }, {
            sizes: [
                [120, 600]
            ],
            bidder: "smartadserver",
            params: { domain: "//prg.smartadserver.com", siteId: "219976", pageId: "917874", formatId: "62371" }
        }, {
            sizes: [
                [160, 600]
            ],
            bidder: "onedisplay",
            params: { placement: "6577373", network: "4459.1", server: "adserver-eu.adtech.advertising.com" }
        }, {
            sizes: [
                [160, 600]
            ],
            bidder: "smartadserver",
            params: { domain: "//prg.smartadserver.com", siteId: "219976", pageId: "917874", formatId: "62362" }
        }, {
            sizes: [
                [300, 600]
            ],
            bidder: "onedisplay",
            params: {
                placement: "6577375",
                network: "4459.1",
                server: "adserver-eu.adtech.advertising.com"
            }
        }, {
            sizes: [
                [300, 600]
            ],
            bidder: "smartadserver",
            params: { domain: "//prg.smartadserver.com", siteId: "219976", pageId: "917874", formatId: "62367" }
        }, {
            sizes: [
                [300, 250]
            ],
            bidder: "onedisplay",
            params: { placement: "6577376", network: "4459.1", server: "adserver-eu.adtech.advertising.com" }
        }, {
            sizes: [
                [300, 250]
            ],
            bidder: "smartadserver",
            params: { domain: "//prg.smartadserver.com", siteId: "219976", pageId: "917874", formatId: "62361" }
        }]
    }, {
        name: "main_leaderboard",
        platform: "desktop",
        path: "/22152718/sws-hb//w3schools.com//main_leaderboard",
        sizes: [
            [728, 90],
            [970, 90],
            [320, 50],
            [468, 60]
        ],
        additionalDFPSizes: [],
        sizeMapping: [{
                query: { maxWidth: 479 },
                sizes: [
                    [320, 50]
                ],
                additionalDFPSizes: []
            }, {
                query: { minWidth: 480, maxWidth: 779 },
                sizes: [
                    [468, 60]
                ],
                additionalDFPSizes: []
            }, {
                query: { minWidth: 780, maxWidth: 992 },
                sizes: [
                    [728, 90]
                ],
                additionalDFPSizes: []
            }, {
                query: { minWidth: 993, maxWidth: 1149 },
                sizes: [
                    [468, 60]
                ],
                additionalDFPSizes: []
            }, {
                query: { minWidth: 1150, maxWidth: 1424 },
                sizes: [
                    [728, 90]
                ],
                additionalDFPSizes: []
            },
            {
                query: { minWidth: 1425 },
                sizes: [
                    [728, 90],
                    [970, 90]
                ],
                additionalDFPSizes: []
            }
        ],
        bidderPool: [{ sizes: [], bidder: "appnexus", params: { placementId: "13164162" } }, { sizes: [], bidder: "connectadrealtime", params: { networkId: "10047", siteId: "1011566" } }, { sizes: [], bidder: "districtmAnxAst", params: { placementId: "13164405" } }, {
                sizes: [
                    [728, 90]
                ],
                bidder: "ix",
                params: { id: "1", siteId: "277108", size: [728, 90] }
            }, {
                sizes: [
                    [970, 90]
                ],
                bidder: "ix",
                params: { id: "1", siteId: "277108", size: [970, 90] }
            }, {
                sizes: [
                    [320, 50]
                ],
                bidder: "ix",
                params: {
                    id: "1",
                    siteId: "277108",
                    size: [320, 90]
                }
            }, {
                sizes: [
                    [468, 60]
                ],
                bidder: "ix",
                params: { id: "1", siteId: "277108", size: [468, 60] }
            }, { sizes: [], bidder: "rubicon", params: { siteId: "181004", zoneId: "914484", accountId: "14598" } }, {
                sizes: [
                    [728, 90],
                    [970, 90],
                    [320, 50]
                ],
                bidder: "openx",
                params: { unit: "539960990", delDomain: "snigel-d.openx.net" }
            }, { sizes: [], bidder: "pubmatic", params: { publisherId: "157369", adSlot: "sws-hb_w3schools_Main_Leaderboard@728x90" } }, {
                sizes: [
                    [728, 90]
                ],
                bidder: "onedisplay",
                params: { placement: "6582998", network: "4459.1", server: "adserver-eu.adtech.advertising.com" }
            },
            {
                sizes: [
                    [728, 90]
                ],
                bidder: "smartadserver",
                params: { domain: "//prg.smartadserver.com", siteId: "219976", pageId: "932544", formatId: "62368" }
            }, {
                sizes: [
                    [970, 90]
                ],
                bidder: "onedisplay",
                params: { placement: "6583000", network: "4459.1", server: "adserver-eu.adtech.advertising.com" }
            }, {
                sizes: [
                    [970, 90]
                ],
                bidder: "smartadserver",
                params: { domain: "//prg.smartadserver.com", siteId: "219976", pageId: "932544", formatId: "62369" }
            }, {
                sizes: [
                    [320, 50]
                ],
                bidder: "onedisplay",
                params: { placement: "6582999", network: "4459.1", server: "adserver-eu.adtech.advertising.com" }
            },
            {
                sizes: [
                    [320, 50]
                ],
                bidder: "smartadserver",
                params: { domain: "//prg.smartadserver.com", siteId: "219976", pageId: "932544", formatId: "62364" }
            }
        ]
    }, {
        name: "main_leaderboard",
        platform: "mobile",
        path: "/22152718/sws-hb//w3schools.com//main_leaderboard",
        sizes: [
            [728, 90],
            [970, 90],
            [320, 50],
            [468, 60]
        ],
        additionalDFPSizes: [],
        sizeMapping: [{
            query: { maxWidth: 479 },
            sizes: [
                [320, 50]
            ],
            additionalDFPSizes: []
        }, {
            query: { minWidth: 480, maxWidth: 779 },
            sizes: [
                [468, 60]
            ],
            additionalDFPSizes: []
        }, {
            query: { minWidth: 780, maxWidth: 992 },
            sizes: [
                [728, 90]
            ],
            additionalDFPSizes: []
        }, {
            query: { minWidth: 993, maxWidth: 1149 },
            sizes: [
                [468, 60]
            ],
            additionalDFPSizes: []
        }, {
            query: { minWidth: 1150, maxWidth: 1424 },
            sizes: [
                [728, 90]
            ],
            additionalDFPSizes: []
        }, {
            query: { minWidth: 1425 },
            sizes: [
                [728, 90],
                [970, 90]
            ],
            additionalDFPSizes: []
        }],
        bidderPool: [{ sizes: [], bidder: "appnexus", params: { placementId: "13164162" } }, { sizes: [], bidder: "connectadrealtime", params: { networkId: "10047", siteId: "1011566" } }, { sizes: [], bidder: "districtmAnxAst", params: { placementId: "13164405" } }, {
            sizes: [
                [728, 90]
            ],
            bidder: "ix",
            params: { id: "1", siteId: "277108", size: [728, 90] }
        }, {
            sizes: [
                [970, 90]
            ],
            bidder: "ix",
            params: { id: "1", siteId: "277108", size: [970, 90] }
        }, {
            sizes: [
                [320, 50]
            ],
            bidder: "ix",
            params: { id: "1", siteId: "277108", size: [320, 90] }
        }, {
            sizes: [
                [468, 60]
            ],
            bidder: "ix",
            params: { id: "1", siteId: "277108", size: [468, 60] }
        }, { sizes: [], bidder: "rubicon", params: { siteId: "181004", zoneId: "914484", accountId: "14598" } }, {
            sizes: [
                [728, 90],
                [970, 90],
                [320, 50]
            ],
            bidder: "openx",
            params: { unit: "539960990", delDomain: "snigel-d.openx.net" }
        }, {
            sizes: [],
            bidder: "pubmatic",
            params: { publisherId: "157369", adSlot: "sws-hb_w3schools_Main_Leaderboard@728x90" }
        }, {
            sizes: [
                [728, 90]
            ],
            bidder: "onedisplay",
            params: { placement: "6582998", network: "4459.1", server: "adserver-eu.adtech.advertising.com" }
        }, {
            sizes: [
                [728, 90]
            ],
            bidder: "smartadserver",
            params: { domain: "//prg.smartadserver.com", siteId: "219976", pageId: "932544", formatId: "62368" }
        }, {
            sizes: [
                [970, 90]
            ],
            bidder: "onedisplay",
            params: { placement: "6583000", network: "4459.1", server: "adserver-eu.adtech.advertising.com" }
        }, {
            sizes: [
                [970, 90]
            ],
            bidder: "smartadserver",
            params: { domain: "//prg.smartadserver.com", siteId: "219976", pageId: "932544", formatId: "62369" }
        }, {
            sizes: [
                [320, 50]
            ],
            bidder: "onedisplay",
            params: { placement: "6582999", network: "4459.1", server: "adserver-eu.adtech.advertising.com" }
        }, {
            sizes: [
                [320, 50]
            ],
            bidder: "smartadserver",
            params: { domain: "//prg.smartadserver.com", siteId: "219976", pageId: "932544", formatId: "62364" }
        }]
    }, {
        name: "wide_skyscraper",
        platform: "desktop",
        path: "/22152718/sws-hb//w3schools.com//wide_skyscraper",
        sizes: [
            [160, 600],
            [300, 600],
            [320, 50]
        ],
        additionalDFPSizes: [
            [120,
                600
            ],
            [300, 1050]
        ],
        sizeMapping: [{
            query: { maxWidth: 974 },
            sizes: [
                [320, 50]
            ],
            additionalDFPSizes: []
        }, {
            query: { minWidth: 975, maxWidth: 1134 },
            sizes: [],
            additionalDFPSizes: [
                [120, 600]
            ]
        }, {
            query: { minWidth: 1135, maxWidth: 1674 },
            sizes: [
                [160, 600]
            ],
            additionalDFPSizes: []
        }, {
            query: { minWidth: 1675 },
            sizes: [
                [160, 600],
                [300, 600]
            ],
            additionalDFPSizes: [
                [300, 1050]
            ]
        }],
        bidderPool: [{ sizes: [], bidder: "appnexus", params: { placementId: "13164163" } }, { sizes: [], bidder: "connectadrealtime", params: { networkId: "10047", siteId: "1011569" } }, {
            sizes: [],
            bidder: "districtmAnxAst",
            params: { placementId: "13164406" }
        }, {
            sizes: [
                [160, 600]
            ],
            bidder: "ix",
            params: { id: "1", siteId: "277110", size: [160, 600] }
        }, {
            sizes: [
                [300, 600]
            ],
            bidder: "ix",
            params: { id: "1", siteId: "277110", size: [300, 600] }
        }, {
            sizes: [
                [320, 50]
            ],
            bidder: "ix",
            params: { id: "1", siteId: "277110", size: [320, 50] }
        }, { sizes: [], bidder: "openx", params: { unit: "539960993", delDomain: "snigel-d.openx.net" } }, { sizes: [], bidder: "pubmatic", params: { publisherId: "157369", adSlot: "sws-hb_w3schools_Wide_Skyscraper@160x600" } }, {
            sizes: [],
            bidder: "rubicon",
            params: {
                siteId: "181004",
                zoneId: "914486",
                accountId: "14598"
            }
        }, {
            sizes: [
                [160, 600]
            ],
            bidder: "onedisplay",
            params: { placement: "6583003", network: "4459.1", server: "adserver-eu.adtech.advertising.com" }
        }, {
            sizes: [
                [160, 600]
            ],
            bidder: "smartadserver",
            params: { domain: "//prg.smartadserver.com", siteId: "219976", pageId: "932545", formatId: "62362" }
        }, {
            sizes: [
                [300, 600]
            ],
            bidder: "onedisplay",
            params: { placement: "6583001", network: "4459.1", server: "adserver-eu.adtech.advertising.com" }
        }, {
            sizes: [
                [300, 600]
            ],
            bidder: "smartadserver",
            params: {
                domain: "//prg.smartadserver.com",
                siteId: "219976",
                pageId: "932545",
                formatId: "62367"
            }
        }, {
            sizes: [
                [320, 50]
            ],
            bidder: "onedisplay",
            params: { placement: "6583002", network: "4459.1", server: "adserver-eu.adtech.advertising.com" }
        }, {
            sizes: [
                [320, 50]
            ],
            bidder: "smartadserver",
            params: { domain: "//prg.smartadserver.com", siteId: "219976", pageId: "932545", formatId: "62364" }
        }]
    }, {
        name: "wide_skyscraper",
        platform: "mobile",
        path: "/22152718/sws-hb//w3schools.com//wide_skyscraper",
        sizes: [
            [160, 600],
            [300, 600],
            [320, 50]
        ],
        additionalDFPSizes: [
            [120, 600],
            [300, 1050]
        ],
        sizeMapping: [{
            query: { maxWidth: 974 },
            sizes: [
                [320, 50]
            ],
            additionalDFPSizes: []
        }, {
            query: { minWidth: 975, maxWidth: 1134 },
            sizes: [],
            additionalDFPSizes: [
                [120, 600]
            ]
        }, {
            query: { minWidth: 1135, maxWidth: 1674 },
            sizes: [
                [160, 600]
            ],
            additionalDFPSizes: []
        }, {
            query: { minWidth: 1675 },
            sizes: [
                [160, 600],
                [300, 600]
            ],
            additionalDFPSizes: [
                [300, 1050]
            ]
        }],
        bidderPool: [{ sizes: [], bidder: "appnexus", params: { placementId: "13164163" } }, { sizes: [], bidder: "connectadrealtime", params: { networkId: "10047", siteId: "1011569" } }, { sizes: [], bidder: "districtmAnxAst", params: { placementId: "13164406" } },
            {
                sizes: [
                    [160, 600]
                ],
                bidder: "ix",
                params: { id: "1", siteId: "277110", size: [160, 600] }
            }, {
                sizes: [
                    [300, 600]
                ],
                bidder: "ix",
                params: { id: "1", siteId: "277110", size: [300, 600] }
            }, {
                sizes: [
                    [320, 50]
                ],
                bidder: "ix",
                params: { id: "1", siteId: "277110", size: [320, 50] }
            }, { sizes: [], bidder: "openx", params: { unit: "539960993", delDomain: "snigel-d.openx.net" } }, { sizes: [], bidder: "pubmatic", params: { publisherId: "157369", adSlot: "sws-hb_w3schools_Wide_Skyscraper@160x600" } }, { sizes: [], bidder: "rubicon", params: { siteId: "181004", zoneId: "914486", accountId: "14598" } },
            {
                sizes: [
                    [160, 600]
                ],
                bidder: "onedisplay",
                params: { placement: "6583003", network: "4459.1", server: "adserver-eu.adtech.advertising.com" }
            }, {
                sizes: [
                    [160, 600]
                ],
                bidder: "smartadserver",
                params: { domain: "//prg.smartadserver.com", siteId: "219976", pageId: "932545", formatId: "62362" }
            }, {
                sizes: [
                    [300, 600]
                ],
                bidder: "onedisplay",
                params: { placement: "6583001", network: "4459.1", server: "adserver-eu.adtech.advertising.com" }
            }, {
                sizes: [
                    [300, 600]
                ],
                bidder: "smartadserver",
                params: {
                    domain: "//prg.smartadserver.com",
                    siteId: "219976",
                    pageId: "932545",
                    formatId: "62367"
                }
            }, {
                sizes: [
                    [320, 50]
                ],
                bidder: "onedisplay",
                params: { placement: "6583002", network: "4459.1", server: "adserver-eu.adtech.advertising.com" }
            }, {
                sizes: [
                    [320, 50]
                ],
                bidder: "smartadserver",
                params: { domain: "//prg.smartadserver.com", siteId: "219976", pageId: "932545", formatId: "62364" }
            }
        ]
    }, {
        name: "mid_content",
        platform: "desktop",
        path: "/22152718/sws-hb//w3schools.com//mid_content",
        sizes: [
            [300, 250],
            [336, 280],
            [728, 90],
            [970, 250],
            [970, 90],
            [468, 60],
            [320, 50]
        ],
        additionalDFPSizes: [],
        sizeMapping: [{
            query: { maxWidth: 489 },
            sizes: [
                [300, 250],
                [336, 280],
                [320, 50]
            ],
            additionalDFPSizes: []
        }, {
            query: { minWidth: 490, maxWidth: 749 },
            sizes: [
                [300, 250],
                [336, 280],
                [468, 60]
            ],
            additionalDFPSizes: []
        }, {
            query: { minWidth: 750, maxWidth: 992 },
            sizes: [
                [728, 90]
            ],
            additionalDFPSizes: []
        }, {
            query: { minWidth: 993, maxWidth: 1134 },
            sizes: [
                [300, 250],
                [336, 280],
                [468, 60]
            ],
            additionalDFPSizes: []
        }, {
            query: { minWidth: 1135, maxWidth: 1439 },
            sizes: [
                [728, 90]
            ],
            additionalDFPSizes: []
        }, {
            query: { minWidth: 1440 },
            sizes: [
                [728, 90],
                [970, 250],
                [970, 90]
            ],
            additionalDFPSizes: []
        }],
        bidderPool: [{
            sizes: [],
            bidder: "appnexus",
            params: { placementId: "13164164" }
        }, { sizes: [], bidder: "connectadrealtime", params: { networkId: "10047", siteId: "1011570" } }, { sizes: [], bidder: "districtmAnxAst", params: { placementId: "13164407" } }, {
            sizes: [
                [320, 50]
            ],
            bidder: "ix",
            params: { id: "1", siteId: "277109", size: [320, 50] }
        }, {
            sizes: [
                [300, 250]
            ],
            bidder: "ix",
            params: { id: "1", siteId: "277109", size: [300, 250] }
        }, {
            sizes: [
                [336, 280]
            ],
            bidder: "ix",
            params: { id: "1", siteId: "277109", size: [336, 280] }
        }, {
            sizes: [
                [728, 90]
            ],
            bidder: "ix",
            params: {
                id: "1",
                siteId: "277109",
                size: [728,
                    90
                ]
            }
        }, {
            sizes: [
                [970, 250]
            ],
            bidder: "ix",
            params: { id: "1", siteId: "277109", size: [970, 250] }
        }, {
            sizes: [
                [970, 90]
            ],
            bidder: "ix",
            params: { id: "1", siteId: "277109", size: [970, 90] }
        }, {
            sizes: [
                [468, 60]
            ],
            bidder: "ix",
            params: { id: "1", siteId: "277109", size: [468, 60] }
        }, { sizes: [], bidder: "rubicon", params: { siteId: "181004", zoneId: "914488", accountId: "14598" } }, {
            sizes: [
                [300, 250],
                [336, 280],
                [728, 90],
                [970, 250],
                [970, 90]
            ],
            bidder: "openx",
            params: { unit: "539960995", delDomain: "snigel-d.openx.net" }
        }, {
            sizes: [],
            bidder: "pubmatic",
            params: {
                publisherId: "157369",
                adSlot: "sws-hb_w3schools_Mid_Content@300x250"
            }
        }, {
            sizes: [
                [300, 250],
                [336, 280],
                [728, 90],
                [970, 250],
                [970, 90]
            ],
            bidder: "districtmAnxAst",
            params: { placementId: "13164407" }
        }, {
            sizes: [
                [300, 250]
            ],
            bidder: "onedisplay",
            params: { placement: "6583004", network: "4459.1", server: "adserver-eu.adtech.advertising.com" }
        }, {
            sizes: [
                [300, 250]
            ],
            bidder: "smartadserver",
            params: { domain: "//prg.smartadserver.com", siteId: "219976", pageId: "932546", formatId: "62361" }
        }, {
            sizes: [
                [728, 90]
            ],
            bidder: "onedisplay",
            params: {
                placement: "6584040",
                network: "4459.1",
                server: "adserver-eu.adtech.advertising.com"
            }
        }, {
            sizes: [
                [728, 90]
            ],
            bidder: "smartadserver",
            params: { domain: "//prg.smartadserver.com", siteId: "219976", pageId: "932546", formatId: "62368" }
        }, {
            sizes: [
                [970, 250]
            ],
            bidder: "onedisplay",
            params: { placement: "6584039", network: "4459.1", server: "adserver-eu.adtech.advertising.com" }
        }, {
            sizes: [
                [970, 250]
            ],
            bidder: "smartadserver",
            params: { domain: "//prg.smartadserver.com", siteId: "219976", pageId: "932546", formatId: "62370" }
        }]
    }, {
        name: "mid_content",
        platform: "mobile",
        path: "/22152718/sws-hb//w3schools.com//mid_content",
        sizes: [
            [300, 250],
            [336, 280],
            [728, 90],
            [970, 250],
            [970, 90],
            [468, 60],
            [320, 50]
        ],
        additionalDFPSizes: [],
        sizeMapping: [{
            query: { maxWidth: 489 },
            sizes: [
                [300, 250],
                [336, 280],
                [320, 50]
            ],
            additionalDFPSizes: []
        }, {
            query: { minWidth: 490, maxWidth: 749 },
            sizes: [
                [300, 250],
                [336, 280],
                [468, 60]
            ],
            additionalDFPSizes: []
        }, {
            query: { minWidth: 750, maxWidth: 992 },
            sizes: [
                [728, 90]
            ],
            additionalDFPSizes: []
        }, {
            query: { minWidth: 993, maxWidth: 1134 },
            sizes: [
                [300, 250],
                [336, 280],
                [468, 60]
            ],
            additionalDFPSizes: []
        }, {
            query: { minWidth: 1135, maxWidth: 1439 },
            sizes: [
                [728,
                    90
                ]
            ],
            additionalDFPSizes: []
        }, {
            query: { minWidth: 1440 },
            sizes: [
                [728, 90],
                [970, 250],
                [970, 90]
            ],
            additionalDFPSizes: []
        }],
        bidderPool: [{ sizes: [], bidder: "appnexus", params: { placementId: "13164164" } }, { sizes: [], bidder: "connectadrealtime", params: { networkId: "10047", siteId: "1011570" } }, { sizes: [], bidder: "districtmAnxAst", params: { placementId: "13164407" } }, {
            sizes: [
                [320, 50]
            ],
            bidder: "ix",
            params: { id: "1", siteId: "277109", size: [320, 50] }
        }, {
            sizes: [
                [300, 250]
            ],
            bidder: "ix",
            params: { id: "1", siteId: "277109", size: [300, 250] }
        }, {
            sizes: [
                [336,
                    280
                ]
            ],
            bidder: "ix",
            params: { id: "1", siteId: "277109", size: [336, 280] }
        }, {
            sizes: [
                [728, 90]
            ],
            bidder: "ix",
            params: { id: "1", siteId: "277109", size: [728, 90] }
        }, {
            sizes: [
                [970, 250]
            ],
            bidder: "ix",
            params: { id: "1", siteId: "277109", size: [970, 250] }
        }, {
            sizes: [
                [970, 90]
            ],
            bidder: "ix",
            params: { id: "1", siteId: "277109", size: [970, 90] }
        }, {
            sizes: [
                [468, 60]
            ],
            bidder: "ix",
            params: { id: "1", siteId: "277109", size: [468, 60] }
        }, { sizes: [], bidder: "rubicon", params: { siteId: "181004", zoneId: "914488", accountId: "14598" } }, {
            sizes: [
                [300, 250],
                [336, 280],
                [728, 90],
                [970,
                    250
                ],
                [970, 90]
            ],
            bidder: "openx",
            params: { unit: "539960995", delDomain: "snigel-d.openx.net" }
        }, { sizes: [], bidder: "pubmatic", params: { publisherId: "157369", adSlot: "sws-hb_w3schools_Mid_Content@300x250" } }, {
            sizes: [
                [300, 250],
                [336, 280],
                [728, 90],
                [970, 250],
                [970, 90]
            ],
            bidder: "districtmAnxAst",
            params: { placementId: "13164407" }
        }, {
            sizes: [
                [300, 250]
            ],
            bidder: "onedisplay",
            params: { placement: "6583004", network: "4459.1", server: "adserver-eu.adtech.advertising.com" }
        }, {
            sizes: [
                [300, 250]
            ],
            bidder: "smartadserver",
            params: {
                domain: "//prg.smartadserver.com",
                siteId: "219976",
                pageId: "932546",
                formatId: "62361"
            }
        }, {
            sizes: [
                [728, 90]
            ],
            bidder: "onedisplay",
            params: { placement: "6584040", network: "4459.1", server: "adserver-eu.adtech.advertising.com" }
        }, {
            sizes: [
                [728, 90]
            ],
            bidder: "smartadserver",
            params: { domain: "//prg.smartadserver.com", siteId: "219976", pageId: "932546", formatId: "62368" }
        }, {
            sizes: [
                [970, 250]
            ],
            bidder: "onedisplay",
            params: { placement: "6584039", network: "4459.1", server: "adserver-eu.adtech.advertising.com" }
        }, {
            sizes: [
                [970, 250]
            ],
            bidder: "smartadserver",
            params: {
                domain: "//prg.smartadserver.com",
                siteId: "219976",
                pageId: "932546",
                formatId: "62370"
            }
        }]
    }, {
        name: "bottom_medium_rectangle",
        platform: "desktop",
        path: "/22152718/sws-hb//w3schools.com//bottom_medium_rectangle",
        sizes: [
            [970, 250],
            [300, 250],
            [336, 280]
        ],
        additionalDFPSizes: [],
        sizeMapping: [{
            query: { maxWidth: 1239 },
            sizes: [
                [300, 250],
                [336, 280]
            ],
            additionalDFPSizes: []
        }, {
            query: { minWidth: 1240 },
            sizes: [
                [970, 250],
                [300, 250],
                [336, 280]
            ],
            additionalDFPSizes: []
        }],
        bidderPool: [{ sizes: [], bidder: "appnexus", params: { placementId: "13164165" } }, {
                sizes: [],
                bidder: "connectadrealtime",
                params: { networkId: "10047", siteId: "1011573" }
            }, { sizes: [], bidder: "districtmAnxAst", params: { placementId: "13164408" } }, {
                sizes: [
                    [970, 250]
                ],
                bidder: "ix",
                params: { id: "1", siteId: "277112", size: [970, 250] }
            }, {
                sizes: [
                    [300, 250]
                ],
                bidder: "ix",
                params: { id: "1", siteId: "277112", size: [300, 250] }
            }, {
                sizes: [
                    [336, 250]
                ],
                bidder: "ix",
                params: { id: "1", siteId: "277112", size: [336, 250] }
            }, { sizes: [], bidder: "openx", params: { unit: "539960998", delDomain: "snigel-d.openx.net" } }, { sizes: [], bidder: "pubmatic", params: { publisherId: "157369", adSlot: "sws-hb_w3schools_Bottom_BillboardMPU@970x250" } },
            { sizes: [], bidder: "rubicon", params: { siteId: "181004", zoneId: "914490", accountId: "14598" } }, {
                sizes: [
                    [970, 250]
                ],
                bidder: "onedisplay",
                params: { placement: "6583005", network: "4459.1", server: "adserver-eu.adtech.advertising.com" }
            }, {
                sizes: [
                    [970, 250]
                ],
                bidder: "smartadserver",
                params: { domain: "//prg.smartadserver.com", siteId: "219976", pageId: "932547", formatId: "62370" }
            }, {
                sizes: [
                    [300, 250]
                ],
                bidder: "onedisplay",
                params: { placement: "65830056", network: "4459.1", server: "adserver-eu.adtech.advertising.com" }
            }, {
                sizes: [
                    [300, 250]
                ],
                bidder: "smartadserver",
                params: { domain: "//prg.smartadserver.com", siteId: "219976", pageId: "932547", formatId: "62361" }
            }
        ]
    }, {
        name: "bottom_medium_rectangle",
        platform: "mobile",
        path: "/22152718/sws-hb//w3schools.com//bottom_medium_rectangle",
        sizes: [
            [970, 250],
            [300, 250],
            [336, 280]
        ],
        additionalDFPSizes: [],
        sizeMapping: [{
            query: { maxWidth: 1239 },
            sizes: [
                [300, 250],
                [336, 280]
            ],
            additionalDFPSizes: []
        }, {
            query: { minWidth: 1240 },
            sizes: [
                [970, 250],
                [300, 250],
                [336, 280]
            ],
            additionalDFPSizes: []
        }],
        bidderPool: [{
                sizes: [],
                bidder: "appnexus",
                params: { placementId: "13164165" }
            }, { sizes: [], bidder: "connectadrealtime", params: { networkId: "10047", siteId: "1011573" } }, { sizes: [], bidder: "districtmAnxAst", params: { placementId: "13164408" } }, {
                sizes: [
                    [970, 250]
                ],
                bidder: "ix",
                params: { id: "1", siteId: "277112", size: [970, 250] }
            }, {
                sizes: [
                    [300, 250]
                ],
                bidder: "ix",
                params: { id: "1", siteId: "277112", size: [300, 250] }
            }, {
                sizes: [
                    [336, 250]
                ],
                bidder: "ix",
                params: { id: "1", siteId: "277112", size: [336, 250] }
            }, { sizes: [], bidder: "openx", params: { unit: "539960998", delDomain: "snigel-d.openx.net" } },
            { sizes: [], bidder: "pubmatic", params: { publisherId: "157369", adSlot: "sws-hb_w3schools_Bottom_BillboardMPU@970x250" } }, { sizes: [], bidder: "rubicon", params: { siteId: "181004", zoneId: "914490", accountId: "14598" } }, {
                sizes: [
                    [970, 250]
                ],
                bidder: "onedisplay",
                params: { placement: "6583005", network: "4459.1", server: "adserver-eu.adtech.advertising.com" }
            }, {
                sizes: [
                    [970, 250]
                ],
                bidder: "smartadserver",
                params: { domain: "//prg.smartadserver.com", siteId: "219976", pageId: "932547", formatId: "62370" }
            }, {
                sizes: [
                    [300, 250]
                ],
                bidder: "onedisplay",
                params: { placement: "65830056", network: "4459.1", server: "adserver-eu.adtech.advertising.com" }
            }, {
                sizes: [
                    [300, 250]
                ],
                bidder: "smartadserver",
                params: { domain: "//prg.smartadserver.com", siteId: "219976", pageId: "932547", formatId: "62361" }
            }
        ]
    }, {
        name: "right_bottom_medium_rectangle",
        platform: "desktop",
        path: "/22152718/sws-hb//w3schools.com//right_bottom_medium_rectangle",
        sizes: [
            [300, 250],
            [336, 280]
        ],
        additionalDFPSizes: [],
        sizeMapping: [{
            query: { minWidth: 975 },
            sizes: [
                [300, 250],
                [336, 280]
            ],
            additionalDFPSizes: []
        }],
        bidderPool: [{
            sizes: [],
            bidder: "appnexus",
            params: { placementId: "13164166" }
        }, { sizes: [], bidder: "connectadrealtime", params: { networkId: "10047", siteId: "1011575" } }, { sizes: [], bidder: "conversant", params: { site_id: "117726" } }, { sizes: [], bidder: "districtmAnxAst", params: { placementId: "13164409" } }, {
            sizes: [
                [300, 250]
            ],
            bidder: "ix",
            params: { id: "1", siteId: "277111", size: [300, 250] }
        }, {
            sizes: [
                [336, 280]
            ],
            bidder: "ix",
            params: { id: "1", siteId: "277111", size: [336, 280] }
        }, { sizes: [], bidder: "openx", params: { unit: "539960999", delDomain: "snigel-d.openx.net" } }, {
            sizes: [],
            bidder: "pubmatic",
            params: { publisherId: "157369", adSlot: "sws-hb_w3schools_Bottom_Right_MPU@300x250" }
        }, { sizes: [], bidder: "rubicon", params: { siteId: "181004", zoneId: "914492", accountId: "14598" } }, {
            sizes: [
                [300, 250]
            ],
            bidder: "onedisplay",
            params: { placement: "6583007", network: "4459.1", server: "adserver-eu.adtech.advertising.com" }
        }, {
            sizes: [
                [300, 250]
            ],
            bidder: "smartadserver",
            params: { domain: "//prg.smartadserver.com", siteId: "219976", pageId: "932548", formatId: "62361" }
        }]
    }, {
        name: "try_it_leaderboard",
        platform: "desktop",
        path: "/22152718/sws-hb//w3schools.com//try_it_leaderboard",
        sizes: [
            [320, 50],
            [728, 90],
            [468, 60]
        ],
        additionalDFPSizes: [],
        sizeMapping: [{
            query: { maxWidth: 467 },
            sizes: [
                [320, 50]
            ],
            additionalDFPSizes: []
        }, {
            query: { minWidth: 468, maxWidth: 727 },
            sizes: [
                [468, 60]
            ],
            additionalDFPSizes: []
        }, {
            query: { minWidth: 728 },
            sizes: [
                [728, 90]
            ],
            additionalDFPSizes: []
        }],
        bidderPool: [{ sizes: [], bidder: "appnexus", params: { placementId: "13218673" } }, { sizes: [], bidder: "connectadrealtime", params: { networkId: "10047", siteId: "1011576" } }, {
                sizes: [
                    [320, 50]
                ],
                bidder: "ix",
                params: { id: "1", siteId: "277113", size: [320, 50] }
            },
            {
                sizes: [
                    [728, 90]
                ],
                bidder: "ix",
                params: { id: "1", siteId: "277113", size: [728, 90] }
            }, {
                sizes: [
                    [468, 60]
                ],
                bidder: "ix",
                params: { id: "1", siteId: "277113", size: [468, 60] }
            }, { sizes: [], bidder: "rubicon", params: { siteId: "181004", zoneId: "922576", accountId: "14598" } }, {
                sizes: [
                    [320, 50],
                    [728, 90]
                ],
                bidder: "districtmAnxAst",
                params: { placementId: "13243395" }
            }, {
                sizes: [
                    [320, 50],
                    [728, 90]
                ],
                bidder: "openx",
                params: { unit: "540001628", delDomain: "snigel-d.openx.net" }
            }, { sizes: [], bidder: "pubmatic", params: { publisherId: "157369", adSlot: "sws-hb_w3schools_try_it_pages_leaderboard@728x90" } },
            {
                sizes: [
                    [320, 50]
                ],
                bidder: "onedisplay",
                params: { placement: "6585568", network: "4459.1", server: "adserver-eu.adtech.advertising.com" }
            }, {
                sizes: [
                    [320, 50]
                ],
                bidder: "smartadserver",
                params: { domain: "//prg.smartadserver.com", siteId: "219976", pageId: "935090", formatId: "62364" }
            }, {
                sizes: [
                    [728, 90]
                ],
                bidder: "onedisplay",
                params: { placement: "6585567", network: "4459.1", server: "adserver-eu.adtech.advertising.com" }
            }, {
                sizes: [
                    [728, 90]
                ],
                bidder: "smartadserver",
                params: {
                    domain: "//prg.smartadserver.com",
                    siteId: "219976",
                    pageId: "935090",
                    formatId: "62368"
                }
            }
        ]
    }, {
        name: "try_it_leaderboard",
        platform: "mobile",
        path: "/22152718/sws-hb//w3schools.com//try_it_leaderboard",
        sizes: [
            [320, 50],
            [728, 90],
            [468, 60]
        ],
        additionalDFPSizes: [],
        sizeMapping: [{
            query: { maxWidth: 467 },
            sizes: [
                [320, 50]
            ],
            additionalDFPSizes: []
        }, {
            query: { minWidth: 468, maxWidth: 727 },
            sizes: [
                [468, 60]
            ],
            additionalDFPSizes: []
        }, {
            query: { minWidth: 728 },
            sizes: [
                [728, 90]
            ],
            additionalDFPSizes: []
        }],
        bidderPool: [{ sizes: [], bidder: "appnexus", params: { placementId: "13218673" } }, {
            sizes: [],
            bidder: "connectadrealtime",
            params: { networkId: "10047", siteId: "1011576" }
        }, {
            sizes: [
                [320, 50]
            ],
            bidder: "ix",
            params: { id: "1", siteId: "277113", size: [320, 50] }
        }, {
            sizes: [
                [728, 90]
            ],
            bidder: "ix",
            params: { id: "1", siteId: "277113", size: [728, 90] }
        }, {
            sizes: [
                [468, 60]
            ],
            bidder: "ix",
            params: { id: "1", siteId: "277113", size: [468, 60] }
        }, { sizes: [], bidder: "rubicon", params: { siteId: "181004", zoneId: "922576", accountId: "14598" } }, {
            sizes: [
                [320, 50],
                [728, 90]
            ],
            bidder: "districtmAnxAst",
            params: { placementId: "13243395" }
        }, {
            sizes: [
                [320, 50],
                [728, 90]
            ],
            bidder: "openx",
            params: {
                unit: "540001628",
                delDomain: "snigel-d.openx.net"
            }
        }, {
            sizes: [
                [320, 50]
            ],
            bidder: "smartadserver",
            params: { domain: "//prg.smartadserver.com", siteId: "219976", pageId: "935090", formatId: "62364" }
        }, {
            sizes: [
                [728, 90]
            ],
            bidder: "smartadserver",
            params: { domain: "//prg.smartadserver.com", siteId: "219976", pageId: "935090", formatId: "62368" }
        }]
    }]
};
snhb.localSettings.modules = { enableSafeFrames: { iOS: !0 }, adScanner: { id: "t_Qv_vWzcBDsyn934F1E0MWBb1c", platform: "mobile" } };
snhb.localSettings.bidders = { penalties: {}, weightsGlobal: {}, weightsAdUnit: {} };
snhb.modules.enableSafeFrames = {
    init: function() {},
    preBidding: function() {
        var a = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream || !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
        snhb.console.debug("iOS detected: ", a);
        a && snhb.localSettings.modules.enableSafeFrames.hasOwnProperty("iOS") && !0 === snhb.localSettings.modules.enableSafeFrames.iOS && googletag.cmd.push(function() {
            googletag.pubads().setTargeting("_snhb-sf", "true");
            snhb.console.debug("Using SafeFrames on iOS.")
        })
    }
};
snhb.modules.adScanner = {
    init: function() {},
    preAuction: function() {
        var a = !0 === snhb.system.isMobile() ? "mobile" : "desktop",
            b = snhb.localSettings.modules.adScanner.platform || "all";
        b === a || "all" === b ? (snhb.console.log("Enabling malvertisement scanner."), pbjs.que.push(function() {
            var a = function(a, b, c, e, m) {
                    function d(a) { return (r(a) || "")[t]("/", "_")[t]("+", "-") }

                    function g(b, c, d) {
                        b = w + u(b) + "&d=" + c;
                        c = "err__" + 1 * new Date;
                        k[c] = d;
                        a[v]("<" + p + " on" + x + '="void(' + c + '())" ' + y + '="' + b + '" type="text/java' + p + '" ></' + p + ">")
                    }
                    var f =
                        b.bidder,
                        n = b.size,
                        k = a.parentWindow || a.defaultView,
                        l = k.JSON,
                        r = k.btoa,
                        u = k.encodeURIComponent;
                    if (!l || !r) return !1;
                    var p = "script",
                        y = "src",
                        t = "replace",
                        x = "error",
                        v = "write",
                        w = "https://" + c + "/?wrapper=" + u(e) + "&tpid=",
                        q = { k: { hb_bidder: [f], hb_size: [n] } };
                    return function() {
                        var c = d(e + "/" + q.k.hb_bidder[0] + ":" + q.k.hb_size[0]),
                            h = { wh: c, wd: l.parse(l.stringify(q)), wr: 0 };
                        g(c, d(l.stringify(h)), function() { a[v](b.ad) });
                        h = { d: h, t: b.ad, cb: m, id: { prebid: { adId: b.adId, cpm: b.cpm } } };
                        k[e] = {};
                        k[e][c] = h
                    }(), a.close(), !0
                },
                b = window;
            b._clrm =
                b._clrm || {};
            b._clrm.renderAd = b._clrm.renderAd || pbjs.renderAd;
            var e = b._clrm.prebid || { sandbox: 0 };
            Node.prototype.appendChild = function(a) {
                return function(b) {
                    var c;
                    if (c = "IFRAME" === b.tagName && b.id && -1 < b.id.indexOf("google_ads_iframe_")) {
                        c = { mobile: /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile/i, ios: /(.+)(iPhone|iPad|iPod)(.+)OS[\s|_](\d)_?(\d)?[_]?(\d)?.+/i, android: /Android/i };
                        var d = "" + e.sandbox;
                        c = "1" === d ? !0 : "2" === d ? !navigator.userAgent.match(c.mobile) : "3" === d ? navigator.userAgent.match(c.mobile) : "4" ===
                            d ? navigator.userAgent.match(c.ios) : "5" === d ? navigator.userAgent.match(c.android) : !1
                    }
                    c && !b.getAttribute("sandbox") && (b.setAttribute("sandbox", "allow-forms allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation"), b.setAttribute("data-forced-sandbox", !0));
                    return a.call(this, b)
                }
            }(Node.prototype.appendChild);
            pbjs.renderAd = function(b, c) {
                if (b && c) try {
                    var d = [],
                        e = pbjs.getBidResponses(),
                        m = pbjs.getHighestCpmBids(),
                        h;
                    for (h in e) d = d.concat(e[h].bids);
                    d = d.concat(m);
                    var f;
                    for (f = 0; f < d.length; f++)
                        if (d[f].adId === c) { var g = d[f]; break }
                    d = [];
                    e = !1;
                    for (f = 0; f < d.length; f++)
                        if (g.bidder === d[f]) { e = !0; break }
                    if (g && g.ad && !e) {
                        b.write = b.close = function() {};
                        window._clrm.renderAd(b, c);
                        delete b.write;
                        delete b.close;
                        a(b, g, "clarium.global.ssl.fastly.net", "t_Qv_vWzcBDsyn934F1E0MWBb1c", function(a, b, c, d, e, h) { console.log("w00t one more bad ad nixed.", arguments) }) || (b.write(g.ad), b.close());
                        return
                    }
                } catch (n) { console.log(n) }
                window._clrm.renderAd(b, c)
            }
        })) : snhb.console.debug("Malvertisement scanner not enabled for platform '" +
            a + "'")
    }
};
Number.isInteger = Number.isInteger || function(a) { return "number" === typeof a && isFinite(a) && Math.floor(a) === a };
snhb.metrics = {
    system: {},
    getTimeDifference: function(a, b, c) {
        a = b - a;
        b = { delta: -1, unit: "unset" };
        1E3 > a ? b = { delta: a, unit: "ms" } : 1E3 <= a && (b = { delta: a / 1E3, unit: "s" });
        return !0 === ("undefined" === typeof c ? !1 : !0) ? b.delta + b.unit : b
    },
    getTimeStamp: function() { var a = snhb.metrics.getTimeDifference(snhb.initTime, (new Date).getTime()); return a.delta + a.unit }
};
snhb.console = {
    consoleHistory: [],
    getLogPrefix: function() { return snhb.localSettings.system.logPrefix + "(" + snhb.metrics.getTimeStamp() + "):" },
    logConsoleHistory: function() { for (var a in this.consoleHistory) console[this.consoleHistory[a][0]].apply(console, this.consoleHistory[a][1]) },
    clearConsoleHistory: function() { this.consoleHistory = [] },
    log: function() {
        var a = Array.prototype.slice.call(arguments);
        a.unshift(this.getLogPrefix());
        snhb.console.consoleHistory.push(["log", a]);
        snhb.localSettings.system.logOutputEnabled &&
            console.log.apply(console, a)
    },
    debug: function() {
        var a = Array.prototype.slice.call(arguments);
        a.unshift(this.getLogPrefix());
        snhb.console.consoleHistory.push(["debug", a]);
        snhb.localSettings.system.debugOutputEnabled && console.debug.apply(console, a)
    },
    error: function() {
        var a = Array.prototype.slice.call(arguments);
        a.unshift(this.getLogPrefix());
        console.error.apply(console, a);
        snhb.console.consoleHistory.push(["error", a])
    },
    warn: function() {
        var a = Array.prototype.slice.call(arguments);
        a.unshift(this.getLogPrefix());
        snhb.localSettings.system.debugOutputEnabled && console.warn.apply(console, a);
        snhb.console.consoleHistory.push(["warn", a])
    }
};
snhb.system = {
    initModules: function() { for (var a in snhb.modules) snhb.localSettings.hasOwnProperty("modules") ? snhb.localSettings.modules.hasOwnProperty(a) ? (snhb.console.debug("Initializing found module '" + a + "'"), snhb.modules[a].init()) : snhb.console.warn("No configuration section for the module '" + a + "' detected.") : snhb.console.warn("No configuration section for modules detected. Skipping initialization of all modules.") },
    callModulesStageFunctions: function(a) {
        if (-1 !== "preAuction preBidding postBidding preAdServer postAdServer postAuction".split(" ").indexOf(a))
            for (var b in snhb.modules) {
                if (snhb.localSettings.hasOwnProperty("modules") &&
                    snhb.localSettings.modules.hasOwnProperty(b) && snhb.modules[b].hasOwnProperty(a)) snhb.modules[b][a]()
            } else snhb.console.error("Unknown modules stage functions call for stage '" + a + "'")
    },
    initAdUnitSettings: function() {
        for (var a in snhb.localSettings.adUnits) {
            var b = snhb.localSettings.adUnits[a];
            b.adSlotIndex = 0;
            b.timesAuctioned = 0
        }
    },
    initAuctionSettings: function() {
        snhb.localSettings.auction.running = !1;
        snhb.localSettings.auction.queuedAdUnits = [];
        snhb.localSettings.auction.detectTabletsAsMobileTraffic = !1;
        snhb.localSettings.auction.enableDetectTabletsAsMobiles =
            function() { this.detectTabletsAsMobileTraffic = !0 };
        snhb.localSettings.auction.disableDetectTabletsAsMobiles = function() { this.detectTabletsAsMobileTraffic = !1 }
    },
    initSystemSettings: function() {
        snhb.localSettings.system = {};
        snhb.localSettings.system.logPrefix = "[snhb]";
        snhb.localSettings.system.divPrefix = "snhb";
        snhb.localSettings.system.autoStartAuction = !0;
        snhb.localSettings.system.logOutputEnabled = !0;
        snhb.localSettings.system.debugOutputEnabled = !1;
        snhb.localSettings.system.PBJSDebugOutputEnabled = !1;
        snhb.localSettings.system.auctionResultOutputEnabled = !1;
        snhb.localSettings.system.allOutputEnabled = !1;
        snhb.localSettings.system.refreshAllAdSlots = !1;
        snhb.localSettings.system.detectWindowResize = !0;
        snhb.localSettings.system.autoInitAdServer = !0;
        snhb.localSettings.system.windowWasResizedSinceLastAuction = !1;
        snhb.localSettings.system.adSlotsRenderEndedGracePeriodMs = 2E3;
        snhb.localSettings.system.useSSL = "https:" === document.location.protocol.toLowerCase();
        snhb.localSettings.system.protocol = snhb.localSettings.system.useSSL ? "https://" : "http://";
        snhb.localSettings.system.cdnURL =
            snhb.localSettings.system.protocol + "static.h-bid.com";
        snhb.localSettings.system.pbjsURL = snhb.localSettings.system.cdnURL + "/prebid/" + snhb.localSettings.auction.pbjsVersion + "/prebid.js";
        snhb.localSettings.system.gptURL = snhb.localSettings.system.protocol + "www.googletagservices.com/tag/js/gpt.js";
        snhb.localSettings.system.snhbGlobalSettingsURL = snhb.localSettings.system.cdnURL + "/snhb/snhbGlobalSettings.js"
    },
    initGDPRSettings: function() {
        snhb.localSettings.gdpr = {};
        snhb.localSettings.gdpr.vendorIds = [];
        for (var a in snhb.globalSettings.gdpr.snVendorIds) snhb.localSettings.gdpr.vendorIds.push(snhb.globalSettings.gdpr.snVendorIds[a]);
        snhb.localSettings.gdpr.vendorIds.push(snhb.globalSettings.gdpr.googleId);
        snhb.localSettings.gdpr.mainGeo = "eu";
        snhb.localSettings.gdpr.reconsiderationAppealIntervalSeconds = 86400;
        (function() {
            snhb.console.log("Parsing additional GDPR options...");
            if (snhb.options.hasOwnProperty("gdpr")) {
                var a = snhb.options.gdpr,
                    c = "mainGeo additionalVendorIds reconsiderationAppealIntervalSeconds disableDetectEEA forceUserFrom customPurposeListLocation".split(" "),
                    f;
                for (f in a)
                    if (-1 !== c.indexOf(f)) {
                        var e = a[f];
                        switch (f) {
                            case "mainGeo":
                                e =
                                    e.toLowerCase();
                                if ("eu" === e || "us" === e) snhb.localSettings.gdpr.mainGeo = e;
                                break;
                            case "additionalVendorIds":
                                if (e.constructor === Array) {
                                    var d = !0,
                                        g;
                                    for (g in e) {
                                        if (0 >= e[g] || !Number.isInteger(e[g])) d = !1, snhb.console.error("additionalVendorIds: Expecting VendorIds to be positive Integer.");
                                        if (!0 === d)
                                            for (g in e) snhb.localSettings.gdpr.vendorIds.push(e[g]), snhb.console.debug("Added additional vendor ids to the cmp:", e)
                                    }
                                } else snhb.console.error("additionalVendorIds: Expecting VendorIds to be of type Array.");
                                break;
                            case "disableDetectEEA":
                                "boolean" !== typeof e ? snhb.console.error("disableDetectEEA: Expecting boolean value.") : snhb.localSettings.system.disableDetectEEA = e;
                                break;
                            case "forceUserFrom":
                                if ("EEA" === e.toUpperCase() || "!EEA" === e.toUpperCase()) snhb.localSettings.gdpr.forceUserFrom = e.toUpperCase();
                                break;
                            case "reconsiderationAppealIntervalSeconds":
                                0 > e || !Number.isInteger(e) ? snhb.console.error("reconsiderationAppealIntervalSeconds: Expecting value to be a positive Integer.") : snhb.localSettings.gdpr.reconsiderationAppealIntervalSeconds =
                                    e;
                                break;
                            case "customPurposeListLocation":
                                snhb.localSettings.gdpr.customPurposeListLocation = e;
                                break;
                            default:
                                snhb.console.warn("GDPR option '" + f + "' seems available but not implemented")
                        }
                    }["snhbForceUser=EEA", "snhbForceUser=!EEA"].forEach(function(a) {
                    if (-1 !== window.location.href.indexOf(a)) switch (a) {
                        case "snhbForceUser=EEA":
                            snhb.localSettings.gdpr.forceUserFrom = "EEA";
                            break;
                        case "snhbForceUser=!EEA":
                            snhb.localSettings.gdpr.forceUserFrom = "!EEA"
                    }
                });
                snhb.console.log("GDPR settings loaded.")
            } else snhb.console.log("No additional GDPR configuration found.")
        })()
    },
    parseOptions: function() {
        var a = { system: "logOutputEnabled debugOutputEnabled PBJSDebugOutputEnabled auctionResultOutputEnabled allOutputEnabled autoStartAuction refreshAllAdSlots detectWindowResize autoInitAdServer".split(" "), auction: ["detectTabletsAsMobileTraffic"] },
            b;
        for (b in snhb.options) {
            var c = !1,
                f;
            for (f in a)
                if (-1 !== a[f].indexOf(b)) { c = !0; var e = snhb.options[b]; "boolean" === typeof e ? snhb.localSettings[f][b] = e : snhb.console.error("Expecting boolean for '" + b + "'. Ignoring option.") }!1 === c && "gdpr" !==
                b && snhb.console.warn("Ignoring unknown option '" + b + "'.")
        }["snhb_log", "snhb_debug", "pbjs_debug", "snhb_auction_result", "snhb_log_all"].forEach(function(a) {
            if (-1 !== window.location.href.indexOf(a + "=true")) switch (a) {
                case "snhb_log":
                    snhb.localSettings.system.logOutputEnabled = !0;
                    break;
                case "snhb_debug":
                    snhb.localSettings.system.debugOutputEnabled = !0;
                    break;
                case "pbjs_debug":
                    snhb.localSettings.system.PBJSDebugOutputEnabled = !0;
                    break;
                case "snhb_auction_result":
                    snhb.localSettings.system.auctionResultOutputEnabled = !0;
                    break;
                case "snhb_log_all":
                    snhb.localSettings.system.allOutputEnabled = !0
            }
        });
        !0 === snhb.localSettings.system.allOutputEnabled && (snhb.localSettings.system.logOutputEnabled = !0, snhb.localSettings.system.debugOutputEnabled = !0, snhb.localSettings.system.auctionResultOutputEnabled = !0);
        !0 === snhb.localSettings.system.detectWindowResize && window.addEventListener("resize", function() {
            !1 === snhb.localSettings.system.windowWasResizedSinceLastAuction && (snhb.console.debug("Window size has changed since last auction."),
                snhb.localSettings.system.windowWasResizedSinceLastAuction = !0)
        })
    },
    pushCallback: function(a, b) {
        a.push = function(c) {
            Array.prototype.push.call(a, c);
            b(a)
        }
    },
    processQueue: function(a) {
        if (0 < a.length) {
            snhb.console.debug("Processing snhb.queue: ", a);
            if ("function" === typeof a[0]) try { a[0]() } catch (b) { snhb.console.error("snb.queue element error: ", b) } else snhb.console.error("snhb.queue element error: found " + typeof a[0] + " instead of function");
            a.splice(0, 1);
            0 < a.length && this.processQueue(a)
        }
    },
    doOnDOMReady: function(a) {
        var b =
            function() { if ("interactive" === document.readyState || "complete" === document.readyState) document.removeEventListener("DOMContentLoaded", b, !1), snhb.console.debug("DOM now ready."), a() },
            c = function() { if ("interactive" === document.readyState || "complete" === document.readyState) document.detachEvent("onreadystatechange", c), snhb.console.debug("DOM now ready."), a() };
        "interactive" === document.readyState || "complete" === document.readyState ? (snhb.console.debug("DOM already ready."), a()) : (snhb.console.debug("DOM not ready yet. Delaying to initialize AdServer..."),
            document.addEventListener ? document.addEventListener("DOMContentLoaded", b, !1) : document.attachEvent && document.attachEvent("onreadystatechange", c))
    },
    isMobile: function() {
        var a = navigator.userAgent || navigator.vendor || window.opera,
            b = "(android|bbd+|meego).+mobile|avantgo|bada/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)/|plucker|pocket|psp|series(4|6)0|symbian|treo|up.(browser|link)|vodafone|wap|windows ce|xda|xiino";
        "undefined" !== typeof snhb.localSettings.auction.detectTabletsAsMobileTraffic && snhb.localSettings.auction.detectTabletsAsMobileTraffic ? (b += "|android|ipad|playbook|silk", snhb.console.debug("Tablets are set to be considered mobile traffic.")) : snhb.console.debug("Tablets are set to be considered desktop traffic.");
        var c = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i;
        return (new RegExp(b, "i")).test(a) || c.test(a.substr(0, 4)) ? !0 : !1
    },
    getAllBidders: function() {
        var a = [];
        snhb.localSettings.adUnits.forEach(function(b) { b.bidderPool.forEach(function(b) {-1 === a.indexOf(b.bidder) && a.push(b.bidder) }) });
        return a
    },
    checkAdSlotRenderingEnded: function() {
        0 === snhb.localSettings.auction.adUnitAdSlotToRender.length && (snhb.console.debug("All ad slots successfully rendered before the timeout of " + snhb.localSettings.system.adSlotsRenderEndedGracePeriodMs + "ms."), window.clearTimeout(this.adSlotRenderTimeoutId),
            this.doOnAuctionEnded())
    },
    startAdSlotRenderingEndedGracePeriod: function() {
        var a = snhb.localSettings.system.adSlotsRenderEndedGracePeriodMs;
        snhb.console.debug("Waiting for all ad-slots to end rendering. Timeout: " + a + "ms.");
        this.adSlotRenderTimeoutId = window.setTimeout(function() {
            snhb.console.debug("Ad-slot rendering timed out.");
            snhb.localSettings.auction.adUnitAdSlotToRender = [];
            this.doOnAuctionEnded()
        }.bind(this), a)
    },
    cancelAdSlotRenderingEndedGracePeriod: function() {},
    doOnAuctionEnded: function() {
        snhb.console.log("All done.");
        snhb.system.callModulesStageFunctions("postAuction");
        snhb.localSettings.auction.running = !1;
        this.createAuctionSummary();
        delete this.adSlotRenderTimeoutId;
        var a = snhb.localSettings.auction.queuedAdUnits;
        if (1 <= a.length) {
            var b = [],
                c;
            for (c in a) b.push(a[c]);
            snhb.startAuction(b);
            snhb.localSettings.auction.queuedAdUnits = []
        }
    },
    getPerformanceMetricsSummary: function() {
        var a = {},
            b;
        for (b in snhb.metrics.system) a[b] = {
            startAt: snhb.metrics.getTimeDifference(snhb.initTime, snhb.metrics.system[b].timeStarted, !0),
            duration: snhb.metrics.getTimeDifference(snhb.metrics.system[b].timeStarted,
                snhb.metrics.system[b].timeEnded, !0)
        };
        for (b in snhb.metrics.auction) a[b] = { startAt: snhb.metrics.getTimeDifference(snhb.initTime, snhb.metrics.auction[b].timeStarted, !0), duration: snhb.metrics.getTimeDifference(snhb.metrics.auction[b].timeStarted, snhb.metrics.auction[b].timeEnded, !0) };
        return a
    },
    getAuctionResultsSummary: function() {
        var a = {};
        pbjs.que.push(function() {
            var b = pbjs.getBidResponses(),
                c = pbjs.getHighestCpmBids();
            pbjs.getAllWinningBids();
            for (var f in b) a[f] = [], b[f].bids.forEach(function(b) {
                var d = { highestBid: null, timedOut: null, winningBid: null, outbid: null };
                d.bidder = b.bidderCode;
                d.cpm = b.cpm;
                d.size = b.size;
                d.timeToRespondMs = b.timeToRespond;
                b.timeToRespond > snhb.localSettings.auction.timeout && (d.timedOut = !0);
                c.forEach(function(a) { b.adId === a.adId && (d.highestBid = !0) });
                snhb.metrics.auctionEnd.highestBidResponses.forEach(function(a) { b.adId === a.adId && (d.winningBid = !0, d.timedOut = !1) });
                !0 === d.highestBid && !0 === d.timedOut && (d.winningBid = !1);
                !0 === d.winningBid && null === d.highestBid && (d.highestBid = !1);
                !0 ===
                    d.winningBid && !1 === d.timedOut && (d.outbid = !0, snhb.metrics.auctionEnd.winningBids.forEach(function(a) { b.adId === a.adId && (d.outbid = !1) }));
                a[f].push(d)
            })
        });
        return a
    },
    createAuctionSummary: function() {
        snhb.metrics.auction.refreshAdServer.timeEnded = (new Date).getTime();
        snhb.metrics.auction.auction.timeEnded = (new Date).getTime();
        var a = snhb.system.getPerformanceMetricsSummary(),
            b = snhb.system.getAuctionResultsSummary();
        snhb.console.debug("Auction performance metrics summary:", a);
        snhb.console.debug("Auction bid result summary:",
            b);
        for (var c in b) snhb.console.debug("Results for '" + c + "'", b[c]);
        if (!0 === snhb.localSettings.system.auctionResultOutputEnabled && !0 === snhb.localSettings.system.logOutputEnabled && (snhb.console.log("Auction performance metrics summary:", a), "undefined" !== typeof console.table && console.table(a), snhb.console.log("Auction bid result summary:", b), "undefined" !== typeof console.table))
            for (c in b) snhb.console.log("Results for '" + c + "'", b[c]), console.table(b[c])
    },
    updateAdUnitCode: function(a) {
        a.hasOwnProperty("adSlotIndex") ||
            (a.adSlotIndex = 0);
        a.code = snhb.localSettings.system.divPrefix + "-" + a.name + "-" + a.adSlotIndex
    },
    getCookieValue: function(a) { a = ("; " + document.cookie).split("; " + a + "="); if (2 === a.length) return a.pop().split(";").shift() },
    setCookie: function(a, b, c, f) {
        "undefined" === typeof f && (f = "/");
        var e = new Date;
        e.setSeconds(e.getSeconds() + c);
        document.cookie = a + " = " + b + ";path=" + f + ";max-age=" + c + ";Expires=" + e.toUTCString()
    },
    deleteCookie: function(a, b) {
        "undefined" === typeof b && (b = "/");
        var c = new Date(Date.UTC(70, 0, 1, 0, 0, 0));
        document.cookie =
            a + " =;path=" + b + ";max-age=-1;Expires=" + c.toUTCString();
        snhb.console.debug("Deleting cookie '" + a + "'")
    },
    initCmp: function() {
        if (snhb.options.hasOwnProperty("gdpr") && snhb.options.gdpr.hasOwnProperty("introText")) {
            var a = snhb.options.gdpr.introText,
                b = snhb.globalSettings.gdpr.localization,
                c;
            for (c in a)
                for (var f in a[c]) b.hasOwnProperty(c) || (b[c] = {}), b[c].hasOwnProperty("intro") || (b[c].intro = {}), snhb.globalSettings.gdpr.localization[c].intro[f] = a[c][f]
        }
        a = "warn";
        !0 === snhb.localSettings.system.debugOutputEnabled &&
            (a = "debug");
        window.__cmp.config = { globalVendorListLocation: snhb.localSettings.system.cdnURL + "/gdpr/w3schools.com/customvendorlist.json", storeConsentGlobally: !1, storePublisherData: !1, logging: a, gdprApplies: snhb.localSettings.system.userFromEEA, allowedVendorIds: snhb.localSettings.gdpr.vendorIds, localization: snhb.globalSettings.gdpr.localization };
        "undefined" !== typeof snhb.localSettings.gdpr.customPurposeListLocation && (snhb.console.debug("Loading passed custom purpose list from: ", snhb.localSettings.gdpr.customPurposeListLocation),
            window.__cmp.config.customPurposeListLocation = snhb.localSettings.gdpr.customPurposeListLocation, window.__cmp.config.storePublisherData = !0);
        a = document.getElementsByTagName("script")[0];
        b = document.createElement("script");
        b.async = !1;
        b.src = snhb.localSettings.system.cdnURL + "/gdpr/cmp.bundle.js";
        a.parentNode.insertBefore(b, a)
    },
    cookiesAvailable: function() {
        var a = Math.random().toString(16).slice(2);
        snhb.system.setCookie(a, !0, 60);
        if ("undefined" === typeof snhb.system.getCookieValue(a)) return !1;
        snhb.system.deleteCookie(a);
        return !0
    },
    getGoogleConsent: function() {
        var a = snhb.globalSettings.gdpr.googleId;
        window.__cmp("getVendorConsents", [a], function(b) {
            b = b.vendorConsents[a];
            snhb.localSettings.gdpr.googleConsent = b;
            snhb.console.debug("Google consent: ", b)
        })
    },
    cmpConsentsCookieIsAvailable: function() { return "undefined" === typeof snhb.system.getCookieValue(snhb.globalSettings.gdpr.cmpConsentsCookieName) ? !1 : !0 },
    getABTestcase: function() { return .5 >= Math.random() ? "a" : "b" }
};
snhb.getAllAvailableAdUnitNames = function() { var a = []; try { snhb.localSettings.adUnits.forEach(function(b) {-1 === a.indexOf(b.name) && a.push(b.name) }) } catch (b) { return snhb.console.error(b), [] } return a };
snhb.addAdditionalAdSlotsToRefresh = function(a) { a.constructor === Array ? (snhb.console.debug("Adding additional ad slots for refreshing..."), snhb.localSettings.system.refreshAllAdSlots = !1, snhb.localSettings.auction.additionalAdSlotsToRefresh = a) : snhb.console.error("snhb.addAdditionalAdSlotsToRefresh() expects passed parameter to be of type Array.") };
snhb.getConsentsSummary = function() {
    var a = { purposesConsents: 0, vendorsConsents: 0, mapping: { 1: "full consent", 0: "partial consent", "-1": "no consent" } };
    window.__cmp("getVendorConsents", snhb.localSettings.gdpr.vendorIds, function(b) {
        var c = function(a) {
                for (var b in a)
                    if (!1 === a[b]) return !1;
                return !0
            },
            f = function(a) {
                for (var b in a)
                    if (!0 === a[b]) return !1;
                return !0
            },
            e = c(b.purposeConsents),
            d = f(b.purposeConsents);
        a.purposesConsents = !0 === e && !1 === d ? 1 : !1 === e && !0 === d ? -1 : 0;
        c = c(b.vendorConsents);
        b = f(b.vendorConsents);
        a.vendorsConsents = !0 === c && !1 === b ? 1 : !1 === c && !0 === b ? -1 : 0;
        snhb.console.debug("Consents summary: ", a);
        return a
    });
    return a
};
snhb.initAdServer = function() {
    snhb.system.doOnDOMReady(function() {
        var a = function(a) {
            a: {
                var b = googletag.pubads().getSlots();
                for (var f in b)
                    if (b[f].getSlotElementId() === a) { b = b[f]; break a }
                b = null
            }
            a = [];
            if (null !== b) { b = b.getSizes(); for (var e in b) a.push([b[e].l, b[e].j]) }
            return a
        };
        snhb.metrics.auction.initAdServer.timeStarted = (new Date).getTime();
        snhb.console.debug("Initializing ad-server...");
        snhb.system.callModulesStageFunctions("preAdServer");
        pbjs.que.push(function() {
            googletag.cmd.push(function() {
                var b =
                    googletag.pubads().getSlots(),
                    c = [];
                !0 === snhb.localSettings.system.windowWasResizedSinceLastAuction && (snhb.console.log("Window size has changed, destroying all adSlots before continuing."), snhb.localSettings.auction.adUnitHasAdSlot = [], googletag.destroySlots(googletag.pubads().getSlots()), snhb.localSettings.system.windowWasResizedSinceLastAuction = !1);
                if (snhb.localSettings.auction.hasOwnProperty("additionalAdSlotsToRefresh")) {
                    var f = snhb.localSettings.auction.additionalAdSlotsToRefresh;
                    snhb.console.debug("Additional ad-slots passed for ad-server refresh: ",
                        f);
                    for (var e in f) c.push(f[e]);
                    delete snhb.localSettings.auction.additionalAdSlotsToRefresh
                }
                "undefined" === typeof snhb.localSettings.auction.adUnitHasAdSlot && (snhb.localSettings.auction.adUnitHasAdSlot = []);
                snhb.localSettings.auction.adUnitAdSlotToRender = [];
                snhb.localSettings.auction.adUnits.forEach(function(d) {
                    snhb.console.debug("Preparing '" + d.code + "' for ad-server call.");
                    if (null === document.getElementById(d.code)) return snhb.console.warn("Missing DOM element '" + d.code + "' for auctioned ad-unit. Skipping in ad server refresh."), !1;
                    if (0 === d.sizes.length && 0 === d.sizesDFP.length) return snhb.console.warn("Ad unit '" + d.name + "' has no sizes. Skipping in ad server refresh."), !1;
                    if (-1 === snhb.localSettings.auction.adUnitHasAdSlot.indexOf(d.code)) {
                        snhb.console.debug("Creating new ad-slot for '" + d.code + "': " + d.sizesDFP.map(function(a) { return "[" + a + "]" }).join(", "));
                        var e = googletag.defineSlot(d.path, d.sizesDFP, d.code).addService(googletag.pubads());
                        googletag.display(d.code);
                        c.push(e);
                        snhb.localSettings.auction.adUnitHasAdSlot.push(d.code)
                    } else b.forEach(function(b) {
                        if (d.code ===
                            b.getSlotElementId()) {
                            var e = a(d.code);
                            snhb.console.debug("Using already existing ad-slot for '" + d.code + " : " + e.map(function(a) { return "[" + a + "]" }).join(", "));
                            c.push(b)
                        }
                    });
                    snhb.localSettings.auction.adUnitAdSlotToRender.push(d.code)
                });
                pbjs.setTargetingForGPTAsync();
                snhb.metrics.auction.refreshAdServer.timeStarted = (new Date).getTime();
                snhb.localSettings.system.refreshAllAdSlots ? (snhb.console.debug("Calling ad-server for all available ad-slots: ", googletag.pubads().getSlots()), googletag.pubads().refresh()) :
                    (snhb.console.debug("Calling ad-server for selected ad-slots only: ", c), googletag.pubads().refresh(c));
                snhb.system.callModulesStageFunctions("postAdServer");
                snhb.metrics.auction.initAdServer.timeEnded = (new Date).getTime();
                snhb.console.log("Ad server called.");
                snhb.system.startAdSlotRenderingEndedGracePeriod()
            })
        })
    })
};
snhb.startAuction = function(a) {
    var b = function(a) {
            var b = function(a, b) {
                    for (var c in b) {
                        var d = b[c];
                        d = a.constructor === Array && d.constructor === Array && 2 === a.length && 2 === d.length && a[0] === d[0] && a[1] === d[1] ? !0 : !1;
                        if (d) return !0
                    }
                    return !1
                },
                c = function(a, c) {
                    var d = function(a, c) { c.forEach(function(c) {!0 !== b(c, a) && a.push(c) }) },
                        e = function(a, c) {
                            var e = { prebid: [], DFP: [] };
                            if ("undefined" !== typeof c)
                                for (var f in c) {
                                    var n = !1,
                                        h = c[f].query,
                                        m = c[f].sizes;
                                    h.hasOwnProperty("maxWidth") && !h.hasOwnProperty("minWidth") ? a <= h.maxWidth &&
                                        (n = !0) : h.hasOwnProperty("maxWidth") && h.hasOwnProperty("minWidth") ? a >= h.minWidth && a <= h.maxWidth && (n = !0) : !h.hasOwnProperty("maxWidth") && h.hasOwnProperty("minWidth") && a >= h.minWidth && (n = !0);
                                    if (!0 === n) {
                                        for (var l in m) !1 === b(m[l], e.prebid) && e.prebid.push(m[l]), !1 === b(m[l], e.DFP) && e.DFP.push(m[l]);
                                        c[f].hasOwnProperty("additionalDFPSizes") && 0 < c[f].additionalDFPSizes.length && d(e.DFP, c[f].additionalDFPSizes)
                                    }
                                }
                            return e
                        };
                    c.sizes = [];
                    c.sizesDFP = [];
                    if (a.hasOwnProperty("sizes") && a.hasOwnProperty("sizeMapping") &&
                        0 !== a.sizeMapping.length) {
                        snhb.console.debug("Found sizemapping for '" + a.name + "'");
                        var f = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
                        snhb.console.debug("Detected inner width: " + f + "px");
                        e = e(f, a.sizeMapping);
                        c.sizes = e.prebid;
                        c.sizesDFP = e.DFP;
                        0 >= c.sizes.length && 0 >= c.sizesDFP.length && snhb.console.warn("No sizes matched the sizemapping for '" + a.name + "' and " + f + "px.")
                    } else a.hasOwnProperty("sizes") && (c.sizes = a.sizes, a.sizes.forEach(function(a) { c.sizesDFP.push(a) }),
                        a.hasOwnProperty("additionalDFPSizes") && 0 < a.additionalDFPSizes.length && d(c.sizesDFP, a.additionalDFPSizes), 0 >= c.sizes.length && snhb.console.warn("No sizes set for '" + a.name + "'"));
                    c.mediaTypes = {};
                    c.mediaTypes.banner = {};
                    c.mediaTypes.banner.sizes = c.sizes;
                    0 >= c.sizes.length && 0 >= c.sizesDFP.length ? snhb.console.warn("No sizes available for '" + a.name + "'.") : (snhb.console.debug("'" + a.name + "' pbjs sizes:", c.sizes.map(function(a) { return "[" + a + "]" }).join(", ")), snhb.console.debug("'" + a.name + "' gpt sizes :", c.sizesDFP.map(function(a) {
                        return "[" +
                            a + "]"
                    }).join(", ")))
                };
            snhb.console.debug("Initializing ad units: ", a);
            snhb.localSettings.auction.adUnits = [];
            var d = snhb.system.getABTestcase();
            a.forEach(function(a) {
                snhb.localSettings.adUnits.forEach(function(e) {
                    if (a === e.name && ("all" === e.platform || e.platform === snhb.localSettings.auction.platform)) {
                        if (e.hasOwnProperty("abTest")) {
                            if (e.abTest.toLowerCase() !== d) return !0;
                            snhb.console.debug(d.toUpperCase() + "-Testing '" + e.name + "'")
                        }
                        var f = {};
                        e.timesAuctioned++;
                        f.name = e.name;
                        f.path = e.path;
                        "undefined" === typeof e.code &&
                            snhb.system.updateAdUnitCode(e);
                        f.code = e.code;
                        c(e, f);
                        f.bids = [];
                        e.bidderPool.forEach(function(a) {
                            var c = !1;
                            snhb.modules.hasOwnProperty("autorefresh") && (c = snhb.modules.autorefresh.isBidderBlacklisted(e, a.bidder));
                            if (!1 === c) {
                                c = !1;
                                0 === a.sizes.length && (c = !0);
                                if (!1 === c)
                                    for (var d in a.sizes)
                                        if (!0 === b(a.sizes[d], f.sizes)) { c = !0; break }!0 === c && f.bids.push({ bidder: a.bidder, params: a.params })
                            }
                        });
                        !0 === snhb.modules.hasOwnProperty("autorefresh") && snhb.modules.autorefresh.disableQueuedRefresh(f.name);
                        snhb.localSettings.auction.adUnits.push(f)
                    }
                })
            })
        },
        c = function() {!0 === snhb.localSettings.system.autoInitAdServer ? snhb.system.doOnDOMReady(snhb.initAdServer) : snhb.console.warn("Automatic ad server refreshing disabled. Use snhb.initAdServer() to manually refresh it.") };
    if ("undefined" === typeof a || a.constructor === Array && 0 === a.length) a = snhb.getAllAvailableAdUnitNames();
    if (!0 === snhb.localSettings.auction.running) {
        snhb.console.warn("There is already an auction running, currently unable to start a new auction for ", a);
        for (var f in a) {
            b = a[f];
            var e = snhb.localSettings.auction.queuedAdUnits; -
            1 === e.indexOf(b) && e.push(b)
        }
        snhb.console.log("Queuing auction for ", snhb.localSettings.auction.queuedAdUnits);
        return !1
    }
    snhb.console.log("Starting auction for ", a);
    snhb.localSettings.auction.running = !0;
    snhb.metrics.auction = { auction: {}, bidding: {}, initAdServer: {}, refreshAdServer: {} };
    snhb.metrics.auction.auction.timeStarted = (new Date).getTime();
    snhb.metrics.auction.bidding.timeStarted = (new Date).getTime();
    snhb.system.callModulesStageFunctions("preAuction");
    snhb.localSettings.auction.platform = !0 === snhb.system.isMobile() ?
        "mobile" : "desktop";
    a.constructor !== Array ? b([a]) : b(a);
    snhb.system.callModulesStageFunctions("preBidding");
    "undefined" !== typeof snhb.localSettings.auction.adUnits && snhb.localSettings.auction.adUnits.constructor === Array && 0 < snhb.localSettings.auction.adUnits.length ? pbjs.que.push(function() {
        pbjs.adUnits = [];
        snhb.console.log("Starting bidding...");
        snhb.console.debug("Bidding platform: " + snhb.localSettings.auction.platform);
        snhb.console.debug("Bidding timout: " + snhb.localSettings.auction.timeout + "ms");
        if (snhb.localSettings.system.debugOutputEnabled)
            for (var a in snhb.localSettings.auction.adUnits) snhb.console.debug("Bidding for ad unit: " +
                snhb.localSettings.auction.adUnits[a].code + ": " + snhb.localSettings.auction.adUnits[a].sizes.map(function(a) { return "[" + a + "]" }).join(", "));
        pbjs.addAdUnits(snhb.localSettings.auction.adUnits);
        pbjs.requestBids({
            timeout: snhb.localSettings.auction.timeout,
            bidsBackHandler: function() {
                snhb.metrics.auctionEnd = {};
                snhb.metrics.auctionEnd.bidResponses = pbjs.getBidResponses();
                snhb.metrics.auctionEnd.highestBidResponses = pbjs.getHighestCpmBids();
                snhb.metrics.auctionEnd.winningBids = pbjs.getAllWinningBids();
                snhb.system.callModulesStageFunctions("postBidding");
                snhb.console.log("Bidding over. Calling ad server...");
                snhb.metrics.auction.bidding.timeEnded = (new Date).getTime();
                c()
            }
        })
    }) : (snhb.console.warn("No ad units available for this auction. Skipping bidding and continuing to ad server call..."), snhb.localSettings.auction.queuedAdUnits = [], c())
};
(function() {
    var a = function() {
            snhb.console.debug("Setting pbjs bidder adjustments.");
            if ("undefined" === typeof snhb.globalSettings.fallback) pbjs.bidderSettings = pbjs.bidderSettings || {}, snhb.localSettings.auction.bidders.forEach(function(a) {
                var b = "undefined" !== typeof snhb.globalSettings.bidderAdjustments[a] ? snhb.globalSettings.bidderAdjustments[a] : "undefined" !== typeof snhb.localSettings.bidderAdjustments && "undefined" !== typeof snhb.localSettings.bidderAdjustments[a] ? snhb.localSettings.bidderAdjustments[a] :
                    snhb.globalSettings.bidderAdjustments.default;
                var c = snhb.localSettings.auction.currency;
                if (b.c !== c || 0 < b.s) "EUR" === c && "USD" === b.c ? pbjs.bidderSettings[a] = { bidCpmAdjustment: function(a) { return a * (1 - b.s) / snhb.globalSettings.currencyConversionEURTo.USD.rate } } : "USD" === c && "EUR" === b.c ? pbjs.bidderSettings[a] = { bidCpmAdjustment: function(a) { return a * (1 - b.s) * snhb.globalSettings.currencyConversionEURTo.USD.rate } } : c === b.c && (pbjs.bidderSettings[a] = { bidCpmAdjustment: function(a) { return a * (1 - b.s) } })
            });
            else return !1
        },
        b = function() {
            pbjs.que.push(function() {
                snhb.console.debug("Setting pbjs configuration.");
                pbjs.setConfig({ userSync: { enabledBidders: "openx conversant pulsepoint rubicon appnexus districtmAnxAst connectadrealtime pubmatic".split(" "), iframeEnabled: !0 }, priceGranularity: snhb.localSettings.auction.priceGranularity, bidderSequence: "random", cookieSyncDelay: 100, debug: snhb.localSettings.system.PBJSDebugOutputEnabled, bidderTimeout: snhb.localSettings.auction.timeout })
            });
            if (snhb.localSettings.hasOwnProperty("bidderAliases")) {
                var a =
                    snhb.localSettings.bidderAliases,
                    b;
                for (b in a) {
                    var c = a[b];
                    pbjs.que.push(function() {
                        snhb.console.debug("Aliasing bidder. Using adaptor '" + b + "' for '" + c + "'");
                        pbjs.aliasBidder(b, c)
                    })
                }
            }
        },
        c = function(a) {
            var b = function() {
                    !1 === snhb.localSettings.system.eeaCookieAvailable && (snhb.system.setCookie(snhb.globalSettings.gdpr.eeaCookieName, snhb.localSettings.system.userFromEEA, snhb.globalSettings.gdpr.eeaCookieExpiresSeconds), snhb.localSettings.system.eeaCookieAvailable = !0);
                    snhb.console.log("User from EEA: ", snhb.localSettings.system.userFromEEA);
                    "function" === typeof a && a()
                },
                c = function() {
                    var a = (new Date).getTimezoneOffset();
                    0 !== a && (a /= -60);
                    var b = -2 > a || 4 < a ? !1 : !0;
                    snhb.console.debug("Timezone offset UTC " + (0 < a ? "+" : "") + a + " suggests uesr in EEA: ", b);
                    var c = navigator.language.toLowerCase();
                    a = -1 !== "de-at bg hr cs da et fi sv-fi de-de el hu is ga lv de-li lt lb mt nl no nb nn pl ro sk sl sv sv-sv".split(" ").indexOf(c) ? !0 : !1;
                    snhb.console.debug("Conclusive navigator language '" + c + "' found for detection: ", a);
                    b = !1 === b && !1 === a ? !1 : !0 === b && !0 === a || !1 ===
                        b && !0 === a ? !0 : "unknown";
                    snhb.console.debug("Browser lanuage and timezone detection concludes user from EEA: ", b);
                    return b
                },
                e = function() {
                    snhb.console.debug("Attempting geo-targeting...");
                    var a = new XMLHttpRequest;
                    a.onreadystatechange = function() {
                        if (a.readyState === XMLHttpRequest.DONE) {
                            if (200 === a.status) {
                                var c = JSON.parse(a.responseText);
                                snhb.localSettings.system.userFromEEA = c.snEEA;
                                snhb.console.debug("Geotargeting for user from EEA: ", c.snEEA)
                            } else snhb.console.debug("Unknown geo-targeting issue, assuming user from EEA."),
                                snhb.localSettings.system.userFromEEA = !0, snhb.console.error(a);
                            b()
                        }
                    };
                    a.ontimeout = function(a) {
                        snhb.localSettings.system.userFromEEA = !0;
                        snhb.console.warn("Geo-targeting timeout occured, assuming user from EEA:", a);
                        b()
                    };
                    var c = "eu";
                    snhb.localSettings.gdpr.hasOwnProperty("mainGeo") && (c = snhb.localSettings.gdpr.mainGeo);
                    a.open("GET", snhb.localSettings.system.protocol + "geo." + c + ".h-bid.com", !0);
                    a.timeout = 1500;
                    a.send()
                };
            snhb.console.debug("Detecting if user is in the EEA...");
            var d = snhb.localSettings.system.userFromEEA =
                "unknown";
            d = function() {
                var a = snhb.system.getCookieValue(snhb.globalSettings.gdpr.eeaCookieName);
                if ("undefined" === typeof a) return snhb.console.debug("No EEA cookie found."), snhb.localSettings.system.eeaCookieAvailable = !1, "unknown";
                snhb.console.debug("EEA cookie found. User from EEA: '" + a + "'");
                snhb.localSettings.system.eeaCookieAvailable = !0;
                return "true" === a ? !0 : "false" === a ? !1 : !0
            }();
            "unknown" === d && (d = c());
            "unknown" === d ? e() : (snhb.localSettings.system.userFromEEA = d, b())
        },
        f = function() {
            (adsbygoogle = window.adsbygoogle || []).pauseAdRequests = 0;
            snhb.system.pushCallback(snhb.queue, function() { snhb.system.processQueue(snhb.queue) });
            if (!0 === snhb.localSettings.system.autoStartAuction) snhb.system.processQueue(snhb.queue), snhb.startAuction();
            else return snhb.console.warn("Automatic auction starting disabled. Use snhb.snhb.getAllAvailableAdUnitNames() and snhb.startAuction([adUnitNames]) to manually start auctions."), snhb.system.processQueue(snhb.queue), googletag.cmd.push(function() {
                if (snhb.localSettings.auction.hasOwnProperty("additionalAdSlotsToRefresh")) {
                    var a =
                        snhb.localSettings.auction.additionalAdSlotsToRefresh,
                        b = a.length;
                    0 < b && (snhb.console.warn(b + " passed ad-slot" + (1 < b ? "s" : "") + " detected. Calling ad-server."), googletag.pubads().refresh(a), delete snhb.localSettings.auction.additionalAdSlotsToRefresh)
                }
            }), !1
        },
        e = function() {
            snhb.system.initGDPRSettings();
            snhb.metrics.system.loadGlobalSettings.timeEnded = (new Date).getTime();
            snhb.console.debug("Bootstrapping done.");
            "undefined" === typeof snhb.globalSettings && (snhb.console.warn("Could not load global config. Using fallback."),
                snhb.globalSettings = { fallback: !0 });
            snhb.localSettings.auction.bidders = snhb.system.getAllBidders();
            b();
            a();
            snhb.console.log("Header bidding boilerplate loaded and ready.");
            snhb.localSettings.system.hasOwnProperty("disableDetectEEA") && !0 === snhb.localSettings.system.disableDetectEEA ? (snhb.console.warn("EEA detection overridden. Skipping."), f()) : c(function() {
                if (snhb.localSettings.gdpr.hasOwnProperty("forceUserFrom")) {
                    var a = snhb.localSettings.gdpr.forceUserFrom;
                    "EEA" === a ? snhb.localSettings.system.userFromEEA = !0 : "!EEA" === a && (snhb.localSettings.system.userFromEEA = !1);
                    snhb.console.debug("Overriding userFromEEA with: ", snhb.localSettings.system.userFromEEA)
                }
                if (!0 === snhb.localSettings.system.userFromEEA && !0 === snhb.system.cookiesAvailable()) {
                    snhb.console.debug("Automatically rejecting consent for all vendors!");
                    snhb.system.setCookie("euconsent", "BOORBSaOORBSaABABAENAbAAAAA-iAAA", 2592E3);
                    snhb.system.initCmp();
                    var b = function() {
                            snhb.system.getGoogleConsent();
                            var a = snhb.localSettings.gdpr.googleConsent;
                            if ("undefined" ===
                                typeof a || !1 === a) googletag.cmd.push(function() {
                                snhb.console.warn("Setting DFP to deliver non targeted ads...");
                                googletag.pubads().setRequestNonPersonalizedAds(1)
                            }), snhb.console.warn("Setting AdSense to deliver non targeted ads..."), (adsbygoogle = window.adsbygoogle || []).requestNonPersonalizedAds = 1
                        },
                        c = function() {
                            if (0 !== snhb.localSettings.gdpr.reconsiderationAppealIntervalSeconds) {
                                var a = snhb.getConsentsSummary();
                                1 === a.purposesConsents && 1 === a.vendorsConsents && (snhb.console.debug("User has given full consent."),
                                    snhb.system.deleteCookie(snhb.globalSettings.gdpr.reconsiderationAppealCookieName), snhb.system.deleteCookie(snhb.globalSettings.gdpr.reconsiderationAppealIntervalCookieName));
                                var b = !!snhb.system.getCookieValue(snhb.globalSettings.gdpr.reconsiderationAppealCookieName),
                                    c = !!snhb.system.getCookieValue(snhb.globalSettings.gdpr.reconsiderationAppealIntervalCookieName);
                                snhb.console.debug("appealActive: " + b + " | appealMuted: " + c);
                                if (!0 === b && !1 === c && snhb.options.hasOwnProperty("gdpr"))
                                    if (snhb.options.gdpr.hasOwnProperty("reconsiderationAppealFunction")) {
                                        var d =
                                            snhb.options.gdpr.reconsiderationAppealFunction;
                                        if ("function" === typeof d) try { d() } catch (z) { snhb.console.error("Your appeal function caused an error: ", z) } else snhb.console.error("Expected 'reconsiderationAppealFunction' to be of type 'function'")
                                    } else snhb.console.warn("You have set a reconsideration appeal interval but no appeal function. Ignoring expired appeal interval.");
                                if (1 !== a.purposesConsents || 1 !== a.vendorsConsents) snhb.console.debug("User has given partial or no consent."), !1 === b && (snhb.console.debug(" Setting reconsideration appeal cookie."),
                                    snhb.system.setCookie(snhb.globalSettings.gdpr.reconsiderationAppealCookieName, !0, 31536E3)), !1 === c && (snhb.console.debug(" Setting reconsideration appeal mute cookie."), snhb.system.setCookie(snhb.globalSettings.gdpr.reconsiderationAppealIntervalCookieName, !0, snhb.localSettings.gdpr.reconsiderationAppealIntervalSeconds))
                            }
                        };
                    snhb.system.cmpConsentsCookieIsAvailable() ? (snhb.console.debug("GDPR consent cookie found. Skipping CMP."), window.__cmp("addEventListener", "cmpReady", function() {
                        var a;
                        window.__cmp("getVendorList",
                            null,
                            function(b) { a = b.vendorListVersion });
                        var d;
                        window.__cmp("getVendorConsents", null, function(a) { d = a.vendorListVersion });
                        snhb.console.debug("globalVendorListVersion: ", a);
                        snhb.console.debug("consentsVendorListVersion: ", d);
                        a === d ? (c(), b(), f()) : (snhb.console.warn("Global vendor list version does not match consents cookie vendor list version. Starting CMP."), window.__cmp("addEventListener", "onSubmit", function() {
                            c();
                            b();
                            f()
                        }), window.__cmp("showConsentTool"))
                    })) : (snhb.console.warn("No GDPR consent cookie found. Starting CMP."),
                        window.__cmp("addEventListener", "onSubmit", function() {
                            c();
                            b();
                            f()
                        }), window.__cmp("showConsentTool"))
                } else f()
            })
        };
    (adsbygoogle = window.adsbygoogle || []).pauseAdRequests = 1;
    snhb.system.initAdUnitSettings();
    snhb.system.initAuctionSettings();
    snhb.system.initSystemSettings();
    snhb.system.parseOptions();
    snhb.system.initModules();
    var d = document.getElementsByTagName("script")[0];
    snhb.console.debug("Loading pbjs...");
    snhb.metrics.system.loadPBJS = {};
    snhb.metrics.system.loadPBJS.timeStarted = (new Date).getTime();
    var g = document.createElement("script");
    g.type = "text/javascript";
    g.src = snhb.localSettings.system.pbjsURL;
    g.async = !0;
    d.parentNode.insertBefore(g, d);
    pbjs.que.push(function() {
        snhb.metrics.system.loadPBJS.timeEnded = (new Date).getTime();
        snhb.console.debug("pbjs " + pbjs.version + " ready.")
    });
    snhb.metrics.system.loadGlobalSettings = {};
    snhb.metrics.system.loadGlobalSettings.timeStarted = (new Date).getTime();
    snhb.console.debug("Loading global settings...");
    var k = document.createElement("script");
    k.type = "text/javascript";
    k.async = !0;
    k.src = snhb.localSettings.system.snhbGlobalSettingsURL;
    k.readyState ? k.onreadystatechange = function() { if ("loaded" === k.readyState || "complete" === k.readyState) k.onreadystatechange = null, e() } : k.onload = function() { e() };
    d.parentNode.insertBefore(k, d);
    snhb.metrics.system.loadGPT = {};
    window.googletag && googletag.apiReady ? (snhb.metrics.system.loadGPT.timeStarted = (new Date).getTime(), snhb.console.debug("Gpt already loaded. Skipping loading...")) : (snhb.metrics.system.loadGPT.timeStarted = (new Date).getTime(),
        snhb.console.debug("Loading gpt..."), g = document.createElement("script"), g.async = !0, g.type = "text/javascript", g.src = snhb.localSettings.system.gptURL, d.parentNode.insertBefore(g, d));
    googletag.cmd.push(function() {
        snhb.metrics.system.loadGPT.timeEnded = (new Date).getTime();
        snhb.console.debug("gpt " + googletag.getVersion() + " ready.");
        googletag.pubads().disableInitialLoad();
        googletag.pubads().enableAsyncRendering();
        googletag.pubads().enableSingleRequest();
        googletag.pubads().collapseEmptyDivs();
        googletag.enableServices()
    });
    googletag.cmd.push(function() {
        googletag.pubads().addEventListener("slotRenderEnded", function(a) {
            a = a.slot.getSlotElementId();
            if ("undefined" !== typeof snhb.localSettings.auction.adUnitAdSlotToRender) {
                var b = snhb.localSettings.auction.adUnitAdSlotToRender,
                    c = b.indexOf(a); - 1 !== c && (snhb.console.debug("Ad slot for '" + a + "' successfully rendered."), b.splice(c, 1), snhb.system.checkAdSlotRenderingEnded())
            }
        })
    })
})();