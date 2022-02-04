const slider = (sliderClass, slideClass, dotClass,slideActiveClass = "slide-active", 
 dotActiveClass = "dot-active") => {
    const sliderBlock = document.querySelector(sliderClass);
    const slides = document.querySelectorAll(slideClass);
    const dotsList = document.querySelector(dotClass);
    let dots = [];
    
    if (sliderBlock && slides && dotsList){

    let currentSlide = 0;
    let interval;
    let timeInterval = 2000;

    
    for (let i=0; i < slides.length; i++){
        let dot = document.createElement("li");
        dot.classList.add("dot");
        if (i === 0){
            dot.classList.add(dotActiveClass);
        }
        dots.push(dot);
        dotsList.appendChild(dot);
    }

    const prevSlide = (elems, index, strClass) => {
        elems[index].classList.remove(strClass);
    };

    const nextSlide = (elems, index, strClass) => {
        elems[index].classList.add(strClass);
    };

    const autoSlide = () => {
        prevSlide(slides, currentSlide, slideActiveClass);
        prevSlide(dots, currentSlide, dotActiveClass);

        currentSlide ++;

        if(currentSlide >= slides.length){
            currentSlide = 0;
        }
        nextSlide(slides, currentSlide, slideActiveClass);
        nextSlide(dots, currentSlide, dotActiveClass);
    };

    const startSlide = (timer = 1500) => {
        interval = setInterval(autoSlide, timer);
    };

    const stopSlide = () => {
        clearInterval(interval);
    };

    sliderBlock.addEventListener('click', (e) => {
        e.preventDefault();

        if (!e.target.matches(".dot, .portfolio-btn")){
            return;
        }

        prevSlide(slides, currentSlide, slideActiveClass);
        prevSlide(dots, currentSlide, dotActiveClass);

        if (e.target.matches("#arrow-right")) {
            currentSlide ++;
        } else if (e.target.matches("#arrow-left")) {
            currentSlide --;
        } else if (e.target.classList.contains("dot")) {
            dots.forEach((dot, index) => {
                if (e.target === dot){
                    currentSlide = index;
                }
            });
        }

        if (currentSlide >= slides.length){
            currentSlide = 0;
        }

        if (currentSlide < 0){
            currentSlide = slides.length-1;
        }

        nextSlide(slides, currentSlide, slideActiveClass);
        nextSlide(dots, currentSlide, dotActiveClass);
    });

    sliderBlock.addEventListener('mouseenter', (e) => {
        if (e.target.matches(".dot, .portfolio-btn")){
            stopSlide();
        }
    }, true);

    sliderBlock.addEventListener('mouseleave', (e) => {
        if (e.target.matches(".dot, .portfolio-btn")){
            startSlide(timeInterval);
        }
    }, true);

    startSlide(timeInterval);
    // console.log();
    // portfolio-item-active
    // portfolio-btn
    // portfolio-dots
    } else {return;}
};

export default slider;