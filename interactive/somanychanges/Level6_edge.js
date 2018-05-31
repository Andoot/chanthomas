/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
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
                            id: 'PianoEXTENDED480',
                            type: 'video',
                            tag: 'video',
                            rect: ['0px', '320px', '319px', '319px', 'auto', 'auto'],
                            source: [vid+"PianoEXTENDED480.mp4"],
                            preload: 'auto'
                        },
                        {
                            id: 'DrumsEXTENDED480',
                            type: 'video',
                            tag: 'video',
                            rect: ['0px', '0px', '319px', '319px', 'auto', 'auto'],
                            source: [vid+"DrumsEXTENDED480.mp4"],
                            preload: 'auto'
                        },
                        {
                            id: 'Trumpet480',
                            type: 'video',
                            tag: 'video',
                            rect: ['352px', '0px', '319px', '319px', 'auto', 'auto'],
                            source: [vid+"Trumpet480.mp4"],
                            preload: 'auto'
                        },
                        {
                            id: 'Drum_2480',
                            type: 'video',
                            tag: 'video',
                            rect: ['352px', '320px', '319px', '319px', 'auto', 'auto'],
                            source: [vid+"Drum_2480.mp4"],
                            preload: 'auto'
                        },
                        {
                            id: 'Sax480',
                            type: 'video',
                            tag: 'video',
                            rect: ['676px', '-29px', '348px', '349px', 'auto', 'auto'],
                            source: [vid+"Sax480.mp4"],
                            preload: 'auto'
                        },
                        {
                            id: 'BassEXTENDED480',
                            type: 'video',
                            tag: 'video',
                            rect: ['704px', '320px', '319px', '319px', 'auto', 'auto'],
                            source: [vid+"BassEXTENDED480.mp4"],
                            preload: 'auto'
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1024px', '720px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(0,0,0,1.00)"]
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

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("Level6_edgeActions.js");
})("EDGE-36549575");
