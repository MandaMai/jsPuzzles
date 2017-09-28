(function() {
    function descendingTest(number) {
        var digits = (""+number).split("");
        digits.sort((function(a, b){return b-a}));
        var temp= digits.join("");


        return Number(temp)
    }



    module.exports = descendingTest;
})()