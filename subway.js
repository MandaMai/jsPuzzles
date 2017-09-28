(function() {
    function subway(hungries, rent) {
        let income = 0;
        let biggestIndex = 0;
        let biggestIndexValue = 0;
        let storeList = [];
        for(let i = 0; i < hungries.length; i++){
            income = hungries[i] * 10;
            income = income - rent[i];
            storeList.push(income);
            if(income>biggestIndexValue) {
                biggestIndexValue = income;
                biggestIndex = i;
            }

        }


        // return storeList;
        return biggestIndex;
    }


    module.exports = subway;
})()