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
];let map2 = [
  "xxxxxxxxxxxxxxxxxxxx","X-------------------X",
 "X-------------------X",
 "X-------------------X",
 "X-------------------X",
 "X-------------------X",
 "X-------------------X",
 "X-------------------X",
 "X-------------------X",
 "X-------------------X",
 "xxxxxxxxxxxxxxxxxxxx",
];

let scene, corn, camera, tracCam, grass, coin,tracRide,tractorOrig, grass = [];
let fence,mainCam, balloonCam, mainCursor, balloon1, check;;
window.onload = function(){
  scene = document.querySelector("a-scene");
  camera = document.getElementById("mainCamera");
  tractorCamera = document.getElementById("tractorCamera");
  tractorOrig = document.getElementById("tractor");
  tractor1 = new Tractor(10,3,0);
  fence = document.getElementById("fenceUnit");
	balloon1 = new Balloon(4.5,0,60);
 
	mainCursor = document.getElementById("mainCursor");

  for(let r = 0; r < maze.length; r++){
    let row = maze[r];
    let cols = row.split("");
    for(let c = 0; c < cols.length; c++){
   if(cols[c] == "x"){
     new Corn(c-20,r-20);
      }
    }

  }
  
   for(let x = 0; x < map2.length; x++){
    let row2 = map2[x];
    let cols2 = row2.split("");
    for(let z = 0; z < cols2.length; z++){
      if(cols2[z] == "x"){
        new Fence(x,0.25,z+35,90);
      }else if(cols2[z] == "X"){
        new Fence(x,0.25,z+36,0);
      }}}

  for(let z = 100; z > -200; z -= 15){
    let x = rnd(-50,50);
    let pz = z + rnd(-5, 5);
    grass.push(new Grass(x,-pz));
  }
	
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
  for(let grass of Grass){

  if(distance(camera, grass.obj) < 2){
   grass.dissapear();

  }
   balloon1.balloonRide();
  balloon1.balloonEnd();

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
//when you move with wasd when flying, caemra has to move with object so that you're not flying in air
class CheckPoint{
  constructor(x,y,z){
    this.x = x;
    this.y = y;
    this.z = y;
    
    this.obj = document.createElement("a-entity");
	this.staff = document.createElement("a-box");
	this.sign = document.createElement("a-box");
    this.img = document.createElement("a-image");
	this.img.setAttribute("height", 4);
	this.img.setAttribute("width", 5);
	this.img.setAttribute("src", "#checkimg");
	this.img.setAttribute("position", "0 7 0.55");
	this.staff.setAttribute("height", 15);
	this.staff.setAttribute("color", "#542224");
	this.sign.setAttribute("height", 4);
	this.sign.setAttribute("width", 5);
	this.sign.setAttribute("position", "0 7 0");
	
	this.obj.append(this.staff);
	this.obj.append(this.sign);
	this.obj.append(this.img);
	this.obj.setAttribute("clickable", "");
	this.obj.setAttribute("position",{x:x,y:y+2,z:z});
    scene.append(this.obj);  
}}
class Balloon{
  constructor(x,y,z){
    this.x = x;
    this.y = y;
    this.z = z;
    this.ride = false;
    this.down = false; 
    this.checkpoint = new CheckPoint(balloon1, this.x, this.y, this.z);
    this.checkpoint.obj.addEventListener("click", ()=>{
      console.log("clicking on the checkpoint inside the balloon class")
      this.down = true;
    })
	this.checkpoint2 = new CheckPoint(balloon1, -200, 0, -30); 
    this.checkpoint2.obj.addEventListener("click", ()=>{
      this.down = true;
    })
  this.obj = document.createElement("a-gltf-model");
  this.obj.setAttribute("src", "#balloonModel");
  this.camera = document.createElement("a-camera"); 
  this.camera.setAttribute("active", "false");
  this.camera.setAttribute("wasd-controls-enabled", "true");
  scene.append(this.camera);
  this.cursor = document.createElement("a-cursor");
  this.cursor.setAttribute("opacity", 0);
  this.camera.append(this.cursor);
   this.obj.setAttribute("clickable","");
    this.obj.addEventListener("click", ()=>{
    this.ride = !this.ride;
    console.log(this.ride);
  })
    this.obj.setAttribute("position",{x:x,y:y,z:z});
    scene.append(this.obj); 

  }
   balloonRide(){


      // check for distance/click and then ride
    if (this.ride){
		mainCursor.setAttribute("opacity", 0);
		this.cursor.setAttribute("opacity", 1);
      this.camera.setAttribute("active",true);
      camera.setAttribute("active",false);
     this.obj.object3D.position.y = this.camera.object3D.position.y -2;
     this.obj.object3D.position.x = this.camera.object3D.position.x;
     this.obj.object3D.position.z = this.camera.object3D.position.z;

      if(this.camera.object3D.position.y < 18){
        this.camera.object3D.position.y += 0.1; 
      }else if (this.camera.object3D.position.y == 18){
        this.camera.object3D.position.y +=0;
      }
    }//close if ride
  }//close balloonRide function
  balloonEnd(){
    //console.log(this.obj.object3D.position);
    if (this.down){
		this.ride = false;
      if(this.camera.object3D.position.y > 1){
        this.camera.object3D.position.y -= 0.1; 
		this.obj.object3D.position.y = this.camera.object3D.position.y-2;
       this.obj.object3D.position.x = this.camera.object3D.position.x;
       this.obj.object3D.position.z = this.camera.object3D.position.z;
	   camera.object3D.position.y = this.camera.object3D.position.y+1;
	   camera.object3D.position.x = this.camera.object3D.position.x;
	   camera.object3D.position.z = this.camera.object3D.position.z;
	   
      }else if (this.camera.object3D.position.y == 0.9999999999999992 ){
        this.camera.object3D.position.y +=0;
		this.camera.setAttribute("active",false);
        camera.setAttribute("active",true);
		mainCursor.setAttribute("opacity", 1);
		this.cursor.setAttribute("opacity", 1);

	   
		this.obj.object3D.position.y = 0.5;
		//console.log("at 1");
      }
    }//close if down
	} 
}//end balloon class

 
function distance(obj1,obj2){
  let x1 = obj1.object3D.position.x;
  let y1 = obj1.object3D.position.y;
  let x2 = obj2.object3D.position.x;
  let y2 = obj2.object3D.position.y;
  let z2 = obj2.object3D.position.z;

  let d = Math.sqrt(Math.pow(x1-x2,2) + Math.pow(y1-y2,2) + Math.pow(z1-z2,2));
  return d;
}
