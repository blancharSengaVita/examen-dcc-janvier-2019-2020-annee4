const app = {
  initConst(){
    this.grid = document.querySelector('.grid');
    this.maxItems = 200;
    this.currentItem = 1;
  },

  fizzbuzz(){
    for (; this.currentItem < this.maxItems; this.currentItem+=2){
      if (this.isPrime(this.currentItem)){
        this.grid.insertAdjacentHTML('beforeend', `<li data-sum="${this.factoriel(this.currentItem)}" class="premier grid__item">${this.currentItem}
\t<div class="ribbon-wrapper">
    <div data-text="somme" class="ribbon">premier</div>
  </div>
</li`)
      }else if (this.currentItem % 9 === 0){
        this.grid.insertAdjacentHTML('beforeend', `<li class="multiple-3-9 grid__item">${this.currentItem}
  <div class="ribbon-wrapper">
    <div class="ribbon">3 et 9</div>
  </div>
</li>`);
      }else if (this.currentItem % 3 === 0){
        this.grid.insertAdjacentHTML('beforeend', `<li class="multiple-3 grid__item">${this.currentItem}
  <div class="ribbon-wrapper">
    <div class="ribbon">3</div>
  </div>
</li>`);
      }else{
        this.grid.insertAdjacentHTML('beforeend', `<li class="grid__item">${this.currentItem}</li>`);
      }
    }

    const premiers = document.querySelectorAll('.premier');
    const gridItems = document.querySelectorAll('.grid__item')

    for (const premier of premiers) {
      console.log(premier.textContent);
      premier.addEventListener('click', (e)=>{

        [e.currentTarget.childNodes[0].textContent, e.currentTarget.dataset.sum] = [e.currentTarget.dataset.sum, e.currentTarget.childNodes[0].textContent];

        e.currentTarget.classList.add('animate');

        for (const gridItem of gridItems) {
          gridItem.classList.add('grid__item--lighter');
        }

      });

      premier.addEventListener('transitionend', (e)=>{

        e.currentTarget.classList.remove('animate');

        for (const gridItem of gridItems) {
          gridItem.classList.remove('grid__item--lighter');
        }

      });

    }

  },

  isPrime(number){
    if (number <= 1){
      return false;
    }else if (number > 1){
      for (let i = 2; i < number ; i++) {
        if (number % i === 0){
          return false;
        }
      }
      return true;
    }
  },


  factoriel(number){
  if(number === 1){
    return 1;
  }else {
    return number += (this.factoriel(number-1));
  }
},

  infiniteScroll(){
    window.addEventListener('scroll', ()=>{
      if (window.innerHeight + window.scrollY >= this.grid.scrollHeight){
        this.maxItems += 100;
        this.fizzbuzz();
      }
    })
  },

  initApp(){
    document.documentElement.classList.add('js-enabled');
    this.initConst();
    this.fizzbuzz();
    this.infiniteScroll()
  }
}



app.initApp();
