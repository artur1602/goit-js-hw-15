function bindEvents() {
  const buttonChangeColor = document.querySelector('button.change-color');
  const spanColor = document.querySelector('span.color');

  if (buttonChangeColor && spanColor) {
    buttonChangeColor.addEventListener('click', () => changeBodyColor(getRandomHexColor()));
  }
}

bindEvents();
