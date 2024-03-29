let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title,
    this.author = author,
    this.pages = pages
  this.read = read
}

Book.prototype.readToggle = function() {
  if (this.read === 'Yes') {
    this.read = 'No'
  } else {
    this.read = 'Yes'
  }
}

function addBookToLibrary(book) {
  myLibrary.push(book)
}

let table = document.querySelector('table')

//show all books in library
function displayAllBooks() {
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
function displayNewBook(myLibrary) {
  let row = document.createElement('tr')
  let titleData = document.createElement('td')
  let authorData = document.createElement('td')
  let pagesData = document.createElement('td')
  let readData = document.createElement('td')
  let remove = document.createElement("button")
  //create read switch
  let switchLabel = document.createElement("label")
  switchLabel.classList.add('switch')
  let switchInput = document.createElement("input")
  switchInput.setAttribute('type', 'checkbox')
  let switchSpan = document.createElement("span")
  switchSpan.classList.add('slider')
  switchLabel.appendChild(switchInput)
  switchLabel.appendChild(switchSpan)

  table.appendChild(row)
  let bookNum = myLibrary.length - 1
  row.appendChild(remove).textContent = "Remove"
  row.appendChild(titleData).textContent = myLibrary[bookNum]['title']
  row.appendChild(authorData).textContent = myLibrary[bookNum]['author']
  row.appendChild(pagesData).textContent = myLibrary[bookNum]['pages']
  row.appendChild(switchLabel)
  switchInput.addEventListener('click', () => {
    myLibrary[bookNum].readToggle()
    row.appendChild(readData).textContent = myLibrary[bookNum]['read']
  })

  //remove book from table after click
  remove.addEventListener('click', () => {
    row.removeChild(titleData)
    row.removeChild(authorData)
    row.removeChild(pagesData)
    row.removeChild(remove)
    row.removeChild(switchLabel)
    if (myLibrary[bookNum]['read']) {
      row.removeChild(readData)
    }
  })
}

//selects new book button and form container
let showBtn = document.querySelector('.showbtn')
let container = document.querySelector('.formContainer')

//unhides the new book form
showBtn.addEventListener('click', () => {
  container.classList.toggle('hidden')
})

let newBookTitle = document.querySelector('#title').value
let newBookAuthor = document.querySelector('#author').value
let newBookPages = document.querySelector('#pages').value

let newBookForm = document.querySelector('#newbookform')
let newBookSubmit = document.querySelector('#submit')


newBookSubmit.addEventListener('click', (e) => {
  e.preventDefault
  const formData = new FormData(newBookForm)
  const values = [...formData.entries()];
  let title = values[0][1];
  let author = values[1][1];
  let pages = values[2][1];
  addBookToLibrary(new Book(title, author, parseInt(pages)))
  displayNewBook(myLibrary)
  newBookForm.reset()
})

displayAllBooks()
