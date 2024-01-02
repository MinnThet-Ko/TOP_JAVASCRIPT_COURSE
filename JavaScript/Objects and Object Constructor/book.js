const myLibrary = []
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? "read" : "not read yet"}`
    }
}

function loadBooks() {
    const book1 = new Book("Misery", "Stephen King", 500, true);
    myLibrary.push(book1);

    const book2 = new Book("Mountain of Madness", "H.P Lovecraft", 600, false);
    myLibrary.push(book2);

    //Create table
    bookTable = document.createElement('table');
    bookTable.style.width = '400px';

    bookTableHeaderRow = document.createElement('th');

    bookTableHeaderNameCell = document.createElement('td');
    bookTableHeaderNameCell.innerHTML = "Book Name";
    bookTableHeaderNameCell.style.width = '300px';
    bookTableHeaderRow.appendChild(bookTableHeaderNameCell);

    bookTableHeaderAuthorCell = document.createElement('td');
    bookTableHeaderAuthorCell.innerHTML = "Author";
    bookTableHeaderAuthorCell.style.width = '100px';
    bookTableHeaderRow.appendChild(bookTableHeaderAuthorCell);

    bookTable.appendChild(bookTableHeaderRow);

    myLibrary.forEach(book => {
        bookRow = document.createElement('tr');

        nameCell = document.createElement('td');
        nameCell.innerHTML = book.title;
        nameCell.style.width = '300px';
        bookRow.appendChild(nameCell);

        authorCell = document.createElement('td');
        authorCell.innerHTML = book.author;
        authorCell.style.width = '100px';
        bookRow.appendChild(authorCell);

        bookTable.appendChild(bookRow);
    });

    body = document.getElementsByTagName('body')[0];
    document.body.appendChild(bookTable);

    console.log(myLibrary.length);
}

const theInstitute = new Book("The Institute", "Stephen King", 500, true);
console.log(theInstitute.info());

window.addEventListener("load", loadBooks());