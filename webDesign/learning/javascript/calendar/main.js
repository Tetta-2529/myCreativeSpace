'use strict';

{
  const today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth();

  function getCalendarHead() {
    const dates = [];
    // 前月の最終日を取得する
    const d = new Date(year, month, 0).getDate();
    // 今月1日の曜日を取得する
    const n = new Date(year, month, 1).getDay();

    console.log(n);
    // 今月の第一週に含まれる前月の日付を今月1日から遡って取得する
    for (let i = 0; i < n; i++) {
      dates.unshift({
        date: d - i,
        isToday: false,
        isDisable: true,
      });
    }
    return dates;
  }

  function getCalendarTail() {
    const dates = [];
    // 取得したい月の曜日を取得する
    const lastDay = new Date(year, month + 1, 0).getDay();
    // 最終日の週に含まれる次月の残りの日付を取得する
    for (let i = 1; i < 7 - lastDay; i++) {
      dates.push({
        date: i,
        isToday: false,
        isDisable: true,
      });
    }
    return dates;
  }

  function getCalendarBody() {
    const dates = [];
    // 取得したい月の翌月の1日目を指定し、その0日目を指定することで取得したい月の最終日を取得することができる
    const lastDate = new Date(year, month + 1, 0).getDate();

    // 今月の1日から最終日までを取得する
    for (let i = 1; i <= lastDate; i++) {
      dates.push({
        date: i,
        isToday: false,
        isDisable: false,
      });
    }

    if (year === today.getFullYear() && month === today.getMonth()) {
      dates[today.getDate() - 1].isToday = true;
    }

    return dates;
  }
  // 前月・次月ボタンを押したときにテーブルを初期化
  function clearCalendar() {
    const tbody = document.querySelector('tbody');
    while (tbody.firstChild) {
      tbody.removeChild(tbody.firstChild);
    }
  }

  // タイトルの年月表記を書き換える
  function renderTitle() {
    const title = `${year}/${String(month + 1).padStart(2, 0)}`;
    document.querySelector('#title').textContent = title;
  }

  // カレンダーを描画
  function renderWeeks(params) {
    const dates = [
      // 今月の第一週に含まれる前月分
      ...getCalendarHead(),
      // 今月
      ...getCalendarBody(),
      // 今月の最終週に含まれる来月分
      ...getCalendarTail(),
    ];

    // 上で合成された配列からカレンダーに描画するために１週間ごとに分割する
    const weeks = [];
    const weeksCount = dates.length / 7;

    for (let i = 0; i < weeksCount; i++) {
      weeks.push(dates.splice(0, 7));
    }

    weeks.forEach((week) => {
      const tr = document.createElement('tr');
      week.forEach((date) => {
        const td = document.createElement('td');

        td.textContent = date.date;
        if (date.isToday) {
          td.classList.add('today');
        }
        if (date.isDisable) {
          td.classList.add('disabled');
        }

        tr.appendChild(td);
      });
      document.querySelector('tbody').appendChild(tr);
    });
  }

  function createCalendar() {
    clearCalendar();
    renderTitle();
    renderWeeks();
  }

  document.querySelector('#prev').addEventListener('click', () => {
    month--;
    if (month < 0) {
      year--;
      month = 11;
    }
    createCalendar();
  });

  document.querySelector('#next').addEventListener('click', () => {
    month++;
    if (month > 11) {
      year++;
      month = 0;
    }
    createCalendar();
  });

  document.querySelector('#today').addEventListener('click', () => {
    year = today.getFullYear();
    month = today.getMonth();
    createCalendar();
  });

  createCalendar();
}
