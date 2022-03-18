import fetchShows from './services/userServices'
import { getLikesData } from './LikeCounter.js';

const showMovies = async () => {
	const movies = document.querySelector('.movies')
	const data = await fetchShows()
  
	movies.innerHTML = data.map((show, index) => {
		if (index < 20) {
			return `
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
        `
      }
    }).join('')
     
}

// const likesArray = await getLikesData();
//   likesArray.forEach((a) => {
//     Shows.forEach((show) => {
//       if (a.item_id === show.id) {
//         show.likes = a.likes;
//       } else if (show.likes === undefined) {
//         show.likes = 0;
//       }
//     });
//   });

export default showMovies
