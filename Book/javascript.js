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

function displayBooks(){
  for (let i = 0; i < myLibrary.length; i++) {
    let row = document.createElement('tr')
    let titleData = document.createElement('td')
    let authorData = document.createElement('td')
    let pagesData = document.createElement('td')
    table.appendChild(row)
    row.appendChild(titleData).textContent = myLibrary[i]['title']
    row.appendChild(authorData).textContent = myLibrary[i]['author']
    row.appendChild(pagesData).textContent = myLibrary[i]['pages']
  }
}

//selects new book button and form container
let showBtn = document.querySelector('.showbtn')
let container = document.querySelector('.formContainer')

//unhides the new book form
showBtn.addEventListener('click',()=>{
  container.classList.toggle('hidden')
})

let newBookTitle = document.querySelector('#title').value
let newBookAuthor = document.querySelector('#author').value
let newBookPages = document.querySelector('#pages').value

let newBookForm = document.querySelector('#newbookform')
let newBookSubmit = document.querySelector('#submit')

newBookSubmit.addEventListener('click',(e)=>{
  e.preventDefault
  console.log(newBookTitle)
})

console.log(newBookForm)


displayBooks()
