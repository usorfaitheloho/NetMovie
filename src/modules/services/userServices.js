import { SHOWS_API } from './rootEndpoints'
import { get } from './fetchApi'

const fetchShows = async () => {
 return await get(SHOWS_API)
}
export default fetchShows
