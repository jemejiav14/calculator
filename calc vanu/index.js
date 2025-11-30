let history = [];

function Solve(val) {
   const v = document.getElementById('res');
   v.value += val;
}

function Result() {
   const resField = document.getElementById('res');
   let expression = resField.value.replace(/x/g, '*');
   try {
      let result = eval(expression);
      resField.value = result;

      // Store history (max 5)
      history.unshift(expression + " = " + result);
      if (history.length > 5) history.pop();
      updateHistory();
   } catch {
      resField.value = 'Error';
   }
}

function Clear() {
   document.getElementById('res').value = '';
}

function Back() {
   const ev = document.getElementById('res');
   ev.value = ev.value.slice(0, -1);
}

function updateHistory() {
   const historyList = document.getElementById('historyList');
   historyList.innerHTML = '';
   history.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      historyList.appendChild(li);
   });
}

// Keyboard support
document.addEventListener('keydown', function (event) {
   const key = event.key;
   const validKeys = '0123456789+-*/.%';
   if (validKeys.includes(key)) {
      Solve(key === '*' ? 'x' : key);
   } else if (key === 'Enter') {
      Result();
   } else if (key === 'Backspace') {
      Back();
   } else if (key.toLowerCase() === 'c') {
      Clear();
   }
});

// Theme toggle
const themeSwitch = document.getElementById('themeSwitch');
const themeLabel = document.getElementById('themeLabel');

themeSwitch.addEventListener('change', () => {
   document.body.classList.toggle('light');
   themeLabel.textContent = themeSwitch.checked ? '☀️ Light' : '🌙 Dark';
});
