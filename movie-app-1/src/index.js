import './style.css'
import renderNav from './modules/nav.js'
import { fetchShows } from './modules/services/userServices.js'
import showMovies from './modules/movies'
import { closePopup, openPopup } from './modules/popupAction.js'
import showPopup from './modules/comments.js'
import { postComments, getComments, getId} from './modules/services/userServices.js'

renderNav()
const seePopups = shows => {
	const commentBtn = document.querySelectorAll('.btn')
	commentBtn.forEach(btn => {
		btn.addEventListener('click', async () => {
      const showId = btn.id
      const showName = btn.getAttribute('itemname')
      openPopup()
			showPopup(shows[showId - 1], getComments)
			const hidePopup = document.querySelector('.close')
			hidePopup.addEventListener('click', closePopup)

			const form = document.querySelector('#new-comment')
      form.addEventListener('submit', async e => {
				e.preventDefault()
				const name = document.querySelector('.input-name')
				const comment = document.querySelector('textarea')
				const newComment = {
					item_id: showName,
					username: name.value,
					comment: comment.value,
				}

				await postComments(newComment)
				await showPopup(shows[showId - 1], getComments)
				form.reset()
				const hidePopup = document.querySelector('.close-btn')
				hidePopup.addEventListener('click', closePopup)
			})
		})
	})
}

const shows = async () => {
	const list = await fetchShows()
	showMovies(list)
	seePopups(list)
}
shows()

