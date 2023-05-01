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


function displayBooks(){
  //loop thru each books title, author and pages
  for (let i = 0; i < myLibrary.length; i++) {
    console.log(myLibrary[i]['title'])
    console.log(myLibrary[i]['author'])
    console.log(myLibrary[i]['pages'])
  }
}


displayBooks()
