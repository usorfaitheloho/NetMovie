export const countShow = list => list.length

const countShows = () => {
  const showContainer = document.querySelector('main');
  const number = showContainer.childElementCount;
  return number;
}

export const countShowList = () => {
  const showContainer = document.querySelector('.mainContainer');
  const showsList = document.querySelector('.counter');
  const child = showContainer.childElementCount;
  showsList.textContent = `${countShows()}`;
  return child;
};