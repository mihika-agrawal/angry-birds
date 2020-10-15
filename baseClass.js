class Base {

constructor(x,y,w,h,a){
var options={
'friction':0.8,
'density':1.0, 
'restitution':0.5
}

this.body=Bodies.rectangle(x,y,w,h,options);
this.width=w;
this.height=h;
this.image=loadImage("sprites/base.png");
World.add(world,this.body);
}

display(){

    var p=this.body.position;
    var angle= this.body.angle;
    push();
    translate(p.x,p.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image,0,0,this.width,this.height);  
    pop();

}

}