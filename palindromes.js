(function() {
    function palindromeTest(word) {
        return word === word.split("").reverse().join("");
    }

   

    module.exports = palindromeTest;
})()