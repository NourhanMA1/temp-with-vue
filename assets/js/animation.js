let zokicharecter = bodymovin.loadAnimation({
  container: document.getElementById("zokicharecter"),
  path: "assets/animations/zoki/data.json",
  renderer: "svg",
  loop: true,
  autoplay: false,
});

let robots = bodymovin.loadAnimation({
  container: document.getElementById("robots"),
  path: "assets/animations/robots/data.json",
  renderer: "svg",
  loop: false,
  autoplay: true,
});
robots.goToAndStop(0, false);

zokicharecter.goToAndStop(0, false);
// zokicharecter.playSegments([0, 80], true);

let zokihappy = bodymovin.loadAnimation({
  container: document.getElementById("zokihappy"),
  path: "assets/animations/zoki/data.json",
  renderer: "svg",
  loop: true,
  autoplay: true,
  initialSegment: [50, 90],
});

let zokisad = bodymovin.loadAnimation({
  container: document.getElementById("zokisad"),
  path: "assets/animations/zoki/data.json",
  renderer: "svg",
  loop: true,
  autoplay: true,
  initialSegment: [98, 140],
});

let progressbar = bodymovin.loadAnimation({
  container: document.getElementById("progressbar"),
  path: "assets/animations/progressbar/data.json",
  renderer: "svg",
  loop: false,
  autoplay: false,
});

console.log(progressbar)