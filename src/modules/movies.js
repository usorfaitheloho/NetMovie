import {get} from './services/fetchApi.js' ;
import  {SHOWS_API}  from './services/rootEndpoints.js';

const Movies = document.querySelector('.movies');
const renderMovies = async(data) => {
   let moviesHTML = '';
   data.forEach((show,index)  => {
       if(index < 20 ){
        moviesHTML +=`
        <div class="movie">
        <img src=${show.image.medium} />
        <div class="movie-description">
        <p>${show.name}</p>
        <div class="movie-likes">
        <i class="far fa-heart"></i>
        <div class="counter"> ${show.likes}</div>
        </div>
        </div>
        <button class="btn">Comments</button>
        </div>
        `; 
       }
    

   });
   Movies.innerHTML = moviesHTML;

};
const showMovies = async () => {
    const data = await get(SHOWS_API);
    renderMovies(data);
};
export default showMovies;
