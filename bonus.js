(function() {
    function bonus(mealCost) {
        return Math.ceil(mealCost + (mealCost * .2));
    }

    module.exports = bonus;
})()