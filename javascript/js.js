

// mon objet personnage //
var girl={
  x:0,
  y:0,
  width:60,
  heigth:120,
  spWidth:600,
  spHeigth:240,
  frameX:0,
  frameY:0,
  speed:8,
  dx:0,
  dy:350
}
var girlSprite;
girlSp= new Image (); 
girlSp.src = "images/sprite.png";
// création des objets images//
var obhtm ={
  x:100,
  y:400,
  width:75,
  height:150
}
var htm= new Image ();
htm.src = "images/pain.png";

var obcss ={
  x:250,
  y:400,
  width:75,
  height:150
}
var css= new Image ();
css.src = "images/pain.png";

var objs ={
  x:400,
  y:400,
  width:75,
  height:150
}
var js = new Image();
 js.src="images/pain.png";

var obang = {
   x:550,
   y:400,
   width:75,
   height:150
 }
 var ang = new Image();
 ang.src="images/pain.png";

 var obvue = {
   x:700,
   y:400,
   width:80,
   height:150
 }
 var vue = new Image();
 vue.src="images/pain.png";

 var obps = {
   x:850,
   y:400,
   width:100,
   height:150
 }
var ps = new Image();
ps.src = "images/pain.png";

var ps = new Image();
ps.src = "images/pain.png";

var score=0;
var sound = document.getElementById("sound");
var canvas= document.getElementById('canvas');
var ctx=canvas.getContext('2d');
canvas.width=1000;
canvas.heigth=500;

var bg = new Image();
bg.src = "images/tlo.png";
// moving background i found on code on Cnavas  bootcamp of Adam Khoury 
function Background (){
  this.x=0,
  this.y=0, 
  this.w = bg.width, 
  this.h = bg.height;
  this.rende = function(){
    ctx.drawImage(bg, this.x--, 0);
      if(this.x <= -999){
          this.x = 0;
  }
  }
}
var background = new Background();

function render(image,sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight){
  ctx.drawImage(image,sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight )
}

function animate (){
  ctx.clearRect(0,0,canvas.width, canvas.heigth);
  background.rende();
  ctx.drawImage(htm,100,300,75,150);
  ctx.drawImage(css,250,300,75,150);
  ctx.drawImage(js,400,300,75,150);
  ctx.drawImage(ang,550,300,75,150);
  ctx.drawImage(vue,700,300,75,150);
  ctx.drawImage(ps,850,300,75,150);
  ctx.font = "25px veranda";
  ctx.fillStyle="black";
  ctx.fillText("Your score : "+ score, 750,50);
  render(girlSp,girl.width*girl.frameX,girl.heigth*girl.frameY, girl.width,girl.heigth,girl.dx,girl.dy,girl.width,girl.heigth);
  move(keyclick);
  collision();
  deuxcollision();
  troiscollision();
  quatrecollision();
  cinqcollision();
  sixcollision();
}var mika=window.onload=setInterval(animate,1000/10);
// recouperation si clavier est appuyer et quand il est relacher//
var keyclick = {};
  document.addEventListener ("keydown", function (e){
    keyclick[e.keyCode]=true;
    move (keyclick);
  }); 
  
  document.addEventListener ("keyup", function (e){
    delete keyclick[e.keyCode];
  });
// movement par clavier//
function move (keyclick){
if (39 in keyclick){
      if( girl.frameX<9) girl.frameX++;
    else {girl.frameX=0;
    };
     girl.dx+=girl.speed;
    }

if (40 in keyclick){
    document.getElementById("up").style.display="inline";
  }else {
    document.getElementById("up").style.display="none";
  }
if (38 in keyclick){
  document.getElementById("down").style.display="inline";
}else{
  document.getElementById("down").style.display="none";
}
}
 

  function collision  (){
   if (girl.dx<=(obhtm.x+5)&& obhtm.x <=(girl.dx+10)){
      document.getElementById("ht").style.display="block";
      console.log('hit');
      score++;
      playsong();
      
  }
  }
  function deuxcollision (){
     if (girl.dx<=(obcss.x+5)&& obcss.x <=(girl.dx+10)){
      document.getElementById("cs").style.display="block";
      score++;
      playsong();
  }
  }
 function troiscollision (){
    if (girl.dx<=(objs.x+5)&&objs.x<=(girl.dx+10)){
      document.getElementById("js").style.display="block";
      score++;
      playsong();
  }
  }
  function quatrecollision (){
    if (girl.dx<=(obang.x+5)&&obang.x<=(girl.dx+15)){
      document.getElementById("ang").style.display="block";
      score++;
      playsong();
 }
 }
  function cinqcollision (){
    if (girl.dx<=(obvue.x+10)&&obvue.x<=(girl.dx+15)){
      document.getElementById("vs").style.display="block";
      score++;
      playsong();
  }
  }
  function sixcollision (){
    if (girl.dx<=(obps.x+10)&&obps.x<=(girl.dx+15)){
      document.getElementById("ps").style.display="block";
      score++;
      playsong();
      gameover();
  }
  }
  function playsong(){
      sound.play()
  }
 function gameover (){
   if (score>=6){
     document.getElementById("cv").style.display="block";
     document.getElementById("status").style.display="block";
   }
   }

   