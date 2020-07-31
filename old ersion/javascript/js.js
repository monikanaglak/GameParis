// mon objet personnage //
var girl = {
  x: 0,
  y: 0,
  width: 60,
  heigth: 120,
  spWidth: 600,
  spHeigth: 240,
  frameX: 0,
  frameY: 0,
  speed: 8,
  dx: 0,
  dy: 350,
}
var girlSprite
girlSp = new Image()
girlSp.src = 'images/sprite.png'
// création des objets images//
var obhtm = {
  x: 100,
  y: 400,
  width: 10,
  height: 150,
}
var htm = new Image()
htm.src = 'images/pain.png'

var obcss = {
  x: 250,
  y: 400,
  width: 75,
  height: 150,
}
var css = new Image()
css.src = 'images/pain.png'

var objs = {
  x: 400,
  y: 400,
  width: 75,
  height: 150,
}
var js = new Image()
js.src = 'images/pain.png'

var obang = {
  x: 550,
  y: 400,
  width: 75,
  height: 150,
}
var ang = new Image()
ang.src = 'images/pain.png'

var obvue = {
  x: 700,
  y: 400,
  width: 80,
  height: 150,
}
var vue = new Image()
vue.src = 'images/pain.png'

var obps = {
  x: 850,
  y: 400,
  width: 100,
  height: 150,
}
var ps = new Image()
ps.src = 'images/pain.png'

var ps = new Image()
ps.src = 'images/pain.png'

var score = 0
var sound = document.getElementById('sound')
var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')
canvas.width = 1000
canvas.heigth = 500

var bg = new Image()
bg.src = 'images/paris.png'
// moving background i found on code on Cnavas  bootcamp of Adam Khoury https://www.youtube.com/watch?v=pTCzinjyEgc
function Background() {
  ;
  (this.x = 0), (this.y = 0), (this.w = bg.width), (this.h = bg.height)
  this.rende = function () {
    ctx.drawImage(bg, this.x--, 0)
    if (this.x <= -999) {
      this.x = 0
    }
  }
}
var background = new Background()
var bgm = document.getElementById('bgm')

function render(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight) {
  ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
}

const baguettes = [{
    img: htm,
    dx: 100,
    dy: 300,
    dWidth: 20,
    dHeight: 150
 },
  
  {
    img: css,
    dx: 250,
    dy: 300,
    dWidth: 20,
    dHeight: 150
  },
  
  {
    img: js,
    dx: 400,
    dy: 300,
    dWidth: 20,
    dHeight: 150
  },
  {
    img: ang,
    dx: 550,
    dy: 300,
    dWidth: 20,
    dHeight: 150
  },
  {
    img: vue,
    dx: 700,
    dy: 300,
    dWidth: 20,
    dHeight: 150
  },
  
  {
    img: ps,
    dx: 850,
    dy: 300,
    dWidth: 20,
    dHeight: 150
  },
 
]

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.heigth)
  background.rende()
  for ({
      img,
      dx,
      dy,
      dWidth,
      dHeight
    } of baguettes) {
    ctx.drawImage(img, dx, dy, dWidth, dHeight)
  }
  ctx.font = '25px veranda'
  ctx.fillStyle = 'black'
  ctx.fillText('Ton score: ' + score, 750, 50)
  render(
    girlSp,
    girl.width * girl.frameX,
    girl.heigth * girl.frameY,
    girl.width,
    girl.heigth,
    girl.dx,
    girl.dy,
    girl.width,
    girl.heigth
  )
  move(keyclick)
  collision()
  deuxcollision()
  troiscollision()
  quatrecollision()
  cinqcollision()
  sixcollision()

}
window.onload = setInterval(animate, 1000 / 10)
// recouperation si clavier est appuyer et quand il est relacher//
var keyclick = {}
document.addEventListener('keydown', function (e) {
  keyclick[e.keyCode] = true
  move(keyclick)
})

document.addEventListener('keyup', function (e) {
  delete keyclick[e.keyCode]
})
// movement par clavier//
function move(keyclick) {
  if (39 in keyclick) {
    if (girl.frameX < 9) girl.frameX++
    else {
      girl.frameX = 0
    }
    girl.dx += girl.speed
  }
  if (40 in keyclick) {
    document.getElementById('up').style.display = 'inline'
  } else {
    document.getElementById('up').style.display = 'none'
  }
  if (38 in keyclick) {
    document.getElementById('down').style.display = 'inline'
  } else {
    document.getElementById('down').style.display = 'none'
  }
}

function collision() {
  if (girl.dx <= baguettes[0,1] && baguettes[0,1] <= girl.dx ) {
    document.getElementById('ht').style.display = 'block'
    score++
    baguettes.shift();
    }
}

function deuxcollision() {
  if (girl.dx> obcss.x && girl.dx < obcss.x+obcss.width) {
    document.getElementById('cs').style.display = 'block'
    score++
    baguettes.shift()
    playsong()
  }
}

function troiscollision() {
  if (girl.dx <= objs.x + 10 && objs.x <= girl.dx ) {
    document.getElementById('js').style.display = 'block'
    score++
    baguettes.shift()
    playsong()
  }
}

function quatrecollision() {
  if (girl.dx <= obang.x +10 && obang.x <= girl.dx) {
    document.getElementById('ang').style.display = 'block'
    score++
    baguettes.shift()
    playsong()
  }
}

function cinqcollision() {
  if (girl.dx <= obvue.x + 10 && obvue.x <= girl.dx ) {
    document.getElementById('vs').style.display = 'block'
    score++
    baguettes.shift()
    playsong()
  }
}

function sixcollision() {
  if (girl.dx <= obps.x + 10 && obps.x <= girl.dx ) {
    document.getElementById('ps').style.display = 'block'
    score++
    baguettes.shift()
    playsong()
    gameover()
  }
}

// hit baguette
function playsong() {
  sound.play()
}

function gameover() {
  if (score >= 6) {
    document.getElementById('cv').style.display = 'block'
    document.getElementById('status').style.display = 'block'
  }
}