(function() {
    function longx(testString) {
        testString = testString.toLowerCase();
        let biggestCount = 0;
        let currentCount = 0;
        let previousX = false;
        for(let i = 0; i < testString.length; i++){
            if(testString[i] === 'x') {//if the letter is an x
                if(previousX === false) {//if this is the first x in the curren count
                    currentCount = 0;
                    previousX = true;
                }
                currentCount = currentCount + 1;
            }else{//not an x
                if(previousX ===true) {//if this is the first non-x since a collection of x
                    previousX = false;
                    if(currentCount > biggestCount) {biggestCount = currentCount;}
                }
            }
        }
        return biggestCount;
    }


    module.exports = longx;
})()