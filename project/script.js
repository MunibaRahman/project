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
let scene, corn, camera, grass, coin,tracRide;
window.onload = function(){
  scene = document.querySelector("a-scene");
  mainCamera = document.getElementById("mainCamera");
  tractorCamera = document.getElementById("tractorCamera");
  tractor = document.getElementById("tractor");
  
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

 tractor.addEventListener("click",()=>{
		tracRide = true; 

  })

}

if (tracRide){
	tractorCamera.setAttribute("active",true);
      mainCamera.setAttribute("active",false);
	 tractorCamera.object3D.position.y = tractor.object3D.position.y;
		tractorCamera.object3D.position.x = tractor.object3D.position.x;
		tractorCamera.object3D.position.z = tractor.object3D.position.z;
}else if (tracRide = false){
	tractorCamera.setAttribute("active",false);
       mainCamera.setAttribute("active",true);
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
