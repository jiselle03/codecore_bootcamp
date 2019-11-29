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
    shelf = [];
    shelve(book) {
        this.shelf.push(book);
        this.shelf.sort(function(a, b){
            let nameA = a.title.toLowerCase()
            let nameB = b.title.toLowerCase()
            if (nameA < nameB) { return -1; }
            if (nameA > nameB) { return 1; }
            return 0;
        })
    }
    findByTitle(keyword) {
        let searchWord = keyword.toLowerCase();
        for (let i = 0; i < this.shelf.length; i++) {
            if (this.shelf[i].title.toLowerCase().includes(searchWord)) {
                return this.shelf[i].title;
            }
        }

    }
    list() {
        return this.shelf;
    }
}


const lib = new Library();
lib.shelve(eloquentJS)
lib.shelve(theRustProgLang)
lib.shelve(speakingJS)

// lib.shelve(speakingJS).shelve(theRustProgLang);

console.log(lib.findByTitle("eloquent")); // Book {title: "Eloquent Javascript", authors: Array(1), edition: 3}
console.log(lib.findByTitle("Rust")); // Book {title: "The Rust Programming Language", authors: Array(2), edition: 2}

console.log(lib.list());
// [
//   Book {title: "Eloquent Javascript", authors: Array(1), edition: 3},
//   Book {title: "The Rust Programming Language", authors: Array(2), edition: 2},
//   Book {title: "Speaking JavaScript", authors: Array(1), edition: 1},
// ]