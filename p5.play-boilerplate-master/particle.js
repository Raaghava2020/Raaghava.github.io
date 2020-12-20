class Particle{
    constructor(x,y,r){
        var options={
        
            retitution:0.4
        }
    	
		this.r=r
		this.body=Bodies.circle(this.x, this.y, this.r/2, options)
        this.color=this.color(random(0,255),random(0,255),random(0,255))
         World.add(world, this.body);

	}
    display()
    {
        var pos=this.body.position;
        var angle=this.body.angle;
        Push();
        translate(pos.x,pos.y);
        rotate(angle);
        noStroke();
        Fill(this.colour)
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r)
        Pop();
    }
}