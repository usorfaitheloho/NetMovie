import './style.css'
import renderNav from './modules/nav.js'
import { fetchShows } from './modules/services/userServices.js'
import showMovies from './modules/movies'
import {openPopup } from './modules/popupAction.js'
import showPopup from './modules/comments.js'
import { getComments } from './modules/services/userServices.js'

renderNav()
showPopup()

const seePopups = async shows => {
	const commentBtn = document.querySelectorAll('.btn')
	commentBtn.forEach(btn => {
		btn.addEventListener('click', async () => {
			const showsId = btn.id
			showPopup(shows[showsId - 1], getComments)
			openPopup()
		})
	})
}


const shows = async () => {
	const list = await fetchShows()
	showMovies(list)
	seePopups(list)
}
shows()

