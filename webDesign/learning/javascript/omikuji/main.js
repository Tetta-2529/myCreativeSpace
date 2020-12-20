'use strict';
{
  const btn = document.querySelector('#btn');

  btn.addEventListener('click', () => {
    // const result = ['大吉', '中吉', '小吉', '末吉'];
    // btn.textContent = result[Math.floor(Math.random() * result.length)];
    const n = Math.random();
    if (n < 0.05) {
      btn.textContent = '大吉';
    } else if (n < 0.2) {
      btn.textContent = '中吉';
    } else {
      btn.textContent = '末吉 ';
    }
  });
}
