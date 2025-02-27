let map = [
  "xxxxxxxxxxxxxxxxxxtxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  "TXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
 
 ];
 var time = 10;
 
 let scene, fence,mainCam, win, lose, horse, trophy1;
 let speed = 0.05;
 window.onload = function(){
   fence = document.getElementById("fenceUnit");
   win = document.getElementById("win");
   lose = document.getElementById("lose");
   scene = document.querySelector("a-scene");
   mainCam = document.getElementById("mainCam");
   horse = document.getElementById("horseModel");
   let timeText = document.getElementById("timeText");
   trophy1 = new Trophy(0,3,-100);
 let countdownInterval = setInterval(() => {
         if (time >= 0) {
             timeText.setAttribute('text', 'value', `${time} seconds`);
             time--;
         } else {
             clearInterval(countdownInterval); // Stop the countdown once time reaches 0
       lose.setAttribute("opacity", 1);
         }
     }, 1000);
   
   let cameraMove = setInterval(() => {
     
     let currentPos = mainCam.getAttribute('position');
       // Update the camera's position (move it along the z-axis)
     mainCam.setAttribute('position', { x: currentPos.x, y: currentPos.y, z: currentPos.z -0.5 });
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
    if (distance(trophy1.obj, mainCam) < 2.6){
      console.log("close");
      trophy1.obj.setAttribute("opacity", 0);
      window.open("home.html", "_self");
      
    }
   
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
 class Trophy{
   constructor(x,y,z){
     this.y = y;
     this.x = x;
    this.z = z;
 
     this.obj = document.createElement("a-gltf-model");
     this.obj.setAttribute("src","#trophy");
     this.obj.setAttribute("scale","2 2 2");
     this.obj.setAttribute("position",{x:x,y:y,z:z});
     console.log("created trophy");
     scene.append(this.obj); 
   
   
   }
 
  
 
 }
 
 function distance(obj1,obj2){
   let x1 = obj1.object3D.position.x;
   let y1 = obj1.object3D.position.y;
   let z1 = obj1.object3D.position.z;
   let x2 = obj2.object3D.position.x;
   let y2 = obj2.object3D.position.y;
   let z2 = obj2.object3D.position.z;
 
   let d = Math.sqrt(Math.pow(x1-x2,2) + Math.pow(y1-y2,2) + Math.pow(z1-z2,2));
   return d;
 }