const notFizzbuzz = {
  initConst () {
    this.grid = document.querySelector('.grid');
    this.currentCard = 1;
    this.maxCard = 200;
  },

  fizzbuzz () {
    for (this.currentCard; this.currentCard < this.maxCard; this.currentCard += 2) {
      if (this.isPrime(this.currentCard)) {
        this.grid.insertAdjacentHTML('beforeend', `<li data-sum="${this.factoriel(this.currentCard)}" class="premier grid__item">${this.currentCard}
	<div class="ribbon-wrapper">
    <div data-text="somme" class="ribbon">premier</div>
  </div>
</li>`);
      } else if (this.currentCard % 9 === 0) {
        this.grid.insertAdjacentHTML('beforeend', `<li class="multiple-3-9 grid__item">${this.currentCard}
  <div class="ribbon-wrapper">
    <div class="ribbon">3 et 9</div>
  </div>
</li>`);
      } else if (this.currentCard % 3 === 0) {
        this.grid.insertAdjacentHTML('beforeend', ` <li class="multiple-3 grid__item">${this.currentCard}
  <div class="ribbon-wrapper">
    <div class="ribbon">3</div>
  </div>
</li> `);
      } else {
        this.grid.insertAdjacentHTML('beforeend', `<li class="grid__item"> ${this.currentCard} </li>`);
      }
    }
    const premiers = document.querySelectorAll('.premier');
    const items = document.querySelectorAll('.grid__item');

    for (const premier of premiers) {

      premier.addEventListener('click', (e) => {
        e.currentTarget.classList.add('animate');

        [premier.childNodes[0].textContent, premier.dataset.sum] = [premier.dataset.sum, premier.childNodes[0].textContent];

        for (const item of items) {
          item.classList.add('grid__item--lighter');
        }
      });

      premier.addEventListener('transitionend', (e) => {
        e.currentTarget.classList.remove('animate');
        for (const item of items) {
          item.classList.remove('grid__item--lighter');
        }
      });
    }
  },

  factoriel (number) {
    if (number === 1) {
      return 1;
    }
    return number += (this.factoriel(number - 1));
  },

  infiniteScroll () {
    window.addEventListener('scroll', (e) => {
      if (window.innerHeight + window.scrollY >= this.grid.scrollHeight) {
        this.maxCard += 100;
        this.fizzbuzz();
      }
    });
  },

  isPrime (nombre) {
    if (nombre <= 1) {
      return false;
    } else if (nombre > 1) {
      for (let i = 2; i < nombre; i++) {
        if (nombre % i === 0) {
          return false;
        }
      }
      return true;
    }
  },

  initApp () {
    document.documentElement.classList.add('js-enabled');
    this.initConst();
    this.fizzbuzz();
    this.infiniteScroll();
  }
};

notFizzbuzz.initApp();







