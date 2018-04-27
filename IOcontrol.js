var serial; // variable to hold an instance of the serialport library
var portName = 'COM4'; // fill in your serial port name here
var inByte;
var options = {
  baudrate: 9600
};

var scoretop10;
var result;
function getArduino(){
	if(inByte===1 || key==='w'){
		return "up";
	} else if(inByte===0 || key==='s'){
		return "down";
	} else {
		return "not";
	}
}

function setSerialPort() {
  serial = new p5.SerialPort(); // make a new instance of the serialport library
  serial.on('data', serialEvent); // callback for when new data arrives
  serial.open(portName, options); // open a serial port
  serial.clear();
}

function serialEvent() {
  // read a byte from the serial port:
  inByte = int(serial.read());
}

function sendScore(){
	$.ajax({
		type: 'POST',
		url: 'connect.php',
		data: {'score': score }
	});
}
function preload() {
  	//mySound = loadSound('sound/01.mp3');
  	menuSound = loadSound('sound/Spy Hunter.mp3');
  	//playgmaeSound = loadSound('sound/8-bit-Symphony-preview.mp3');
    result = loadStrings('showscore.php');
    
  	
}

function playSound(){

        menuSound.setVolume(1);
        menuSound.play();
        menuSound.loop();
    
//        playgmaeSound.setVolume(1);
//        playgmaeSound.play();
//        playgmaeSound.loop();


}

function getScore(){
    $(document).ready(function(){
    $.ajax({
        url: "showscore.php",
        dataType: 'json',
        success: function(data) {
        scoretop10=[];
          //alert(scoretop10.length);
        for(i=0;i<data.length;i++){
            scoretop10[i]=data[i]; 
            //alert(scoretop10[i]);
        }
          //alert(scoretop10.length);
        },
        error: function() {
          alert("error get score");
        }
    });        
    });
}


function findArrayScore(){
    //scoretop10=[];
    for(i=0;result[0].length;i++){
        text(result[0][i], 200, i*5);
    }
}
