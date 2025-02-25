let map = [
  "xxxxxxxxxxxxxxxxxxtxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  "TXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
 
 ];
 var time = 10;
 
 let scene, fence,mainCam, win, lose;
 let speed = 0.05;
 window.onload = function(){
   fence = document.getElementById("fenceUnit");
   win = document.getElementById("win");
   lose = document.getElementById("lose");
   scene = document.querySelector("a-scene");
   mainCam = document.getElementById("mainCam");
   let timeText = document.getElementById("timeText");
 let countdownInterval = setInterval(() => {
         if (time >= 0) {
             timeText.setAttribute('text', 'value', `${time} seconds`);
             time--;
         } else {
             clearInterval(countdownInterval); // Stop the countdown once time reaches 0
       lose.setAttribute("opacity", 1);
         }
     }, 1000);
   
   
  
  setInterval(() => {
     let currentPos = mainCam.getAttribute('position');
       // Update the camera's position (move it along the z-axis)
     mainCam.setAttribute('position', { x: currentPos.x, y: currentPos.y, z: currentPos.z - 0.5 });
     }, 25); // Move every 50ms
   
   for(let x = 0; x < map.length; x++){
     let row = map[x];
     let cols = row.split("");
     for(let z = 0; z < cols.length; z++){
       if(cols[z] == "x"){
         new Fence(15,1,z-40,90);
       }else if(cols[z] == "X"){
         new Fence(-15,1,z-48,90);
       }else if(cols[z] == "T"){
         new Hurdle(-5,2,z);
       }else if(cols[z] == "t"){
         new Hurdle(5,2,z);
       }
     
     }}
     new Coin(0,5,-100);
    new Hurdle(-5,0.75,70);
    new Hurdle(1,2,65);
    new Hurdle(5,0.75,50);
    new Hurdle(-6,2,50);
    new Hurdle(3,0.75,35);
    new Hurdle(-5,0.75,25);
    new Hurdle(6,2,10);
    new Hurdle(-2,0.75,3);
    new Hurdle(2,0.75,-10);
    new Hurdle(-3,2,-15);
    new Hurdle(4,0.75,-25);
    new Hurdle(-6,2,-32);
    new Hurdle(5,2,-40);
    new Hurdle(-3,2,-50);
    
   loop();
 }
 function loop(){
   
 
    window.requestAnimationFrame(loop);
 
 }
 class Fence{
   constructor(x,y,z,r){
     this.x = x;
     this.y = y;
     this.z = y;
   this.r = r;
 
     this.obj = fence.cloneNode(true);
     this.obj.setAttribute("position",{x:x,y:y,z:z});
   this.obj.setAttribute("rotation",{x:0,y:r,z:0});
     scene.append(this.obj); 
   }}
 
 class Hurdle{
   constructor(x,y,z){
     this.x = x;
     this.y = y;
     this.z = y;
 
   
    this.obj = document.createElement("a-entity");
   this.sidebarL = document.createElement("a-cylinder");
   this.sidebarL.setAttribute("position","-3 0 -1.5");
   this.sidebarL.setAttribute("color","brown");
   this.sidebarL.setAttribute("height","4");
   this.sidebarL.setAttribute("radius","0.1");
   
   this.sidebarR = document.createElement("a-cylinder");
   this.sidebarR.setAttribute("position","-3 0 1.5");
   this.sidebarR.setAttribute("color","brown");
   this.sidebarR.setAttribute("height","4");
   this.sidebarR.setAttribute("radius","0.1");
   
   this.white1 = document.createElement("a-cylinder");
   this.white1.setAttribute("position","-3 1.75 -1");
   this.white1.setAttribute("rotation","90 0 0");
   this.white1.setAttribute("radius","0.1");
   this.white2 = document.createElement("a-cylinder");
   this.white2.setAttribute("position","-3 1.75 1");
   this.white2.setAttribute("rotation","90 0 0");
   this.white2.setAttribute("radius","0.1");
   
   this.red = document.createElement("a-cylinder");
   this.red.setAttribute("position","-3 1.75 0");
   this.red.setAttribute("rotation","90 0 0");
   this.red.setAttribute("radius","0.1");
   this.red.setAttribute("color","red");
 
 
   this.obj.append(this.sidebarL);
   this.obj.append(this.sidebarR);
   this.obj.append(this.white1);
   this.obj.append(this.white2);
   this.obj.append(this.red);
   this.obj.setAttribute("rotation","0 90 0");
   this.obj.setAttribute("static-body","");
   this.obj.setAttribute("position",{x:x,y:y,z:z});
     scene.append(this.obj);  
   }}
 class Coin{
   constructor(x,y,z){
     this.y = y;
     this.dy = 0.01;
     this.a = 0;
     this.da = 0.01;
 
     this.obj = document.createElement("a-cylinder");
     this.obj.setAttribute("interact","");
     this.obj.setAttribute("color","yellow");
     this.obj.setAttribute("opacity",0.75);
     this.obj.setAttribute("rotation","90 0 0");
     this.obj.setAttribute("scale","0.25 0.1 0.25");
     this.obj.setAttribute("position",{x:x,y:this.y,z:z});
   //this.obj.setAttribute("sound", {src: "#coinSound", loop:false})
 
      this.obj.addEventListener("click", ()=>{
      this.sound = true;
      this.collect();
     
   })
   
     scene.append(this.obj); 
   }
 
   collect(){
     //if(this.sound){
     //  this.obj.components.sound.playSound();
     //}
     this.obj.setAttribute("opacity",0);
   win.setAttribute("opacity",1);
   
   
   }
 }