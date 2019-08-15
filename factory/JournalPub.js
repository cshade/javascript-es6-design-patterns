var Publication = require('./Publication')

// author(s) of a journal are its contributors
module.exports = class JournalPub extends Publication {
    constructor(pub) {
        super(pub);
        this.contributors = Array.from(this.authors);
    }

    printCatalogEntry() {
        return ( `${this.title}
            ${this.type}, ${this.year}
            ${this.dimensions}, ${this.pages}
            contributors: ${this.contributors}...
            ISBN ${this.isbn}
            ${this.price}` )
    }

    getFullTitle() {
        return (`${this.title}, ${this.year}`);
    }


}