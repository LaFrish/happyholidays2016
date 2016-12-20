var c = document.getElementById('canv'),
    $ = c.getContext("2d");
var w = c.width = window.innerWidth,
    h = c.height = window.innerHeight;

Snowy();
function Snowy() {
  var snow, arr = [];
  var num = 600, tsc = 1, speed = 1;
  var sc = 1.3, t = 0, mv = 20, min = 1;
    for (var i = 0; i < num; ++i) {
      snow = new Flake();
      snow.y = Math.random() * (h + 50);
      snow.x = Math.random() * w;
      snow.t = Math.random() * (Math.PI * 2);
      snow.size = (100 / (10 + (Math.random() * 100))) * sc;
      snow.speed = (Math.pow(snow.size * .5, 2) * .15) * speed;
      snow.speed = snow.speed < min ? min : snow.speed;
      arr.push(snow);
    }
  letItSnow();
  function letItSnow(){
    window.requestAnimationFrame(letItSnow);
      $.clearRect(0, 0, w, h);
      $.fillStyle = '#e';
      $.fillRect(0, 0, w, h);
      $.fill();
        for (var i = 0; i < arr.length; ++i) {
          f = arr[i];
          f.t += .05;
          f.t = f.t >= Math.PI * 2 ? 0 : f.t;
          f.y += f.speed;
          f.x += Math.sin(f.t * tsc) * (f.size * .3);
          if (f.y > h + 50) f.y = -10 - Math.random() * mv;
          if (f.x > w + mv) f.x = - mv;
          if (f.x < - mv) f.x = w + mv;
          f.draw();}
 }
 function Flake() {
   this.draw = function() {
      this.g = $.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size);
      this.g.addColorStop(0, '#fff');
      this.g.addColorStop(1, '#000');
      $.moveTo(this.x, this.y);
      $.fillStyle = this.g;
      $.beginPath();
      $.arc(this.x, this.y, this.size, 0, Math.PI * 2, true);
      $.fill();}
  }
}

window.addEventListener('resize', function(){
  c.width = w = window.innerWidth;
  c.height = h = window.innerHeight;
}, false);
