<?php
  $db ="sakila";
  $server = "127.0.0.1";
  $user = "root";
  $pass = "1234";
  $mysqli = new mysqli($server, $user, $pass, $dbName);
  /* check connection */
  if ($mysqli->connect_errno) {
    printf("Connect failed: %s\n", mysqli_connect_error());
    exit();
  }
?>
