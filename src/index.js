import './style.css'
import renderNav from './modules/nav.js'
import { fetchShows } from './modules/services/userServices.js'
import showMovies from './modules/movies'
import showPopups from './modules/comments.js'
import { openPopup, closePopup } from './modules/popupAction'
import { getComments, postComments } from './modules/services/userServices.js'

renderNav()

const displayPopups = async shows => {
	const commentBtn = document.querySelectorAll('.btn')
	commentBtn.forEach(btn => {
		btn.addEventListener('click', async () => {
			const id = btn.id
			const itemname = btn.getAttribute('itemname')
			openPopup()
			await showPopups(shows[id - 1], getComments)
			const hidePopup = document.querySelector('.close')
			hidePopup.addEventListener('click', closePopup)

			const form = document.querySelector('#new-comment')
				form.addEventListener('submit', async e => {
				e.preventDefault()

				const username = document.querySelector('.input-name').value
				const comment = document.querySelector('#comment').value
				const newComment = {
					item_id: itemname,
					username,
					comment,
				}
				await postComments(newComment)
				showPopups(shows[id - 1], getComments)
				form.reset()
				document.querySelector('.close-btn').addEventListener('click', closePopup())
			})
		})
	})
}

const shows = async () => {
	const list = await fetchShows()
	showMovies(list)
	displayPopups(list)
}
shows()

