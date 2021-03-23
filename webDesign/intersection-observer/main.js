'use strict';

{
  const target = document.querySelector('img');

  const options = {
    root: null, // 監視対象の領域の指定
    rootMargin: '0px 0px -100px', // rootの領域サイズの指定
    threshold: 1,
  }

  function callback(entries) {
    console.log(entries[0]);

    // if (!entries[0].isIntersecting) {
    //   return;
    // }
    // entries[0].target.classList.add('appear');

    if (entries[0].isIntersecting) {
      entries[0].target.classList.add('appear');
    } else {
      entries[0].target.classList.remove('appear');
    }
  }

  const observer = new IntersectionObserver(callback, options);

  observer.observe(target);
}
