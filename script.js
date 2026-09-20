(() => {
  const valueEl = document.getElementById('value');
  const plusBtn = document.getElementById('plusBtn');
  const minusBtn = document.getElementById('minusBtn');
  const resetToast = document.getElementById('resetToast');

  const START_VALUE = 15;
  const MIN_VALUE = 10;
  const MAX_VALUE = 20;

  let value = START_VALUE;

  function render() {
    valueEl.textContent = value;
  }

  function wrapValue(nextValue) {
    if (nextValue > MAX_VALUE) return MIN_VALUE;
    if (nextValue < MIN_VALUE) return MAX_VALUE;
    return nextValue;
  }

  function changeValue(delta) {
    value = wrapValue(value + delta);
    render();
  }

  plusBtn.addEventListener('click', () => changeValue(1));
  minusBtn.addEventListener('click', () => changeValue(-1));

  render();
})();
