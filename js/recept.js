const id = window.location.search?.split("=")[1]; 
const recept = receptJSON.recepts.find(recept => recept.id === id); 

document.querySelector(".book-page .title").innerText = recept.title; 

document.querySelector(".book-page .description").innerText = recept.description; 

document.querySelector(".book-page img").src = recept.image; 
const rating = document.querySelector(".book-page .rating"); 


  for (let j = 0; j < 5; j++) {
            if (recept.rating > j) {
                rating.innerHTML += '<span class="fa fa-star"></span> ';
            } else {
                rating.innerHTML += '<span class="fa fa-star-o"></span>';
            }
        } 