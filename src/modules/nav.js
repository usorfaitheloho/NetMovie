import logoIcon from '../images/netmovies.png';

const navigations = `
<nav class="nav-element">
<div class="logo"> 
<img src=${logoIcon} alt="logo" />
</div>
<ul class="nav-items">
<li class="list">Series</li>
<li class="list">Film</li>
<li class="list" id="shows-counter">My List</li>
</ul>
</nav>
`;

const renderNav = () => {
  document.querySelector('#header').innerHTML = navigations;
};

export default renderNav;
