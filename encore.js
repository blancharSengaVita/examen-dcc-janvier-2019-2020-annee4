
const app = {
  initConst (){
    this.grid = document.querySelector('.grid');
    this.maxItems = 200;
    this.currentItems = 1;
  },

  fizzbuzz(){
  for (; this.currentItems < this.maxItems; this.currentItems += 2) {
    if (this.isPrime(this.currentItems)) {
      this.grid.insertAdjacentHTML('beforeend', `<li data-sum="${this.factoriel(this.currentItems)}" class="premier grid__item">${this.currentItems}
\t<div class="ribbon-wrapper">
    <div data-text="somme" class="ribbon">premier</div>
  </div>
</li>`);
    } else if (this.currentItems % 9 === 0) {
      this.grid.insertAdjacentHTML('beforeend', `<li class="multiple-3-9 grid__item">${this.currentItems}
  <div class="ribbon-wrapper">
    <div class="ribbon">3 et 9</div>
  </div>
</li>`);
    } else if (this.currentItems % 3 === 0) {
      this.grid.insertAdjacentHTML('beforeend', `<li class="multiple-3 grid__item ">${this.currentItems}
  <div class="ribbon-wrapper">
    <div class="ribbon"> 3 </div>
  </div>
</li>`);
    } else {
      this.grid.insertAdjacentHTML('beforeend', `<li class="grid__item"> ${this.currentItems}</li>`);
    }
  }

  const premiers = document.querySelectorAll('.premier');
  const items = document.querySelectorAll('.grid__item');

  for (const premier of premiers) {

    premier.addEventListener('click', (e)=>{
      e.currentTarget.classList.add('animate');

      [e.currentTarget.childNodes[0].textContent, e.currentTarget.dataset.sum] = [e.currentTarget.dataset.sum,e.currentTarget.childNodes[0].textContent];

      for (const item of items) {
        item.classList.add('grid__item--lighter')
      }

    });

    premier.addEventListener('transitionend', (e)=>{
      e.currentTarget.classList.remove('animate');
      for (const item of items) {
        item.classList.remove('grid__item--lighter')
      }
    });
  }
},

  isPrime (number) {
    if (number <= 1) {
      return false;
    } else if (number > 1) {
      for (let i = 2; i < number; i++) {
        if (number % i === 0) {
          return false;
        }
      }
      return true;
    }
  },

  factoriel(number){
  if (number === 1){
    return 1
  } else {
    return number += this.factoriel(number - 1);
  }
},

  infiniteScroll(){
    window.addEventListener('scroll', ()=>{
      if (window.innerHeight + window.scrollY >= this.grid.scrollHeight){
        this.maxItems += 100;
        this.fizzbuzz();
      }
    });
  },

  initApp(){
    document.documentElement.classList.add('js-enabled');
    this.initConst();
    this.fizzbuzz();
    this.infiniteScroll();
  }
}

app.initApp();










