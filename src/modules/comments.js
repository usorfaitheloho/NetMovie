import commentsCounter from './commentsCounter'
import { closePopup } from './popupAction.js'
import { postComments } from './services/userServices.js'

const showPopup = async (data, updateComment) => {
	const comments = await updateComment(data.name)
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
      <ul class="comments-list">
        ${comments
					.map(
						comment => `<li class="comment-item">
    <span class="username"> ${comment.username}:</span>
    <span class="comment-msg"> ${comment.comment}</span></li>`,
					)
					.join('')}                                  
      </ul>
  </div>
  <div class ="form-end">
    <form id="new-comment">
      <input type="text" placeholder="Your name" class="name-input" name="username" required>
      <textarea name="comment" id="comment" required>Add your comment here</textarea>
      <button class="btn-submit" id="submit" type="submit" itemname="${data.id}">Comment</button>
    </form>
  </div>
</div>`

	const hidePopup = document.querySelector('#close')
	hidePopup.addEventListener('click', closePopup)
	const username = document.querySelector('.name-input').value
	const comment = document.querySelector('#comment').value
	const form = document.querySelector('#new-comment')
	form.addEventListener('submit', async e => {
		e.preventDefault()

		const id = document.querySelector('#submit').getAttribute('itemname')
		const newComment = {
			item_id: id,
			username,
			comment,
		}

		await postComments(newComment)
		form.reset()
	})
}

export default showPopup
