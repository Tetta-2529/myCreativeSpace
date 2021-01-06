'use strict';
{
  const words = ['red', 'blue', 'pink'];
  let word;
  // 何文字目の文字を打っているかどうかを判定する変数
  let loc = 0;
  let starttime;
  let isPlaying = false;

  function setWord() {
    // wordsに格納されている単語をランダムに選んでセットする
    word = words.splice(Math.floor(Math.random() * words.length), 1)[0];
    target.textContent = word;
    loc = 0;
  }
  const target = document.getElementById('target');

  document.addEventListener('click', () => {
    // タイピング中にクリックすると次の単語が表示されてしまう不具合を修正
    if (isPlaying) {
      return;
    }

    isPlaying = true;
    starttime = Date.now();
    setWord();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key !== word[loc]) {
      // 打った文字が不正解の場合は以下の処理をしないようにする
      return;
    }
    // 打った文字が設定した文字と一致したら次の文字に進む
    loc++;
    // 一致した文字だけ'_'に書き換える
    target.textContent = '_'.repeat(loc) + word.substring(loc);

    if (loc === word.length) {
      if (words.length === 0) {
        // タイピングゲームでかかった時間を取得
        const elapsedTime = ((Date.now() - starttime) / 1000).toFixed(2);
        const result = document.querySelector('#result');
        result.textContent = `Finished! ${elapsedTime} second`;
        return;
      }
      setWord();
    }
  });
}
