let myLibrary = [];

function Book(title,author,pages) {
    this.title = title,
    this.author = author,
    this.pages = pages
}

function addBookToLibrary(book) {
    myLibrary.push(book)
}

//creating books for library
let book1 = new Book('Go','Cris',145)
let book2 = new Book('Carry','Javy',155)
let book3 = new Book('Thrid','Jany',165)

addBookToLibrary(book1)
addBookToLibrary(book2)
addBookToLibrary(book3)

let table = document.querySelector('table')

function addRowsToTable(){
  for (let i = 0; i < myLibrary.length; i++) {
    let row = document.createElement('tr')
    let titleData = document.createElement('td')
    let authorData = document.createElement('td')
    let pagesData = document.createElement('td')
    table.appendChild(row)
    row.appendChild(titleData)
    row.appendChild(authorData)
    row.appendChild(pagesData)
  }
}

function displayBooks(){
  //for each book in library add row
    addRowsToTable()
  //loop thru each books title, author and pages
  for (let i = 0; i < myLibrary.length; i++) {
    console.log(myLibrary[i]['title'])
    console.log(myLibrary[i]['author'])
    console.log(myLibrary[i]['pages'])
  }
}


displayBooks()
