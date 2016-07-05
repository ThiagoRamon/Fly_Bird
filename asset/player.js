Player = function(){

}
Player.prototype={
	name:0,
	width:0,
	height:0,
	x:0,
	y:0,
	life:100,
	color:"#ff4e4e",
	context:null,
	gravity:0.3,
	velocity:0,
	powerjump:6,
    degree:0,
    angle:0,	
    side:0,

	create:function(context,width,height,x,y,side){
		this.context= context;
		this.width = width;
		this.height= height;
		this.x =x;
		this.y =y;
		this.side = side;
		//this.context.beginPath();
	},
	draw:function(){
		this.context.beginPath();
	    this.context.fillStyle = this.color;
	  	this.context.fillRect(this.x,this.y,this.side,this.side);
		this.context.save();
		this.context.restore();
		this.context.closePath();
		
	},
	update:function(){
		this.velocity +=this.gravity;
		this.y+=this.velocity;
		//this.collision();
	
	},
	collision:function(arrObstacle){
		var r = false;
		if(this.y  > floor.y-this.side){

			this.y = floor.y-this.side;
			
			 
		}
		
		if(arrObstacle != undefined){
			arrColor = ["red","green", "blue"]
			for(i =0 ; i< arrObstacle.length ; i++){
				if((this.x + this.side)  > arrObstacle[i].x &&
				   (this.x ) <arrObstacle[i].x + arrObstacle[i].width &&
				   (this.y + this.side)  > arrObstacle[i].y && 
				   (this.y ) < arrObstacle[i].y + arrObstacle[i].height 
				   ){
					this.color = arrColor[Math.floor(Math.random() * arrColor.length)];
					r = true;
				}	
			}
		}
		
		return r;
	},
	jump:function(){
		this.angle = 45
		//this.degree =45;
		//this.context.style.transform ="rotate(90deg);"
		this.velocity = -this.powerjump;
	},
	evt:function(value){
		if(value == 32){
			this.jump();
		}
	}

};