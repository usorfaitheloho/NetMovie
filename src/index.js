import './style.css';
import renderNav from './modules/nav.js';
import {
  fetchShows,
  getComments,
  postComments,
  postLikes,
  updateLikes,
} from './modules/services/userServices.js';
import showMovies from './modules/movies.js';
import showPopups from './modules/comments.js';
import { openPopup, closePopup } from './modules/popupAction.js';

renderNav();

const displayPopups = async (shows) => {
  const commentBtn = document.querySelectorAll('.btn');
  commentBtn.forEach((btn) => {
    btn.addEventListener('click', async () => {
      const { id } = btn;
      const itemname = btn.getAttribute('itemname');
      openPopup();
      await showPopups(shows[id - 1], getComments);
      const hidePopup = document.querySelector('.close');
      hidePopup.addEventListener('click', closePopup);

      const form = document.querySelector('#new-comment');
      form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const username = document.querySelector('.input-name').value;
        const comment = document.querySelector('#comment').value;
        const newComment = {
          item_id: itemname,
          username,
          comment,
        };
        await postComments(newComment);
        showPopups(shows[id - 1], getComments);
        form.reset();
        document.querySelector('.close-btn').addEventListener('click', closePopup());
      });
    });
  });
};

const shows = async () => {
  const list = await fetchShows();
  showMovies(list);
  displayPopups(list);
};
shows();

document.querySelector('main').addEventListener('click', async (e) => {
  if (e.target.className === 'far fa-heart') {
    const string = e.target.id;
    const id = parseInt(string, 10);
    await postLikes(id);
    const container = e.target.parentElement.nextElementSibling;
    await updateLikes(id, container);
  }
});
