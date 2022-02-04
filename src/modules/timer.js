const timer = (deadline) => {
    const timerHours = document.getElementById("timer-hours");
    const timerMinutes = document.getElementById("timer-minutes");
    const timerSeconds = document.getElementById("timer-seconds");

    const getTimeRemain = () => {
        let dateStop = new Date(deadline).getTime();
        let dateNow = new Date().getTime();
        let timeRemain = (dateStop - dateNow)/1000;
    
        let hours = Math.floor(timeRemain/60/60);
        let minutes = Math.floor((timeRemain/60)%60);
        let seconds = Math.floor(timeRemain%60);
        
        return {timeRemain, hours, minutes, seconds};
        
    };

    const updateClock = () => {
        let getTime = getTimeRemain();
        
        if(getTime.hours < 10){
            getTime.hours = "0" + getTime.hours;
        } else if(getTime.minutes < 10){
            getTime.minutes = "0" + getTime.minutes;
        } else if(getTime.seconds < 10){
            getTime.seconds = "0" + getTime.seconds;
        }

        timerHours.textContent = getTime.hours;
        timerMinutes.textContent = getTime.minutes;
        timerSeconds.textContent = getTime.seconds;

        // if (getTime.timeRemain > 0){
        //     setTimeout(updateClock, 1000);
        // }
    };
    
    const startTimer = () => {
        let getTime = getTimeRemain();
    if (getTime.timeRemain > 0){
            setInterval(updateClock, 1000);
        }
    };
    startTimer();
};

export default timer;