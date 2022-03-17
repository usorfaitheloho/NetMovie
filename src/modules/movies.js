import fetchShows from './services/userServices'

const renderMovies = async data => {
	data.forEach((show, index) => {
		const movies = document.querySelector('.movies')
		if (index < 20) {
			movies.innerHTML += `
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
	})
}
const showMovies = async () => {
	const data = await fetchShows()
	renderMovies(data)
}
export default showMovies
