var BBall, enemy;
var time, score, enemySpeed, maxEnemy, enemyR, live, nextEnemy, count, level;

function playgamepage() {
	background(238, 233, 233);
	//background(238, 233, 233);
	// loadImage("background/img.jpg", function(img) {
 //   	image(img, 0, 0, width, height);
 // 	});
	textSize(30);
	drawBlueBall();
	drawEnemyBall();
	drawData();

}

function setDefaultPlayGamePage() {
	setDefault();
	//setBlueBall();
	setEnemyBall();
}
function setDefault(){
	// set other
	time = 0;
	score = 0;
	maxEnemy = 30;
	enemySpeed = speed = width/60;
	live = liveSet = 1 ;
	nextEnemy = millis();
	count = 0;
	level=0;
	immortal=millis()+1000;
}

function setBlueBall(){
	// set Blue Ball
	BBall = [];
	BBall[0] = x1 = height*0.05;
	BBall[1] = y1 = height / 2;
	BBall[2] = r1 = height*0.03;
	BBall[3] = move1 = height / fr;
}
function setEnemyBall(){
	// set Enemy Ball
	enemyR = height*0.03;
	enemy = [];
	for (var i = 0; i < maxEnemy; i++) {
		enemy[i] = []; // [0] x, [1] y, [2] type, [3] r, [4] die, [5] speed per frame
		enemy[i][0] = width; // x
		enemy[i][1] = random(enemyR, height - enemyR); //y
		enemy[i][2] = int(random(-1, 3));
		enemy[i][4] = 0;
		if (enemy[i][2] === 0) { // black ball
			enemy[i][3] = enemyR;
			enemy[i][5] = enemySpeed;
		} else if (enemy[i][2] === 1) { // green ball
			enemy[i][3] = 0.65 * enemyR;
			enemy[i][5] = 1.5 * enemySpeed;
		} else if (enemy[i][2] === 2) { // red ball
			enemy[i][3] = 2 * enemyR;
			enemy[i][5] = 0.9 * enemySpeed;
		}
	}
}

function drawBlueBall() {
	strokeWeight(1);
	// move if put up or down
	if (getArduino() === "up") {
		BBall[1] -= BBall[3];
		if (BBall[1] < BBall[2]) {
			BBall[1] = BBall[2];
		}
	} else if (getArduino() === "down") {
		BBall[1] += BBall[3];
		if (BBall[1] > (height - BBall[2])) {
			BBall[1] = (height - BBall[2]);
		}
	}
	stroke(0, 245, 255);
	fill('#2ee0e6');
	ellipse(BBall[0], BBall[1], 2 * BBall[2], 2 * BBall[2]);
}

function drawEnemyBall() {
	strokeWeight(2);
	if (millis() >= nextEnemy) {
		count++;
		if(count>=20){
			count=0;
			level++;  // level up per 1 loop enemy
		}
		enemy[count][4] = 1;
		nextEnemy = millis() + random(400, 800);
	}
	for (var i = 0; i < maxEnemy; i++) {
		if(enemy[i][4]===1){
			if (enemy[i][2] === 0) {	//draw black ball
                stroke(0);
                fill('#1a1515');
                ellipse(enemy[i][0], enemy[i][1], 2 * enemy[i][3], 2 * enemy[i][3]);
			} else if (enemy[i][2] === 1) {	//draw green ball
                stroke(127, 255, 0);
                fill('#8ae62e');
                ellipse(enemy[i][0], enemy[i][1], 2 * enemy[i][3], 2 * enemy[i][3]);
			} else if (enemy[i][2] === 2) {	//draw rad ball
			    stroke(238, 44, 44);
			    fill(213, 82, 82);
                var sinMove = enemy[i][1]+0.1*height*sin(0.002*PI*(width-enemy[i][0])); // y+0.15*height*sin(PI*x)
                ellipse(enemy[i][0], sinMove, 2 * enemy[i][3], 2 * enemy[i][3]);
			}
			enemy[i][0]-=pow(1.1, level)*enemy[i][5];
			// check after enemy move
			checkDie(i);
			checkCrash(i);
		}
	}
}

function drawData(){
	fill(0);
	stroke('#52c8cc');
	text("Live : "+live+"   Level : "+level+"   Score :"+score,0.05*width, 0.1*height);
}

function checkDie(p){
	if (enemy[p][0] + enemy[p][3] < 0) {
		score += 1;
		backSide(p, enemy[p][3]);
	}
}

function checkCrash(p){
	if( sqrt(sq(BBall[0]-enemy[p][0]) + sq(BBall[1]-enemy[p][1])) < (BBall[2]+enemy[p][3]) && millis()>immortal){
		live--;
		checkGameOver();
		backSide(p, enemy[p][3]);
		immortal=millis()+1000; // immortal 1000ms after crash
	}
}

function backSide(p, r) {
	enemy[p][4] = 0;
	enemy[p][0] = width;
	enemy[p][1] = random(r, height - r);
}

function checkGameOver(){
	if(live<=0){
        sendScore();
        showGameOverPage=millis()+200;
		page="gameover";
	}
}