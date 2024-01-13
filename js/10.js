function bindEvents() {
  const inputNumber = document.querySelector('#controls > input[type="number"]');
  const buttonCreate = document.querySelector('[data-create]');
  const buttonDestroy = document.querySelector('[data-destroy]');

  buttonCreate?.addEventListener('click', () => {
    const amount = Number(inputNumber?.value);

    if (Number.isInteger(amount) && amount >= 1 && amount <= 100) {
      createBoxes(amount);
    } else {
      alert('Please enter a valid integer between 1 and 100.');
    }
  });

  buttonDestroy?.addEventListener('click', destroyBoxes);
}

bindEvents();
