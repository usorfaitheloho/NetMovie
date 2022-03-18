import { SHOWS_API, INVOLVEMENT_API, COMMENTS } from './rootEndpoints'
import { get, post } from './fetchApi'

export const fetchShows = async () => {
  const data = await get(SHOWS_API)
  return data
}

export const getUserId = async () => {
	const id = await post(INVOLVEMENT_API)
	return id
}

export const postComments = async (data) => {
	const result = await post(`${INVOLVEMENT_API}/${COMMENTS}`, data)
	return result
}

export const getComments = async () => {
	const data = await get(`${INVOLVEMENT_API}/${COMMENTS}`)
 return data
}

export default getComments
