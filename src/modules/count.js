export const countShow = (list) => list.length;

const countShows = () => {
  const showContainer = document.querySelector('.movies');
  const number = showContainer.childElementCount;
  return number;
};

export const countShowList = () => {
  const showContainer = document.querySelector('.movies');
  const showsList = document.querySelector('.counter');
  const child = showContainer.childElementCount;
  showsList.textContent = `${countShows()}`;
  return child;
};