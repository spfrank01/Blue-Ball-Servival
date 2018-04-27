<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
        <meta charset="UTF-8">
        <title>index</title>
    </head>
    <body>
        <?php
            require ('config.php');    
            //require ('connect.php');
            
            if($result = $mysqli->query('SELECT * FROM `scoreboard`')) {
                if($result->num_rows){
                    $row = $result->fetch_all(MYSQLI_ASSOC); // เรียกค่าที่DB มาทั้งหมด
                    foreach ($row as $row) {
                        echo 'Score :  ',$row['score'],'<br>';
                    }
                    //$row = $result->fetch_object();
                    /*while ($row = $result->fetch_assoc()){
                        echo $row['score'],'<br>';
                    }*/                    
                } else{
                    echo 'No information';
                }
            } else{
                die($mysqli->error);
            }            
        ?>
    </body>
</html>
