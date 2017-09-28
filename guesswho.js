(function() {
    function guesswho(functionList) {
        let result = true;
        let functionCount = 0;
        let resultArray = [];
        for(let i = 1; i <= 100; i++){
            result = true;
            for(let j = 0; j < functionList.length; j++){
                result = functionList[j](i);
                if(result===false) {break;}
            }
           if(result==true){resultArray.push(i);} 
        }
        return resultArray;
    }
    module.exports = guesswho;
})()