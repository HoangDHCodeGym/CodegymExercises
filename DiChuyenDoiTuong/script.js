/**
 * Created by nhatnk on 4/26/17.
 */

function Hero(image, top, left, size) {
  this.image = image;
  this.top = top;
  this.left = left;
  this.size = size;

  this.getHeroElement = function() {
    return '<img width="' + this.size + '"' +
      ' height="' + this.size + '"' +
      ' src="' + this.image + '"' +
      ' style="top: ' + this.top + 'px; left:' + this.left + 'px;position:absolute;" />';
  }

  this.moveRight = function() {
    this.left += 40;
    console.log('ok: ' + this.left);
  }
  this.moveLeft = function() {
    this.left -= 40;
    console.log('ok: ' + this.left);
  }
  this.moveUp = function() {
    this.top -= 40;
    console.log('ok: ' + this.top);
  }
  this.moveDown = function() {
    this.top += 40;
    console.log('ok: ' + this.top);
  }

}

var hero = new Hero('`kitty.png', 20, 30, 200);
document.getElementById('game').innerHTML = hero.getHeroElement();

function move(evt) {
  let x = evt.keyCode;
  console.log(x);
  if ((x == 38) && (hero.top > 40)) {
    hero.moveUp();
  }
  if ((x == 40) && (hero.top < window.innerHeight - hero.size)) {
    hero.moveDown();
  }
  if ((x == 37) && (hero.left > 40)) {
    hero.moveLeft();
  }
  if ((x == 39) && (hero.left < window.innerWidth - hero.size)) {
    hero.moveRight();
  }
  document.getElementById('game').innerHTML = hero.getHeroElement();
}
document.addEventListener("keypress", move);
