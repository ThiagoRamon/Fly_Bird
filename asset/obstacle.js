Obstacle = function(){}
Obstacle.prototype={
	_obj:[],
	context:"",
	canvW:0,
	canvH:0,
	floorW:0,
	floorH:0,
	init:function(context, canvW, canvH, floorW, floorH){
		this.context= context;
		this.canvH  = canvH;
		this.canvW  = canvW;
		this.floorW = floorW;
		this.floorH = floorH;
	},
	insert:function(obj){
		this._obj.push(obj);
	},
	insertRectDowSide:function(){
		
		ret = new Retangle();
		H = Math.floor(Math.random() * 150);
		W = 80;
		X = this.canvW  - W; 
		Y = (this.canvH - H)-this.floorH;
		ret.create(this.context, W, H, X,Y);
		this.insert(ret);

		
	},
	insertRectUpSide:function(){
	
		ret = new Retangle();
		H = Math.floor(Math.random() * 150);
		W = 80;
		X = this.canvW  - W; 
		Y = 0;
		ret.create(this.context, W, H, X,Y);
		this.insert(ret);
	},

	delete:function(index){
		this._obj.splice(index, 1);
	},

	draw:function(){
		for(i=0; i < this._obj.length; i++){
			this._obj[i].draw();
		}	
	},
	update:function(){
	    side = -1;
		for(i=0; i < this._obj.length; i++){
			this._obj[i].update();
			if(this._obj[i].x <= -this._obj[i].width){
				if(this._obj[i].y == 0){
					side = 0;
					this.insertRectUpSide();
					
				}else{
					side = 1;
					this.insertRectDowSide();

				}
				this.delete(i);
				
			}
		}

	}

}