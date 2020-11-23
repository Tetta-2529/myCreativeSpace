document.addEventListener('DOMContentLoaded', function () {
  new TextAnimation('.ol-text');
});

class TextAnimation {
  constructor(text) {
    this.text = document.querySelector(text);
    this.texts = this.text.innerHTML.trim().split('');
    this.text.innerHTML = this._splitText();
    console.log(this.text);
  }
  _splitText() {
    return this.texts.reduce((accu, curr) => {
      curr = curr.replace(/\s+/, '&nbsp;');
      return `${accu} <span class="char">${curr}</span>`;
    }, '');
  }
}
