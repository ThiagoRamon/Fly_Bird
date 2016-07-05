//function InputManage(){}
var keystate={};
var x; var y;
var code;
//var keyl;
inputmanage = {
 	keys:{},
 	x:0,
 	y:0,
 	create:function (idcanvas){
 		//document.addEventListener('keydown', this.onKeyDown, true);
		document.addEventListener('keyup', this.onKeyUp, true);
 		//console.log(document.getElementById(idcanvas));
 		//document.getElementById(idcanvas).addEventListener("mousemove", this.onMouseMove,true);
 		//document.getElementById(idcanvas).addEventListener("mouseup", this.onMouseUp,true);
 		//document.getElementById(idcanvas).addEventListener("mousedown", this.onMouseDown,true);
 		//document.getElementById(idcanvas).addEventListener("click", this.onEventClick,true);
 	},

	onKeyDown:function(event){
		var code  = event.keyCode;
		keystate[code] =true;
	    //console.log(keystate);

	},
	onKeyUp : function(event){
		 code  = event.keyCode;
		 keystate[code] =true;

		 delete keystate[code];
		 //console.log(keystate);
	},
 	onEventClick :function(){

 		this.x = event.clientX;
 		this.y = event.clientY;
 		x = this.x;
 		y = this.y;

 	},
 	onMouseMove:function(event){
 		
 		this.x = event.clientX;
 		this.y = event.clientY;
 		x = this.x;
 		y = this.y;
 		console.log("[", this.x," , ", this.y ,"]");
 		
 	},
 	onMouseUp:function(event){
 		console.log(event.screenX);
 		this.x = event.clientX;
 		this.y = event.clientY;
 		x = this.x;
 		y = this.y;
 		//console.log("[", this.x," , ", this.y ,"]");
 		
 	}
 	,
 	onMouseDown:function(event){
 		console.log(event.screenX);
 		this.x = event.clientX;
 		this.y = event.clientY;
 		x = this.x;
 		y = this.y;
 		//console.log("[", this.x," , ", this.y ,"]");
 		
 	}
}

