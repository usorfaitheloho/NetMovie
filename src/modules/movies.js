import movie from '../images/download.jpg';

const movies = `
  	  <div class="movie">
					<img src=${movie} />
					<div class="movie-description">
						<p>Space 1</p>
						<div class="movie-likes">
							<i class="far fa-heart"></i>
							<div class="counter"> 5 likes</div>
						</div>
					</div>
					<button class="btn">Comments</button>
				</div>
  	  <div class="movie">
					<img src=${movie} />
					<div class="movie-description">
						<p>Space 1</p>
						<div class="movie-likes">
							<i class="far fa-heart"></i>
							<div class="counter"> 5 likes</div>
						</div>
					</div>
					<button class="btn">Comments</button>
				</div>

  	  <div class="movie">
					<img src=${movie} />
					<div class="movie-description">
						<p>Space 1</p>
						<div class="movie-likes">
							<i class="far fa-heart"></i>
							<div class="counter"> 5 likes</div>
						</div>
					</div>
					<button class="btn">Comments</button>
				</div>
				<div class="movie">
					<img src=${movie} />
					<div class="movie-description">
						<p>Space 2</p>
						<div class="movie-likes">
							<i class="far fa-heart"></i>
							<div class="counter"> 5 likes</div>
						</div>
					</div>
					<button class="btn">Comments</button>
				</div>
				<div class="movie">
					<img src=${movie} />
					<div class="movie-description">
						<p>Space 3</p>
						<div class="movie-likes">
							<i class="far fa-heart"></i>
							<div class="counter"> 5 likes</div>
						</div>
					</div>
					<button class="btn">Comments</button>
				</div>
				<div class="movie">
					<img src=${movie} />
					<div class="movie-description">
						<p>Space 4</p>
						<div class="movie-likes">
							<i class="far fa-heart"></i>
							<div class="counter"> 5 likes</div>
						</div>
					</div>
					<button class="btn">Comments</button>
				</div>
				<div class="movie">
					<img src=${movie} />
					<div class="movie-description">
						<p>Space 5</p>
						<div class="movie-likes">
							<i class="far fa-heart"></i>
							<div class="counter"> 5 likes</div>
						</div>
					</div>
					<button class="btn">Comments</button>
				</div>
				<div class="movie">
					<img src=${movie} />
					<div class="movie-description">
						<p>Space 6</p>
						<div class="movie-likes">
							<i class="far fa-heart"></i>
							<div class="counter"> 5 likes</div>
						</div>
					</div>
					<button class="btn">Comments</button>
				</div>
`;
const renderMovies = () => {
  document.querySelector('.movies').innerHTML = movies;
};

export default renderMovies;