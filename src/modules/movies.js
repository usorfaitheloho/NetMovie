import { updateLikes } from './services/userServices.js';


const showMovies = async (data) => {
  const movies = document.querySelector('.movies');
  data.forEach((show, index) => {
    if (index < 8) {
      movies.innerHTML += `
        <div class="movie">
        <img src=${show.image.medium} alt="movie-pic"/>
        <div class="movie-description">
        <p>${show.name}</p>
        <span class="movie-likes">
          <span>
               <i id="${show.id}" class="far fa-heart"></i>
           </span>
            <input type="number" id="${show.id}" class="countLikes" value="" name=""
            <span id="${show.id}">Likes</span>
        </span>
        </div>
         <button class="btn" id=${show.id} itemname="${show.name}">Comments</button>
        </div>
        </div>
       
        </div>
        `;
    }
  });

  const count = document.querySelectorAll('.countLikes');
  count.forEach((e, index) => {
    const countLike = index + 1;
    updateLikes(countLike, e);
  });
};

export default showMovies;
