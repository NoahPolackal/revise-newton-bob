class Bob {
    constructor(x,y,r){
        var options={
            isStatic:false,
            friction:0.4,
            density:3,
            restitution:1.2,
        }
         this.body=Bodies.circle(x, y,r/2,options)
        this.r=r;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push ()
        translate(pos.x,pos.y);
        rotate (this.body.angle)
        fill (255);

        ellipseMode(CENTER);
        ellipse(0,0,this.r,this.r)
        pop ()
    }
}