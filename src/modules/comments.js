<<<<<<< HEAD
import commentsCounter from './commentsCounter'

const showPopups = async (data, updateComment) => {
	const comments = await updateComment(data.name)
	console.log(comments)
	const commentNum = commentsCounter(comments)

	const content = document.querySelector('.popup-section')

	content.innerHTML = `
=======
import commentsCounter from './commentsCounter.js';

const showPopups = async (data, updateComment) => {
  const comments = await updateComment(data.name);

  const commentNum = commentsCounter(comments);

  const content = document.querySelector('.popup-section');

  content.innerHTML = `
>>>>>>> 5a4179ae6238248079f6f68edf5b25103f033cff
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
<<<<<<< HEAD
		.map(
			comment => `<li class="comment-item">
    <span class="creation-date">${comment.creation_date}</span>
    <span class="username"> ${comment.username}:</span>
    <span class="comment-msg"> ${comment.comment}</span></li>`,
		)
		.join('')}                                  
=======
    .map(
      (comment) => `<li class="comment-item">
    <span class="creation-date">${comment.creation_date}</span>
    <span class="username"> ${comment.username}:</span>
    <span class="comment-msg"> ${comment.comment}</span></li>`,
    )
    .join('')}                                  
>>>>>>> 5a4179ae6238248079f6f68edf5b25103f033cff
    </ul>
  </div>
  <div class ="form-end">
    <form id="new-comment">
      <input type="text" placeholder="Your name" class="input-name" name="username" required>
<<<<<<< HEAD
      <textarea name="comment" id="comment" required>Add your comment here</textarea>
      <button class="btn-submit" id="submit" type="submit">Comment</button>
    </form>
  </div>
</div>`
}

export default showPopups
=======
      <textarea name="comment"  placeholder="comment" id="comment" required></textarea>
      <button class="btn-submit" id="submit" type="submit">Comment</button>
    </form>
  </div>
</div>`;
};

export default showPopups;
>>>>>>> 5a4179ae6238248079f6f68edf5b25103f033cff
