var starttime, dt;

function waitpage() {
	background(238, 233, 233);
	//background(142, 229, 238);
	textSize(30);
	drawBlueBall();
	fill(0);
	stroke('#52c8cc');
	if (millis() < (0.25 * dt + starttime)) {
		text("3", 0.5 * width, 0.5 * height);
	} else if (millis() < (0.50 * dt + starttime)) {
		text("2", 0.5 * width, 0.5 * height);
	} else if (millis() < (0.75 * dt + starttime)) {
		text("1", 0.5 * width, 0.5 * height);
	} else if (millis() < dt + starttime) {
		text("GO...", 0.5 * width, 0.5 * height);
	} else {
		setDefaultPlayGamePage();
		page="playgame"; // go to play game page when time now > time out
	}
}

function setTimeOutWaitPage(t, tout) {
	starttime = t;
	dt=tout-t;
}