var Publication = require('./Publication')

// author(s) of an anthology is its editor
module.exports = class AnthologyPub extends Publication {

    printCatalogEntry() {
        return ( `${this.title} edited by ${this.authors}
            ${this.type}, ${this.year}
            ${this.dimensions}, ${this.pages}
            ISBN ${this.isbn}
            ${this.price}` )
    }

    getFullTitle() {
        return (`${this.title} edited by ${this.authors}`);
    }

}