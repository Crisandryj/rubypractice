let myLibrary = [];

function Book(title,author,pages,read) {
    this.title = title,
    this.author = author,
    this.pages = pages
    this.read = read
}

function addBookToLibrary(book) {
    myLibrary.push(book)
}

//creating books for library
let book1 = new Book('Go','Cris',145,'no')
let book2 = new Book('Carry','Javy',155,'no')
let book3 = new Book('Thrid','Jany',165,'yes')

addBookToLibrary(book1)
addBookToLibrary(book2)
addBookToLibrary(book3)

let table = document.querySelector('table')

//show all books in library
function displayAllBooks(){
  for (let i = 0; i < myLibrary.length; i++) {
    let row = document.createElement('tr')
    let titleData = document.createElement('td')
    let authorData = document.createElement('td')
    let pagesData = document.createElement('td')
    let readData = document.createElement('td')
    table.appendChild(row)
    row.appendChild(titleData).textContent = myLibrary[i]['title']
    row.appendChild(authorData).textContent = myLibrary[i]['author']
    row.appendChild(pagesData).textContent = myLibrary[i]['pages']
    row.appendChild(readData).textContent = myLibrary[i]['read']
  }
}
//display books from form
function displayNewBook(newBook){
  let row = document.createElement('tr')
  let titleData = document.createElement('td')
  let authorData = document.createElement('td')
  let pagesData = document.createElement('td')
  let readData = document.createElement('td')
  table.appendChild(row)
  row.appendChild(titleData).textContent = newBook['title']
  row.appendChild(authorData).textContent = newBook['author']
  row.appendChild(pagesData).textContent = newBook['pages']
  row.appendChild(readData).textContent = newBook['read']
  console.log(newBook)
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
  const formData = new FormData(newBookForm)
  const values = [...formData.entries()];
  let title = values[0][1];
  let author = values[1][1];
  let pages = values[2][1];
  let read = values[3][1];
  console.log(read)
  displayNewBook(new Book(title,author,parseInt(pages),read))
})
