let myLibrary = []

function Book(title,author,pages){
  this.title = title
  this.author = author
  this.pages = pages
}

function addBookToLibrary(book){
  myLibrary.push(book)
}

const table = document.querySelector("table")

function listBooks(library){
  for (let i = 0; i < library.length; i++){
    const `titleRow${i}` = document.createElement("row")
    `row${i}`.textcontent = library[i].title
    table.appendChild(`titleRow${i})`  }
}

const bookOne = new Book("Go go","Cris", 175)
const bookTwo = new Book("Fun","Jon", 155)
const bookThree = new Book("Home","Aryn", 125)

addBookToLibrary(bookOne)
addBookToLibrary(bookTwo)
addBookToLibrary(bookThree)

listBooks(library)
