'use strict';
{
  const timer = document.querySelector('#timer');
  const start = document.querySelector('#start');
  const stop = document.querySelector('#stop');
  const reset = document.querySelector('#reset');

  let startTime;
  let timeOutId;
  let elapsedTime = 0;

  function countUp() {
    const d = new Date(Date.now() - startTime + elapsedTime);
    const m = String(d.getMinutes()).padStart(2, '0');
    const s = String(d.getSeconds()).padStart(2, '0');
    const ms = String(d.getMilliseconds()).padStart(3, '0');
    timer.textContent = `${m}:${s}.${ms}`;

    timeOutId = setTimeout(() => {
      countUp();
    }, 10);
  }

  // 各ボタンの状態を制御
  function setBtnStateInitial() {
    start.classList.remove('inactive');
    stop.classList.add('inactive');
    reset.classList.add('inactive');
  }

  function setBtnStateRunning() {
    start.classList.add('inactive');
    stop.classList.remove('inactive');
    reset.classList.add('inactive');
  }

  function setBtnStateStopped() {
    start.classList.remove('inactive');
    stop.classList.add('inactive');
    reset.classList.remove('inactive');
  }

  // 初期状態ではスタートボタンしか押せない状態にする
  setBtnStateInitial();

  start.addEventListener('click', () => {
    // 同じボタンを押せないようにする
    if (start.classList.contains('inactive') === true) {
      return;
    }
    setBtnStateRunning();
    startTime = Date.now();
    countUp();
  });

  stop.addEventListener('click', () => {
    if (stop.classList.contains('inactive') === true) {
      return;
    }
    setBtnStateStopped();
    // setTimeoutをキャンセルする
    clearTimeout(timeOutId);
    // 再開するときのための開始時間を保持する
    elapsedTime += Date.now() - startTime;
  });

  reset.addEventListener('click', () => {
    if (reset.classList.contains('inactive') === true) {
      return;
    }
    setBtnStateInitial();
    timer.textContent = '00:00.000';
    // 保持していた再開のための開始時間を初期化する
    elapsedTime = 0;
  });
}
