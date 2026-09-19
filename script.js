(() => {
  const valueEl = document.getElementById('value');
  const plusBtn = document.getElementById('plusBtn');
  const minusBtn = document.getElementById('minusBtn');
  const resetToast = document.getElementById('resetToast');

  const START_VALUE = 15;
  const RESET_LOW = 9;
  const RESET_HIGH = 21;
  const RESET_DELAY_MS = 5000;

  let value = START_VALUE;
  let resetTimer = null;
  let isResetting = false;

  function render() {
    valueEl.textContent = value;
  }

  function setButtonsDisabled(disabled) {
    plusBtn.disabled = disabled;
    minusBtn.disabled = disabled;
  }

  function showResetMessage() {
    resetToast.classList.add('show');
  }

  function hideResetMessage() {
    resetToast.classList.remove('show');
  }

  function scheduleReset() {
    if (isResetting) return;
    isResetting = true;
    setButtonsDisabled(true);
    showResetMessage();

    if (resetTimer) clearTimeout(resetTimer);
    resetTimer = setTimeout(() => {
      value = START_VALUE;
      render();
      hideResetMessage();
      setButtonsDisabled(false);
      isResetting = false;
    }, RESET_DELAY_MS);
  }

  function checkReset() {
    if (value >= RESET_HIGH || value <= RESET_LOW) {
      scheduleReset();
    }
  }

  function changeValue(delta) {
    if (isResetting) return;
    value += delta;
    render();
    checkReset();
  }

  plusBtn.addEventListener('click', () => changeValue(1));
  minusBtn.addEventListener('click', () => changeValue(-1));

  render();
})();
