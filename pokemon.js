(function() {
    function pokemonTest(pokeList) {
        var tempList = [];
        let temp = 0;
        let sum = 0;
        for(let i = 0; i < pokeList.length; i++) {
            temp = temp + pokeList[i];
            tempList.push(temp);
        }
        return tempList;
    } 
    module.exports = pokemonTest;
})()