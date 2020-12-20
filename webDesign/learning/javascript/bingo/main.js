'use strict';

{
  function createColumn(col) {
    // 必要となる数字を用意
    const source = [];
    for (let i = 0; i < 15; i++) {
      source[i] = i + 1 + 15 * col;
    }

    // 上で作成した数字から5つランダムに抽出
    const column = [];
    for (let i = 0; i < 5; i++) {
      // spliceは返り値として複数になることがあるので、返り値は指定しなければ配列で返る
      column[i] = source.splice(
        Math.floor(Math.random() * source.length),
        1
      )[0];
    }
    return column;
  }

  function createColumns() {
    // 1列ごとに抽出した数字を格納する
    const columns = [];
    for (let i = 0; i < 5; i++) {
      columns[i] = createColumn(i);
    }
    columns[2][2] = 'FREE';
    return columns;
  }

  // function createBingo(columns) {
  //   // 行と列に格納されている数字を反転させる
  //   const bingo = [];
  //   for (let row = 0; row < 5; row++) {
  //     bingo[row] = [];
  //     for (let col = 0; col < 5; col++) {
  //       bingo[row][col] = columns[col][row];
  //     }
  //   }
  //   return bingo;
  // }

  function renderBingo(columns) {
    for (let row = 0; row < 5; row++) {
      const tr = document.createElement('tr');
      for (let col = 0; col < 5; col++) {
        const td = document.createElement('td');
        // td.textContent = bingo[row][col];
        td.textContent = columns[col][row];
        tr.appendChild(td);
      }

      document.querySelector('tbody').appendChild(tr);
    }
  }

  const columns = createColumns();
  // const bingo = createBingo(columns);
  renderBingo(columns);
}
