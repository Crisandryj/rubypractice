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
let title = []
let author = []
let pages = []

function listBooks(library){
  for (let i = 0; i < library.length; i++){
    rows[i] = document.createElement("tr")
    title[i] = document.createElement("td")
    author[i] = document.createElement("td")
    pages[i] = document.createElement("td")
    const row = table.appendChild(rows[i])
    console.log(title[i])
    row.appendChild(title[i])
    row.appendChild(author[i])
    row.appendChild(pages[i])
    title[i].textContent = myLibrary[i].title
    author[i].textContent = myLibrary[i].author
    pages[i].textContent = myLibrary[i].pages
  }
}

const formContainer = document.querySelector('.formContainer')
const button = document.querySelector('.showbtn')

button.addEventListener('click',() => {
  formContainer.classList.toggle("hidden")
})


const bookOne = new Book("Go go","Cris", 175)
const bookTwo = new Book("Fun","Jon", 155)
const bookThree = new Book("Home","Aryn", 125)

addBookToLibrary(bookOne)
addBookToLibrary(bookTwo)
addBookToLibrary(bookThree)

const submit = document.querySelector('#submit')

const bookForm = document.querySelector('form')

function myFunction() {
  addBookToLibrary(bookOne);
}

document.getElementById("newbook").addEventListener("submit", myFunction);

function addToList() {
  let title = bookForm.elements['title'].value
  let author = bookForm.elements['author'].value
  let pages = bookForm.elements['pages'].value
  let newbook = new Book(title,author,pages)
  addBookToLibrary(newbook)
}

submit.addEventListener('click',addToList());


listBooks(myLibrary)
