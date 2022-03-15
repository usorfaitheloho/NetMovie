const movies = `
  	  <div class="movie">
					<img src="../asset/download.jpg" />
					<div class="movie-description">
						<p>Space 1</p>
						<div class="movie-likes">
							<i class="fa fa-heart"></i>
							<div class="counter"> 5 likes</div>
						</div>
					</div>
					<button class="btn">comments</button>
				</div>
				<div class="movie">
					<img src="../asset/download.jpg" />
					<div class="movie-description">
						<p>Space 2</p>
						<div class="movie-likes">
							<i class="fa fa-heart"></i>
							<div class="counter"> 5 likes</div>
						</div>
					</div>
					<button class="btn">comments</button>
				</div>
				<div class="movie">
					<img src="../asset/download.jpg" />
					<div class="movie-description">
						<p>Space 3</p>
						<div class="movie-likes">
							<i class="fa fa-heart"></i>
							<div class="counter"> 5 likes</div>
						</div>
					</div>
					<button class="btn">comments</button>
				</div>
				<div class="movie">
					<img src="../asset/download.jpg" />
					<div class="movie-description">
						<p>Space 4</p>
						<div class="movie-likes">
							<i class="fa fa-heart"></i>
							<div class="counter"> 5 likes</div>
						</div>
					</div>
					<button class="btn">comments</button>
				</div>
				<div class="movie">
					<img src="../asset/download.jpg" />
					<div class="movie-description">
						<p>Space 5</p>
						<div class="movie-likes">
							<i class="fa fa-heart"></i>
							<div class="counter"> 5 likes</div>
						</div>
					</div>
					<button class="btn">comments</button>
				</div>
				<div class="movie">
					<img src="../asset/download.jpg" />
					<div class="movie-description">
						<p>Space 6</p>
						<div class="movie-likes">
							<i class="fa fa-heart"></i>
							<div class="counter"> 5 likes</div>
						</div>
					</div>
					<button class="btn">comments</button>
				</div>
`
const renderMovies = () => {
	document.querySelector('.movies').innerHTML = movies
}

export default renderMovies