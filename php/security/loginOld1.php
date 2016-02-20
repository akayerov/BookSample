<?php

require "../db/db.php";
//require("PassHash.php");
//session_start();
/*
$userName = $_POST['user'];
$pass = $_POST['password'];
$result['success'] = true;
$result['msg'] = $userName;
*/

$sql = "SELECT * FROM USER WHERE userName='$userName'";
if ($resultDb = $mysqli->query($sql)) {
  $count = $resultDb->num_rows; //#11
  if($count==1){
    $record = $resultDb->fetch_assoc();
    if ($record['password'] = $pass)){
      $_SESSION['authenticated'] = "yes";
      $_SESSION['username'] = $userName;
      $result['success'] = true;
      $result['msg'] = 'User authenticated!';
    } else{
      $result['success'] = false;
      $result['msg'] = 'Incorrect password.';
    }
  } else {
    $result['success'] = false;
    $result['msg'] = 'Incorrect user or password.';
  }
  $resultDb->close();
//  $mysqli->close();

  echo json_encode($result); //
?>
