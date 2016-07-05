Retangle = function(){}
Retangle.prototype={
	id:'',
	name:'',
	width:0,
	height:0,
	arrColor:["green","red","blue","#fff123", "#fff023","#09f023"],
	color:'',
	speed:2,
	create:function(context,width,height,x,y){
		this.name  = name;
		this.width = width ;// - Math.floor(Math.random * 50);
		this.height= height;// Math.floor(Math.random * 160);
		this.x = x;
		this.y = y;
		this.context = context;
		this.color = this.arrColor[Math.floor(Math.random()*6)];

	},
	draw:function(){
		this.context.beginPath();
		this.context.fillStyle=this.color;
		this.context.fillRect(this.x,this.y,this.width,this.height);
		this.context.save();
		this.context.closePath();
	},
	update:function(){
		this.x -=this.speed;
		//console.log(this.x);
	},

}