var synthA = new Tone.Synth({
  oscillator : {
  	type : 'triangle'
  },
  envelope : {
  	attack : 0.2,
    decay : 0.2,
    sustain: 0.4,
    release: 0.4
  }
}).toMaster()

var synthB = new Tone.Synth({
  oscillator : {
  	type : 'sine'
  },
  envelope : {
  	attack : 0.2,
    decay : 0.2,
    sustain: 0.4,
    release: 0.4
  }
}).toMaster()

var synthC = new Tone.Synth({
  oscillator : {
  	type : 'sine'
  },
  envelope : {
  	attack : 0.2,
    decay : 0.2,
    sustain: 0.4,
    release: 0.4
  }
}).toMaster()


var a=0;
var loopy = new Tone.Loop(function(time){
  if ((a%8 == 1) && ($('#00').attr('class') == 'button-large pure-button buttonContainer0 clicked')) {
    synthA.triggerAttackRelease("C4", "8n", time)
  }
  if ((a%8 == 2) && ($('#01').attr('class') == 'button-large pure-button buttonContainer0 clicked')) {
    console.log("2 dont play")
    synthA.triggerAttackRelease("C4", "8n", time)
  }
  if ((a%8 == 3) && ($('#02').attr('class') == 'button-large pure-button buttonContainer0 clicked')) {
    synthA.triggerAttackRelease("C4", "8n", time)
  }
  if ((a%8 == 4) && ($('#03').attr('class') == 'button-large pure-button buttonContainer0 clicked')) {
    synthA.triggerAttackRelease("C4", "8n", time)
  }
  if ((a%8 == 5) && ($('#04').attr('class') == 'button-large pure-button buttonContainer0 clicked')) {
    synthA.triggerAttackRelease("C4", "8n", time)
  }
  if ((a%8 == 6) && ($('#05').attr('class') == 'button-large pure-button buttonContainer0 clicked')) {
    synthA.triggerAttackRelease("C4", "8n", time)
  }
  if ((a%8 == 7) && ($('#06').attr('class') == 'button-large pure-button buttonContainer0 clicked')) {
    synthA.triggerAttackRelease("C4", "8n", time)
  }
  if ((a%8 == 0) && ($('#07').attr('class') == 'button-large pure-button buttonContainer0 clicked')) {
    synthA.triggerAttackRelease("C4", "8n", time)
  }
  a++;
}, "8n").start(0);  //stepSequencerA
Tone.Transport.start();

$('input.buttonContainer0').click(function(){ //input stepSequencerA
  $(this).toggleClass('clicked');
});


var b=0;
var loopy = new Tone.Loop(function(time){
  if ((b%8 == 1) && ($('#10').attr('class') == 'button-large pure-button buttonContainer1 clicked')) {
    synthB.triggerAttackRelease("C1", "8n", time)
    console.log('geia')
  }
  if ((b%8 == 2) && ($('#11').attr('class') == 'button-large pure-button buttonContainer1 clicked')) {
    console.log("2 dont play")
    synthB.triggerAttackRelease("C1", "8n", time)
  }
  if ((b%8 == 3) && ($('#12').attr('class') == 'button-large pure-button buttonContainer1 clicked')) {
    synthB.triggerAttackRelease("C1", "8n", time)
  }
  if ((b%8 == 4) && ($('#13').attr('class') == 'button-large pure-button buttonContainer1 clicked')) {
    synthB.triggerAttackRelease("C1", "8n", time)
  }
  if ((b%8 == 5) && ($('#14').attr('class') == 'button-large pure-button buttonContainer1 clicked')) {
    synthB.triggerAttackRelease("C1", "8n", time)
  }
  if ((b%8 == 6) && ($('#15').attr('class') == 'button-large pure-button buttonContainer1 clicked')) {
    synthB.triggerAttackRelease("C1", "8n", time)
  }
  if ((b%8 == 7) && ($('#16').attr('class') == 'button-large pure-button buttonContainer1 clicked')) {
    synthB.triggerAttackRelease("C1", "8n", time)
  }
  if ((b%8 == 0) && ($('#17').attr('class') == 'button-large pure-button buttonContainer1 clicked')) {
    synthB.triggerAttackRelease("C1", "8n", time)
  }
  b++;
}, "8n").start(0);  //stepSequencerB
Tone.Transport.start();

$('input.buttonContainer1').click(function(){ //inout stepSequencerB
  $(this).toggleClass('clicked');
});


var c=0;
var loopy = new Tone.Loop(function(time){
  if ((c%8 == 1) && ($('#20').attr('class') == 'button-large pure-button buttonContainer2 clicked')) {
    synthC.triggerAttackRelease("C4", "8n", time)
    console.log('geia')
  }
  if ((c%8 == 2) && ($('#21').attr('class') == 'button-large pure-button buttonContainer2 clicked')) {
    console.log("2 dont play")
    synthC.triggerAttackRelease("C4", "8n", time)
  }
  if ((c%8 == 3) && ($('#22').attr('class') == 'button-large pure-button buttonContainer2 clicked')) {
    synthC.triggerAttackRelease("C4", "8n", time)
  }
  if ((c%8 == 4) && ($('#23').attr('class') == 'button-large pure-button buttonContainer2 clicked')) {
    synthC.triggerAttackRelease("C4", "8n", time)
  }
  if ((c%8 == 5) && ($('#24').attr('class') == 'button-large pure-button buttonContainer2 clicked')) {
    synthC.triggerAttackRelease("C4", "8n", time)
  }
  if ((c%8 == 6) && ($('#25').attr('class') == 'button-large pure-button buttonContainer2 clicked')) {
    synthC.triggerAttackRelease("C4", "8n", time)
  }
  if ((c%8 == 7) && ($('#26').attr('class') == 'button-large pure-button buttonContainer2 clicked')) {
    synthC.triggerAttackRelease("C4", "8n", time)
  }
  if ((c%8 == 0) && ($('#27').attr('class') == 'button-large pure-button buttonContainer2 clicked')) {
    synthC.triggerAttackRelease("C4S", "8n", time)
  }
  c++;
}, "8n").start(0);  //stepSequencerC
Tone.Transport.start();

$('input.buttonContainer2').click(function(){ //input stepSequencerC
  $(this).toggleClass('clicked');
});
