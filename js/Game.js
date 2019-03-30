var Game = {
	isRunning : false,
	start : () => {
		Game.isRunning = true;
		window.requestAnimationFrame(Game.loop);
	},
	stop: () => {
		Game.isRunning = false;
	},
	pause: () => {
		Game.isRunning = false;
	},
	reset: () =>{
	},
	loop: () =>{
		Game.update();
		Game.draw();
		if(Game.isRunning){
			window.requestAnimationFrame(Game.loop);
		}
	},
	update: () =>{
		
	},
	draw: () =>{
	},	
}