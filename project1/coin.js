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
	this.obj.setAttribute("sound", {src: "#coinSound", loop:false})

  	 this.obj.addEventListener("click", ()=>{
		 this.sound = true;
		 this.collect();
		
  })
  
    scene.append(this.obj);    
  }

  collect(){
	  if(this.sound){
		  this.obj.components.sound.playSound();
	  }
    this.obj.setAttribute("opacity",0)
	
  }
}