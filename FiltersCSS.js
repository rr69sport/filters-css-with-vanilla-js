class FiltersCSS {
    /**
     * @author Ramsua
     * @param {HTMLElement} id img
     * @param {Object} options filter CSS propertie
     */
    constructor(id, options) {  
        this.id = document.getElementById(id);
        this.options = options;
        for (const prop in options) {
            this.id.style.filter += `${prop}(${options[prop]})`;
        }
    }
}

new FiltersCSS("myImg1", {
    grayscale: "100%"
});
new FiltersCSS("myImg2", {
    sepia: "100%"
});
new FiltersCSS("myImg3", {
    blur: "2px"
});