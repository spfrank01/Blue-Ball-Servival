var topscore;
var page;
var carry, fr;
var showLastScore;
var showGameOverPage;
function setup() {
	createCanvas(1024,576);
	setSerialPort();
    //getScore();
	page="menu";
	carry=0;
	showLastScore=false;
	fr=30;
	frameRate(fr);
	playSound();
}

function draw() {
  
    //httpGet("showscore.php", 1,"text",  alert(this.$topScore));
    //alert(result[0].length);
    //text(score10,10,10);
	switchPage();
	if(page==="menu"){
		menupage();
	} else if(page==="wait"){
		waitpage();
	} else if(page==="playgame"){
		playgamepage();
	} else if(page==="gameover"){
		gameoverpage();
	} else {
		text("ERROR \n cannot select page", width/2, height/2);
	}
	textSize(12);
	text("  Status : "+page+"  input "+getArduino(), width/2, 0.9*height);
    
}

function switchPage(){
	if(getArduino()==="up" && carry===0){
		carry=1;
		if(page==="menu"){
			page="wait";
			setTimeOutWaitPage(millis(), millis()+3000);
			setBlueBall();
		} else if(page==="wait"){
		} else if(page==="playgame"){
		} else if(page=="gameover"){
            if(millis()>showGameOverPage){
                page="menu";
                location.reload(); 
            }
			showLastScore=true;
		} else {	
			page="menu";
		}
	} else if(getArduino()==="down"){
		carry=0;
	}
}