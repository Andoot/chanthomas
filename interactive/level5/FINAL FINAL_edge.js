/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
            'yesteryear, sans-serif': '<script src=\"http://use.edgefonts.net/yesteryear:n4:all.js\"></script>'        },
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
                            id: 'Loop_11',
                            type: 'video',
                            tag: 'video',
                            rect: ['55px', '31px', '256px', '317px', 'auto', 'auto'],
                            cursor: 'pointer',
                            source: [vid+"Loop_11.mp4"],
                            preload: 'auto'
                        },
                        {
                            id: 'Drums_2',
                            type: 'video',
                            tag: 'video',
                            rect: ['641px', '0px', '292px', '362px', 'auto', 'auto'],
                            cursor: 'pointer',
                            source: [vid+"Drums_2.mp4"],
                            preload: 'auto'
                        },
                        {
                            id: 'Vocal_Converted_',
                            type: 'video',
                            tag: 'video',
                            rect: ['309px', '382px', '291px', '360px', 'auto', 'auto'],
                            cursor: 'pointer',
                            source: [vid+"Vocal_Converted_.mp4"],
                            preload: 'auto'
                        },
                        {
                            id: 'Bass_1',
                            type: 'video',
                            tag: 'video',
                            rect: ['3px', '355px', '292px', '362px', 'auto', 'auto'],
                            cursor: 'pointer',
                            source: [vid+"Bass_1.mp4"],
                            preload: 'auto'
                        },
                        {
                            id: 'FX_2_Fix',
                            type: 'video',
                            tag: 'video',
                            rect: ['650px', '396px', '279px', '346px', 'auto', 'auto'],
                            cursor: 'pointer',
                            source: [vid+"FX_2_Fix.mp4"],
                            preload: 'auto'
                        },
                        {
                            id: 'Loop_222',
                            type: 'video',
                            tag: 'video',
                            rect: ['328px', '11px', '304px', '376px', 'auto', 'auto'],
                            clip: 'rect(10.37646484375px 304px 373.387451171875px 0px)',
                            cursor: 'pointer',
                            source: [vid+"Loop_222.mp4"],
                            preload: 'auto',
                            transform: [[],[],[],['0.89097','0.89097']]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '960px', '1024px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 60077,
                    autoPlay: false,
                    data: [
                        [
                            "eid46",
                            "width",
                            0,
                            0,
                            "linear",
                            "${FX_2_Fix}",
                            '279px',
                            '279px'
                        ],
                        [
                            "eid88",
                            "left",
                            0,
                            0,
                            "linear",
                            "${FX_2_Fix}",
                            '650px',
                            '650px'
                        ],
                        [
                            "eid53",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Drums_2}",
                            '641px',
                            '641px'
                        ],
                        [
                            "eid45",
                            "height",
                            0,
                            0,
                            "linear",
                            "${FX_2_Fix}",
                            '346px',
                            '346px'
                        ],
                        [
                            "eid43",
                            "height",
                            0,
                            0,
                            "linear",
                            "${Vocal_Converted_}",
                            '360px',
                            '360px'
                        ],
                        [
                            "eid44",
                            "width",
                            0,
                            0,
                            "linear",
                            "${Vocal_Converted_}",
                            '291px',
                            '291px'
                        ],
                        [
                            "eid50",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Loop_11}",
                            '31px',
                            '31px'
                        ],
                        [
                            "eid52",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Loop_222}",
                            '11px',
                            '11px'
                        ],
                        [
                            "eid51",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Loop_222}",
                            '328px',
                            '328px'
                        ],
                        [
                            "eid87",
                            "top",
                            0,
                            0,
                            "linear",
                            "${FX_2_Fix}",
                            '396px',
                            '396px'
                        ],
                        [
                            "eid37",
                            "height",
                            0,
                            0,
                            "linear",
                            "${Loop_11}",
                            '317px',
                            '317px'
                        ],
                        [
                            "eid35",
                            "height",
                            0,
                            0,
                            "linear",
                            "${Bass_1}",
                            '362px',
                            '362px'
                        ],
                        [
                            "eid86",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Bass_1}",
                            '3px',
                            '3px'
                        ],
                        [
                            "eid38",
                            "width",
                            0,
                            0,
                            "linear",
                            "${Loop_11}",
                            '256px',
                            '256px'
                        ],
                        [
                            "eid83",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Vocal_Converted_}",
                            '382px',
                            '382px'
                        ],
                        [
                            "eid49",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Loop_11}",
                            '55px',
                            '55px'
                        ],
                        [
                            "eid85",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Bass_1}",
                            '355px',
                            '355px'
                        ],
                        [
                            "eid40",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${Loop_222}",
                            '0.89097',
                            '0.89097'
                        ],
                        [
                            "eid36",
                            "width",
                            0,
                            0,
                            "linear",
                            "${Bass_1}",
                            '292px',
                            '292px'
                        ],
                        [
                            "eid34",
                            "width",
                            0,
                            0,
                            "linear",
                            "${Drums_2}",
                            '292px',
                            '292px'
                        ],
                        [
                            "eid33",
                            "height",
                            0,
                            0,
                            "linear",
                            "${Drums_2}",
                            '362px',
                            '362px'
                        ],
                        [
                            "eid54",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Drums_2}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid84",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Vocal_Converted_}",
                            '309px',
                            '309px'
                        ],
                        [
                            "eid39",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${Loop_222}",
                            '0.89097',
                            '0.89097'
                        ],
                            [ "eid1", "trigger", 0, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${Drums_2}', [] ] ],
                            [ "eid4", "trigger", 0, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${Bass_1}', [] ] ],
                            [ "eid3", "trigger", 0, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${Loop_11}', [] ] ],
                            [ "eid6", "trigger", 0, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${FX_2_Fix}', [] ] ],
                            [ "eid5", "trigger", 0, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${Vocal_Converted_}', [] ] ],
                            [ "eid15", "trigger", 0, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${Loop_222}', [] ] ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("FINAL%20FINAL_edgeActions.js");
})("EDGE-182371932");
