function $(elem) {
  return document.getElementById(elem);
}

function playSound(clippath) {
  var sound = new Audio(clippath);
  sound.play();
}

var focused = "title";
function fcs(panel) {
  $(focused).className = "";
  $(panel).className = "active";
  focused = panel;
}

fcs(focused);

var iam = [];

function person(choice) {
  iam = choice;
  fcs("ftf");
}
