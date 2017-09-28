(function() {
    function hangmanTest(letter) {
        let word = "pickle rick";
        let wordArray = word.split("");
        let result = wordArray.filter(function(el) {
            return el.toLowerCase().indexOf(letter.toLowerCase()) > -1;
        })
        var num = result.length;
        let phrase="";
        if(num>0) {
          if(num ==1){
                phrase = "Yeah, the letter " + letter + " exists " + num + " time in my word";
          } else {
                phrase = "Yeah, the letter " + letter + " exists " + num + " times in my word";
        }
        } else {
                phrase = "Nope, that letter doesn't exist in my word";
        }
        return phrase;
    }

    

    module.exports = hangmanTest;
})()