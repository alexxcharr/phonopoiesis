var wave;
var reverb;
var reverbRec;
var sR;
let shapes = [[]];
let array = [];
var users = [];
var waveRec;
var freq;
var freqRec;
var count;
var sessionid;



function setup() {
	createCanvas(windowWidth, windowHeight);
	background (50);
	waveRec = new p5.Oscillator();
	waveRec.setType('triangle');
	wave = new p5.Oscillator();
	wave.setType('triangle');
	wave.amp(0.5);
	wave.freq(300);
	reverb = new p5.Reverb();
	wave.disconnect();
	reverb.process(wave, 3, 2);
	socket = io.connect('http://localhost:3000');	//open connection to the server
	socket.on('connect',  function() {	//pou vgainei o solinas
  	sessionid = socket.id;
		console.log(sessionid);
	});
	socket.on('coo', newDrawing);	//when data comes draw
	socket.on('stop', stopWave);	//
	socket.on('arUsers', function (data) {	//
		for (let i = 0; i < data.length; i++) {
			users[i] = [data[i], new Shape(10, 10)];
		}
	});
}

function stopWave(data) {
	waveRec.stop();
}

function newDrawing(data) {
	waveRec.amp(0.8);
	freqRec = map(data.y, 100, 800, 0, windowHeight);
	waveRec.freq(freqRec);
	reverbRec = new p5.Reverb();
	waveRec.disconnect();
	reverb.process(waveRec, 3, 2);
	waveRec.start();
	console.log('sound');
	for (let i = 0; i <= users.length; i++) {
		console.log(users[i] + data.d);
		if (users[i][0] == String(data.d)) {
			users[i][1] = new Shape(data.x, data.y);
		}
	}
}

function draw() {

	background (50);
	for (let i = 0; i < array.length; i++) {
		array[i].show();
	}
	for (let i = 0; i < users.length; i++) {
		users[i][1].show();
	}
}

function mousePressed() {
	freq = map(mouseY, 100, 800, 0, windowHeight);
	wave.freq(freq);
	wave.start();
	let s = new Shape(mouseX, mouseY);
	array[0] = s;
	sendMouse(mouseX, mouseY, sessionid);
}

function mouseReleased() {
	wave.stop();
	var data = {
		m: 'stop',
	}
	socket.emit('stop', data);
}

function sendMouse(xpos, ypos, sessionid) {
	// console.log(xpos, ypos);
	var data = {
		x: xpos,
		y: ypos,
		d: sessionid
	}
	socket.emit('coo', data);
}

// function touchStarted() {
// 	freq = map(mouseY, 100, 800, 0, windowHeight);
// 	wave.freq(freq);
// 	wave.start();
// 	let s = new Shape(mouseX, mouseY);
// 	array[0] = s;
// 	sendMouse(mouseX, mouseY);
// }
//
// function touchEnded() {
// 	wave.stop();
// 	var data = {
// 		m: 'stop'
// 	}
// 	socket.emit('stop', data);
// }

function mouseDragged() {
	freq = map(mouseY, 100, 800, 0, windowHeight);
	wave.freq(freq);
	wave.start();
	let s = new Shape(mouseX, mouseY);
	array[0] = s;
	sendMouse(mouseX, mouseY);
}
//
// function touchMoved() {
// 	freq = map(mouseY, 100, 800, 0, windowHeight);
// 	wave.freq(freq);
// 	wave.start();
// 	let s = new Shape(mouseX, mouseY);
// 	array[0] = s;
// 	sendMouse(mouseX, mouseY);
// }
