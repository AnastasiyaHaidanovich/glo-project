const greeting = document.querySelector(".greeting");
const weekday = document.querySelector(".weekday");
const timeNow = document.querySelector(".time-now");
const remainingTime = document.querySelector(".remaining-time");
const week = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];



const addGreeting = () => {
    let dateNow = new Date().toLocaleTimeString().substring(0, 2);
    if(dateNow >= 6 && dateNow < 10){
        greeting.textContent = "Доброе утро";
    } else if(dateNow >= 10 && dateNow < 17){
        greeting.textContent = "Добрый день";
    } else if(dateNow >= 17 && dateNow < 22){
        greeting.textContent = "Добрый вечер";
    } else if(dateNow >= 22 || dateNow < 6){
        greeting.textContent = "Доброй ночи";
    }
};

const addWeekday = () => {
    weekday.textContent = "Сегодня: " + week[new Date().getDay()-1];
};

const addTimeNow = () => {
    timeNow.textContent = "Текущее время: " + new Date().toLocaleTimeString('en');
};

const addRemainingTime = () => {
    let dateNY = new Date('01 january 2022').getTime();
        let dateNow = new Date().getTime();
        let timeRemain = Math.floor((dateNY - dateNow)/1000/60/60/24);
    remainingTime.textContent = "До нового года осталось " + timeRemain + " дней";
    return {timeRemain};
};

const startTimer = () => {
    let getTime = addRemainingTime();
    addGreeting();
    addWeekday();
    addTimeNow();
    addRemainingTime();
if (getTime.timeRemain > 0){
        setInterval(addRemainingTime, 1000);
    } else {
        remainingTime.textContent = "Новый год уже наступил!";
    }
    setInterval(startTimer, 1000);
};
startTimer();
 