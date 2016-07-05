game = function(){

}
game.prototype = {
	id : "canvas",
	name:"ex-5",
	x:0,
	y:0,
	width:0,
	height:0,
	frame:0,
	context: null,
	canvasHsl:null,
	player:[],
	obstacle:"",
	start: false,

	init:function(width, height){
		var canvas  = document.createElement('canvas');
		this.width = width;
		this.height= height;
		canvas.width = width;
		canvas.height= height;
		canvas.id=this.id;
		canvas.style.background="#50b3ff";
		canvas.style.border= "2px solid #000";
		this.x = (document.body.clientWidth/2) - (canvas.width/2);
		this.x = 0;
		canvas.style.left= this.x;
		canvas.style.position = "relative";
		this.canvasHsl = canvas;
		this.context = this.canvasHsl.getContext("2d");
		document.body.appendChild(this.canvasHsl);
		floor.create(this.context, this.width,100,0,this.height-100,100);
		
		this.initPlay();
		this.initObstacle();
		
		inputmanage.create(this.id);
		this.draw();

		status
		this.frame = 1;
		window.requestAnimationFrame(this.loop);
	},	
	loop:function(){
		
		if(this.start == true){
			game.update();
		}else{
			
			if(code != undefined){
				console.log(code);
				if(code == 32 && this.start == false){
					console.log(code);
					this.start= true;
				}
			}
		}
		
		game.draw();
		requestAnimationFrame(function(){game.loop();});
	},
	update:function(){
		this.context.clearRect(0,0,this.width,this.height);
		this.frame++;
		floor.update();
		this.player[0].evt(code);
		code=0;
		this.player[0].update();
		this.obstacle.update();
		if(this.collision(this.obstacle._obj) != undefined && this.collision(this.obstacle._obj) == true){
			console.log( "|--->"+ this.start);
			this.start = false;
		}
	},
	draw:function(){

		floor.draw();
		this.player[0].draw();
		this.obstacle.draw();
		
		
	},
	collision:function(arrObj){
		return this.player[0].collision(arrObj);
	},

	initPlay:function(){
		this.player[0] = new Player();
		this.player[0].create(this.context,100,100,50,0,40);
	},
	initObstacle:function(){
		this.obstacle = new Obstacle();
		this.obstacle.init(this.context, this.width, this.height, floor.width, floor.height);
		this.obstacle.insertRectDowSide();
		this.obstacle.insertRectUpSide();
				
	}

}
	