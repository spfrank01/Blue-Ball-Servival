<?php 
if(!empty($_POST['score'])){
    $score = $_POST['score'];  // รับค่าจากหน้าเว็บเข้ามา
    
    // save to file .txt
    echo 'Saved Score'. $score;
    $fname = "scoreBoard.txt";
    $file = fopen($fname, 'a');
    fwrite($file, $score."\n"."  ");
    fclose($file);
    
    // send to MySQL
    require ('config.php'); 
    $result = $mysqli->query("INSERT INTO `ScoreBoard` (`score`) VALUES ($score)");
    if($result){
        echo 'Score Inserted';
    } else {
        echo "Score Not Inserted";
    }
     
}

?>