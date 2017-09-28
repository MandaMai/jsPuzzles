(function() {
    function makinChange(money) {
        let amountChange = money;
        let temp20 =(Math.floor(money/20));
        amountChange = amountChange - (temp20*20);
        let temp10 =(Math.floor(amountChange/10));
        amountChange = amountChange - (temp10*10);
        let temp5 =(Math.floor(amountChange/5));
        amountChange = amountChange - (temp5*5);
        let temp1 =amountChange;
        let arrayDollars=[temp20, temp10, temp5, temp1];
        return (arrayDollars);
    }


    module.exports = makinChange;
})()