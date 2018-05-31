/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
            'amatic-sc, sans-serif': '<script src=\"http://use.edgefonts.net/amatic-sc:n4,n7:all.js\"></script>'        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "horizontal",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'boombox_Converted_480',
                            type: 'video',
                            tag: 'video',
                            rect: ['77px', '20px', '218px', '221px', 'auto', 'auto'],
                            loop: 'loop',
                            source: [vid+"boombox_Converted_480.mp4"],
                            preload: 'auto'
                        },
                        {
                            id: 'Eater_Converted_480',
                            type: 'video',
                            tag: 'video',
                            rect: ['383px', '210px', '230px', '211px', 'auto', 'auto'],
                            loop: 'loop',
                            source: [vid+"Eater_Converted_480.mp4"],
                            preload: 'auto'
                        },
                        {
                            id: 'moneybag_Converted_480',
                            type: 'video',
                            tag: 'video',
                            rect: ['342px', '20px', '324px', '174px', 'auto', 'auto'],
                            source: [vid+"moneybag_Converted_480.mp4"],
                            preload: 'auto'
                        },
                        {
                            id: 'mpc_Converted_480',
                            type: 'video',
                            tag: 'video',
                            rect: ['718px', '27px', '187px', '188px', 'auto', 'auto'],
                            source: [vid+"mpc_Converted_480.mp4"],
                            preload: 'auto'
                        },
                        {
                            id: 'rockon_Converted_480',
                            type: 'video',
                            tag: 'video',
                            rect: ['77px', '255px', '208px', '167px', 'auto', 'auto'],
                            loop: 'loop',
                            source: [vid+"rockon_Converted_480.mp4"],
                            preload: 'auto'
                        },
                        {
                            id: 'treasurechest_Converted_480',
                            type: 'video',
                            tag: 'video',
                            rect: ['62px', '436px', '270px', '221px', 'auto', 'auto'],
                            source: [vid+"treasurechest_Converted_480.mp4"],
                            preload: 'auto'
                        },
                        {
                            id: 'shooter_Converted_480',
                            type: 'video',
                            tag: 'video',
                            rect: ['651px', '222px', '350px', '188px', 'auto', 'auto'],
                            loop: 'loop',
                            source: [vid+"shooter_Converted_480.mp4"],
                            preload: 'auto'
                        },
                        {
                            id: 'thinkbubble_Converted_480',
                            type: 'video',
                            tag: 'video',
                            rect: ['708px', '421px', '236px', '236px', 'auto', 'auto'],
                            source: [vid+"thinkbubble_Converted_480.mp4"],
                            preload: 'auto'
                        },
                        {
                            id: 'walker_Converted_480',
                            type: 'video',
                            tag: 'video',
                            rect: ['390px', '421px', '218px', '218px', 'auto', 'auto'],
                            source: [vid+"walker_Converted_480.mp4"],
                            preload: 'auto'
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1024px', '720px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("FMP_edgeActions.js");
})("EDGE-55141061");
