class Grass{
	constructor(x,z){
		this.x = x;
		this.z = z;
		
		let r = rnd(0.8,1.8);
		this.obj = document.createElement("a-gltf-model");
		this.obj.setAttribute("src", "#grass")
		this.obj.setAttribute("scale", `1 ${r} 1`);
		this.obj.setAttribute("position",{x:x ,y:0,z:z});
		
		scene.append(this.obj);
	 }
disappear(){
  this.obj.remove;
}
		
	}
