import fetchShows from './services/userServices'


const shows = fetchShows()
const movies =
shows.forEach((show) => {
  `
<div class="movie">
<img src=${show.images} />
<div class="movie-description">
<p>${show.name}</p>
<div class="movie-likes">
<i class="far fa-heart"></i>
<div class="counter">${show.id}likes</div>
</div>
</div>
<button class="btn">Comments</button>
</div>
`;
});

const renderMovies = () => {
  document.querySelector('.movies').innerHTML = movies;
};

export default renderMovies;