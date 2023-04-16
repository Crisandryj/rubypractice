let myLibrary = []

function Book(title,author,pages){
  this.title = title
  this.author = author
  this.pages = pages
}

function addBookToLibrary(book){
  myLibrary.push(book)
}

const table = document.querySelector("tbody")

let rows = []
let data = []

function listBooks(library){
  for (let i = 0; i < library.length; i++){
    rows[i] = document.createElement("tr")
    data[i] = document.createElement("td")
    const row = table.appendChild(rows[i])
    console.log(data[i])
    row.appendChild(data[i])
    data[i].textContent = myLibrary[i].title
  }
}

const bookOne = new Book("Go go","Cris", 175)
const bookTwo = new Book("Fun","Jon", 155)
const bookThree = new Book("Home","Aryn", 125)

addBookToLibrary(bookOne)
addBookToLibrary(bookTwo)
addBookToLibrary(bookThree)

listBooks(myLibrary)
