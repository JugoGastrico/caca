import '../styles/styles.css';
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';
import Modal from './modules/Module'


let mobileMenu = new MobileMenu();
let stickyHeader = new StickyHeader();

new Modal ()
new RevealOnScroll(document.querySelectorAll(".feature-item"), 75);
new RevealOnScroll(document.querySelectorAll(".testiomial"), 60);



if (module.hot){
    module.hot.accept()
}

