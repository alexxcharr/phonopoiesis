var socket;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background (50);

	socket = io.connect('http://localhost:3000');	//open connection to the server
	socket.on('mouse', newDrawing);
}

function newDrawing(data) { //when msg recieved draw
	noStroke();
	fill(255, 0, 100);
	ellipse(data.x, data.y, 50, 50);
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
