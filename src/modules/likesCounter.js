import { INVOLVEMENT_API, LIKES } from './services/rootEndpoints.js';
import { get, post } from './services/fetchApi.js';

const getLikesData = get(`${INVOLVEMENT_API}${LIKES}`);
const postLikes = post();
getLikesData.map((a) => {

});