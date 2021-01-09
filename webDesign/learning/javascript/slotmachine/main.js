'use strict';
{
  class Panel {
    constructor() {
      // sectionだけconstで定義した理由として、コンストラクタだけでしか使用しないため
      const section = document.createElement('section');
      section.classList.add('panel');

      // thisを使用して定義した変数に関してはメソッドから呼び出すためthisによって定義している
      this.img = document.createElement('img');
      this.img.src = this.getRandomImage();

      // spinボタンを押して発生するsetTimeOutを停止するための変数
      this.timeoutId = undefined;

      this.stop = document.createElement('div');
      this.stop.textContent = 'STOP';
      this.stop.classList.add('stop', 'inactive');
      this.stop.addEventListener('click', () => {
        // ボタンを1回だけ押せるようにして2回以上押せないように処理
        if (this.stop.classList.contains('inactive')) {
          return;
        }
        this.stop.classList.add('inactive');
        // spinボタンを押して発生したsetTimeOutを停止
        clearTimeout(this.timeoutId);

        // stopボタンを押してパネルの画像が何枚確定したかを判定する変数から数を減らす
        panelsLeft--;

        // パネルの画像が全て確定したときの処理
        if (panelsLeft === 0) {
          spin.classList.remove('inactive');
          panelsLeft = 3;
          checkResult();
        }
      });

      section.appendChild(this.img);
      section.appendChild(this.stop);

      const main = document.querySelector('main');
      main.appendChild(section);
    }

    getRandomImage() {
      const images = ['img/seven.png', 'img/bell.png', 'img/cherry.png'];
      return images[Math.floor(Math.random() * images.length)];
    }

    // 画像をランダムに切り替えるメソッド
    spin() {
      this.img.src = this.getRandomImage();
      this.timeoutId = setTimeout(() => {
        this.spin();
      }, 50);
    }

    isUnmatched(p1, p2) {
      // if (this.img.src !== p1.img.src && this.img.src !== p2.img.src) {
      //   return true;
      // } else {
      //   return false;
      // }
      return this.img.src !== p1.img.src && this.img.src !== p2.img.src;
    }

    unmatch() {
      // 画像を薄くするスタイルクラスを付与
      this.img.classList.add('unmatched');
    }
    activate() {
      this.img.classList.remove('unmatched');
      this.img.classList.remove('inactive');
      this.stop.classList.remove('inactive');
    }
  }

  // 押したパネルがほかのパネルと画像が一致するか判定する
  // クラス内で記述されないのは、クラスがパネル1つずつの処理に対して、下記の処理はパネル全体の処理になるため
  function checkResult() {
    // 対象のパネルの画像だけ他の2つの画像と一致しなかった場合の処理
    if (panels[0].isUnmatched(panels[1], panels[2])) {
      // 画像を薄くする処理
      panels[0].unmatch();
    }
    if (panels[1].isUnmatched(panels[0], panels[2])) {
      panels[1].unmatch();
    }
    if (panels[2].isUnmatched(panels[0], panels[1])) {
      panels[2].unmatch();
    }
  }

  const panels = [new Panel(), new Panel(), new Panel()];

  // stopボタンを押してパネルの画像が何枚確定したかを判定するための変数
  let panelsLeft = 3;

  const spin = document.getElementById('spin');
  // spinボタンを押したときの処理
  spin.addEventListener('click', () => {
    // ボタンを1回だけ押せるようにして2回以上押せないように処理
    if (spin.classList.contains('inactive')) {
      return;
    }
    spin.classList.add('inactive');
    panels.forEach((panel) => {
      // 再度スロットを動かすときに前回付与されていた画像を薄くするスタイルを撤去
      panel.activate();
      panel.spin();
    });
  });
}
