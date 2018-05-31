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
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         
         // Pause a video track 
         sym.$("Bass_1")[0].pause();
         
         // Pause a video track 
         sym.$("FX_2_Fix")[0].pause();
         
         // Pause a video track 
         sym.$("Drums_2")[0].pause();
         
         // Pause a video track 
         sym.$("Loop_11")[0].pause();
         
         // Pause a video track 
         sym.$("Loop_222")[0].pause();
         
         // Pause a video track 
         sym.$("Vocal_Converted_")[0].pause();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Loop_222}", "click", function(sym, e) {
         
         // Replay a video track from the beginning, regardless of current playing state 
         sym.$("Loop_222")[0].currentTime = 0;
         if (sym.$("Loop_222")[0].paused) {
         	sym.$("Loop_222")[0].play();
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Loop_222}", "dblclick", function(sym, e) {
         // insert code for mouse double click here
         // Pause a video track 
         sym.$("Loop_222")[0].pause();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${FX_2_Fix}", "click", function(sym, e) {
         // insert code for mouse click here
         // Play a video track 
         sym.$("FX_2_Fix")[0].play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Vocal_Converted_}", "click", function(sym, e) {
         // insert code for mouse click here
         // Play a video track 
         sym.$("Vocal_Converted_")[0].play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Bass_1}", "click", function(sym, e) {
         
         // Replay a video track from the beginning, regardless of current playing state 
         sym.$("Bass_1")[0].currentTime = 0;
         if (sym.$("Bass_1")[0].paused) {
         	sym.$("Bass_1")[0].play();
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Bass_1}", "dblclick", function(sym, e) {
         // insert code for mouse double click here
         // Pause a video track 
         sym.$("Bass_1")[0].pause();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Drums_2}", "click", function(sym, e) {
         
         // Replay a video track from the beginning, regardless of current playing state 
         sym.$("Drums_2")[0].currentTime = 0;
         if (sym.$("Drums_2")[0].paused) {
         	sym.$("Drums_2")[0].play();
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Drums_2}", "dblclick", function(sym, e) {
         // insert code for mouse double click here
         // Pause a video track 
         sym.$("Drums_2")[0].pause();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Loop_11}", "click", function(sym, e) {
         
         // Replay a video track from the beginning, regardless of current playing state 
         sym.$("Loop_11")[0].currentTime = 0;
         if (sym.$("Loop_11")[0].paused) {
         	sym.$("Loop_11")[0].play();
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Loop_11}", "dblclick", function(sym, e) {
         // insert code for mouse double click here
         // Pause a video track 
         sym.$("Loop_11")[0].pause();
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-182371932");