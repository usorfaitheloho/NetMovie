

import './style.css'
import renderNav from './modules/nav.js'
import {fetchShows, getUserId} from './modules/services/userServices'


renderNav()
fetchShows()
getUserId()

const modal = document.querySelector('.movie-detail')
console.log(modal)

// event listeners for opening modal on button click
const modalButtons = Array.from(document.querySelectorAll('.btn'))
console.log(modalButtons)
const modals = Array.from(document.querySelectorAll('.movie-detail'))
console.log(modals)

const modalButtonZip = modalButtons.map((button, i) => [button, modals[i]])

console.log(modalButtonZip)
modalButtonZip.forEach(pair => {
	pair[0].addEventListener('click', () => {
		pair[1].style.display = 'block'
	})
})

// event listener for closing modal on button click
document.querySelectorAll('.close').forEach(close => {
	close.addEventListener('click', () => {
		document.querySelectorAll('.movie-detail').forEach(modal => {
			modal.style.display = 'none'
		})
	})
})