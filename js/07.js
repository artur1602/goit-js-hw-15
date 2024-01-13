function bindEvents() {
  const input = document.getElementById('font-size-control');
  const text = document.getElementById('text');

  if (!input || !text) {
    return;
  }

  input.addEventListener('input', event => {
    const fontSize = Number(event.target.value);

    if (isNaN(fontSize)) {
      return;
    }

    updateFontSize(fontSize);
  });
}