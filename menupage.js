var top;
function menupage(){
	background(238, 233, 233);
	// loadImage("background/img.jpg", function(img) {
 //   	image(img, 0, 0, width, height);
 // 	});
	fill(0);
	stroke('#52c8cc');
	textSize(60);
	text("Blue Ball Survival", 0.27*width, 0.2*height);
	textSize(40);
	text("Play Game", 0.15*width, 0.5*height);
	textSize(25);
    if(showLastScore){
		text("Last Score : "+score, 0.17*width, 0.6*height);
	}
    textSize(35);
	text("TOP 10", 0.78*width, 0.4*height);
    textSize(20);
//    text(scoretop10, 200,100);
//    for(i=0;i<scoretop10.length;i++){
//        text(" "+i+".", 0.8*width,0.4*height+0.05*height*i);
//        text("      "+scoretop10[i], 0.8*width,0.4*height+0.05*height*i);
//    }
    var myStrArr = splitTokens(result[0], '","');
    for(i=1;i<myStrArr.length-1;i++){
        text(" "+i+".", 0.8*width,0.4*height+0.05*height*i);
        text("      "+myStrArr[i], 0.8*width,0.4*height+0.05*height*i);
    }
    ellipse( 0.25*width, 0.7*height, 0.1*height, 0.1*height);
    //findArrayScore();
    //CallScore();
    //var humidity = scoretop10.main.humidity;
    //text(scoretop10.main.humidity;+"s    ", 100,100);
    //alert(data1[1]); 

}