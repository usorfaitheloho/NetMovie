import fetchShows from './services/userServices'

const renderComments = async comments => {
	console.log(comments)
	comments.forEach((comment, index) => {
		const content = document.querySelector('.comment-section')
		if (index < 20) {
			content.innerHTML += `
<div class ="movie-detail">
 <div class="close">
  <i class="fa fa-times fa-1x"></i>
    </div>
    <div class="movie-image">
        <img src=${comment.image.medium}  />
    </div>
    <div class="comment-description">
        <h2>${comment.name}</h2>
        <p>${comment.summary}</p>
    </div>
    <div class="show-comment">
        <h3> comments (0) </h3>
        <p>thomas: hi</p>
    </div>
    <div class ="form-end">
      <form id="new-comment">
        <input class="name-input" type="text" placeholder="Your name" required>
        <textarea>Add your comment here</textarea>
        <button class="btn-submit" id="submit" type="submit">Comment</button>
      </form>
    </div>
</div>`
		}
	})
}
const showComments = async () => {
	const data = await fetchShows()
	renderComments(data)
}
export default showComments
