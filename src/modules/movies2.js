
import { get } from './services/fetchApi.js';
import { SHOWS_API } from './services/rootEndpoints.js';
import { getLikesData } from './LikeCounter.js';

const Movies = document.querySelector('.movies');
const renderMovies = async (data) => {
  let moviesHTML = '';
  data.forEach((show, index) => {
    if (index < 20) {
      moviesHTML += `
      <div class="movie">
      <img src=${show.image.medium} alt="movie-pic"/>
      <div class="movie-description">
      <p>${show.name}</p>
      <div class="movie-likes">
      <i class="far fa-heart" id="${show.id}"></i>
      <div class="likes-counter">
      <span id=liked-icon>${show.id}</span>
      <span>likes</span>
      </div>
      </div>
      </div>
      <button class="btn" id=${show.id}>Comments</button>
      </div>
        `;
    }
  });
  Movies.innerHTML = moviesHTML;
};

const showMovies = async () => {
  const data = await get(SHOWS_API);
  renderMovies(data);

  const likesArray = await  getLikesData();
  likesArray.forEach((a) => {
    Shows.forEach((show) => {
      if (a.item_id === show.id) {
        show.likes = a.likes;
      } else if (show.likes === undefined) {
        show.likes = 0;
      }
    });
  });
};
export default showMovies;