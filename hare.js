(function() {
    function makinBunnies(startingPopulation, birthRate, numberOfWeeks) {
        let population = startingPopulation;
        for (let i = 0; i < numberOfWeeks; i++)
        {
          population = population + (population * birthRate);
          //console.log(loopStep + " : " + population);
        }
        
        
        return population;
    }

    

    module.exports = makinBunnies;
})()