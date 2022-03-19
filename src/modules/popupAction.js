<<<<<<< HEAD
const commentPopup = document.querySelector('.popup-section')

const header = document.querySelector('header')
const main = document.querySelector('main')
const footer = document.querySelector('footer')

export const openPopup = () => {
	commentPopup.style.display = 'block'
	header.style.display = 'none'
	main.style.display = 'none'
	footer.style.display = 'none'
}

export const closePopup = () => {
	header.style.display = 'block'
	main.style.display = 'block'
	footer.style.display = 'block'
	commentPopup.style.display = 'none'
}
=======
const commentPopup = document.querySelector('.popup-section');

const header = document.querySelector('header');
const main = document.querySelector('main');
const footer = document.querySelector('footer');

export const openPopup = () => {
  commentPopup.style.display = 'block';
  header.style.display = 'none';
  main.style.display = 'none';
  footer.style.display = 'none';
};

export const closePopup = () => {
  header.style.display = 'block';
  main.style.display = 'block';
  footer.style.display = 'block';
  commentPopup.style.display = 'none';
};
>>>>>>> 5a4179ae6238248079f6f68edf5b25103f033cff
