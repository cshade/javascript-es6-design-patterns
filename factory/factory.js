var PublicationFactory = require('./PublicationFactory.js')

let pubFactory = new PublicationFactory()
let pubTypes = ["novel", "memoir", "anthology", "journal"]
let pubs = [];

let myPub1 = pubFactory.createPub(
    {type: 'novel',
    authors: [ 'Christopher X. Shade', ],
    title: 'The Good Mother of Marseille',
    year: '2019',
    dimensions: '6 x 9',
    pages: '176',
    isbn: '978-1732302525',
    price: '18.00',
    })

let myPub2 = pubFactory.createPub(
    {type: 'anthology',
    authors: [ 'Naomi Shihab Nye', ],
    title: 'This Same Sky',
    year: '1992',
    dimensions: '7 x 9',
    pages: '208',
    isbn: '978-0689806308',
    price: '10.98',
    })

let myPub3 = pubFactory.createPub(
    {type: 'journal',
    authors: [ 'C. Dylan Bassett', 'Donald Revell', 
        'Tina Cane', 'Mónica de la Torre', 'Terese Svoboda', 
        'Geoffrey Brock'],
    title: 'The Literary Review: Feverish',
    year: '2019',
    dimensions: '6 x 9',
    pages: '224',
    isbn: '978-0998019857',
    price: '15.00',
    })

console.log(`List of Titles:
    ${myPub1.getFullTitle()}
    ${myPub2.getFullTitle()}
    ${myPub3.getFullTitle()}
    `)

console.log(`Catalog:
    ${myPub1.printCatalogEntry()}
    ${myPub2.printCatalogEntry()}
    ${myPub3.printCatalogEntry()}
    `)
