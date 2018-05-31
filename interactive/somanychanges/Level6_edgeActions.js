/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindElementAction(compId, symbolName, "${PianoEXTENDED480}", "click", function(sym, e) {
         // insert code for mouse click here
         // Replay a video track from the beginning, regardless of current playing state 
         sym.$("PianoEXTENDED480")[0].currentTime = 0;
         if (sym.$("PianoEXTENDED480")[0].paused) {
         	sym.$("PianoEXTENDED480")[0].play();
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${PianoEXTENDED480}", "dblclick", function(sym, e) {
         // insert code for mouse double click here
         // Pause a video track 
         sym.$("PianoEXTENDED480")[0].pause();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${DrumsEXTENDED480}", "click", function(sym, e) {
         // insert code for mouse click here
         // Replay a video track from the beginning, regardless of current playing state 
         sym.$("DrumsEXTENDED480")[0].currentTime = 0;
         if (sym.$("DrumsEXTENDED480")[0].paused) {
         	sym.$("DrumsEXTENDED480")[0].play();
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${DrumsEXTENDED480}", "dblclick", function(sym, e) {
         // insert code for mouse double click here
         // Pause a video track 
         sym.$("DrumsEXTENDED480")[0].pause();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Trumpet480}", "click", function(sym, e) {
         // insert code for mouse click here
         // Replay a video track from the beginning, regardless of current playing state 
         sym.$("Trumpet480")[0].currentTime = 0;
         if (sym.$("Trumpet480")[0].paused) {
         	sym.$("Trumpet480")[0].play();
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Drum_2480}", "click", function(sym, e) {
         // insert code for mouse click here
         // Replay a video track from the beginning, regardless of current playing state 
         sym.$("Drum_2480")[0].currentTime = 0;
         if (sym.$("Drum_2480")[0].paused) {
         	sym.$("Drum_2480")[0].play();
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Sax480}", "click", function(sym, e) {
         // insert code for mouse click here
         // Replay a video track from the beginning, regardless of current playing state 
         sym.$("Sax480")[0].currentTime = 0;
         if (sym.$("Sax480")[0].paused) {
         	sym.$("Sax480")[0].play();
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${BassEXTENDED480}", "click", function(sym, e) {
         // insert code for mouse click here
         // Replay a video track from the beginning, regardless of current playing state 
         sym.$("BassEXTENDED480")[0].currentTime = 0;
         if (sym.$("BassEXTENDED480")[0].paused) {
         	sym.$("BassEXTENDED480")[0].play();
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${BassEXTENDED480}", "dblclick", function(sym, e) {
         // insert code for mouse double click here
         // Pause a video track 
         sym.$("BassEXTENDED480")[0].pause();
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-36549575");