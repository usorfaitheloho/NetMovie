import {updateLikes} from './likes'
const showMovies = (data) => {
	const movies = document.querySelector('.movies')
	data.forEach((show, index) => {
		if (index < 20) {
			movies.innerHTML += `
        <div class="movie">
        <img src=${show.image.medium} alt="movie-pic"/>
        <div class="movie-description">
        <p>${show.name}</p>
        <div class="movie-likes">
        <i class="far fa-heart" id="${show.id}"></i>
        <div class="counter">
        <span class="count"><span>
        <span ${show.id}>Likes<span>
        </div>
        </div>
        </div>
        <button class=${show.name} id=${show.id}>Comments</button>
        </div>
        `
		}
    })
    
    document.querySelectorAll('.count').forEach((e, i) => {
        const count = i + 1
        updateLikes(count, e)
     })

}
export default showMovies
