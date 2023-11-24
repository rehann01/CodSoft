document.addEventListener('DOMContentLoaded', function() {
  let screen = document.querySelector('.screen');
  let calculation = '';
  let operator = '';

  document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function() {
      const val = this.getAttribute('data-val');

      if (!isNaN(val) || val === '.') {
        calculation += val;
        screen.textContent = calculation;
      } else if (val === 'clear') {
        calculation = '';
        operator = '';
        screen.textContent = '0';
      } else if (val === '+' || val === '-' || val === 'x' || val === '÷') {
        operator = val;
        calculation += ' ' + val + ' ';
        screen.textContent = calculation;
      } else if (val === '=') {
        calculation = eval(calculation);
        screen.textContent = calculation;
      }
    });
  });
});
