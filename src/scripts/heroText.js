export default function initHeroText() {
    document.addEventListener('DOMContentLoaded',function(event){
        // array with texts to type in typewriter
        var dataText = [ "Hey!", "My name is Robin Wassink." ];
        var classes = ["hero-title", "hero-subtitle"]
        
        // type one text in the typwriter
        // keeps calling itself until the text is finished
        function typeWriter(i, j, fnCallback) {
          // chekc if text isn't finished yet
          if (j < (dataText[i].length)) {
            // add next character to h1
            document.getElementsByClassName(classes[i])[0].innerHTML = dataText[i].substring(0, j+1) +'<span aria-hidden="true"></span>';

            // wait for a while and call this function again for next character
            setTimeout(function() {
              typeWriter(i, j + 1, fnCallback)
            }, 60);
          }
          // text finished, call callback if there is a callback function
          else if (typeof fnCallback == 'function') {
            // call callback after timeout
            if (i < dataText.length-1){
                document.getElementsByClassName(classes[i])[0].children[0].style.borderRight = "none";
            }
            setTimeout(fnCallback, 500);
          }
        }
        // start a typewriter animation for a text in the dataText array
         function StartTextAnimation(i) {
         // check if dataText[i] exists
          if (i < dataText.length) {
            // text exists! start typewriter animation
           typeWriter(i, 0, function(){
             // after callback (and whole text has been animated), start next text
             StartTextAnimation(i + 1);
           });
          }
        }
        // start the text animation
        StartTextAnimation(0);
      });
  }
  