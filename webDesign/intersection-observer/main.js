'use strict';

{
  const target = document.querySelector('img');

  const options = {
    threshold: 0.2,
  }

  function callback(entries, obs) {
    console.log(entries[0]);

    if (!entries[0].isIntersecting) {
      return;
    }
    entries[0].target.classList.add('appear');
    obs.unobserve(entries[0].target);
    // 監視を止めることでブラウザにかかる負荷を軽減する
  }

  const observer = new IntersectionObserver(callback, options);

  observer.observe(target);
}
