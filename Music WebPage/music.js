var mySong = document.getElementById("mySong");
var icon = document.getElementById("icon");

icon.onclick = function () {
  if (mySong.paused) {
    mySong.play();
    icon.src = "/media/circlepause.png";
  } else {
    mySong.pause();
    icon.src = "/media/circleplay.png";
  }
};
