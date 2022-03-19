import commentsCounter from './commentsCounter'

const showPopups = async (data, updateComment) => {
	const comments = await updateComment(data.name)
	console.log(comments)
	const commentNum = commentsCounter(comments)

	const content = document.querySelector('.popup-section')

	content.innerHTML = `
<div class ="movie-detail">
  <button type="button" class="close">
    <i class="fa fa-times fa-1x" id="close"></i>
  </button>
  <div class="movie-image">
      <img src=${data.image.medium}  />
  </div>
  <div class="comment-description">
      <h2>${data.name}</h2>
      <p>${data.summary}</p>
  </div>
  <div class="show-comment">
    <h3> Comments (${commentNum || 0})</h3>
  <ul class="comments-list">${comments
		.map(
			comment => `<li class="comment-item">
    <span class="creation-date">${comment.creation_date}</span>
    <span class="username"> ${comment.username}:</span>
    <span class="comment-msg"> ${comment.comment}</span></li>`,
		)
		.join('')}                                  
    </ul>
  </div>
  <div class ="form-end">
    <form id="new-comment">
      <input type="text" placeholder="Your name" class="input-name" name="username" required>
      <textarea name="comment" id="comment" required>Add your comment here</textarea>
      <button class="btn-submit" id="submit" type="submit">Comment</button>
    </form>
  </div>
</div>`
}

export default showPopups
