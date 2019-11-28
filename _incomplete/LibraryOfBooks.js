// Using class syntax, model a library that holds books. Both the library and books should be constructed objects.

// Create a Library class and a Book class.
// The book should keep track of the authors, title and edition of the book.
// The Library class should have the following prototypes:
    // shelve, which stores the books in alphabetical order
    // findByTitle, which searches for the first book whose title contains the passed in string argument (ignoring case)
    // list, which returns all books in the library in an Array


class Book {
    constructor(title, author, edition) {
        this.title = title;
        this.author = author;
        this.edition = edition;
    }
}

const eloquentJS = new Book("Eloquent Javascript", ["Marijn Haverbeke"], 3);
const speakingJS = new Book("Speaking JavaScript", ["Dr. Axel Rauschmayer"], 1);
const theRustProgLang = new Book("The Rust Programming Language", ["Steve Klabnik", "Carol Nichols"],2);

class Library {
    shelve(book) {
        let shelf = [];
        shelf.push(book);
        shelf.sort(function(a, b){
            let nameA = a.title.toLowerCase()
            let nameB = b.title.toLowerCase()
            if (nameA < nameB) { return -1; }
            if (nameA > nameB) { return 1; }
            return 0;
        })
        return shelf;
    }
    findByTitle(keyword) {
        let searchWord = keyword.toLowerCase().split(' ');
        for (book in this.shelf) {
            let bookChoices = book.split(' ');
            if (searchWord === bookChoices) {
                return book;
            } else [
                return `Book not found.`
            ]
        }
    }
    list() {
        let books = [];
        for (let book in this.shelf) {
            books.push(`Book {title: ${book.title}, authors: ${book.author}, edition: ${book.edition}}`)
        }
        return books;
    }
}


const lib = new Library();
// console.log(lib.shelve(eloquentJS));
lib.shelve(eloquentJS)
// lib.shelve(theRustProgLang)
console.log(lib.shelve(theRustProgLang))

// lib.shelve(speakingJS).shelve(theRustProgLang);

// console.log(lib.findByTitle("eloquent")); // Book {title: "Eloquent Javascript", authors: Array(1), edition: 3}
// console.log(lib.findByTitle("Rust")); // Book {title: "The Rust Programming Language", authors: Array(2), edition: 2}

// console.log(lib.list());
// [
//   Book {title: "Eloquent Javascript", authors: Array(1), edition: 3},
//   Book {title: "The Rust Programming Language", authors: Array(2), edition: 2},
//   Book {title: "Speaking JavaScript", authors: Array(1), edition: 1},
// ]