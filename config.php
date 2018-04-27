<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$mysqli = new mysqli('localhost','root','','mydb');
if($mysqli->connect_errno){
    echo 'connect database failed',$mysqli->connect_error;
} else{
    //echo "Connect Database Success";
}
?>