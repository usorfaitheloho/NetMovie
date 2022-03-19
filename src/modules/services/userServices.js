import { SHOWS_API, INVOLVEMENT_API, COMMENTS, APP_ID } from './rootEndpoints'
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
