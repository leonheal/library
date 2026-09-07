let modal = document.querySelector("#modal")
let title = document.querySelector("#title")
let author = document.querySelector("#author")
let pageCount = document.querySelector("#pageCount")
let readStatus = document.querySelector("#readStatus")
let addBook = document.querySelector("#addBook")
let table = document.querySelector("table")
let cancel = document.querySelector("#cancel")


const myLibrary = [];

function Book (title, author, pages, readStatus) {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the construtor");
    }
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
    this.info = function() {
        return(`${this.title} by ${this.author}, ${this.pages} pages, ${this.readStatus} yet`);
    };
}

function addBookToLibrary() {
    
        let book = new Book(title.value, author.value, pageCount.value, readStatus.value);
        myLibrary.push(book);

        //display inside table
        let row = document.createElement("tr");

        let toggleBtn = document.createElement("button");
        toggleBtn.textContent = "Change Status";

        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click", () => {
        myLibrary.splice(myLibrary.findIndex(x => x.id === book.id), 1);
        row.remove();
    });

        
        

        row.innerHTML = `
        <td>${title.value}</td>
        <td>${author.value}</td>
        <td>${pageCount.value}</td>
        `;

        let statusCell = document.createElement("td");
        statusCell.textContent = book.readStatus;
        row.append(statusCell)

        toggleBtn.addEventListener("click", () => {
        book.readStatus =
        book.readStatus === "read" ? "unread" : "read";

        statusCell.textContent = book.readStatus;
});

    
        
        let toggleCell = document.createElement("td")
        toggleCell.appendChild(toggleBtn);
        
        let deleteCell = document.createElement("td");
        deleteCell.appendChild(deleteBtn);

        deleteBtn.addEventListener("click", () => {
            
        })

        row.append(toggleCell, deleteCell);
        table.appendChild(row); 

        modal.close();
}

let newBook = document.querySelector("#newBook")
newBook.addEventListener("click", () => {
    title.value = "";
    author.value = "";
    pageCount.value = "";
    readStatus.value = "unread";
    modal.showModal();
    })

addBook.addEventListener("click",(event) => {
    event.preventDefault();
    addBookToLibrary()
})

cancel.addEventListener("click", () => modal.close())