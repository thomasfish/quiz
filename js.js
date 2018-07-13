function $(elem) {
  return document.getElementById(elem);
}

function playSound(clippath) {
  var sound = new Audio(clippath);
  sound.play();
}

function fullscreenit(element) {
  if(element.requestFullscreen) {
    element.requestFullscreen();
  } else if(element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if(element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen();
  } else if(element.msRequestFullscreen) {
    element.msRequestFullscreen();
  }
}

var focused = "fullscreen";
function fcs(panel) {
  $(focused).className = "";
  $(panel).className = "active";
  focused = panel;
}

fcs(focused);


function begin() {
  fullscreenit(document.documentElement);
  fcs("title");
}


var iam = 0;

function person(choice) {
  iam = choice;
  fcs("ftf");
}

function buzz() {
  playSound("buzzer" + iam + ".wav");
}


// WTP Stuff

var wtpRound = 0;
var wtpNextCardId = ["","",""];

var allyOrBetray = 0;

function wtp(round) {
  wtpRound = round;
  fcs("wtpChoice");
}

function lockIn(choice, round) {
  allyOrBetray = choice;
  playSound("ready.wav");
  $("choice").style.opacity = 0;
  setTimeout(function(){
    $("choice").style.display = "none";
    $("reveal").style.display = "block";
  }, 2000);
  setTimeout(function(){
    $("reveal").style.opacity = 1;
  }, 2500);
}

function reveal() {
  playSound("choice" + allyOrBetray + ".wav");
  $("reveal").style.opacity = 0;
  setTimeout(function(){
    $("choice").style.display = "block";
    $("reveal").style.display = "none";
  }, 2000);
  setTimeout(function(){
    $("choice").style.opacity = 1;
  }, 2500);
}
