class MobileMenu {
    constructor(){
        this.menuIcon = document.querySelector(".style-header__menu-icon")
        this.menuContent = document.querySelector(".style-header__menu-content")
        this.styleHeader = document.querySelector("style-header")
        this.events()
    }
    events(){
        this.menuIcon.addEventListener("click", () => this.toggleTheMenu())
    }
    toggleTheMenu (){
        this.menuContent.classList.toggle("style-header__menu-content--is-visible")
        this.styleHeader.classList.toggle("style-header--is-extended")
        this-this.menuIcon.classList.toggle("style-header__menu-icon--close-x")
    }
}

export default MobileMenu