import movie from '../images/download.jpg';


const comments =`
<div class ="comments">
    <div class="movie-detail">
       <div class="movie-image">
       <img src=${movie} />
       </div>
        <h2>Two and Half men</h2>
        <p>Charlie is a well-to-do bachelor with a house at the beach, a Jaguar in the front, and an easy way with women. His casual Malibu lifestyle is interrupted when his tightly wound brother Alan, who's facing a divorce, and his son Jake, come to live with him. Together, these two and a half men confront the challenges of growing up; finally. Complicating matters are the brothers' self-obsessed, controlling mother, Evelyn, Alan's estranged wife, Judith and Charlie's crazy neighbor Rose, who wants to be a part of his life and is willing to do anything to be around. After the death of his brother, Alan Harper meets and befriends a lonely young man named Walden Schmidt who turns out to be a billionaire. Unable to afford his brother's home, Alan sells Walden the house, and as a way of showing his gratitude, Walden allows</p>
    </div>
    <div class="show-comment">
        <h3> comments (0) </h3>
        <p>thomas: hi</p>
    </div>
    <div class ="form-end">
    <form id="new-comment">
    <input class="name-input" type="text" placeholder="Your name" required>
    <textarea>Add your comment here</textarea>
    <button class="btn-submit" id="submit" type="submit">Comment</button>
    </form>
    </div>
</div>
`;
const renderComments = () => {
    document.querySelector('.comment-section').innerHTML = comments ;
};
export default renderComments ;