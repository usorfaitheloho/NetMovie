import { SHOWS_API, INVOLVEMENT_API, COMMENTS, APP_ID } from './rootEndpoints'
import { get, post } from './fetchApi'

export const fetchShows = async () => {
	const data = await get(SHOWS_API)
	return data
}

export const postComments = async data => {
	const result = await post('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/', data)
	console.log(result);
	return result
}

export const getComments = async id => {
	// const data = await get(
	// 	`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/UA1qh5oDK24p7rhA1W5m/comments?item_id=${id}`,
	// )
	// console.log(data)
	// return data
}
