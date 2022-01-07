import timer from './modules/timer';
import menu from './modules/menu';
import modal from './modules/modal';
import tabs from './modules/tabs';
import verification from './modules/verification';
import slider from './modules/slider';
import calc from './modules/calc';
import sendForm from './modules/sendForm';



timer('14 january 2022');
menu();
modal();
verification();
tabs();
slider(".portfolio-content", ".portfolio-item",  ".portfolio-dots", "portfolio-item-active","dot-active");
calc(100);
sendForm({
    formId: "form1",
    someElem: [
        {
            type: "block",
            id: "total",
        }
    ]
});
sendForm({
    formId: "form2",
    someElem: [
        {
            type: "block",
            id: "total",
        }
    ]
});
sendForm({
    formId: "form3",
    someElem: [
        {
            type: "block",
            id: "total",
        }
    ]
});