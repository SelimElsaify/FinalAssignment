const id = window.location.search?.split("=")[1]; 
const book = bookJSON.books.find(book => book.id === id); 

document.querySelector(".book-page .title").innerText = book.title; 

document.querySelector(".book-page .description").innerText = book.description; 

document.querySelector(".book-page img").src = book.image; 
document.querySelector(".book-page .price").innerText = `€${book.price}`; 