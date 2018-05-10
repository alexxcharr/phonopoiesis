var socket;
var wave;
var env;
var amp;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background (50);

	env = new p5.Env();
	env.setADSR(0.05, 0.1, 0.5, 0.1);
	env.setRange(0.8, 0);
	wave = new p5.Oscillator('sine');
	wave.amp(env);
	wave.start();
	amp = new p5.Amplitude();

	socket = io.connect('http://localhost:3000');	//open connection to the server
	socket.on('mouse', newDrawing);
	socket.on('space', newSine);
}

function newDrawing(data) { //when msg recieved draw
	noStroke();
	fill(255, 0, 100);
	ellipse(data.x, data.y, 50, 50);
}

function newSine(data2) {
	env.play();
	console.log("the sine is playing");
}

function keyPressed() {

	var data2 = {
		message: "spaceship"
	}
		socket.emit('space', data2);	//message name

		if (keyCode === 32) {
			env.play();
		}
}

function mouseDragged() {	//sending msg n drawing
	console.log('Sending: ' + mouseX + ',' + mouseY);

	var data = {		//message content
		x: mouseX,
		y: mouseY
	}

	socket.emit('mouse', data);	//message name

	noStroke();
	fill(255);
	ellipse(mouseX, mouseY, 50, 50);
}

function draw() {

}
