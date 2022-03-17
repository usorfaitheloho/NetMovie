import { SHOWS_API } from './rootEndpoints'
import {fetchApi} from './fetchApi'

const fetchShows = async () => {
	console.log(fetchApi.get())
	return fetchApi.get(SHOWS_API)
}

export default fetchShows