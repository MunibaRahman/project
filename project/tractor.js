class Tractor{
  constructor(x,y,z){
    this.x = x;
    this.y = y;
    this.z = z;
    this.ride = false;
   

  this.obj = tractorOrig.cloneNode(true);
  this.obj.setAttribute("position","0 -2 0");
  this.camera = document.createElement("a-camera");
  this.camera.setAttribute("position",{x:x,y:y,z:z});
  this.camera.setAttribute("active", "false");
  this.camera.setAttribute("wasd-controls-enabled", "true");

  this.camera.append(this.obj);
  this.cursor = document.createElement("a-cursor");
  this.camera.append(this.cursor);
    this.obj.setAttribute("clickable","");
    this.obj.addEventListener("click", ()=>{
    this.camera.setAttribute("active",true);
    console.log("this.ride is true");
  })
    
    scene.append(this.camera);

  }
  
}
