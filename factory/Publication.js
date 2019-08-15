module.exports = class Publication {

    constructor (pub) {
        this.type = pub.type;
        this.authors = pub.authors;
        this.title = pub.title;
        this.year = pub.year;
        this.dimensions = pub.dimensions;
        this.pages = pub.pages;
        this.isbn = pub.isbn;
        this.price = pub.price;
    }

    printCatalogEntry() {
        return ( `${this.title} by ${this.authors}
            ${this.type}, ${this.year}
            ${this.dimensions}, ${this.pages}
            ${this.isbn}
            ${this.price}` )
    }

    getFullTitle() {
        return (`${this.title} by ${this.authors}`);
    }
}