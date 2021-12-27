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
            e.target.value = e.target.value.replace(/\d+/, "");
            e.target.value = e.target.value.replace(/[А-Яа-я]+/, "");            
        });
    }

    const inputEmail = document.querySelectorAll("input[type=email]");
    
    inputEmail.forEach(email => {
        email.addEventListener("input", (e) => {
                e.target.value = e.target.value.replace(/[а-я]/gi, ""); 
        });
    });
    // console.log();

    const inputTel = document.querySelectorAll("input[type=tel]");
    
    inputTel.forEach(tel => {
        tel.addEventListener("input", (e) => {
            e.target.value = e.target.value.replace(/![0-9()-]+/, ""); 
        });
    });
};

export default verification;