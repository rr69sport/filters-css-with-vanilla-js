/**
 *  filter: url("filters.svg#filter-id");
 *  filter: blur(5px);
 *  filter: brightness(0.4);
 *  filter: contrast(200%);
 *  filter: drop-shadow(16px 16px 20px blue);
 *  filter: grayscale(50%);
 *  filter: hue-rotate(90deg);
 *  filter: invert(75%);
 *  filter: opacity(25%);
 *  filter: saturate(30%);
 *  filter: sepia(60%);

    // Apply multiple filters
 *  filter: contrast(175%) brightness(3%);

    // Global values
 *  filter: inherit;
 *  filter: initial;
 *  filter: unset;
 */

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
    contrast: "150%",
    brightness: '120%',
    opacity: '75%'
});

new FiltersCSS("myImg2", {
    sepia: "100%"
});

new FiltersCSS("myImg3", {
    blur: "2px"
});