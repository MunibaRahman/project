class Grass{
	constructor(x,z){
		this.x = x;
		this.z = z;
		
		this.obj = document.createElement("a-entity")

	 for(let i = 0; i < 10; i++){
		let r = rnd(0.8,1.8);
		let grass = document.createElement("a-gltf-model");
		grass.setAttribute("src", "#grass")
		grass.setAttribute("scale", `1 ${r} 1`);
		grass.setAttribute("position",{x:-10 + 1 * i,y:0,z:0});
		
		this.obj.append(grass);
	 }
	 for(let i = 0; i < 10; i++){
		let r = rnd(0.8,1.8);
		grass = document.createElement("a-gltf-model");
		grass.setAttribute("src", "#grass")
		grass.setAttribute("scale", `1 ${r} 1`);
		grass.setAttribute("position",{x:-10 + 1 * i,y:0,z:1});

		
		this.obj.append(grass);
	 }
	 	 for(let i = 0; i < 10; i++){
		let r = rnd(0.8,1.8);
		grass = document.createElement("a-gltf-model");
		grass.setAttribute("src", "#grass")
		grass.setAttribute("scale", `1 ${r} 1`);
		grass.setAttribute("position",{x:-10 + 1 * i,y:0,z:2});

		
		this.obj.append(grass);
	 }
	 	 for(let i = 0; i < 10; i++){
		let r = rnd(0.8,1.8);
		grass = document.createElement("a-gltf-model");
		grass.setAttribute("src", "#grass")
		grass.setAttribute("scale", `1 ${r} 1`);
		grass.setAttribute("position",{x:-10 + 1 * i,y:0,z:3});

		
		this.obj.append(grass);
	 }
	 	 for(let i = 0; i < 10; i++){
		let r = rnd(0.8,1.8);
		grass = document.createElement("a-gltf-model");
		grass.setAttribute("src", "#grass")
		grass.setAttribute("scale", `1 ${r} 1`);
		grass.setAttribute("position",{x:-10 + 1 * i,y:0,z:4});

		
		this.obj.append(grass);
	 }
	 	 for(let i = 0; i < 10; i++){
		let r = rnd(0.8,1.8);
		grass = document.createElement("a-gltf-model");
		grass.setAttribute("src", "#grass")
		grass.setAttribute("scale", `1 ${r} 1`);
		grass.setAttribute("position",{x:-10 + 1 * i,y:0,z:5});

		
		this.obj.append(grass);
	 }
	 	 for(let i = 0; i < 10; i++){
		let r = rnd(0.8,1.8);
		grass = document.createElement("a-gltf-model");
		grass.setAttribute("src", "#grass")
		grass.setAttribute("scale", `1 ${r} 1`);
		grass.setAttribute("position",{x:-10 + 1 * i,y:0,z:6});

		
		this.obj.append(grass);
	 }
	 	 for(let i = 0; i < 10; i++){
		let r = rnd(0.8,1.8);
		grass = document.createElement("a-gltf-model");
		grass.setAttribute("src", "#grass")
		grass.setAttribute("scale", `1 ${r} 1`);
		grass.setAttribute("position",{x:-10 + 1 * i,y:0,z:7});

		
		this.obj.append(grass);
	 }
	 	 for(let i = 0; i < 10; i++){
		let r = rnd(0.8,1.8);
		grass = document.createElement("a-gltf-model");
		grass.setAttribute("src", "#grass")
		grass.setAttribute("scale", `1 ${r} 1`);
		grass.setAttribute("position",{x:-10 + 1 * i,y:0,z:8});

		
		this.obj.append(grass);
	 }
	 	 for(let i = 0; i < 10; i++){
		let r = rnd(0.8,1.8);
		grass = document.createElement("a-gltf-model");
		grass.setAttribute("src", "#grass")
		grass.setAttribute("scale", `1 ${r} 1`);
		grass.setAttribute("position",{x:-10 + 1 * i,y:0,z:9});

		
		this.obj.append(grass);
	 }    
		scene.append(this.obj);
	}

	disappear(){
		this.obj.remove;
	  }
}

