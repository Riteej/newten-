class bob{
    constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:1,
			friction:0.5,
			density:0.5
			}

		this.r=r
		this.body=Bodies.circle(x,y, this.r, options); 
		
		World.add(world, this.body);

    }
    display()
	{	
		var pos=this.body.position;		
		push() 
			translate(pos.x,pos.y)
           rotate(this.body.angle)
			ellipseMode(RADIUS);
			fill("grey");
			ellipse(0, 0,this.r, this.r);
		pop()
	}

}