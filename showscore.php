<?php
            require ('config.php');    
            //require ('connect.php');
            $topScore=array();
            if($result = $mysqli->query('SELECT * FROM `scoreboard` ORDER BY score DESC')) {
                if($result->num_rows){
                    $row = $result->fetch_all(MYSQLI_ASSOC); // เรียกค่าที่DB มาทั้งหมด
                    $i=0;
                    foreach ($row as $row) {
                        $topScore[]=$row['score'];
                        $i++;
                        if($i>=10){
                            break;
                        }
                    }
                    echo json_encode($topScore);
                    /*if(isset($_GET['index'])){
                        $index = $_GET['index'];
                    }
                    else{
                        $index = 0;
                    }
                    
                    if( isset($_GET['requestByAjax']) ){
                        echo json_encode( array(
                            'data1' => $topScore[$index]
                        ));
                    }
                    else {
                        echo $topScore[$index];
                    }
                    */
                    //echo ($topScore);
                    //echo json_decode($topScore);
                    
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