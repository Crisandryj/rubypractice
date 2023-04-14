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

let rows = []

function listBooks(library){
  for (let i = 0; i < library.length; i++){
    rows[i] = document.createElement("row")
    rows[i].textcontent = library[i].title
    table.appendChild(rows[i])}
}

const bookOne = new Book("Go go","Cris", 175)
const bookTwo = new Book("Fun","Jon", 155)
const bookThree = new Book("Home","Aryn", 125)

addBookToLibrary(bookOne)
addBookToLibrary(bookTwo)
addBookToLibrary(bookThree)

listBooks(myLibrary)
