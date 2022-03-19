<<<<<<< HEAD
import { SHOWS_API, INVOLVEMENT_API, COMMENTS, APP_ID, LIKES } from './rootEndpoints'
import { get, post } from './fetchApi'

export const fetchShows = async () => {
	const shows = await get(SHOWS_API)
	return shows
}

export const postComments = async data => {
	const result = await post(`${INVOLVEMENT_API}/${APP_ID}/${COMMENTS}`, data)
	return result
}

export const getComments = async id => {
	const comments = await get(`${INVOLVEMENT_API}/${APP_ID}/${COMMENTS}?item_id=${id}`)
	return comments
}

export const postLikes = async id => {
	const res = await post(`${INVOLVEMENT_API}/${APP_ID}/${LIKES}`, { item_id: id })
	return res
}

export const getLikes = async () => {
	const likes = await get(`${INVOLVEMENT_API}/${APP_ID}/${LIKES}`)
	return likes
}

export const updateLikes = async (id, display) => {
	const saveLikes = await get(`${INVOLVEMENT_API}/${APP_ID}/${LIKES}`)
	saveLikes.forEach(show => {
		if (show.item_id === id) {
			display.value = `${show.likes}`
		}
	})
}
=======
import {
  SHOWS_API, INVOLVEMENT_API, COMMENTS, APP_ID, LIKES,
} from './rootEndpoints.js';
import { get, post } from './fetchApi.js';

export const fetchShows = async () => {
  const shows = await get(SHOWS_API);
  return shows;
};

export const postComments = async (data) => {
  const result = await post(`${INVOLVEMENT_API}/${APP_ID}/${COMMENTS}`, data);
  return result;
};

export const getComments = async (id) => {
  const comments = await get(`${INVOLVEMENT_API}/${APP_ID}/${COMMENTS}?item_id=${id}`);
  return comments;
};

export const postLikes = async (id) => {
  const res = await post(`${INVOLVEMENT_API}/${APP_ID}/${LIKES}`, { item_id: id });
  return res;
};

export const getLikes = async () => {
  const likes = await get(`${INVOLVEMENT_API}/${APP_ID}/${LIKES}`);
  return likes;
};

export const updateLikes = async (id, display) => {
  const saveLikes = await get(`${INVOLVEMENT_API}/${APP_ID}/${LIKES}`);
  saveLikes.forEach((show) => {
    if (show.item_id === id) {
      display.value = `${show.likes}`;
    }
  });
};
>>>>>>> 5a4179ae6238248079f6f68edf5b25103f033cff
