class Parson {
  constructor(name) {
    this.name = name;
    this.nameVal = this.sayName();
  }

  sayName() {
    // console.log(`Hello ${this.name}`);
    return `Hello ${this.name}`;
  }
}

const myName = new Parson('Ear-Dots');
// myName.sayName();
console.log(myName.nameVal);

document.addEventListener('change', () => {
  const ul = document.querySelector('ul');
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }
  const selectNumber = document.querySelector('#selectNumber').value;
  for (let i = 0; i < selectNumber; i++) {
    console.log(selectNumber);
    const li = document.createElement('li');
    for (let i = 0; i < selectNumber; i++) {
      const div = document.createElement('div');
      div.textContent = i + 1;
      li.appendChild(div);
    }
    ul.appendChild(li);
  }
});
