import fetchShows from './services/userServices'

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
        <div class="counter">
        <span><span>
        <span ${show.id}>Likes<span>
        </div>
        </div>
        </div>
        <button class="btn" id=${show.id}>Comments</button>
        </div>
        `
		}
    }).join('')
     
}
const modalButtons = document.querySelectorAll('.btn');
console.log(modalButtons)

export default showMovies
