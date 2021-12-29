const verification = () => {
    const inputs = document.querySelectorAll(".calc-block > input");
    inputs.forEach(input => {
        input.addEventListener("input", (e) => {
            e.target.value = e.target.value.replace(/\D+/, "");
        });
    });

    const textInputs = [];
    const textName1 = document.getElementById("form1-name");
    const textName2 = document.getElementById("form2-name");
    const textName3 = document.getElementById("form3-name");
    const textMessage = document.getElementById("form2-message");

    textInputs.push(textName1, textName2, textName3, textMessage);
    
    for(let elem of textInputs){
        elem.addEventListener("input", (e) => {
            if(e.target.value.match(/[а-я]+/i)){
                let name = e.target.value.match(/[а-я]+/i)[0];
                e.target.value = name;
            } else {
                e.target.value = "";
            }
        });
    }

    const inputEmail = document.querySelectorAll("input[type=email]");
    
    inputEmail.forEach(email => {
        email.addEventListener("input", (e) => {
            if(e.target.value.match(/[а-я%&+=,()?^$#]+/i)){
                e.target.value = e.target.value.replace(/[а-я%&+=,()?^$#]+/i, "");
            } 
        });
    });
    // console.log();

    const inputTel = document.querySelectorAll("input[type=tel]");
    
    inputTel.forEach(telElem => {
        telElem.addEventListener("input", (e) => {
            if(e.target.value.match(/[0-9-()+]+/)){
                let tel = e.target.value.match(/[0-9-()+]+/)[0];
                e.target.value = tel;
            } else {
                e.target.value = "";
            }
        });
    });
};

export default verification;