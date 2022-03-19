import { SHOWS_API, INVOLVEMENT_API } from './rootEndpoints'
import { get, post } from './fetchApi'
import showMovies from '../movies.js'
import showComments from '../comments'

export const fetchShows = async () => {
  const data = await get(SHOWS_API)
  showMovies(data)
  showComments(data)
}


export const getUserId = async () => {
  const id = await post(INVOLVEMENT_API)
  console.log(id)
}