
const showMovies = async(data) => {
	const movies = document.querySelector('.movies')
	data.forEach((show, index) => {
		if (index < 8) {
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
        <button class="btn" id=${show.id} itemname="${show.id}">Comments</button>
        </div>
        `
		}
	})
}

export default showMovies
