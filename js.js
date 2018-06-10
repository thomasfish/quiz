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

var focused = "wtp1";
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
