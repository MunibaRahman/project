class Corn{
	constructor(x,z){
		this.x = x;
		this.z = z;
		this.obj = document.createElement("a-box")
		this.obj.setAttribute("height", 4);
		this.obj.setAttribute("position",{x:x,y:0,z:z});
		this.obj.setAttribute("opacity", "0")
		this.obj.setAttribute("static-body", "");
	
		let corn = document.createElement("a-gltf-model");
		corn.setAttribute("src", "#corn");
		this.obj.append(corn);
		scene.append(this.obj);
	}
}