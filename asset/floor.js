function floor(){}
floor={
	id:0,
	width:0,
	height:0,
	x:0,
	y:0,
	side:0,
    context:null,
    color:'#ffdf78',
	create:function(context,width,height,x,y,side){
		this.width = width;
		this.height = height;
		this.x=x;
		this.y=y;
		this.side = side;
		this.context = context;

	},
	update:function(){
		
	},
	draw:function(){

		this.context.beginPath();
		this.context.fillStyle=this.color;
		this.context.fillRect(this.x,this.y,this.width,this.height);
		this.context.save();
		this.context.restore()
		this.context.closePath();
		
	}
}


/*
	draw:function(){
		//	
	 		//this.context.beginPath();
        this.context.beginPath()
        this.context.fillStyle = "red";
		this.context.fillRect(40,40, 320, 320);
		 this.x =50;
		 this.y = 50;
		for(y = 0; y < 3; y++){

			for(x =0 ; x< 3;x++){
				this.context.beginPath()
				this.context.strokeStyle ="#000000";
				this.context.strokeRect(this.x,this.y, this.side, this.side,true);
				this.x+=this.side;
				this.context.save();
			}
			this.context.save();
			this.x=50;
			this.y+=this.side;
		}
	}

}
*/
