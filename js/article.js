const id = window.location.search?.split("=")[1]; 
const article = articleJSON.articles.find(article => article.id === id); 

document.querySelector(".book-page .title").innerText = article.title; 

document.querySelector(".book-page .description").innerText = article.description; 

document.querySelector(".book-page img").src = article.image; 
const rating = document.querySelector(".book-page .rating"); 


  for (let j = 0; j < 5; j++) {
            if (article.rating > j) {
                rating.innerHTML += '<span class="fa fa-star"></span> ';
            } else {
                rating.innerHTML += '<span class="fa fa-star-o"></span>';
            }
        } 