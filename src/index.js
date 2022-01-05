import timer from './modules/timer';
import menu from './modules/menu';
import modal from './modules/modal';
import tabs from './modules/tabs';
import verification from './modules/verification';
import slider from './modules/slider';
import calc from './modules/calc';



timer('07 january 2022');
menu();
modal();
verification();
tabs();
slider(".portfolio-content", ".portfolio-item",  ".portfolio-dots", "portfolio-item-active","dot-active");
calc(100);