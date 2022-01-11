const sendForm = ({formId, someElem = []}) => {
    const form = document.getElementById(formId);
    const statusBlock = document.createElement("div");
    const loadText = "Загрузка...";
    const errorText = "Ошибка!";
    const successText = "Спасибо! Наш менеджер с Вами свяжется!";

    const validate = (list) => {
        let success = true;
        let successName = true;
        let successPhone = true;
        let successMess = true;
        let successEmail = true;

        list.forEach(elem => {
            if (elem.className === "form-name"){
                successName = /[а-я\ ]+/i.test(elem.value);
            } 
            if (elem.className === "form-message"){
                successMess = /[0-9а-я-().,!?\ ]+/i.test(elem.value);
            } 
            if (elem.className === "form-email"){
                successEmail = /[0-9a-z-._@]+/i.test(elem.value);
            }
            if (elem.className === "form-phone"){
                successPhone = /[0-9-()+]+/.test(elem.value);
            }                    
        });

        if (successName && successEmail && successMess && successPhone){
            success = true;
        } else {
            success = false;
        }
        
        return success;
    };

    const sendData = (data) => {
        return fetch('https://jsonplaceholder.typicode.com/posts', { 
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json"
            }
        }).then(res => res.json());
    };

    const submitForm = () => {
        const formElements = form.querySelectorAll("input");
        const formData = new FormData(form);
        const formBody = {};

        const loaderImg = document.createElement("img");
        const loaderBlock = document.createElement("div");

        loaderImg.setAttribute("src","../../images/icons/loader.svg");
        loaderImg.setAttribute("width","20px");
        loaderImg.setAttribute("id","loader");
        loaderBlock.appendChild(loaderImg);
        
        statusBlock.textContent = loadText;
        
        statusBlock.style.color = "darkgrey";
        form.append(statusBlock); 
        form.append(loaderBlock);

        formData.forEach((value, key) => {
            formBody[key] = value;
        });

        someElem.forEach((elem) => {
            const element = document.getElementById(elem.id);
            if (elem.type === "block"){
                formBody[elem.id] = element.textContent;
            } else if (elem.type === "input"){
                formBody[elem.id] = element.value;
            }
        });

        // console.log();

        if (validate(formElements)){
            sendData(formBody)
            .then(data => {
                formElements.forEach(elem => {
                    elem.value = "";
                });
                statusBlock.textContent = successText;
                loaderBlock.remove();
            })
            .catch(error => {
                statusBlock.textContent = errorText;
            });
        } else {
            alert("Данные не валидны");
        }
    };

    try {
        if(!form){
            throw new Error("Верните форму");
        }
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            submitForm();        
        });
    } catch(error) {
        console.log(error.message);
    }
    

    // console.log(form);
};

export default sendForm;