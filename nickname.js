(function() {
    function nicknameTest(name, nickname) {
        let temp;
        name = name.toLowerCase();
        name = name.split("");
        nickname = nickname.toLowerCase();
        nickname = nickname.split("");
        let nicknameTemp = 0;
        
        for(let i = 0; i < name.length; i++) {
            temp = name[i];
            if(nickname[nicknameTemp] === name[i]) {
                nicknameTemp = nicknameTemp + 1;
            }

        }
        return nicknameTemp === nickname.length;
    }


    module.exports = nicknameTest;
})()