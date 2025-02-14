let rnd = (l,u) => Math.random() * (u-l) + l
let maze = [
  "-xxxxxxxxxxxxxxxxxxxxx",
  "-x-------------------x",
  "-x-------------------x",
  "-x--xxxxxxx--xxxxxxxxx",
  "-x--x-----x--x--------",
  "-x--x-----x--x--------",
  "-x--x-----x--x--------",
  "-x--xxxxxxx--xxxxxxxxx",
  "-x--x----x-----------",
  "-x--xxxxxx-----------",
  "-x-------xxxxxxxxxxxxx",
  "-x-------x--x---------",
  "-x--xxxxxx--x-------",
  "-x--xxxxxx--x--------------",
  "-x----------x---------",
  "-x----------x---------",
  "-x--xxxxxxxxx---------------",
  "-x--x---------------",
  "-x--x---------------",
];
let scene, corn, camera, tracCam, grass, coin,tracRide,tractorOrig;
window.onload = function(){
  scene = document.querySelector("a-scene");
  camera = document.getElementById("mainCamera");
  tractorCamera = document.getElementById("tractorCamera");
  tractorOrig = document.getElementById("tractor");
  tractor1 = new Tractor(10,3,0);
  for(let r = 0; r < maze.length; r++){
    let row = maze[r];
    let cols = row.split("");
    for(let c = 0; c < cols.length; c++){
   if(cols[c] == "x"){
     new Corn(c-20,r-20);
      }
    }

  }
new Grass(-10, 0);
new Coin(-9.5, 1, -9);

  window.addEventListener("keypress",function(e){
if(e.key == " "){
    camera.setAttribute("active",true);
	camera.object3D.position.y = tractor1.camera.object3D.position.y;
    camera.object3D.position.x = tractor1.camera.object3D.position.x;
    camera.object3D.position.z = tractor1.camera.object3D.position.z;
    tractor1.camera.setAttribute("active",false);
	}

    
  })

  loop();
}
  
function loop(){
 //tractor1.tractorRide();
  //balloon1.balloonEnd();
   window.requestAnimationFrame(loop);

}


 
function distance(obj1,obj2){
  let x1 = obj1.object3D.position.x;
  let y1 = obj1.object3D.position.y;
  let x2 = obj2.object3D.position.x;
  let y2 = obj2.object3D.position.y;
  let z2 = obj2.object3D.position.z;

  let d = Math.sqrt(Math.pow(x1-x2,2) + Math.pow(y1-y2,2) + Math.pow(z1-z2,2));
  return d;
}
