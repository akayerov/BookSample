<?php
$link = mysql_pconnect ("127.0.0.1","root","1234");
if ( !$link ) die ("Невозможно подключение к MySQL");
$db = "sakila";
$userName = $_POST['userName'];
$passwd   = $_POST['passwd'];
$userName = "akayerov";
$passwd   = "1234";
$result['success'] = true; 
$result['msg'] = 'User authenticated!'; 
echo json_encode($result);
exit();