(function() {
    function tallestMountain(mtns) {
        mtns.sort(function(a,b){return a-b});
        return mtns[mtns.length-1];
    }

    function biggestNumber(list) {
        return Math.max.apply(null,list)
    }

    module.exports = tallestMountain, biggestNumber;
})()